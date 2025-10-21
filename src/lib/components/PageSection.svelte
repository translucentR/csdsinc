<script lang="ts">
  import type { Snippet } from "svelte";

  type SectionVariant = "default" | "gray" | "primary" | "minimal";
  type SectionSize = "sm" | "md" | "lg" | "xl";

  let {
    children,
    title,
    subtitle,
    description,
    variant = "default",
    size = "lg",
    class: className = "",
    id,
  } = $props<{
    children: Snippet;
    title?: string;
    subtitle?: string;
    description?: string;
    variant?: SectionVariant;
    size?: SectionSize;
    class?: string;
    id?: string;
  }>();

  // Size-specific spacing with proper typing
  function getSizeClasses(size: SectionSize): string {
    switch (size) {
      case "sm":
        return "py-12 lg:py-16";
      case "md":
        return "py-16 lg:py-20";
      case "lg":
        return "py-20 lg:py-24";
      case "xl":
        return "py-24 lg:py-32";
    }
  }

  // Variant-specific styles with proper typing
  function getVariantClasses(variant: SectionVariant): string {
    switch (variant) {
      case "default":
        return "bg-white";
      case "gray":
        return "bg-gray-50";
      case "primary":
        return "bg-primary text-white";
      case "minimal":
        return "bg-white border-t border-gray-200";
    }
  }

  function getTextColor(variant: SectionVariant): string {
    switch (variant) {
      case "default":
        return "text-gray-900";
      case "gray":
        return "text-gray-900";
      case "primary":
        return "text-white";
      case "minimal":
        return "text-gray-900";
    }
  }

  function getSubtitleColor(variant: SectionVariant): string {
    switch (variant) {
      case "default":
        return "text-primary";
      case "gray":
        return "text-primary";
      case "primary":
        return "text-primary-100";
      case "minimal":
        return "text-primary";
    }
  }

  function getDescriptionColor(variant: SectionVariant): string {
    switch (variant) {
      case "default":
        return "text-gray-600";
      case "gray":
        return "text-gray-600";
      case "primary":
        return "text-primary-100";
      case "minimal":
        return "text-gray-600";
    }
  }
</script>

<section
  class="{getVariantClasses(variant)} {getSizeClasses(size)} {className}"
  {id}
>
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    {#if title || subtitle || description}
      <div class="mx-auto max-w-2xl lg:text-center mb-16">
        {#if subtitle}
          <h2
            class="text-base font-semibold leading-7 {getSubtitleColor(
              variant
            )}"
          >
            {subtitle}
          </h2>
        {/if}

        {#if title}
          <p
            class="mt-2 text-3xl font-bold tracking-tight {getTextColor(
              variant
            )} lg:text-4xl"
          >
            {title}
          </p>
        {/if}

        {#if description}
          <p class="mt-6 text-lg leading-8 {getDescriptionColor(variant)}">
            {description}
          </p>
        {/if}
      </div>
    {/if}

    {@render children()}
  </div>
</section>
