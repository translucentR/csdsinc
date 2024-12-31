<script lang="ts">
  export let formErrors: Record<string, string>;
  export let errorMessage: string | null;
</script>

{#if Object.keys(formErrors).length > 0}
  <div class="mb-6 p-4 bg-red-50 rounded-md border border-red-200">
    <ul class="list-disc list-inside text-sm text-red-600">
      {#each Object.entries(formErrors) as [field, error]}
        <li>{error}</li>
      {/each}
    </ul>
  </div>
{/if}
{#if errorMessage}
  <p class="mt-2 text-sm text-red-600">{errorMessage}</p>
{/if}
