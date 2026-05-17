import { C } from '../data/tokens';

export default function TypingDots() {
  return (
    <div style={{ display: 'flex', gap: 5, alignItems: 'center', padding: '2px 0' }}>
      {[0, 1, 2].map(i => (
        <span key={i} style={{ width: 5, height: 5, borderRadius: '50%', background: C.secondary, display: 'inline-block', animation: `bounce 1.2s ${i * 0.2}s infinite ease-in-out` }} />
      ))}
    </div>
  );
}
