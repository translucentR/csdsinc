<script lang="ts">
  import { base } from "$app/paths";
  interface Strength {
    title: string;
    description: string;
    icon: string;
  }

  const strengths: Strength[] = [
    {
      title: "Peace of Mind",
      description:
        "Our clients describe us as trustworthy, fast, and very responsive to their daily needs",
      icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
    },
    {
      title: "Resources",
      description:
        "Our 24x7 Network Operations Center employs over 700 technicians",
      icon: "M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z",
    },
    {
      title: "Security",
      description: "No Ransomware… Guaranteed",
      icon: "M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z",
    },
    {
      title: "Uptime",
      description:
        "CSDS will have your backup server running in 15 minutes or less",
      icon: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z",
    },
    {
      title: "Access & Availability",
      description:
        "Our clients say that we respond quickly to all of their computer related questions and needs",
      icon: "M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z",
    },
  ];
</script>

<div class="bg-white">
  <!-- Hero Section with Background -->
  <div class="relative">
    <!-- Background image -->
    <div class="absolute inset-0 z-0">
      <img
        src="{base}/cleveland-background.jpg"
        alt="Cleveland skyline"
        class="w-full h-full object-cover object-center"
      />
      <div class="absolute inset-0 bg-black/50"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 px-6 lg:px-8 text-center">
      <div class="mx-auto max-w-3xl py-32">
        <h1
          class="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-4"
        >
          IT that works for you
        </h1>
        <p class="text-lg leading-7 text-gray-100 max-w-2xl mx-auto">
          Started in 1994, Computer Systems Development Services is a complete
          technology solution provider. We are 100% committed to making sure
          business owners have the most reliable and professional IT service in
          Cleveland.
        </p>
      </div>
    </div>
  </div>

  <!-- Main Content -->
  <div class="bg-gray-50">
    <div class="mx-auto max-w-7xl px-6 lg:px-8 py-16">
      <div class="mx-auto max-w-3xl text-center">
        <h2
          class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4"
        >
          Why Choose CSDS?
        </h2>
        <p class="text-lg leading-7 text-gray-600">
          Our team of talented IT professionals can solve your IT issues once
          and for all. Here's why so many businesses depend on Computer Systems
          Development Services for complete IT services and support:
        </p>
      </div>

      <!-- Strengths Grid -->
      <div class="mx-auto mt-12 max-w-5xl">
        <div class="grid grid-cols-2 gap-6">
          {#each strengths.slice(0, 4) as strength}
            <div
              class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0">
                  <div
                    class="flex h-12 w-12 items-center justify-center rounded-sm bg-white"
                  >
                    <svg
                      class="h-6 w-6 text-[#0066cc]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d={strength.icon}
                      />
                    </svg>
                  </div>
                </div>
                <div class="flex-1">
                  <h3 class="text-lg font-bold text-gray-900 mb-2">
                    {strength.title}
                  </h3>
                  <p class="text-gray-600 text-base leading-relaxed">
                    {strength.description}
                  </p>
                </div>
              </div>
            </div>
          {/each}
        </div>

        <!-- Last item centered -->
        <div class="mt-6 flex justify-center">
          <div
            class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 max-w-md w-full"
          >
            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0">
                <div
                  class="flex h-12 w-12 items-center justify-center rounded-sm bg-white"
                >
                  <svg
                    class="h-6 w-6 text-[#0066cc]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d={strengths[4].icon}
                    />
                  </svg>
                </div>
              </div>
              <div class="flex-1">
                <h3 class="text-lg font-bold text-gray-900 mb-2">
                  {strengths[4].title}
                </h3>
                <p class="text-gray-600 text-base leading-relaxed">
                  {strengths[4].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom CTA -->
      <div class="mx-auto mt-16 max-w-2xl text-center">
        <p class="text-gray-600 mb-6">
          Our custom service packages deliver what you need while respecting the
          boundaries of your budget. Computer Systems Development Services is
          your business partner.
        </p>
        <div class="flex items-center justify-center gap-x-4">
          <a
            href={`${base}/contact`}
            class="rounded bg-[#0066cc] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#0052a3]"
          >
            Get Started Today
          </a>
          <a
            href={`${base}/services`}
            class="text-sm font-semibold text-gray-900 hover:text-[#0066cc]"
          >
            Learn More →
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
