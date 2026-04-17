// Icons for Product Development deep-dive section.

export function DiscoveryIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
      {/* Compass */}
      <circle cx="40" cy="40" r="26" fill="currentColor" fillOpacity="0.06" />
      <circle cx="40" cy="40" r="26" />
      {/* Compass needle (diamond) */}
      <path d="M40 18 L46 40 L40 62 L34 40 Z" fill="currentColor" fillOpacity="0.3" strokeLinejoin="round" />
      <path d="M40 18 L46 40 L40 62 L34 40 Z" strokeLinejoin="round" />
      <circle cx="40" cy="40" r="2.5" fill="currentColor" />
      {/* Cardinal markers */}
      <line x1="40" y1="10" x2="40" y2="14" strokeLinecap="round" />
      <line x1="40" y1="66" x2="40" y2="70" strokeLinecap="round" />
      <line x1="10" y1="40" x2="14" y2="40" strokeLinecap="round" />
      <line x1="66" y1="40" x2="70" y2="40" strokeLinecap="round" />
    </svg>
  );
}

export function ArchitectureIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
      {/* Stacked layers */}
      <path d="M40 10 L66 22 L40 34 L14 22 Z" fill="currentColor" fillOpacity="0.15" strokeLinejoin="round" />
      <path d="M40 10 L66 22 L40 34 L14 22 Z" strokeLinejoin="round" />
      <path d="M40 28 L66 40 L40 52 L14 40 Z" fill="currentColor" fillOpacity="0.2" strokeLinejoin="round" />
      <path d="M40 28 L66 40 L40 52 L14 40 Z" strokeLinejoin="round" />
      <path d="M40 46 L66 58 L40 70 L14 58 Z" fill="currentColor" fillOpacity="0.25" strokeLinejoin="round" />
      <path d="M40 46 L66 58 L40 70 L14 58 Z" strokeLinejoin="round" />
    </svg>
  );
}

export function MvpIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
      {/* Rocket */}
      <path
        d="M40 10 Q50 20 50 38 L50 52 L30 52 L30 38 Q30 20 40 10 Z"
        fill="currentColor"
        fillOpacity="0.15"
        strokeLinejoin="round"
      />
      <path
        d="M40 10 Q50 20 50 38 L50 52 L30 52 L30 38 Q30 20 40 10 Z"
        strokeLinejoin="round"
      />
      <circle cx="40" cy="30" r="4" fill="currentColor" />
      {/* Fins */}
      <path d="M30 44 L20 56 L30 52 Z" fill="currentColor" fillOpacity="0.3" strokeLinejoin="round" />
      <path d="M30 44 L20 56 L30 52 Z" strokeLinejoin="round" />
      <path d="M50 44 L60 56 L50 52 Z" fill="currentColor" fillOpacity="0.3" strokeLinejoin="round" />
      <path d="M50 44 L60 56 L50 52 Z" strokeLinejoin="round" />
      {/* Flames */}
      <path d="M34 56 L40 70 L46 56 Z" fill="currentColor" strokeLinejoin="round" />
      <path d="M37 60 L40 66 L43 60 Z" fill="white" strokeWidth="1" />
    </svg>
  );
}

export function DesignSystemIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
      {/* Components grid */}
      <rect x="12" y="12" width="22" height="22" rx="2" fill="currentColor" fillOpacity="0.15" />
      <rect x="12" y="12" width="22" height="22" rx="2" />
      <circle cx="23" cy="23" r="6" />
      <rect x="38" y="12" width="30" height="22" rx="2" />
      <line x1="44" y1="20" x2="62" y2="20" strokeLinecap="round" />
      <line x1="44" y1="26" x2="58" y2="26" strokeLinecap="round" />
      <rect x="12" y="38" width="30" height="14" rx="7" fill="currentColor" fillOpacity="0.3" />
      <rect x="12" y="38" width="30" height="14" rx="7" />
      <rect x="46" y="38" width="22" height="14" rx="2" />
      <line x1="50" y1="42" x2="64" y2="42" strokeLinecap="round" />
      <line x1="50" y1="48" x2="60" y2="48" strokeLinecap="round" />
      <rect x="12" y="56" width="56" height="14" rx="2" fill="currentColor" fillOpacity="0.1" />
      <rect x="12" y="56" width="56" height="14" rx="2" />
      <line x1="20" y1="63" x2="40" y2="63" strokeLinecap="round" />
      <circle cx="58" cy="63" r="3" fill="currentColor" />
    </svg>
  );
}

export function GrowthIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
      {/* Axis */}
      <line x1="14" y1="62" x2="68" y2="62" strokeLinecap="round" />
      <line x1="14" y1="62" x2="14" y2="14" strokeLinecap="round" />
      {/* Curve */}
      <path
        d="M14 60 Q24 56 32 50 Q42 42 50 30 Q58 18 66 14"
        strokeLinecap="round"
        strokeWidth="2.5"
      />
      {/* Fill underneath */}
      <path
        d="M14 60 Q24 56 32 50 Q42 42 50 30 Q58 18 66 14 L66 62 L14 62 Z"
        fill="currentColor"
        fillOpacity="0.1"
      />
      {/* Endpoint */}
      <circle cx="66" cy="14" r="4" fill="currentColor" />
      {/* Arrow */}
      <path d="M62 12 L66 14 L66 18" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function AnalyticsIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
      {/* Pie chart */}
      <circle cx="40" cy="40" r="26" fill="currentColor" fillOpacity="0.05" />
      <circle cx="40" cy="40" r="26" />
      {/* Slice 1 */}
      <path d="M40 40 L40 14 A26 26 0 0 1 62 52 Z" fill="currentColor" fillOpacity="0.3" />
      <path d="M40 40 L40 14 A26 26 0 0 1 62 52 Z" />
      {/* Slice 2 */}
      <path d="M40 40 L62 52 A26 26 0 0 1 22 56 Z" fill="currentColor" fillOpacity="0.5" />
      <path d="M40 40 L62 52 A26 26 0 0 1 22 56 Z" />
      {/* Center */}
      <circle cx="40" cy="40" r="3" fill="white" />
    </svg>
  );
}
