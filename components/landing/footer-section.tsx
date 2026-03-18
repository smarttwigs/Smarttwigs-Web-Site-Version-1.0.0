"use client";

import { ArrowUpRight } from "lucide-react";
import { AnimatedWave } from "./animated-wave";

const footerLinks = {
  Services: [
    { name: "AI Ops", href: "#aiops" },
    { name: "Product Development", href: "#features" },
    { name: "Data & Analytics Platform", href: "#features" },
    { name: "Digital Transformation", href: "#features" },
    { name: "Recruiting", href: "#features" },
  ],
  Delivery: [
    { name: "OnShore US", href: "#delivery" },
    { name: "NearShore LATAM", href: "#delivery" },
    { name: "OffShore Europe/Asia", href: "#delivery" },
    { name: "Dedicated Pods", href: "#delivery" },
    { name: "Staff Augmentation", href: "#delivery" },
  ],
  Compliance: [
    { name: "Security Overview", href: "#compliance" },
    { name: "Compliance Deliverables", href: "#compliance" },
    { name: "Vendor Onboarding", href: "#pricing" },
    { name: "Architecture Reviews", href: "#pricing" },
  ],
  Company: [
    { name: "About Us", href: "#" },
    { name: "Contact", href: "#pricing" },
    { name: "Careers", href: "#", badge: "Hiring" },
  ],
};

const socialLinks = [
  { name: "Twitter", href: "#" },
  { name: "LinkedIn", href: "#" },
];

export function FooterSection() {
  return (
    <footer className="relative border-t border-foreground/10">
      {/* Animated wave background */}
      <div className="absolute inset-0 h-64 opacity-20 pointer-events-none overflow-hidden">
        <AnimatedWave />
      </div>
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Main Footer */}
        <div className="py-16 lg:py-24">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-12 lg:gap-8">
            {/* Brand Column */}
            <div className="col-span-2">
              <a href="#" className="inline-block mb-6">
                <img src="/logo.png" alt="Smart Twigs" className="h-12" />
              </a>

              <p className="text-muted-foreground leading-relaxed mb-6 max-w-xs">
                Enterprise AI & Data Platform Engineering. Global delivery with enterprise controls.
              </p>
              <p className="text-sm text-muted-foreground mb-8 max-w-xs border-l-2 border-foreground/20 pl-4">
                We support vendor onboarding, security reviews, and compliance documentation — delivered by our global experts.
              </p>

              {/* Social Links */}
              <div className="flex gap-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                ))}
              </div>
            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-sm font-medium mb-6">{title}</h3>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
                      >
                        {link.name}
                        {"badge" in link && link.badge && (
                          <span className="text-xs px-2 py-0.5 bg-foreground text-background rounded-full">
                            {link.badge}
                          </span>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            2025 Smart Twigs Consultancy Group. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
