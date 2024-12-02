<script lang="ts">
  import { base } from "$app/paths";
  import Hero from "$lib/components/Hero.svelte";
  import AboutSection from "$lib/components/AboutSection.svelte";
  import ServicesSection from "$lib/components/ServicesSection.svelte";
  import WhyChooseUs from "$lib/components/WhyChooseUs.svelte";
  import TestimonialsSection from "$lib/components/TestimonialsSection.svelte";
  import CtaSection from "$lib/components/CtaSection.svelte";
  import Footer from "$lib/components/Footer.svelte";

  import type {
    CTAButton,
    ServiceCard,
    Benefit,
    Testimonial,
    FooterColumn,
    SocialLink,
  } from "$lib/types/common";

  const primaryCTA: CTAButton = {
    text: "Get Started Today",
    href: `${base}/contact`,
    variant: "primary",
  } as const;

  const secondaryCTA: CTAButton = {
    text: "Learn More About Our Services",
    href: `${base}/services`,
    variant: "secondary",
  } as const;

  const aboutContent = {
    title: "Empowering Businesses Through Reliable IT Services",
    mainContent:
      "At CSDS, we're more than just IT support—we're your trusted technology partner. With decades of experience, we specialize in delivering right-sized IT solutions for businesses of all sizes. Whether you're a growing startup or an established enterprise, we tailor our services to meet your unique needs without unnecessary extras. From proactive data backup to robust network security, our comprehensive approach ensures your systems stay secure and your business runs seamlessly. Need strategic guidance? Our Outsourced CIO service provides expert advice to help you align technology with your business goals.",
    microContent: {
      title: "We Handle IT—You Focus on What You Do Best",
      content:
        "Running a small business means wearing many hats—but IT doesn't have to be one of them. At CSDS, we handle everything related to your computers and technology, so you can focus on on growing your business.",
    },
  };

  const services: ServiceCard[] = [
    {
      title: "Managed IT Services",
      description:
        "Comprehensive IT management so you can focus on growing your business.",
      icon: "server",
    },
    {
      title: "Custom Digital Solutions",
      description:
        "From app development to seamless integrations, we build technology tailored to your business. Our team specializes in creating web, mobile, and desktop applications.",
      icon: "code",
    },
    {
      title: "Network Security",
      description:
        "Safeguard your systems against cyber threats with advanced protection.",
      icon: "shield",
    },
    {
      title: "Outsourced CIO Services",
      description:
        "Strategic IT guidance to align technology with your business goals.",
      icon: "chart",
    },
    {
      title: "On-Demand IT Support",
      description:
        "Get the help you need, when you need it, with our 24/7 support team.",
      icon: "hand",
    },
  ];

  const benefits: Benefit[] = [
    {
      title: "Fast Response Times",
      description:
        "We're there when you need us, minimizing downtime and maximizing productivity.",
      icon: "clock",
    },
    {
      title: "Tailored Solutions",
      description:
        "Your business is unique, and our solutions are customized to fit your needs.",
      icon: "puzzle",
    },
    {
      title: "Proven Expertise",
      description: "Decades of experience helping businesses succeed with IT.",
      icon: "shield",
    },
    {
      title: "Transparency You Can Trust",
      description:
        "We recommend only what you truly need—no upselling, no extras.",
      icon: "scale",
    },
  ];

  const testimonials: Testimonial[] = [
    {
      quote:
        "CSDS has been a game-changer for our business. Their quick response times and professional service make all the difference!",
      author: "Dr. Jeffrey Rosenthal",
      company: "Cleveland Heights Dental",
    },
    {
      quote:
        "We've never had such reliable IT support. They truly understand our business needs and provide solutions that work.",
      author: "Sarah Mitchell",
      company: "Mitchell Law Group",
    },
    {
      quote:
        "Their proactive approach to IT management has prevented countless issues before they could impact our business.",
      author: "Michael Chang",
      company: "Chang & Associates",
    },
  ];

  const ctaContent = {
    headline: "Turn IT Chaos Into Confidence",
    subheadline:
      "Discover how smart, scalable technology can transform the way you work.",
    primaryCTA: {
      text: "Contact Us Today",
      href: "contact",
      variant: "primary",
    } as const,
  };

  const footerColumns: FooterColumn[] = [
    {
      title: "Company",
      links: [
        { title: "About", href: "/about" },
        { title: "Services", href: "/services" },
        { title: "Blog", href: "/blog" },
        { title: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Support",
      links: [
        { title: "Support Center", href: "/support" },
        // { title: "Knowledge Base", href: "/resources" },
        // { title: "FAQ", href: "/faq" },
      ],
    },
  ];

  const socialLinks: SocialLink[] = [
    { platform: "linkedin", href: "https://linkedin.com/company/csds" },
  ];
</script>

<Hero {primaryCTA} {secondaryCTA} />
<AboutSection {...aboutContent} />
<ServicesSection {services} />
<WhyChooseUs {benefits} />
<TestimonialsSection {testimonials} />
<CtaSection {...ctaContent} />
<Footer columns={footerColumns} socials={socialLinks} />
