<script lang="ts">
  import type { ServiceCard } from "$lib/types/common";
  import { base } from "$app/paths";
  let { services } = $props<{
    services: ServiceCard[];
  }>();

  const icons: Record<ServiceCard["icon"], string> = {
    server:
      "M5.25 14.25h13.5m-13.5 3H19.5m-13.5 3h13.5M6.75 7.5h10.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25H6.75a2.25 2.25 0 01-2.25-2.25V9.75a2.25 2.25 0 012.25-2.25z",
    code: "M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5",
    shield:
      "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
    chart:
      "M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z",
    hand: "M10.05 4.575a1.575 1.575 0 1 0-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 0 1 3.15 0v1.5m-3.15 0 .075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 0 1 3.15 0V15M6.9 7.575a1.575 1.575 0 1 0-3.15 0v8.175a6.75 6.75 0 0 0 6.75 6.75h2.018a5.25 5.25 0 0 0 3.712-1.538l1.732-1.732a5.25 5.25 0 0 0 1.538-3.712l.003-2.024a.668.668 0 0 1 .198-.471 1.575 1.575 0 1 0-2.228-2.228 3.818 3.818 0 0 0-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0 1 16.35 15m.002 0h-.002",
  };
</script>

<section class="py-8 md:py-12 lg:py-16">
  <div class="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
    <div class="text-center">
      <h2
        class="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary mb-8 md:mb-12 lg:mb-16"
      >
        Our Services
      </h2>
    </div>

    <div class="grid grid-cols-1 gap-6 md:gap-8">
      <!-- First row: 3 items -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {#each services.slice(0, 3) as service (service.title)}
          <div
            class="bg-white p-6 md:p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
          >
            <div class="text-primary mb-3 md:mb-4">
              <svg
                class="w-6 h-6 md:w-8 md:h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d={icons[service.icon as ServiceCard["icon"]]}
                />
              </svg>
            </div>
            <h3
              class="text-lg md:text-xl font-bold text-secondary mb-2 md:mb-3"
            >
              {service.title}
            </h3>
            <p class="text-gray-600 leading-relaxed">
              {service.description}
            </p>
          </div>
        {/each}
      </div>

      <!-- Second row: 2 items centered -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 md:max-w-2xl md:mx-auto"
      >
        {#each services.slice(3, 5) as service (service.title)}
          <div
            class="bg-white p-6 md:p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
          >
            <div class="text-primary mb-3 md:mb-4">
              <svg
                class="w-6 h-6 md:w-8 md:h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d={icons[service.icon as ServiceCard["icon"]]}
                />
              </svg>
            </div>
            <h3
              class="text-lg md:text-xl font-bold text-secondary mb-2 md:mb-3"
            >
              {service.title}
            </h3>
            <p class="text-gray-600 leading-relaxed">
              {service.description}
            </p>
          </div>
        {/each}
      </div>
    </div>

    <div class="text-center mt-8 md:mt-12">
      <a
        href={`${base}/services`}
        class="inline-flex items-center px-4 py-2 md:px-6 md:py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition-colors duration-300"
      >
        Explore All Services
        <svg
          class="ml-2 -mr-1 w-4 h-4 md:w-5 md:h-5"
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
