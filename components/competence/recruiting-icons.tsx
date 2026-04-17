// Icons for the Recruiting deep-dive section. 80x80 viewBox, line + accent style.

export function SourcingIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
      <circle cx="32" cy="34" r="14" fill="currentColor" fillOpacity="0.1" />
      <circle cx="32" cy="34" r="14" />
      <line x1="42" y1="44" x2="56" y2="58" strokeLinecap="round" strokeWidth="3" />
      {/* Person silhouette inside */}
      <circle cx="32" cy="30" r="3.5" fill="currentColor" />
      <path d="M24 40 Q24 35 32 35 Q40 35 40 40" strokeLinecap="round" />
      {/* Plus marker */}
      <circle cx="60" cy="22" r="6" fill="currentColor" fillOpacity="0.15" />
      <circle cx="60" cy="22" r="6" />
      <line x1="56" y1="22" x2="64" y2="22" strokeLinecap="round" />
      <line x1="60" y1="18" x2="60" y2="26" strokeLinecap="round" />
    </svg>
  );
}

export function VettingIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
      {/* Clipboard */}
      <rect x="18" y="12" width="44" height="56" rx="2" fill="currentColor" fillOpacity="0.08" />
      <rect x="18" y="12" width="44" height="56" rx="2" />
      <rect x="30" y="8" width="20" height="8" rx="1" fill="currentColor" />
      {/* Score bars */}
      <line x1="26" y1="28" x2="44" y2="28" strokeLinecap="round" />
      <line x1="26" y1="28" x2="54" y2="28" strokeLinecap="round" strokeWidth="1" opacity="0.4" />
      <line x1="26" y1="38" x2="50" y2="38" strokeLinecap="round" />
      <line x1="26" y1="38" x2="54" y2="38" strokeLinecap="round" strokeWidth="1" opacity="0.4" />
      <line x1="26" y1="48" x2="38" y2="48" strokeLinecap="round" />
      <line x1="26" y1="48" x2="54" y2="48" strokeLinecap="round" strokeWidth="1" opacity="0.4" />
      {/* Star */}
      <path d="M40 56 L42 60 L46 60 L43 63 L44 67 L40 65 L36 67 L37 63 L34 60 L38 60 Z" fill="currentColor" />
    </svg>
  );
}

export function EmbeddedIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
      {/* Big container box */}
      <rect x="10" y="14" width="60" height="52" rx="2" fill="currentColor" fillOpacity="0.06" />
      <rect x="10" y="14" width="60" height="52" rx="2" />
      {/* Existing team circles */}
      <circle cx="22" cy="32" r="4" />
      <circle cx="34" cy="32" r="4" />
      <circle cx="22" cy="48" r="4" />
      {/* Embedded engineer (filled, larger) */}
      <circle cx="50" cy="40" r="6" fill="currentColor" fillOpacity="0.15" />
      <circle cx="50" cy="40" r="6" strokeDasharray="2 1.5" />
      <circle cx="50" cy="40" r="2.5" fill="currentColor" />
      {/* Connection lines */}
      <line x1="26" y1="32" x2="44" y2="38" strokeLinecap="round" strokeDasharray="2 2" />
      <line x1="38" y1="32" x2="46" y2="38" strokeLinecap="round" strokeDasharray="2 2" />
      <line x1="26" y1="48" x2="44" y2="42" strokeLinecap="round" strokeDasharray="2 2" />
    </svg>
  );
}

export function CultureIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
      {/* Two overlapping circles (Venn diagram) */}
      <circle cx="30" cy="40" r="20" fill="currentColor" fillOpacity="0.08" />
      <circle cx="30" cy="40" r="20" />
      <circle cx="50" cy="40" r="20" fill="currentColor" fillOpacity="0.08" />
      <circle cx="50" cy="40" r="20" />
      {/* Center heart/spark */}
      <path
        d="M40 36 Q36 32 38 38 Q40 44 42 38 Q44 32 40 36 Z"
        fill="currentColor"
        strokeWidth="1.5"
      />
      {/* Side icons */}
      <circle cx="20" cy="40" r="2" fill="currentColor" />
      <circle cx="60" cy="40" r="2" fill="currentColor" />
    </svg>
  );
}

export function PerformanceIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
      {/* Axis */}
      <line x1="14" y1="62" x2="68" y2="62" strokeLinecap="round" />
      <line x1="14" y1="62" x2="14" y2="14" strokeLinecap="round" />
      {/* Bars */}
      <rect x="20" y="48" width="8" height="14" fill="currentColor" fillOpacity="0.2" />
      <rect x="20" y="48" width="8" height="14" />
      <rect x="32" y="36" width="8" height="26" fill="currentColor" fillOpacity="0.3" />
      <rect x="32" y="36" width="8" height="26" />
      <rect x="44" y="26" width="8" height="36" fill="currentColor" fillOpacity="0.4" />
      <rect x="44" y="26" width="8" height="36" />
      <rect x="56" y="18" width="8" height="44" fill="currentColor" fillOpacity="0.5" />
      <rect x="56" y="18" width="8" height="44" />
      {/* Trend line */}
      <path d="M24 50 L36 38 L48 28 L60 20" strokeLinecap="round" strokeWidth="2.5" />
      <circle cx="60" cy="20" r="2.5" fill="currentColor" />
    </svg>
  );
}

export function RetentionIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
      {/* Magnet */}
      <path
        d="M24 16 L24 40 Q24 56 40 56 Q56 56 56 40 L56 16 L46 16 L46 40 Q46 46 40 46 Q34 46 34 40 L34 16 Z"
        fill="currentColor"
        fillOpacity="0.1"
        strokeLinejoin="round"
      />
      <path
        d="M24 16 L24 40 Q24 56 40 56 Q56 56 56 40 L56 16 L46 16 L46 40 Q46 46 40 46 Q34 46 34 40 L34 16 Z"
        strokeLinejoin="round"
      />
      {/* Magnet caps */}
      <line x1="24" y1="22" x2="34" y2="22" strokeWidth="3" />
      <line x1="46" y1="22" x2="56" y2="22" strokeWidth="3" />
      {/* Attracted dots */}
      <circle cx="20" cy="68" r="2" fill="currentColor" />
      <circle cx="40" cy="70" r="2.5" fill="currentColor" />
      <circle cx="60" cy="68" r="2" fill="currentColor" />
      {/* Curved attraction lines */}
      <path d="M40 60 Q40 64 40 68" strokeLinecap="round" strokeDasharray="1 2" />
      <path d="M28 58 Q24 62 22 66" strokeLinecap="round" strokeDasharray="1 2" />
      <path d="M52 58 Q56 62 58 66" strokeLinecap="round" strokeDasharray="1 2" />
    </svg>
  );
}
