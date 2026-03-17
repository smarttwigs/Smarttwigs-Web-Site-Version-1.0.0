"use client";

import { useEffect, useState } from "react";

const testimonials = [
  {
    quote: "Their team delivered a governed data platform that passed our security review on first submission. Rare for external vendors.",
    author: "VP of Data Engineering",
    role: "Anonymized",
    company: "Top-10 Global Bank",
    metric: "First-pass security approval",
  },
  {
    quote: "The MLOps framework they implemented took our models from quarterly releases to weekly deployments with full auditability.",
    author: "Chief Analytics Officer",
    role: "Anonymized",
    company: "Fortune 100 Retailer",
    metric: "Faster ML release cadence",
  },
  {
    quote: "Follow-the-sun delivery with their global pods meant we never lost momentum. Enterprise controls without enterprise overhead.",
    author: "Director of Platform Engineering",
    role: "Anonymized",
    company: "Global Insurance Company",
    metric: "24/7 delivery coverage",
  },
  {
    quote: "They understood our compliance requirements from day one. Documentation, access controls, lineage — all production-ready.",
    author: "CISO",
    role: "Anonymized",
    company: "Healthcare Network",
    metric: "Compliance-ready delivery",
  },
];

const selectedExperience = [
  "Top-10 Bank",
  "Global Insurer", 
  "Fortune 100 Retailer",
  "Healthcare Network",
  "Fintech Unicorn",
  "Enterprise SaaS",
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
        setIsAnimating(false);
      }, 300);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section className="relative py-16 lg:py-24 border-t border-foreground/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            Client Success Stories
          </span>
          <div className="flex-1 h-px bg-foreground/10" />
          <span className="font-mono text-xs text-muted-foreground">
            {String(activeIndex + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
          </span>
        </div>

        {/* Main Quote */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-8">
            <blockquote
              className={`transition-all duration-300 ${
                isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
              }`}
            >
              <p className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-foreground">
                "{activeTestimonial.quote}"
              </p>
            </blockquote>

            {/* Author */}
            <div
              className={`mt-12 flex items-center gap-6 transition-all duration-300 delay-100 ${
                isAnimating ? "opacity-0" : "opacity-100"
              }`}
            >
              <div className="w-16 h-16 rounded-full bg-foreground/5 border border-foreground/10 flex items-center justify-center">
                <span className="font-display text-2xl text-foreground">
                  {activeTestimonial.author.charAt(0)}
                </span>
              </div>
              <div>
                <p className="text-lg font-medium text-foreground">{activeTestimonial.author}</p>
                <p className="text-muted-foreground">
                  {activeTestimonial.role}, {activeTestimonial.company}
                </p>
              </div>
            </div>
          </div>

          {/* Metric Highlight */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <div
              className={`p-8 border border-foreground/10 transition-all duration-300 ${
                isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
              }`}
            >
              <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-4">
                Key Result
              </span>
              <p className="font-display text-3xl md:text-4xl text-foreground">
                {activeTestimonial.metric}
              </p>
            </div>

            {/* Navigation Dots */}
            <div className="flex gap-2 mt-8">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setIsAnimating(true);
                    setTimeout(() => {
                      setActiveIndex(idx);
                      setIsAnimating(false);
                    }, 300);
                  }}
                  className={`h-2 transition-all duration-300 ${
                    idx === activeIndex
                      ? "w-8 bg-foreground"
                      : "w-2 bg-foreground/20 hover:bg-foreground/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Selected Experience */}
        <div className="mt-16 pt-12 border-t border-foreground/10">
          <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase mb-6 text-center">
            Selected Experience (Anonymized)
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {selectedExperience.map((exp) => (
              <span
                key={exp}
                className="px-4 py-2 text-sm font-mono text-foreground/70 bg-foreground/5 rounded-full border border-foreground/10"
              >
                {exp}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
