<script lang="ts">
  import type { BaseFormActionData } from "$lib/types/forms";
  import CustomForm from "./CustomForm/CustomForm.svelte";

  export let form: BaseFormActionData | undefined = undefined;
</script>

<div class="bg-gradient-to-b from-gray-50 to-white py-12 sm:py-16">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="grid lg:grid-cols-2 gap-12 items-start">
      <!-- Left side: Content and Image -->
      <div>
        <h2
          class="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-8"
        >
          Not Ready To Call Us Just Yet?
        </h2>

        <div class="flex gap-8 items-start">
          <div class="space-y-4">
            <p class="text-lg text-gray-600">
              Get our free guide: <span class="font-semibold"
                >What You Should Expect to Pay for IT Support for Your Business</span
              >
            </p>
            <p class="text-gray-600">
              Even if you aren't ready to make a change right now, this report
              will help you:
            </p>

            <!-- Benefits List -->
            <ul class="space-y-3">
              {#each ["Understand fair market rates for IT services", "Identify hidden fees and unnecessary extras", "Compare service provider offerings effectively", "Make informed decisions for your business"] as benefit}
                <li class="flex items-start">
                  <svg
                    class="h-5 w-5 text-primary mt-1 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="ml-2 text-gray-600">{benefit}</span>
                </li>
              {/each}
            </ul>
          </div>

          <picture class="flex-shrink-0">
            <!-- AVIF format -->
            <source
              type="image/avif"
              srcset="/guide-preview.avif 1x, /guide-preview@2x.avif 2x"
            />
            <!-- PNG fallback -->
            <img
              src="/guide-preview.png"
              srcset="/guide-preview.png 1x, /guide-preview@2x.png 2x"
              alt="IT Support Pricing Guide Preview"
              class="w-auto max-w-[174px] rounded-md"
              width="174"
              height="380"
              loading="eager"
            />
          </picture>
        </div>
      </div>

      <!-- Right side: Form -->
      <div class="md:sticky md:top-8">
        <CustomForm
          {form}
          action="/api/download-guide"
          submitText="Get My Free Copy"
          successMessage="Please check your email for the guide."
          formClass="bg-white p-6 rounded-xl shadow-md border border-gray-100 max-w-sm mx-auto"
        >
          <div class="grid grid-cols-1 gap-4">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700"
                >Name *</label
              >
              <input
                id="name"
                name="name"
                type="text"
                required
                autocomplete="name"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary text-sm"
              />
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-gray-700"
                >Email *</label
              >
              <input
                id="email"
                name="email"
                type="email"
                required
                autocomplete="email"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary text-sm"
              />
            </div>

            <div>
              <label for="phone" class="block text-sm font-medium text-gray-700"
                >Phone</label
              >
              <input
                id="phone"
                name="phone"
                type="tel"
                autocomplete="tel"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary text-sm"
              />
            </div>

            <div>
              <label
                for="company"
                class="block text-sm font-medium text-gray-700">Company</label
              >
              <input
                id="company"
                name="company"
                type="text"
                autocomplete="organization"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary text-sm"
              />
            </div>
          </div>
        </CustomForm>
      </div>
    </div>
  </div>
</div>
