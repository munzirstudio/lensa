import { useState } from 'react';
import { C, R, SERIF } from '../data/tokens';
import { Ico } from '../components/Icons';

export default function SetupScreen({ onNavigate, onSetupComplete }) {
  const [form, setForm] = useState({ name: '', problem: '', who: '' });
  const [focused, setFocused] = useState(null);

  const fieldStyle = (key) => ({
    width: '100%', background: C.bg,
    border: `1px solid ${focused === key ? C.text : C.border}`,
    borderRadius: key === 'problem' ? R.md : R.full,
    padding: key === 'problem' ? '12px 20px' : '0 20px',
    height: key === 'problem' ? 'auto' : 48,
    fontSize: 15, fontWeight: 400, color: C.text, fontFamily: SERIF,
    outline: 'none', lineHeight: key === 'problem' ? '24px' : '48px',
    transition: 'border-color .15s', resize: 'vertical',
  });

  return (
    <div style={{ minHeight: '100vh', background: C.bg, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px', position: 'relative' }}>
      <button onClick={() => onNavigate('landing')} style={{ position: 'absolute', top: 24, left: 40, background: 'none', border: 'none', cursor: 'pointer', fontSize: 13, color: C.muted, fontFamily: SERIF, display: 'flex', alignItems: 'center', gap: 6 }}>
        <Ico.ChevronLeft size={13} color={C.muted} /> Back
      </button>

      <div style={{ width: '100%', maxWidth: 560, background: C.surface, border: `1px solid ${C.border}`, borderRadius: R.xl, padding: '48px' }}>
        <p style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1.2px', color: C.text, marginBottom: 16, fontFamily: SERIF }}>Let's get started</p>
        <h2 style={{ fontSize: 28, fontWeight: 400, color: C.text, marginBottom: 10, letterSpacing: '-0.3px', fontFamily: SERIF, fontStyle: 'italic' }}>Set up your project</h2>
        <p style={{ fontSize: 16, fontWeight: 400, color: C.secondary, lineHeight: '26px', marginBottom: 36 }}>
          You don't need to have it figured out yet.<br />We'll refine everything together as you go.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, marginBottom: 32 }}>
          <label style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
            <span style={{ fontSize: 13, fontWeight: 600, color: C.text, fontFamily: SERIF }}>Project name</span>
            <input value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
              placeholder="e.g. Redesign onboarding flow"
              style={fieldStyle('name')} onFocus={() => setFocused('name')} onBlur={() => setFocused(null)} />
          </label>
          <label style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
            <span style={{ fontSize: 13, fontWeight: 600, color: C.text, fontFamily: SERIF }}>What problem are you working on?</span>
            <textarea value={form.problem} onChange={e => setForm(f => ({ ...f, problem: e.target.value }))} rows={3}
              placeholder={"Describe it roughly — no pressure to be precise.\ne.g. Users keep dropping off during signup. I don't know why."}
              style={fieldStyle('problem')} onFocus={() => setFocused('problem')} onBlur={() => setFocused(null)} />
            <span style={{ fontSize: 12, color: C.muted, fontFamily: SERIF }}>💡 Tip: If you're not sure, describe the symptom, not the solution.</span>
          </label>
          <label style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
            <span style={{ fontSize: 13, fontWeight: 600, color: C.text, fontFamily: SERIF }}>Who are you designing for?</span>
            <input value={form.who} onChange={e => setForm(f => ({ ...f, who: e.target.value }))}
              placeholder="e.g. First-time users of a fintech app, aged 25–35"
              style={fieldStyle('who')} onFocus={() => setFocused('who')} onBlur={() => setFocused(null)} />
          </label>
        </div>

        <button onClick={() => onSetupComplete(form)}
          style={{ width: '100%', background: C.text, border: 'none', borderRadius: R.full, height: 52, fontSize: 16, fontWeight: 500, color: '#fff', cursor: 'pointer', fontFamily: SERIF, transition: 'background .15s', marginBottom: 16 }}
          onMouseEnter={e => e.currentTarget.style.background = C.primaryHv} onMouseLeave={e => e.currentTarget.style.background = C.text}>
          Start the Playbook →
        </button>
        <p style={{ fontSize: 12, color: C.muted, textAlign: 'center', fontFamily: SERIF }}>
          Your answers are saved locally. You can update them anytime.
        </p>
      </div>
    </div>
  );
}
