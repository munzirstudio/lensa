import { useState, useEffect } from 'react'

export default function RightSidebar({ open, exercise }) {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    setCopied(false)
  }, [exercise])

  function handleCopy() {
    if (!exercise) return
    navigator.clipboard.writeText(exercise.prompt).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <aside className={`sidebar-right${open ? '' : ' hidden'}`}>
      <div className="sr-header">
        <div className="sr-meta">
          <div className="sr-sec">{exercise?.sectionLabel ?? 'Prompt'}</div>
          <div className="sr-name">{exercise?.title ?? 'Select a prompt'}</div>
        </div>
        <button
          className={`copy-btn${copied ? ' copied' : ''}`}
          onClick={handleCopy}
          disabled={!exercise}
        >
          {copied ? (
            <>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              Copied
            </>
          ) : (
            <>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
              </svg>
              Copy
            </>
          )}
        </button>
      </div>

      <div className="sr-body">
        {exercise && <pre className="prompt-text">{exercise.prompt}</pre>}
      </div>
    </aside>
  )
}
