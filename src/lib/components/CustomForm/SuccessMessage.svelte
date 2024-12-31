<script lang="ts">
  export let message: string;
</script>

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
  <p class="text-gray-600">{message}</p>
</div>
