"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowUpRight } from "lucide-react";

const competenceItems = [
  { name: "Recruiting", href: "/recruiting" },
  { name: "Data Science & A.I.", href: "/ai" },
  { name: "System Integrations", href: "/integrations" },
  { name: "Mobile & Cloud", href: "/mobile-cloud" },
  { name: "Security", href: "/security" },
  { name: "Technical Management", href: "/technical-management" },
  { name: "Product Development", href: "/product-development" },
];

const navLinks = [
  { name: "Competence Areas", href: "#features", dropdown: true },
  { name: "Our Process", href: "#how-it-works", dropdown: false },
  { name: "Industries", href: "#developers", dropdown: false },
  { name: "Services", href: "#pricing", dropdown: false },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed z-50 transition-all duration-500 ${
        isScrolled 
          ? "top-4 left-4 right-4" 
          : "top-0 left-0 right-0"
      }`}
    >
      <nav 
        className={`mx-auto transition-all duration-500 ${
          isScrolled || isMobileMenuOpen
            ? "bg-background/80 backdrop-blur-xl border border-foreground/10 rounded-2xl shadow-lg max-w-[1200px]"
            : "bg-transparent max-w-[1400px]"
        }`}
      >
        <div 
          className={`flex items-center justify-between transition-all duration-500 px-6 lg:px-8 ${
            isScrolled ? "h-14" : "h-20"
          }`}
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            {mounted ? (
              <img 
                src="/logo.png" 
                alt="Smart Twigs" 
                className={`transition-all duration-500 ${isScrolled ? "h-8" : "h-10"}`}
              />
            ) : (
              <span className="font-display text-xl tracking-tight">Smart Twigs</span>
            )}
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.name} className="relative group/dropdown">
                  <a
                    href={link.href}
                    className="text-sm text-foreground/70 hover:text-foreground transition-colors duration-300 relative inline-flex items-center gap-1"
                  >
                    {link.name}
                    <svg className="w-3 h-3 transition-transform duration-300 group-hover/dropdown:rotate-180" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 5 L6 8 L9 5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all duration-300 group-hover/dropdown:w-full" />
                  </a>

                  {/* Dropdown */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 translate-y-2 pointer-events-none group-hover/dropdown:opacity-100 group-hover/dropdown:translate-y-0 group-hover/dropdown:pointer-events-auto transition-all duration-300">
                    <div className="bg-background/95 backdrop-blur-xl border border-foreground/10 rounded-xl shadow-xl p-2 min-w-[240px]">
                      {competenceItems.map((item, i) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="flex items-center justify-between px-4 py-2.5 text-sm text-foreground/70 hover:text-foreground hover:bg-foreground/5 rounded-lg transition-all duration-200 group/item"
                          style={{ animationDelay: `${i * 30}ms` }}
                        >
                          <span>{item.name}</span>
                          <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-foreground/70 hover:text-foreground transition-colors duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full" />
                </a>
              )
            )}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a href="https://calendly.com/smarttwigs/30min" target="_blank" rel="noopener noreferrer">
              <Button
                size="sm"
                className={`bg-foreground hover:bg-foreground/90 text-background rounded-full transition-all duration-500 ${isScrolled ? "px-4 h-8 text-xs" : "px-6"}`}
              >
                Get in touch
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

      </nav>
      
      {/* Mobile Menu - Full Screen Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-background z-40 transition-all duration-500 ${
          isMobileMenuOpen 
            ? "opacity-100 pointer-events-auto" 
            : "opacity-0 pointer-events-none"
        }`}
        style={{ top: 0 }}
      >
        <div className="flex flex-col h-full px-8 pt-28 pb-8">
          {/* Navigation Links */}
          <div className="flex-1 flex flex-col justify-center gap-8">
            {navLinks.map((link, i) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-5xl font-display text-foreground hover:text-muted-foreground transition-all duration-500 ${
                  isMobileMenuOpen 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: isMobileMenuOpen ? `${i * 75}ms` : "0ms" }}
              >
                {link.name}
              </a>
            ))}
          </div>
          
          {/* Bottom CTAs */}
          <div className={`flex gap-4 pt-8 border-t border-foreground/10 transition-all duration-500 ${
            isMobileMenuOpen 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: isMobileMenuOpen ? "300ms" : "0ms" }}
          >
            <a href="https://calendly.com/smarttwigs/30min" target="_blank" rel="noopener noreferrer" className="flex-1">
              <Button
                className="w-full bg-foreground text-background rounded-full h-14 text-base"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get in touch
              </Button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
