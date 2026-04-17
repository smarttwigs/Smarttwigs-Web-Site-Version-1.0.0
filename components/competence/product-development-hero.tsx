"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ProductDevelopmentHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => setIsVisible(true), []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-background">
      {/* Blueprint grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.06]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Major grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(currentColor 1.5px, transparent 1.5px), linear-gradient(90deg, currentColor 1.5px, transparent 1.5px)",
            backgroundSize: "200px 200px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 pt-32 lg:pt-40 pb-24 lg:pb-32 w-full">
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
          <span className="text-xs font-mono text-muted-foreground">07 — PRODUCT</span>
          <span className="text-foreground/20">/</span>
          <span className="text-xs font-mono text-muted-foreground">discovery → ship</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <h1
              className={`text-[clamp(2.5rem,7vw,5.5rem)] font-display leading-[0.95] tracking-tight transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <span className="block">From blueprint</span>
              <span className="block">
                <span className="relative inline-block">
                  to billion-user product.
                  <span className="absolute -bottom-2 left-0 right-0 h-3 bg-foreground/10" />
                </span>
              </span>
            </h1>

            <p
              className={`mt-10 text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <span className="text-foreground font-medium">Discovery</span>,{" "}
              <span className="text-foreground font-medium">design</span>,{" "}
              <span className="text-foreground font-medium">engineering</span>, and{" "}
              <span className="text-foreground font-medium">growth</span> — under one roof. We
              ship products from 0 to 1 and 1 to N.
            </p>

            <div
              className={`mt-12 flex flex-col sm:flex-row items-start gap-4 transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <a href="https://calendly.com/smarttwigs/30min" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-foreground hover:bg-foreground/90 text-background px-8 h-14 text-base rounded-full group"
                >
                  Build your product
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
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

          {/* Right: animated wireframe being drawn */}
          <div
            className={`lg:col-span-5 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="border border-foreground/30 bg-background/80 backdrop-blur-sm aspect-[4/5]">
              <div className="px-4 py-2 border-b border-foreground/10 flex items-center justify-between">
                <span className="text-xs font-mono text-muted-foreground">wireframe.fig</span>
                <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  drawing
                </div>
              </div>
              <div className="p-6">
                <svg viewBox="0 0 320 360" className="w-full h-full" stroke="currentColor" fill="none" strokeWidth="2">
                  {/* Header */}
                  <rect x="10" y="10" width="300" height="40" className="wireframe-draw" style={{ animationDelay: "0.2s" }} />
                  <line x1="20" y1="30" x2="80" y2="30" className="wireframe-draw" style={{ animationDelay: "0.4s" }} />
                  <circle cx="290" cy="30" r="6" className="wireframe-draw" style={{ animationDelay: "0.5s" }} />
                  {/* Hero */}
                  <rect x="10" y="60" width="300" height="100" className="wireframe-draw" style={{ animationDelay: "0.7s" }} />
                  <line x1="30" y1="100" x2="200" y2="100" strokeWidth="3" className="wireframe-draw" style={{ animationDelay: "0.9s" }} />
                  <line x1="30" y1="115" x2="160" y2="115" strokeWidth="2" className="wireframe-draw" style={{ animationDelay: "1.0s" }} />
                  <rect x="30" y="130" width="80" height="20" rx="2" fill="currentColor" fillOpacity="0.15" className="wireframe-draw" style={{ animationDelay: "1.2s" }} />
                  {/* Cards row */}
                  <rect x="10" y="170" width="92" height="80" className="wireframe-draw" style={{ animationDelay: "1.4s" }} />
                  <rect x="114" y="170" width="92" height="80" className="wireframe-draw" style={{ animationDelay: "1.5s" }} />
                  <rect x="218" y="170" width="92" height="80" className="wireframe-draw" style={{ animationDelay: "1.6s" }} />
                  {/* Card details */}
                  <circle cx="56" cy="200" r="10" className="wireframe-draw" style={{ animationDelay: "1.7s" }} />
                  <circle cx="160" cy="200" r="10" className="wireframe-draw" style={{ animationDelay: "1.8s" }} />
                  <circle cx="264" cy="200" r="10" className="wireframe-draw" style={{ animationDelay: "1.9s" }} />
                  <line x1="20" y1="220" x2="92" y2="220" className="wireframe-draw" style={{ animationDelay: "2.0s" }} />
                  <line x1="124" y1="220" x2="196" y2="220" className="wireframe-draw" style={{ animationDelay: "2.0s" }} />
                  <line x1="228" y1="220" x2="300" y2="220" className="wireframe-draw" style={{ animationDelay: "2.0s" }} />
                  <line x1="20" y1="232" x2="80" y2="232" className="wireframe-draw" style={{ animationDelay: "2.1s" }} />
                  <line x1="124" y1="232" x2="184" y2="232" className="wireframe-draw" style={{ animationDelay: "2.1s" }} />
                  <line x1="228" y1="232" x2="288" y2="232" className="wireframe-draw" style={{ animationDelay: "2.1s" }} />
                  {/* Footer */}
                  <rect x="10" y="270" width="300" height="60" className="wireframe-draw" style={{ animationDelay: "2.3s" }} />
                  <line x1="30" y1="290" x2="120" y2="290" className="wireframe-draw" style={{ animationDelay: "2.5s" }} />
                  <line x1="30" y1="305" x2="100" y2="305" className="wireframe-draw" style={{ animationDelay: "2.5s" }} />
                  <line x1="30" y1="320" x2="110" y2="320" className="wireframe-draw" style={{ animationDelay: "2.5s" }} />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes wireframe-fade-in {
          from { opacity: 0; transform: scale(0.97); }
          to { opacity: 1; transform: scale(1); }
        }
        .wireframe-draw {
          opacity: 0;
          transform-origin: center;
          animation: wireframe-fade-in 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
      `}</style>
    </section>
  );
}
