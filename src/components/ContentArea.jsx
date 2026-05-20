import { forwardRef } from 'react'
import { CHAPTERS, PROMPT_LIBRARY, GLOSSARY_DATA } from '../data/content'

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


function PromptCard({ exercise, isActive, onActivate, onViewActivity }) {
  return (
    <div
      className={`prompt-card${isActive ? ' active' : ''}`}
      onClick={() => onActivate(exercise, 'prompt')}
    >
      <div className="card-label">
        <IconClock />
        {exercise.title}
      </div>
      <div className="card-actions">
        <button
          className="btn btn-dark"
          onClick={e => { e.stopPropagation(); onActivate(exercise, 'prompt') }}
        >
          View prompt
        </button>
        {exercise.sample && (
          <button
            className="btn btn-light"
            onClick={e => { e.stopPropagation(); onActivate(exercise, 'sample') }}
          >
            View sample
          </button>
        )}
        {onViewActivity && (
          <button
            className="btn btn-light"
            onClick={e => { e.stopPropagation(); onViewActivity() }}
          >
            View activity
          </button>
        )}
      </div>
    </div>
  )
}

function LibraryContent({ chapter, activeExercise, onActivateExercise, onNavigateToChapter, onNavigateToActivity }) {
  function isExerciseActive(exerciseId) {
    return activeExercise?.chapterId === chapter.id && activeExercise?.exerciseId === exerciseId
  }

  function handleActivate(exercise, view = 'prompt') {
    onActivateExercise(chapter.id, exercise.id, view)
  }

  return (
    <>
      <div className="ch-meta">{chapter.meta}</div>
      <h1 className="ch-title">{chapter.title}</h1>

      {chapter.categories.map(cat => {
        const cards = PROMPT_LIBRARY.filter(p => p.category === cat.id)
        return (
          <div key={cat.id} id={cat.id} className="lib-section">
            <div className="h2" style={{ paddingTop: 48 }}>{cat.label}</div>
            <div className="lib-section-desc">{cat.description}</div>
            {cards.map(card => {
              const exercise = chapter.exercises.find(e => e.id === card.id)
              if (!exercise) return null
              return (
                <PromptCard
                  key={card.id}
                  exercise={exercise}
                  isActive={isExerciseActive(card.id)}
                  onActivate={handleActivate}
                  onViewActivity={card.chapterRef?.chapterId != null
                    ? () => onNavigateToActivity(card.chapterRef.chapterId, card.chapterRef.exerciseId)
                    : undefined}
                />
              )
            })}
          </div>
        )
      })}
    </>
  )
}

function GlossaryContent({ chapter }) {
  return (
    <>
      <div className="ch-meta">{chapter.meta}</div>
      <h1 className="ch-title">{chapter.title}</h1>

      {GLOSSARY_DATA.sections.map(section => (
        <div key={section.id} id={section.id} className="glossary-section">
          <div className="h2">{section.label}</div>
          <div className="glossary-list">
            {section.terms.map(item => (
              <div key={item.term} className="glossary-item">
                <div className="glossary-term">{item.term}</div>
                <div className="glossary-def">{item.definition}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  )
}

const ContentArea = forwardRef(function ContentArea({ chapter, activeExercise, onActivateExercise, onNextChapter, onNavigateToChapter, onNavigateToActivity }, ref) {
  if (!chapter) return null

  if (chapter.type === 'library') {
    return (
      <main className="main" ref={ref}>
        <div className="content-wrap">
          <LibraryContent
            chapter={chapter}
            activeExercise={activeExercise}
            onActivateExercise={onActivateExercise}
            onNavigateToChapter={onNavigateToChapter}
            onNavigateToActivity={onNavigateToActivity}
          />
        </div>
      </main>
    )
  }

  if (chapter.type === 'glossary') {
    return (
      <main className="main" ref={ref}>
        <div className="content-wrap">
          <GlossaryContent chapter={chapter} />
        </div>
      </main>
    )
  }

  function isExerciseActive(exerciseId) {
    return (
      activeExercise?.chapterId === chapter.id &&
      activeExercise?.exerciseId === exerciseId
    )
  }

  function handleActivate(exercise, view = 'prompt') {
    onActivateExercise(chapter.id, exercise.id, view)
  }

  function getExercise(exerciseId) {
    return chapter.exercises.find(e => e.id === exerciseId)
  }

  const nextChapterAvailable = chapter.id < 6

  return (
    <main className="main" ref={ref}>
      <div className="content-wrap">

        <img
          className="hero"
          src={chapter.heroImage}
          alt={chapter.title}
          loading="lazy"
        />

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
        {chapter.resources.filter(r => !r.hidden).length > 0 && (
          <>
            <div className="sec-label" style={{ paddingTop: 48 }}>
              <IconResources />
              Resources
            </div>

            <div className="resource-list" id="resources">
              {chapter.resources.filter(r => !r.hidden).map((resource, i) => (
                <div key={i} className="resource-card">
                  <div className="resource-name">{resource.name}</div>
                  <div className="resource-desc">{resource.description}</div>
                  <div>
                    {resource.comingSoon ? (
                      <button className="btn btn-light" disabled style={{ opacity: 0.4, cursor: 'not-allowed' }}>
                        Coming soon
                      </button>
                    ) : (
                      <a
                        className="btn btn-light"
                        href={resource.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View
                      </a>
                    )}
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
