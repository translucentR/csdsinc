<script lang="ts">
  import { base } from "$app/paths";

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
</script>

<div class="bg-gray-50">
  <!-- Hero Section -->
  <div class="relative py-16">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Support Center
        </h1>
        <p class="mt-6 text-lg leading-8 text-gray-600">
          Get the IT support you need, when you need it. Choose from our various
          support options below.
        </p>
        <p class="mt-4 text-base text-gray-600 italic">
          Please use the following contact information for technical support
          requests only. For all other inquiries please use the information and
          form on the <a href="{base}/contact" class="text-[#0066cc]"
            >Contact Us</a
          >
          page.
        </p>
      </div>
    </div>
  </div>

  <!-- Support Options Grid -->
  <div class="mx-auto max-w-7xl px-6 pb-24 lg:px-8 mt-16">
    <div class="grid gap-8 md:grid-cols-2 lg:w-2/3 mx-auto">
      {#each supportOptions as option}
        <div
          class="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
        >
          <div class="text-[#0066cc] mb-4">
            <svg
              class="w-8 h-8"
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
          <h3 class="text-xl font-bold text-gray-900 mb-3">
            {option.title}
          </h3>
          <p class="text-gray-600 leading-relaxed mb-6">
            {option.description}
          </p>
          <a
            href={option.action.href}
            class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-[#0066cc] hover:bg-[#0052a3] transition-colors duration-300"
          >
            {option.action.text}
          </a>
        </div>
      {/each}
    </div>

    <!-- Support Form Section -->
    <div class="mt-16 max-w-2xl mx-auto">
      <h2 class="text-center text-2xl font-bold text-gray-900 mb-8">
        Or create a ticket and we'll get back to you quickly
      </h2>
      <form class="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
            />
          </div>
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
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
            />
          </div>
          <div>
            <label for="company" class="block text-sm font-medium text-gray-700"
              >Company</label
            >
            <input
              type="text"
              id="company"
              name="company"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
            />
          </div>
          <div>
            <label for="website" class="block text-sm font-medium text-gray-700"
              >Website</label
            >
            <input
              type="url"
              id="website"
              name="website"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
            />
          </div>
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700"
              >Email *</label
            >
            <input
              type="email"
              id="email"
              name="email"
              required
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
            />
          </div>
          <div>
            <label for="phone" class="block text-sm font-medium text-gray-700"
              >Phone</label
            >
            <input
              type="tel"
              id="phone"
              name="phone"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
            />
          </div>
          <div>
            <label for="mobile" class="block text-sm font-medium text-gray-700"
              >Mobile</label
            >
            <input
              type="tel"
              id="mobile"
              name="mobile"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
            />
          </div>
          <div>
            <label
              for="priority"
              class="block text-sm font-medium text-gray-700">Priority</label
            >
            <select
              id="priority"
              name="priority"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
            >
              <option value="normal">Normal</option>
              <option value="high">High</option>
              <option value="urgent">Urgent</option>
            </select>
          </div>
        </div>
        <div class="mt-6">
          <label for="subject" class="block text-sm font-medium text-gray-700"
            >Subject</label
          >
          <input
            type="text"
            id="subject"
            name="subject"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
          />
        </div>
        <div class="mt-6">
          <label for="message" class="block text-sm font-medium text-gray-700"
            >Message *</label
          >
          <textarea
            id="message"
            name="message"
            rows="4"
            required
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
          ></textarea>
        </div>
        <div class="mt-6">
          <button
            type="submit"
            class="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#0066cc] hover:bg-[#0052a3] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            Submit Support Request
          </button>
        </div>
      </form>
    </div>
  </div>
</div>
