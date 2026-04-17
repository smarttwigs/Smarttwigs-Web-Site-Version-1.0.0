// Icons for Technical Management deep-dive section.

export function FractionalCtoIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
      {/* Crown / leader */}
      <path d="M16 30 L24 18 L32 28 L40 14 L48 28 L56 18 L64 30 L60 50 L20 50 Z" fill="currentColor" fillOpacity="0.1" strokeLinejoin="round" />
      <path d="M16 30 L24 18 L32 28 L40 14 L48 28 L56 18 L64 30 L60 50 L20 50 Z" strokeLinejoin="round" />
      <line x1="20" y1="56" x2="60" y2="56" strokeLinecap="round" strokeWidth="2.5" />
      {/* Gems */}
      <circle cx="24" cy="18" r="2" fill="currentColor" />
      <circle cx="40" cy="14" r="2.5" fill="currentColor" />
      <circle cx="56" cy="18" r="2" fill="currentColor" />
      {/* Org under */}
      <line x1="40" y1="62" x2="40" y2="68" />
      <line x1="28" y1="68" x2="52" y2="68" />
      <circle cx="28" cy="72" r="2.5" fill="currentColor" />
      <circle cx="40" cy="72" r="2.5" fill="currentColor" />
      <circle cx="52" cy="72" r="2.5" fill="currentColor" />
    </svg>
  );
}

export function OrgDesignIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
      {/* Top node */}
      <rect x="32" y="10" width="16" height="10" rx="1" fill="currentColor" fillOpacity="0.2" />
      <rect x="32" y="10" width="16" height="10" rx="1" />
      {/* Middle nodes */}
      <rect x="10" y="34" width="16" height="10" rx="1" fill="currentColor" fillOpacity="0.15" />
      <rect x="10" y="34" width="16" height="10" rx="1" />
      <rect x="32" y="34" width="16" height="10" rx="1" fill="currentColor" fillOpacity="0.15" />
      <rect x="32" y="34" width="16" height="10" rx="1" />
      <rect x="54" y="34" width="16" height="10" rx="1" fill="currentColor" fillOpacity="0.15" />
      <rect x="54" y="34" width="16" height="10" rx="1" />
      {/* Bottom nodes */}
      <rect x="10" y="58" width="16" height="10" rx="1" />
      <rect x="32" y="58" width="16" height="10" rx="1" />
      <rect x="54" y="58" width="16" height="10" rx="1" />
      {/* Connectors */}
      <line x1="40" y1="20" x2="40" y2="26" />
      <line x1="18" y1="26" x2="62" y2="26" />
      <line x1="18" y1="26" x2="18" y2="34" />
      <line x1="40" y1="26" x2="40" y2="34" />
      <line x1="62" y1="26" x2="62" y2="34" />
      <line x1="18" y1="44" x2="18" y2="58" />
      <line x1="40" y1="44" x2="40" y2="58" />
      <line x1="62" y1="44" x2="62" y2="58" />
    </svg>
  );
}

export function AgileCoachIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
      {/* Circular sprint loop */}
      <circle cx="40" cy="40" r="22" fill="none" strokeDasharray="6 4" />
      {/* Arrowhead */}
      <path d="M58 28 L62 24 L66 28" strokeLinecap="round" strokeLinejoin="round" />
      {/* Inner steps */}
      <circle cx="40" cy="22" r="3" fill="currentColor" />
      <circle cx="58" cy="40" r="3" fill="currentColor" />
      <circle cx="40" cy="58" r="3" fill="currentColor" />
      <circle cx="22" cy="40" r="3" fill="currentColor" />
      {/* Center arrow */}
      <path d="M34 40 L46 40 M44 38 L46 40 L44 42" strokeLinecap="round" strokeWidth="2.5" />
    </svg>
  );
}

export function DueDiligenceIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
      {/* Stack of documents */}
      <rect x="14" y="12" width="40" height="50" rx="1" fill="currentColor" fillOpacity="0.1" />
      <rect x="14" y="12" width="40" height="50" rx="1" />
      <rect x="20" y="18" width="40" height="50" rx="1" fill="currentColor" fillOpacity="0.05" />
      <rect x="20" y="18" width="40" height="50" rx="1" />
      <rect x="26" y="24" width="40" height="50" rx="1" fill="currentColor" fillOpacity="0" />
      <rect x="26" y="24" width="40" height="50" rx="1" />
      {/* Lines on top doc */}
      <line x1="32" y1="34" x2="60" y2="34" strokeLinecap="round" />
      <line x1="32" y1="42" x2="58" y2="42" strokeLinecap="round" />
      <line x1="32" y1="50" x2="60" y2="50" strokeLinecap="round" />
      <line x1="32" y1="58" x2="54" y2="58" strokeLinecap="round" />
      {/* Magnifying glass */}
      <circle cx="56" cy="58" r="6" fill="currentColor" fillOpacity="0.3" />
      <circle cx="56" cy="58" r="6" />
      <line x1="60" y1="62" x2="64" y2="66" strokeLinecap="round" strokeWidth="2.5" />
    </svg>
  );
}

export function OkrIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
      {/* Bullseye */}
      <circle cx="40" cy="40" r="26" fill="currentColor" fillOpacity="0.05" />
      <circle cx="40" cy="40" r="26" />
      <circle cx="40" cy="40" r="18" fill="currentColor" fillOpacity="0.08" />
      <circle cx="40" cy="40" r="18" />
      <circle cx="40" cy="40" r="10" fill="currentColor" fillOpacity="0.15" />
      <circle cx="40" cy="40" r="10" />
      <circle cx="40" cy="40" r="3" fill="currentColor" />
      {/* Arrow */}
      <line x1="60" y1="20" x2="44" y2="36" strokeLinecap="round" strokeWidth="2.5" />
      <path d="M56 18 L60 20 L60 24" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M44 36 L40 40 L42 32 Z" fill="currentColor" />
    </svg>
  );
}

export function MaIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
      {/* Two companies merging */}
      <rect x="8" y="20" width="22" height="40" rx="2" fill="currentColor" fillOpacity="0.1" />
      <rect x="8" y="20" width="22" height="40" rx="2" />
      <rect x="50" y="20" width="22" height="40" rx="2" fill="currentColor" fillOpacity="0.1" />
      <rect x="50" y="20" width="22" height="40" rx="2" />
      {/* Building windows */}
      <rect x="14" y="28" width="4" height="4" fill="currentColor" />
      <rect x="22" y="28" width="4" height="4" fill="currentColor" />
      <rect x="14" y="38" width="4" height="4" fill="currentColor" />
      <rect x="22" y="38" width="4" height="4" fill="currentColor" />
      <rect x="14" y="48" width="4" height="4" fill="currentColor" />
      <rect x="22" y="48" width="4" height="4" fill="currentColor" />
      <rect x="56" y="28" width="4" height="4" fill="currentColor" />
      <rect x="64" y="28" width="4" height="4" fill="currentColor" />
      <rect x="56" y="38" width="4" height="4" fill="currentColor" />
      <rect x="64" y="38" width="4" height="4" fill="currentColor" />
      <rect x="56" y="48" width="4" height="4" fill="currentColor" />
      <rect x="64" y="48" width="4" height="4" fill="currentColor" />
      {/* Merge arrows */}
      <path d="M32 36 L46 36 M44 34 L46 36 L44 38" strokeLinecap="round" strokeWidth="2.5" />
      <path d="M48 44 L34 44 M36 42 L34 44 L36 46" strokeLinecap="round" strokeWidth="2.5" />
    </svg>
  );
}
