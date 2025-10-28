<script lang="ts">
  import { onDestroy } from "svelte";

  export let visible = false;
  export let onSuccess: ((token: string) => void) | undefined = undefined;
  export let onError: ((error: string) => void) | undefined = undefined;

  let turnstileElement: HTMLDivElement;
  let widgetId: string | null = null;

  // Get the current domain
  const domain = typeof window !== "undefined" ? window.location.hostname : "";

  onDestroy(() => {
    if (widgetId) {
      window.turnstile?.remove(widgetId);
    }
  });

  $: if (visible && !widgetId && turnstileElement) {
    // Delay render slightly to ensure DOM is ready
    setTimeout(() => {
      if (!widgetId && turnstileElement) {
        renderTurnstile();
      }
    }, 0);
  }

  function renderTurnstile() {
    if (typeof window !== "undefined" && window.turnstile) {
      try {
        widgetId = window.turnstile.render(turnstileElement, {
          sitekey: "0x4AAAAAAA3B4vFfgbJRbHMw",
          theme: "light",
          callback: (token: string) => {
            onSuccess?.(token);
          },
          "error-callback": () => {
            onError?.("Turnstile verification failed");
            reset();
          },
          "refresh-expired": "auto",
        });
      } catch (e) {
        console.error("Turnstile: Render failed:", e);
      }
    }
  }

  export function reset() {
    if (widgetId) {
      window.turnstile?.reset(widgetId);
    }
  }
</script>

<div
  bind:this={turnstileElement}
  class:hidden={!visible}
  style="min-height: 65px"
></div>

<style>
  .hidden {
    display: none;
  }
</style>
