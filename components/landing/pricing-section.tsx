"use client";

import { ArrowRight, Check } from "lucide-react";

const services = [
  {
    name: "Data & Analytics",
    description: "Extract insights and drive decisions",
    price: { monthly: null, annual: null },
    features: [
      "Data science consulting",
      "Machine learning solutions",
      "Business intelligence",
      "Predictive analytics",
      "Data visualization",
    ],
    cta: "Learn more",
    popular: false,
  },
  {
    name: "Software Development",
    description: "Custom solutions for your business",
    price: { monthly: null, annual: null },
    features: [
      "Custom web applications",
      "Mobile app development",
      "System integrations",
      "Cloud migrations",
      "API development",
      "Legacy modernization",
      "Security implementation",
    ],
    cta: "Get in touch",
    popular: true,
  },
  {
    name: "Digital Transformation",
    description: "End-to-end business evolution",
    price: { monthly: null, annual: null },
    features: [
      "Full technology audit",
      "Strategic roadmapping",
      "Process automation",
      "Change management",
      "Technical leadership",
      "Ongoing partnership",
      "Training & enablement",
      "24/7 dedicated support",
    ],
    cta: "Contact us",
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="relative py-32 lg:py-40 border-t border-foreground/10">
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
            From conception and development to integration and ongoing support. We provide comprehensive technology services tailored to your business needs.
          </p>
        </div>

        

        {/* Services Cards */}
        <div className="grid md:grid-cols-3 gap-px bg-foreground/10">
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
              <div className="mb-8 pb-8 border-b border-foreground/10">
                <span className="font-display text-4xl text-foreground">Custom</span>
              </div>

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
