"use client";

import { ArrowRight, Check } from "lucide-react";

const services = [
  {
    name: "Product Development",
    description: "AI-assisted delivery from zero to scale",
    price: { monthly: null, annual: null },
    features: [
      "Architecture, APIs & cloud-native build",
      "AI-accelerated engineering workflows",
      "Testing, CI/CD & maintainable systems",
      "System integrations & modernization",
      "Mobile, web & embedded platforms",
      "Global AI engineers, fast onboard",
    ],
    cta: "Get in touch",
    popular: false,
  },
  {
    name: "Recruiting",
    description: "Elite AI, Engineering, and Product talent worldwide",
    price: { monthly: null, annual: null },
    features: [
      "Ex-FAANG & top American AI engineers",
      "NearShore: Panama, Colombia, Ecuador, Peru, Chile",
      "OffShore Europe: Romania, Moldova, Bulgaria",
      "OffShore Asia: India, Israel, Saudi Arabia, Thailand, Singapore",
      "Global AI delivery pods on demand",
    ],
    cta: "Contact us",
    popular: false,
  },
  {
    name: "AI Ops",
    description: "Run AI/ML + LLM systems in production",
    price: { monthly: null, annual: null },
    features: [
      "Model & prompt versioning",
      "Monitoring, evals & incident response",
      "Governance & compliance workflows",
      "FinOps / AI cost controls",
      "Global AI Ops experts on demand",
    ],
    cta: "Learn more",
    popular: true,
  },
  {
    name: "Digital Transformation",
    description: "Modernize with AI at the center",
    price: { monthly: null, annual: null },
    features: [
      "Cloud-native migration & automation",
      "AI-assisted delivery & observability",
      "Replace manual ops with AI workflows",
      "Compliance-ready architecture",
      "Technical leadership & roadmapping",
      "Measurable, secure AI-enabled ops",
    ],
    cta: "Contact us",
    popular: false,
  },
  {
    name: "Data & Analytics Platform",
    description: "AI-ready data infrastructure at any scale",
    price: { monthly: null, annual: null },
    features: [
      "OLTP + OLAP: lakehouse / warehouse",
      "Streaming, orchestration & data quality",
      "AI/ML feature stores & pipelines",
      "Semantic layers & governed access",
      "Global AI data experts on demand",
    ],
    cta: "Learn more",
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="relative py-16 lg:py-24 border-t border-foreground/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-6">
            Our Services
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight text-foreground mb-6">
            Complete solutions
            <br />
            <span className="text-stroke">from A to Z</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl">
            From AI-first product teams to global delivery pods — our network of elite AI and engineering experts helps you build faster, operate smarter, and stay compliant.
          </p>
        </div>

        

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-px bg-foreground/10">
          {services.map((plan, idx) => (
            <div
              key={plan.name}
              className={`relative p-8 lg:p-12 bg-background ${
                plan.popular ? "md:-my-4 md:py-12 lg:py-16 border-2 border-foreground" : ""
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-8 px-3 py-1 bg-foreground text-primary-foreground text-xs font-mono uppercase tracking-widest">
                  Most Popular
                </span>
              )}

              {/* Plan Header */}
              <div className="mb-8">
                <span className="font-mono text-xs text-muted-foreground">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-3xl text-foreground mt-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="mb-8 pb-8 border-b border-foreground/10" />

              {/* Features */}
              <ul className="space-y-4 mb-10">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-foreground mt-0.5 shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={`w-full py-4 flex items-center justify-center gap-2 text-sm font-medium transition-all group ${
                  plan.popular
                    ? "bg-foreground text-primary-foreground hover:bg-foreground/90"
                    : "border border-foreground/20 text-foreground hover:border-foreground hover:bg-foreground/5"
                }`}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <p className="mt-12 text-center text-sm text-muted-foreground">
          All engagements include dedicated project management and ongoing support.{" "}
          <a href="#" className="underline underline-offset-4 hover:text-foreground transition-colors">
            Learn more about our approach
          </a>
        </p>
      </div>
    </section>
  );
}
