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

      console.log("Form submission URL:", {
        baseUrl,
        action,
        fullUrl: new URL(action, baseUrl).toString(),
      });
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
    console.log("1. Submit button clicked");
    event.preventDefault();
    event.stopPropagation();

    console.log("2. Form submission initial details:", {
      origin: window.location.origin,
      host: window.location.host,
      protocol: window.location.protocol,
      action: action,
      hasTurnstileToken: !!$turnstileStore.token,
    });

    // Add detailed logging here
    console.log("Pre-submission URL details:", {
      currentUrl: window.location.toString(),
      origin: window.location.origin,
      host: window.location.host,
      pathname: window.location.pathname,
      formAction: action,
    });

    if (isSubmitting) {
      console.log("Already submitting, returning");
      return false;
    }

    if (!$turnstileStore.token) {
      console.log("3. No Turnstile token, showing Turnstile");
      turnstileStore.showTurnstile();

      const unsubscribe = turnstileStore.subscribe((state) => {
        console.log("4. Turnstile state changed:", state);
        if (state.token) {
          console.log("5. Got Turnstile token");
          unsubscribe();
          if (action?.startsWith("/api/")) {
            console.log("6a. API route detected, using handleFormSubmission");
            handleFormSubmission();
          } else {
            console.log("6b. Regular route detected, using requestSubmit");
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
    console.log("7. Starting handleFormSubmission");
    status = "submitting";
    formErrors = {};

    try {
      const formData = new FormData(formElement);
      formData.append("cfTurnstileResponse", $turnstileStore.token || "");
      console.log("8. Form data prepared:", Object.fromEntries(formData));

      const url = new URL(action, window.location.href);
      console.log("9. About to fetch:", url.toString());

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

      console.log("10. Fetch completed, status:", response.status);
      try {
        const responseText = await response.text();
        console.log("Response text:", responseText);
        const result = JSON.parse(responseText);

        if (result.type === "failure") {
          status = "error";
          if (result.data?.errors) {
            formErrors = result.data.errors;
          } else if (result.data?.message) {
            form = { status: "error", message: result.data.message };
          }
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
          on:success={({ detail }) => turnstileStore.setToken(detail.token)}
          on:error={({ detail }) => turnstileStore.setError(detail.error)}
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
          on:success={({ detail }) => turnstileStore.setToken(detail.token)}
          on:error={({ detail }) => turnstileStore.setError(detail.error)}
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
