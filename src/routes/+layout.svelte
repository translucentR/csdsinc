<script lang="ts">
  import "../app.css";
  import Navigation from "$lib/components/Navigation.svelte";
  import { navigationItems } from "$lib/types/navigation";

  let { children } = $props();
</script>

<Navigation items={navigationItems} />

<main>
  {@render children()}
</main>
