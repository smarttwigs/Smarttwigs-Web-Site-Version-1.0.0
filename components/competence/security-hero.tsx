"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedMatrixRain } from "./animated-matrix-rain";

const scanLines = [
  { type: "info", text: "[●] starting security scan..." },
  { type: "ok", text: "[✓] dependency vulnerabilities: 0 critical" },
  { type: "ok", text: "[✓] secrets scan: clean" },
  { type: "ok", text: "[✓] sast analysis: passed" },
  { type: "warn", text: "[!] outdated TLS cert: 21 days" },
  { type: "ok", text: "[✓] SOC 2 controls: 47/47" },
  { type: "ok", text: "[✓] HIPAA controls: 36/36" },
  { type: "info", text: "[●] system hardened" },
];

export function SecurityHero() {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => setIsVisible(true), []);

  useEffect(() => {
    if (visibleLines >= scanLines.length) return;
    const t = setTimeout(() => setVisibleLines((n) => n + 1), 350);
    return () => clearTimeout(t);
  }, [visibleLines]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-background">
      {/* Matrix rain */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <AnimatedMatrixRain />
      </div>

      {/* Vignette */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-background via-transparent to-background opacity-60" />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-background via-transparent to-background opacity-50" />

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
          <span className="text-xs font-mono text-muted-foreground">05 — SECURITY</span>
          <span className="text-foreground/20">/</span>
          <span className="text-xs font-mono text-muted-foreground">SOC2 · ISO27001 · HIPAA</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <h1
              className={`text-[clamp(2.5rem,7vw,5.5rem)] font-display leading-[0.95] tracking-tight transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <span className="block">Security that</span>
              <span className="block">
                <span className="relative inline-block">
                  doesn't slow you down.
                  <span className="absolute -bottom-2 left-0 right-0 h-3 bg-foreground/10" />
                </span>
              </span>
            </h1>

            <p
              className={`mt-10 text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              From <span className="text-foreground font-medium">penetration testing</span> to{" "}
              <span className="text-foreground font-medium">SOC 2 audits</span>, from{" "}
              <span className="text-foreground font-medium">threat modeling</span> to incident
              response — we keep you compliant without killing velocity.
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
                  Run a security audit
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

          {/* Right: terminal scan output */}
          <div
            className={`lg:col-span-5 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="border border-foreground/30 bg-background/90 backdrop-blur-sm">
              <div className="px-4 py-3 border-b border-foreground/10 flex items-center justify-between">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-foreground/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-foreground/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-foreground/20" />
                </div>
                <span className="text-xs font-mono text-muted-foreground">
                  smarttwigs@security:~/scan
                </span>
              </div>
              <div className="p-6 font-mono text-sm min-h-[300px]">
                {scanLines.slice(0, visibleLines).map((line, i) => (
                  <div key={i} className="leading-relaxed">
                    <span
                      className={
                        line.type === "warn"
                          ? "text-foreground"
                          : line.type === "ok"
                          ? "text-foreground"
                          : "text-muted-foreground"
                      }
                    >
                      {line.text}
                    </span>
                  </div>
                ))}
                {visibleLines < scanLines.length && (
                  <div className="flex gap-2 leading-relaxed">
                    <span className="inline-block w-2 h-4 bg-foreground/60 animate-pulse" />
                  </div>
                )}
              </div>
              <div className="px-4 py-2 border-t border-foreground/10 flex items-center justify-between text-xs font-mono text-muted-foreground">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  scanning
                </span>
                <span>checks: {visibleLines}/{scanLines.length}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
