import { C, R, SERIF } from '../data/tokens';
import { STAGES, STAGE_KEYS } from '../data/stages';

export default function StageBar({ stageKey, progress, onNavigate }) {
  const idx = STAGE_KEYS.indexOf(stageKey);

  return (
    <div style={{ borderBottom: `1px solid ${C.border}`, background: C.surface, padding: '0 48px', display: 'flex', alignItems: 'center', flexShrink: 0, height: 44 }}>
      {STAGE_KEYS.map((k, i) => {
        const s = STAGES[k];
        const active = k === stageKey;
        const done = progress && progress[k] === 'done';
        const locked = !done && !active && i > idx;
        return (
          <div key={k} style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 7, cursor: !locked ? 'pointer' : 'default', opacity: locked ? 0.4 : 1 }}
              onClick={() => !locked && onNavigate('detail', k)}>
              <div style={{ width: 18, height: 18, borderRadius: '50%', background: done || active ? C.text : C.border, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                {done ? (
                  <svg width="9" height="9" viewBox="0 0 9 9" fill="none"><path d="M1.5 4.5l2 2 4-4" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                ) : (
                  <span style={{ fontSize: 8, fontWeight: 600, color: active ? '#fff' : C.muted, fontFamily: SERIF }}>{s.num}</span>
                )}
              </div>
              <span style={{ fontSize: 12, fontWeight: active ? 600 : 400, color: active ? C.text : C.muted, whiteSpace: 'nowrap', fontFamily: SERIF }}>{s.label}</span>
            </div>
            {i < STAGE_KEYS.length - 1 && <div style={{ width: 28, height: 1, background: done ? C.text : C.border, margin: '0 12px', flexShrink: 0 }} />}
          </div>
        );
      })}
    </div>
  );
}
