"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

// Talent hub coordinates (rough lat/long mapped to SVG percent)
const hubs = [
  { x: 22, y: 38, label: "USA", count: "Ex-FAANG" },
  { x: 26, y: 56, label: "LATAM", count: "Near-shore" },
  { x: 52, y: 32, label: "EU", count: "Off-shore" },
  { x: 56, y: 42, label: "ME", count: "Off-shore" },
  { x: 70, y: 45, label: "ASIA", count: "Off-shore" },
];

export function RecruitingHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => setIsVisible(true), []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-background">
      {/* Background dot grid world map */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.07] pointer-events-none">
        <div className="w-full h-full max-w-[1600px]">
          <svg viewBox="0 0 800 400" className="w-full h-full">
            {Array.from({ length: 40 }).map((_, row) =>
              Array.from({ length: 80 }).map((_, col) => {
                // Rough continent shape via sin/cos noise
                const x = col * 10;
                const y = row * 10;
                const inLand =
                  (col > 14 && col < 30 && row > 8 && row < 24) || // Americas
                  (col > 37 && col < 60 && row > 6 && row < 26) || // Europe + Africa
                  (col > 58 && col < 78 && row > 8 && row < 22); // Asia
                if (!inLand) return null;
                return <circle key={`${row}-${col}`} cx={x} cy={y} r="1.5" fill="currentColor" />;
              })
            )}
          </svg>
        </div>
      </div>

      {/* Subtle grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 pt-32 lg:pt-40 pb-24 lg:pb-32 w-full">
        {/* Top metadata */}
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
          <span className="text-xs font-mono text-muted-foreground">01 — RECRUITING</span>
          <span className="text-foreground/20">/</span>
          <span className="text-xs font-mono text-muted-foreground">90+ teams placed</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: headline */}
          <div className="lg:col-span-7">
            <h1
              className={`text-[clamp(2.5rem,7vw,5.5rem)] font-display leading-[0.95] tracking-tight transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <span className="block">Elite engineers,</span>
              <span className="block">
                <span className="relative inline-block">
                  embedded everywhere.
                  <span className="absolute -bottom-2 left-0 right-0 h-3 bg-foreground/10" />
                </span>
              </span>
            </h1>

            <p
              className={`mt-10 text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <span className="text-foreground font-medium">90+ teams placed</span> across Fortune
              1000/500/100 organizations. Ex-FAANG engineers from the US, near-shore from{" "}
              <span className="text-foreground font-medium">LATAM</span>, off-shore from{" "}
              <span className="text-foreground font-medium">Europe</span>,{" "}
              <span className="text-foreground font-medium">Middle East</span> &{" "}
              <span className="text-foreground font-medium">Asia</span>.
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
                Hire your team
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

          {/* Right: animated map with hubs */}
          <div
            className={`lg:col-span-5 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="border border-foreground/20 bg-background/80 backdrop-blur-sm">
              <div className="px-4 py-3 border-b border-foreground/10 flex items-center justify-between">
                <span className="text-xs font-mono text-muted-foreground">GLOBAL.TALENT.MAP</span>
                <span className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  live
                </span>
              </div>
              <div className="relative aspect-[5/3]">
                <svg viewBox="0 0 100 60" className="absolute inset-0 w-full h-full">
                  {/* Continent dots */}
                  {Array.from({ length: 30 }).map((_, row) =>
                    Array.from({ length: 50 }).map((_, col) => {
                      const x = col * 2;
                      const y = row * 2;
                      const inLand =
                        (col > 8 && col < 18 && row > 6 && row < 18) ||
                        (col > 23 && col < 38 && row > 4 && row < 18) ||
                        (col > 36 && col < 48 && row > 6 && row < 16);
                      if (!inLand) return null;
                      return (
                        <circle
                          key={`${row}-${col}`}
                          cx={x}
                          cy={y}
                          r="0.4"
                          fill="currentColor"
                          opacity="0.25"
                        />
                      );
                    })
                  )}
                  {/* Connection lines from hubs */}
                  {hubs.map((hub, i) =>
                    hubs.slice(i + 1).map((other, j) => (
                      <line
                        key={`${i}-${j}`}
                        x1={hub.x}
                        y1={hub.y}
                        x2={other.x}
                        y2={other.y}
                        stroke="currentColor"
                        strokeWidth="0.15"
                        opacity="0.2"
                        strokeDasharray="0.5 0.5"
                      />
                    ))
                  )}
                  {/* Hub pulses */}
                  {hubs.map((hub, i) => (
                    <g key={hub.label}>
                      <circle cx={hub.x} cy={hub.y} r="1" fill="currentColor" opacity="0">
                        <animate
                          attributeName="r"
                          values="1;4;1"
                          dur="3s"
                          begin={`${i * 0.4}s`}
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="opacity"
                          values="0.6;0;0.6"
                          dur="3s"
                          begin={`${i * 0.4}s`}
                          repeatCount="indefinite"
                        />
                      </circle>
                      <circle cx={hub.x} cy={hub.y} r="1" fill="currentColor" />
                      <text
                        x={hub.x + 2}
                        y={hub.y - 1}
                        fontSize="2"
                        fontFamily="monospace"
                        fill="currentColor"
                      >
                        {hub.label}
                      </text>
                    </g>
                  ))}
                </svg>
              </div>
              <div className="px-4 py-2 border-t border-foreground/10 grid grid-cols-3 text-xs font-mono text-muted-foreground">
                <span>5 regions</span>
                <span className="text-center">15+ countries</span>
                <span className="text-right">90+ teams</span>
              </div>
            </div>

            {/* Region badges */}
            <div className="mt-6 flex flex-wrap gap-2">
              {hubs.map((h) => (
                <span
                  key={h.label}
                  className="px-3 py-1.5 text-xs font-mono border border-foreground/20 rounded-full"
                >
                  {h.label} · {h.count}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
