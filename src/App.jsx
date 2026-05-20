import { useState, useRef, useEffect } from 'react'
import { CHAPTERS } from './data/content'
import TopBar from './components/TopBar'
import LeftSidebar from './components/LeftSidebar'
import ContentArea from './components/ContentArea'
import RightSidebar from './components/RightSidebar'
import mixpanel from './lib/mixpanel'

function parseHash() {
  const match = window.location.hash.match(/^#chapter\/(\d+)(?:\/section\/(.+))?$/)
  if (match) {
    const id = parseInt(match[1], 10)
    if (CHAPTERS.some(c => c.id === id)) return { chapterId: id, sectionId: match[2] ?? null }
  }
  return { chapterId: 0, sectionId: null }
}

function pushChapterHash(chapterId) {
  history.pushState(null, '', `#chapter/${chapterId}`)
}

function pushSectionHash(chapterId, sectionId) {
  history.pushState(null, '', `#chapter/${chapterId}/section/${sectionId}`)
}

export default function App() {
  const [activeChapterId, setActiveChapterId] = useState(() => parseHash().chapterId)
  const [activeExercise, setActiveExercise] = useState(null)
  const [rightSidebarOpen, setRightSidebarOpen] = useState(false)
  const [activeSectionId, setActiveSectionId] = useState(null)
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false)
  const [pendingSection, setPendingSection] = useState(() => parseHash().sectionId)
  const mainRef = useRef(null)

  const activeChapter = CHAPTERS.find(c => c.id === activeChapterId)

  // Set initial hash if missing
  useEffect(() => {
    if (!window.location.hash.startsWith('#chapter/')) {
      history.replaceState(null, '', `#chapter/${activeChapterId}`)
    }
  }, [])

  // Scroll to pending section after chapter renders
  useEffect(() => {
    if (!pendingSection) return
    const timer = setTimeout(() => {
      const el = mainRef.current?.querySelector(`#${pendingSection}`)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setPendingSection(null)
    }, 100)
    return () => clearTimeout(timer)
  }, [pendingSection, activeChapterId])

  // Browser back/forward
  useEffect(() => {
    function onPopState() {
      const { chapterId, sectionId } = parseHash()
      setActiveChapterId(chapterId)
      setActiveExercise(null)
      setRightSidebarOpen(false)
      setMobileDrawerOpen(false)
      if (mainRef.current) mainRef.current.scrollTop = 0
      if (sectionId) setPendingSection(sectionId)
    }
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

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

  function activateExercise(chapterId, exerciseId, view = 'template', activityRef = null) {
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
    const chapter = CHAPTERS.find(c => c.id === chapterId)
    const exercise = chapter?.exercises.find(e => e.id === exerciseId)
    mixpanel.track('Prompt Opened', {
      chapter_id: chapterId,
      chapter_title: chapter?.title,
      exercise_id: exerciseId,
      exercise_title: exercise?.title,
      view,
    })
    setActiveExercise({ chapterId, exerciseId, view, activityRef })
    setRightSidebarOpen(true)
  }

  function getActiveExerciseData() {
    if (!activeExercise) return null
    const chapter = CHAPTERS.find(c => c.id === activeExercise.chapterId)
    const exercise = chapter?.exercises.find(e => e.id === activeExercise.exerciseId) ?? null
    return { exercise, view: activeExercise.view ?? 'template' }
  }

  function handleChapterClick(chapterId, source = 'sidebar') {
    const chapter = CHAPTERS.find(c => c.id === chapterId)
    mixpanel.track('Chapter Viewed', {
      chapter_id: chapterId,
      chapter_title: chapter?.title,
      source,
    })
    pushChapterHash(chapterId)
    setActiveChapterId(chapterId)
    setActiveExercise(null)
    setRightSidebarOpen(false)
    setMobileDrawerOpen(false)
    if (mainRef.current) {
      mainRef.current.scrollTop = 0
    }
  }

  function handleNavigateToActivity(chapterId, exerciseId) {
    const chapter = CHAPTERS.find(c => c.id === chapterId)
    mixpanel.track('View Activity Clicked', {
      to_chapter_id: chapterId,
      to_chapter_title: chapter?.title,
      exercise_id: exerciseId,
    })
    pushChapterHash(chapterId)
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
    const chapter = CHAPTERS.find(c => c.id === activeChapterId)
    mixpanel.track('Section Clicked', {
      section_id: sectionId,
      chapter_id: activeChapterId,
      chapter_title: chapter?.title,
    })
    pushSectionHash(activeChapterId, sectionId)
    if (!mainRef.current) return
    const el = mainRef.current.querySelector(`#${sectionId}`)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="app">
      <TopBar
        rightSidebarOpen={rightSidebarOpen}
        onToggleSidebar={() => setRightSidebarOpen(prev => !prev)}
        onMenuToggle={() => setMobileDrawerOpen(prev => !prev)}
      />
      <div className="body-row">
        <LeftSidebar
          chapters={CHAPTERS}
          activeChapterId={activeChapterId}
          activeExercise={activeExercise}
          activeSectionId={activeSectionId}
          onChapterClick={handleChapterClick}
          onSectionClick={handleSectionClick}
          mobileDrawerOpen={mobileDrawerOpen}
          onCloseDrawer={() => setMobileDrawerOpen(false)}
        />
        <ContentArea
          ref={mainRef}
          chapter={activeChapter}
          activeExercise={activeExercise}
          onActivateExercise={activateExercise}
          onNextChapter={() => handleChapterClick(activeChapterId + 1, 'keep_learning')}
          onNavigateToChapter={handleChapterClick}
          onNavigateToActivity={handleNavigateToActivity}
        />
        <RightSidebar
          open={rightSidebarOpen && activeChapter?.type !== 'glossary'}
          exercise={getActiveExerciseData()?.exercise ?? null}
          view={getActiveExerciseData()?.view ?? 'template'}
          onClose={() => { setActiveExercise(null); setRightSidebarOpen(false); }}
          onTabChange={(newView) => {
            if (activeExercise) setActiveExercise({ ...activeExercise, view: newView })
          }}
          onActivityTab={activeExercise ? () => {
            const ref = activeExercise.activityRef
            const targetChapterId = ref?.chapterId != null ? ref.chapterId : activeExercise.chapterId
            const targetExerciseId = ref?.exerciseId ?? activeExercise.exerciseId
            const chapter = CHAPTERS.find(c => c.id === targetChapterId)
            mixpanel.track('View Activity Clicked', {
              to_chapter_id: targetChapterId,
              to_chapter_title: chapter?.title,
              exercise_id: targetExerciseId,
            })
            pushChapterHash(targetChapterId)
            setActiveChapterId(targetChapterId)
            if (mainRef.current) mainRef.current.scrollTop = 0
            setTimeout(() => {
              const ch = CHAPTERS.find(c => c.id === targetChapterId)
              const activity = ch?.activities.find(a => a.exerciseIds.includes(targetExerciseId))
              if (activity && mainRef.current) {
                const el = mainRef.current.querySelector(`#${activity.anchor}`)
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }
            }, 80)
          } : undefined}
        />
      </div>
    </div>
  )
}
