"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

interface Feature {
  number: string;
  title: string;
  description: string;
  visual: string;
  href: string | null;
  useCases: string[];
}

const features: Feature[] = [
  {
    number: "01",
    title: "Recruiting",
    description: "Placement and augmentation of 90+ teams with experts in AI, Data Engineering, Backend, and Frontend from LATAM and Asia — embedded in Fortune 1000/500/100 organizations.",
    visual: "collab",
    href: "/recruiting",
    useCases: [
      "Scholastic", "JPMorgan", "Morgan Stanley", "EPIC Systems", "Veris Urgent Care",
      "Benev Foundation", "Pure Green", "Poze Dating", "Nyma", "BrickBids",
      "NuezHR", "Redeemer Rewards", "Virtual Watercooler", "Knock AI", "Wattle Cafe",
    ],
  },
  {
    number: "02",
    title: "Data Science and A.I. Development",
    description: "Production-grade AI and data engineering — from predictive models and LLM pipelines to real-time analytics. We build the infrastructure that turns raw data into revenue, whether you're a Series A startup or a Fortune 500.",
    visual: "ai",
    href: "/ai",
    useCases: [
      "Propensity scoring & purchase behavior attribution",
      "Content & product recommendation engines",
      "Real-time AI ad & compliance scoring",
      "RAG infrastructure with internal agent creation (fintech)",
      "N8N automation for multi-model code & product review",
      "Biometric telemetry centralization & healthcare dashboards",
      "Pharmaceutical manufacturing data pipelines",
      "Customer churn prediction & retention models",
    ],
  },
  {
    number: "03",
    title: "System Integrations",
    description: "We leverage any existing technologies available to scale your operations, connecting disparate systems into seamless workflows.",
    visual: "deploy",
    href: "/integrations",
    useCases: [
      "Square integration with Grubhub, UberEats, DoorDash & Seamless",
      "Oracle ERP integration",
      "QuickBooks integration",
      "Stripe integration",
      "PayPal integration",
      "Salesforce integrations",
      "Stibo STEP integrations",
      "Reltio integrations",
      "Zapier orchestration",
      "n8n orchestration & WhatsApp notification platform",
    ],
  },
  {
    number: "04",
    title: "Mobile & Cloud Applications",
    description: "Our teams are focused on keeping our clients relevant to the ever evolving tech landscape with cutting-edge solutions.",
    visual: "collab",
    href: "/mobile-cloud",
    useCases: [
      "Cross-platform mobile apps (React Native / Flutter)",
      "Cloud-native microservices on AWS, GCP & Azure",
      "Real-time collaboration platforms",
      "Progressive web apps with offline-first architecture",
      "IoT dashboard & device management portals",
      "Multi-tenant SaaS with AI personalization layers",
    ],
  },
  {
    number: "05",
    title: "Security Management & Development",
    description: "Leading security experts from the largest institutions in the world lower cyber risk to your company.",
    visual: "security",
    href: "/security",
    useCases: [
      "Penetration testing & vulnerability assessments",
      "Compliance scoring for data platforms",
      "SOC 2 & ISO 27001 audit preparation",
      "GDPR & HIPAA compliance architecture",
      "AI-assisted threat detection & zero-trust implementation",
      "Security incident response & forensics",
    ],
  },
  {
    number: "06",
    title: "Technical Management",
    description: "We will integrate broad communication strategies into your corporate processes for seamless operations.",
    visual: "collab",
    href: "/technical-management",
    useCases: [
      "Fractional CTO & VP Engineering engagements",
      "Agile transformation & delivery coaching",
      "Engineering org design & hiring strategy",
      "Vendor evaluation & technology selection",
      "Technical due diligence for M&A",
      "OKR & KPI frameworks for engineering teams",
    ],
  },
  {
    number: "07",
    title: "Product Development",
    description: "We'll manage and oversee the development of products from concept to post-production delivery.",
    visual: "deploy",
    href: "/product-development",
    useCases: [
      "0-to-1 MVP builds for funded startups",
      "Product-market fit experimentation frameworks",
      "Legacy product modernization & re-platforming",
      "Design system creation & component libraries",
      "AI-enhanced user research & rapid prototyping",
      "Growth engineering & A/B testing",
    ],
  },
];

function DeployVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      <defs>
        <clipPath id="deployClip">
          <rect x="30" y="20" width="140" height="120" rx="4" />
        </clipPath>
      </defs>
      
      {/* Container */}
      <rect x="30" y="20" width="140" height="120" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
      
      {/* Animated bars */}
      <g clipPath="url(#deployClip)">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <rect
            key={i}
            x="40"
            y={35 + i * 16}
            width="120"
            height="10"
            rx="2"
            fill="currentColor"
            opacity="0.15"
          >
            <animate
              attributeName="opacity"
              values="0.15;0.8;0.15"
              dur="2s"
              begin={`${i * 0.15}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="width"
              values="20;120;20"
              dur="2s"
              begin={`${i * 0.15}s`}
              repeatCount="indefinite"
            />
          </rect>
        ))}
      </g>
      
      {/* Progress indicator */}
      <circle cx="100" cy="155" r="3" fill="currentColor" opacity="0.3">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="1s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

// Pre-calculated coordinates to avoid hydration mismatches from floating point precision
const aiNodePositions = [
  { x: 150, y: 80 },    // 0°
  { x: 125, y: 123 },   // 60°
  { x: 75, y: 123 },    // 120°
  { x: 50, y: 80 },     // 180°
  { x: 75, y: 37 },     // 240°
  { x: 125, y: 37 },    // 300°
];

function AIVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      {/* Central node */}
      <circle cx="100" cy="80" r="12" fill="currentColor">
        <animate attributeName="r" values="12;14;12" dur="2s" repeatCount="indefinite" />
      </circle>
      
      {/* Orbiting nodes */}
      {aiNodePositions.map((pos, i) => (
        <g key={i}>
          {/* Connection line */}
          <line
            x1="100"
            y1="80"
            x2={pos.x}
            y2={pos.y}
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.3"
          >
            <animate
              attributeName="opacity"
              values="0.3;0.8;0.3"
              dur="2s"
              begin={`${i * 0.3}s`}
              repeatCount="indefinite"
            />
          </line>
          
          {/* Outer node */}
          <circle
            cx={pos.x}
            cy={pos.y}
            r="6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <animate
              attributeName="r"
              values="6;8;6"
              dur="2s"
              begin={`${i * 0.3}s`}
              repeatCount="indefinite"
            />
          </circle>
        </g>
      ))}
      
      {/* Pulse rings */}
      <circle cx="100" cy="80" r="30" fill="none" stroke="currentColor" strokeWidth="1" opacity="0">
        <animate attributeName="r" values="20;60" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.5;0" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

function CollabVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      {/* User A */}
      <g>
        <rect x="30" y="50" width="50" height="60" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
        <text x="55" y="85" textAnchor="middle" fontSize="20" fontFamily="monospace" fill="currentColor">A</text>
        <circle cx="55" cy="35" r="12" fill="none" stroke="currentColor" strokeWidth="2" />
      </g>
      
      {/* User B */}
      <g>
        <rect x="120" y="50" width="50" height="60" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
        <text x="145" y="85" textAnchor="middle" fontSize="20" fontFamily="monospace" fill="currentColor">B</text>
        <circle cx="145" cy="35" r="12" fill="none" stroke="currentColor" strokeWidth="2" />
      </g>
      
      {/* Connection */}
      <line x1="80" y1="80" x2="120" y2="80" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4">
        <animate attributeName="stroke-dashoffset" values="0;-8" dur="0.5s" repeatCount="indefinite" />
      </line>
      
      {/* Data packet */}
      <circle r="4" fill="currentColor">
        <animateMotion dur="1.5s" repeatCount="indefinite">
          <mpath href="#dataPath" />
        </animateMotion>
      </circle>
      <path id="dataPath" d="M 80 80 L 120 80" fill="none" />
      
      {/* Sync indicator */}
      <g transform="translate(100, 130)">
        <circle r="6" fill="none" stroke="currentColor" strokeWidth="2">
          <animate attributeName="r" values="6;10;6" dur="1s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="1;0.3;1" dur="1s" repeatCount="indefinite" />
        </circle>
      </g>
    </svg>
  );
}

function SecurityVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      {/* Shield */}
      <path
        d="M 100 20 L 150 40 L 150 90 Q 150 130 100 145 Q 50 130 50 90 L 50 40 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      
      {/* Inner shield */}
      <path
        d="M 100 35 L 135 50 L 135 85 Q 135 115 100 128 Q 65 115 65 85 L 65 50 Z"
        fill="currentColor"
        opacity="0.1"
      >
        <animate attributeName="opacity" values="0.1;0.2;0.1" dur="2s" repeatCount="indefinite" />
      </path>
      
      {/* Lock icon */}
      <rect x="85" y="70" width="30" height="25" rx="3" fill="currentColor" />
      <path
        d="M 90 70 L 90 60 Q 90 50 100 50 Q 110 50 110 60 L 110 70"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      
      {/* Keyhole */}
      <circle cx="100" cy="80" r="4" fill="white" />
      <rect x="98" y="82" width="4" height="8" fill="white" />
      
      {/* Scan lines */}
      <line x1="60" y1="60" x2="140" y2="60" stroke="currentColor" strokeWidth="1" opacity="0">
        <animate attributeName="y1" values="40;120;40" dur="3s" repeatCount="indefinite" />
        <animate attributeName="y2" values="40;120;40" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0;0.5;0" dur="3s" repeatCount="indefinite" />
      </line>
    </svg>
  );
}

function AnimatedVisual({ type }: { type: string }) {
  switch (type) {
    case "deploy":
      return <DeployVisual />;
    case "ai":
      return <AIVisual />;
    case "collab":
      return <CollabVisual />;
    case "security":
      return <SecurityVisual />;
    default:
      return <DeployVisual />;
  }
}

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const [useCasesOpen, setUseCasesOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`group relative transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 py-12 lg:py-20 border-b border-foreground/10">
        {/* Number */}
        <div className="shrink-0">
          <span className="font-mono text-sm text-muted-foreground">{feature.number}</span>
        </div>
        
        {/* Content */}
        <div className="flex-1 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            {feature.href ? (
              <Link
                href={feature.href}
                className="inline-flex items-center gap-3 mb-4 group-hover:translate-x-2 transition-transform duration-500"
              >
                <h3 className="text-3xl lg:text-4xl font-display">
                  {feature.title}
                </h3>
                <ArrowUpRight className="w-6 h-6 lg:w-8 lg:h-8 text-foreground/40 group-hover:text-foreground transition-colors" />
              </Link>
            ) : (
              <h3 className="text-3xl lg:text-4xl font-display mb-4 group-hover:translate-x-2 transition-transform duration-500">
                {feature.title}
              </h3>
            )}
            <p className="text-lg text-muted-foreground leading-relaxed">
              {feature.description}
            </p>
            {feature.useCases.length > 0 && (
              <div className="mt-6">
                <button
                  type="button"
                  onClick={() => setUseCasesOpen(!useCasesOpen)}
                  className="flex items-center gap-2 font-mono text-xs text-muted-foreground uppercase tracking-widest hover:text-foreground transition-colors"
                >
                  Use Cases
                  <span className={`transition-transform duration-300 ${useCasesOpen ? "rotate-180" : ""}`}>&#9662;</span>
                </button>
                <div className={`mt-3 flex flex-wrap gap-2 overflow-hidden transition-all duration-500 ${useCasesOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                  {feature.useCases.map((uc) => (
                    <span key={uc} className="inline-block px-3 py-1 text-xs font-mono text-muted-foreground border border-foreground/10 rounded-full">
                      {uc}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* Visual */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-48 h-40 text-foreground">
              <AnimatedVisual type={feature.visual} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="features"
      ref={sectionRef}
      className="relative py-16 lg:py-24"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-24">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            Competence Areas
          </span>
          <h2
            className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Consulting services &
            <br />
            <span className="text-muted-foreground">technical solutions.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            We provide complete solutions - from conception, specification, development and integration 
            to interdisciplinary consulting services in a high-tech, industry-wide environment.
          </p>
        </div>

        {/* Features List */}
        <div>
          {features.map((feature, index) => (
            <FeatureCard key={feature.number} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
