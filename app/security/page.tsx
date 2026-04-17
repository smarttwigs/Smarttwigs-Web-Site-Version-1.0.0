import { CompetenceNav } from "@/components/competence/competence-nav";
import { SecurityHero } from "@/components/competence/security-hero";
import { CompetenceIntro } from "@/components/competence/competence-intro";
import { TechDeepDive } from "@/components/competence/tech-deep-dive";
import { UseCaseGrid } from "@/components/competence/use-case-grid";
import { TechStack } from "@/components/competence/tech-stack";
import { CompetenceCta } from "@/components/competence/competence-cta";
import { FooterSection } from "@/components/landing/footer-section";
import { PageTransition } from "@/components/competence/page-transition";
import {
  PenTestIcon,
  ComplianceIcon,
  ThreatModelIcon,
  IamIcon,
  IncidentIcon,
  TrainingIcon,
} from "@/components/competence/security-icons";

const valueProps = [
  {
    title: "Compliance-as-Code",
    description:
      "We automate compliance evidence collection so audits don't grind your team to a halt every six months.",
  },
  {
    title: "Shift-Left Security",
    description:
      "Security checks in the IDE, at PR time, and in CI — not as an afterthought right before launch.",
  },
  {
    title: "Real Pen Testers",
    description:
      "Certified ethical hackers who break things for a living. They find what scanners miss.",
  },
  {
    title: "Industry-Grade",
    description:
      "Experience from financial institutions and healthcare networks with billions of records under management.",
  },
];

const techTopics = [
  {
    number: "01",
    title: "Penetration Testing",
    icon: <PenTestIcon />,
    description:
      "Real-world attack simulations by certified ethical hackers. We find the holes before someone else does — and we fix them.",
    bullets: [
      "Web app & API penetration testing",
      "Network & infrastructure assessments",
      "Mobile app & API testing",
      "Cloud configuration audits",
      "Social engineering & phishing tests",
      "Red team & purple team exercises",
    ],
  },
  {
    number: "02",
    title: "Compliance & Audits",
    icon: <ComplianceIcon />,
    description:
      "SOC 2, ISO 27001, HIPAA, PCI-DSS, GDPR, CCPA — we've passed them all. Architecture-first, not checkbox-driven.",
    bullets: [
      "SOC 2 Type II readiness & audit",
      "ISO 27001 certification",
      "HIPAA & HITRUST controls",
      "PCI-DSS compliance",
      "GDPR / CCPA data protection",
      "Compliance scoring for data platforms",
    ],
  },
  {
    number: "03",
    title: "Threat Modeling",
    icon: <ThreatModelIcon />,
    description:
      "We map your attack surface before you ship. STRIDE, PASTA, attack trees — pick your framework, we'll bring the experts.",
    bullets: [
      "STRIDE & PASTA threat models",
      "Attack tree analysis",
      "Data flow diagrams & trust boundaries",
      "Architecture security reviews",
      "Risk prioritization & mitigation plans",
      "Continuous threat modeling in CI",
    ],
  },
  {
    number: "04",
    title: "Identity & Access Management",
    icon: <IamIcon />,
    description:
      "Zero trust, least privilege, just-in-time access. We architect IAM that scales without becoming a help desk nightmare.",
    bullets: [
      "Zero-trust architecture",
      "RBAC & ABAC policy design",
      "Just-in-time privileged access",
      "Federated identity & SSO",
      "Hardware key & passkey rollout",
      "Audit trails & access reviews",
    ],
  },
  {
    number: "05",
    title: "Incident Response",
    icon: <IncidentIcon />,
    description:
      "When something goes wrong (and it will), we're the team you want on the call. Detection, containment, eradication, recovery.",
    bullets: [
      "24/7 incident response on retainer",
      "Forensics & root cause analysis",
      "Containment & eradication playbooks",
      "Post-incident reports & remediation",
      "Tabletop exercises & drills",
      "Disaster recovery planning",
    ],
  },
  {
    number: "06",
    title: "Security Training",
    icon: <TrainingIcon />,
    description:
      "Your developers are your first line of defense. We train them to write secure code and spot social engineering before it lands.",
    bullets: [
      "Secure coding workshops (OWASP Top 10)",
      "Phishing simulation programs",
      "Security champions program",
      "Compliance training & sign-off",
      "Tabletop incident exercises",
      "Custom curriculum for your stack",
    ],
  },
];

const useCases = [
  "Penetration testing & vulnerability assessments",
  "Compliance scoring for data platforms",
  "SOC 2 & ISO 27001 audit preparation",
  "GDPR & HIPAA compliance architecture",
  "AI-assisted threat detection & zero-trust implementation",
  "Security incident response & forensics",
  "PCI-DSS readiness for fintech",
  "Healthcare data lake security architecture",
  "Multi-cloud IAM consolidation",
  "Supply chain security audits",
];

const techStackItems = [
  "Burp Suite",
  "Metasploit",
  "Nessus",
  "Nmap",
  "OWASP ZAP",
  "Snyk",
  "Trivy",
  "Vanta",
  "Drata",
  "Secureframe",
  "Auth0",
  "Okta",
  "Hashicorp Vault",
  "AWS GuardDuty",
  "CrowdStrike",
  "Datadog",
  "Splunk",
];

export default function SecurityPage() {
  return (
    <PageTransition>
    <main className="relative min-h-screen overflow-x-hidden noise-overlay">
      <CompetenceNav />
      <SecurityHero />
      <CompetenceIntro
        label="Why Smart Twigs"
        heading="Security as architecture."
        subheading="We bake security into the foundation, not bolt it on at the end. Compliance, threat modeling, and red teaming — all under one roof."
        valueProps={valueProps}
      />
      <TechDeepDive
        label="Security Capabilities"
        heading="The full security stack."
        subheading="From the first pen test to the final audit, we cover every layer of modern application and infrastructure security."
        topics={techTopics}
      />
      <UseCaseGrid label="Real Engagements" heading="What we've secured." useCases={useCases} />
      <TechStack label="Our Toolkit" heading="The security stack." items={techStackItems} />
      <CompetenceCta
        heading="Worried about your attack surface?"
        description="We'll run a 5-day security assessment and tell you exactly what an attacker would find — and how to fix it."
        primaryCta="Run a security audit"
      />
      <FooterSection />
    </main>
    </PageTransition>
  );
}
