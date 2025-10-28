<script lang="ts">
  import { termsSchema } from "./structured-data";
</script>

<svelte:head>
  <link rel="canonical" href="https://csdsinc.net/terms" />
  {@html `<script type="application/ld+json">${JSON.stringify(termsSchema)}<\/script>`}
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
  <h1 class="text-3xl font-bold text-gray-900 mb-8">Terms of Service</h1>

  <div class="prose prose-lg max-w-none">
    <p class="text-gray-600 mb-6">
      Last updated: {new Date().toLocaleDateString()}
    </p>

    <section class="mb-8">
      <h2 class="text-2xl font-semibold text-gray-900 mb-4">
        1. Agreement to Terms
      </h2>
      <p class="text-gray-600">
        By accessing or using our services, you agree to be bound by these Terms
        of Service. If you disagree with any part of the terms, you may not
        access our services.
      </p>
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-semibold text-gray-900 mb-4">2. Services</h2>
      <p class="text-gray-600 mb-4">
        We provide IT services and solutions as described on our website. We
        reserve the right to modify, suspend, or discontinue any part of our
        services at any time.
      </p>
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-semibold text-gray-900 mb-4">
        3. Service Level Agreements
      </h2>
      <p class="text-gray-600 mb-4">
        Specific service levels and response times will be detailed in
        individual service agreements. Our standard service hours are Monday
        through Friday, 9:00 AM to 5:00 PM Eastern Time.
      </p>
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-semibold text-gray-900 mb-4">
        4. Payment Terms
      </h2>
      <p class="text-gray-600">
        Payment terms are specified in individual service agreements. Unless
        otherwise stated, invoices are due within 30 days of receipt.
      </p>
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-semibold text-gray-900 mb-4">
        5. Intellectual Property
      </h2>
      <p class="text-gray-600">
        All content, features, and functionality of our services are owned by
        CSDS and are protected by international copyright, trademark, and other
        intellectual property laws.
      </p>
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-semibold text-gray-900 mb-4">
        6. Limitation of Liability
      </h2>
      <p class="text-gray-600">
        CSDS shall not be liable for any indirect, incidental, special,
        consequential, or punitive damages resulting from your use of our
        services.
      </p>
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-semibold text-gray-900 mb-4">
        7. Contact Information
      </h2>
      <p class="text-gray-600">
        Questions about these Terms should be sent to us at:
        <a
          href="mailto:legal@csdsinc.net"
          class="text-primary hover:text-primary-dark">legal@csdsinc.net</a
        >
      </p>
    </section>
  </div>
</div>
