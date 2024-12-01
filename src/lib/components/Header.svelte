<script>
  import { base } from "$app/paths";

  const navigation = [
    { name: "About", href: "about" },
    { name: "Services", href: "services" },
    { name: "Support", href: "support" },
    { name: "Blog", href: "blog" },
    { name: "Contact", href: "contact" },
  ];
</script>

<header class="bg-white">
  <nav
    class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
    aria-label="Global"
  >
    <div class="flex lg:flex-1">
      <a href={base} class="-m-1.5 p-1.5">
        <span class="sr-only">CSDS</span>
        <img
          class="h-8 w-auto"
          src="{base}/logo-r-min-blue.png"
          alt="CSDS Logo"
        />
      </a>
    </div>
    <!-- Navigation links -->
    <div class="hidden lg:flex lg:gap-x-12">
      {#each navigation as item}
        <a
          href={`${base}${item.href}`}
          class="text-sm font-semibold leading-6 text-gray-900"
        >
          {item.name}
        </a>
      {/each}
    </div>
  </nav>
</header>
