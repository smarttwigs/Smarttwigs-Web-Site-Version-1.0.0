"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Users, Target, Clock, Shield, FileCheck, CheckCircle } from "lucide-react";

const regions = [
  {
    name: "NearShore LATAM",
    description: "US time-zone overlap, rapid iteration, embedded squads",
    icon: Clock,
    highlight: "Same-day collaboration",
  },
  {
    name: "Europe",
    description: "Deep platform engineering expertise, overlap for US mornings",
    icon: Globe,
    highlight: "Engineering depth",
  },
  {
    name: "Asia",
    description: "Extended coverage for overnight builds, testing, operational support",
    icon: Users,
    highlight: "24/7 coverage",
  },
];

const operatingModels = [
  {
    title: "Dedicated Pods",
    description: "Platform / MLOps / Analytics Engineering teams fully embedded in your organization",
    icon: Users,
  },
  {
    title: "Staff Augmentation",
    description: "Your standards + our talent — seamlessly integrated into your existing teams",
    icon: Target,
  },
  {
    title: "Outcome-based Delivery",
    description: "Milestones + KPIs — we own the delivery and you own the results",
    icon: FileCheck,
  },
];

const enterpriseControls = [
  "Secure onboarding (background checks where required, access provisioning)",
  "Device/security policies + least privilege access",
  "Code reviews, change management, documented runbooks",
  "Clear ownership (Product, Architecture, Delivery, Security POCs)",
  "Weekly exec reporting (risks, milestones, spend, outcomes)",
];

export function GlobalDeliverySection() {
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
      id="delivery"
      ref={sectionRef}
      className="relative py-16 lg:py-24 border-y border-foreground/10"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            Global Delivery Model
          </span>
          <h2
            className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Global delivery.
            <br />
            <span className="text-muted-foreground">Enterprise control.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl">
            NearShore delivery across LATAM and OffShore capacity in Europe and Asia — enabling 
            follow-the-sun execution without compromising governance.
          </p>
        </div>

        {/* Region Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {regions.map((region, index) => (
            <Card
              key={region.name}
              className={`border-foreground/10 bg-background hover:border-foreground/20 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="w-10 h-10 rounded-lg bg-foreground/5 flex items-center justify-center">
                    <region.icon className="w-5 h-5 text-foreground" />
                  </div>
                  <span className="text-xs font-mono text-muted-foreground px-2 py-1 bg-foreground/5 rounded-full">
                    {region.highlight}
                  </span>
                </div>
                <CardTitle className="text-xl font-display">{region.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{region.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Operating Models */}
        <div className="mb-16">
          <h3 className="text-2xl font-display mb-8">Operating Model Options</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {operatingModels.map((model, index) => (
              <div
                key={model.title}
                className={`p-6 border border-foreground/10 rounded-lg bg-foreground/[0.01] transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${(index + 3) * 100}ms` }}
              >
                <div className="w-10 h-10 rounded-lg bg-foreground flex items-center justify-center mb-4">
                  <model.icon className="w-5 h-5 text-background" />
                </div>
                <h4 className="text-lg font-display mb-2">{model.title}</h4>
                <p className="text-sm text-muted-foreground">{model.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Enterprise Controls */}
        <Card
          className={`border-foreground/10 bg-background transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-foreground/5 flex items-center justify-center">
                <Shield className="w-5 h-5 text-foreground" />
              </div>
              <CardTitle className="text-xl font-display">Enterprise Controls</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {enterpriseControls.map((control) => (
                <div key={control} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 mt-1 text-foreground/60 shrink-0" />
                  <span className="text-sm text-muted-foreground">{control}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
