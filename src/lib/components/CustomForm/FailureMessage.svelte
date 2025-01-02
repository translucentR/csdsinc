<script lang="ts">
  export let message: string;
</script>

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
  <h2 class="text-2xl font-bold text-gray-900 mb-4">Submission Failed</h2>
  <p class="text-gray-600">
    {message || "An error occurred"}. Please try again.
  </p>
</div>
