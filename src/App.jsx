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

    let sectionIds = []
    if (activeChapter.type === 'library') {
      sectionIds = activeChapter.categories.map(c => c.id)
      setActiveSectionId(sectionIds[0] ?? null)
    } else if (activeChapter.type === 'glossary') {
      sectionIds = activeChapter.sections.map(s => s.id)
      setActiveSectionId(sectionIds[0] ?? null)
    } else {
      setActiveSectionId(activeChapter.readSections[0]?.id ?? null)
      sectionIds = [
        ...activeChapter.readSections.map(s => s.id),
        ...activeChapter.activities.map(a => a.anchor),
        ...(activeChapter.resources.length > 0 ? ['resources'] : []),
      ]
    }

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

  function activateExercise(chapterId, exerciseId, view = 'prompt') {
    // Toggle: same exercise + same view collapses the sidebar
    if (
      activeExercise?.chapterId === chapterId &&
      activeExercise?.exerciseId === exerciseId &&
      activeExercise?.view === view
    ) {
      setRightSidebarOpen(false)
      setActiveExercise(null)
      return
    }
    setActiveExercise({ chapterId, exerciseId, view })
    setRightSidebarOpen(true)
  }

  function getActiveExerciseData() {
    if (!activeExercise) return null
    const chapter = CHAPTERS.find(c => c.id === activeExercise.chapterId)
    const exercise = chapter?.exercises.find(e => e.id === activeExercise.exerciseId) ?? null
    return { exercise, view: activeExercise.view ?? 'prompt' }
  }

  function handleChapterClick(chapterId) {
    setActiveChapterId(chapterId)
    setActiveExercise(null)
    setRightSidebarOpen(false)
    if (mainRef.current) {
      mainRef.current.scrollTop = 0
    }
  }

  function handleNavigateToActivity(chapterId, exerciseId) {
    setActiveChapterId(chapterId)
    setActiveExercise(null)
    setRightSidebarOpen(false)
    if (mainRef.current) {
      mainRef.current.scrollTop = 0
    }
    setTimeout(() => {
      const chapter = CHAPTERS.find(c => c.id === chapterId)
      const activity = chapter?.activities.find(a => a.exerciseIds.includes(exerciseId))
      if (activity && mainRef.current) {
        const el = mainRef.current.querySelector(`#${activity.anchor}`)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 80)
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
          onNavigateToChapter={handleChapterClick}
          onNavigateToActivity={handleNavigateToActivity}
        />
        <RightSidebar
          open={rightSidebarOpen && activeChapter?.type !== 'glossary'}
          exercise={getActiveExerciseData()?.exercise ?? null}
          view={getActiveExerciseData()?.view ?? 'prompt'}
        />
      </div>
    </div>
  )
}
