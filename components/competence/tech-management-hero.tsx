"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const columns = [
  {
    label: "BACKLOG",
    cards: [
      { title: "Vendor evaluation", tag: "STRATEGY" },
      { title: "Org design v2", tag: "PEOPLE" },
    ],
  },
  {
    label: "IN PROGRESS",
    cards: [
      { title: "Hiring sprint", tag: "RECRUITING" },
      { title: "Q4 OKRs", tag: "PLANNING" },
      { title: "M&A diligence", tag: "AUDIT" },
    ],
  },
  {
    label: "REVIEW",
    cards: [{ title: "Tech debt audit", tag: "ARCHITECTURE" }],
  },
  {
    label: "DONE",
    cards: [
      { title: "Eng ladder rollout", tag: "PEOPLE" },
      { title: "RFC process", tag: "PROCESS" },
    ],
  },
];

export function TechManagementHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => setIsVisible(true), []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-background">
      {/* Grid background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(currentColor 1px, transparent 1px)`,
            backgroundSize: "100% 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 pt-32 lg:pt-40 pb-16 lg:pb-20 w-full">
        <div
          className={`mb-12 flex items-center gap-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            COMPETENCE.AREA
          </span>
          <span className="text-foreground/20">/</span>
          <span className="text-xs font-mono text-muted-foreground">06 — TECH MANAGEMENT</span>
          <span className="text-foreground/20">/</span>
          <span className="text-xs font-mono text-muted-foreground">fractional CTO services</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-12">
          <div className="lg:col-span-7">
            <h1
              className={`text-[clamp(2.5rem,7vw,5.5rem)] font-display leading-[0.95] tracking-tight transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <span className="block">Engineering leaders,</span>
              <span className="block">
                <span className="relative inline-block">
                  on-demand.
                  <span className="absolute -bottom-2 left-0 right-0 h-3 bg-foreground/10" />
                </span>
              </span>
            </h1>

            <p
              className={`mt-10 text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <span className="text-foreground font-medium">Fractional CTOs</span>,{" "}
              <span className="text-foreground font-medium">VP Engineering</span>, and{" "}
              <span className="text-foreground font-medium">technical advisors</span> — embedded in
              your team to set strategy, build org structure, and ship the right things.
            </p>

            <div
              className={`mt-12 flex flex-col sm:flex-row items-start gap-4 transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <Button
                size="lg"
                className="bg-foreground hover:bg-foreground/90 text-background px-8 h-14 text-base rounded-full group"
              >
                Get a fractional CTO
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              <Link href="/">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 px-8 text-base rounded-full border-foreground/20 hover:bg-foreground/5"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to home
                </Button>
              </Link>
            </div>
          </div>

          {/* Right: stat trio */}
          <div
            className={`lg:col-span-5 grid grid-cols-3 gap-4 lg:mt-8 transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="border border-foreground/10 p-4">
              <div className="text-3xl lg:text-4xl font-display">15+</div>
              <div className="text-xs font-mono text-muted-foreground mt-1 uppercase tracking-widest">Years exp</div>
            </div>
            <div className="border border-foreground/10 p-4">
              <div className="text-3xl lg:text-4xl font-display">F500</div>
              <div className="text-xs font-mono text-muted-foreground mt-1 uppercase tracking-widest">Track record</div>
            </div>
            <div className="border border-foreground/10 p-4">
              <div className="text-3xl lg:text-4xl font-display">∞</div>
              <div className="text-xs font-mono text-muted-foreground mt-1 uppercase tracking-widest">Frameworks</div>
            </div>
          </div>
        </div>

        {/* Kanban board */}
        <div
          className={`grid grid-cols-2 lg:grid-cols-4 gap-3 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {columns.map((col, colIdx) => (
            <div key={col.label} className="border border-foreground/15 bg-background/80 backdrop-blur-sm">
              <div className="px-3 py-2 border-b border-foreground/10 flex items-center justify-between">
                <span className="text-xs font-mono text-muted-foreground tracking-widest">{col.label}</span>
                <span className="text-xs font-mono text-muted-foreground">{col.cards.length}</span>
              </div>
              <div className="p-3 space-y-2 min-h-[140px]">
                {col.cards.map((card, cardIdx) => (
                  <div
                    key={card.title}
                    className="border border-foreground/15 bg-background p-2.5 kanban-card-float"
                    style={{ animationDelay: `${(colIdx * 150) + (cardIdx * 80)}ms` }}
                  >
                    <div className="text-xs text-foreground font-medium mb-1.5">{card.title}</div>
                    <div className="text-[10px] font-mono text-muted-foreground tracking-widest">{card.tag}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes kanban-float-in {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .kanban-card-float {
          opacity: 0;
          animation: kanban-float-in 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
      `}</style>
    </section>
  );
}
