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
    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {#each services as service}
        <div
          class="bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow"
        >
          <h2 class="text-2xl font-bold text-gray-900 mb-4">{service.title}</h2>
          <p class="text-gray-600 mb-6">{service.description}</p>

          <h3 class="text-lg font-semibold text-gray-900 mb-3">
            Key Features:
          </h3>
          <ul class="space-y-2">
            {#each service.features as feature}
              <li class="flex items-start">
                <svg
                  class="h-6 w-6 text-primary flex-shrink-0"
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
                <span class="ml-3 text-gray-600">{feature}</span>
              </li>
            {/each}
          </ul>

          <a
            href="/services/{service.title.toLowerCase().replace(/\s+/g, '-')}"
            class="inline-flex items-center mt-6 text-primary hover:text-primary-dark"
          >
            Learn more
            <svg class="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </div>
      {/each}
    </div>
  </div>
</div>
