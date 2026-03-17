"use client";

import { ArrowRight, Check } from "lucide-react";

const engagementTypes = [
  {
    name: "Platform Assessment",
    description: "Evaluate your current data/AI infrastructure",
    features: [
      "Architecture review",
      "Security posture assessment",
      "Performance analysis",
      "Compliance gap analysis",
      "Actionable roadmap",
    ],
    cta: "Request Assessment",
    popular: false,
  },
  {
    name: "Capability Deck",
    description: "Detailed overview of our services and approach",
    features: [
      "Full service portfolio",
      "Case study summaries",
      "Delivery model options",
      "Compliance documentation",
      "Team structure & expertise",
      "Engagement process",
      "Reference architecture samples",
    ],
    cta: "Request Capability Deck",
    popular: true,
  },
  {
    name: "Vendor Onboarding",
    description: "We support your procurement process",
    features: [
      "Security questionnaire completion",
      "Architecture review sessions",
      "Compliance documentation",
      "Reference calls (anonymized)",
      "SOW/MSA negotiation support",
      "Proof of concept planning",
      "Team introduction",
      "Onboarding timeline",
    ],
    cta: "Start Onboarding",
    popular: false,
  },
];

const inquiryOptions = [
  "Compliance review",
  "Global delivery pods",
  "Platform assessment",
  "Capability deck request",
];

export function PricingSection() {
  return (
    <section id="pricing" className="relative py-16 lg:py-24 border-t border-foreground/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-6">
            Get Started
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight text-foreground mb-6">
            Ready to engage?
            <br />
            <span className="text-stroke">Let&apos;s talk.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl">
            Whether you need a platform assessment, want to review our capabilities, or are ready to start vendor onboarding — we make it easy to get started.
          </p>
        </div>

        

        {/* Engagement Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {engagementTypes.map((type, idx) => (
            <div
              key={type.name}
              className={`relative p-8 lg:p-10 bg-background border rounded-lg ${
                type.popular ? "border-2 border-foreground" : "border-foreground/10"
              }`}
            >
              {type.popular && (
                <span className="absolute -top-3 left-6 px-3 py-1 bg-foreground text-primary-foreground text-xs font-mono uppercase tracking-widest rounded-full">
                  Recommended
                </span>
              )}

              {/* Header */}
              <div className="mb-6">
                <span className="font-mono text-xs text-muted-foreground">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-2xl text-foreground mt-2">{type.name}</h3>
                <p className="text-sm text-muted-foreground mt-2">{type.description}</p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {type.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-foreground mt-0.5 shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={`w-full py-3 flex items-center justify-center gap-2 text-sm font-medium transition-all group rounded-full ${
                  type.popular
                    ? "bg-foreground text-primary-foreground hover:bg-foreground/90"
                    : "border border-foreground/20 text-foreground hover:border-foreground hover:bg-foreground/5"
                }`}
              >
                {type.cta}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          ))}
        </div>

        {/* Inquiry Options */}
        <div className="p-8 border border-foreground/10 rounded-lg bg-foreground/[0.01]">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h3 className="font-display text-xl mb-2">What are you interested in?</h3>
              <p className="text-sm text-muted-foreground">Select all that apply and we&apos;ll tailor our response.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {inquiryOptions.map((option) => (
                <label key={option} className="flex items-center gap-2 px-4 py-2 border border-foreground/10 rounded-full cursor-pointer hover:border-foreground/30 transition-colors">
                  <input type="checkbox" className="w-4 h-4 accent-foreground" />
                  <span className="text-sm">{option}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <p className="mt-8 text-center text-sm text-muted-foreground">
          We can support vendor onboarding and security reviews.{" "}
          <a href="#compliance" className="underline underline-offset-4 hover:text-foreground transition-colors">
            View our compliance deliverables
          </a>
        </p>
      </div>
    </section>
  );
}
