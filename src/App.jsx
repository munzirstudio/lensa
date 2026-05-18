import { useState, useRef, useEffect } from 'react'
import { CHAPTERS } from './data/content'
import TopBar from './components/TopBar'
import LeftSidebar from './components/LeftSidebar'
import ContentArea from './components/ContentArea'
import RightSidebar from './components/RightSidebar'

export default function App() {
  const [activeChapterId, setActiveChapterId] = useState(0)
  const [activeExercise, setActiveExercise] = useState(null)
  const [rightSidebarOpen, setRightSidebarOpen] = useState(false)
  const [activeSectionId, setActiveSectionId] = useState(null)
  const mainRef = useRef(null)

  const activeChapter = CHAPTERS.find(c => c.id === activeChapterId)

  // Scroll-based TOC highlighting
  useEffect(() => {
    const container = mainRef.current
    if (!container || !activeChapter) return

    setActiveSectionId(activeChapter.readSections[0]?.id ?? null)

    const sectionIds = [
      ...activeChapter.readSections.map(s => s.id),
      ...activeChapter.activities.map(a => a.anchor),
      ...(activeChapter.resources.length > 0 ? ['resources'] : []),
    ]

    function handleScroll() {
      const containerTop = container.getBoundingClientRect().top
      let current = sectionIds[0]
      for (const id of sectionIds) {
        const el = container.querySelector(`#${id}`)
        if (!el) continue
        if (el.getBoundingClientRect().top - containerTop < 120) {
          current = id
        }
      }
      setActiveSectionId(current)
    }

    container.addEventListener('scroll', handleScroll, { passive: true })
    return () => container.removeEventListener('scroll', handleScroll)
  }, [activeChapterId, activeChapter])

  function activateExercise(chapterId, exerciseId) {
    // Toggle: clicking the already-active card collapses the sidebar
    if (
      activeExercise?.chapterId === chapterId &&
      activeExercise?.exerciseId === exerciseId
    ) {
      setRightSidebarOpen(false)
      setActiveExercise(null)
      return
    }
    setActiveExercise({ chapterId, exerciseId })
    setRightSidebarOpen(true)
  }

  function getActiveExerciseData() {
    if (!activeExercise) return null
    const chapter = CHAPTERS.find(c => c.id === activeExercise.chapterId)
    return chapter?.exercises.find(e => e.id === activeExercise.exerciseId) ?? null
  }

  function handleChapterClick(chapterId) {
    setActiveChapterId(chapterId)
    setActiveExercise(null)
    if (mainRef.current) {
      mainRef.current.scrollTop = 0
    }
  }

  function handleSectionClick(sectionId) {
    if (!mainRef.current) return
    const el = mainRef.current.querySelector(`#${sectionId}`)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="app">
      <TopBar
        rightSidebarOpen={rightSidebarOpen}
        onToggleSidebar={() => setRightSidebarOpen(prev => !prev)}
      />
      <div className="body-row">
        <LeftSidebar
          chapters={CHAPTERS}
          activeChapterId={activeChapterId}
          activeExercise={activeExercise}
          activeSectionId={activeSectionId}
          onChapterClick={handleChapterClick}
          onSectionClick={handleSectionClick}
        />
        <ContentArea
          ref={mainRef}
          chapter={activeChapter}
          activeExercise={activeExercise}
          onActivateExercise={activateExercise}
          onNextChapter={() => handleChapterClick(activeChapterId + 1)}
        />
        <RightSidebar
          open={rightSidebarOpen}
          exercise={getActiveExerciseData()}
        />
      </div>
    </div>
  )
}
