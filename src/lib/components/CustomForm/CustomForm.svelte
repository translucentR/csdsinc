<script lang="ts">
  import { enhance } from "$app/forms";
  import type { FormStatus, BaseFormActionData } from "$lib/types/forms";
  import Turnstile from "../Turnstile.svelte";
  import { turnstileStore } from "$lib/stores/turnstile";
  import SuccessMessage from "./SuccessMessage.svelte";
  import FailureMessage from "./FailureMessage.svelte";
  import FormErrorMessages from "./FormErrorMessages.svelte";
  import SubmitButton from "./SubmitButton.svelte";
  import { browser } from "$app/environment";

  export let form: BaseFormActionData | undefined = undefined;
  export let method: "get" | "post" | "GET" | "POST" = "POST";
  export let title = "";
  export let action = "";
  export let submitText = "Submit";
  export let successMessage = "Form submitted successfully!";
  export let formClass =
    "bg-white p-8 rounded-xl shadow-lg border border-gray-100";

  let turnstileComponent: Turnstile;
  let status: FormStatus = "idle";
  let formErrors: Record<string, string> = {};
  let formElement: HTMLFormElement;

  $: if (browser) {
    try {
      const currentUrl = window.location;
      const baseUrl = currentUrl.origin;
      action = action || currentUrl.pathname;
    } catch (error) {
      console.error("Error in CustomForm initialization:", {
        error: error instanceof Error ? error.message : error,
        stack: error instanceof Error ? error.stack : undefined,
        currentUrl: window?.location?.toString(),
      });
    }
  }

  $: isSubmitting = status === "submitting";
  $: showSuccessMessage = form?.status === "success";
  $: showErrorMessage =
    form?.status === "error" &&
    form?.message &&
    !Object.keys(formErrors).length;

  const handleSubmit = async (event: SubmitEvent) => {
    event.preventDefault();
    event.stopPropagation();

    if (isSubmitting) {
      return false;
    }

    // Reset any previous errors
    formErrors = {};
    if (form?.status === "error") {
      form = undefined;
    }

    if (!$turnstileStore.token) {
      turnstileStore.showTurnstile();

      const unsubscribe = turnstileStore.subscribe((state) => {
        if (state.token) {
          unsubscribe();
          if (action?.startsWith("/api/")) {
            handleFormSubmission();
          } else {
            formElement?.requestSubmit();
          }
        }
      });
      return false;
    }

    if (action?.startsWith("/api/")) {
      handleFormSubmission();
      return false;
    }
  };

  async function handleFormSubmission() {
    status = "submitting";
    formErrors = {};

    try {
      const formData = new FormData(formElement);
      formData.append("cfTurnstileResponse", $turnstileStore.token || "");

      const url = new URL(action, window.location.href);

      const response = await fetch(url.toString(), {
        method: method,
        body: formData,
        headers: {
          "x-sveltekit-action": "true",
          accept: "application/json",
          cookie: document.cookie || "",
        },
        credentials: "same-origin",
      });

      try {
        const responseText = await response.text();
        const result = JSON.parse(responseText);

        if (result.type === "failure") {
          status = "error";
          if (result.data?.errors) {
            formErrors = result.data.errors;
          } else if (result.data?.message) {
            form = { status: "error", message: result.data.message };
          }
          // Reset turnstile for retry
          turnstileStore.reset();
          turnstileComponent?.reset();
        } else if (result.type === "success") {
          status = "success";
          formErrors = {};
          form = { status: "success" };
          turnstileStore.reset();
        }
      } catch (error) {
        status = "error";
        form = {
          status: "error",
          message: "An unexpected error occurred",
        };
        turnstileStore.reset();
        turnstileComponent?.reset();
      }
    } catch (error) {
      status = "error";
      form = {
        status: "error",
        message: "An unexpected error occurred",
      };
      turnstileStore.reset();
      turnstileComponent?.reset();
    }
  }
</script>

{#if showSuccessMessage}
  <SuccessMessage message={successMessage} />
{:else if showErrorMessage}
  <FailureMessage message={form?.message || "An error occurred"} />
{:else if action?.startsWith("/api/")}
  <form
    bind:this={formElement}
    {method}
    {action}
    on:submit|preventDefault={handleSubmit}
    novalidate
    class={formClass}
  >
    {#if title}
      <h2 class="text-2xl font-bold text-gray-900 mb-6 text-center">{title}</h2>
    {/if}

    <div class="grid grid-cols-1 gap-6">
      <slot />

      <div class="mt-6">
        <Turnstile
          bind:this={turnstileComponent}
          visible={$turnstileStore.visible}
          onSuccess={(token) => turnstileStore.setToken(token)}
          onError={(error) => turnstileStore.setError(error)}
        />

        <FormErrorMessages {formErrors} errorMessage={$turnstileStore.error} />
      </div>

      <SubmitButton
        {isSubmitting}
        disabled={isSubmitting ||
          ($turnstileStore.visible && !$turnstileStore.token)}
        {submitText}
      />
    </div>
  </form>
{:else}
  <form
    bind:this={formElement}
    {method}
    {action}
    on:submit|preventDefault={handleSubmit}
    novalidate
    class={formClass}
    use:enhance={({ formData }) => {
      formData.append("cfTurnstileResponse", $turnstileStore.token || "");
      status = "submitting";
      formErrors = {};

      return async ({ result, update }) => {
        if (result.type === "failure") {
          status = "error";
          await update();
          if (result.data?.errors) {
            formErrors = (result.data.errors as Record<string, string>) || {};
          } else {
            // Reset turnstile for retry
            turnstileStore.reset();
            turnstileComponent?.reset();
          }
        } else if (result.type === "success") {
          status = "success";
          formErrors = {};
          await update();
          turnstileStore.reset();
        }
      };
    }}
  >
    {#if title}
      <h2 class="text-2xl font-bold text-gray-900 mb-6 text-center">{title}</h2>
    {/if}

    <div class="grid grid-cols-1 gap-6">
      <slot />

      <div class="mt-6">
        <Turnstile
          bind:this={turnstileComponent}
          visible={$turnstileStore.visible}
          onSuccess={(token) => turnstileStore.setToken(token)}
          onError={(error) => turnstileStore.setError(error)}
        />

        <FormErrorMessages {formErrors} errorMessage={$turnstileStore.error} />
      </div>

      <SubmitButton
        {isSubmitting}
        disabled={isSubmitting ||
          ($turnstileStore.visible && !$turnstileStore.token)}
        {submitText}
      />
    </div>
  </form>
{/if}
