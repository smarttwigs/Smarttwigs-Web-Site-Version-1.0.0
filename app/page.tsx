import { Navigation } from "@/components/landing/navigation";
import { HeroSection } from "@/components/landing/hero-section";
import { AIOpsSection } from "@/components/landing/aiops-section";
import { ComplianceSection } from "@/components/landing/compliance-section";
import { GlobalDeliverySection } from "@/components/landing/global-delivery-section";
import { FeaturesSection } from "@/components/landing/features-section";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { MetricsSection } from "@/components/landing/metrics-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { PricingSection } from "@/components/landing/pricing-section";
import { EngagementPackagesSection } from "@/components/landing/engagement-packages-section";
import { CtaSection } from "@/components/landing/cta-section";
import { FooterSection } from "@/components/landing/footer-section";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay">
      <Navigation />
      <HeroSection />
      {/* New sections under hero per requirements */}
      <AIOpsSection />
      <ComplianceSection />
      <GlobalDeliverySection />
      {/* Original sections continue below */}
      <FeaturesSection />
      <HowItWorksSection />
      <MetricsSection />
      <TestimonialsSection />
      <PricingSection />
      <EngagementPackagesSection />
      <CtaSection />
      <FooterSection />
    </main>
  );
}
