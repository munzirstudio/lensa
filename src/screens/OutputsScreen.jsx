import { useState } from 'react';
import { C, R, SERIF } from '../data/tokens';
import { STAGES, STAGE_KEYS } from '../data/stages';
import { Ico } from '../components/Icons';
import TopNav from '../components/TopNav';

const STAGE_DATA = {
  empathise: {
    status: 'done', outputs: [
      { name: '5 Key Insights', preview: '"Users don\'t know what they don\'t know — they describe symptoms, not causes."' },
      { name: 'Empathy Map', preview: '"Thinks: overwhelmed by options. Feels: anxious about making the wrong decision."' },
    ]
  },
  define: {
    status: 'active', outputs: [
      { name: 'POV Statement', preview: '"First-time PMs need a way to prioritise without political pressure because they fear looking indecisive."' },
      { name: 'HMW Questions (5)', preview: '"How might we help PMs say no without losing trust with stakeholders?"', inProgress: true },
    ]
  },
  ideate: { status: 'locked', outputs: [] },
  prototype: { status: 'locked', outputs: [] },
  test: { status: 'locked', outputs: [] },
};

export default function OutputsScreen({ onNavigate, projectName }) {
  const [expanded, setExpanded] = useState({ empathise: true, define: true, ideate: false, prototype: false, test: false });

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', background: C.bg, overflow: 'hidden' }}>
      <TopNav projectName={projectName} stageKey={null} onNavigate={onNavigate} />
      <div style={{ flex: 1, overflowY: 'auto' }}>
        <div style={{ maxWidth: 720, margin: '0 auto', padding: '48px' }}>
          <h1 style={{ fontSize: 28, fontWeight: 400, color: C.text, marginBottom: 8, letterSpacing: '-0.3px', fontFamily: SERIF, fontStyle: 'italic' }}>My Outputs</h1>
          <p style={{ fontSize: 15, color: C.secondary, marginBottom: 20, fontFamily: SERIF }}>
            {projectName} · Started today · 2 of 5 stages complete
          </p>
          <div style={{ height: 4, background: C.neutral, borderRadius: R.full, marginBottom: 40 }}>
            <div style={{ height: '100%', width: '40%', background: C.text, borderRadius: R.full }} />
          </div>

          {STAGE_KEYS.map((k, i) => {
            const s = STAGES[k];
            const sp = STAGE_DATA[k];
            const isDone = sp.status === 'done', isActive = sp.status === 'active', isLocked = sp.status === 'locked';
            const isExp = expanded[k];
            return (
              <div key={k} style={{ borderTop: `1px solid ${C.border}`, paddingTop: 24, paddingBottom: 24 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: !isLocked ? 'pointer' : 'default', marginBottom: isExp && !isLocked && sp.outputs.length ? 16 : 0 }}
                  onClick={() => !isLocked && setExpanded(e => ({ ...e, [k]: !e[k] }))}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <span style={{ fontSize: 15, fontWeight: 600, color: isLocked ? C.muted : C.text, fontFamily: SERIF }}>{s.label}</span>
                    <span style={{ fontSize: 11, fontWeight: 600, color: isDone ? C.success : isActive ? C.text : C.muted, background: isDone ? 'rgba(21,128,61,0.08)' : isActive ? C.neutral : 'transparent', borderRadius: R.full, padding: '3px 10px', fontFamily: SERIF }}>
                      {isDone ? '✓ Done' : isActive ? '▶ In Progress' : '🔒 Locked'}
                    </span>
                  </div>
                  {!isLocked && <Ico.ChevronRight size={14} color={C.muted} />}
                </div>

                {isExp && !isLocked && sp.outputs.map((out, oi) => (
                  <div key={oi} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 0', borderTop: oi > 0 ? `1px solid ${C.border}` : 'none', gap: 16 }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                        <p style={{ fontSize: 14, fontWeight: 600, color: C.text, fontFamily: SERIF }}>{out.name}</p>
                        {out.inProgress && <span style={{ fontSize: 10, fontWeight: 700, color: C.muted, textTransform: 'uppercase', letterSpacing: '0.8px', fontFamily: SERIF }}>In progress</span>}
                      </div>
                      <p style={{ fontSize: 13, color: C.secondary, lineHeight: '20px', fontStyle: 'italic', fontFamily: SERIF }}>{out.preview}</p>
                    </div>
                    <div style={{ display: 'flex', gap: 16, flexShrink: 0 }}>
                      {['View', 'Edit'].map(lbl => (
                        <button key={lbl} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 13, fontWeight: 600, color: C.text, fontFamily: SERIF, textDecoration: 'underline', textDecorationColor: C.border, textUnderlineOffset: 3, transition: 'text-decoration-color .15s', padding: 0 }}
                          onMouseEnter={e => e.currentTarget.style.textDecorationColor = C.text}
                          onMouseLeave={e => e.currentTarget.style.textDecorationColor = C.border}>
                          {lbl}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}

                {isLocked && (
                  <p style={{ fontSize: 13, color: C.muted, marginTop: 8, fontFamily: SERIF }}>
                    Complete {i > 0 ? STAGES[STAGE_KEYS[i - 1]].label : 'the previous stage'} to unlock
                  </p>
                )}
              </div>
            );
          })}

          <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: 32, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            {[
              { label: '📥 Export All Outputs', action: () => { } },
              { label: '🔗 Share Summary', action: () => { } },
              { label: '← Back to Playbook', action: () => onNavigate('detail', 'define') },
            ].map((b, i) => (
              <button key={i} onClick={b.action}
                style={{ background: 'transparent', border: `1px solid ${C.border}`, borderRadius: R.full, padding: '12px 24px', fontSize: 14, fontWeight: 400, color: C.text, cursor: 'pointer', fontFamily: SERIF, transition: 'all .15s' }}
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
