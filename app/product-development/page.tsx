import { CompetenceNav } from "@/components/competence/competence-nav";
import { ProductDevelopmentHero } from "@/components/competence/product-development-hero";
import { CompetenceIntro } from "@/components/competence/competence-intro";
import { TechDeepDive } from "@/components/competence/tech-deep-dive";
import { UseCaseGrid } from "@/components/competence/use-case-grid";
import { TechStack } from "@/components/competence/tech-stack";
import { CompetenceCta } from "@/components/competence/competence-cta";
import { FooterSection } from "@/components/landing/footer-section";
import { PageTransition } from "@/components/competence/page-transition";
import {
  DiscoveryIcon,
  ArchitectureIcon,
  MvpIcon,
  DesignSystemIcon,
  GrowthIcon,
  AnalyticsIcon,
} from "@/components/competence/product-development-icons";

const valueProps = [
  {
    title: "0 to 1, 1 to N",
    description:
      "We ship MVPs for funded startups and scale Fortune 500 platforms to billions of users — same playbooks, different stages.",
  },
  {
    title: "Design + Engineering",
    description:
      "No silos. Designers, PMs, and engineers in the same standup, the same repo, the same outcomes.",
  },
  {
    title: "Discovery-First",
    description:
      "We don't build until we understand the problem. User research, hypothesis testing, and prototyping before line one.",
  },
  {
    title: "Ship Fast, Learn Faster",
    description:
      "A/B testing, feature flags, analytics, and rollback baked in. Every release is a learning opportunity.",
  },
];

const techTopics = [
  {
    number: "01",
    title: "Discovery & Research",
    icon: <DiscoveryIcon />,
    description:
      "Before we write code, we figure out what to build. User interviews, JTBD frameworks, prototypes, and validated learning.",
    bullets: [
      "User interviews & ethnographic research",
      "Jobs-to-be-Done frameworks",
      "Concept testing & prototype validation",
      "Competitive landscape analysis",
      "Opportunity sizing & prioritization",
      "Discovery sprints & design jams",
    ],
  },
  {
    number: "02",
    title: "Architecture & Foundations",
    icon: <ArchitectureIcon />,
    description:
      "We design systems that survive the second year. Modular, testable, observable — and easy for the next team to extend.",
    bullets: [
      "System design & RFCs",
      "Modular monoliths & microservices",
      "API design & contract testing",
      "Database modeling & migrations",
      "CI/CD pipelines & deployment strategy",
      "Observability & SLO design",
    ],
  },
  {
    number: "03",
    title: "MVP & Rapid Build",
    icon: <MvpIcon />,
    description:
      "Funded startups need a real product in weeks, not quarters. We ship MVPs that are production-ready, not prototypes.",
    bullets: [
      "0-to-1 MVP builds for funded startups",
      "Sprint zero infrastructure setup",
      "Modern stack defaults (Next.js, Postgres, Vercel)",
      "Auth, payments, email, observability built in",
      "Customer onboarding & analytics",
      "Investor demo readiness",
    ],
  },
  {
    number: "04",
    title: "Design Systems",
    icon: <DesignSystemIcon />,
    description:
      "Component libraries that scale across teams and products. We build once and reuse everywhere — no design debt.",
    bullets: [
      "Figma component libraries",
      "Code component libraries (React, Vue, Web Components)",
      "Design tokens & theming",
      "Accessibility (WCAG 2.2 AA) baked in",
      "Documentation sites (Storybook, Zeroheight)",
      "Versioning & adoption playbooks",
    ],
  },
  {
    number: "05",
    title: "Growth Engineering",
    icon: <GrowthIcon />,
    description:
      "Activation, retention, virality. We instrument every funnel and run experiments that actually move the needle.",
    bullets: [
      "Activation funnel optimization",
      "Retention loops & re-engagement",
      "A/B testing infrastructure",
      "Referral & viral mechanics",
      "Onboarding & aha-moment design",
      "Conversion rate optimization",
    ],
  },
  {
    number: "06",
    title: "Product Analytics",
    icon: <AnalyticsIcon />,
    description:
      "Numbers without context are noise. We instrument products to surface the signals that matter, then build dashboards your team actually uses.",
    bullets: [
      "Event taxonomy & tracking plans",
      "Mixpanel, Amplitude, PostHog setup",
      "Custom funnels & cohort analysis",
      "Feature usage & engagement metrics",
      "North-star & input metric frameworks",
      "Self-serve dashboards for ICs",
    ],
  },
];

const useCases = [
  "0-to-1 MVP builds for funded startups",
  "Product-market fit experimentation frameworks",
  "Legacy product modernization & re-platforming",
  "Design system creation & component libraries",
  "AI-enhanced user research & rapid prototyping",
  "Growth engineering & A/B testing",
  "Subscription billing & checkout flows",
  "Multi-tenant B2B SaaS launches",
  "Marketplace two-sided product builds",
  "Internal tool & admin platform builds",
];

const techStackItems = [
  "Figma",
  "Next.js",
  "React",
  "Vercel",
  "Postgres",
  "Prisma",
  "Stripe",
  "Auth0",
  "Resend",
  "PostHog",
  "Mixpanel",
  "Amplitude",
  "Storybook",
  "Linear",
  "Notion",
  "Loom",
];

export default function ProductDevelopmentPage() {
  return (
    <PageTransition>
    <main className="relative min-h-screen overflow-x-hidden noise-overlay">
      <CompetenceNav />
      <ProductDevelopmentHero />
      <CompetenceIntro
        label="Why Smart Twigs"
        heading="Products that ship, products that scale."
        subheading="Discovery, design, engineering, and growth — under one roof. We do MVPs and we do platforms. Same team, different gears."
        valueProps={valueProps}
      />
      <TechDeepDive
        label="Product Capabilities"
        heading="The full product stack."
        subheading="From the first user interview to the millionth ARR — we cover every step of the product lifecycle."
        topics={techTopics}
      />
      <UseCaseGrid label="Real Engagements" heading="What we've built." useCases={useCases} />
      <TechStack label="Our Toolkit" heading="The product stack." items={techStackItems} />
      <CompetenceCta
        heading="Got an idea worth shipping?"
        description="Tell us your hypothesis, your timeline, and your constraints. We'll come back with a product roadmap and a build plan."
        primaryCta="Build your product"
      />
      <FooterSection />
    </main>
    </PageTransition>
  );
}
