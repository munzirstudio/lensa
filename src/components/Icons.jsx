import { C } from '../data/tokens';

export const Ico = {
  Lens: ({ size = 20, color = C.text }) => (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="6.5" stroke={color} strokeWidth="1.4" />
      <circle cx="10" cy="10" r="2.2" fill={color} />
      <path d="M10 2v1.5M10 16.5V18M2 10h1.5M16.5 10H18" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  ),
  Chat: ({ size = 15, color = C.secondary }) => (
    <svg width={size} height={size} viewBox="0 0 15 15" fill="none">
      <path d="M13 1.5H2c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h2v2.3l2.8-2.3H13c.55 0 1-.45 1-1v-8c0-.55-.45-1-1-1z" stroke={color} strokeWidth="1.2" />
      <path d="M4 5.5h7M4 8h5" stroke={color} strokeWidth="1" strokeLinecap="round" />
    </svg>
  ),
  ChevronRight: ({ size = 14, color = C.muted }) => (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <path d="M5 3l4 4-4 4" stroke={color} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  ChevronLeft: ({ size = 14, color = C.muted }) => (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <path d="M9 3L5 7l4 4" stroke={color} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Minus: ({ size = 14, color = C.muted }) => (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <path d="M2.5 7h9" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  ),
  Settings: ({ size = 17, color = C.secondary }) => (
    <svg width={size} height={size} viewBox="0 0 17 17" fill="none">
      <circle cx="8.5" cy="8.5" r="2.4" stroke={color} strokeWidth="1.2" />
      <path d="M8.5 1.5v1.5M8.5 14v1.5M1.5 8.5H3M14 8.5h1.5M3.2 3.2l1.1 1.1M12.7 12.7l1.1 1.1M3.2 13.8l1.1-1.1M12.7 4.3l1.1-1.1" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  ),
  Send: ({ size = 13, color = '#fff' }) => (
    <svg width={size} height={size} viewBox="0 0 13 13" fill="none">
      <path d="M11.5 1.5L5.5 7.5M11.5 1.5L8.5 12l-3-4.5L1 5l10.5-3.5z" stroke={color} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Outputs: ({ size = 15, color = C.secondary }) => (
    <svg width={size} height={size} viewBox="0 0 15 15" fill="none">
      <rect x="2" y="1.5" width="9" height="12" rx="1.5" stroke={color} strokeWidth="1.2" />
      <path d="M4.5 5h5M4.5 7.5h5M4.5 10h3" stroke={color} strokeWidth="1" strokeLinecap="round" />
    </svg>
  ),
  Lock: ({ size = 14, color = C.muted }) => (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <rect x="2.5" y="6" width="9" height="7" rx="1.5" stroke={color} strokeWidth="1.2" />
      <path d="M4.5 6V4.5a2.5 2.5 0 0 1 5 0V6" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  ),
  Check: ({ size = 14, color = C.success }) => (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <path d="M2.5 7l3 3 6-6" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Sparkle: ({ size = 14, color = C.text }) => (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <path d="M7 1.5L8 6l4.5 1-4.5 1-1 4.5-1-4.5L1.5 7l4.5-1z" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Play: ({ size = 14, color = '#fff' }) => (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <path d="M4 2.5l8 4.5-8 4.5z" fill={color} />
    </svg>
  ),
};
