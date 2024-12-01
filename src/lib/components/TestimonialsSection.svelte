<script lang="ts">
  import type { Testimonial } from "$lib/types/common";

  let { testimonials } = $props<{
    testimonials: Testimonial[];
  }>();
</script>

<section class="py-16">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2 class="text-3xl font-bold text-secondary sm:text-4xl">
        What Our Clients Say
      </h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each testimonials as testimonial}
        <div
          class="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
        >
          <div class="flex flex-col h-full">
            <!-- Quote Icon -->
            <div class="text-primary opacity-30 mb-4">
              <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"
                />
              </svg>
            </div>

            <!-- Quote Text -->
            <blockquote class="flex-grow mb-6">
              <p class="text-gray-600 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
            </blockquote>

            <!-- Author Info -->
            <div class="flex items-center">
              {#if testimonial.image}
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  class="w-12 h-12 rounded-full object-cover mr-4"
                />
              {:else}
                <div
                  class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4"
                >
                  <span class="text-primary font-semibold text-lg">
                    {testimonial.author[0]}
                  </span>
                </div>
              {/if}
              <div>
                <p class="font-semibold text-secondary">
                  {testimonial.author}
                </p>
                <p class="text-sm text-gray-500">
                  {testimonial.company}
                </p>
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
