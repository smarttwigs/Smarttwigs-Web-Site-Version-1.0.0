"use client";

import { useEffect, useRef, useState } from "react";

interface ValueProp {
  title: string;
  description: string;
}

interface CompetenceIntroProps {
  label: string;
  heading: string;
  subheading?: string;
  valueProps: ValueProp[];
}

export function CompetenceIntro({ label, heading, subheading, valueProps }: CompetenceIntroProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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
    <section ref={sectionRef} className="relative py-16 lg:py-24 border-t border-foreground/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="mb-16 lg:mb-24">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            {label}
          </span>
          <h2
            className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {heading}
          </h2>
          {subheading && (
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl">{subheading}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-foreground/10">
          {valueProps.map((vp, index) => (
            <div
              key={vp.title}
              className={`bg-background p-8 lg:p-10 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <span className="font-mono text-xs text-muted-foreground">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-2xl mt-3 mb-3">{vp.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{vp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
