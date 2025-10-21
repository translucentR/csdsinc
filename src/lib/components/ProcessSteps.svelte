<script lang="ts">
  interface ProcessStep {
    title: string;
    description: string;
  }

  type ProcessVariant = "default" | "compact" | "timeline";
  type ColumnCount = 1 | 2 | 3;

  let {
    steps,
    columns = 2,
    variant = "default",
    class: className = "",
  } = $props<{
    steps: ProcessStep[];
    columns?: ColumnCount;
    variant?: ProcessVariant;
    class?: string;
  }>();

  // Column classes based on count with proper typing
  function getColumnClasses(columns: ColumnCount): string {
    switch (columns) {
      case 1:
        return "grid-cols-1";
      case 2:
        return "grid-cols-1 lg:grid-cols-2";
      case 3:
        return "grid-cols-1 lg:grid-cols-3";
    }
  }

  // Variant-specific spacing and styling with proper typing
  function getVariantStyles(variant: ProcessVariant) {
    switch (variant) {
      case "default":
        return {
          container: "gap-y-10 gap-x-8 lg:gap-y-16",
          step: "relative pl-16",
          title: "text-base font-semibold leading-7 text-gray-900",
          description: "mt-2 text-base leading-7 text-gray-600",
        };
      case "compact":
        return {
          container: "gap-y-8 gap-x-6",
          step: "relative pl-12",
          title: "text-sm font-semibold leading-6 text-gray-900",
          description: "mt-1 text-sm leading-6 text-gray-600",
        };
      case "timeline":
        return {
          container: "gap-y-12 gap-x-8",
          step: "relative pl-16",
          title: "text-lg font-semibold leading-8 text-gray-900",
          description: "mt-3 text-base leading-7 text-gray-600",
        };
    }
  }

  const currentVariant = getVariantStyles(variant);
</script>

<div class="mx-auto mt-16 max-w-2xl lg:mt-20">
  <dl
    class="grid {getColumnClasses(
      columns
    )} {currentVariant.container} lg:max-w-none {className}"
  >
    {#each steps as step, index}
      <div class={currentVariant.step}>
        <dt class={currentVariant.title}>
          <div
            class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary"
          >
            <span class="text-white font-semibold text-sm">{index + 1}</span>
          </div>
          {step.title}
        </dt>
        <dd class={currentVariant.description}>
          {step.description}
        </dd>
      </div>
    {/each}
  </dl>
</div>
