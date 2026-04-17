"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const orbitNodes = [
  { name: "Stripe", angle: 0 },
  { name: "Salesforce", angle: 45 },
  { name: "Square", angle: 90 },
  { name: "Oracle", angle: 135 },
  { name: "Zapier", angle: 180 },
  { name: "n8n", angle: 225 },
  { name: "Reltio", angle: 270 },
  { name: "Stibo", angle: 315 },
];

export function IntegrationsHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => setIsVisible(true), []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-background">
      {/* Concentric circles background */}
      <div className="absolute inset-0 flex items-center justify-end opacity-[0.04] pointer-events-none">
        <svg viewBox="0 0 800 800" className="w-[800px] h-[800px] -mr-40">
          {[100, 200, 300, 350, 400].map((r) => (
            <circle key={r} cx="400" cy="400" r={r} fill="none" stroke="currentColor" strokeWidth="2" />
          ))}
        </svg>
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
          <span className="text-xs font-mono text-muted-foreground">03 — INTEGRATIONS</span>
          <span className="text-foreground/20">/</span>
          <span className="text-xs font-mono text-muted-foreground">200+ connectors</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <h1
              className={`text-[clamp(2.5rem,7vw,5.5rem)] font-display leading-[0.95] tracking-tight transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <span className="block">Every system,</span>
              <span className="block">
                <span className="relative inline-block">
                  one source of truth.
                  <span className="absolute -bottom-2 left-0 right-0 h-3 bg-foreground/10" />
                </span>
              </span>
            </h1>

            <p
              className={`mt-10 text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              We connect <span className="text-foreground font-medium">payment rails</span>,{" "}
              <span className="text-foreground font-medium">CRMs</span>,{" "}
              <span className="text-foreground font-medium">ERPs</span>, and{" "}
              <span className="text-foreground font-medium">orchestration platforms</span> into
              workflows that just work — and never leak data.
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
                Plan your integration
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

          {/* Right: orbital diagram */}
          <div
            className={`lg:col-span-5 flex justify-center items-center transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          >
            <div className="relative w-[420px] h-[420px] max-w-full">
              {/* Rotating orbit (slow) */}
              <div className="absolute inset-0 animate-spin-slow">
                {orbitNodes.map((node) => {
                  const rad = (node.angle * Math.PI) / 180;
                  const radius = 170;
                  const x = Math.cos(rad) * radius;
                  const y = Math.sin(rad) * radius;
                  return (
                    <div
                      key={node.name}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                      style={{ transform: `translate(${x}px, ${y}px) translate(-50%, -50%)` }}
                    >
                      <div className="counter-spin">
                        <div className="px-3 py-1.5 border border-foreground/20 bg-background text-xs font-mono whitespace-nowrap">
                          {node.name}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Static SVG: orbit ring + connection lines */}
              <svg viewBox="-220 -220 440 440" className="absolute inset-0 w-full h-full">
                <circle cx="0" cy="0" r="170" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" opacity="0.3" />
                <circle cx="0" cy="0" r="100" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.15" />
                {/* Connection rays from center */}
                {orbitNodes.map((node) => {
                  const rad = (node.angle * Math.PI) / 180;
                  const x = Math.cos(rad) * 170;
                  const y = Math.sin(rad) * 170;
                  return (
                    <line
                      key={node.name}
                      x1="0"
                      y1="0"
                      x2={x}
                      y2={y}
                      stroke="currentColor"
                      strokeWidth="0.5"
                      opacity="0.15"
                      strokeDasharray="3 4"
                    />
                  );
                })}
              </svg>

              {/* Center hub */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-foreground/10 animate-ping" />
                  <div className="relative w-24 h-24 rounded-full border-2 border-foreground bg-background flex items-center justify-center">
                    <span className="font-display text-sm tracking-tight text-center leading-tight">
                      smart
                      <br />
                      twigs
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes counter-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 40s linear infinite;
        }
        .counter-spin {
          animation: counter-spin 40s linear infinite;
        }
      `}</style>
    </section>
  );
}
