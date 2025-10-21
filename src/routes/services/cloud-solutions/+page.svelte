<script lang="ts">
  import PageLayout from "$lib/components/PageLayout.svelte";
  import PageHero from "$lib/components/PageHero.svelte";
  import PageSection from "$lib/components/PageSection.svelte";
  import FeatureGrid from "$lib/components/FeatureGrid.svelte";
  import ProcessSteps from "$lib/components/ProcessSteps.svelte";
  import PageCTA from "$lib/components/PageCTA.svelte";
  import { cloudSolutionsSchema } from "./structured-data";

  const features = [
    {
      title: "Cloud Migration",
      description:
        "Seamlessly migrate your existing systems and data to the cloud with minimal disruption to your business.",
      icon: "cloudArrowUp",
    },
    {
      title: "Microsoft 365 Management",
      description:
        "Complete setup, management, and optimization of your Microsoft 365 environment for maximum productivity.",
      icon: "server",
    },
    {
      title: "Cloud Security",
      description:
        "Advanced security measures to protect your cloud infrastructure and sensitive data from threats.",
      icon: "shield",
    },
    {
      title: "Data Backup & Recovery",
      description:
        "Reliable cloud-based backup solutions with fast recovery options to protect your critical business data.",
      icon: "cloudArrowDown",
    },
    {
      title: "Collaboration Tools",
      description:
        "Modern collaboration platforms that enable your team to work efficiently from anywhere.",
      icon: "userGroup",
    },
    {
      title: "Scalable Infrastructure",
      description:
        "Cloud infrastructure that grows with your business, providing the resources you need when you need them.",
      icon: "chart",
    },
  ];

  const processSteps = [
    {
      title: "Assessment",
      description:
        "We evaluate your current infrastructure and identify the best cloud strategy for your business.",
    },
    {
      title: "Planning",
      description:
        "Create a detailed migration plan that minimizes downtime and maximizes benefits.",
    },
    {
      title: "Migration",
      description:
        "Carefully migrate your systems and data to the cloud with thorough testing at each step.",
    },
    {
      title: "Configuration",
      description:
        "Optimize your cloud environment for security, performance, and cost-effectiveness.",
    },
    {
      title: "Training",
      description:
        "Provide comprehensive training to ensure your team can effectively use the new cloud tools.",
    },
    {
      title: "Support",
      description:
        "Ongoing support and management to keep your cloud infrastructure running optimally.",
    },
  ];

  const heroData = {
    title: "Cloud Solutions & Migration",
    description:
      "Modernize your business with secure, scalable cloud solutions. We help you migrate to the cloud, optimize your infrastructure, and leverage powerful collaboration tools to boost productivity and reduce costs.",
    primaryCTA: {
      text: "Move to the Cloud",
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
        src: "cloud-solutions-mobile.avif",
        width: 640,
        height: 427,
      },
      tablet: {
        src: "cloud-solutions-tablet.avif",
        width: 1024,
        height: 684,
      },
      desktop: {
        src: "cloud-solutions.avif",
        width: 1920,
        height: 1282,
      },
      alt: "Cloud solutions and migration illustration",
    },
  };

  const ctaData = {
    title: "Ready to embrace the cloud?",
    description:
      "Transform your business operations with modern cloud solutions that provide flexibility, security, and cost savings.",
    primaryCTA: {
      text: "Start Your Migration",
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
  <title>Cloud Solutions & Migration | CSDS</title>
  <meta
    name="description"
    content="Modernize your business with secure cloud solutions. Expert cloud migration, Microsoft 365 management, and scalable infrastructure services."
  />
  {@html `<script type="application/ld+json">${JSON.stringify(cloudSolutionsSchema)}<\/script>`}
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
    title="Complete cloud transformation services"
    description="Our cloud solutions cover every aspect of your digital transformation, from migration to ongoing management and optimization."
    variant="gray"
    size="lg"
  >
    <FeatureGrid {features} columns={3} variant="default" />
  </PageSection>

  <!-- Process Section -->
  <PageSection
    title="Our proven cloud migration process"
    description="We follow a systematic approach to ensure your cloud migration is smooth, secure, and delivers maximum business value."
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
