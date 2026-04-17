"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MobileCloudHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => setIsVisible(true), []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-background">
      {/* Cloud/dots background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
        <svg viewBox="0 0 1200 800" className="w-full h-full">
          {Array.from({ length: 60 }).map((_, i) => (
            <circle
              key={i}
              cx={(i * 73) % 1200}
              cy={(i * 113) % 800}
              r={2 + (i % 3)}
              fill="currentColor"
            />
          ))}
        </svg>
      </div>

      {/* Diagonal stripes */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 30px, currentColor 30px, currentColor 31px)`,
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
          <span className="text-xs font-mono text-muted-foreground">04 — MOBILE & CLOUD</span>
          <span className="text-foreground/20">/</span>
          <span className="text-xs font-mono text-muted-foreground">iOS · Android · Web</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <h1
              className={`text-[clamp(2.5rem,7vw,5.5rem)] font-display leading-[0.95] tracking-tight transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <span className="block">Apps that ship,</span>
              <span className="block">
                <span className="relative inline-block">
                  cloud that scales.
                  <span className="absolute -bottom-2 left-0 right-0 h-3 bg-foreground/10" />
                </span>
              </span>
            </h1>

            <p
              className={`mt-10 text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <span className="text-foreground font-medium">React Native</span> &{" "}
              <span className="text-foreground font-medium">Flutter</span> for mobile,{" "}
              <span className="text-foreground font-medium">cloud-native microservices</span> on
              AWS, GCP, and Azure. From offline-first PWAs to global SaaS platforms.
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
                  Build your app
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

          {/* Right: floating device stack */}
          <div
            className={`lg:col-span-5 flex justify-center items-center transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="relative w-full max-w-md h-[440px]">
              {/* Laptop (back) */}
              <div className="absolute left-0 top-12 w-80 device-float-1">
                <div className="border-2 border-foreground rounded-t-lg bg-background">
                  <div className="h-6 border-b border-foreground/20 flex items-center px-2 gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-foreground/30" />
                    <div className="w-1.5 h-1.5 rounded-full bg-foreground/30" />
                    <div className="w-1.5 h-1.5 rounded-full bg-foreground/30" />
                  </div>
                  <div className="p-3 h-44 space-y-2">
                    <div className="h-2 bg-foreground/20 rounded w-3/4" />
                    <div className="h-2 bg-foreground/10 rounded w-1/2" />
                    <div className="grid grid-cols-3 gap-2 mt-3">
                      <div className="h-12 bg-foreground/5 border border-foreground/10 rounded" />
                      <div className="h-12 bg-foreground/10 border border-foreground/10 rounded" />
                      <div className="h-12 bg-foreground/5 border border-foreground/10 rounded" />
                    </div>
                    <div className="h-2 bg-foreground/10 rounded w-2/3" />
                    <div className="h-2 bg-foreground/10 rounded w-1/3" />
                  </div>
                </div>
                <div className="h-1 bg-foreground rounded-b-md" />
              </div>

              {/* Tablet (middle) */}
              <div className="absolute right-12 top-0 w-44 device-float-2">
                <div className="border-2 border-foreground rounded-xl bg-background p-2">
                  <div className="border border-foreground/20 rounded-lg h-56 p-3 space-y-2">
                    <div className="h-2 bg-foreground/30 rounded w-1/2" />
                    <div className="h-2 bg-foreground/15 rounded w-2/3" />
                    <div className="h-16 border border-foreground/15 rounded flex items-center justify-center mt-2">
                      <div className="w-8 h-8 rounded-full border-2 border-foreground/30" />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="h-10 border border-foreground/10 rounded" />
                      <div className="h-10 border border-foreground/10 rounded" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone (front) */}
              <div className="absolute right-0 bottom-0 w-32 device-float-3">
                <div className="border-2 border-foreground rounded-2xl bg-background p-1.5">
                  <div className="border border-foreground/20 rounded-xl h-56 p-2 space-y-1.5">
                    <div className="flex justify-between items-center">
                      <div className="h-1.5 w-6 bg-foreground/30 rounded" />
                      <div className="h-1.5 w-3 bg-foreground/30 rounded" />
                    </div>
                    <div className="h-12 bg-foreground/10 border border-foreground/10 rounded mt-2" />
                    <div className="space-y-1 mt-2">
                      <div className="h-1.5 bg-foreground/20 rounded" />
                      <div className="h-1.5 bg-foreground/15 rounded w-3/4" />
                      <div className="h-1.5 bg-foreground/15 rounded w-1/2" />
                    </div>
                    <div className="h-8 bg-foreground rounded mt-3 flex items-center justify-center">
                      <div className="h-1.5 w-8 bg-background rounded" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating cloud icon (top right) */}
              <div className="absolute top-0 right-0 device-float-4">
                <svg viewBox="0 0 60 60" className="w-12 h-12 text-foreground/40">
                  <path
                    d="M20 36 Q12 36 12 28 Q12 20 22 20 Q24 12 32 12 Q42 12 44 22 Q52 22 52 30 Q52 38 44 38 Z"
                    fill="currentColor"
                    fillOpacity="0.2"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float-1 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        @keyframes float-3 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        @keyframes float-4 {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-10px) translateX(4px); }
        }
        .device-float-1 { animation: float-1 5s ease-in-out infinite; }
        .device-float-2 { animation: float-2 6s ease-in-out infinite 0.5s; }
        .device-float-3 { animation: float-3 4s ease-in-out infinite 1s; }
        .device-float-4 { animation: float-4 7s ease-in-out infinite; }
      `}</style>
    </section>
  );
}
