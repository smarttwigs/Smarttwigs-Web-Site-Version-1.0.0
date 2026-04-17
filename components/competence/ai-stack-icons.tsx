// Illustrated icons for the AI stack deep-dive section.
// All icons are 80x80 viewBox, use currentColor, and pair line art with subtle accents.

export function RagIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
      {/* Document */}
      <path d="M18 12 L46 12 L56 22 L56 60 L18 60 Z" strokeLinejoin="round" />
      <path d="M46 12 L46 22 L56 22" strokeLinejoin="round" />
      <line x1="24" y1="32" x2="48" y2="32" strokeLinecap="round" />
      <line x1="24" y1="40" x2="48" y2="40" strokeLinecap="round" />
      <line x1="24" y1="48" x2="38" y2="48" strokeLinecap="round" />
      {/* Magnifying glass */}
      <circle cx="52" cy="56" r="10" fill="currentColor" fillOpacity="0.1" />
      <circle cx="52" cy="56" r="10" />
      <line x1="60" y1="64" x2="68" y2="72" strokeLinecap="round" strokeWidth="3" />
      {/* Vector dots inside lens */}
      <circle cx="48" cy="54" r="1.2" fill="currentColor" />
      <circle cx="54" cy="52" r="1.2" fill="currentColor" />
      <circle cx="56" cy="58" r="1.2" fill="currentColor" />
      <circle cx="50" cy="60" r="1.2" fill="currentColor" />
    </svg>
  );
}

export function LlmOpsIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
      {/* Gauge arc */}
      <path d="M12 52 A28 28 0 0 1 68 52" strokeLinecap="round" />
      {/* Tick marks */}
      <line x1="14" y1="44" x2="18" y2="46" strokeLinecap="round" />
      <line x1="22" y1="32" x2="26" y2="35" strokeLinecap="round" />
      <line x1="40" y1="24" x2="40" y2="28" strokeLinecap="round" />
      <line x1="58" y1="32" x2="54" y2="35" strokeLinecap="round" />
      <line x1="66" y1="44" x2="62" y2="46" strokeLinecap="round" />
      {/* Needle */}
      <line x1="40" y1="52" x2="56" y2="30" strokeLinecap="round" strokeWidth="2.5" />
      <circle cx="40" cy="52" r="3" fill="currentColor" />
      {/* Base / output */}
      <rect x="20" y="58" width="40" height="10" rx="2" fill="currentColor" fillOpacity="0.1" />
      <rect x="20" y="58" width="40" height="10" rx="2" />
      <line x1="28" y1="63" x2="36" y2="63" strokeLinecap="round" />
      <line x1="40" y1="63" x2="52" y2="63" strokeLinecap="round" />
    </svg>
  );
}

export function AgenticIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
      {/* Central hub */}
      <circle cx="40" cy="40" r="10" fill="currentColor" fillOpacity="0.1" />
      <circle cx="40" cy="40" r="10" />
      {/* Inner brain hint */}
      <path d="M36 38 Q38 34 40 38 Q42 34 44 38" strokeLinecap="round" />
      <path d="M36 42 Q38 46 40 42 Q42 46 44 42" strokeLinecap="round" />
      {/* Orbit nodes */}
      <circle cx="14" cy="20" r="5" fill="currentColor" fillOpacity="0.15" />
      <circle cx="14" cy="20" r="5" />
      <circle cx="66" cy="20" r="5" fill="currentColor" fillOpacity="0.15" />
      <circle cx="66" cy="20" r="5" />
      <circle cx="14" cy="60" r="5" fill="currentColor" fillOpacity="0.15" />
      <circle cx="14" cy="60" r="5" />
      <circle cx="66" cy="60" r="5" fill="currentColor" fillOpacity="0.15" />
      <circle cx="66" cy="60" r="5" />
      {/* Connecting lines */}
      <line x1="18" y1="23" x2="32" y2="35" strokeLinecap="round" strokeDasharray="2 3" />
      <line x1="62" y1="23" x2="48" y2="35" strokeLinecap="round" strokeDasharray="2 3" />
      <line x1="18" y1="57" x2="32" y2="45" strokeLinecap="round" strokeDasharray="2 3" />
      <line x1="62" y1="57" x2="48" y2="45" strokeLinecap="round" strokeDasharray="2 3" />
    </svg>
  );
}

