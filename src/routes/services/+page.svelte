<script lang="ts">
  interface Service {
    title: string;
    description: string;
    icon: string;
    features: string[];
  }

  const services: Service[] = [
    {
      title: "Managed IT Services",
      description:
        "Comprehensive IT support and management for your business infrastructure.",
      icon: "server", // We'll implement icons later
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
      features: [
        "Security Assessments",
        "Endpoint Protection",
        "Email Security",
        "Firewall Management",
        "Employee Training",
        "Incident Response",
      ],
    },
    {
      title: "Custom Development & Integrations",
      description:
        "Specialized solutions tailored to your unique business requirements.",
      icon: "code",
      features: [
        "Internal Application Development",
        "Customer-Facing Websites",
        "API Design & Implementation",
        "Analytics & Tracking Systems",
        "Database Management",
        "System Integration",
      ],
    },
  ];
</script>

<div class="bg-gray-50">
  <!-- Hero Section -->
  <div class="relative py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Our Services
        </h1>
        <p class="mt-6 text-lg leading-8 text-gray-600">
          Comprehensive IT solutions tailored to your business needs. We provide
          the expertise and support you need to succeed in today's digital
          landscape.
        </p>
      </div>
    </div>
  </div>

  <!-- Services Grid -->
  <div class="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {#each services as service}
        <div
          class="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow flex flex-col"
        >
          <div class="min-h-[120px]">
            <h2 class="text-xl font-bold text-gray-900 mb-3">
              {service.title}
            </h2>
            <p class="text-sm text-gray-600">{service.description}</p>
          </div>

          <h3 class="text-base font-semibold text-gray-900 mb-2">
            Key Features:
          </h3>
          <ul class="space-y-1.5">
            {#each service.features as feature}
              <li class="flex items-start">
                <svg
                  class="h-5 w-5 text-primary flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span class="ml-2 text-sm text-gray-600">{feature}</span>
              </li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>
  </div>
</div>
