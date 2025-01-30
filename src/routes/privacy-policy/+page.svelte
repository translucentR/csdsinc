<script lang="ts">
  import { privacyPolicySchema } from "./structured-data";
</script>

<svelte:head>
  <script type="application/ld+json">
    {JSON.stringify(privacyPolicySchema)}
  </script>
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
  <h1 class="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

  <div class="prose prose-lg max-w-none">
    <p class="text-gray-600 mb-6">
      Last updated: {new Date().toLocaleDateString()}
    </p>

    <section class="mb-8">
      <h2 class="text-2xl font-semibold text-gray-900 mb-4">
        1. Information We Collect
      </h2>
      <p class="text-gray-600 mb-4">
        We collect information that you provide directly to us, including:
      </p>
      <ul class="list-disc pl-6 text-gray-600 space-y-2">
        <li>Name and contact information</li>
        <li>Company information</li>
        <li>Account credentials</li>
        <li>Payment information</li>
        <li>Communications and feedback</li>
      </ul>
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-semibold text-gray-900 mb-4">
        2. How We Use Your Information
      </h2>
      <p class="text-gray-600 mb-4">We use the information we collect to:</p>
      <ul class="list-disc pl-6 text-gray-600 space-y-2">
        <li>Provide and maintain our services</li>
        <li>Process your transactions</li>
        <li>Send you technical notices and support messages</li>
        <li>Respond to your comments and questions</li>
        <li>Improve our services</li>
      </ul>
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-semibold text-gray-900 mb-4">
        3. Information Sharing
      </h2>
      <p class="text-gray-600">
        We do not sell, trade, or rent your personal information to third
        parties. We may share your information only in the following
        circumstances:
      </p>
      <ul class="list-disc pl-6 text-gray-600 space-y-2 mt-4">
        <li>With your consent</li>
        <li>To comply with legal obligations</li>
        <li>To protect our rights and property</li>
      </ul>
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-semibold text-gray-900 mb-4">4. Security</h2>
      <p class="text-gray-600">
        We implement appropriate technical and organizational measures to
        maintain the security of your personal information.
      </p>
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-semibold text-gray-900 mb-4">5. Contact Us</h2>
      <p class="text-gray-600">
        If you have any questions about this Privacy Policy, please contact us
        at:
        <a
          href="mailto:privacy@csdsinc.net"
          class="text-primary hover:text-primary-dark">privacy@csdsinc.net</a
        >
      </p>
    </section>
  </div>
</div>
