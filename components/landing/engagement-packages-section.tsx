"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Layers, BarChart3 } from "lucide-react";

const packages = [
  {
    icon: Zap,
    title: "AI Sprint",
    duration: "2 weeks",
    description: "Baseline metrics + ship first eval/monitoring loop",
  },
  {
    icon: Layers,
    title: "Platform Build",
    duration: "6–8 weeks",
    description: "Data/AI foundation + pipelines + governance starter kit",
  },
  {
    icon: BarChart3,
    title: "Fractional AI Ops",
    duration: "monthly",
    description: "Ongoing monitoring, evaluation, cost control, and improvements",
  },
];

export function EngagementPackagesSection() {
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
    <section ref={sectionRef} className="relative py-12 lg:py-16">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-4">
            <span className="w-8 h-px bg-foreground/30" />
            Engagement Options
            <span className="w-8 h-px bg-foreground/30" />
          </span>
          <h3
            className={`text-2xl lg:text-3xl font-display tracking-tight transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Ways to work with Smart Twigs
          </h3>
        </div>

        {/* Package Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((pkg, index) => (
            <Card
              key={pkg.title}
              className={`border-foreground/10 bg-background hover:border-foreground/20 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg bg-foreground flex items-center justify-center">
                    <pkg.icon className="w-5 h-5 text-background" />
                  </div>
                  <span className="text-xs font-mono text-muted-foreground px-2 py-1 bg-foreground/5 rounded-full">
                    {pkg.duration}
                  </span>
                </div>
                <CardTitle className="text-lg font-display">{pkg.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{pkg.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
