export default function LeftSidebar({ chapters, activeChapterId, activeExercise, onChapterClick, onSectionClick }) {
  const activeChapter = chapters.find(c => c.id === activeChapterId)

  function isActivityActive(activity) {
    if (!activeExercise) return false
    return (
      activeExercise.chapterId === activeChapterId &&
      activity.exerciseIds.includes(activeExercise.exerciseId)
    )
  }

  return (
    <aside className="sidebar-left">
      {chapters.map(chapter => (
        <div key={chapter.id}>
          <div
            className="ch-link"
            onClick={() => onChapterClick(chapter.id)}
          >
            <div className="ch-badge-wrap">
              <div className={`ch-badge${chapter.id === activeChapterId ? ' active' : ''}`}>
                {chapter.id}
              </div>
            </div>
            <div className={`ch-label${chapter.id === activeChapterId ? ' active' : ''}`}>
              {chapter.title}
            </div>
          </div>

          {chapter.id === activeChapterId && activeChapter && (
            <div className="toc">
              <div className="toc-h">Read</div>
              {activeChapter.readSections.map(section => (
                <div
                  key={section.id}
                  className="toc-item"
                  onClick={() => onSectionClick(section.id)}
                >
                  {section.heading}
                </div>
              ))}

              {activeChapter.activities.length > 0 && (
                <>
                  <div className="toc-h">Activities</div>
                  {activeChapter.activities.map(activity => (
                    <div
                      key={activity.id}
                      className={`toc-item${isActivityActive(activity) ? ' active' : ''}`}
                      onClick={() => onSectionClick(activity.anchor)}
                    >
                      {activity.tocTitle}
                    </div>
                  ))}
                </>
              )}

              {activeChapter.resources.length > 0 && (
                <>
                  <div className="toc-h">Resources</div>
                </>
              )}
            </div>
          )}
        </div>
      ))}
    </aside>
  )
}
