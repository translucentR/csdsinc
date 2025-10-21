<script lang="ts">
  import type { Snippet } from "svelte";

  let { children, class: className = "" } = $props<{
    children: Snippet;
    class?: string;
  }>();
</script>

<!-- 
  PageLayout component provides:
  - Consistent top spacing to account for fixed navigation (h-24 spacer)
  - Consistent background and base styling
  - Full-width container to allow sections to have full-width backgrounds
-->
<div class="min-h-screen bg-white {className}">
  <!-- Navigation spacer - accounts for fixed nav height -->
  <div class="h-24"></div>

  <!-- Page content - full width to allow section backgrounds to extend -->
  <div class="w-full">
    {@render children()}
  </div>
</div>
