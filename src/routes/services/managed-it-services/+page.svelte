<script lang="ts">
  import PageLayout from "$lib/components/PageLayout.svelte";
  import PageHero from "$lib/components/PageHero.svelte";
  import PageSection from "$lib/components/PageSection.svelte";
  import FeatureGrid from "$lib/components/FeatureGrid.svelte";
  import ProcessSteps from "$lib/components/ProcessSteps.svelte";
  import PageCTA from "$lib/components/PageCTA.svelte";
  import { managedItSchema } from "./structured-data";

  const features = [
    {
      title: "24/7 System Monitoring",
      description:
        "Round-the-clock monitoring of your IT infrastructure to prevent issues before they impact your business.",
      icon: "eye",
    },
    {
      title: "Help Desk Support",
      description:
        "Expert technical support available when you need it, with fast response times and knowledgeable technicians.",
      icon: "phone",
    },
    {
      title: "Network Management",
      description:
        "Complete network administration, optimization, and maintenance to ensure reliable connectivity.",
      icon: "server",
    },
    {
      title: "Security Updates & Patches",
      description:
        "Automated security updates and patch management to keep your systems protected from threats.",
      icon: "shield",
    },
    {
      title: "Backup & Recovery",
      description:
        "Comprehensive data backup solutions with quick recovery options to minimize downtime.",
      icon: "cloudArrowUp",
    },
    {
      title: "Performance Optimization",
      description:
        "Continuous performance monitoring and optimization to keep your systems running at peak efficiency.",
      icon: "bolt",
    },
  ];

  const processSteps = [
    {
      title: "Assessment",
      description:
        "We evaluate your current IT infrastructure and identify areas for improvement.",
    },
    {
      title: "Planning",
      description:
        "Create a customized IT management plan that aligns with your business objectives.",
    },
    {
      title: "Implementation",
      description:
        "Deploy monitoring tools and establish support processes for your environment.",
    },
    {
      title: "Monitoring",
      description:
        "24/7 proactive monitoring of your systems and network infrastructure.",
    },
    {
      title: "Maintenance",
      description:
        "Regular maintenance, updates, and optimization to prevent issues.",
    },
    {
      title: "Support",
      description:
        "Ongoing technical support and rapid response to any IT issues that arise.",
    },
  ];

  const heroData = {
    title: "Managed IT Services",
    description:
      "Focus on your business while we handle your technology. Our comprehensive managed IT services provide 24/7 monitoring, proactive maintenance, and expert support to keep your systems running smoothly.",
    primaryCTA: {
      text: "Get IT Support",
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
        src: "managed-it-mobile.avif",
        width: 640,
        height: 427,
      },
      tablet: {
        src: "managed-it-tablet.avif",
        width: 1024,
        height: 684,
      },
      desktop: {
        src: "managed-it.avif",
        width: 1920,
        height: 1282,
      },
      alt: "Managed IT services illustration",
    },
  };

  const ctaData = {
    title: "Ready for worry-free IT management?",
    description:
      "Let our experienced team handle your technology so you can focus on growing your business.",
    primaryCTA: {
      text: "Start Today",
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
  <title>Managed IT Services | CSDS</title>
  <meta
    name="description"
    content="Comprehensive managed IT services with 24/7 monitoring, help desk support, and proactive maintenance. Focus on your business while we handle your technology."
  />
  {@html `<script type="application/ld+json">${JSON.stringify(managedItSchema)}<\/script>`}
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
    title="Complete IT management and support"
    description="Our managed IT services provide comprehensive coverage for all your technology needs, from monitoring to maintenance and everything in between."
    variant="gray"
    size="lg"
  >
    <FeatureGrid {features} columns={3} variant="default" />
  </PageSection>

  <!-- Process Section -->
  <PageSection
    title="How we manage your IT infrastructure"
    description="Our proven approach ensures your technology supports your business goals with minimal disruption and maximum reliability."
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
