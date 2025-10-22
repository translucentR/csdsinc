<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;

  // Clean up Word HTML and extract body content
  function cleanWordHtml(html: string): string {
    // Extract content between <body> tags, or use full content if no body tags
    const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    let content = bodyMatch ? bodyMatch[1] : html;

    // Remove Word-specific elements and attributes
    content = content
      // Remove Word XML namespaces and conditional comments
      .replace(/<!--\[if[^>]*>[\s\S]*?<!\[endif\]-->/gi, "")
      .replace(/<\?xml[^>]*>/gi, "")
      .replace(/<o:[^>]*>[\s\S]*?<\/o:[^>]*>/gi, "")
      .replace(/<w:[^>]*>[\s\S]*?<\/w:[^>]*>/gi, "")
      .replace(/<v:[^>]*>[\s\S]*?<\/v:[^>]*>/gi, "")
      .replace(/<m:[^>]*>[\s\S]*?<\/m:[^>]*>/gi, "")

      // Remove Word-specific attributes and classes
      .replace(/\s*class="Mso[^"]*"/gi, "")
      .replace(/\s*style="[^"]*mso-[^"]*[^"]*"/gi, "")
      .replace(/\s*lang="[^"]*"/gi, "")
      .replace(/\s*xml:lang="[^"]*"/gi, "")

      // Remove empty attributes
      .replace(/\s*class=""/gi, "")
      .replace(/\s*style=""/gi, "")

      // Clean up excessive whitespace
      .replace(/\s+/g, " ")
      .replace(/>\s+</g, "><")
      .trim();

    return content;
  }

  $: cleanedHtml = cleanWordHtml(data.htmlContent);
</script>

<svelte:head>
  <title>Master Service Agreement - CSDS Inc.</title>
  <meta name="robots" content="noindex, nofollow" />
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-3xl font-bold mb-4">Master Service Agreement</h1>
  <p class="text-gray-600 mb-6">As of May 1, 2025</p>

  <div class="w-full">
    <article class="w-full max-w-none">
      <div
        class="prose prose-neutral md:prose-lg lg:prose-xl max-w-none text-justify"
      >
        {@html cleanedHtml}
      </div>
    </article>
  </div>
</div>
