// Icons for Mobile & Cloud deep-dive section.

export function MobileArchIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
      {/* Phone outline */}
      <rect x="22" y="10" width="36" height="60" rx="5" fill="currentColor" fillOpacity="0.08" />
      <rect x="22" y="10" width="36" height="60" rx="5" />
      <line x1="36" y1="14" x2="44" y2="14" strokeLinecap="round" />
      <circle cx="40" cy="64" r="2.5" />
      {/* Layered architecture inside */}
      <rect x="26" y="18" width="28" height="6" rx="1" fill="currentColor" fillOpacity="0.15" />
      <rect x="26" y="18" width="28" height="6" rx="1" />
      <rect x="26" y="26" width="28" height="6" rx="1" fill="currentColor" fillOpacity="0.25" />
      <rect x="26" y="26" width="28" height="6" rx="1" />
      <rect x="26" y="34" width="28" height="6" rx="1" fill="currentColor" fillOpacity="0.35" />
      <rect x="26" y="34" width="28" height="6" rx="1" />
      <rect x="26" y="42" width="28" height="14" rx="1" fill="currentColor" fillOpacity="0.45" />
      <rect x="26" y="42" width="28" height="14" rx="1" />
    </svg>
  );
}

export function CloudNativeIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
      {/* Cloud */}
      <path
        d="M22 30 Q12 30 12 22 Q12 12 22 12 Q26 4 36 4 Q48 4 50 14 Q60 14 60 22 Q60 32 50 32 Z"
        fill="currentColor"
        fillOpacity="0.1"
        strokeLinejoin="round"
      />
      <path
        d="M22 30 Q12 30 12 22 Q12 12 22 12 Q26 4 36 4 Q48 4 50 14 Q60 14 60 22 Q60 32 50 32 Z"
        strokeLinejoin="round"
      />
      {/* Microservices below */}
      <rect x="14" y="44" width="14" height="14" rx="1" fill="currentColor" fillOpacity="0.15" />
      <rect x="14" y="44" width="14" height="14" rx="1" />
      <rect x="32" y="44" width="14" height="14" rx="1" fill="currentColor" fillOpacity="0.2" />
      <rect x="32" y="44" width="14" height="14" rx="1" />
      <rect x="50" y="44" width="14" height="14" rx="1" fill="currentColor" fillOpacity="0.15" />
      <rect x="50" y="44" width="14" height="14" rx="1" />
      {/* Connection lines from cloud */}
      <line x1="21" y1="32" x2="21" y2="44" strokeLinecap="round" strokeDasharray="2 2" />
      <line x1="40" y1="32" x2="39" y2="44" strokeLinecap="round" strokeDasharray="2 2" />
      <line x1="50" y1="32" x2="57" y2="44" strokeLinecap="round" strokeDasharray="2 2" />
      {/* Bottom net */}
      <line x1="14" y1="66" x2="64" y2="66" strokeLinecap="round" />
      <line x1="21" y1="58" x2="21" y2="66" strokeLinecap="round" />
      <line x1="39" y1="58" x2="39" y2="66" strokeLinecap="round" />
      <line x1="57" y1="58" x2="57" y2="66" strokeLinecap="round" />
    </svg>
  );
}

export function EdgeIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
      {/* Globe */}
      <circle cx="40" cy="40" r="22" fill="currentColor" fillOpacity="0.06" />
      <circle cx="40" cy="40" r="22" />
      <ellipse cx="40" cy="40" rx="22" ry="9" />
      <ellipse cx="40" cy="40" rx="9" ry="22" />
      {/* Edge nodes around */}
      <circle cx="18" cy="40" r="3" fill="currentColor" />
      <circle cx="62" cy="40" r="3" fill="currentColor" />
      <circle cx="40" cy="18" r="3" fill="currentColor" />
      <circle cx="40" cy="62" r="3" fill="currentColor" />
      <circle cx="24" cy="24" r="2.5" fill="currentColor" />
      <circle cx="56" cy="56" r="2.5" fill="currentColor" />
      <circle cx="56" cy="24" r="2.5" fill="currentColor" />
      <circle cx="24" cy="56" r="2.5" fill="currentColor" />
    </svg>
  );
}

export function OfflineIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
      {/* WiFi arcs */}
      <path d="M16 28 Q40 8 64 28" strokeLinecap="round" />
      <path d="M22 36 Q40 22 58 36" strokeLinecap="round" opacity="0.5" />
      <path d="M28 44 Q40 36 52 44" strokeLinecap="round" opacity="0.3" />
      <circle cx="40" cy="50" r="2.5" fill="currentColor" />
      {/* Strikethrough */}
      <line x1="14" y1="14" x2="66" y2="56" strokeLinecap="round" strokeWidth="3" />
      {/* DB at bottom */}
      <ellipse cx="40" cy="60" rx="14" ry="3" fill="currentColor" fillOpacity="0.15" />
      <ellipse cx="40" cy="60" rx="14" ry="3" />
      <path d="M26 60 L26 70 Q26 73 40 73 Q54 73 54 70 L54 60" />
      <path d="M26 65 Q26 68 40 68 Q54 68 54 65" />
    </svg>
  );
}

export function AppStoreIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
      {/* Storefront */}
      <path d="M14 26 L14 64 L66 64 L66 26" strokeLinejoin="round" />
      <path d="M10 16 L70 16 L66 26 L14 26 Z" fill="currentColor" fillOpacity="0.15" strokeLinejoin="round" />
      <line x1="22" y1="16" x2="22" y2="26" />
      <line x1="34" y1="16" x2="34" y2="26" />
      <line x1="46" y1="16" x2="46" y2="26" />
      <line x1="58" y1="16" x2="58" y2="26" />
      {/* Door */}
      <rect x="32" y="44" width="16" height="20" fill="currentColor" fillOpacity="0.1" />
      <rect x="32" y="44" width="16" height="20" />
      <circle cx="44" cy="54" r="0.8" fill="currentColor" />
      {/* Star above door */}
      <path
        d="M40 32 L42 36 L46 36 L43 39 L44 43 L40 41 L36 43 L37 39 L34 36 L38 36 Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function PerformanceMcIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
      {/* Speedometer */}
      <path d="M14 56 A26 26 0 0 1 66 56" strokeLinecap="round" />
      {/* Tick marks */}
      <line x1="14" y1="56" x2="18" y2="54" strokeLinecap="round" />
      <line x1="22" y1="40" x2="26" y2="42" strokeLinecap="round" />
      <line x1="40" y1="30" x2="40" y2="34" strokeLinecap="round" />
      <line x1="58" y1="40" x2="54" y2="42" strokeLinecap="round" />
      <line x1="66" y1="56" x2="62" y2="54" strokeLinecap="round" />
      {/* Needle pegged */}
      <line x1="40" y1="56" x2="60" y2="38" strokeLinecap="round" strokeWidth="3" />
      <circle cx="40" cy="56" r="3" fill="currentColor" />
      {/* Lightning */}
      <path
        d="M36 64 L42 56 L38 56 L42 48"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="currentColor"
        fillOpacity="0.3"
      />
    </svg>
  );
}
