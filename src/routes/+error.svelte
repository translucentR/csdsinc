<script lang="ts">
  import { page } from "$app/stores";
  import { base } from "$app/paths";
</script>

<div
  class="min-h-[40vh] flex items-center justify-center px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8"
>
  <div class="max-w-max mx-auto">
    <main class="sm:flex">
      <p class="text-4xl font-bold tracking-tight text-[#0066cc] sm:text-5xl">
        {$page.status}
      </p>
      <div class="sm:ml-6">
        <div class="sm:border-l sm:border-gray-200 sm:pl-6">
          <h1
            class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
          >
            Page not found
          </h1>
          <p class="mt-1 text-base text-gray-500">
            Please check the URL in the address bar and try again.
          </p>
        </div>
        <div
          class="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6"
        >
          <a
            href="{base}/"
            class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#0066cc] hover:bg-[#0052a3] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0066cc]"
          >
            Go back home
          </a>
          <a
            href="{base}/support"
            class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-[#0066cc] bg-[#0066cc]/10 hover:bg-[#0066cc]/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0066cc]"
          >
            Contact support
          </a>
        </div>
      </div>
    </main>
  </div>
</div>
