import { useState } from 'react';
import { C, R, SERIF } from '../data/tokens';
import { STAGES } from '../data/stages';
import { Ico } from './Icons';

export default function TopNav({ projectName, stageKey, onNavigate, onRename }) {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(projectName);
  const stage = stageKey ? STAGES[stageKey] : null;

  const commit = () => { setEditing(false); if (onRename) onRename(name); };

  return (
    <nav style={{ height: 64, background: C.surface, borderBottom: `1px solid ${C.border}`, display: 'flex', alignItems: 'center', padding: '0 32px', flexShrink: 0, zIndex: 20 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 9, flex: '0 0 auto', marginRight: 40, cursor: 'pointer' }} onClick={() => onNavigate('landing')}>
        <Ico.Lens size={20} color={C.text} />
        <span style={{ fontSize: 16, fontWeight: 600, color: C.text, letterSpacing: '-0.3px', fontFamily: SERIF }}>Lensa</span>
      </div>

      <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
        {editing ? (
          <input autoFocus value={name} onChange={e => setName(e.target.value)}
            onBlur={commit} onKeyDown={e => e.key === 'Enter' && commit()}
            style={{ background: 'transparent', border: `1px solid ${C.border}`, borderRadius: R.full, padding: '4px 14px', fontSize: 14, fontWeight: 400, color: C.text, fontFamily: SERIF, outline: 'none', textAlign: 'center', width: 260 }} />
        ) : (
          <button onClick={() => setEditing(true)} style={{ background: 'none', border: 'none', cursor: 'text', fontSize: 14, fontWeight: 400, color: C.secondary, fontFamily: SERIF, padding: '4px 12px', borderRadius: R.full }}>
            {name}
          </button>
        )}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 20, flex: '0 0 auto' }}>
        {stage && (
          <span style={{ fontSize: 13, fontWeight: 400, color: C.muted, display: 'flex', alignItems: 'center', gap: 5, fontFamily: SERIF }}>
            <span style={{ cursor: 'pointer' }} onClick={() => onNavigate('map')}>Dashboard</span>
            <span style={{ color: C.border }}>›</span>
            <span style={{ color: C.text, fontWeight: 500 }}>{stage.route}</span>
          </span>
        )}
        <button onClick={() => onNavigate('outputs')} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6, color: C.secondary, fontSize: 13, fontFamily: SERIF, fontWeight: 400, padding: '6px 10px', borderRadius: R.full, transition: 'background .15s' }}
          onMouseEnter={e => e.currentTarget.style.background = C.neutral} onMouseLeave={e => e.currentTarget.style.background = 'none'}>
          <Ico.Outputs size={14} color={C.secondary} /><span>Outputs</span>
        </button>
        <button style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', padding: 6, borderRadius: R.full, transition: 'background .15s' }}
          onMouseEnter={e => e.currentTarget.style.background = C.neutral} onMouseLeave={e => e.currentTarget.style.background = 'none'}>
          <Ico.Settings size={16} color={C.secondary} />
        </button>
        <div style={{ width: 30, height: 30, borderRadius: '50%', background: C.neutral, border: `1px solid ${C.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 600, color: C.text, cursor: 'pointer', fontFamily: SERIF }}>
          M
        </div>
      </div>
    </nav>
  );
}
