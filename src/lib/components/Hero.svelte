<script lang="ts">
  import { base } from "$app/paths";
  import type { CTAButton } from "$lib/types/common";

  let { primaryCTA, secondaryCTA } = $props<{
    primaryCTA: CTAButton;
    secondaryCTA: CTAButton;
  }>();
</script>

<section class="relative overflow-hidden w-full">
  <!-- Background Image -->
  <div class="absolute inset-0 w-full">
    <img
      src="{base}/hero-background.avif"
      alt=""
      class="w-full h-full object-cover"
    />
    <!-- Overlay to ensure text readability -->
    <div class="absolute inset-0 bg-gray-900/50"></div>
  </div>

  <!-- Content container with max-width -->
  <div class="relative z-10 w-full">
    <div
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32"
    >
      <div class="sm:text-center lg:text-left">
        <h1
          class="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl"
        >
          <span class="block">Your IT Solutions,</span>
          <span class="block text-primary-100">Simplified.</span>
        </h1>
        <p
          class="mt-3 text-base text-gray-200 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
        >
          Proactive, responsive IT support tailored to your business needs.
        </p>
        <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div class="rounded-md shadow">
            <a
              href={primaryCTA.href}
              class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark md:py-4 md:text-lg md:px-10"
            >
              {primaryCTA.text}
            </a>
          </div>
          <div class="mt-3 sm:mt-0 sm:ml-3">
            <a
              href={secondaryCTA.href}
              class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800/60 hover:bg-gray-800/80 md:py-4 md:text-lg md:px-10"
            >
              {secondaryCTA.text}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
