import { C, R, SERIF } from '../data/tokens';
import { Ico } from '../components/Icons';

export default function LandingScreen({ onNavigate }) {
  return (
    <div style={{ minHeight: '100vh', background: C.bg, overflowY: 'auto' }}>
      <nav style={{ height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 48px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
          <Ico.Lens size={20} color={C.text} />
          <span style={{ fontSize: 16, fontWeight: 600, color: C.text, letterSpacing: '-0.3px', fontFamily: SERIF }}>Lensa</span>
        </div>
        <button onClick={() => onNavigate('map')} style={{ background: 'none', border: `1px solid ${C.border}`, borderRadius: R.full, padding: '0 20px', height: 40, fontSize: 14, fontWeight: 400, color: C.text, cursor: 'pointer', fontFamily: SERIF, transition: 'border-color .15s' }}
          onMouseEnter={e => e.currentTarget.style.borderColor = C.text} onMouseLeave={e => e.currentTarget.style.borderColor = C.border}>
          Sign in
        </button>
      </nav>

      <div style={{ maxWidth: 720, margin: '72px auto 0', padding: '0 40px', textAlign: 'center' }}>
        <h1 style={{ fontSize: 56, fontWeight: 400, color: C.text, lineHeight: 1.1, letterSpacing: '-1px', fontFamily: SERIF, fontStyle: 'italic', marginBottom: 24 }}>
          See problems clearly.<br />Solve them with AI.
        </h1>
        <p style={{ fontSize: 18, fontWeight: 400, color: C.secondary, lineHeight: '30px', maxWidth: 540, margin: '0 auto 40px' }}>
          A guided Design Thinking playbook with an AI companion at every stage — built for designers who want to think better and move faster.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginBottom: 20 }}>
          <button onClick={() => onNavigate('signup')}
            style={{ background: C.text, border: 'none', borderRadius: R.full, padding: '0 36px', height: 52, fontSize: 16, fontWeight: 500, color: '#fff', cursor: 'pointer', fontFamily: SERIF, transition: 'background .15s' }}
            onMouseEnter={e => e.currentTarget.style.background = C.primaryHv} onMouseLeave={e => e.currentTarget.style.background = C.text}>
            Start for Free →
          </button>
          <button onClick={() => onNavigate('map')}
            style={{ background: 'transparent', border: `1px solid ${C.border}`, borderRadius: R.full, padding: '0 28px', height: 52, fontSize: 16, fontWeight: 400, color: C.text, cursor: 'pointer', fontFamily: SERIF, transition: 'all .15s' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = C.text; e.currentTarget.style.background = C.neutral; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.background = 'transparent'; }}>
            See How It Works
          </button>
        </div>
        <p style={{ fontSize: 13, fontWeight: 400, color: C.muted, fontFamily: SERIF }}>
          Built for product designers and anyone who wants to think better.
        </p>
      </div>

      <div style={{ maxWidth: 900, margin: '72px auto 0', padding: '0 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20 }}>
          {[
            { icon: '🧭', title: 'Learn', desc: 'Grasp Design Thinking concepts and see AI in action at every stage.' },
            { icon: '⚡', title: 'Do', desc: 'Apply the framework to your own real project with structured exercises.' },
            { icon: '💬', title: 'Return', desc: "Come back mid-project when you're blocked. Your companion remembers your work." },
          ].map((step, i) => (
            <div key={i} style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: R.lg, padding: '28px 24px' }}>
              <div style={{ fontSize: 28, marginBottom: 12 }}>{step.icon}</div>
              <p style={{ fontSize: 16, fontWeight: 600, color: C.text, marginBottom: 8, fontFamily: SERIF }}>{step.title}</p>
              <p style={{ fontSize: 14, fontWeight: 400, color: C.secondary, lineHeight: '22px' }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ textAlign: 'center', padding: '60px 0 40px', fontSize: 14, fontWeight: 400, color: C.muted, fontFamily: SERIF }}>
        Already started?{' '}
        <button onClick={() => onNavigate('map')} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 14, fontWeight: 500, color: C.text, fontFamily: SERIF, textDecoration: 'underline', textDecorationColor: C.border, textUnderlineOffset: 3 }}>
          Continue where I left off →
        </button>
      </div>
    </div>
  );
}
