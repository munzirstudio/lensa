import { useState, useEffect, useRef } from 'react';
import { C, R, SERIF } from '../data/tokens';
import { STAGES } from '../data/stages';
import { Ico } from '../components/Icons';
import TopNav from '../components/TopNav';
import StageBar from '../components/StageBar';
import TypingDots from '../components/TypingDots';

function LearnTab({ stage, onTryInCompanion, onGoToDo }) {
  const [hov, setHov] = useState(false);
  const { learn } = stage;
  return (
    <div style={{ maxWidth: 600 }}>
      {learn.sections.map((sec, i) => (
        <div key={i} style={{ marginBottom: 32 }}>
          <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.1px', color: C.muted, marginBottom: 14, fontFamily: SERIF }}>{sec.heading}</p>
          {sec.body && <p style={{ fontSize: 17, fontWeight: 400, color: C.text, lineHeight: '30px', marginBottom: sec.body2 || sec.bullets ? 14 : 0 }}>{sec.body}</p>}
          {sec.body2 && <p style={{ fontSize: 17, fontWeight: 400, color: C.text, lineHeight: '30px' }}>{sec.body2}</p>}
          {sec.bullets && (
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10, marginTop: sec.body ? 10 : 0 }}>
              {sec.bullets.map((b, j) => (
                <li key={j} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <span style={{ color: C.border, fontSize: 14, marginTop: 3, flexShrink: 0, lineHeight: '28px' }}>—</span>
                  <span style={{ fontSize: 15, fontWeight: 400, color: C.secondary, lineHeight: '26px' }}>{b}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}

      <div style={{ background: C.neutral, borderLeft: `2px solid ${C.text}`, borderRadius: `0 ${R.md}px ${R.md}px 0`, padding: '20px 24px', marginBottom: 36, marginTop: 8 }}>
        <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.2px', color: C.text, marginBottom: 12, fontFamily: SERIF }}>AI Power-Up</p>
        <p style={{ fontSize: 15, fontWeight: 400, color: C.text, lineHeight: '26px', marginBottom: 14 }}>{learn.powerup}</p>
        <button onClick={onTryInCompanion} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 14, fontWeight: 500, color: C.text, padding: 0, fontFamily: SERIF, textDecoration: 'underline', textDecorationColor: C.border, textUnderlineOffset: 3, transition: 'text-decoration-color .15s' }}
          onMouseEnter={e => e.currentTarget.style.textDecorationColor = C.text}
          onMouseLeave={e => e.currentTarget.style.textDecorationColor = C.border}>
          Try this in AI Companion →
        </button>
      </div>

      <button onClick={onGoToDo} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
        style={{ background: hov ? C.neutral : C.surface, border: `1px solid ${C.border}`, borderRadius: R.full, padding: '13px 28px', fontSize: 15, fontWeight: 400, color: C.text, cursor: 'pointer', fontFamily: SERIF, transition: 'background .15s' }}>
        → I'm ready. Go to DO
      </button>
    </div>
  );
}

function DoTab({ stage, onSendToCompanion }) {
  const [pov, setPov] = useState({ user: '', need: '', insight: '' });
  const [saved, setSaved] = useState(false);
  const [focused, setFocused] = useState(null);

  const hasContent = pov.user || pov.need || pov.insight;
  const preview = `${pov.user || '[your user]'} needs ${pov.need || '[their need]'} because ${pov.insight || '[your insight]'}.`;

  const fieldStyle = (key) => ({
    width: '100%', background: C.surface,
    border: `1px solid ${focused === key ? C.text : C.border}`,
    borderRadius: key === 'insight' ? R.md : R.full,
    padding: key === 'insight' ? '12px 18px' : '0 18px',
    height: key === 'insight' ? 'auto' : 44,
    fontSize: 15, fontWeight: 400, color: C.text, fontFamily: SERIF,
    outline: 'none', lineHeight: key === 'insight' ? '24px' : '44px',
    transition: 'border-color .15s', resize: 'vertical',
  });

  return (
    <div style={{ maxWidth: 600 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
        <span style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: C.muted, fontFamily: SERIF }}>Exercise 1 of 3</span>
        <span style={{ width: 1, height: 12, background: C.border }} />
        <span style={{ fontSize: 11, color: C.muted, fontFamily: SERIF }}>POV Statement</span>
      </div>

      <p style={{ fontSize: 17, fontWeight: 400, color: C.text, lineHeight: '30px', marginBottom: 12 }}>
        A Point of View statement captures your user's need in one sentence. It's the foundation everything else builds on.
      </p>

      <div style={{ background: C.neutral, borderRadius: R.md, padding: '10px 18px', marginBottom: 28, display: 'inline-block' }}>
        <span style={{ fontSize: 13, color: C.secondary, fontFamily: SERIF, fontStyle: 'italic' }}>
          [User description] needs [specific need] because [surprising insight]
        </span>
      </div>

      <div style={{ background: C.neutral, borderRadius: R.lg, padding: '24px', marginBottom: 20 }}>
        <p style={{ fontSize: 12, fontWeight: 600, color: C.muted, marginBottom: 20, fontFamily: SERIF }}>Complete the template</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {[
            { key: 'user', label: 'Describe your user', ph: 'e.g. A first-time product manager at a startup' },
            { key: 'need', label: 'What do they need?', ph: 'e.g. a way to prioritise features without political pressure' },
          ].map(f => (
            <label key={f.key} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: C.muted, textTransform: 'uppercase', letterSpacing: '0.8px', fontFamily: SERIF }}>{f.label}</span>
              <input value={pov[f.key]} onChange={e => { setPov(p => ({ ...p, [f.key]: e.target.value })); setSaved(false); }}
                placeholder={f.ph} style={fieldStyle(f.key)}
                onFocus={() => setFocused(f.key)} onBlur={() => setFocused(null)} />
            </label>
          ))}
          <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: C.muted, textTransform: 'uppercase', letterSpacing: '0.8px', fontFamily: SERIF }}>What's the surprising insight? (the 'because')</span>
            <textarea value={pov.insight} onChange={e => { setPov(p => ({ ...p, insight: e.target.value })); setSaved(false); }}
              placeholder={"e.g. they avoid asking stakeholders for input because\nthey fear looking indecisive, not because they lack data"}
              rows={3} style={fieldStyle('insight')}
              onFocus={() => setFocused('insight')} onBlur={() => setFocused(null)} />
          </label>
        </div>
      </div>

      {hasContent && (
        <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: R.lg, padding: '20px 24px', marginBottom: 20 }}>
          <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: C.muted, marginBottom: 10, fontFamily: SERIF }}>Your POV Statement</p>
          <p style={{ fontSize: 16, fontWeight: 400, color: C.text, lineHeight: '28px', fontStyle: 'italic', fontFamily: SERIF }}>{preview}</p>
        </div>
      )}

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 16 }}>
        {[
          { label: '✦ Help me write this', prompt: `Help me write my POV statement. Here's what I have so far:\n\nUser: "${pov.user || '[not filled]'}"\nNeed: "${pov.need || '[not filled]'}"\nBecause: "${pov.insight || '[not filled]'}"` },
          { label: '✦ Check my POV', prompt: `Check my POV statement. Is it specific enough? Does it avoid solution framing?\n\n"${preview}"` },
        ].map((b, i) => (
          <button key={i} onClick={() => onSendToCompanion(b.prompt)}
            style={{ background: 'transparent', border: `1px solid ${C.border}`, borderRadius: R.full, padding: '0 20px', height: 38, fontSize: 13, fontWeight: 500, color: C.text, cursor: 'pointer', fontFamily: SERIF, transition: 'all .15s' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = C.text; e.currentTarget.style.background = C.neutral; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.background = 'transparent'; }}>
            {b.label}
          </button>
        ))}
      </div>

      <button onClick={() => setSaved(true)}
        style={{ background: C.text, border: 'none', borderRadius: R.full, padding: '0 32px', height: 48, fontSize: 15, fontWeight: 500, color: '#fff', cursor: 'pointer', fontFamily: SERIF, transition: 'background .15s', width: '100%' }}
        onMouseEnter={e => e.currentTarget.style.background = C.primaryHv} onMouseLeave={e => e.currentTarget.style.background = C.text}>
        {saved ? '✓ Saved — Continue to HMW Questions →' : 'Save POV & Continue to HMW →'}
      </button>
    </div>
  );
}

