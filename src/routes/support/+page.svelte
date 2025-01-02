<script lang="ts">
  import { base } from "$app/paths";
  import CustomForm from "$lib/components/CustomForm/CustomForm.svelte";
  import type { SupportFormActionData } from "$lib/types/forms";

  const supportOptions = [
    {
      title: "Phone Support",
      description: "Call us directly for immediate assistance",
      icon: "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z",
      action: {
        text: "Call 216-529-9019 ext. 102",
        href: "tel:2165299019,102",
      },
    },
    {
      title: "Remote Support",
      description: "Get help from our technicians remotely",
      icon: "M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25",
      action: {
        text: "Start Remote Session",
        href: "https://csds.screenconnect.com/",
      },
    },
  ];

  export let form: SupportFormActionData | undefined = undefined;

  $: formValues = form?.values ?? {};
</script>

<div class="bg-gray-50 py-16 sm:py-24">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <!-- Hero Section -->
    <div class="mx-auto max-w-2xl text-center mb-16">
      <h1
        class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-[#0066cc] to-[#0052a3]"
      >
        Support Center
      </h1>
      <p class="mt-6 text-lg leading-8 text-gray-600">
        Get the IT support you need, when you need it. Choose from our various
        support options below.
      </p>
      <p class="mt-4 text-base text-gray-600 italic">
        Please use the following contact information for technical support
        requests only. For all other inquiries please use the information and
        form on the <a
          href="{base}/contact"
          class="text-[#0066cc] hover:text-[#0052a3] underline">Contact Us</a
        >
        page.
      </p>
    </div>

    <!-- Support Options Grid -->
    <div class="grid gap-8 md:grid-cols-2 lg:w-2/3 mx-auto mb-16">
      {#each supportOptions as option}
        <div
          class="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
        >
          <div class="text-[#0066cc] mb-6">
            <svg
              class="w-10 h-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d={option.icon}
              />
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-gray-900 mb-4">
            {option.title}
          </h3>
          <p class="text-gray-600 leading-relaxed mb-8">
            {option.description}
          </p>
          <a
            href={option.action.href}
            target="_blank"
            class="inline-flex items-center px-5 py-2.5 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-[#0066cc] to-[#0052a3] hover:from-[#0052a3] hover:to-[#004080] shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {option.action.text}
          </a>
        </div>
      {/each}
    </div>

    <!-- Form Section -->
    <div class="mx-auto lg:w-2/3">
      <CustomForm
        {form}
        formClass="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
        submitText="Submit Support Request"
        successMessage="Your support request has been submitted successfully. We'll get back to you soon."
      >
        <!-- Header -->
        <h2 class="text-3xl font-bold text-gray-900 text-center mb-4">
          Create a Support Ticket
        </h2>
        <p class="text-gray-600 text-center mb-8">
          Need assistance? Submit a ticket and our team will respond promptly.
        </p>

        <!-- Form Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#0066cc] focus:ring-[#0066cc]"
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
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#0066cc] focus:ring-[#0066cc]"
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
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#0066cc] focus:ring-[#0066cc]"
              autocomplete="organization"
            />
          </div>

          <!-- Website -->
          <div>
            <label for="website" class="block text-sm font-medium text-gray-700"
              >Website</label
            >
            <input
              type="url"
              id="website"
              name="website"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#0066cc] focus:ring-[#0066cc]"
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
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#0066cc] focus:ring-[#0066cc]"
              autocomplete="email"
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
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#0066cc] focus:ring-[#0066cc]"
              autocomplete="tel"
            />
          </div>

          <!-- Mobile -->
          <div>
            <label for="mobile" class="block text-sm font-medium text-gray-700"
              >Mobile</label
            >
            <input
              type="tel"
              id="mobile"
              name="mobile"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#0066cc] focus:ring-[#0066cc]"
            />
          </div>

          <!-- Priority -->
          <div>
            <label
              for="priority"
              class="block text-sm font-medium text-gray-700">Priority</label
            >
            <select
              id="priority"
              name="priority"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#0066cc] focus:ring-[#0066cc]"
            >
              <option value="normal">Normal</option>
              <option value="high">High</option>
              <option value="urgent">Urgent</option>
            </select>
          </div>

          <!-- Subject (Full Width) -->
          <div class="col-span-full">
            <label for="subject" class="block text-sm font-medium text-gray-700"
              >Subject</label
            >
            <input
              type="text"
              id="subject"
              name="subject"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#0066cc] focus:ring-[#0066cc]"
            />
          </div>

          <!-- Message (Full Width) -->
          <div class="col-span-full">
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
        </div>
      </CustomForm>
    </div>
  </div>
</div>
