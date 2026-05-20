import { useState, useEffect } from 'react'
import mixpanel from '../lib/mixpanel'

const TABS = [
  { id: 'template', label: 'Template' },
  { id: 'sample', label: 'Sample' },
  { id: 'activity', label: 'Activity' },
]

export default function RightSidebar({ open, exercise, view = 'template', onClose, onTabChange, onActivityTab }) {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    setCopied(false)
  }, [exercise, view])

  const content = view === 'sample' ? exercise?.sample : exercise?.prompt

  function handleCopy() {
    if (!content) return
    navigator.clipboard.writeText(content).then(() => {
      mixpanel.track('Prompt Copied', {
        exercise_title: exercise?.title,
        section_label: exercise?.sectionLabel,
        view,
      })
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  function handleTabClick(tabId) {
    mixpanel.track('Sidebar Tab Clicked', {
      tab: tabId,
      exercise_title: exercise?.title,
      section_label: exercise?.sectionLabel,
    })
    if (tabId === 'activity') {
      onActivityTab?.()
    } else {
      onTabChange?.(tabId)
    }
  }

  return (
    <aside className={`sidebar-right${open ? '' : ' hidden'}`}>
      <div className="sr-header">
        <button className="sr-back-btn" onClick={onClose}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
          <span className="sr-back-title">{exercise?.title ?? 'Select a prompt'}</span>
        </button>
        <div className="sr-meta">
          <div className="sr-name">{exercise?.title ?? 'Select a prompt'}</div>
        </div>
        <button
          className={`copy-btn${copied ? ' copied' : ''}`}
          onClick={handleCopy}
          disabled={!content}
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

      <div className="sr-tabs">
        {TABS.map(tab => (
          <button
            key={tab.id}
            className={`sr-tab${view === tab.id ? ' active' : ''}`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="sr-body">
        {content && <pre className="prompt-text">{content}</pre>}
      </div>
    </aside>
  )
}