function ToolsTab({ stage, onSendToCompanion }) {
  const [hov, setHov] = useState(null);
  return (
    <div style={{ maxWidth: 600 }}>
      <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.2px', color: C.muted, marginBottom: 24, fontFamily: SERIF }}>AI Tools for this stage</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {stage.tools.map((t, i) => (
          <div key={i} onClick={() => onSendToCompanion(t.prompt)}
            onMouseEnter={() => setHov(i)} onMouseLeave={() => setHov(null)}
            style={{ background: hov === i ? C.neutral : C.surface, border: `1px solid ${hov === i ? C.text : C.border}`, borderRadius: R.lg, padding: '20px 24px', cursor: 'pointer', transition: 'all .15s', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
            <div>
              <p style={{ fontSize: 16, fontWeight: 500, color: C.text, marginBottom: 5, fontFamily: SERIF }}>{t.title}</p>
              <p style={{ fontSize: 14, fontWeight: 400, color: C.secondary, lineHeight: '22px' }}>{t.desc}</p>
            </div>
            <Ico.ChevronRight size={14} color={hov === i ? C.text : C.muted} />
          </div>
        ))}
      </div>
    </div>
  );
}

function AiPanel({ stageKey, pendingPrompt, onPendingUsed, onNavigate }) {
  const stage = STAGES[stageKey];
  const [msgs, setMsgs] = useState([{ role: 'ai', content: stage.companion }]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [min, setMin] = useState(false);
  const inputRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => { setMsgs([{ role: 'ai', content: STAGES[stageKey].companion }]); setInput(''); }, [stageKey]);

  useEffect(() => {
    if (!pendingPrompt) return;
    const { text, autoSend } = pendingPrompt;
    if (autoSend) sendMsg(text); else { setInput(text); setTimeout(() => inputRef.current?.focus(), 60); }
    onPendingUsed();
  }, [pendingPrompt]);

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
      setMsgs(p => [...p, { role: 'ai', content: "AI Companion is available in the hosted environment. In the live version I'd give you stage-specific, actionable coaching here." }]);
    } catch {
      setMsgs(p => [...p, { role: 'ai', content: "Something went wrong. Try again." }]);
    }
    setLoading(false);
  };

  if (min) return (
    <div style={{ flex: '0 0 32%', background: C.neutral, borderLeft: `1px solid ${C.border}`, display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 24 }}>
      <button onClick={() => setMin(false)} style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: R.full, padding: '10px 20px', cursor: 'pointer', color: C.secondary, fontSize: 14, fontFamily: SERIF, display: 'flex', alignItems: 'center', gap: 8 }}
        onMouseEnter={e => e.currentTarget.style.borderColor = C.text} onMouseLeave={e => e.currentTarget.style.borderColor = C.border}>
        <Ico.Chat size={14} color={C.secondary} /> Show AI Companion
      </button>
    </div>
  );

  return (
    <div style={{ flex: '0 0 32%', background: C.neutral, borderLeft: `1px solid ${C.border}`, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <div style={{ height: 56, borderBottom: `1px solid ${C.border}`, background: C.surface, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 24px', flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
          <Ico.Chat size={14} color={C.secondary} />
          <span style={{ fontSize: 15, fontWeight: 500, color: C.text, fontFamily: SERIF }}>AI Companion</span>
          <span style={{ width: 1, height: 12, background: C.border, margin: '0 2px' }} />
          <span style={{ fontSize: 11, color: C.muted, fontFamily: SERIF }}>{stage.label}</span>
        </div>
        <div style={{ display: 'flex', gap: 6 }}>
          <button onClick={() => onNavigate('companion', stageKey)} style={{ background: 'none', border: `1px solid ${C.border}`, borderRadius: R.full, padding: '3px 10px', cursor: 'pointer', fontSize: 11, fontWeight: 500, color: C.secondary, fontFamily: SERIF, transition: 'border-color .15s' }}
            onMouseEnter={e => e.currentTarget.style.borderColor = C.text} onMouseLeave={e => e.currentTarget.style.borderColor = C.border}>
            Expand
          </button>
          <button onClick={() => setMin(true)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 5, display: 'flex', borderRadius: R.full }}
            onMouseEnter={e => e.currentTarget.style.background = C.neutral} onMouseLeave={e => e.currentTarget.style.background = 'none'}>
            <Ico.Minus size={14} color={C.muted} />
          </button>
        </div>
      </div>

      <div ref={scrollRef} style={{ flex: 1, overflowY: 'auto', padding: '20px 20px 8px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {msgs.map((m, i) => m.role === 'ai' ? (
            <div key={i} style={{ background: C.surface, borderLeft: `2px solid ${C.text}`, borderRadius: `0 ${R.md}px ${R.md}px 0`, padding: '14px 18px' }}>
              <p style={{ fontSize: 15, fontWeight: 400, color: C.text, lineHeight: '26px', whiteSpace: 'pre-line', margin: 0, fontFamily: SERIF }}>{m.content}</p>
            </div>
          ) : (
            <div key={i} style={{ background: C.border, borderRadius: `${R.md}px ${R.md}px 0 ${R.md}px`, padding: '12px 16px', alignSelf: 'flex-end', maxWidth: '88%' }}>
              <p style={{ fontSize: 14, fontWeight: 400, color: C.text, lineHeight: '22px', margin: 0, fontFamily: SERIF }}>{m.content}</p>
            </div>
          ))}
          {loading && (
            <div style={{ background: C.surface, borderLeft: `2px solid ${C.text}`, borderRadius: `0 ${R.md}px ${R.md}px 0`, padding: '14px 18px' }}>
              <TypingDots />
            </div>
          )}
        </div>
      </div>

      {msgs.length <= 1 && !loading && (
        <div style={{ padding: '8px 20px 16px', flexShrink: 0 }}>
          <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: C.muted, marginBottom: 10, fontFamily: SERIF }}>Suggested prompts</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
            {stage.prompts.map((p, i) => (
              <button key={i} onClick={() => sendMsg(p)}
                style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: R.full, padding: '10px 18px', cursor: 'pointer', fontSize: 13, fontWeight: 400, color: C.text, fontFamily: SERIF, textAlign: 'left', transition: 'border-color .15s' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = C.text}
                onMouseLeave={e => e.currentTarget.style.borderColor = C.border}>
                {p}
              </button>
            ))}
          </div>
        </div>
      )}

      <div style={{ borderTop: `1px solid ${C.border}`, padding: '16px 20px', background: C.surface, flexShrink: 0 }}>
        <textarea ref={inputRef} value={input} onChange={e => setInput(e.target.value)} rows={3}
          placeholder="Type your question or paste your notes…"
          onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMsg(); } }}
          style={{ width: '100%', background: C.neutral, border: '1px solid transparent', borderRadius: R.md, padding: '12px 16px', fontSize: 14, fontWeight: 400, color: C.text, fontFamily: SERIF, outline: 'none', resize: 'none', lineHeight: '23px', transition: 'all .15s' }}
          onFocus={e => { e.target.style.borderColor = C.text; e.target.style.background = C.surface; }}
          onBlur={e => { e.target.style.borderColor = 'transparent'; e.target.style.background = C.neutral; }} />
        <button onClick={() => sendMsg()} disabled={!input.trim() || loading}
          style={{ marginTop: 8, width: '100%', background: input.trim() && !loading ? C.text : C.border, border: 'none', borderRadius: R.full, height: 44, fontSize: 15, fontWeight: 500, color: input.trim() && !loading ? '#fff' : C.muted, cursor: input.trim() && !loading ? 'pointer' : 'default', fontFamily: SERIF, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, transition: 'all .15s' }}
          onMouseEnter={e => { if (input.trim() && !loading) e.currentTarget.style.background = C.primaryHv; }}
          onMouseLeave={e => { e.currentTarget.style.background = input.trim() && !loading ? C.text : C.border; }}>
          {loading ? 'Thinking…' : <><Ico.Send size={12} color={input.trim() && !loading ? '#fff' : C.muted} /> Send</>}
        </button>
        <p style={{ fontSize: 11, color: C.muted, textAlign: 'center', marginTop: 10, fontFamily: SERIF }}>
          Paste raw interview notes and ask me to find themes.
        </p>
      </div>
    </div>
  );
}

