<script lang="ts">
  import type { ServiceCard } from "$lib/types/common";
  import { base } from "$app/paths";
  let { services } = $props<{
    services: ServiceCard[];
  }>();
</script>

<section class="py-16">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center">
      <h2 class="text-3xl font-bold text-secondary sm:text-4xl mb-16">
        Our Services
      </h2>
    </div>

    <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
      <!-- First row: 3 items -->
      {#each services.slice(0, 3) as service}
        <div
          class="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
        >
          <div class="text-primary mb-4">
            <svg
              class="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-secondary mb-3">
            {service.title}
          </h3>
          <p class="text-gray-600 leading-relaxed">
            {service.description}
          </p>
        </div>
      {/each}

      <!-- Second row: 2 items centered -->
      <div
        class="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8 md:max-w-2xl md:mx-auto"
      >
        {#each services.slice(3, 5) as service}
          <div
            class="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
          >
            <div class="text-primary mb-4">
              <svg
                class="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-secondary mb-3">
              {service.title}
            </h3>
            <p class="text-gray-600 leading-relaxed">
              {service.description}
            </p>
          </div>
        {/each}
      </div>
    </div>

    <div class="text-center mt-12">
      <a
        href={`${base}/services`}
        class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition-colors duration-300"
      >
        Explore All Services
        <svg
          class="ml-2 -mr-1 w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
      </a>
    </div>
  </div>
</section>
