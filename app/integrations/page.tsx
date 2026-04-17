import { CompetenceNav } from "@/components/competence/competence-nav";
import { IntegrationsHero } from "@/components/competence/integrations-hero";
import { CompetenceIntro } from "@/components/competence/competence-intro";
import { TechDeepDive } from "@/components/competence/tech-deep-dive";
import { UseCaseGrid } from "@/components/competence/use-case-grid";
import { TechStack } from "@/components/competence/tech-stack";
import { CompetenceCta } from "@/components/competence/competence-cta";
import { FooterSection } from "@/components/landing/footer-section";
import { PageTransition } from "@/components/competence/page-transition";
import {
  ApiIcon,
  EtlIcon,
  EventIcon,
  IdentityIcon,
  WebhookIcon,
  LegacyIcon,
} from "@/components/competence/integrations-icons";

const valueProps = [
  {
    title: "200+ Connectors",
    description:
      "We've integrated payment, CRM, ERP, marketing, and analytics platforms hundreds of times. We know the gotchas.",
  },
  {
    title: "Idempotent by Design",
    description:
      "Every pipeline we ship handles retries, replays, and partial failures without duplicating data or losing state.",
  },
  {
    title: "Audit-Ready",
    description:
      "Full data lineage, audit logs, and PII handling baked in. SOC 2, GDPR, HIPAA aware from line one.",
  },
  {
    title: "No Lock-in",
    description:
      "We use open standards (REST, GraphQL, AsyncAPI, OpenAPI). You own the code. No vendor traps.",
  },
];

const techTopics = [
  {
    number: "01",
    title: "API Architecture & Design",
    icon: <ApiIcon />,
    description:
      "We design APIs that scale beyond v1. REST or GraphQL, sync or async — we pick the right tool and document it so your team can ship without us.",
    bullets: [
      "REST, GraphQL, gRPC API design",
      "OpenAPI / AsyncAPI specifications",
      "Versioning & deprecation strategies",
      "Rate limiting, throttling, quotas",
      "API gateway configuration (Kong, Tyk, Zuplo)",
      "SDK & client library generation",
    ],
  },
  {
    number: "02",
    title: "ETL / ELT Pipelines",
    icon: <EtlIcon />,
    description:
      "Move data from anywhere to anywhere — reliably, transparently, and with full lineage. Batch, micro-batch, or streaming.",
    bullets: [
      "Airflow, Dagster, Prefect orchestration",
      "Fivetran, Airbyte, Meltano connectors",
      "dbt for transformation modeling",
      "Change data capture (CDC) pipelines",
      "Schema evolution & contract testing",
      "Data quality checks & alerting",
    ],
  },
  {
    number: "03",
    title: "Event-Driven Systems",
    icon: <EventIcon />,
    description:
      "Decouple your services with event streams that handle a million events per second without breaking a sweat.",
    bullets: [
      "Kafka, Pulsar, Kinesis, RabbitMQ",
      "Event sourcing & CQRS patterns",
      "Saga & compensation orchestration",
      "Dead letter queues & replay",
      "Schema registry (Avro, Protobuf)",
      "Exactly-once delivery semantics",
    ],
  },
  {
    number: "04",
    title: "Identity & Single Sign-On",
    icon: <IdentityIcon />,
    description:
      "Federate identity across your internal tools, customer portals, and third-party SaaS — without writing auth code from scratch.",
    bullets: [
      "OAuth 2.0, OIDC, SAML 2.0",
      "Auth0, Okta, Clerk, WorkOS",
      "Multi-tenant identity architectures",
      "Role-based & attribute-based access control",
      "SCIM provisioning & deprovisioning",
      "Passwordless & passkey authentication",
    ],
  },
  {
    number: "05",
    title: "Webhook & Orchestration",
    icon: <WebhookIcon />,
    description:
      "Automate the boring stuff. We connect SaaS tools end-to-end with workflows that don't break when something upstream changes.",
    bullets: [
      "n8n, Zapier, Make orchestration",
      "Webhook delivery & retry infrastructure",
      "Workflow monitoring & alerting",
      "WhatsApp, Slack, Discord notifications",
      "Cross-platform automation pipelines",
      "Custom integration platforms",
    ],
  },
  {
    number: "06",
    title: "Legacy Modernization",
    icon: <LegacyIcon />,
    description:
      "Mainframes to microservices. We've migrated monoliths, refactored COBOL, and put modern APIs on top of decade-old databases — without breaking production.",
    bullets: [
      "Strangler fig pattern migrations",
      "API facades for legacy systems",
      "Mainframe & COBOL modernization",
      "Database migration & replication",
      "Zero-downtime cutover strategies",
      "Coexistence & rollback plans",
    ],
  },
];

const useCases = [
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
  "HubSpot ↔ Salesforce bidirectional sync",
  "Multi-tenant SSO across 20+ SaaS tools",
];

const techStackItems = [
  "Kafka",
  "Airflow",
  "Dagster",
  "dbt",
  "Fivetran",
  "Airbyte",
  "n8n",
  "Zapier",
  "Mulesoft",
  "Auth0",
  "Okta",
  "WorkOS",
  "Stripe",
  "Salesforce",
  "Oracle ERP",
  "QuickBooks",
  "Square",
  "PayPal",
];

export default function IntegrationsPage() {
  return (
    <PageTransition>
    <main className="relative min-h-screen overflow-x-hidden noise-overlay">
      <CompetenceNav />
      <IntegrationsHero />
      <CompetenceIntro
        label="Why Smart Twigs"
        heading="Integrations that don't break."
        subheading="We've connected every major SaaS, ERP, and payment system you can name. Idempotent, observable, and audit-ready by default."
        valueProps={valueProps}
      />
      <TechDeepDive
        label="Integration Capabilities"
        heading="The full integration stack."
        subheading="From REST APIs to event streams, from mainframes to microservices — we handle every layer of system connectivity."
        topics={techTopics}
      />
      <UseCaseGrid label="Real Engagements" heading="What we've connected." useCases={useCases} />
      <TechStack label="Our Toolkit" heading="The integration stack." items={techStackItems} />
      <CompetenceCta
        heading="Got a system that won't talk?"
        description="Tell us what you need to connect and we'll scope an integration plan with timelines, cost, and risks."
        primaryCta="Plan your integration"
      />
      <FooterSection />
    </main>
    </PageTransition>
  );
}
