<script lang="ts">
  import { base } from "$app/paths";
  import type { FooterColumn, SocialLink } from "$lib/types/common";

  let { columns, socials } = $props<{
    columns: FooterColumn[];
    socials: SocialLink[];
  }>();

  const socialIcons: Record<SocialLink["platform"], string> = {
    linkedin: `<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>`,
  } as const;

  function getSocialIcon(platform: SocialLink["platform"]): string {
    return socialIcons[platform];
  }
</script>

<footer class="bg-secondary-light text-white">
  <div class="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
      <!-- Contact Information -->
      <div class="text-center md:text-left">
        <h3 class="text-lg font-semibold mb-3 md:mb-4">Contact</h3>
        <div class="space-y-2 md:space-y-3 text-gray-300">
          <p class="font-medium">Computer Systems Development Services</p>
          <div class="space-y-1">
            <p>
              <span class="font-medium">Phone:</span>
              <a
                href="tel:2165299019"
                class="hover:text-white transition-colors">216-529-9019</a
              >
            </p>
            <p>
              <span class="font-medium">Email:</span>
              <a
                href="mailto:info@csdsinc.net"
                class="hover:text-white transition-colors">info@csdsinc.net</a
              >
            </p>
          </div>
        </div>
      </div>

      <!-- Quick Links -->
      {#each columns as column}
        <div class="text-center md:text-left">
          <h3 class="text-lg font-semibold mb-3 md:mb-4">{column.title}</h3>
          <ul class="space-y-2">
            {#each column.links as link}
              <li>
                <a
                  href={`${base}${link.href}`}
                  class="text-gray-300 hover:text-white transition-colors"
                >
                  {link.title}
                </a>
              </li>
            {/each}
          </ul>
        </div>
      {/each}

      <!-- Social Links -->
      <div class="text-center md:text-left">
        <h3 class="text-lg font-semibold mb-3 md:mb-4">Connect With Us</h3>
        <div class="flex justify-center md:justify-start space-x-4">
          {#each socials as social}
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-300 hover:text-white transition-colors"
            >
              <span class="sr-only">{social.platform}</span>
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                {@html getSocialIcon(social.platform)}
              </svg>
            </a>
          {/each}
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="mt-8 pt-6 md:pt-8 border-t border-gray-700">
      <div
        class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
      >
        <p class="text-gray-300 text-sm text-center md:text-left">
          © {new Date().getFullYear()} Computer Systems Development Services. All
          rights reserved.
        </p>
        <div class="flex space-x-6">
          <a
            href={`${base}/privacy-policy`}
            class="text-gray-300 hover:text-white text-sm transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href={`${base}/terms`}
            class="text-gray-300 hover:text-white text-sm transition-colors"
          >
            Terms of Service
          </a>
          <button
            type="button"
            onclick={() =>
              window.dispatchEvent(new CustomEvent("show-cookie-preferences"))}
            class="text-gray-300 hover:text-white text-sm transition-colors"
          >
            Cookie Preferences
          </button>
        </div>
      </div>
    </div>
  </div>
</footer>
