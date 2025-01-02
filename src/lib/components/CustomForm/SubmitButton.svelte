<script lang="ts">
  export let isSubmitting: boolean;
  export let disabled: boolean;
  export let submitText: string;
</script>

<button
  type="submit"
  {disabled}
  class="w-full inline-flex justify-center py-3 px-4 border border-transparent shadow-lg text-sm font-medium rounded-md text-white bg-gradient-to-r from-[#0066cc] to-[#0052a3] hover:from-[#0052a3] hover:to-[#004080] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0066cc] disabled:opacity-50 transition-all duration-300"
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
      />
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
    Sending...
  {:else}
    {submitText}
  {/if}
</button>
