<script lang="ts">
  import { getIcon } from "$lib/utils/icons";

  interface Feature {
    title: string;
    description: string;
    icon: string;
  }

  type FeatureVariant = "default" | "compact" | "detailed";
  type ColumnCount = 2 | 3 | 4;

  let {
    features,
    columns = 3,
    variant = "default",
    class: className = "",
  } = $props<{
    features: Feature[];
    columns?: ColumnCount;
    variant?: FeatureVariant;
    class?: string;
  }>();

  // Column classes based on count with proper typing
  function getColumnClasses(columns: ColumnCount): string {
    switch (columns) {
      case 2:
        return "grid-cols-1 lg:grid-cols-2";
      case 3:
        return "grid-cols-1 lg:grid-cols-3";
      case 4:
        return "grid-cols-1 md:grid-cols-2 lg:grid-cols-4";
    }
  }

  // Variant-specific spacing and styling with proper typing
  function getVariantStyles(variant: FeatureVariant) {
    switch (variant) {
      case "default":
        return {
          container: "gap-x-8 gap-y-16",
          feature: "flex flex-col",
          title: "text-base font-semibold leading-7 text-gray-900",
          description:
            "mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600",
        };
      case "compact":
        return {
          container: "gap-x-6 gap-y-12",
          feature: "flex flex-col",
          title: "text-sm font-semibold leading-6 text-gray-900",
          description: "mt-2 text-sm leading-6 text-gray-600",
        };
      case "detailed":
        return {
          container: "gap-x-8 gap-y-20",
          feature: "flex flex-col",
          title: "text-lg font-semibold leading-8 text-gray-900",
          description: "mt-6 text-base leading-7 text-gray-600",
        };
    }
  }

  const currentVariant = getVariantStyles(variant);
</script>

<div class="mx-auto mt-16 max-w-2xl lg:mt-24 lg:max-w-none">
  <dl
    class="grid max-w-xl {getColumnClasses(
      columns
    )} {currentVariant.container} lg:max-w-none {className}"
  >
    {#each features as feature}
      <div class={currentVariant.feature}>
        <dt class="flex items-center gap-x-3 {currentVariant.title}">
          <svg
            class="h-5 w-5 flex-none text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d={getIcon(feature.icon)}
            />
          </svg>
          {feature.title}
        </dt>
        <dd class={currentVariant.description}>
          <p class="flex-auto">{feature.description}</p>
        </dd>
      </div>
    {/each}
  </dl>
</div>
