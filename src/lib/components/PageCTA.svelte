<script lang="ts">
  import { base } from "$app/paths";
  import type { CTAButton } from "$lib/types/common";

  type CTAVariant = "default" | "dark" | "gradient" | "minimal" | "footer";

  let {
    title,
    description,
    primaryCTA,
    secondaryCTA,
    variant = "default",
    class: className = "",
  } = $props<{
    title: string;
    description: string;
    primaryCTA: CTAButton;
    secondaryCTA?: CTAButton;
    variant?: CTAVariant;
    class?: string;
  }>();

  // Variant-specific styles with proper typing
  function getVariantStyles(variant: CTAVariant) {
    switch (variant) {
      case "default":
        return {
          container: "bg-white",
          inner: "bg-gray-900 text-white",
          title: "text-white",
          description: "text-gray-300",
          primaryBtn: "bg-white text-gray-900 hover:bg-gray-100",
          secondaryBtn: "text-white",
        };
      case "dark":
        return {
          container: "bg-gray-900",
          inner: "bg-gray-800 text-white",
          title: "text-white",
          description: "text-gray-300",
          primaryBtn: "bg-primary text-white hover:bg-primary-dark",
          secondaryBtn: "text-white",
        };
      case "gradient":
        return {
          container: "bg-gradient-to-br from-primary to-primary-dark",
          inner: "bg-transparent text-white",
          title: "text-white",
          description: "text-primary-100",
          primaryBtn: "bg-white text-primary hover:bg-gray-100",
          secondaryBtn: "text-white",
        };
      case "minimal":
        return {
          container: "bg-gray-50",
          inner: "bg-white text-gray-900 border border-gray-200",
          title: "text-gray-900",
          description: "text-gray-600",
          primaryBtn: "bg-primary text-white hover:bg-primary-dark",
          secondaryBtn: "text-gray-900",
        };
      case "footer":
        return {
          container: "bg-gray-50",
          inner: "bg-transparent text-gray-900",
          title: "text-gray-900",
          description: "text-gray-600",
          primaryBtn: "bg-[#0066cc] text-white hover:bg-[#0052a3]",
          secondaryBtn: "text-gray-900 hover:text-[#0066cc]",
        };
    }
  }

  const currentVariant = getVariantStyles(variant);
</script>

<div class="{currentVariant.container} {className}">
  {#if variant === "footer"}
    <!-- Footer-style CTA matching about page -->
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <div class="mx-auto max-w-2xl text-center">
        <p class="{currentVariant.description} mb-6">
          {description}
        </p>
        <div class="flex items-center justify-center gap-x-4">
          <a
            href="{base}{primaryCTA.href}"
            class="rounded {currentVariant.primaryBtn} px-4 py-2 text-sm font-semibold shadow-sm"
          >
            {primaryCTA.text}
          </a>
          {#if secondaryCTA}
            <a
              href="{base}{secondaryCTA.href}"
              class="text-sm font-semibold {currentVariant.secondaryBtn}"
            >
              {secondaryCTA.text} →
            </a>
          {/if}
        </div>
      </div>
    </div>
  {:else}
    <!-- Standard CTA variants -->
    <div class="mx-auto max-w-7xl py-24 lg:px-8 lg:py-32">
      <div
        class="relative isolate overflow-hidden {currentVariant.inner} px-6 py-24 text-center shadow-2xl lg:rounded-3xl lg:px-16"
      >
        <h2
          class="mx-auto max-w-2xl text-3xl font-bold tracking-tight {currentVariant.title} lg:text-4xl"
        >
          {title}
        </h2>
        <p
          class="mx-auto mt-6 max-w-xl text-lg leading-8 {currentVariant.description}"
        >
          {description}
        </p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="{base}{primaryCTA.href}"
            class="rounded-md {currentVariant.primaryBtn} px-3.5 py-2.5 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {primaryCTA.text}
          </a>
          {#if secondaryCTA}
            <a
              href="{base}{secondaryCTA.href}"
              class="text-sm font-semibold leading-6 {currentVariant.secondaryBtn}"
            >
              {secondaryCTA.text} <span aria-hidden="true">→</span>
            </a>
          {/if}
        </div>
      </div>
    </div>
  {/if}
</div>
