<script lang="ts">
  import { base } from "$app/paths";
  import "$lib/types/keap";
  import { onMount } from "svelte";

  function initializeKeapForms() {
    const keapForms = window.keapForms || {
      SNIPPET_VERSION: "1.1.0",
      appId: "gga774",
    };

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.crossOrigin = "anonymous";
    script.defer = true;
    script.src =
      "https://forms.keap.app/lib/public-form-embed.js?appId=gga774&version=1.1.0";

    script.onload = function () {
      const keapFormsAfterLoad = window.keapForms;

      if (!keapFormsAfterLoad.renderAllForms) {
        console.error("[Keap Forms] Error: could not load");
      } else {
        keapFormsAfterLoad.invoked = true;
        keapFormsAfterLoad.renderAllForms();
      }
    };

    const firstScriptTag = document.getElementsByTagName("script")[0];
    if (firstScriptTag?.parentNode) {
      firstScriptTag.parentNode.insertBefore(script, firstScriptTag);
    }
    window.keapForms = keapForms;
  }

  onMount(() => {
    if (typeof window !== "undefined") {
      initializeKeapForms();
    }
  });
</script>

<div class="bg-gray-50">
  <div class="relative py-16 sm:py-24">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center mb-16">
        <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Contact Us
        </h1>
        <p class="mt-6 text-lg leading-8 text-gray-600">
          We're excited to hear from you! Whether you're looking to transform
          your IT infrastructure or simply want to learn more about our
          services, we're here to help.
        </p>
      </div>

      <!-- Contact Information -->
      <div class="max-w-2xl mx-auto mb-16">
        <div class="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <h2 class="text-xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 class=" font-semibold text-gray-900 mb-2">Call Us</h3>
              <p class="text-gray-600">216-529-9019</p>
            </div>
            <div>
              <h3 class="text-base font-semibold text-gray-900 mb-2">
                Business Hours
              </h3>
              <p class="text-gray-600">
                Monday - Friday<br />
                8:00 AM - 5:00 PM EST
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Form Section Header -->
      <div class="max-w-2xl mx-auto mb-8 text-center">
        <p class="text-lg text-gray-600">Or fill out our contact form below</p>
      </div>

      <p
        class="max-w-2xl mt-4 mb-4 text-base text-gray-600 italic mx-auto text-center"
      >
        Please use the following form for business inquiries. For technical
        support, please use the information and form on the
        <a href="{base}/support" class="text-[#0066cc]">Support Center</a> page.
      </p>

      <!-- Keap Contact Form -->
      <div class="max-w-2xl mx-auto">
        <div
          data-form-slug="7864230974329737"
          data-env="production"
          data-path="contact-us/7864230974329737"
          class="keap-custom-form"
        ></div>
      </div>
    </div>
  </div>
</div>
