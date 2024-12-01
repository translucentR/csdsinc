<script lang="ts">
  import type { BlogPost } from "$lib/services/blog";
  import { formatDate } from "$lib/utils/date";

  export let data: { post: BlogPost };
</script>

<article class="bg-white py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl">
      <div class="flex items-center gap-x-4 text-xs">
        <time datetime={data.post.date} class="text-gray-500">
          {formatDate(data.post.date)}
        </time>
        {#each data.post.categories as category}
          <span
            class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600"
          >
            {category}
          </span>
        {/each}
      </div>
      <h1 class="mt-6 text-4xl font-bold tracking-tight text-gray-900">
        {data.post.title}
      </h1>
      <div class="mt-10 prose prose-lg prose-primary">
        {@html data.post.content}
      </div>
    </div>
  </div>
</article>
