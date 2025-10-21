<script lang="ts">
  import { getIcon } from "$lib/utils/icons";
  import { servicesSchema } from "./structured-data";
  import { base } from "$app/paths";

  interface Service {
    title: string;
    description: string;
    icon: string;
    features: string[];
    isNew?: boolean;
    href: string;
  }

  const services: Service[] = [
    // {
    //   title: "Audio/Video Solutions",
    //   description:
    //     "Professional AV systems for conference rooms, digital signage, and collaboration spaces.",
    //   icon: "video-camera",
    //   features: [
    //     "Conference Room Design",
    //     "Video Conferencing Systems",
    //     "Digital Signage",
    //     "Sound Systems",
    //     "Display Solutions",
    //     "AV Network Integration",
    //   ],
    //   isNew: true,
    // },
    {
      title: "Custom Development & Integrations",
      description:
        "Specialized solutions tailored to your unique business requirements.",
      icon: "code",
      href: "custom-development",
      features: [
        "Internal Application Development",
        "Customer-Facing Websites",
        "API Design & Implementation",
        "Analytics & Tracking Systems",
        "Database Management",
        "System Integration",
      ],
      isNew: true,
    },
    {
      title: "Online Presence",
      description:
        "Enhance your online visibility and digital marketing effectiveness.",
      icon: "globe",
      href: "online-presence",
      features: [
        "Search Engine Optimization (SEO)",
        "Google Business Profile Management",
        "Social Media Integration",
        "Local Search Optimization",
        "Online Reputation Management",
        "Analytics & Performance Tracking",
      ],
      isNew: true,
    },
    {
      title: "Managed IT Services",
      description:
        "Comprehensive IT support and management for your business infrastructure.",
      icon: "server",
      href: "managed-it-services",
      features: [
        "24/7 System Monitoring",
        "Help Desk Support",
        "Network Management",
        "Security Updates & Patches",
        "Backup & Recovery",
        "Performance Optimization",
      ],
    },
    {
      title: "Cloud Solutions",
      description:
        "Secure and scalable cloud services to modernize your business operations.",
      icon: "cloud",
      href: "cloud-solutions",
      features: [
        "Cloud Migration",
        "Microsoft 365 Management",
        "Cloud Security",
        "Data Backup",
        "Collaboration Tools",
        "Scalable Infrastructure",
      ],
    },
    {
      title: "Cybersecurity",
      description:
        "Advanced security solutions to protect your business from modern threats.",
      icon: "shield",
      href: "cybersecurity",
      features: [
        "Security Assessments",
        "Endpoint Protection",
        "Email Security",
        "Firewall Management",
        "Employee Training",
        "Incident Response",
      ],
    },
  ];
</script>

<svelte:head>
  <link rel="canonical" href="https://csdsinc.net/services" />
  {@html `<script type="application/ld+json">${JSON.stringify(servicesSchema)}<\/script>`}
</svelte:head>

<div class="bg-gray-50">
  <!-- Hero Section -->
  <div class="relative py-8 lg:py-16">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-3xl text-center">
        <h1 class="text-4xl font-bold tracking-tight text-gray-900 lg:text-6xl">
          Our Services
        </h1>
        <p class="mt-3 text-lg leading-7 text-gray-600 lg:text-xl">
          Comprehensive IT solutions tailored to your business needs. We provide
          the expertise and support you need to succeed in today's digital
          landscape.
        </p>
      </div>
    </div>
  </div>

  <!-- Services Grid -->
  <div class="mx-auto max-w-7xl px-6 lg:px-8 pb-12 lg:pb-24">
    <div class="flex flex-wrap gap-10 justify-center">
      {#each services as service}
        <div
          class="relative w-full md:w-[calc(50%-20px)] lg:w-[calc(33.333%-27px)]"
        >
          {#if service.isNew}
            <div class="absolute -top-7 left-2 z-10">
              <div
                class="bg-primary text-white text-sm px-4 py-1 rounded-t-md border-2 border-b-0 border-primary"
              >
                New Offering
              </div>
            </div>
          {/if}
          <a href="{base}/services/{service.href}" class="block">
            <div
              class="bg-white rounded-xl shadow-sm p-6 lg:p-8 hover:shadow-md transition-shadow flex flex-col h-full cursor-pointer
                      {service.isNew
                ? 'border-2 border-primary'
                : 'border border-gray-100'}"
            >
              <div>
                <div class="flex gap-2 items-start">
                  <svg
                    class="h-6 w-6 text-primary flex-shrink-0 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d={getIcon(service.icon)}
                    />
                  </svg>
                  <h2
                    class="text-2xl font-bold text-gray-900 mb-2 lg:mb-3 leading-7"
                  >
                    {service.title}
                  </h2>
                </div>
                <p class="text-lg text-gray-600">{service.description}</p>
              </div>

              <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-4">
                Key Features:
              </h3>
              <ul class="space-y-3">
                {#each service.features as feature}
                  <li class="flex items-start space-x-3">
                    <svg
                      class="h-6 w-6 text-primary flex-shrink-0 mt-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d={getIcon("check")}
                      />
                    </svg>
                    <span class="text-lg text-gray-600">{feature}</span>
                  </li>
                {/each}
              </ul>
            </div>
          </a>
        </div>
      {/each}
    </div>
  </div>
</div>
