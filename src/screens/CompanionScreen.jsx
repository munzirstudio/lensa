import { useState, useEffect, useRef } from 'react';
import { C, R, SERIF } from '../data/tokens';
import { STAGES } from '../data/stages';
import { Ico } from '../components/Icons';
import TopNav from '../components/TopNav';
import TypingDots from '../components/TypingDots';

export default function CompanionScreen({ stageKey, onNavigate, projectName }) {
  const stage = STAGES[stageKey];
  const [msgs, setMsgs] = useState([{ role: 'ai', content: stage.companion }]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => { if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight; }, [msgs, loading]);

  const sendMsg = async (text) => {
    const msg = (text || input).trim();
    if (!msg || loading) return;
    setInput('');
    const next = [...msgs, { role: 'user', content: msg }];
    setMsgs(next);
    setLoading(true);
    try {
      await new Promise(r => setTimeout(r, 800));
      setMsgs(p => [...p, { role: 'ai', content: "AI Companion is available in the hosted environment. In the live version I'd give you stage-specific coaching here." }]);
    } catch {
      setMsgs(p => [...p, { role: 'ai', content: "Something went wrong. Try again." }]);
    }
    setLoading(false);
  };

  const quickActions = [
    'Help me write my POV statement',
    'Generate HMW questions from my POV',
    'Critique my POV statement — be honest',
    'What should I do next?',
    "I'm stuck",
  ];

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', overflow: 'hidden', background: C.bg }}>
      <TopNav projectName={projectName} stageKey={stageKey} onNavigate={onNavigate} />

      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        {/* Left context panel */}
        <div style={{ flex: '0 0 30%', background: C.surface, borderRight: `1px solid ${C.border}`, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          <div style={{ padding: '32px', overflowY: 'auto', flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 6 }}>
              <Ico.Chat size={15} color={C.text} />
              <span style={{ fontSize: 17, fontWeight: 600, color: C.text, fontFamily: SERIF }}>AI Companion</span>
            </div>
            <p style={{ fontSize: 14, color: C.muted, marginBottom: 32, fontFamily: SERIF }}>{stage.label} Stage · {projectName}</p>

            <p style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.2px', color: C.muted, marginBottom: 14, fontFamily: SERIF }}>Your Context</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
              {[['Project', projectName], ['Current stage', stage.label], ['Last saved', 'POV Statement ✓, HMW (in progress)']].map(([lbl, val], i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', gap: 8 }}>
                  <span style={{ fontSize: 13, color: C.muted, fontFamily: SERIF }}>{lbl}</span>
                  <span style={{ fontSize: 13, fontWeight: 500, color: C.text, textAlign: 'right', fontFamily: SERIF }}>{val}</span>
                </div>
              ))}
            </div>

            <div style={{ height: 1, background: C.border, marginBottom: 24 }} />

            <p style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.2px', color: C.muted, marginBottom: 12, fontFamily: SERIF }}>Quick Actions</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 7, marginBottom: 28 }}>
              {quickActions.map((a, i) => (
                <button key={i} onClick={() => sendMsg(a)}
                  style={{ background: 'transparent', border: `1px solid ${C.border}`, borderRadius: R.full, padding: '9px 16px', cursor: 'pointer', fontSize: 13, fontWeight: 400, color: C.text, fontFamily: SERIF, textAlign: 'left', transition: 'all .15s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = C.text; e.currentTarget.style.background = C.neutral; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.background = 'transparent'; }}>
                  {a}
                </button>
              ))}
            </div>

            <div style={{ height: 1, background: C.border, marginBottom: 24 }} />

            <p style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.2px', color: C.muted, marginBottom: 12, fontFamily: SERIF }}>Stage Tools</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {stage.tools.slice(0, 3).map((t, i) => (
                <button key={i} onClick={() => sendMsg(t.prompt)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 14, color: C.text, fontFamily: SERIF, textAlign: 'left', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '3px 0', textDecoration: 'underline', textDecorationColor: C.border, textUnderlineOffset: 3 }}
                  onMouseEnter={e => e.currentTarget.style.textDecorationColor = C.text}
                  onMouseLeave={e => e.currentTarget.style.textDecorationColor = C.border}>
                  <span>{t.title}</span>
                  <Ico.ChevronRight size={12} color={C.muted} />
                </button>
              ))}
            </div>
          </div>

          <div style={{ padding: '16px 32px', borderTop: `1px solid ${C.border}` }}>
            <button onClick={() => onNavigate('detail', stageKey)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 14, fontWeight: 600, color: C.text, fontFamily: SERIF, display: 'flex', alignItems: 'center', gap: 6, textDecoration: 'underline', textDecorationColor: C.border, textUnderlineOffset: 3 }}
              onMouseEnter={e => e.currentTarget.style.textDecorationColor = C.text}
              onMouseLeave={e => e.currentTarget.style.textDecorationColor = C.border}>
              <Ico.ChevronLeft size={13} color={C.text} /> Back to {stage.label} Stage
            </button>
          </div>
        </div>

        {/* Right chat */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          <div style={{ height: 56, borderBottom: `1px solid ${C.border}`, background: C.surface, display: 'flex', alignItems: 'center', padding: '0 40px', flexShrink: 0 }}>
            <span style={{ fontSize: 15, fontWeight: 500, color: C.text, fontFamily: SERIF }}>{stage.label} Stage · AI Companion</span>
          </div>

          <div ref={scrollRef} style={{ flex: 1, overflowY: 'auto', padding: '32px 40px' }}>
            <div style={{ maxWidth: 680, display: 'flex', flexDirection: 'column', gap: 20 }}>
              {msgs.map((m, i) => m.role === 'ai' ? (
                <div key={i} style={{ background: C.surface, borderLeft: `2px solid ${C.text}`, borderRadius: `0 ${R.md}px ${R.md}px 0`, padding: '20px 24px' }}>
                  <p style={{ fontSize: 16, fontWeight: 400, color: C.text, lineHeight: '28px', whiteSpace: 'pre-line', margin: 0, fontFamily: SERIF }}>{m.content}</p>
                </div>
              ) : (
                <div key={i} style={{ background: C.neutral, border: `1px solid ${C.border}`, borderRadius: `${R.md}px ${R.md}px 0 ${R.md}px`, padding: '16px 20px', alignSelf: 'flex-end', maxWidth: '80%' }}>
                  <p style={{ fontSize: 15, fontWeight: 400, color: C.text, lineHeight: '24px', margin: 0, fontFamily: SERIF }}>{m.content}</p>
                </div>
              ))}
              {loading && (
                <div style={{ background: C.surface, borderLeft: `2px solid ${C.text}`, borderRadius: `0 ${R.md}px ${R.md}px 0`, padding: '20px 24px' }}>
                  <TypingDots />
                </div>
              )}
            </div>
          </div>

          <div style={{ borderTop: `1px solid ${C.border}`, padding: '24px 40px', background: C.surface, flexShrink: 0 }}>
            <div style={{ maxWidth: 680 }}>
              <textarea ref={inputRef} value={input} onChange={e => setInput(e.target.value)} rows={3}
                placeholder="What's on your mind?"
                onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMsg(); } }}
                style={{ width: '100%', background: C.neutral, border: '1px solid transparent', borderRadius: R.md, padding: '14px 18px', fontSize: 15, fontWeight: 400, color: C.text, fontFamily: SERIF, outline: 'none', resize: 'none', lineHeight: '24px', transition: 'all .15s' }}
                onFocus={e => { e.target.style.borderColor = C.text; e.target.style.background = C.surface; }}
                onBlur={e => { e.target.style.borderColor = 'transparent'; e.target.style.background = C.neutral; }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 12 }}>
                <div style={{ display: 'flex', gap: 16 }}>
                  {['📎 Paste my notes', '🔄 Start fresh', '💾 Save conversation'].map((lbl, i) => (
                    <button key={i} onClick={() => { if (i === 1) setMsgs([{ role: 'ai', content: stage.companion }]); }}
                      style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 12, color: C.muted, fontFamily: SERIF, padding: 0, transition: 'color .15s' }}
                      onMouseEnter={e => e.currentTarget.style.color = C.text} onMouseLeave={e => e.currentTarget.style.color = C.muted}>
                      {lbl}
                    </button>
                  ))}
                </div>
                <button onClick={() => sendMsg()} disabled={!input.trim() || loading}
                  style={{ background: input.trim() && !loading ? C.text : C.border, border: 'none', borderRadius: R.full, padding: '0 28px', height: 44, fontSize: 15, fontWeight: 500, color: input.trim() && !loading ? '#fff' : C.muted, cursor: input.trim() && !loading ? 'pointer' : 'default', fontFamily: SERIF, display: 'flex', alignItems: 'center', gap: 8, transition: 'all .15s' }}
                  onMouseEnter={e => { if (input.trim() && !loading) e.currentTarget.style.background = C.primaryHv; }}
                  onMouseLeave={e => { e.currentTarget.style.background = input.trim() && !loading ? C.text : C.border; }}>
                  {loading ? 'Thinking…' : <><Ico.Send size={12} color={input.trim() && !loading ? '#fff' : C.muted} /> Send</>}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
