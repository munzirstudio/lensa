import { C, R, SERIF } from '../data/tokens';
import { STAGES, STAGE_KEYS } from '../data/stages';
import { Ico } from '../components/Icons';
import TopNav from '../components/TopNav';

export default function MapScreen({ onNavigate, projectName, progress }) {
  const getStatus = (k) => {
    if (progress[k] === 'done') return 'done';
    if (progress[k] === 'active') return 'active';
    return 'locked';
  };

  const activeKey = STAGE_KEYS.find(k => progress[k] === 'active') || 'define';
  const activeStage = STAGES[activeKey];

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', background: C.bg, overflow: 'hidden' }}>
      <TopNav projectName={projectName} stageKey={null} onNavigate={onNavigate} />

      <div style={{ flex: 1, overflowY: 'auto' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '48px' }}>
          <p style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1.2px', color: C.muted, marginBottom: 6, fontFamily: SERIF }}>YOUR DESIGN THINKING JOURNEY</p>
          <h1 style={{ fontSize: 28, fontWeight: 400, color: C.text, marginBottom: 36, letterSpacing: '-0.3px', fontFamily: SERIF, fontStyle: 'italic' }}>{projectName}</h1>

          {/* Stage progress strip */}
          <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: R.lg, padding: '28px 32px', marginBottom: 28, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            {STAGE_KEYS.map((k, i) => {
              const s = STAGES[k];
              const status = getStatus(k);
              const isDone = status === 'done', isActive = status === 'active', isLocked = status === 'locked';
              return (
                <div key={k} style={{ display: 'contents' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, flex: 1, cursor: !isLocked ? 'pointer' : 'default' }}
                    onClick={() => !isLocked && onNavigate('detail', k)}>
                    <div style={{ width: 36, height: 36, borderRadius: '50%', background: isDone || isActive ? C.text : C.border, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: isLocked ? 0.35 : 1 }}>
                      {isDone
                        ? <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7l3 3 6-6" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        : isActive ? <Ico.Play size={10} color="#fff" />
                          : <Ico.Lock size={14} color={C.muted} />}
                    </div>
                    <span style={{ fontSize: 11, fontWeight: isActive ? 700 : 400, color: isActive ? C.text : C.muted, textTransform: 'uppercase', letterSpacing: '0.8px', fontFamily: SERIF, whiteSpace: 'nowrap', opacity: isLocked ? 0.4 : 1 }}>{s.label}</span>
                    <span style={{ fontSize: 10, color: isDone ? C.success : isActive ? C.text : C.muted, fontFamily: SERIF, opacity: isLocked ? 0.4 : 1 }}>
                      {isDone ? '✓ Done' : isActive ? '▶ Active' : '🔒 Locked'}
                    </span>
                  </div>
                  {i < STAGE_KEYS.length - 1 && <div style={{ width: 32, height: 1, background: isDone ? C.text : C.border, flexShrink: 0, marginBottom: 44 }} />}
                </div>
              );
            })}
          </div>

          {/* Hero card */}
          <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderLeft: `3px solid ${C.text}`, borderRadius: `0 ${R.lg}px ${R.lg}px 0`, padding: '32px 40px', marginBottom: 20 }}>
            <p style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1.2px', color: C.muted, marginBottom: 8, fontFamily: SERIF }}>📍 You're here</p>
            <h2 style={{ fontSize: 26, fontWeight: 400, color: C.text, marginBottom: 8, letterSpacing: '-0.3px', fontFamily: SERIF, fontStyle: 'italic' }}>{activeStage.label}</h2>
            <p style={{ fontSize: 15, fontWeight: 400, color: C.secondary, lineHeight: '24px', marginBottom: 24, maxWidth: 540 }}>{activeStage.sub}</p>
            <div style={{ marginBottom: 24 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                <span style={{ fontSize: 12, fontWeight: 600, color: C.text, fontFamily: SERIF }}>Progress</span>
                <span style={{ fontSize: 12, color: C.muted, fontFamily: SERIF }}>2 of 3 exercises complete</span>
              </div>
              <div style={{ height: 4, background: C.neutral, borderRadius: R.full }}>
                <div style={{ height: '100%', width: '66%', background: C.text, borderRadius: R.full }} />
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
              <button onClick={() => onNavigate('detail', activeKey)}
                style={{ background: C.text, border: 'none', borderRadius: R.full, padding: '0 28px', height: 44, fontSize: 14, fontWeight: 500, color: '#fff', cursor: 'pointer', fontFamily: SERIF, transition: 'background .15s' }}
                onMouseEnter={e => e.currentTarget.style.background = C.primaryHv} onMouseLeave={e => e.currentTarget.style.background = C.text}>
                Continue → {activeStage.label} Stage
              </button>
              <span style={{ fontSize: 12, color: C.muted, fontFamily: SERIF }}>Est. remaining: ~20 minutes</span>
            </div>
          </div>

          {/* 2×2 grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 36 }}>
            {STAGE_KEYS.filter(k => k !== activeKey).map(k => {
              const s = STAGES[k];
              const status = getStatus(k);
              const isDone = status === 'done', isLocked = status === 'locked';
              const ki = STAGE_KEYS.indexOf(k);
              return (
                <div key={k}
                  style={{ background: isDone ? C.surface : C.neutral, border: `1px solid ${C.border}`, borderRadius: R.lg, padding: '20px 24px', cursor: !isLocked ? 'pointer' : 'default', opacity: isLocked ? 0.5 : 1, transition: 'border-color .15s' }}
                  onClick={() => !isLocked && onNavigate('detail', k)}
                  onMouseEnter={e => { if (!isLocked) e.currentTarget.style.borderColor = C.text; }}
                  onMouseLeave={e => e.currentTarget.style.borderColor = C.border}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 5 }}>
                    <span style={{ fontSize: 14, fontWeight: 600, color: C.text, fontFamily: SERIF }}>{s.label}</span>
                    <span style={{ fontSize: 11, color: isDone ? C.success : C.muted, fontFamily: SERIF }}>{isDone ? '✓ Done' : isLocked ? '🔒 Locked' : '▶ Active'}</span>
                  </div>
                  <p style={{ fontSize: 13, color: C.secondary }}>
                    {isDone ? '3 exercises · Complete' : `Unlocks after ${ki > 0 ? STAGES[STAGE_KEYS[ki - 1]].label : 'previous stage'}`}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Quick access */}
          <div style={{ display: 'flex', gap: 12 }}>
            {[
              { label: '💬 AI Companion — Open Chat', action: () => onNavigate('companion', activeKey) },
              { label: '📋 View All My Outputs', action: () => onNavigate('outputs') },
            ].map((b, i) => (
              <button key={i} onClick={b.action}
                style={{ background: 'transparent', border: `1px solid ${C.border}`, borderRadius: R.full, padding: '11px 24px', fontSize: 14, fontWeight: 400, color: C.text, cursor: 'pointer', fontFamily: SERIF, transition: 'all .15s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = C.text; e.currentTarget.style.background = C.neutral; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.background = 'transparent'; }}>
                {b.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
