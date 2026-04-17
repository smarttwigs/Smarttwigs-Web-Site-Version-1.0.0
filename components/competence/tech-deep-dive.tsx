"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface DeepDiveTopic {
  number: string;
  title: string;
  description: string;
  bullets: string[];
  icon?: ReactNode;
}

interface TechDeepDiveProps {
  label: string;
  heading: string;
  subheading?: string;
  topics: DeepDiveTopic[];
}

function TopicBlock({ topic, index }: { topic: DeepDiveTopic; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`group transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 py-12 lg:py-16 border-b border-foreground/10">
        <div className="shrink-0 lg:w-32 flex flex-col gap-6">
          <span className="font-mono text-sm text-muted-foreground">{topic.number}</span>
          {topic.icon && (
            <div className="w-20 h-20 text-background/80 group-hover:text-background transition-colors duration-500">
              {topic.icon}
            </div>
          )}
        </div>
        <div className="flex-1 grid lg:grid-cols-2 gap-8 lg:gap-16">
          <div>
            <h3 className="text-2xl lg:text-3xl font-display mb-4 group-hover:translate-x-2 transition-transform duration-500">
              {topic.title}
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed">{topic.description}</p>
          </div>
          <ul className="space-y-3">
            {topic.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-foreground/40 shrink-0" />
                <span className="text-sm font-mono text-muted-foreground leading-relaxed">
                  {bullet}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function TechDeepDive({ label, heading, subheading, topics }: TechDeepDiveProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 lg:py-24 bg-foreground text-background overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 40px,
              currentColor 40px,
              currentColor 41px
            )`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="mb-16 lg:mb-24">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-background/50 mb-6">
            <span className="w-8 h-px bg-background/30" />
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
            <p className="mt-6 text-lg text-background/60 max-w-2xl">{subheading}</p>
          )}
        </div>

        <div className="[&>div:last-child>div]:border-b-0">
          {topics.map((topic, index) => (
            <div key={topic.number} className="[&>div]:border-background/10">
              <TopicBlock topic={topic} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
