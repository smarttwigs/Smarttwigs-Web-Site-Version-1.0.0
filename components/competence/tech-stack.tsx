"use client";

interface TechStackProps {
  label: string;
  heading: string;
  items: string[];
}

export function TechStack({ label, heading, items }: TechStackProps) {
  return (
    <section className="relative py-16 lg:py-24 border-t border-foreground/10 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-12">
        <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
          <span className="w-8 h-px bg-foreground/30" />
          {label}
        </span>
        <h2 className="text-4xl lg:text-6xl font-display tracking-tight">{heading}</h2>
      </div>

      <div className="w-full">
        <div className="flex gap-12 items-center marquee">
          {[...Array(2)].map((_, setIdx) => (
            <div key={setIdx} className="flex gap-12 items-center shrink-0">
              {items.map((item) => (
                <span
                  key={`${setIdx}-${item}`}
                  className="font-display text-2xl md:text-3xl text-foreground/30 whitespace-nowrap hover:text-foreground transition-colors duration-300"
                >
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
