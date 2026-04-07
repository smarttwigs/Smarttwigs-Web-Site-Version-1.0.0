"use client";

import { useState, useEffect, useRef } from "react";
import { Copy, Check } from "lucide-react";

const industries = [
  {
    label: "IT",
    code: `// Information Technology
smarttwigs.solution({
  area: 'enterprise-systems',
  services: [
    'software-development',
    'cloud-migration',
    'ai-copilot-workflows',
    'system-integration'
  ]
})`,
  },
  {
    label: "Finance",
    code: `// Financial Services
smarttwigs.solution({
  area: 'fintech',
  services: [
    'risk-analytics',
    'ai-fraud-detection',
    'trading-systems',
    'compliance-automation'
  ]
})`,
  },
  {
    label: "Healthcare",
    code: `// Healthcare & Life Sciences
smarttwigs.solution({
  area: 'healthtech',
  services: [
    'data-analytics',
    'ai-clinical-insights',
    'patient-systems',
    'research-platforms'
  ]
})`,
  },
  {
    label: "Retail",
    code: `// Retail & E-commerce
smarttwigs.solution({
  area: 'retail-tech',
  services: [
    'inventory-systems',
    'ai-recommendation-engine',
    'customer-analytics',
    'digital-commerce'
  ]
})`,
  },
  {
    label: "Media",
    code: `// Media & Entertainment
smarttwigs.solution({
  area: 'media-tech',
  services: [
    'streaming-platforms',
    'ai-content-personalization',
    'content-management',
    'audience-analytics'
  ]
})`,
  },
  {
    label: "Education",
    code: `// Education & EdTech
smarttwigs.solution({
  area: 'edtech',
  services: [
    'learning-platforms',
    'ai-adaptive-learning',
    'student-analytics',
    'curriculum-systems'
  ]
})`,
  },
  {
    label: "E-commerce",
    code: `// E-commerce & Marketplace
smarttwigs.solution({
  area: 'commerce-platform',
  services: [
    'marketplace-build',
    'ai-propensity-scoring',
    'payment-integration',
    'fulfillment-systems'
  ]
})`,
  },
  {
    label: "Manufacturing",
    code: `// Manufacturing & Industrial
smarttwigs.solution({
  area: 'industry-4.0',
  services: [
    'process-automation',
    'ai-predictive-maintenance',
    'supply-chain-analytics',
    'quality-systems'
  ]
})`,
  },
  {
    label: "NGOs",
    code: `// Non-Profit & NGOs
smarttwigs.solution({
  area: 'social-impact',
  services: [
    'ai-donor-insights',
    'impact-analytics',
    'donor-platforms',
    'program-management'
  ]
})`,
  },
];

const features = [
  { 
    title: "Product Development", 
    description: "Manage and oversee development from concept to post-production."
  },
  { 
    title: "Technical Management", 
    description: "Integrate broad communication strategies into corporate processes."
  },
  { 
    title: "Retail Optimization", 
    description: "Drive efficiency and maximize ROI across retail operations."
  },
  { 
    title: "Marketing & Ads", 
    description: "Leverage data-driven insights for targeted marketing campaigns."
  },
];

const codeAnimationStyles = `
  .dev-code-line {
    opacity: 0;
    transform: translateX(-8px);
    animation: devLineReveal 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  }
  
  @keyframes devLineReveal {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  .dev-code-char {
    opacity: 0;
    filter: blur(8px);
    animation: devCharReveal 0.3s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  }
  
  @keyframes devCharReveal {
    to {
      opacity: 1;
      filter: blur(0);
    }
  }
`;

export function DevelopersSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const handleCopy = () => {
    navigator.clipboard.writeText(industries[activeTab].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="developers" ref={sectionRef} className="relative py-16 lg:py-24 overflow-hidden">
      <style dangerouslySetInnerHTML={{ __html: codeAnimationStyles }} />
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-foreground/30" />
              Industry Expertise
            </span>
            <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-8">
              Your industry.
              <br />
              <span className="text-muted-foreground">Our expertise.</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              We offer extensive knowledge in different business areas. 
              Our specialists develop concepts and solutions based on cutting-edge technology.
            </p>
            
            {/* Features */}
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${index * 50 + 200}ms` }}
                >
                  <h3 className="font-medium mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right: Code block */}
          <div
            className={`lg:sticky lg:top-32 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="border border-foreground/10">
              {/* Tabs */}
              <div className="flex items-center border-b border-foreground/10 overflow-x-auto scrollbar-hide">
                {industries.map((example, idx) => (
                  <button
                    key={example.label}
                    type="button"
                    onClick={() => setActiveTab(idx)}
                    className={`px-6 py-4 text-sm font-mono transition-colors relative ${
                      activeTab === idx
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {example.label}
                    {activeTab === idx && (
                      <span className="absolute bottom-0 left-0 right-0 h-px bg-foreground" />
                    )}
                  </button>
                ))}
                <div className="flex-1" />
                <button
                  type="button"
                  onClick={handleCopy}
                  className="px-4 py-4 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Copy code"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-green-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
              
              {/* Code content */}
              <div className="p-8 font-mono text-sm bg-foreground/[0.01] min-h-[220px]">
                <pre className="text-foreground/80">
                  {industries[activeTab].code.split('\n').map((line, lineIndex) => (
                    <div 
                      key={`${activeTab}-${lineIndex}`} 
                      className="leading-loose dev-code-line"
                      style={{ animationDelay: `${lineIndex * 80}ms` }}
                    >
                      <span className="inline-flex">
                        {line.split('').map((char, charIndex) => (
                          <span
                            key={`${activeTab}-${lineIndex}-${charIndex}`}
                            className="dev-code-char"
                            style={{
                              animationDelay: `${lineIndex * 80 + charIndex * 15}ms`,
                            }}
                          >
                            {char === ' ' ? '\u00A0' : char}
                          </span>
                        ))}
                      </span>
                    </div>
                  ))}
                </pre>
              </div>
            </div>
            
            {/* Links */}
            <div className="mt-6 flex items-center gap-6 text-sm">
              <a href="#" className="text-foreground hover:underline underline-offset-4">
                Learn more
              </a>
              <span className="text-foreground/20">|</span>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                View case studies
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
