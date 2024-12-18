<script lang="ts">
  import { base } from "$app/paths";
  import { enhance } from "$app/forms";
  import type { FormStatus } from "$lib/types/forms";
  import type { ActionData } from "./$types";

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
  export let form: ActionData = { status: "idle" };
  let status: FormStatus = "idle";

  $: showForm =
    status === "idle" ||
    status === "validating" ||
    (form?.status === "error" && form?.errors);

  $: isSubmitting = status === "submitting";

  $: showErrorMessage = form?.status === "error" && form?.message;
  $: showSuccessMessage = form?.status === "success";
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

    <!-- Form/Message Section -->
    <div class="mx-auto lg:w-2/3">
      {#if showForm}
        <form
          method="POST"
          novalidate
          class="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-6 bg-white p-8 rounded-xl shadow-lg border border-gray-100"
          use:enhance={({ formData }) => {
            const values = Object.fromEntries(formData);
            console.log("Client-side form values:", values);

            status = "validating";

            return async ({ result, update }) => {
              if (result.type === "failure") {
                if (result.data && "errors" in result.data) {
                  await update();
                  status = "error";
                  form = {
                    status: "error",
                    errors: result.data.errors,
                    values: result.data.values || values, // Fallback to original values
                  } as ActionData;
                } else {
                  await update();
                  status = "error";
                  form = {
                    status: "error",
                    message: result?.data?.message,
                    values: result?.data?.values || values, // Fallback to original values
                  } as ActionData;
                }
              } else if (result.type === "success") {
                status = "submitting";
                await update();
                form = { ...result.data, status: "submitting" } as ActionData;
              }
            };
          }}
        >
          {#if isSubmitting}
            <div
              class="col-span-1 md:col-span-2 p-4 bg-blue-50 rounded-lg text-sm text-blue-600 text-center"
            >
              <div class="flex items-center justify-center gap-2">
                <svg
                  class="animate-spin h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    class="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  ></circle>
                  <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Submitting your support request...
              </div>
            </div>
          {/if}
          <!-- Header spans full width -->
          <div class="col-span-1 md:col-span-2 text-center mb-4">
            <h2 class="text-3xl font-bold text-gray-900">
              Create a Support Ticket
            </h2>
            <p class="mt-4 text-gray-600">
              Need assistance? Submit a ticket and our team will respond
              promptly.
            </p>
          </div>
          <!-- Left Column -->
          <div class="space-y-6 md:space-y-4">
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
                bind:value={formValues.firstName}
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#0066cc] focus:ring-[#0066cc]"
              />
            </div>
            <!-- Company -->
            <div>
              <label
                for="company"
                class="block text-sm font-medium text-gray-700">Company</label
              >
              <input
                type="text"
                id="company"
                name="company"
                bind:value={formValues.company}
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
                bind:value={formValues.email}
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#0066cc] focus:ring-[#0066cc]"
              />
            </div>
            <!-- Mobile -->
            <div>
              <label
                for="mobile"
                class="block text-sm font-medium text-gray-700">Mobile</label
              >
              <input
                type="tel"
                id="mobile"
                name="mobile"
                bind:value={formValues.mobile}
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#0066cc] focus:ring-[#0066cc]"
              />
            </div>
          </div>

          <!-- Right Column -->
          <div class="space-y-6 md:space-y-4">
            <!-- Last Name -->
            <div>
              <label
                for="lastName"
                class="block text-sm font-medium text-gray-700"
                >Last Name *</label
              >
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                bind:value={formValues.lastName}
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#0066cc] focus:ring-[#0066cc]"
              />
            </div>
            <!-- Website -->
            <div>
              <label
                for="website"
                class="block text-sm font-medium text-gray-700">Website</label
              >
              <input
                type="url"
                id="website"
                name="website"
                bind:value={formValues.website}
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#0066cc] focus:ring-[#0066cc]"
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
                bind:value={formValues.phone}
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
                bind:value={formValues.priority}
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#0066cc] focus:ring-[#0066cc]"
              >
                <option value="normal">Normal</option>
                <option value="high">High</option>
                <option value="urgent">Urgent</option>
              </select>
            </div>
          </div>

          <!-- Full Width Fields -->
          <div class="col-span-1 md:col-span-2 space-y-6">
            <!-- Subject -->
            <div>
              <label
                for="subject"
                class="block text-sm font-medium text-gray-700">Subject</label
              >
              <input
                type="text"
                id="subject"
                name="subject"
                bind:value={formValues.subject}
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#0066cc] focus:ring-[#0066cc]"
              />
            </div>
            <!-- Message -->
            <div>
              <label
                for="message"
                class="block text-sm font-medium text-gray-700">Message *</label
              >
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                bind:value={formValues.message}
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#0066cc] focus:ring-[#0066cc]"
              ></textarea>
            </div>
          </div>

          <!-- Error messages -->
          <div class="col-span-1 md:col-span-2">
            {#if form?.errors}
              <ul class="mb-6 p-4 bg-red-50 rounded-lg text-sm text-red-600">
                {#each Object.values(form.errors) as error}
                  {#if error}
                    <li class="mb-1 last:mb-0">{error}</li>
                  {/if}
                {/each}
              </ul>
            {/if}
          </div>

          <!-- Button container -->
          <div class="col-span-1 md:col-span-2 flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              class="w-full md:w-auto min-w-[200px] inline-flex justify-center py-3 px-4 border border-transparent shadow-lg text-sm font-medium rounded-md text-white bg-gradient-to-r from-[#0066cc] to-[#0052a3] hover:from-[#0052a3] hover:to-[#004080] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0066cc] disabled:opacity-50 transition-all duration-300"
            >
              {#if isSubmitting}
                <svg
                  class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    class="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  ></circle>
                  <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Sending...
              {:else}
                Submit Support Request
              {/if}
            </button>
          </div>
        </form>
      {:else if showErrorMessage}
        <!-- Error Message -->
        <div
          class="text-center bg-white p-8 rounded-xl shadow-lg border border-gray-100"
        >
          <div class="rounded-full bg-red-100 p-4 mx-auto w-fit mb-4">
            <svg
              class="h-8 w-8 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <h2 class="text-2xl font-bold text-gray-900 mb-4">
            Submission Failed
          </h2>
          <p class="text-gray-600">
            {form?.message}. Please try again or contact us directly.
          </p>
        </div>
      {:else if showSuccessMessage}
        <!-- Success Message -->
        <div
          class="text-center bg-white p-8 rounded-xl shadow-lg border border-gray-100"
        >
          <div class="rounded-full bg-green-100 p-4 mx-auto w-fit mb-4">
            <svg
              class="h-8 w-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Thank You!</h2>
          <p class="text-gray-600">
            Your support request has been sent successfully. We'll get back to
            you soon.
          </p>
        </div>
      {/if}
    </div>
  </div>
</div>
