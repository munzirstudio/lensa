export default function TopBar({ rightSidebarOpen, onToggleSidebar, onMenuToggle }) {
  return (
    <header className="topbar">
      <div className="topbar-left">
        <div className="wordmark">Lensa</div>
        <button className="course-btn">
          Design Thinking + AI
          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </button>
      </div>
      <div className="topbar-right">
        <button className="icon-btn" onClick={onToggleSidebar} title="Toggle prompt panel">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="18" height="18" x="3" y="3" rx="2"/>
            <line x1="15" y1="3" x2="15" y2="21"/>
          </svg>
        </button>
        {/* <button className="profile-pill">Profile</button> */}
        <button className="mob-menu-btn" onClick={onMenuToggle} title="Open menu">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="6" x2="21" y2="6"/>
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        </button>
      </div>
    </header>
  )
}
