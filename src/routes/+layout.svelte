<script lang="ts">
  import "../app.css";
  import Navigation from "$lib/components/Navigation.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import CookieConsent from "$lib/components/CookieConsent.svelte";
  import { navigationItems } from "$lib/types/navigation";
  import type { SocialLink } from "$lib/types/common";
  let { children } = $props();

  // Footer data
  const footerColumns = [
    {
      title: "Company",
      links: [
        { title: "About", href: "/about" },
        { title: "Services", href: "/services" },
        { title: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Support",
      links: [
        { title: "Support Center", href: "/support" },
        // { title: "Knowledge Base", href: "/resources" },
        // { title: "FAQ", href: "/faq" },
      ],
    },
  ];

  const socialLinks: SocialLink[] = [
    {
      platform: "linkedin",
      href: "https://www.linkedin.com/company/computer-systems-development-services-inc",
    },
  ];
</script>

<Navigation items={navigationItems} />

<main>
  {@render children()}
</main>

<Footer columns={footerColumns} socials={socialLinks} />
<CookieConsent />
