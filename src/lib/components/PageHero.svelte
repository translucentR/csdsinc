<script lang="ts">
  import { base } from "$app/paths";
  import type { CTAButton } from "$lib/types/common";

  type HeroVariant = "default" | "gradient" | "minimal";

  interface ResponsiveImage {
    mobile: {
      src: string;
      width: number;
      height: number;
    };
    tablet: {
      src: string;
      width: number;
      height: number;
    };
    desktop: {
      src: string;
      width: number;
      height: number;
    };
    alt: string;
  }

  let {
    title,
    subtitle,
    description,
    primaryCTA,
    secondaryCTA,
    image,
    variant = "default",
    class: className = "",
  } = $props<{
    title: string;
    subtitle?: string;
    description: string;
    primaryCTA: CTAButton;
    secondaryCTA?: CTAButton;
    image?: ResponsiveImage;
    variant?: HeroVariant;
    class?: string;
  }>();

  // Simple variant styles
  function getBackgroundClass(variant: HeroVariant) {
    switch (variant) {
      case "default":
        return "bg-white";
      case "gradient":
        return "bg-gradient-to-br from-primary to-primary-dark";
      case "minimal":
        return "bg-gray-50";
    }
  }
</script>

<section class="relative {getBackgroundClass(variant)} {className}">
  <div class="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
    <div
      class="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center"
    >
      <!-- Text Content -->
      <div
        class="max-w-2xl lg:max-w-none mx-auto lg:mx-0 text-center lg:text-left"
      >
        {#if subtitle}
          <div class="text-base font-semibold leading-7 text-primary mb-4">
            {subtitle}
          </div>
        {/if}

        <h1
          class="text-4xl font-bold tracking-tight text-gray-900 lg:text-5xl xl:text-6xl"
        >
          {title}
        </h1>

        <p class="mt-6 text-lg leading-8 text-gray-600 lg:text-xl">
          {description}
        </p>

        <div class="mt-10 flex flex-col gap-4 lg:flex-row lg:gap-6">
          <a
            href="{base}{primaryCTA.href}"
            class="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors"
          >
            {primaryCTA.text}
          </a>

          {#if secondaryCTA}
            <a
              href="{base}{secondaryCTA.href}"
              class="inline-flex items-center text-base font-semibold leading-6 text-gray-900 hover:text-primary transition-colors"
            >
              {secondaryCTA.text} <span aria-hidden="true" class="ml-1">→</span>
            </a>
          {/if}
        </div>
      </div>

      <!-- Image Content -->
      {#if image}
        <div class="relative">
          <picture>
            <source
              media="(max-width: 640px)"
              srcset="{base}/{image.mobile.src}"
              width={image.mobile.width}
              height={image.mobile.height}
            />
            <source
              media="(max-width: 1024px)"
              srcset="{base}/{image.tablet.src}"
              width={image.tablet.width}
              height={image.tablet.height}
            />
            <source
              media="(min-width: 1025px)"
              srcset="{base}/{image.desktop.src}"
              width={image.desktop.width}
              height={image.desktop.height}
            />
            <img
              src="{base}/{image.desktop.src}"
              alt={image.alt}
              width={image.desktop.width}
              height={image.desktop.height}
              class="w-full h-auto rounded-xl shadow-2xl ring-1 ring-gray-400/10"
              loading="eager"
              fetchpriority="high"
              decoding="async"
            />
          </picture>
        </div>
      {/if}
    </div>
  </div>
</section>
