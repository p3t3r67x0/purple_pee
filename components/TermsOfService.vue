<template>
<div class="container mx-auto px-4 py-8">
  <div class="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-2xl mx-3 md:mx-0 mb-6 px-6 py-8">
    <h1 class="text-3xl font-bold text-white mb-2">Terms of Service</h1>
    <small class="block text-sm text-white/70 mb-6">Last updated: {{ lastUpdated }}</small>

    <div class="space-y-8">
      <section>
        <h2 class="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
        <p class="text-white/80 leading-relaxed mb-4">
          By accessing and using NetScanner ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. 
          NetScanner is an open-source network intelligence platform provided free of charge for legitimate research, security analysis, and educational purposes.
        </p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold text-white mb-4">2. Description of Service</h2>
        <p class="text-white/80 leading-relaxed mb-4">
          NetScanner provides network intelligence tools including but not limited to:
        </p>
        <ul class="list-disc list-inside text-white/80 leading-relaxed mb-4 ml-4">
          <li>Domain and subdomain analysis</li>
          <li>SSL certificate monitoring</li>
          <li>DNS record lookups</li>
          <li>ASN and CIDR intelligence</li>
          <li>IP geolocation services</li>
          <li>Network infrastructure mapping</li>
        </ul>
      </section>

      <section>
        <h2 class="text-2xl font-semibold text-white mb-4">3. Acceptable Use Policy</h2>
        <h3 class="text-lg font-medium text-white/95 mb-3">Permitted Uses</h3>
        <ul class="list-disc list-inside text-white/80 leading-relaxed mb-4 ml-4">
          <li>Cybersecurity research and analysis</li>
          <li>Network administration and monitoring</li>
          <li>Educational and academic research</li>
          <li>Legitimate security assessments of your own infrastructure</li>
          <li>Open Source Intelligence (OSINT) gathering for lawful purposes</li>
        </ul>

        <h3 class="text-lg font-medium text-white/95 mb-3">Prohibited Uses</h3>
        <ul class="list-disc list-inside text-white/80 leading-relaxed mb-4 ml-4">
          <li>Any illegal activities or activities that violate applicable laws</li>
          <li>Unauthorized access to systems or networks</li>
          <li>Malicious scanning or attacks against third-party systems</li>
          <li>Harassment, stalking, or invasion of privacy</li>
          <li>Commercial use without proper authorization</li>
          <li>Automated abuse or excessive requests that may impact service availability</li>
          <li>Circumventing rate limits or security measures</li>
        </ul>
      </section>

      <section>
        <h2 class="text-2xl font-semibold text-white mb-4">4. Rate Limits and API Usage</h2>
        <p class="text-white/80 leading-relaxed mb-4">
          To ensure fair usage and service availability for all users, we implement rate limiting:
        </p>
        <ul class="list-disc list-inside text-white/80 leading-relaxed mb-4 ml-4">
          <li>API requests are limited to prevent abuse</li>
          <li>Excessive usage may result in temporary or permanent suspension</li>
          <li>Commercial usage may require separate agreements</li>
        </ul>
      </section>

      <section>
        <h2 class="text-2xl font-semibold text-white mb-4">5. Data and Privacy</h2>
        <p class="text-white/80 leading-relaxed mb-4">
          NetScanner processes publicly available information and does not collect personal data unless explicitly provided by users. 
          All data processed through our service is handled in accordance with our Privacy Policy.
        </p>
        <ul class="list-disc list-inside text-white/80 leading-relaxed mb-4 ml-4">
          <li>We do not store personal information from network scans</li>
          <li>Query logs may be retained for service optimization and security purposes</li>
          <li>Users are responsible for compliance with data protection laws in their jurisdiction</li>
        </ul>
      </section>

      <section>
        <h2 class="text-2xl font-semibold text-white mb-4">6. Disclaimer of Warranties</h2>
        <p class="text-white/80 leading-relaxed mb-4">
          NetScanner is provided "AS IS" without warranty of any kind. We make no representations or warranties regarding:
        </p>
        <ul class="list-disc list-inside text-white/80 leading-relaxed mb-4 ml-4">
          <li>Accuracy, completeness, or timeliness of information</li>
          <li>Uninterrupted or error-free service operation</li>
          <li>Fitness for a particular purpose</li>
          <li>Non-infringement of third-party rights</li>
        </ul>
      </section>

      <section>
        <h2 class="text-2xl font-semibold text-white mb-4">7. Limitation of Liability</h2>
        <p class="text-white/80 leading-relaxed mb-4">
          In no event shall NetScanner, its contributors, or maintainers be liable for any indirect, incidental, special, 
          consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, 
          or other intangible losses, resulting from your use of the service.
        </p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold text-white mb-4">8. User Responsibilities</h2>
        <p class="text-white/80 leading-relaxed mb-4">
          Users are solely responsible for:
        </p>
        <ul class="list-disc list-inside text-white/80 leading-relaxed mb-4 ml-4">
          <li>Compliance with all applicable laws and regulations</li>
          <li>Obtaining proper authorization before scanning third-party networks</li>
          <li>Respecting the rights and privacy of others</li>
          <li>Using the service ethically and responsibly</li>
          <li>Any consequences resulting from misuse of the service</li>
        </ul>
      </section>

      <section>
        <h2 class="text-2xl font-semibold text-white mb-4">9. Open Source License</h2>
        <p class="text-white/80 leading-relaxed mb-4">
          NetScanner is open-source software licensed under the MIT License. The source code is available on GitHub, 
          and contributions are welcome from the community. The open-source nature of this project means:
        </p>
        <ul class="list-disc list-inside text-white/80 leading-relaxed mb-4 ml-4">
          <li>You may modify and distribute the software according to the license terms</li>
          <li>No warranty is provided with the software</li>
          <li>Contributors are not liable for any damages</li>
        </ul>
      </section>

      <section>
        <h2 class="text-2xl font-semibold text-white mb-4">10. Service Modifications</h2>
        <p class="text-white/80 leading-relaxed mb-4">
          We reserve the right to modify, suspend, or discontinue the service at any time without notice. 
          As an open-source project, the community may continue development independently.
        </p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold text-white mb-4">11. Termination</h2>
        <p class="text-white/80 leading-relaxed mb-4">
          We may terminate or suspend access to the service immediately, without prior notice, for conduct that we believe:
        </p>
        <ul class="list-disc list-inside text-white/80 leading-relaxed mb-4 ml-4">
          <li>Violates these Terms of Service</li>
          <li>Is harmful to other users or the service</li>
          <li>Violates applicable laws or regulations</li>
        </ul>
      </section>

      <section>
        <h2 class="text-2xl font-semibold text-white mb-4">12. Governing Law</h2>
        <p class="text-white/80 leading-relaxed mb-4">
          These Terms shall be interpreted and governed by the laws of Germany. 
          Any disputes shall be resolved in the competent courts of Hamburg, Germany.
        </p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold text-white mb-4">13. Changes to Terms</h2>
        <p class="text-white/80 leading-relaxed mb-4">
          We reserve the right to update these terms at any time. Users will be notified of significant changes, 
          and continued use of the service after such changes constitutes acceptance of the new terms.
        </p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold text-white mb-4">14. Contact Information</h2>
        <p class="text-white/80 leading-relaxed mb-4">
          If you have any questions about these Terms of Service, please contact us at:
        </p>
        <address class="text-white/90 font-medium not-italic">
          E-Mail: {{ config.public.IMPRINT_EMAIL }}<br>
          Project: <a href="https://github.com/p3t3r67x0/purple_pee" target="_blank" class="text-blue-400 hover:text-blue-300 underline">GitHub Repository</a>
        </address>
      </section>
    </div>
  </div>
</div>
</template>

<script setup>
const config = useRuntimeConfig()
const lastUpdated = new Date().toLocaleDateString('en-US', { 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric' 
})

// SEO meta
useHead({
  title: 'Terms of Service',
  meta: [
    {
      name: 'description',
      content: 'Terms of Service for NetScanner - Open source network intelligence platform. Learn about acceptable use, privacy, and legal obligations when using our cybersecurity research tools.'
    },
    {
      name: 'keywords',
      content: 'terms of service, NetScanner, network intelligence, cybersecurity, open source, legal, privacy, acceptable use policy'
    },
    {
      property: 'og:title',
      content: 'NetScanner Terms of Service'
    },
    {
      property: 'og:description',
      content: 'Terms of Service for NetScanner open source network intelligence platform.'
    }
  ]
})
</script>