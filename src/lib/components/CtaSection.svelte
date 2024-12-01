<script lang="ts">
  import { base } from "$app/paths";
  import type { CTAButton } from "$lib/types/common";

  let { headline, subheadline, primaryCTA, secondaryCTA } = $props<{
    headline: string;
    subheadline: string;
    primaryCTA: CTAButton;
    secondaryCTA?: CTAButton;
  }>();
</script>

<section class="relative py-20 overflow-hidden">
  <!-- Background with gradient -->
  <div
    class="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark opacity-90"
  ></div>

  <!-- Decorative elements -->
  <div
    class="absolute inset-0 bg-grid-white/[0.05] bg-[length:16px_16px]"
  ></div>

  <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center">
      <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
        {headline}
      </h2>
      <p class="text-xl text-white/80 max-w-2xl mx-auto mb-10">
        {subheadline}
      </p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href={`${base}/${primaryCTA.href}`}
          class="inline-flex items-center justify-center px-8 py-3 border-2 border-white bg-white text-primary font-semibold rounded-md hover:bg-transparent hover:text-white transition-colors duration-300"
        >
          {primaryCTA.text}
        </a>
        {#if secondaryCTA}
          <a
            href={`${base}/${secondaryCTA.href}`}
            class="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-primary transition-colors duration-300"
          >
            {secondaryCTA.text}
          </a>
        {/if}
      </div>
    </div>
  </div>
</section>
