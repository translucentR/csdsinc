<script lang="ts">
  import type { Benefit } from "$lib/types/common";

  let { benefits } = $props<{
    benefits: Benefit[];
  }>();

  const icons: Record<Benefit["icon"], string> = {
    clock: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />`,
    puzzle: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />`,
    shield: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />`,
    scale: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />`,
  } as const;

  function getIcon(iconName: Benefit["icon"]): string {
    return icons[iconName];
  }
</script>

<section class="py-6 md:py-12 lg:py-16 bg-gray-50">
  <div class="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
    <div class="text-center mb-6 md:mb-12 lg:mb-16">
      <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary">
        Why Businesses Trust CSDS
      </h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
      {#each benefits as benefit}
        <div
          class="bg-white p-4 md:p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
        >
          <div
            class="text-primary w-10 h-10 md:w-12 md:h-12 mb-3 md:mb-4 mx-auto"
          >
            <svg
              class="w-full h-full"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {@html getIcon(benefit.icon)}
            </svg>
          </div>
          <h3
            class="text-lg md:text-xl font-bold text-secondary text-center mb-2 md:mb-3"
          >
            {benefit.title}
          </h3>
          <p class="text-base text-gray-600 text-center">
            {benefit.description}
          </p>
        </div>
      {/each}
    </div>
  </div>
</section>
