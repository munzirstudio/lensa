import { useState } from 'react';
import { C, R, SERIF } from '../data/tokens';
import { Ico } from '../components/Icons';

export default function SignupScreen({ onNavigate }) {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [focused, setFocused] = useState(null);
  const [showPw, setShowPw] = useState(false);
  const [phase, setPhase] = useState('idle');

  const inpStyle = (key) => ({
    width: '100%', background: C.bg,
    border: `1px solid ${focused === key ? C.text : C.border}`,
    borderRadius: R.full, padding: '0 20px', height: 48,
    fontSize: 15, fontWeight: 400, color: C.text, fontFamily: SERIF,
    outline: 'none', lineHeight: '48px', transition: 'border-color .15s',
  });

  const submit = async () => {
    if (phase !== 'idle') return;
    setPhase('loading');
    await new Promise(r => setTimeout(r, 820));
    setPhase('success');
    await new Promise(r => setTimeout(r, 480));
    onNavigate('setup');
  };

  const btnBg = phase === 'success' ? C.success : phase === 'loading' ? C.border : C.text;
  const btnColor = phase === 'loading' ? C.muted : '#fff';
  const btnLabel = phase === 'loading' ? 'Creating account…' : phase === 'success' ? '✓ Account created!' : 'Create Account →';

  return (
    <div style={{ minHeight: '100vh', background: C.bg, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '32px 24px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 36, cursor: 'pointer' }} onClick={() => onNavigate('landing')}>
        <Ico.Lens size={20} color={C.text} />
        <span style={{ fontSize: 16, fontWeight: 600, color: C.text, letterSpacing: '-0.3px', fontFamily: SERIF }}>Lensa</span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 0, marginBottom: 28 }}>
        {[{ label: 'Account', step: 1 }, { label: 'Project', step: 2 }, { label: 'Learn', step: 3 }].map((s, i) => (
          <div key={s.step} style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
              <div style={{ width: 22, height: 22, borderRadius: '50%', background: s.step === 1 ? C.text : C.border, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span style={{ fontSize: 10, fontWeight: 700, color: s.step === 1 ? '#fff' : C.muted, fontFamily: SERIF }}>{s.step}</span>
              </div>
              <span style={{ fontSize: 12, fontWeight: s.step === 1 ? 600 : 400, color: s.step === 1 ? C.text : C.muted, fontFamily: SERIF, whiteSpace: 'nowrap' }}>{s.label}</span>
            </div>
            {i < 2 && <div style={{ width: 28, height: 1, background: C.border, margin: '0 10px', flexShrink: 0 }} />}
          </div>
        ))}
      </div>

      <div style={{ width: '100%', maxWidth: 480, background: C.surface, border: `1px solid ${C.border}`, borderRadius: R.xl, padding: '44px 48px' }}>
        <p style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1.2px', color: C.text, marginBottom: 10, fontFamily: SERIF }}>Get started — it's free</p>
        <h2 style={{ fontSize: 28, fontWeight: 400, color: C.text, marginBottom: 6, letterSpacing: '-0.3px', fontFamily: SERIF, fontStyle: 'italic' }}>Create your account</h2>
        <p style={{ fontSize: 16, fontWeight: 400, color: C.secondary, lineHeight: '26px', marginBottom: 32 }}>Your AI design thinking companion awaits.</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 24 }}>
          <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <span style={{ fontSize: 13, fontWeight: 600, color: C.text, fontFamily: SERIF }}>Full name</span>
            <input value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
              placeholder="e.g. Maya Chen" style={inpStyle('name')}
              onFocus={() => setFocused('name')} onBlur={() => setFocused(null)} />
          </label>
          <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <span style={{ fontSize: 13, fontWeight: 600, color: C.text, fontFamily: SERIF }}>Work email</span>
            <input type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
              placeholder="you@company.com" style={inpStyle('email')}
              onFocus={() => setFocused('email')} onBlur={() => setFocused(null)} />
          </label>
          <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <span style={{ fontSize: 13, fontWeight: 600, color: C.text, fontFamily: SERIF }}>Password</span>
            <div style={{ position: 'relative' }}>
              <input type={showPw ? 'text' : 'password'} value={form.password}
                onChange={e => setForm(f => ({ ...f, password: e.target.value }))}
                placeholder="At least 8 characters"
                style={{ ...inpStyle('password'), paddingRight: 64 }}
                onFocus={() => setFocused('password')} onBlur={() => setFocused(null)}
                onKeyDown={e => e.key === 'Enter' && submit()} />
              <button type="button" onClick={() => setShowPw(s => !s)}
                style={{ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', fontSize: 12, color: C.muted, fontFamily: SERIF, padding: 0, lineHeight: 1 }}>
                {showPw ? 'Hide' : 'Show'}
              </button>
            </div>
          </label>
        </div>

        <button onClick={submit}
          style={{ width: '100%', background: btnBg, border: 'none', borderRadius: R.full, height: 52, fontSize: 16, fontWeight: 500, color: btnColor, cursor: phase === 'idle' ? 'pointer' : 'default', fontFamily: SERIF, transition: 'background .2s', marginBottom: 14 }}
          onMouseEnter={e => { if (phase === 'idle') e.currentTarget.style.background = C.primaryHv; }}
          onMouseLeave={e => { e.currentTarget.style.background = btnBg; }}>
          {btnLabel}
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
          <div style={{ flex: 1, height: 1, background: C.border }} />
          <span style={{ fontSize: 12, color: C.muted, fontFamily: SERIF }}>or</span>
          <div style={{ flex: 1, height: 1, background: C.border }} />
        </div>

        <button onClick={() => onNavigate('setup')}
          style={{ width: '100%', background: 'transparent', border: `1px solid ${C.border}`, borderRadius: R.full, height: 46, fontSize: 14, fontWeight: 400, color: C.text, cursor: 'pointer', fontFamily: SERIF, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, transition: 'all .15s', marginBottom: 22 }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = C.text; e.currentTarget.style.background = C.neutral; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.background = 'transparent'; }}>
          <svg width="17" height="17" viewBox="0 0 18 18" fill="none">
            <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.716v2.259h2.908C16.658 14.015 17.64 11.707 17.64 9.2z" fill="#4285F4" />
            <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9 18z" fill="#34A853" />
            <path d="M3.964 10.71c-.18-.54-.282-1.117-.282-1.71s.102-1.17.282-1.71V4.958H.957C.347 6.173 0 7.548 0 9s.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05" />
            <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.958L3.964 6.29C4.672 4.163 6.656 3.58 9 3.58z" fill="#EA4335" />
          </svg>
          Continue with Google
        </button>

        <p style={{ fontSize: 13, color: C.muted, textAlign: 'center', fontFamily: SERIF }}>
          Already have an account?{' '}
          <button onClick={() => onNavigate('map')} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 13, fontWeight: 600, color: C.text, fontFamily: SERIF, padding: 0, textDecoration: 'underline', textDecorationColor: C.border, textUnderlineOffset: 3 }}>
            Sign in →
          </button>
        </p>
      </div>

      <p style={{ fontSize: 12, color: C.muted, marginTop: 20, textAlign: 'center', maxWidth: 380, lineHeight: '20px', fontFamily: SERIF }}>
        By creating an account you agree to our{' '}
        <span style={{ color: C.text, textDecoration: 'underline', textDecorationColor: C.border, cursor: 'pointer' }}>Terms of Service</span>
        {' '}and{' '}
        <span style={{ color: C.text, textDecoration: 'underline', textDecorationColor: C.border, cursor: 'pointer' }}>Privacy Policy</span>.
      </p>
    </div>
  );
}
