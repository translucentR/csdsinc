<script lang="ts">
  import { onMount } from "svelte";

  type CookiePreferences = {
    necessary: boolean;
    analytics: boolean;
  };

  export let onPreferencesChanged:
    | ((prefs: CookiePreferences) => void)
    | undefined = undefined;

  let showBanner = false;
  let preferences: CookiePreferences = {
    necessary: true, // Always true as these are essential
    analytics: false,
  };

  onMount(() => {
    const saved = localStorage.getItem("cookie-preferences");
    if (!saved) {
      showBanner = true;
    } else {
      preferences = JSON.parse(saved);
      applyPreferences(preferences);
    }

    // Listen for cookie preferences event
    const showPreferences = () => (showBanner = true);
    window.addEventListener("show-cookie-preferences", showPreferences);

    return () => {
      window.removeEventListener("show-cookie-preferences", showPreferences);
    };
  });

  function savePreferences(acceptAll = false) {
    if (acceptAll) {
      preferences.analytics = true;
    }

    localStorage.setItem("cookie-preferences", JSON.stringify(preferences));
    showBanner = false;
    applyPreferences(preferences);
    onPreferencesChanged?.(preferences);
  }

  function applyPreferences(prefs: CookiePreferences) {
    if (prefs.analytics) {
      // Enable Analytics
      window["ga-disable-G-B07QT9XZBS"] = false;
      // Properly enable Clarity with consent
      window.clarity?.("consent");

      if (typeof gtag === "undefined") {
        window.initializeAnalytics?.();
      }
    } else {
      // Disable Analytics
      window["ga-disable-G-B07QT9XZBS"] = true;
      // Properly disable Clarity and erase cookies
      window.clarity?.("consent", false);

      window.gtag?.("consent", "update", {
        analytics_storage: "denied",
      });
    }
  }
</script>

{#if showBanner}
  <div
    class="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 p-4 z-50"
  >
    <div
      class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4"
    >
      <div class="text-sm text-gray-600">
        <p class="mb-2">
          We use cookies to enhance your browsing experience and analyze our
          traffic. Please choose your preferences below.
        </p>
        <div class="flex items-center gap-4">
          <label class="flex items-center">
            <input
              type="checkbox"
              checked={preferences.necessary}
              disabled
              class="rounded border-gray-300 text-blue-600 mr-2"
            />
            Necessary
          </label>
          <label class="flex items-center">
            <input
              type="checkbox"
              bind:checked={preferences.analytics}
              class="rounded border-gray-300 text-blue-600 mr-2"
            />
            Analytics
          </label>
        </div>
      </div>
      <div class="flex gap-3">
        <button
          on:click={() => savePreferences(false)}
          class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
        >
          Save Preferences
        </button>
        <button
          on:click={() => savePreferences(true)}
          class="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
        >
          Accept All
        </button>
      </div>
    </div>
  </div>
{/if}
