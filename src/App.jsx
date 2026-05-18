import { useState, useRef } from 'react'
import { CHAPTERS } from './data/content'
import TopBar from './components/TopBar'
import LeftSidebar from './components/LeftSidebar'
import ContentArea from './components/ContentArea'
import RightSidebar from './components/RightSidebar'

export default function App() {
  const [activeChapterId, setActiveChapterId] = useState(2)
  const [activeExercise, setActiveExercise] = useState(null)
  const [rightSidebarOpen, setRightSidebarOpen] = useState(true)
  const mainRef = useRef(null)

  const activeChapter = CHAPTERS.find(c => c.id === activeChapterId)

  function activateExercise(chapterId, exerciseId) {
    setActiveExercise({ chapterId, exerciseId })
    if (!rightSidebarOpen) setRightSidebarOpen(true)
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
      mainRef.current.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  function handleSectionClick(sectionId) {
    if (!mainRef.current) return
    const el = mainRef.current.querySelector(`#${sectionId}`)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
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
          onChapterClick={handleChapterClick}
          onSectionClick={handleSectionClick}
        />
        <ContentArea
          ref={mainRef}
          chapter={activeChapter}
          activeExercise={activeExercise}
          onActivateExercise={activateExercise}
        />
        <RightSidebar
          open={rightSidebarOpen}
          exercise={getActiveExerciseData()}
        />
      </div>
    </div>
  )
}
