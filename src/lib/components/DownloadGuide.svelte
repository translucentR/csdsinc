<script lang="ts">
  import type { BaseFormActionData } from "$lib/types/forms";
  import CustomForm from "./CustomForm/CustomForm.svelte";

  export let form: BaseFormActionData | undefined = undefined;
</script>

<div class="bg-gradient-to-b from-gray-50 to-white py-16 sm:py-24">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl text-center mb-16">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Not Ready To Call Us Just Yet?
      </h2>
      <p class="mt-6 text-lg leading-8 text-gray-600">
        Get our free guide: <br />
        <span class="font-semibold"
          >What You Should Expect To Pay For IT Support For Your Business</span
        >.
        <br /> Even if you aren't ready to make a change right now, this report will
        help you get exactly what you need from an IT service provider without all
        the unnecessary extras, hidden fees, and bloated costs.
      </p>
    </div>

    <div class="mx-auto max-w-xl">
      <CustomForm
        {form}
        action="/api/download-guide"
        submitText="Get My Free Copy"
        successMessage="Please check your email for the guide."
        formClass="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
      >
        <div class="grid grid-cols-1 gap-6">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700"
              >Name *</label
            >
            <input
              id="name"
              type="text"
              name="name"
              required
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#0066cc] focus:ring-[#0066cc]"
            />
          </div>

          <div>
            <label for="email" class="block text-sm font-medium text-gray-700"
              >Email *</label
            >
            <input
              id="email"
              type="email"
              name="email"
              required
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#0066cc] focus:ring-[#0066cc]"
            />
          </div>

          <div>
            <label for="phone" class="block text-sm font-medium text-gray-700"
              >Phone</label
            >
            <input
              id="phone"
              type="tel"
              name="phone"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#0066cc] focus:ring-[#0066cc]"
            />
          </div>

          <div>
            <label for="company" class="block text-sm font-medium text-gray-700"
              >Company</label
            >
            <input
              id="company"
              type="text"
              name="company"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#0066cc] focus:ring-[#0066cc]"
            />
          </div>
        </div>
      </CustomForm>
    </div>
  </div>
</div>