export function FineTuneIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
      {/* Slider tracks */}
      <line x1="14" y1="22" x2="66" y2="22" strokeLinecap="round" />
      <line x1="14" y1="40" x2="66" y2="40" strokeLinecap="round" />
      <line x1="14" y1="58" x2="66" y2="58" strokeLinecap="round" />
      {/* Slider handles */}
      <circle cx="50" cy="22" r="6" fill="currentColor" fillOpacity="0.15" />
      <circle cx="50" cy="22" r="6" />
      <line x1="50" y1="18" x2="50" y2="26" strokeLinecap="round" />
      <circle cx="26" cy="40" r="6" fill="currentColor" fillOpacity="0.15" />
      <circle cx="26" cy="40" r="6" />
      <line x1="26" y1="36" x2="26" y2="44" strokeLinecap="round" />
      <circle cx="58" cy="58" r="6" fill="currentColor" fillOpacity="0.15" />
      <circle cx="58" cy="58" r="6" />
      <line x1="58" y1="54" x2="58" y2="62" strokeLinecap="round" />
      {/* Track end ticks */}
      <line x1="14" y1="20" x2="14" y2="24" strokeLinecap="round" />
      <line x1="66" y1="20" x2="66" y2="24" strokeLinecap="round" />
      <line x1="14" y1="38" x2="14" y2="42" strokeLinecap="round" />
      <line x1="66" y1="38" x2="66" y2="42" strokeLinecap="round" />
      <line x1="14" y1="56" x2="14" y2="60" strokeLinecap="round" />
      <line x1="66" y1="56" x2="66" y2="60" strokeLinecap="round" />
    </svg>
  );
}

export function PipelineIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
      {/* Source database */}
      <ellipse cx="16" cy="20" rx="10" ry="4" fill="currentColor" fillOpacity="0.1" />
      <ellipse cx="16" cy="20" rx="10" ry="4" />
      <path d="M6 20 L6 30 Q6 34 16 34 Q26 34 26 30 L26 20" />
      <path d="M6 25 Q6 29 16 29 Q26 29 26 25" />
      {/* Pipe */}
      <path d="M16 38 L16 50 Q16 56 22 56 L58 56" strokeLinecap="round" />
      {/* Flowing dots */}
      <circle cx="30" cy="56" r="2" fill="currentColor" />
      <circle cx="42" cy="56" r="2" fill="currentColor" />
      <circle cx="54" cy="56" r="2" fill="currentColor" />
      {/* Destination cube */}
      <rect x="58" y="46" width="16" height="20" rx="1" fill="currentColor" fillOpacity="0.1" />
      <rect x="58" y="46" width="16" height="20" rx="1" />
      <line x1="58" y1="52" x2="74" y2="52" />
      <line x1="58" y1="60" x2="74" y2="60" />
      {/* Branch valve */}
      <circle cx="40" cy="38" r="3" fill="currentColor" />
      <line x1="40" y1="35" x2="40" y2="29" strokeLinecap="round" />
      <line x1="37" y1="29" x2="43" y2="29" strokeLinecap="round" />
    </svg>
  );
}

export function GovernanceIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
      {/* Shield outline */}
      <path
        d="M40 8 L62 18 L62 40 Q62 60 40 70 Q18 60 18 40 L18 18 Z"
        fill="currentColor"
        fillOpacity="0.08"
        strokeLinejoin="round"
      />
      <path
        d="M40 8 L62 18 L62 40 Q62 60 40 70 Q18 60 18 40 L18 18 Z"
        strokeLinejoin="round"
      />
      {/* Inner divider */}
      <path d="M28 26 L52 26" strokeLinecap="round" />
      {/* Checkmark */}
      <path d="M28 42 L36 50 L52 32" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
      {/* Lock icon mini */}
      <rect x="36" y="14" width="8" height="6" rx="1" fill="currentColor" />
      <path d="M37 14 L37 11 Q37 9 40 9 Q43 9 43 11 L43 14" strokeWidth="1.5" />
    </svg>
  );
}
