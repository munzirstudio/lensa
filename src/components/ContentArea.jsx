import { forwardRef } from 'react'

const IconBook = () => (
  <svg className="icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
  </svg>
)

const IconActivity = () => (
  <svg className="icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4"/>
    <path d="M2 6h4"/><path d="M2 10h4"/><path d="M2 14h4"/><path d="M2 18h4"/>
    <path d="M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/>
  </svg>
)

const IconResources = () => (
  <svg className="icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
  </svg>
)

const IconClock = () => (
  <svg className="icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
)

const IconChevron = () => (
  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"/>
  </svg>
)

function PromptCard({ exercise, isActive, onActivate }) {
  return (
    <div
      className={`prompt-card${isActive ? ' active' : ''}`}
      onClick={() => onActivate(exercise)}
    >
      <div className="card-label">
        <IconClock />
        {exercise.title}
      </div>
      <div className="card-actions">
        <button
          className="btn btn-dark"
          onClick={e => { e.stopPropagation(); onActivate(exercise) }}
        >
          View prompt
        </button>
      </div>
    </div>
  )
}

const ContentArea = forwardRef(function ContentArea({ chapter, activeExercise, onActivateExercise, onNextChapter }, ref) {
  if (!chapter) return null

  function isExerciseActive(exerciseId) {
    return (
      activeExercise?.chapterId === chapter.id &&
      activeExercise?.exerciseId === exerciseId
    )
  }

  function handleActivate(exercise) {
    onActivateExercise(chapter.id, exercise.id)
  }

  function getExercise(exerciseId) {
    return chapter.exercises.find(e => e.id === exerciseId)
  }

  const nextChapterAvailable = chapter.id < 6

  return (
    <main className="main" ref={ref}>
      <img
        className="hero"
        src={chapter.heroImage}
        alt={chapter.title}
        loading="lazy"
      />
      <div className="content-wrap">

        <div className="ch-meta">{chapter.meta}</div>
        <h1 className="ch-title">{chapter.title}</h1>

        {/* ── READ ── */}
        <div className="sec-label">
          <IconBook />
          Read
        </div>

        {chapter.readSections.map(section => (
          <div key={section.id} id={section.id}>
            <div className="h2">{section.heading}</div>
            <div
              className="prose"
              dangerouslySetInnerHTML={{ __html: section.html }}
            />
          </div>
        ))}

        {/* ── ACTIVITIES ── */}
        {chapter.activities.length > 0 && (
          <>
            <div className="sec-label" style={{ paddingTop: 48 }}>
              <IconActivity />
              Activities
            </div>

            {chapter.activities.map(activity => (
              <div key={activity.id} id={activity.anchor}>
                <div className="h2">{activity.title}</div>
                <div className="prose">
                  {activity.what && (
                    <>
                      <p><strong>What it is</strong></p>
                      <p>{activity.what}</p>
                    </>
                  )}
                  {activity.why && (
                    <>
                      <p><strong>Why it matters</strong></p>
                      <p>{activity.why}</p>
                    </>
                  )}
                  {activity.howAiHelps && (
                    <>
                      <p><strong>How AI helps here</strong></p>
                      <div dangerouslySetInnerHTML={{ __html: typeof activity.howAiHelps === 'string' && activity.howAiHelps.startsWith('<')
                        ? activity.howAiHelps
                        : `<p>${activity.howAiHelps}</p>`
                      }} />
                    </>
                  )}
                  {activity.steps.length > 0 && (
                    <>
                      <p><strong>How to do it</strong></p>
                      <ol>
                        {activity.steps.map((step, i) => (
                          <li key={i}>{step}</li>
                        ))}
                      </ol>
                    </>
                  )}
                </div>

                {activity.exerciseIds.map(exId => {
                  const ex = getExercise(exId)
                  if (!ex) return null
                  return (
                    <PromptCard
                      key={exId}
                      exercise={ex}
                      isActive={isExerciseActive(exId)}
                      onActivate={handleActivate}
                    />
                  )
                })}
              </div>
            ))}
          </>
        )}

        {/* ── RESOURCES ── */}
        {chapter.resources.length > 0 && (
          <>
            <div className="sec-label" style={{ paddingTop: 48 }}>
              <IconResources />
              Resources
            </div>

            <div className="resource-list" id="resources">
              {chapter.resources.map((resource, i) => (
                <div key={i} className="resource-card">
                  <div className="resource-name">{resource.name}</div>
                  <div className="resource-desc">{resource.description}</div>
                  <div>
                    <button className="btn btn-light">View</button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* ── COMPLETION ── */}
        <div className="completion-card">
          <div className="completion-label">You've completed this chapter</div>
          {nextChapterAvailable && (
            <button className="keep-learning" onClick={onNextChapter}>
              Keep learning
              <IconChevron />
            </button>
          )}
          {!nextChapterAvailable && (
            <button className="keep-learning">
              You've completed the course. Now go build something. →
            </button>
          )}
        </div>

      </div>
    </main>
  )
})

export default ContentArea
