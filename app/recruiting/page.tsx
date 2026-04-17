import { CompetenceNav } from "@/components/competence/competence-nav";
import { RecruitingHero } from "@/components/competence/recruiting-hero";
import { CompetenceIntro } from "@/components/competence/competence-intro";
import { TechDeepDive } from "@/components/competence/tech-deep-dive";
import { UseCaseGrid } from "@/components/competence/use-case-grid";
import { TechStack } from "@/components/competence/tech-stack";
import { CompetenceCta } from "@/components/competence/competence-cta";
import { FooterSection } from "@/components/landing/footer-section";
import { PageTransition } from "@/components/competence/page-transition";
import {
  SourcingIcon,
  VettingIcon,
  EmbeddedIcon,
  CultureIcon,
  PerformanceIcon,
  RetentionIcon,
} from "@/components/competence/recruiting-icons";

const valueProps = [
  {
    title: "90+ Teams Placed",
    description:
      "Track record of placing entire engineering pods inside Fortune 1000/500/100 organizations across the globe.",
  },
  {
    title: "Ex-FAANG Talent",
    description:
      "Top American engineers from Google, Meta, Amazon, Apple, and Netflix — plus elite international expertise.",
  },
  {
    title: "5 Global Regions",
    description:
      "USA, Latin America, Europe, Middle East, and Asia. We deliver talent in your timezone, your language, your culture.",
  },
  {
    title: "Embedded, Not Outsourced",
    description:
      "Our engineers work as part of your team — same standups, same Slack, same goals. No agency walls.",
  },
];

const techTopics = [
  {
    number: "01",
    title: "Talent Sourcing & Pipeline",
    icon: <SourcingIcon />,
    description:
      "We don't post jobs and pray. We have active relationships with the top 1% of engineers across 5 regions and source candidates who are not on the open market.",
    bullets: [
      "Active database of 50,000+ vetted engineers",
      "Ex-FAANG referral networks in the US",
      "Regional hubs in Panama, Colombia, Chile, Romania, India",
      "Passive candidate outreach & relationship building",
      "Specialized AI/ML, fintech, and healthcare pipelines",
      "Diversity-focused sourcing strategies",
    ],
  },
  {
    number: "02",
    title: "Vetting & Technical Assessment",
    icon: <VettingIcon />,
    description:
      "Our 5-stage vetting process filters out 97% of applicants. By the time you interview a candidate, they've already proven they can do the work.",
    bullets: [
      "Live coding & system design interviews",
      "Take-home assessments graded by senior engineers",
      "Cultural & communication fit screens",
      "Reference checks with previous tech leads",
      "Domain-specific technical deep dives",
      "Portfolio & GitHub review",
    ],
  },
  {
    number: "03",
    title: "Embedded Team Integration",
    icon: <EmbeddedIcon />,
    description:
      "Day one, your new engineers join your standups, your Slack, your codebase. We handle onboarding, equipment, and backend HR — you focus on shipping.",
    bullets: [
      "Same-day onboarding playbooks",
      "Equipment provisioning (laptops, monitors, dev tools)",
      "Slack, Jira, GitHub, and tooling setup",
      "Local employer of record (EOR) handling",
      "Time zone overlap planning",
      "Buddy system for first 30 days",
    ],
  },
  {
    number: "04",
    title: "Cultural & Process Alignment",
    icon: <CultureIcon />,
    description:
      "Distributed teams fail when culture doesn't translate. We bridge the gap between US-based product teams and global engineering with shared rituals, language, and expectations.",
    bullets: [
      "English fluency (C1+) verified",
      "Async-first communication training",
      "Documentation & decision-log discipline",
      "Cross-cultural communication coaching",
      "US holiday & timezone alignment",
      "Quarterly team-building (virtual & in-person)",
    ],
  },
  {
    number: "05",
    title: "Performance Management",
    icon: <PerformanceIcon />,
    description:
      "We don't disappear after placement. Engineering managers from Smart Twigs run quarterly performance reviews and ensure your engineers keep growing.",
    bullets: [
      "Quarterly 360 performance reviews",
      "Goal-setting & OKR alignment",
      "Skill development & training budgets",
      "Manager check-ins & escalation paths",
      "Productivity & velocity tracking",
      "Replacement guarantee (90-day window)",
    ],
  },
  {
    number: "06",
    title: "Long-term Retention",
    icon: <RetentionIcon />,
    description:
      "Our engineers stay — average tenure is 3+ years with the same client. We make sure compensation, growth, and recognition all stay competitive.",
    bullets: [
      "Competitive local-market compensation",
      "Annual review & raise cycles",
      "Career laddering & promotion paths",
      "Wellness, learning, and equipment stipends",
      "Smart Twigs alumni network",
      "Equity / RSU pass-through where possible",
    ],
  },
];

const useCases = [
  "Scholastic",
  "JPMorgan",
  "Morgan Stanley",
  "EPIC Systems",
  "Veris Urgent Care",
  "Benev Foundation",
  "Pure Green",
  "Poze Dating",
  "Nyma",
  "BrickBids",
  "NuezHR",
  "Redeemer Rewards",
  "Virtual Watercooler",
  "Knock AI",
  "Wattle Cafe",
];

const techStackItems = [
  "LinkedIn Recruiter",
  "Greenhouse",
  "Lever",
  "Ashby",
  "BambooHR",
  "Deel",
  "Remote.com",
  "Notion",
  "Slack",
  "Zoom",
  "HackerRank",
  "Codility",
  "GitHub",
  "Calendly",
  "DocuSign",
];

export default function RecruitingPage() {
  return (
    <PageTransition>
    <main className="relative min-h-screen overflow-x-hidden noise-overlay">
      <CompetenceNav />
      <RecruitingHero />
      <CompetenceIntro
        label="Why Smart Twigs"
        heading="Recruiting that ships."
        subheading="We've spent a decade placing engineers across the world. We know what works, what doesn't, and what makes a team stick."
        valueProps={valueProps}
      />
      <TechDeepDive
        label="Our Process"
        heading="From sourced to shipping."
        subheading="A repeatable, transparent process that gets engineers from first contact to first PR in under 30 days."
        topics={techTopics}
      />
      <UseCaseGrid
        label="Trusted By"
        heading="Where our teams ship."
        useCases={useCases}
      />
      <TechStack
        label="Our Toolkit"
        heading="The recruiting stack."
        items={techStackItems}
      />
      <CompetenceCta
        heading="Need an engineering team yesterday?"
        description="Tell us what you need to ship, and we'll have shortlisted candidates in your inbox within 5 business days."
        primaryCta="Hire your team"
      />
      <FooterSection />
    </main>
    </PageTransition>
  );
}
