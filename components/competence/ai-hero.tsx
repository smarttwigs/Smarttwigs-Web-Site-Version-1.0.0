"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedNeuralNetwork } from "./animated-neural-network";

const codeLines = [
  { prefix: "$", text: "smarttwigs init ai-platform" },
  { prefix: ">", text: "✓ vector store provisioned (pgvector)" },
  { prefix: ">", text: "✓ embedding pipeline deployed" },
  { prefix: ">", text: "✓ llm gateway configured" },
  { prefix: ">", text: "✓ eval suite running" },
  { prefix: ">", text: "✓ guardrails active" },
  { prefix: "$", text: "ready to serve production traffic" },
];

export function AiHero() {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (visibleLines >= codeLines.length) return;
    const t = setTimeout(() => setVisibleLines((n) => n + 1), 400);
    return () => clearTimeout(t);
  }, [visibleLines]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-background">
      {/* Neural network background — full bleed */}
      <div className="absolute inset-0 opacity-50 pointer-events-none">
        <AnimatedNeuralNetwork />
      </div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Gradient fade at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 pt-32 lg:pt-40 pb-24 lg:pb-32 w-full">
        {/* Top metadata bar */}
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
          <span className="text-xs font-mono text-muted-foreground">02 — DATA SCIENCE & A.I.</span>
          <span className="text-foreground/20">/</span>
          <span className="text-xs font-mono text-muted-foreground">v2.0</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: headline + description */}
          <div className="lg:col-span-7">
            <h1
              className={`text-[clamp(2.5rem,7vw,5.5rem)] font-display leading-[0.95] tracking-tight transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <span className="block">Production AI,</span>
              <span className="block">
                <span className="relative inline-block">
                  built to scale.
                  <span className="absolute -bottom-2 left-0 right-0 h-3 bg-foreground/10" />
                </span>
              </span>
            </h1>

            <p
              className={`mt-10 text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              From <span className="text-foreground font-medium">RAG infrastructure</span> and{" "}
              <span className="text-foreground font-medium">LLM ops</span> to{" "}
              <span className="text-foreground font-medium">agentic workflows</span> and predictive
              models — we build the systems that turn raw data into revenue.
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
                Talk to an AI expert
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

            {/* Stats inline */}
            <div
              className={`mt-16 grid grid-cols-3 gap-8 max-w-2xl transition-all duration-700 delay-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <div>
                <div className="text-3xl lg:text-4xl font-display">90+</div>
                <div className="text-xs font-mono text-muted-foreground mt-1 uppercase tracking-widest">
                  AI Engineers
                </div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-display">F500</div>
                <div className="text-xs font-mono text-muted-foreground mt-1 uppercase tracking-widest">
                  Embedded
                </div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-display">24/7</div>
                <div className="text-xs font-mono text-muted-foreground mt-1 uppercase tracking-widest">
                  AI Ops
                </div>
              </div>
            </div>
          </div>

          {/* Right: terminal-style code block */}
          <div
            className={`lg:col-span-5 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="border border-foreground/20 bg-background/80 backdrop-blur-sm">
              {/* Window chrome */}
              <div className="px-4 py-3 border-b border-foreground/10 flex items-center justify-between">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-foreground/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-foreground/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-foreground/20" />
                </div>
                <span className="text-xs font-mono text-muted-foreground">
                  smarttwigs@ai:~/platform
                </span>
              </div>

              {/* Code body */}
              <div className="p-6 font-mono text-sm min-h-[280px]">
                {codeLines.slice(0, visibleLines).map((line, i) => (
                  <div key={i} className="leading-relaxed flex gap-3">
                    <span
                      className={
                        line.prefix === "$" ? "text-foreground" : "text-muted-foreground"
                      }
                    >
                      {line.prefix}
                    </span>
                    <span
                      className={
                        line.prefix === "$" ? "text-foreground" : "text-muted-foreground"
                      }
                    >
                      {line.text}
                    </span>
                  </div>
                ))}
                {visibleLines < codeLines.length && (
                  <div className="flex gap-3 leading-relaxed">
                    <span className="text-muted-foreground">&gt;</span>
                    <span className="inline-block w-2 h-4 bg-foreground/60 animate-pulse" />
                  </div>
                )}
              </div>

              {/* Status bar */}
              <div className="px-4 py-2 border-t border-foreground/10 flex items-center justify-between text-xs font-mono text-muted-foreground">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  active
                </span>
                <span>{visibleLines}/{codeLines.length} ops</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
