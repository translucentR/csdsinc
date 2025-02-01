<script lang="ts">
  import { base } from "$app/paths";
  import type { ContactFormActionData } from "$lib/types/forms";
  import CustomForm from "$lib/components/CustomForm/CustomForm.svelte";
  import { contactSchema } from "./structured-data";

  export let form: ContactFormActionData | undefined = undefined;
</script>

<svelte:head>
  {@html `<script type="application/ld+json">${JSON.stringify(contactSchema)}<\/script>`}
</svelte:head>

<div class="bg-gradient-to-b from-gray-50 to-white">
  <div class="relative py-16 sm:py-24">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <!-- Hero Section -->
      <div class="mx-auto max-w-2xl text-center mb-16">
        <h1
          class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-[#0066cc] to-[#0052a3]"
        >
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
        <div class="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
          <h2 class="text-xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="flex items-start space-x-4">
              <div class="rounded-full bg-blue-100 p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-[#0066cc]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-gray-900 mb-2">Call Us</h3>
                <p class="text-gray-600">
                  <a href="tel:2165299019" class="underline">216-529-9019</a>
                </p>
              </div>
            </div>
            <div class="flex items-start space-x-4">
              <div class="rounded-full bg-blue-100 p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-[#0066cc]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-gray-900 mb-2">Business Hours</h3>
                <p class="text-gray-600">
                  Monday - Friday<br />
                  8:00 AM - 5:00 PM EST
                </p>
              </div>
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
        <a
          href="{base}/support"
          class="text-[#0066cc] hover:text-[#0052a3] underline"
          >Support Center</a
        > page.
      </p>

      <div class="max-w-2xl mx-auto">
        <CustomForm
          {form}
          title="Get in Touch with CSDS"
          submitText="Send Message"
          successMessage="Your message has been sent successfully. We'll get back to you soon."
        >
          <!-- First Name -->
          <div>
            <label
              for="firstName"
              class="block text-sm font-medium text-gray-700"
              >First Name *</label
            >
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#0066cc] focus:ring-[#0066cc] hover:border-[#0066cc] transition-colors duration-200"
            />
          </div>

          <!-- Last Name -->
          <div>
            <label
              for="lastName"
              class="block text-sm font-medium text-gray-700">Last Name *</label
            >
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#0066cc] focus:ring-[#0066cc] hover:border-[#0066cc] transition-colors duration-200"
            />
          </div>

          <!-- Company -->
          <div>
            <label for="company" class="block text-sm font-medium text-gray-700"
              >Company</label
            >
            <input
              type="text"
              id="company"
              name="company"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#0066cc] focus:ring-[#0066cc] hover:border-[#0066cc] transition-colors duration-200"
            />
          </div>

          <!-- Email -->
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700"
              >Email *</label
            >
            <input
              type="email"
              id="email"
              name="email"
              required
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#0066cc] focus:ring-[#0066cc] hover:border-[#0066cc] transition-colors duration-200"
            />
          </div>

          <!-- Phone -->
          <div>
            <label for="phone" class="block text-sm font-medium text-gray-700"
              >Phone</label
            >
            <input
              type="tel"
              id="phone"
              name="phone"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#0066cc] focus:ring-[#0066cc] hover:border-[#0066cc] transition-colors duration-200"
            />
          </div>

          <!-- Message -->
          <div>
            <label for="message" class="block text-sm font-medium text-gray-700"
              >Message *</label
            >
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#0066cc] focus:ring-[#0066cc]"
            ></textarea>
          </div>
        </CustomForm>
      </div>
    </div>
  </div>
</div>
