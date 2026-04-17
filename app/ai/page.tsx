import { CompetenceNav } from "@/components/competence/competence-nav";
import { AiHero } from "@/components/competence/ai-hero";
import { CompetenceIntro } from "@/components/competence/competence-intro";
import { TechDeepDive } from "@/components/competence/tech-deep-dive";
import { UseCaseGrid } from "@/components/competence/use-case-grid";
import { TechStack } from "@/components/competence/tech-stack";
import { CompetenceCta } from "@/components/competence/competence-cta";
import { FooterSection } from "@/components/landing/footer-section";
import { PageTransition } from "@/components/competence/page-transition";
import {
  RagIcon,
  LlmOpsIcon,
  AgenticIcon,
  FineTuneIcon,
  PipelineIcon,
  GovernanceIcon,
} from "@/components/competence/ai-stack-icons";

const valueProps = [
  {
    title: "PoC to Production",
    description:
      "Most AI projects die in notebooks. We ship to production with monitoring, evals, and rollback safety from day one.",
  },
  {
    title: "Model-Agnostic",
    description:
      "OpenAI, Anthropic, open-source, fine-tuned — we pick what fits your latency, cost, and compliance requirements.",
  },
  {
    title: "Compliance-Ready",
    description:
      "Audit logs, PII redaction, and governance built in. EU AI Act, NIST AI RMF, SOC 2 — we speak the language.",
  },
  {
    title: "Cost-Aware",
    description:
      "Token budgets, semantic caching, and intelligent model routing for sustainable AI economics at any scale.",
  },
];

const techTopics = [
  {
    number: "01",
    title: "RAG & Retrieval Architecture",
    icon: <RagIcon />,
    description:
      "Production-grade retrieval pipelines that go beyond naive embedding search. We design for accuracy, latency, and grounded responses at enterprise scale.",
    bullets: [
      "Vector databases: Pinecone, Weaviate, Qdrant, pgvector",
      "Embedding model selection & evaluation",
      "Hybrid search (dense + sparse / BM25)",
      "Reranking pipelines (Cohere, cross-encoders)",
      "GraphRAG / knowledge graph augmentation",
      "Multi-modal RAG (text + images + tables)",
    ],
  },
  {
    number: "02",
    title: "LLM Ops & Inference Infrastructure",
    icon: <LlmOpsIcon />,
    description:
      "The plumbing that keeps AI systems reliable, observable, and economical in production. Treat your LLMs the way you treat your APIs.",
    bullets: [
      "LLM gateways & multi-provider routing with failover",
      "Prompt versioning, A/B testing & eval pipelines",
      "LLM-as-judge & golden dataset regression testing",
      "Self-hosted inference: vLLM, TGI, Ollama",
      "Token observability & FinOps for AI workloads",
      "Semantic caching & request deduplication",
    ],
  },
  {
    number: "03",
    title: "Agentic Systems",
    icon: <AgenticIcon />,
    description:
      "Multi-step, tool-using agents that take real actions in real systems — with guardrails, memory, and human oversight where it matters.",
    bullets: [
      "Multi-agent orchestration (LangGraph, CrewAI, custom)",
      "Tool use & function calling architectures",
      "Agent memory: short-term, long-term, episodic",
      "Human-in-the-loop workflows & approval gates",
      "Agent evaluation & guardrails",
      "Stateful execution & checkpointing",
    ],
  },
  {
    number: "04",
    title: "Fine-tuning & Customization",
    icon: <FineTuneIcon />,
    description:
      "When prompting isn't enough, we fine-tune. From parameter-efficient adapters to full alignment workflows for domain-specific accuracy.",
    bullets: [
      "LoRA / QLoRA parameter-efficient fine-tuning",
      "Domain-specific embedding models",
      "Synthetic data generation for training",
      "RLHF / DPO alignment workflows",
      "Continued pretraining for vertical domains",
      "Quantization & inference optimization",
    ],
  },
  {
    number: "05",
    title: "Data & Pipelines",
    icon: <PipelineIcon />,
    description:
      "AI is only as good as the data that feeds it. We build the ingestion, transformation, and serving infrastructure that makes models reliable.",
    bullets: [
      "Feature stores (Feast, Tecton)",
      "Vector pipelines: chunking, embedding, indexing",
      "Real-time vs batch inference architectures",
      "Data lineage & governance",
      "Streaming ingestion with Kafka, Kinesis",
      "Lakehouse integration (Databricks, Snowflake)",
    ],
  },
  {
    number: "06",
    title: "Safety & Governance",
    icon: <GovernanceIcon />,
    description:
      "Compliance isn't a checkbox — it's an architecture. We bake safety, observability, and audit trails into every layer of the stack.",
    bullets: [
      "Guardrails & content moderation pipelines",
      "PII detection & redaction",
      "Model versioning & rollback",
      "Audit logs & compliance reporting",
      "EU AI Act, NIST AI RMF alignment",
      "Red-teaming & adversarial testing",
    ],
  },
];

const useCases = [
  "Propensity scoring & purchase behavior attribution",
  "Content & product recommendation engines",
  "Real-time AI ad & compliance scoring",
  "RAG infrastructure with internal agent creation (fintech)",
  "N8N automation for multi-model code & product review",
  "Biometric telemetry centralization & healthcare dashboards",
  "Pharmaceutical manufacturing data pipelines",
  "Customer churn prediction & retention models",
  "Multi-tenant RAG platform for enterprise knowledge bases",
  "Real-time fraud detection with LLM reasoning",
  "Agentic code review pipelines",
  "Document understanding & extraction at scale",
];

const techStackItems = [
  "LangChain",
  "LangGraph",
  "LlamaIndex",
  "OpenAI",
  "Anthropic",
  "Hugging Face",
  "Pinecone",
  "Weaviate",
  "Qdrant",
  "pgvector",
  "Modal",
  "Replicate",
  "vLLM",
  "Ollama",
  "Feast",
  "MLflow",
  "Weights & Biases",
  "n8n",
  "Databricks",
  "Snowflake",
];

export default function AiPage() {
  return (
    <PageTransition>
    <main className="relative min-h-screen overflow-x-hidden noise-overlay">
      <CompetenceNav />
      <AiHero />
      <CompetenceIntro
        label="Why Smart Twigs"
        heading="AI that actually ships."
        subheading="We bridge the gap between research and revenue with battle-tested infrastructure, model-agnostic pipelines, and engineering rigor."
        valueProps={valueProps}
      />
      <TechDeepDive
        label="Technical Capabilities"
        heading="The full AI stack."
        subheading="From retrieval to reasoning, from training to telemetry — we cover every layer of modern AI systems."
        topics={techTopics}
      />
      <UseCaseGrid
        label="Real Engagements"
        heading="What we've shipped."
        useCases={useCases}
      />
      <TechStack
        label="Our Tooling"
        heading="The stack we trust."
        items={techStackItems}
      />
      <CompetenceCta
        heading="Ready to ship AI to production?"
        description="Let's talk about your AI roadmap, infrastructure gaps, and what it would take to put a real model in front of real users."
        primaryCta="Talk to an AI expert"
      />
      <FooterSection />
    </main>
    </PageTransition>
  );
}
