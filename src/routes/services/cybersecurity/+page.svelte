<script lang="ts">
  import PageLayout from "$lib/components/PageLayout.svelte";
  import PageHero from "$lib/components/PageHero.svelte";
  import PageSection from "$lib/components/PageSection.svelte";
  import FeatureGrid from "$lib/components/FeatureGrid.svelte";
  import ProcessSteps from "$lib/components/ProcessSteps.svelte";
  import PageCTA from "$lib/components/PageCTA.svelte";
  import { cybersecuritySchema } from "./structured-data";

  const features = [
    {
      title: "Security Assessments",
      description:
        "Comprehensive security audits to identify vulnerabilities and strengthen your defenses against cyber threats.",
      icon: "magnifyingGlass",
    },
    {
      title: "Endpoint Protection",
      description:
        "Advanced endpoint security solutions that protect all your devices from malware, ransomware, and other threats.",
      icon: "computerDesktop",
    },
    {
      title: "Email Security",
      description:
        "Robust email filtering and protection to prevent phishing attacks, spam, and malicious attachments.",
      icon: "envelope",
    },
    {
      title: "Firewall Management",
      description:
        "Professional firewall configuration and management to control network access and prevent unauthorized intrusions.",
      icon: "shield",
    },
    {
      title: "Employee Training",
      description:
        "Security awareness training to educate your team about cyber threats and best practices for staying safe online.",
      icon: "academicCap",
    },
    {
      title: "Incident Response",
      description:
        "Rapid response and recovery services to minimize damage and restore operations after a security incident.",
      icon: "exclamationTriangle",
    },
  ];

  const processSteps = [
    {
      title: "Risk Assessment",
      description:
        "We conduct a thorough evaluation of your current security posture and identify potential vulnerabilities.",
    },
    {
      title: "Security Strategy",
      description:
        "Develop a comprehensive cybersecurity strategy tailored to your business needs and risk profile.",
    },
    {
      title: "Implementation",
      description:
        "Deploy security solutions and configure systems to provide maximum protection against threats.",
    },
    {
      title: "Monitoring",
      description:
        "Continuous monitoring of your systems for suspicious activity and potential threats.",
    },
    {
      title: "Training",
      description:
        "Educate your team about cybersecurity best practices and how to recognize potential threats.",
    },
    {
      title: "Response & Recovery",
      description:
        "Rapid incident response and recovery procedures to minimize impact and restore operations.",
    },
  ];

  const heroData = {
    title: "Cybersecurity & Threat Protection",
    description:
      "Protect your business from cyber threats with our comprehensive security solutions. From endpoint protection to employee training, we provide the defense your organization needs in today's digital landscape.",
    primaryCTA: {
      text: "Secure My Business",
      href: "/contact",
      variant: "primary" as const,
    },
    secondaryCTA: {
      text: "Learn More",
      href: "#features",
      variant: "secondary" as const,
    },
    image: {
      mobile: {
        src: "cybersecurity-mobile.avif",
        width: 640,
        height: 427,
      },
      tablet: {
        src: "cybersecurity-tablet.avif",
        width: 1024,
        height: 684,
      },
      desktop: {
        src: "cybersecurity.avif",
        width: 1920,
        height: 1282,
      },
      alt: "Cybersecurity and threat protection illustration",
    },
  };

  const ctaData = {
    title: "Ready to strengthen your security?",
    description:
      "Don't wait for a cyber attack to happen. Protect your business with our comprehensive cybersecurity solutions.",
    primaryCTA: {
      text: "Get Protected Now",
      href: "/contact",
      variant: "primary" as const,
    },
    secondaryCTA: {
      text: "View All Services",
      href: "/services",
      variant: "secondary" as const,
    },
  };
</script>

<svelte:head>
  <title>Cybersecurity & Threat Protection | CSDS</title>
  <meta
    name="description"
    content="Comprehensive cybersecurity solutions to protect your business. Security assessments, endpoint protection, email security, and incident response services."
  />
  {@html `<script type="application/ld+json">${JSON.stringify(cybersecuritySchema)}<\/script>`}
</svelte:head>

<PageLayout>
  <!-- Hero Section -->
  <PageHero
    title={heroData.title}
    description={heroData.description}
    primaryCTA={heroData.primaryCTA}
    secondaryCTA={heroData.secondaryCTA}
    image={heroData.image}
    variant="default"
  />

  <!-- Features Section -->
  <PageSection
    id="features"
    title="Complete cybersecurity protection"
    description="Our cybersecurity services provide comprehensive protection against modern threats, ensuring your business stays safe and secure."
    variant="gray"
    size="lg"
  >
    <FeatureGrid {features} columns={3} variant="default" />
  </PageSection>

  <!-- Process Section -->
  <PageSection
    title="Our systematic approach to cybersecurity"
    description="We follow a proven methodology to assess, implement, and maintain robust security measures that protect your business."
    variant="default"
    size="lg"
  >
    <ProcessSteps steps={processSteps} columns={2} variant="default" />
  </PageSection>

  <!-- CTA Section -->
  <PageCTA
    title={ctaData.title}
    description={ctaData.description}
    primaryCTA={ctaData.primaryCTA}
    secondaryCTA={ctaData.secondaryCTA}
    variant="footer"
  />
</PageLayout>
