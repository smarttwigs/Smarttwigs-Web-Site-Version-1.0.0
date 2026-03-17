"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, FileText, Lock, CheckCircle, ArrowRight, Database, Eye, Users } from "lucide-react";

const complianceAreas = [
  {
    icon: Shield,
    title: "Security-by-Design",
    items: [
      "Least privilege access patterns",
      "Encryption in transit and at rest",
      "Secrets management",
      "Network segmentation",
    ],
  },
  {
    icon: Eye,
    title: "Auditability",
    items: [
      "Data lineage tracking",
      "Comprehensive logging",
      "Access audit trails",
      "Reproducible pipelines",
    ],
  },
  {
    icon: Database,
    title: "Data Governance",
    items: [
      "Data classification frameworks",
      "Retention policies",
      "PII controls and masking",
      "Ownership model definition",
    ],
  },
  {
    icon: Users,
    title: "Enterprise Alignment",
    items: [
      "Aligned with SOC 2-style controls",
      "ISO 27001 principles",
      "GDPR-ready patterns",
      "HIPAA / PCI-aware workflows",
    ],
  },
];

const complianceDeliverables = [
  "Reference architecture + threat model",
  "Data flow diagrams",
  "Access control matrix (RBAC/ABAC)",
  "Logging/monitoring plan",
  "Incident response & escalation process",
  "Secure SDLC overview",
];

export function ComplianceSection() {
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
      id="compliance"
      ref={sectionRef}
      className="relative py-16 lg:py-24 bg-foreground/[0.02]"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            Compliance & Governance
          </span>
          <h2
            className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Compliance-ready AI
            <br />
            <span className="text-muted-foreground">and Data delivery.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl">
            We operate with enterprise security expectations from day one and align to your internal 
            controls and vendor risk requirements. We support security questionnaires, architecture 
            reviews, and onboarding documentation.
          </p>
        </div>

        {/* Compliance Areas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {complianceAreas.map((area, index) => (
            <Card
              key={area.title}
              className={`border-foreground/10 bg-background transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-4">
                <div className="w-10 h-10 rounded-lg bg-foreground/5 flex items-center justify-center mb-4">
                  <area.icon className="w-5 h-5 text-foreground" />
                </div>
                <CardTitle className="text-lg font-display">{area.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {area.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 mt-0.5 text-foreground/40 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Compliance Deliverables Card */}
        <Card
          className={`border-foreground/10 bg-background transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-foreground flex items-center justify-center">
                <FileText className="w-5 h-5 text-background" />
              </div>
              <div>
                <CardTitle className="text-xl font-display">Compliance Deliverables</CardTitle>
                <p className="text-sm text-muted-foreground mt-1">
                  Documentation and artifacts we provide with every enterprise engagement
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {complianceDeliverables.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 p-3 rounded-lg bg-foreground/[0.02] border border-foreground/5"
                >
                  <Lock className="w-4 h-4 text-foreground/60 shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-foreground/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground">
                Ready to discuss your compliance requirements?
              </p>
              <Button
                variant="outline"
                className="rounded-full group"
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Security & Compliance Overview
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
