<script lang="ts">
  import { onDestroy, createEventDispatcher } from "svelte";

  export let visible = false;
  const dispatch = createEventDispatcher<{
    success: { token: string };
    error: { error: string };
  }>();

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
            dispatch("success", { token });
          },
          "error-callback": () => {
            dispatch("error", { error: "Turnstile verification failed" });
            reset();
          },
          "refresh-expired": "auto",
        });
      } catch (e) {
        console.error("Failed to render Turnstile:", e);
      }
    }
  }

  export function reset() {
    if (widgetId) {
      window.turnstile?.reset(widgetId);
      widgetId = null;
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
