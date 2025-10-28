<script lang="ts">
  import { base } from "$app/paths";
  import Hero from "$lib/components/Hero.svelte";
  import AboutSection from "$lib/components/AboutSection.svelte";
  import ServicesSection from "$lib/components/ServicesSection.svelte";
  import WhyChooseUs from "$lib/components/WhyChooseUs.svelte";
  import TestimonialsSection from "$lib/components/TestimonialsSection.svelte";
  import CtaSection from "$lib/components/CtaSection.svelte";
  import DownloadGuide from "$lib/components/DownloadGuide.svelte";

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
        "Running a small business means wearing many hats—but IT doesn't have to be one of them. At CSDS, we handle everything related to your computers and technology, so you can focus on growing your business.",
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

<svelte:head>
  <link rel="canonical" href="https://csdsinc.net/" />
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Computer Systems Development Services Incorporated",
      "legalName": "Computer Systems Development Services Inc.",
      "alternateName": "CSDS",
      "url": "https://csdsinc.net",
      "logo": "https://csdsinc.net/logo-r-min.avif",
      "telephone": "216-529-9019",
      "email": "info@csdsinc.net",
      "description": "Proactive, responsive IT support tailored to your business needs. We specialize in delivering right-sized IT solutions for businesses of all sizes.",
      "image": "https://csdsinc.net/logo-r-min.avif",
      "priceRange": "$150 - $250",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Lakewood",
        "addressRegion": "OH",
        "postalCode": "44107",
        "streetAddress": "2174 Arthur Ave",
        "addressCountry": "US"
      },
      "areaServed": [
        {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": 41.375038,
            "longitude": -81.636421
          },
          "geoRadius": 50
        },
        {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": 42.73362,
            "longitude": -84.553932
          },
          "geoRadius": 50
        }
      ],
      "knowsAbout": [
        "Managed IT Services",
        "Custom Software Development",
        "Network Security",
        "Cloud Solutions",
        "IT Consulting",
        "System Integration",
        "API Development",
        "Database Management",
        "Web Development",
        "Microsoft 365"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "IT Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Custom Development & Integrations",
              "description": "From app development to seamless integrations, we build technology tailored to your business. Our team specializes in creating web, mobile, and desktop applications.",
              "serviceType": [
                "Internal Application Development",
                "Customer-Facing Websites",
                "API Design",
                "Database Management"
              ]
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Managed IT Services",
              "description": "Comprehensive IT management so you can focus on growing your business.",
              "serviceType": [
                "24/7 System Monitoring",
                "Help Desk Support",
                "Network Management",
                "Security Updates"
              ]
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Network Security",
              "description": "Safeguard your systems against cyber threats with advanced protection.",
              "serviceType": [
                "Security Monitoring",
                "Threat Prevention",
                "Data Protection",
                "Compliance Management"
              ]
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Cloud Solutions",
              "description": "Secure and scalable cloud services to modernize your business operations.",
              "serviceType": [
                "Cloud Migration",
                "Microsoft 365 Management",
                "Cloud Security",
                "Data Backup"
              ]
            }
          }
        ]
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "ratingCount": "3",
        "reviewCount": "3",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5"
          },
          "author": {
            "@type": "Person",
            "name": "Dr. Jeffrey Rosenthal"
          },
          "reviewBody": "CSDS has been a game-changer for our business. Their quick response times and professional service make all the difference!",
          "publisher": {
            "@type": "Organization",
            "name": "Cleveland Heights Dental"
          }
        },
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5"
          },
          "author": {
            "@type": "Person",
            "name": "Sarah Mitchell"
          },
          "reviewBody": "We've never had such reliable IT support. They truly understand our business needs and provide solutions that work.",
          "publisher": {
            "@type": "Organization",
            "name": "Mitchell Law Group"
          }
        },
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5"
          },
          "author": {
            "@type": "Person",
            "name": "Michael Chang"
          },
          "reviewBody": "Their proactive approach to IT management has prevented countless issues before they could impact our business.",
          "publisher": {
            "@type": "Organization",
            "name": "Chang & Associates"
          }
        }
      ],
      "potentialAction": [
        {
          "@type": "DownloadAction",
          "name": "Download IT Support Pricing Guide",
          "description": "Get our free guide: What You Should Expect to Pay for IT Support for Your Business",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://csdsinc.net/download-guide",
            "actionPlatform": ["http://schema.org/DesktopWebPlatform"]
          }
        },
        {
          "@type": "Action",
          "name": "Contact Support",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://csdsinc.net/support",
            "actionPlatform": ["http://schema.org/DesktopWebPlatform"]
          }
        }
      ]
    }
  </script>
</svelte:head>
<Hero {primaryCTA} {secondaryCTA} />
<AboutSection {...aboutContent} />
<ServicesSection {services} />
<WhyChooseUs {benefits} />
<TestimonialsSection {testimonials} />
<CtaSection {...ctaContent} />
<DownloadGuide />
