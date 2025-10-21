<script lang="ts">
  import PageLayout from "$lib/components/PageLayout.svelte";
  import PageHero from "$lib/components/PageHero.svelte";
  import PageSection from "$lib/components/PageSection.svelte";
  import FeatureGrid from "$lib/components/FeatureGrid.svelte";
  import ProcessSteps from "$lib/components/ProcessSteps.svelte";
  import PageCTA from "$lib/components/PageCTA.svelte";
  import { customDevelopmentSchema } from "./structured-data";
  import { createResponsiveImage } from "$lib/utils/responsive-image";

  const features = [
    {
      title: "Internal Application Development",
      description:
        "Custom software solutions that streamline your internal processes and boost productivity.",
      icon: "code",
    },
    {
      title: "Customer-Facing Websites",
      description:
        "Modern, responsive websites that engage your customers and drive business growth.",
      icon: "globe",
    },
    {
      title: "API Design & Implementation",
      description:
        "Robust APIs that enable seamless integration between your systems and third-party services.",
      icon: "puzzle",
    },
    {
      title: "Analytics & Tracking Systems",
      description:
        "Data-driven solutions that provide actionable insights into your business operations.",
      icon: "chart",
    },
    {
      title: "Database Management",
      description:
        "Efficient database solutions that ensure your data is secure, organized, and easily accessible.",
      icon: "server",
    },
    {
      title: "System Integration",
      description:
        "Seamless integration of different systems and applications to create a unified workflow.",
      icon: "paperAirplane",
    },
  ];

  const processSteps = [
    {
      title: "Discovery",
      description:
        "We start by understanding your business needs, current systems, and goals.",
    },
    {
      title: "Planning",
      description:
        "Our team creates a detailed development plan with timelines and milestones.",
    },
    {
      title: "Development",
      description:
        "We build your solution using modern technologies and best practices.",
    },
    {
      title: "Testing",
      description: "Rigorous testing ensures your solution works flawlessly.",
    },
    {
      title: "Deployment",
      description: "We carefully implement your solution and provide training.",
    },
    {
      title: "Support",
      description:
        "Ongoing support and maintenance keep your solution running smoothly.",
    },
  ];

  const heroData = {
    title: "Custom Development & Integrations",
    description:
      "Transform your business with tailored software solutions that perfectly match your needs. Our expert team creates custom applications, integrations, and digital solutions that drive efficiency and growth.",
    primaryCTA: {
      text: "Start Your Project",
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
        src: "custom-development-mobile.avif",
        width: 640,
        height: 427,
      },
      tablet: {
        src: "custom-development-tablet.avif",
        width: 1024,
        height: 684,
      },
      desktop: {
        src: "custom-devlopment.avif",
        width: 1920,
        height: 1282,
      },
      alt: "Custom Development illustration",
    },
  };

  const ctaData = {
    title: "Ready to transform your business?",
    description:
      "Let's discuss how our custom development solutions can help you achieve your business goals.",
    primaryCTA: {
      text: "Contact Us Today",
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
  <title>Custom Development & Integrations | CSDS</title>
  <meta
    name="description"
    content="Transform your business with custom software solutions, web applications, and system integrations tailored to your unique needs."
  />
  {@html `<script type="application/ld+json">${JSON.stringify(customDevelopmentSchema)}<\/script>`}
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
    title="Everything you need for digital transformation"
    description="Our custom development services cover every aspect of your digital needs, from internal tools to customer-facing applications."
    variant="gray"
    size="lg"
  >
    <FeatureGrid {features} columns={3} variant="default" />
  </PageSection>

  <!-- Process Section -->
  <PageSection
    title="How we bring your ideas to life"
    description="Our proven development process ensures your project is delivered on time, within budget, and exceeds expectations."
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
