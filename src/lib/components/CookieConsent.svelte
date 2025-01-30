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
    necessary: true,
    analytics: true,
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
      // Enable Analytics with proper cookie attributes
      window["ga-disable-G-B07QT9XZBS"] = false;
      window.gtag?.("consent", "update", {
        analytics_storage: "granted",
        cookie_flags: "SameSite=Lax;Secure",
      });

      // Enable Clarity with consent
      window.clarity?.("consent", true);

      if (typeof gtag === "undefined") {
        window.initializeAnalytics?.();
      }
    } else {
      // Disable all analytics and clear cookies
      window["ga-disable-G-B07QT9XZBS"] = true;
      window.clarity?.("consent", false);
      window.gtag?.("consent", "update", {
        analytics_storage: "denied",
      });

      // Clear existing cookies
      document.cookie.split(";").forEach((cookie) => {
        const [name] = cookie.split("=");
        if (
          name.trim().startsWith("_ga") ||
          name.trim().startsWith("_clarity")
        ) {
          document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=.csdsinc.net; SameSite=Lax; Secure`;
        }
      });
    }
  }
</script>

{#if showBanner}
  <div class="fixed inset-0 z-50">
    <!-- Darkened overlay -->
    <div class="absolute inset-0 bg-black bg-opacity-50"></div>

    <!-- Cookie consent form at bottom -->
    <div class="absolute bottom-0 left-0 right-0">
      <div class="bg-white p-8 shadow-xl max-w-4xl mx-auto mb-4 rounded-lg">
        <h2 class="text-2xl font-bold mb-4">Cookie Settings</h2>
        <p class="mb-6 text-gray-600">
          We use cookies to enhance your browsing experience and analyze our
          traffic. Please choose your preferences below.
        </p>

        <div class="space-y-4 mb-6">
          <div class="flex items-center justify-between">
            <label for="necessary-cookies" class="flex-grow">
              <span class="font-semibold">Necessary Cookies</span>
              <p class="text-sm text-gray-500">
                Required for the website to function properly
              </p>
            </label>
            <input
              type="checkbox"
              id="necessary-cookies"
              checked
              disabled
              aria-label="Necessary cookies (required)"
              class="h-5 w-5 text-primary rounded border-gray-300 focus:ring-primary"
            />
          </div>

          <div class="flex items-center justify-between">
            <label for="analytics-cookies" class="flex-grow">
              <span class="font-semibold">Analytics Cookies</span>
              <p class="text-sm text-gray-500">
                Help us understand how visitors interact with our website
              </p>
            </label>
            <input
              type="checkbox"
              id="analytics-cookies"
              bind:checked={preferences.analytics}
              aria-label="Analytics cookies (optional)"
              class="h-5 w-5 text-primary rounded border-gray-300 focus:ring-primary"
            />
          </div>
        </div>

        <div class="flex justify-end space-x-4">
          <button
            type="button"
            class="px-6 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors"
            on:click={() => savePreferences()}
          >
            Save Preferences
          </button>
          <button
            type="button"
            class="px-6 py-2 bg-primary text-white rounded hover:bg-primary-dark transition-colors"
            on:click={() => savePreferences(true)}
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  </div>
{/if}
