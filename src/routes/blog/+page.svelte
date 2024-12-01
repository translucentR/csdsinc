<script lang="ts">
  import type { BlogPost } from "$lib/services/blog";
  import { formatDate } from "$lib/utils/date";

  export let data: { posts: BlogPost[] };
</script>

<div class="bg-white py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        CSDS Blog
      </h2>
      <p class="mt-2 text-lg leading-8 text-gray-600">
        Stay updated with the latest in IT solutions, cybersecurity, and
        technology trends.
      </p>
      <div
        class="mt-10 space-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16"
      >
        {#each data.posts as post}
          <article class="flex max-w-xl flex-col items-start">
            <div class="flex items-center gap-x-4 text-xs">
              <time datetime={post.date} class="text-gray-500">
                {formatDate(post.date)}
              </time>
              {#each post.categories as category}
                <span
                  class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600"
                >
                  {category}
                </span>
              {/each}
            </div>
            <div class="group relative">
              <h3
                class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600"
              >
                <a href="/blog/{post.slug}">
                  {post.title}
                </a>
              </h3>
              <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                {post.excerpt}
              </p>
            </div>
          </article>
        {/each}
      </div>
    </div>
  </div>
</div>
