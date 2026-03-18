"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Target, 
  LineChart, 
  FlaskConical, 
  Search, 
  Shield, 
  Zap,
  CheckCircle,
  Clock,
  Sparkles,
  Globe
} from "lucide-react";

const badges = [
  { label: "Outcome-focused", icon: Target },
  { label: "Fast start", icon: Clock },
  { label: "Enterprise-ready", icon: Shield },
  { label: "Global AI experts", icon: Globe },
];

const industries = [
  "Finance",
  "Healthcare", 
  "Education",
  "Research",
  "Retail",
  "SaaS",
];

const capabilities = [
  {
    icon: LineChart,
    title: "Evaluation & Scorecards",
    description: "Turn prototypes into measurable systems.",
  },
  {
    icon: Target,
    title: "LLM/ML Monitoring",
    description: "Know when quality drops before customers do.",
  },
  {
    icon: FlaskConical,
    title: "Experimentation & Rollouts",
    description: "A/B tests, canaries, safe releases.",
  },
  {
    icon: Search,
    title: "RAG Quality Engineering",
    description: "Better retrieval, fewer hallucinations.",
  },
  {
    icon: Shield,
    title: "Safety & Risk Controls",
    description: "PII handling + guardrails.",
  },
  {
    icon: Zap,
    title: "Cost & Performance Optimization",
    description: "Lower spend, faster response.",
  },
];

const keyPoints = [
  "Define success: KPIs tied to revenue, cost, risk, or retention",
  "Evaluation: golden sets, regression tests, release gates",
  "Monitoring: drift, quality, incidents, and playbooks",
  "RAG quality: retrieval metrics + grounding checks",
  "Cost control: FinOps for AI usage, latency budgets",
  "Governance-ready: audit trails and approvals when needed",
];

export function AIOpsSection() {
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
    <section
      id="aiops"
      ref={sectionRef}
      className="relative py-16 lg:py-24 border-b border-foreground/10"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-12">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            ML/LLM Operations
          </span>
          <h2
            className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Data Scientists for
            <br />
            <span className="text-muted-foreground">ML/LLM AIOps</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl">
            Outcome-driven measurement, evaluation, and operations for production AI — so your models 
            actually move business metrics.
          </p>
          
          {/* Badges */}
          <div className="mt-8 flex flex-wrap gap-3">
            {badges.map((badge) => (
              <div 
                key={badge.label}
                className="flex items-center gap-2 px-4 py-2 bg-foreground/5 border border-foreground/10 rounded-full text-sm"
              >
                <badge.icon className="w-4 h-4 text-foreground/60" />
                <span>{badge.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Copy */}
          <div
            className={`transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Our global AI experts help organizations ship ML and LLM features that are measurable, 
              reliable, and cost-controlled. We define success metrics, validate performance, and set 
              up the operational loops that keep AI improving after launch.
            </p>
            
            {/* Key Points */}
            <ul className="space-y-4 mb-8">
              {keyPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 mt-0.5 text-foreground/60 shrink-0" />
                  <span className="text-muted-foreground">{point}</span>
                </li>
              ))}
            </ul>

            {/* Industries */}
            <div className="pt-6 border-t border-foreground/10">
              <p className="text-sm font-mono text-muted-foreground mb-4">Industries we support</p>
              <div className="flex flex-wrap gap-2">
                {industries.map((industry) => (
                  <span 
                    key={industry}
                    className="px-3 py-1 text-sm bg-foreground/5 border border-foreground/10 rounded-full"
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Capability Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {capabilities.map((cap, index) => (
              <Card
                key={cap.title}
                className={`border-foreground/10 bg-background hover:border-foreground/20 transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${(index + 2) * 75}ms` }}
              >
                <CardHeader className="pb-2">
                  <div className="w-10 h-10 rounded-lg bg-foreground/5 flex items-center justify-center mb-3">
                    <cap.icon className="w-5 h-5 text-foreground" />
                  </div>
                  <CardTitle className="text-base font-display">{cap.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{cap.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Fast Start Callout */}
        <div
          className={`mt-12 p-6 bg-foreground text-background rounded-lg flex flex-col sm:flex-row items-start sm:items-center gap-4 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="w-12 h-12 rounded-full bg-background/10 flex items-center justify-center shrink-0">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <p className="font-display text-lg mb-1">Fast start: 10–14 days</p>
            <p className="text-background/70 text-sm">
              We can baseline metrics and ship your first evaluation + monitoring loop in under two weeks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
