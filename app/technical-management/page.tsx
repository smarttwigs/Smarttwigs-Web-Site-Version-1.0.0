import { CompetenceNav } from "@/components/competence/competence-nav";
import { TechManagementHero } from "@/components/competence/tech-management-hero";
import { CompetenceIntro } from "@/components/competence/competence-intro";
import { TechDeepDive } from "@/components/competence/tech-deep-dive";
import { UseCaseGrid } from "@/components/competence/use-case-grid";
import { TechStack } from "@/components/competence/tech-stack";
import { CompetenceCta } from "@/components/competence/competence-cta";
import { FooterSection } from "@/components/landing/footer-section";
import { PageTransition } from "@/components/competence/page-transition";
import {
  FractionalCtoIcon,
  OrgDesignIcon,
  AgileCoachIcon,
  DueDiligenceIcon,
  OkrIcon,
  MaIcon,
} from "@/components/competence/tech-management-icons";

const valueProps = [
  {
    title: "Real Operators",
    description:
      "Our fractional CTOs and VPs have built and scaled engineering orgs at startups and Fortune 500 companies. Not consultants — operators.",
  },
  {
    title: "Embedded, Not Advisory",
    description:
      "We sit in your standups, your hiring panels, your board meetings. We're accountable to outcomes, not slide decks.",
  },
  {
    title: "Outcome-Driven",
    description:
      "Velocity, retention, NPS, ship rate — we measure leadership the same way we measure engineering.",
  },
  {
    title: "Calibrated to Stage",
    description:
      "We bring different playbooks for seed, Series A/B, growth, and enterprise. No one-size-fits-all.",
  },
];

const techTopics = [
  {
    number: "01",
    title: "Fractional CTO & VP Engineering",
    icon: <FractionalCtoIcon />,
    description:
      "When you need a senior engineering leader but can't afford (or don't need) a full-time hire. We embed for 10–30 hours a week.",
    bullets: [
      "Technical strategy & roadmap ownership",
      "Hiring & team scaling",
      "Architecture decisions & RFCs",
      "Board & investor reporting",
      "Vendor & tooling decisions",
      "Hands-on code & PR review when needed",
    ],
  },
  {
    number: "02",
    title: "Engineering Org Design",
    icon: <OrgDesignIcon />,
    description:
      "Team topologies, reporting structures, leveling, comp bands, career ladders. We design organizations that scale beyond 10 people.",
    bullets: [
      "Team topology & cross-functional pods",
      "Engineering ladder & leveling guides",
      "Compensation benchmarking & bands",
      "Manager-to-IC ratio planning",
      "Hiring loop design & calibration",
      "Performance review frameworks",
    ],
  },
  {
    number: "03",
    title: "Agile Transformation & Coaching",
    icon: <AgileCoachIcon />,
    description:
      "Real agility, not cargo-cult Scrum. We coach teams toward continuous delivery, healthy WIP, and flow-based prioritization.",
    bullets: [
      "Scrum, Kanban, Shape Up, Linear Method",
      "Continuous delivery & trunk-based dev",
      "RFC & decision-log process",
      "Incident retros & post-mortem culture",
      "Velocity & cycle-time tracking",
      "Healthy WIP & flow management",
    ],
  },
  {
    number: "04",
    title: "Technical Due Diligence",
    icon: <DueDiligenceIcon />,
    description:
      "Buying or investing in a tech company? We audit code, infra, security, and team — and write the report your investment committee needs.",
    bullets: [
      "Codebase quality & maintainability assessment",
      "Infrastructure & cost analysis",
      "Security & compliance review",
      "Team & culture evaluation",
      "Tech debt quantification",
      "Risk-rated executive summary",
    ],
  },
  {
    number: "05",
    title: "OKR & KPI Frameworks",
    icon: <OkrIcon />,
    description:
      "Goal-setting that actually moves the needle. We help engineering leaders translate company strategy into team-level outcomes.",
    bullets: [
      "Quarterly OKR planning & calibration",
      "Engineering KPI dashboards",
      "DORA metrics & SPACE framework",
      "Customer outcome tracking",
      "Goal cascading & alignment",
      "Quarterly business reviews",
    ],
  },
  {
    number: "06",
    title: "M&A Integration",
    icon: <MaIcon />,
    description:
      "Acquired a company? We've merged engineering teams, codebases, and cultures — without breaking morale or production.",
    bullets: [
      "Day-1 integration planning",
      "Codebase consolidation strategy",
      "Tooling & infrastructure unification",
      "Team rebadging & retention plans",
      "Cultural integration playbooks",
      "Synergy realization tracking",
    ],
  },
];

const useCases = [
  "Fractional CTO & VP Engineering engagements",
  "Agile transformation & delivery coaching",
  "Engineering org design & hiring strategy",
  "Vendor evaluation & technology selection",
  "Technical due diligence for M&A",
  "OKR & KPI frameworks for engineering teams",
  "Series B engineering scale-up plans",
  "Post-acquisition team integration",
  "Quarterly board technical updates",
  "Crisis management & turnaround engagements",
];

const techStackItems = [
  "Linear",
  "Jira",
  "Notion",
  "GitHub",
  "Slack",
  "Loom",
  "Lattice",
  "Workday",
  "Greenhouse",
  "Datadog",
  "Pendo",
  "Mixpanel",
  "Figma",
  "Miro",
  "Confluence",
];

export default function TechnicalManagementPage() {
  return (
    <PageTransition>
    <main className="relative min-h-screen overflow-x-hidden noise-overlay">
      <CompetenceNav />
      <TechManagementHero />
      <CompetenceIntro
        label="Why Smart Twigs"
        heading="Leadership that operates."
        subheading="Real engineering leaders embedded in your team — not advisors with slide decks. We own outcomes."
        valueProps={valueProps}
      />
      <TechDeepDive
        label="Leadership Capabilities"
        heading="The full leadership stack."
        subheading="From day-to-day team management to high-stakes M&A integration — we've done it all and we'll do it for you."
        topics={techTopics}
      />
      <UseCaseGrid label="Real Engagements" heading="What we've led." useCases={useCases} />
      <TechStack label="Our Toolkit" heading="The leadership stack." items={techStackItems} />
      <CompetenceCta
        heading="Need a senior leader, fast?"
        description="Tell us about your team, your stage, and your biggest pain point. We'll match you with a fractional CTO within a week."
        primaryCta="Get a fractional CTO"
      />
      <FooterSection />
    </main>
    </PageTransition>
  );
}
