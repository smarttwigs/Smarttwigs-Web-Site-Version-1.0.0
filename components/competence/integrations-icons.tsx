// Icons for System Integrations deep-dive section.

export function ApiIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
      {/* Code brackets */}
      <path d="M22 22 L12 40 L22 58" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
      <path d="M58 22 L68 40 L58 58" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
      {/* Slash */}
      <line x1="44" y1="22" x2="36" y2="58" strokeLinecap="round" strokeWidth="2.5" />
      {/* Bottom dots */}
      <circle cx="40" cy="68" r="2" fill="currentColor" />
    </svg>
  );
}

export function EtlIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
      {/* Source */}
      <ellipse cx="14" cy="20" rx="8" ry="3" fill="currentColor" fillOpacity="0.1" />
      <ellipse cx="14" cy="20" rx="8" ry="3" />
      <path d="M6 20 L6 30 Q6 33 14 33 Q22 33 22 30 L22 20" />
      {/* Transform box */}
      <rect x="32" y="24" width="20" height="14" rx="1" fill="currentColor" fillOpacity="0.1" />
      <rect x="32" y="24" width="20" height="14" rx="1" />
      <line x1="36" y1="29" x2="48" y2="29" strokeLinecap="round" />
      <line x1="36" y1="33" x2="44" y2="33" strokeLinecap="round" />
      {/* Destination */}
      <rect x="60" y="14" width="14" height="22" rx="1" fill="currentColor" fillOpacity="0.1" />
      <rect x="60" y="14" width="14" height="22" rx="1" />
      <line x1="60" y1="20" x2="74" y2="20" />
      <line x1="60" y1="26" x2="74" y2="26" />
      {/* Arrows */}
      <path d="M22 30 L30 30 M28 28 L30 30 L28 32" strokeLinecap="round" />
      <path d="M52 30 L58 25 M56 24 L58 25 L57 27" strokeLinecap="round" />
      {/* Bottom return path */}
      <path d="M14 36 Q14 60 40 60 Q66 60 66 38" strokeDasharray="3 3" strokeLinecap="round" />
    </svg>
  );
}

export function EventIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
      {/* Producer */}
      <rect x="8" y="32" width="14" height="16" rx="1" fill="currentColor" fillOpacity="0.1" />
      <rect x="8" y="32" width="14" height="16" rx="1" />
      {/* Queue (multiple slots) */}
      <rect x="28" y="34" width="6" height="12" />
      <rect x="36" y="34" width="6" height="12" fill="currentColor" fillOpacity="0.4" />
      <rect x="44" y="34" width="6" height="12" fill="currentColor" fillOpacity="0.4" />
      <rect x="52" y="34" width="6" height="12" />
      {/* Consumers */}
      <circle cx="68" cy="22" r="6" fill="currentColor" fillOpacity="0.15" />
      <circle cx="68" cy="22" r="6" />
      <circle cx="68" cy="40" r="6" fill="currentColor" fillOpacity="0.15" />
      <circle cx="68" cy="40" r="6" />
      <circle cx="68" cy="58" r="6" fill="currentColor" fillOpacity="0.15" />
      <circle cx="68" cy="58" r="6" />
      {/* Lines from queue to consumers */}
      <line x1="58" y1="36" x2="62" y2="22" strokeLinecap="round" strokeDasharray="2 2" />
      <line x1="58" y1="40" x2="62" y2="40" strokeLinecap="round" strokeDasharray="2 2" />
      <line x1="58" y1="44" x2="62" y2="58" strokeLinecap="round" strokeDasharray="2 2" />
    </svg>
  );
}

export function IdentityIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
      {/* Key shape */}
      <circle cx="22" cy="40" r="12" fill="currentColor" fillOpacity="0.1" />
      <circle cx="22" cy="40" r="12" />
      <circle cx="22" cy="40" r="4" fill="currentColor" />
      {/* Key shaft */}
      <line x1="34" y1="40" x2="60" y2="40" strokeLinecap="round" strokeWidth="3" />
      <line x1="50" y1="40" x2="50" y2="48" strokeLinecap="round" strokeWidth="3" />
      <line x1="58" y1="40" x2="58" y2="46" strokeLinecap="round" strokeWidth="3" />
      {/* Lock target */}
      <rect x="62" y="56" width="14" height="12" rx="1" fill="currentColor" fillOpacity="0.15" />
      <rect x="62" y="56" width="14" height="12" rx="1" />
      <path d="M65 56 L65 52 Q65 49 69 49 Q73 49 73 52 L73 56" strokeWidth="1.5" />
    </svg>
  );
}

export function WebhookIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
      {/* Three circles forming webhook logo */}
      <circle cx="40" cy="22" r="8" fill="currentColor" fillOpacity="0.1" />
      <circle cx="40" cy="22" r="8" />
      <circle cx="22" cy="56" r="8" fill="currentColor" fillOpacity="0.1" />
      <circle cx="22" cy="56" r="8" />
      <circle cx="58" cy="56" r="8" fill="currentColor" fillOpacity="0.1" />
      <circle cx="58" cy="56" r="8" />
      {/* Connecting paths */}
      <line x1="36" y1="29" x2="26" y2="49" strokeLinecap="round" strokeWidth="2.5" />
      <line x1="44" y1="29" x2="54" y2="49" strokeLinecap="round" strokeWidth="2.5" />
      <line x1="30" y1="56" x2="50" y2="56" strokeLinecap="round" strokeWidth="2.5" />
    </svg>
  );
}

export function LegacyIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
      {/* Old monitor / legacy box */}
      <rect x="10" y="14" width="28" height="22" rx="1" fill="currentColor" fillOpacity="0.1" />
      <rect x="10" y="14" width="28" height="22" rx="1" />
      <line x1="14" y1="20" x2="34" y2="20" strokeLinecap="round" />
      <line x1="14" y1="24" x2="30" y2="24" strokeLinecap="round" />
      <line x1="14" y1="28" x2="32" y2="28" strokeLinecap="round" />
      {/* Stand */}
      <line x1="20" y1="36" x2="28" y2="36" strokeWidth="3" />
      {/* Arrow */}
      <path d="M42 30 L52 30 M50 28 L52 30 L50 32" strokeLinecap="round" strokeWidth="2.5" />
      {/* Modern device */}
      <rect x="56" y="10" width="18" height="30" rx="2" fill="currentColor" fillOpacity="0.15" />
      <rect x="56" y="10" width="18" height="30" rx="2" />
      <line x1="62" y1="36" x2="68" y2="36" strokeLinecap="round" />
      {/* Cloud below */}
      <path
        d="M22 56 Q14 56 14 62 Q14 68 22 68 L52 68 Q60 68 60 62 Q60 54 50 54 Q48 48 40 48 Q30 48 28 56 Z"
        fill="currentColor"
        fillOpacity="0.08"
        strokeLinejoin="round"
      />
      <path
        d="M22 56 Q14 56 14 62 Q14 68 22 68 L52 68 Q60 68 60 62 Q60 54 50 54 Q48 48 40 48 Q30 48 28 56 Z"
        strokeLinejoin="round"
      />
    </svg>
  );
}
