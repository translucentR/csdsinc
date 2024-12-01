<script lang="ts">
  let { title, mainContent, microContent } = $props<{
    title: string;
    mainContent: string;
    microContent: {
      title: string;
      content: string;
    };
  }>();
</script>

<section class="py-16 bg-gray-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Main About Section -->
    <div class="text-center mb-16">
      <h2 class="text-3xl font-bold text-secondary sm:text-4xl">
        {title}
      </h2>
      <p class="mt-6 text-lg leading-relaxed text-gray-600 max-w-4xl mx-auto">
        {mainContent}
      </p>
    </div>

    <!-- Microbusiness Section -->
    <div class="bg-white rounded-2xl shadow-xl p-8 lg:p-12 mt-12">
      <div class="max-w-3xl mx-auto">
        <h3 class="text-2xl font-bold text-primary mb-6">
          {microContent.title}
        </h3>
        <p class="text-lg text-gray-600 leading-relaxed">
          {microContent.content}
        </p>
      </div>
    </div>
  </div>
</section>
