// Icons for Security deep-dive section.

export function PenTestIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
      {/* Bug body */}
      <ellipse cx="40" cy="44" rx="14" ry="18" fill="currentColor" fillOpacity="0.1" />
      <ellipse cx="40" cy="44" rx="14" ry="18" />
      <line x1="40" y1="26" x2="40" y2="62" />
      {/* Antennae */}
      <path d="M34 28 L28 18" strokeLinecap="round" />
      <path d="M46 28 L52 18" strokeLinecap="round" />
      {/* Legs */}
      <line x1="26" y1="38" x2="14" y2="34" strokeLinecap="round" />
      <line x1="26" y1="46" x2="14" y2="46" strokeLinecap="round" />
      <line x1="26" y1="54" x2="14" y2="58" strokeLinecap="round" />
      <line x1="54" y1="38" x2="66" y2="34" strokeLinecap="round" />
      <line x1="54" y1="46" x2="66" y2="46" strokeLinecap="round" />
      <line x1="54" y1="54" x2="66" y2="58" strokeLinecap="round" />
      {/* Eyes */}
      <circle cx="36" cy="34" r="1.5" fill="currentColor" />
      <circle cx="44" cy="34" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function ComplianceIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
      {/* Document */}
      <path d="M18 10 L46 10 L58 22 L58 70 L18 70 Z" fill="currentColor" fillOpacity="0.08" strokeLinejoin="round" />
      <path d="M18 10 L46 10 L58 22 L58 70 L18 70 Z" strokeLinejoin="round" />
      <path d="M46 10 L46 22 L58 22" />
      {/* Stamp circle */}
      <circle cx="38" cy="44" r="14" strokeDasharray="3 2" strokeWidth="1.5" />
      {/* Checkmark */}
      <path d="M30 44 L36 50 L48 36" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
    </svg>
  );
}

export function ThreatModelIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
      {/* Network diagram */}
      <circle cx="40" cy="20" r="6" fill="currentColor" fillOpacity="0.15" />
      <circle cx="40" cy="20" r="6" />
      <circle cx="18" cy="44" r="6" fill="currentColor" fillOpacity="0.15" />
      <circle cx="18" cy="44" r="6" />
      <circle cx="62" cy="44" r="6" fill="currentColor" fillOpacity="0.15" />
      <circle cx="62" cy="44" r="6" />
      <circle cx="40" cy="64" r="6" fill="currentColor" fillOpacity="0.15" />
      <circle cx="40" cy="64" r="6" />
      {/* Edges */}
      <line x1="36" y1="24" x2="22" y2="40" strokeLinecap="round" />
      <line x1="44" y1="24" x2="58" y2="40" strokeLinecap="round" />
      <line x1="22" y1="48" x2="36" y2="60" strokeLinecap="round" />
      <line x1="58" y1="48" x2="44" y2="60" strokeLinecap="round" />
      {/* Threat marker (red x but using stroke) */}
      <circle cx="40" cy="42" r="5" fill="currentColor" />
      <line x1="37" y1="39" x2="43" y2="45" stroke="white" strokeWidth="1.5" />
      <line x1="43" y1="39" x2="37" y2="45" stroke="white" strokeWidth="1.5" />
    </svg>
  );
}

export function IamIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
      {/* User */}
      <circle cx="40" cy="24" r="8" fill="currentColor" fillOpacity="0.15" />
      <circle cx="40" cy="24" r="8" />
      <path d="M24 50 Q24 38 40 38 Q56 38 56 50" />
      {/* Permission tags */}
      <rect x="14" y="56" width="14" height="8" rx="1" />
      <rect x="32" y="56" width="14" height="8" rx="1" fill="currentColor" fillOpacity="0.4" />
      <rect x="50" y="56" width="14" height="8" rx="1" />
      {/* Lock above user */}
      <rect x="36" y="14" width="8" height="6" rx="1" fill="currentColor" />
      <path d="M37 14 L37 11 Q37 8 40 8 Q43 8 43 11 L43 14" strokeWidth="1.5" />
    </svg>
  );
}

export function IncidentIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
      {/* Triangle alert */}
      <path d="M40 12 L68 60 L12 60 Z" fill="currentColor" fillOpacity="0.1" strokeLinejoin="round" />
      <path d="M40 12 L68 60 L12 60 Z" strokeLinejoin="round" strokeWidth="2.5" />
      {/* Exclamation */}
      <line x1="40" y1="28" x2="40" y2="46" strokeLinecap="round" strokeWidth="3" />
      <circle cx="40" cy="53" r="2" fill="currentColor" />
      {/* Radiating lines */}
      <line x1="14" y1="14" x2="20" y2="20" strokeLinecap="round" strokeWidth="1.5" />
      <line x1="66" y1="14" x2="60" y2="20" strokeLinecap="round" strokeWidth="1.5" />
      <line x1="6" y1="40" x2="14" y2="40" strokeLinecap="round" strokeWidth="1.5" />
      <line x1="74" y1="40" x2="66" y2="40" strokeLinecap="round" strokeWidth="1.5" />
    </svg>
  );
}

export function TrainingIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
      {/* Open book */}
      <path d="M12 18 Q12 16 14 16 L36 16 Q40 16 40 20 L40 60 Q40 56 36 56 L14 56 Q12 56 12 58 Z" fill="currentColor" fillOpacity="0.1" />
      <path d="M12 18 Q12 16 14 16 L36 16 Q40 16 40 20 L40 60 Q40 56 36 56 L14 56 Q12 56 12 58 Z" />
      <path d="M68 18 Q68 16 66 16 L44 16 Q40 16 40 20 L40 60 Q40 56 44 56 L66 56 Q68 56 68 58 Z" fill="currentColor" fillOpacity="0.1" />
      <path d="M68 18 Q68 16 66 16 L44 16 Q40 16 40 20 L40 60 Q40 56 44 56 L66 56 Q68 56 68 58 Z" />
      {/* Lines */}
      <line x1="18" y1="26" x2="34" y2="26" strokeLinecap="round" />
      <line x1="18" y1="32" x2="32" y2="32" strokeLinecap="round" />
      <line x1="46" y1="26" x2="62" y2="26" strokeLinecap="round" />
      <line x1="46" y1="32" x2="60" y2="32" strokeLinecap="round" />
      {/* Shield badge */}
      <path d="M40 44 L48 48 L48 56 Q48 64 40 68 Q32 64 32 56 L32 48 Z" fill="currentColor" fillOpacity="0.3" strokeLinejoin="round" />
      <path d="M40 44 L48 48 L48 56 Q48 64 40 68 Q32 64 32 56 L32 48 Z" strokeLinejoin="round" />
    </svg>
  );
}