export default function DetailScreen({ stageKey, onNavigate, projectName, density, progress }) {
  const [tab, setTab] = useState('LEARN');
  const [pending, setPending] = useState(null);
  const stage = STAGES[stageKey];
  const pad = density === 'compact' ? '28px 36px' : '40px 48px';

  useEffect(() => setTab('LEARN'), [stageKey]);

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <TopNav projectName={projectName} stageKey={stageKey} onNavigate={onNavigate} />
      <StageBar stageKey={stageKey} progress={progress} onNavigate={onNavigate} />

      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        <div style={{ flex: '0 0 68%', display: 'flex', flexDirection: 'column', overflow: 'hidden', borderRight: `1px solid ${C.border}` }}>
          <div style={{ padding: pad, overflowY: 'auto', flex: 1 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', background: C.text, borderRadius: R.full, padding: '5px 16px', marginBottom: density === 'compact' ? 16 : 24 }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: '#fff', letterSpacing: '1.2px', textTransform: 'uppercase', fontFamily: SERIF, whiteSpace: 'nowrap' }}>
                {stage.num} · {stage.label}
              </span>
            </div>
            <h1 style={{ fontSize: density === 'compact' ? 26 : 34, fontWeight: 400, color: C.text, margin: `0 0 ${density === 'compact' ? '10px' : '14px'}`, lineHeight: 1.15, letterSpacing: '-0.3px', fontStyle: 'italic', fontFamily: SERIF }}>
              {stage.title}
            </h1>
            <p style={{ fontSize: 17, fontWeight: 400, color: C.secondary, lineHeight: '30px', maxWidth: 560, margin: `0 0 ${density === 'compact' ? '24px' : '36px'}` }}>
              {stage.sub}
            </p>

            <div style={{ display: 'flex', gap: 6, marginBottom: density === 'compact' ? 28 : 44 }}>
              {['LEARN', 'DO', 'TOOLS'].map(t => (
                <button key={t} onClick={() => setTab(t)}
                  style={{ background: tab === t ? C.text : 'transparent', border: `1px solid ${tab === t ? C.text : C.border}`, borderRadius: R.full, padding: '0 20px', height: 36, fontSize: 12, fontWeight: tab === t ? 700 : 400, color: tab === t ? '#fff' : C.secondary, cursor: 'pointer', fontFamily: SERIF, letterSpacing: '0.8px', transition: 'all .15s', textTransform: 'uppercase' }}
                  onMouseEnter={e => { if (tab !== t) { e.currentTarget.style.background = C.neutral; e.currentTarget.style.borderColor = C.text; e.currentTarget.style.color = C.text; } }}
                  onMouseLeave={e => { if (tab !== t) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = C.border; e.currentTarget.style.color = C.secondary; } }}>
                  {t}
                </button>
              ))}
            </div>

            {tab === 'LEARN' && <LearnTab stage={stage} onTryInCompanion={() => setPending({ text: stage.learn.powerup, autoSend: false })} onGoToDo={() => setTab('DO')} />}
            {tab === 'DO' && <DoTab stage={stage} onSendToCompanion={text => setPending({ text, autoSend: true })} />}
            {tab === 'TOOLS' && <ToolsTab stage={stage} onSendToCompanion={text => setPending({ text, autoSend: true })} />}
          </div>
        </div>

        <AiPanel stageKey={stageKey} pendingPrompt={pending} onPendingUsed={() => setPending(null)} onNavigate={onNavigate} />
      </div>
    </div>
  );
}
