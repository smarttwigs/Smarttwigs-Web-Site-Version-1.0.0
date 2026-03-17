"use client";

import { useEffect, useState, useRef } from "react";
import { TrendingUp, Shield, DollarSign, Clock } from "lucide-react";

const outcomes = [
  { 
    icon: Clock,
    title: "Faster release cadence",
    description: "Accelerated data/ML pipeline deployments with automated CI/CD and governed releases",
  },
  { 
    icon: Shield,
    title: "Improved auditability",
    description: "Governed access to data with full lineage, logging, and compliance documentation",
  },
  { 
    icon: DollarSign,
    title: "Reduced compute waste",
    description: "FinOps guardrails and cost optimization strategies for cloud infrastructure",
  },
  { 
    icon: TrendingUp,
    title: "Production-ready ML",
    description: "MLOps frameworks that take models from experimentation to reliable production systems",
  },
];

export function MetricsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
    <section id="outcomes" ref={sectionRef} className="relative py-16 lg:py-24 border-y border-foreground/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div>
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-foreground/30" />
              Typical Outcomes
            </span>
            <h2
              className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Measurable impact
              <br />
              <span className="text-muted-foreground">for enterprise clients.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Our engagements consistently deliver improvements across delivery speed, governance, and cost efficiency.
          </p>
        </div>
        
        {/* Outcomes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {outcomes.map((outcome, index) => (
            <div
              key={outcome.title}
              className={`p-8 lg:p-10 border border-foreground/10 rounded-lg bg-foreground/[0.01] transition-all duration-700 hover:border-foreground/20 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-foreground/5 flex items-center justify-center mb-6">
                <outcome.icon className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-display mb-3">{outcome.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{outcome.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
