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
    <picture>
      <source
        media="(max-width: 640px)"
        srcset="{base}/hero-background-mobile.avif"
        width="640"
        height="360"
      />
      <source
        media="(max-width: 1024px)"
        srcset="{base}/hero-background-tablet.avif"
        width="1024"
        height="576"
      />
      <img
        src="{base}/hero-background.avif"
        alt=""
        width="1920"
        height="1080"
        class="w-full h-full object-cover"
        loading="eager"
        fetchpriority="high"
      />
    </picture>
    <!-- Overlay to ensure text readability -->
    <div class="absolute inset-0 bg-gray-900/50"></div>
  </div>

  <!-- Content container with max-width -->
  <div class="relative z-10 w-full">
    <div class="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
      <div>
        <h1
          class="text-3xl md:text-5xl lg:text-6xl tracking-tight font-extrabold text-white"
        >
          <span class="block">Your IT Solutions,</span>
          <span class="block text-primary-100">Simplified.</span>
        </h1>
        <p
          class="mt-3 text-base md:text-xl lg:text-2xl text-gray-200 md:mt-5 max-w-2xl"
        >
          Proactive, responsive IT support tailored to your business needs.
        </p>
        <div class="mt-8 md:mt-10 flex flex-col md:flex-row gap-3 md:gap-4">
          <div class="w-full md:w-auto">
            <a
              href={primaryCTA.href}
              class="w-full md:w-auto flex items-center justify-center px-6 py-3 md:px-8 md:py-4 border border-transparent text-base md:text-lg font-medium rounded-md text-white bg-primary hover:bg-primary-dark"
            >
              {primaryCTA.text}
            </a>
          </div>
          <div class="w-full md:w-auto">
            <a
              href={secondaryCTA.href}
              class="w-full md:w-auto flex items-center justify-center px-6 py-3 md:px-8 md:py-4 border border-transparent text-base md:text-lg font-medium rounded-md text-white bg-gray-800/60 hover:bg-gray-800/80"
            >
              {secondaryCTA.text}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
