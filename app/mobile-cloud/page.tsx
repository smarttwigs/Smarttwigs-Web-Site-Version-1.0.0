import { CompetenceNav } from "@/components/competence/competence-nav";
import { MobileCloudHero } from "@/components/competence/mobile-cloud-hero";
import { CompetenceIntro } from "@/components/competence/competence-intro";
import { TechDeepDive } from "@/components/competence/tech-deep-dive";
import { UseCaseGrid } from "@/components/competence/use-case-grid";
import { TechStack } from "@/components/competence/tech-stack";
import { CompetenceCta } from "@/components/competence/competence-cta";
import { FooterSection } from "@/components/landing/footer-section";
import { PageTransition } from "@/components/competence/page-transition";
import {
  MobileArchIcon,
  CloudNativeIcon,
  EdgeIcon,
  OfflineIcon,
  AppStoreIcon,
  PerformanceMcIcon,
} from "@/components/competence/mobile-cloud-icons";

const valueProps = [
  {
    title: "Cross-Platform First",
    description:
      "One codebase, three platforms. React Native and Flutter ship to iOS, Android, and web from a single team.",
  },
  {
    title: "Cloud-Native by Default",
    description:
      "Containerized, observable, auto-scaling. We build for AWS, GCP, and Azure with Kubernetes and serverless.",
  },
  {
    title: "Offline-First",
    description:
      "Apps that keep working when the network doesn't. Local-first state, sync conflict resolution, replay queues.",
  },
  {
    title: "Performance Obsessed",
    description:
      "Sub-100ms render, sub-1s cold starts, sub-200ms API responses. We benchmark every release.",
  },
];

const techTopics = [
  {
    number: "01",
    title: "Mobile Architecture",
    icon: <MobileArchIcon />,
    description:
      "We design mobile apps that survive year 3. Clean architecture, testable layers, and native performance where it matters.",
    bullets: [
      "React Native, Flutter, Swift, Kotlin",
      "Clean architecture & MVVM patterns",
      "Native modules & bridging when needed",
      "State management (Redux, Zustand, Riverpod)",
      "Push notifications & deep linking",
      "Biometrics, secure enclave, keychain",
    ],
  },
  {
    number: "02",
    title: "Cloud-Native Services",
    icon: <CloudNativeIcon />,
    description:
      "Microservices on the platform that fits your team. Containerized, observable, and serverless-first when it makes sense.",
    bullets: [
      "AWS, GCP, Azure architecture",
      "Kubernetes, ECS, Cloud Run, App Runner",
      "Serverless: Lambda, Cloud Functions, Workers",
      "Service mesh (Istio, Linkerd)",
      "Infrastructure as code (Terraform, Pulumi)",
      "Observability (OpenTelemetry, Datadog, Grafana)",
    ],
  },
  {
    number: "03",
    title: "Edge & Global Distribution",
    icon: <EdgeIcon />,
    description:
      "Push compute to the edge. Sub-100ms response times anywhere on the globe with edge functions and global caching.",
    bullets: [
      "Cloudflare Workers, Vercel Edge, Fastly",
      "Multi-region active-active deployments",
      "Global load balancing & DNS routing",
      "CDN strategy & cache invalidation",
      "Regional data residency compliance",
      "Edge AI inference",
    ],
  },
  {
    number: "04",
    title: "Offline-First Architecture",
    icon: <OfflineIcon />,
    description:
      "Apps that work in airplane mode, on the subway, in rural villages. Local-first databases with smart conflict resolution.",
    bullets: [
      "WatermelonDB, Realm, SQLite, IndexedDB",
      "CRDT-based sync (Yjs, Automerge)",
      "Optimistic UI & rollback",
      "Background sync & retry queues",
      "Conflict resolution strategies",
      "Service workers for PWAs",
    ],
  },
  {
    number: "05",
    title: "App Store Strategy",
    icon: <AppStoreIcon />,
    description:
      "Getting in the store is half the battle. We handle reviews, rejections, ASO, and rollout strategies.",
    bullets: [
      "iOS App Store & Google Play submission",
      "TestFlight & internal distribution",
      "Phased rollouts & A/B testing",
      "App Store Optimization (ASO)",
      "Review compliance & policy expertise",
      "In-app purchase & subscription setup",
    ],
  },
  {
    number: "06",
    title: "Performance Engineering",
    icon: <PerformanceMcIcon />,
    description:
      "We don't ship apps that lag. Profiled, benchmarked, and optimized — from cold start to 60fps scrolling.",
    bullets: [
      "Bundle size optimization & code splitting",
      "Cold start & warm start tuning",
      "Image & asset optimization",
      "Memory leak detection & profiling",
      "Network waterfall optimization",
      "Lighthouse, Sentry, Firebase Performance",
    ],
  },
];

const useCases = [
  "Cross-platform mobile apps (React Native / Flutter)",
  "Cloud-native microservices on AWS, GCP & Azure",
  "Real-time collaboration platforms",
  "Progressive web apps with offline-first architecture",
  "IoT dashboard & device management portals",
  "Multi-tenant SaaS with AI personalization layers",
  "B2B fleet management mobile apps",
  "Healthcare patient portals (HIPAA-compliant)",
  "Field service apps with offline data sync",
  "White-label SaaS platforms",
];

const techStackItems = [
  "React Native",
  "Flutter",
  "Swift",
  "Kotlin",
  "Next.js",
  "AWS",
  "GCP",
  "Azure",
  "Kubernetes",
  "Terraform",
  "Cloudflare",
  "Vercel",
  "Datadog",
  "Sentry",
  "Firebase",
  "Expo",
  "WatermelonDB",
  "Supabase",
];

export default function MobileCloudPage() {
  return (
    <PageTransition>
    <main className="relative min-h-screen overflow-x-hidden noise-overlay">
      <CompetenceNav />
      <MobileCloudHero />
      <CompetenceIntro
        label="Why Smart Twigs"
        heading="Apps that just work."
        subheading="From the App Store to the cloud edge — we ship mobile and web platforms that scale globally and fail gracefully."
        valueProps={valueProps}
      />
      <TechDeepDive
        label="Mobile & Cloud Stack"
        heading="The full app stack."
        subheading="Frontend, backend, edge, and everything in between — built for modern users on modern devices."
        topics={techTopics}
      />
      <UseCaseGrid label="Real Engagements" heading="What we've shipped." useCases={useCases} />
      <TechStack label="Our Toolkit" heading="The mobile & cloud stack." items={techStackItems} />
      <CompetenceCta
        heading="Ready to ship your app?"
        description="Whether it's a greenfield mobile app or a cloud migration, let's talk about the fastest path to a real product."
        primaryCta="Build your app"
      />
      <FooterSection />
    </main>
    </PageTransition>
  );
}
