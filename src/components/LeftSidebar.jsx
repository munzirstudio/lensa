export default function LeftSidebar({
  chapters,
  activeChapterId,
  activeSectionId,
  onChapterClick,
  onSectionClick,
  mobileDrawerOpen,
  onCloseDrawer,
}) {
  const activeChapter = chapters.find(c => c.id === activeChapterId)

  function isReadSectionActive(sectionId) {
    return activeSectionId === sectionId
  }

  function isActivityActive(activity) {
    return activeSectionId === activity.anchor
  }

  return (
    <>
      <div
        className={`drawer-backdrop${mobileDrawerOpen ? ' visible' : ''}`}
        onClick={onCloseDrawer}
      />
    <aside className={`sidebar-left${mobileDrawerOpen ? ' drawer-open' : ''}`}>
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

          {chapter.id === activeChapterId && activeChapter && activeChapter.type !== 'library' && (
            <div className="toc">
              {activeChapter.type === 'glossary' ? (
                activeChapter.sections.map(sec => (
                  <div
                    key={sec.id}
                    className={`toc-item${activeSectionId === sec.id ? ' active' : ''}`}
                    onClick={() => onSectionClick(sec.id)}
                  >
                    {sec.label}
                  </div>
                ))
              ) : (
                <>
                  <div
                    className="toc-h toc-h-clickable"
                    onClick={() => onSectionClick(activeChapter.readSections[0]?.id)}
                  >Read</div>
                  {activeChapter.readSections.map(section => (
                    <div
                      key={section.id}
                      className={`toc-item${isReadSectionActive(section.id) ? ' active' : ''}`}
                      onClick={() => onSectionClick(section.id)}
                    >
                      {section.heading}
                    </div>
                  ))}

                  {activeChapter.activities.length > 0 && (
                    <>
                      <div
                        className="toc-h toc-h-clickable"
                        onClick={() => onSectionClick(activeChapter.activities[0]?.anchor)}
                      >Activities</div>
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
                    <div
                      className={`toc-h toc-h-clickable${activeSectionId === 'resources' ? ' active' : ''}`}
                      onClick={() => onSectionClick('resources')}
                    >Resources</div>
                  )}
                </>
              )}
            </div>
          )}
        </div>
      ))}
    </aside>
    </>
  )
}
