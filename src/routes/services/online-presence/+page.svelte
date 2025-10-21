<script lang="ts">
  import PageLayout from "$lib/components/PageLayout.svelte";
  import PageHero from "$lib/components/PageHero.svelte";
  import PageSection from "$lib/components/PageSection.svelte";
  import FeatureGrid from "$lib/components/FeatureGrid.svelte";
  import ProcessSteps from "$lib/components/ProcessSteps.svelte";
  import PageCTA from "$lib/components/PageCTA.svelte";
  import { onlinePresenceSchema } from "./structured-data";

  const features = [
    {
      title: "Search Engine Optimization (SEO)",
      description:
        "Improve your website's visibility in search results with proven SEO strategies and techniques.",
      icon: "magnifyingGlass",
    },
    {
      title: "Google Business Profile Management",
      description:
        "Optimize your Google Business Profile to attract more local customers and improve online visibility.",
      icon: "globe",
    },
    {
      title: "Social Media Integration",
      description:
        "Connect your social media presence with your website and business goals for maximum impact.",
      icon: "userGroup",
    },
    {
      title: "Local Search Optimization",
      description:
        "Dominate local search results and attract customers in your geographic area.",
      icon: "mapPin",
    },
    {
      title: "Online Reputation Management",
      description:
        "Monitor and manage your online reputation across all platforms and review sites.",
      icon: "star",
    },
    {
      title: "Analytics & Performance Tracking",
      description:
        "Track your online performance with detailed analytics and actionable insights.",
      icon: "chart",
    },
  ];

  const processSteps = [
    {
      title: "Audit",
      description:
        "We analyze your current online presence across all platforms and channels.",
    },
    {
      title: "Strategy",
      description:
        "Develop a comprehensive digital marketing strategy tailored to your business goals.",
    },
    {
      title: "Implementation",
      description:
        "Execute SEO improvements, optimize profiles, and enhance your online visibility.",
    },
    {
      title: "Content Creation",
      description:
        "Create engaging content that resonates with your target audience.",
    },
    {
      title: "Monitoring",
      description:
        "Continuously monitor your online reputation and search rankings.",
    },
    {
      title: "Optimization",
      description:
        "Ongoing optimization based on performance data and market changes.",
    },
  ];

  const heroData = {
    title: "Online Presence & Digital Marketing",
    description:
      "Boost your online visibility and attract more customers with our comprehensive digital marketing services. From SEO to social media management, we help your business stand out in the digital landscape.",
    primaryCTA: {
      text: "Improve My Online Presence",
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
        src: "online-presence-mobile.avif",
        width: 640,
        height: 427,
      },
      tablet: {
        src: "online-presence-tablet.avif",
        width: 1024,
        height: 684,
      },
      desktop: {
        src: "online-presence.avif",
        width: 1920,
        height: 1282,
      },
      alt: "Online presence and digital marketing illustration",
    },
  };

  const ctaData = {
    title: "Ready to dominate your market online?",
    description:
      "Let us help you build a powerful online presence that drives real business results.",
    primaryCTA: {
      text: "Get Started Today",
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
  <title>Online Presence & Digital Marketing | CSDS</title>
  <meta
    name="description"
    content="Boost your online visibility with our comprehensive digital marketing services. SEO, Google Business Profile management, and social media optimization."
  />
  {@html `<script type="application/ld+json">${JSON.stringify(onlinePresenceSchema)}<\/script>`}
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
    title="Complete digital marketing solutions"
    description="Our online presence services cover every aspect of your digital footprint, from search engine optimization to reputation management."
    variant="gray"
    size="lg"
  >
    <FeatureGrid {features} columns={3} variant="default" />
  </PageSection>

  <!-- Process Section -->
  <PageSection
    title="Our proven digital marketing process"
    description="We follow a systematic approach to improve your online visibility and drive measurable results for your business."
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
