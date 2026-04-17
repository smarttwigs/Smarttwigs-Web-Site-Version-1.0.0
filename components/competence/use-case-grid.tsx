"use client";

import { useEffect, useRef, useState } from "react";

interface UseCaseGridProps {
  label: string;
  heading: string;
  useCases: string[];
}

export function UseCaseGrid({ label, heading, useCases }: UseCaseGridProps) {
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
        <div className="mb-16">
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
        </div>

        <div className="flex flex-wrap gap-3">
          {useCases.map((uc, index) => (
            <span
              key={uc}
              className={`inline-block px-4 py-2 text-sm font-mono text-muted-foreground border border-foreground/10 rounded-full transition-all duration-500 hover:border-foreground/40 hover:text-foreground ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${index * 30}ms` }}
            >
              {uc}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
