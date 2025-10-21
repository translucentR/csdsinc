<script lang="ts">
  import { base } from "$app/paths";
  import { imageCreditsSchema } from "./structured-data";
</script>

<svelte:head>
  <title>Image Credits | CSDS</title>
  <meta
    name="description"
    content="Image credits and attributions for photos used on the CSDS website."
  />
  <script type="application/ld+json">
    {JSON.stringify(imageCreditsSchema)}
  </script>
</svelte:head>

<div class="bg-white">
  <!-- Hero Section -->
  <div class="bg-gray-50 py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:text-center">
        <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Image Credits
        </h1>
        <p class="mt-6 text-lg leading-8 text-gray-600">
          We gratefully acknowledge the photographers and creators whose work
          enhances our website.
        </p>
      </div>
    </div>
  </div>

  <!-- Credits Section -->
  <div class="py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-4xl">
        <div class="space-y-12">
          <!-- Custom Development Image -->
          <div class="border-b border-gray-200 pb-8">
            <h2 class="text-xl font-semibold text-gray-900 mb-4">
              Custom Development Page
            </h2>
            <div class="bg-gray-50 rounded-lg p-6">
              <p class="text-gray-700 mb-2">
                <strong>Image:</strong> Computer screen with code
              </p>
              <p class="text-gray-600 text-sm">
                Photo by <a
                  href="https://unsplash.com/@cdr6934?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
                  class="text-primary hover:text-primary-dark underline"
                  >Chris Ried</a
                >
                on
                <a
                  href="https://unsplash.com/photos/a-computer-screen-with-a-bunch-of-code-on-it-ieic5Tq8YMk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
                  class="text-primary hover:text-primary-dark underline"
                  >Unsplash</a
                >
              </p>
            </div>
          </div>

          <!-- Additional credits can be added here as needed -->
          <div class="text-center text-gray-500 text-sm">
            <p>
              All images are used in accordance with their respective licenses.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
