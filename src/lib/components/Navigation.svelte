<script lang="ts">
  import { page } from "$app/stores";
  import { base } from "$app/paths";
  import type { NavItem } from "$lib/types/navigation";
  import { onMount } from "svelte";

  let { items } = $props<{
    items: NavItem[];
  }>();

  let navbar: HTMLElement;
  let scrolled = $state(false);
  let isMenuOpen = $state(false);

  onMount(() => {
    const handleScroll = () => {
      scrolled = window.scrollY > 20;
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
</script>

<nav
  bind:this={navbar}
  class="fixed w-full z-50 transition-all duration-300 {scrolled
    ? 'bg-white/90 backdrop-blur-sm shadow-md py-2'
    : 'bg-white py-4'}"
>
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-20">
      <div class="flex items-center">
        <div class="flex-shrink-0">
          <img
            class="h-14 w-auto transition-all duration-300 {scrolled
              ? 'scale-90'
              : ''}"
            src="{base}/logo-r-min.avif"
            alt="CSDS"
          />
        </div>

        <div class="hidden lg:ml-12 lg:flex lg:space-x-8">
          {#each items as item}
            <a
              href={`${base}${item.href}`}
              class="inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors duration-300 whitespace-nowrap {$page
                .url.pathname === item.href
                ? 'border-b-2 border-primary text-gray-900'
                : 'text-gray-600 hover:border-b-2 hover:border-primary hover:text-gray-900'}"
            >
              {item.title}
            </a>
          {/each}

          <a
            href="{base}/support"
            class="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition-colors duration-300 whitespace-nowrap"
          >
            Get Help
          </a>
        </div>
      </div>

      <div class="flex items-center space-x-4">
        <a
          href="tel:2165299019"
          class="flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-300"
        >
          <svg
            class="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <span class="text-sm font-medium whitespace-nowrap">216-529-9019</span
          >
        </a>

        <button
          onclick={() => (isMenuOpen = !isMenuOpen)}
          class="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-900 focus:outline-none"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {#if isMenuOpen}
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            {:else}
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            {/if}
          </svg>
        </button>
      </div>
    </div>
  </div>
</nav>

<!-- Overlay for mobile menu -->
{#if isMenuOpen}
  <button
    type="button"
    class="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
    onclick={() => (isMenuOpen = false)}
    onkeydown={(e) => e.key === "Escape" && (isMenuOpen = false)}
    aria-label="Close menu overlay"
  ></button>
{/if}

<!-- Mobile menu -->
<div
  class="fixed top-0 right-0 bottom-0 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 {isMenuOpen
    ? 'translate-x-0'
    : 'translate-x-full'}"
  role="dialog"
  aria-modal="true"
  aria-label="Navigation menu"
>
  <!-- Close button -->
  <button
    type="button"
    onclick={() => (isMenuOpen = false)}
    onkeydown={(e) => e.key === "Escape" && (isMenuOpen = false)}
    class="absolute top-6 right-4 p-2 text-gray-400 hover:text-gray-900 focus:outline-none"
    aria-label="Close navigation menu"
  >
    <span class="sr-only">Close menu</span>
    <svg
      class="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  </button>

  <div class="pt-24 pb-3 px-4">
    {#each items as item}
      <a
        href={`${base}${item.href}`}
        class="block py-2 text-base font-medium {$page.url.pathname ===
        item.href
          ? 'text-primary border-l-4 border-primary pl-3'
          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50 hover:border-l-4 hover:border-primary pl-3'}"
      >
        {item.title}
      </a>
    {/each}

    <div class="mt-6 pt-6 border-t border-gray-200">
      <a
        href="{base}/support"
        class="block w-full px-4 py-2 text-center text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition-colors duration-300"
      >
        Get Help
      </a>
    </div>
  </div>
</div>

<!-- Spacer -->
<div class="h-24"></div>
