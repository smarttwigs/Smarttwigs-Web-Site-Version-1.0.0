"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CompetenceNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed z-50 transition-all duration-500 ${
        isScrolled ? "top-4 left-4 right-4" : "top-0 left-0 right-0"
      }`}
    >
      <nav
        className={`mx-auto transition-all duration-500 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-xl border border-foreground/10 rounded-2xl shadow-lg max-w-[1200px]"
            : "bg-transparent max-w-[1400px]"
        }`}
      >
        <div
          className={`flex items-center justify-between transition-all duration-500 px-6 lg:px-8 ${
            isScrolled ? "h-14" : "h-20"
          }`}
        >
          <Link href="/" className="flex items-center gap-2 group">
            {mounted ? (
              <img
                src="/logo.png"
                alt="Smart Twigs"
                className={`transition-all duration-500 ${isScrolled ? "h-8" : "h-10"}`}
              />
            ) : (
              <span className="font-display text-xl tracking-tight">Smart Twigs</span>
            )}
          </Link>

          <div className="hidden md:flex items-center gap-12">
            <Link
              href="/"
              className="text-sm text-foreground/70 hover:text-foreground transition-colors duration-300 inline-flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to home
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://calendly.com/smarttwigs/30min" target="_blank" rel="noopener noreferrer">
              <Button
                size="sm"
                className={`bg-foreground hover:bg-foreground/90 text-background rounded-full transition-all duration-500 ${
                  isScrolled ? "px-4 h-8 text-xs" : "px-6"
                }`}
              >
                Talk to an expert
              </Button>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
