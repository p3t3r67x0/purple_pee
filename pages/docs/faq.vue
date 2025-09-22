<template>
  <div class="min-h-screen flex flex-col">
    <div class="flex-grow">
      <navheader></navheader>
      <modal v-if="modalVisible"></modal>
      
      <section class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10">
        <!-- Header -->
        <div class="text-center mb-12">
          <h1 class="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h1>
          <p class="text-slate-300 text-lg max-w-3xl mx-auto">
            Everything you need to know about NetScanner, from basic usage to advanced features and technical details.
          </p>
        </div>

        <!-- FAQ Content -->
        <div class="glass-panel rounded-3xl border border-white/10 bg-black/80 shadow-glass p-8">
          <div class="space-y-8">

            <!-- General Questions -->
            <div>
              <h2 class="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                <span class="w-8 h-8 bg-gradient-to-br from-cosmic-aurora to-sky-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">🌐</span>
                General Questions
              </h2>
              <div class="space-y-4">
                
                <div class="faq-item">
                  <button @click="toggleFaq('what-is-netscanner')" class="faq-question">
                    <span>What is NetScanner?</span>
                    <svg class="faq-icon" :class="{ 'rotate-180': openFaqs['what-is-netscanner'] }" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div v-if="openFaqs['what-is-netscanner']" class="faq-answer">
                    <p>NetScanner is a comprehensive open-source internet intelligence platform that provides deep insights into network infrastructure, security configurations, and digital assets. It combines multiple reconnaissance tools into a single, user-friendly interface for analyzing domains, IP addresses, ASNs, DNS records, SSL certificates, and more.</p>
                  </div>
                </div>

                <div class="faq-item">
                  <button @click="toggleFaq('who-uses-netscanner')" class="faq-question">
                    <span>Who uses NetScanner?</span>
                    <svg class="faq-icon" :class="{ 'rotate-180': openFaqs['who-uses-netscanner'] }" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div v-if="openFaqs['who-uses-netscanner']" class="faq-answer">
                    <p>NetScanner is used by:</p>
                    <ul class="list-disc list-inside mt-2 space-y-1">
                      <li><strong>Security Researchers:</strong> For threat hunting and vulnerability assessment</li>
                      <li><strong>Network Administrators:</strong> For infrastructure monitoring and analysis</li>
                      <li><strong>DevOps Teams:</strong> For deployment verification and security auditing</li>
                      <li><strong>Penetration Testers:</strong> For reconnaissance and attack surface mapping</li>
                      <li><strong>Digital Forensics Investigators:</strong> For evidence gathering and analysis</li>
                      <li><strong>IT Professionals:</strong> For network troubleshooting and optimization</li>
                    </ul>
                  </div>
                </div>

                <div class="faq-item">
                  <button @click="toggleFaq('is-netscanner-free')" class="faq-question">
                    <span>Is NetScanner free to use?</span>
                    <svg class="faq-icon" :class="{ 'rotate-180': openFaqs['is-netscanner-free'] }" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div v-if="openFaqs['is-netscanner-free']" class="faq-answer">
                    <p>Yes! NetScanner is completely free and open-source. You can use it without any registration, subscription fees, or hidden costs. The platform is funded by the community and maintained by volunteers who believe in open internet intelligence.</p>
                  </div>
                </div>

                <div class="faq-item">
                  <button @click="toggleFaq('legal-ethical')" class="faq-question">
                    <span>Is it legal and ethical to use NetScanner?</span>
                    <svg class="faq-icon" :class="{ 'rotate-180': openFaqs['legal-ethical'] }" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div v-if="openFaqs['legal-ethical']" class="faq-answer">
                    <p>NetScanner only accesses publicly available information and follows responsible disclosure practices. All data comes from legitimate sources like public DNS records, certificate transparency logs, and published WHOIS databases. However, users are responsible for ensuring their use complies with local laws and organizational policies.</p>
                  </div>
                </div>

              </div>
            </div>

            <!-- Features & Capabilities -->
            <div>
              <h2 class="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                <span class="w-8 h-8 bg-gradient-to-br from-emerald-400 to-green-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">🔍</span>
                Features & Capabilities
              </h2>
              <div class="space-y-4">

                <div class="faq-item">
                  <button @click="toggleFaq('what-can-scan')" class="faq-question">
                    <span>What can I scan with NetScanner?</span>
                    <svg class="faq-icon" :class="{ 'rotate-180': openFaqs['what-can-scan'] }" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div v-if="openFaqs['what-can-scan']" class="faq-answer">
                    <p>NetScanner can analyze:</p>
                    <ul class="list-disc list-inside mt-2 space-y-1">
                      <li><strong>Domain Names:</strong> DNS records, subdomains, hosting information</li>
                      <li><strong>IP Addresses:</strong> IPv4/IPv6, geolocation, ASN ownership</li>
                      <li><strong>SSL Certificates:</strong> Validity, issuer, certificate chain</li>
                      <li><strong>Network Ports:</strong> Open services, protocol detection</li>
                      <li><strong>HTTP Headers:</strong> Server information, security headers</li>
                      <li><strong>ASN Data:</strong> Network allocations, organization details</li>
                      <li><strong>CIDR Ranges:</strong> Network topology and routing</li>
                    </ul>
                  </div>
                </div>

                <div class="faq-item">
                  <button @click="toggleFaq('live-scan-feature')" class="faq-question">
                    <span>How does the Live Scan feature work?</span>
                    <svg class="faq-icon" :class="{ 'rotate-180': openFaqs['live-scan-feature'] }" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div v-if="openFaqs['live-scan-feature']" class="faq-answer">
                    <p>Live Scan performs real-time reconnaissance of a target domain or IP address. It establishes a WebSocket connection to our scanning infrastructure and provides instant results including DNS resolution, port scanning, SSL certificate analysis, and HTTP header inspection. Results are streamed live to your browser as they're discovered.</p>
                  </div>
                </div>

                <div class="faq-item">
                  <button @click="toggleFaq('match-conditions')" class="faq-question">
                    <span>What are Match Conditions and how do I use them?</span>
                    <svg class="faq-icon" :class="{ 'rotate-180': openFaqs['match-conditions'] }" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div v-if="openFaqs['match-conditions']" class="faq-answer">
                    <p>Match Conditions allow advanced filtering of domains based on specific criteria. Use the format <code>/match/{condition}:{query}</code> where condition can be:</p>
                    <ul class="list-disc list-inside mt-2 space-y-1">
                      <li><code>asn:13335</code> - Find domains on specific ASN</li>
                      <li><code>country:US</code> - Find domains in specific country</li>
                      <li><code>port:443</code> - Find domains with specific open ports</li>
                      <li><code>ssl:cloudflare</code> - Find domains with specific SSL issuers</li>
                      <li><code>status:200</code> - Find domains returning specific HTTP status</li>
                    </ul>
                  </div>
                </div>

                <div class="faq-item">
                  <button @click="toggleFaq('data-freshness')" class="faq-question">
                    <span>How fresh is the data in NetScanner?</span>
                    <svg class="faq-icon" :class="{ 'rotate-180': openFaqs['data-freshness'] }" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div v-if="openFaqs['data-freshness']" class="faq-answer">
                    <p>Data freshness varies by source:</p>
                    <ul class="list-disc list-inside mt-2 space-y-1">
                      <li><strong>Live Scans:</strong> Real-time, performed on demand</li>
                      <li><strong>DNS Records:</strong> Updated within 24-48 hours</li>
                      <li><strong>SSL Certificates:</strong> Updated daily from CT logs</li>
                      <li><strong>Port Data:</strong> Updated weekly through active scanning</li>
                      <li><strong>ASN/WHOIS:</strong> Updated monthly from registry sources</li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>

            <!-- Technical Questions -->
            <div>
              <h2 class="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                <span class="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">⚙️</span>
                Technical Questions
              </h2>
              <div class="space-y-4">

                <div class="faq-item">
                  <button @click="toggleFaq('api-access')" class="faq-question">
                    <span>Does NetScanner have an API?</span>
                    <svg class="faq-icon" :class="{ 'rotate-180': openFaqs['api-access'] }" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div v-if="openFaqs['api-access']" class="faq-answer">
                    <p>Yes! NetScanner provides a comprehensive RESTful API that mirrors all web interface functionality. The API supports JSON responses, pagination, filtering, and real-time WebSocket connections for live scanning. Check our <nuxt-link to="/docs/api" class="text-cosmic-aurora hover:underline">API Documentation</nuxt-link> for complete details and examples.</p>
                  </div>
                </div>

                <div class="faq-item">
                  <button @click="toggleFaq('rate-limits')" class="faq-question">
                    <span>Are there any rate limits or usage restrictions?</span>
                    <svg class="faq-icon" :class="{ 'rotate-180': openFaqs['rate-limits'] }" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div v-if="openFaqs['rate-limits']" class="faq-answer">
                    <p>To ensure fair usage and maintain service quality, we implement reasonable rate limits:</p>
                    <ul class="list-disc list-inside mt-2 space-y-1">
                      <li><strong>Web Interface:</strong> No strict limits for normal usage</li>
                      <li><strong>API Requests:</strong> 100 requests per minute per IP</li>
                      <li><strong>Live Scans:</strong> 10 concurrent scans per IP</li>
                      <li><strong>Bulk Queries:</strong> Contact us for higher limits</li>
                    </ul>
                  </div>
                </div>

                <div class="faq-item">
                  <button @click="toggleFaq('self-hosting')" class="faq-question">
                    <span>Can I self-host NetScanner?</span>
                    <svg class="faq-icon" :class="{ 'rotate-180': openFaqs['self-hosting'] }" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div v-if="openFaqs['self-hosting']" class="faq-answer">
                    <p>Absolutely! NetScanner is open-source and can be self-hosted. The complete source code is available on GitHub, including both the frontend interface and backend API. We provide Docker containers and detailed deployment guides for various environments including cloud platforms and on-premises infrastructure.</p>
                  </div>
                </div>

                <div class="faq-item">
                  <button @click="toggleFaq('browser-compatibility')" class="faq-question">
                    <span>Which browsers are supported?</span>
                    <svg class="faq-icon" :class="{ 'rotate-180': openFaqs['browser-compatibility'] }" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div v-if="openFaqs['browser-compatibility']" class="faq-answer">
                    <p>NetScanner works on all modern browsers including:</p>
                    <ul class="list-disc list-inside mt-2 space-y-1">
                      <li><strong>Chrome/Chromium:</strong> Version 90+</li>
                      <li><strong>Firefox:</strong> Version 88+</li>
                      <li><strong>Safari:</strong> Version 14+</li>
                      <li><strong>Edge:</strong> Version 90+</li>
                    </ul>
                    <p class="mt-2">Live Scan features require WebSocket support, which is available in all supported browsers.</p>
                  </div>
                </div>

              </div>
            </div>

            <!-- Privacy & Security -->
            <div>
              <h2 class="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                <span class="w-8 h-8 bg-gradient-to-br from-red-400 to-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">🔒</span>
                Privacy & Security
              </h2>
              <div class="space-y-4">

                <div class="faq-item">
                  <button @click="toggleFaq('data-collection')" class="faq-question">
                    <span>What data does NetScanner collect about users?</span>
                    <svg class="faq-icon" :class="{ 'rotate-180': openFaqs['data-collection'] }" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div v-if="openFaqs['data-collection']" class="faq-answer">
                    <p>NetScanner respects your privacy and collects minimal data:</p>
                    <ul class="list-disc list-inside mt-2 space-y-1">
                      <li><strong>No Registration Required:</strong> No personal information stored</li>
                      <li><strong>Basic Analytics:</strong> Anonymous usage statistics for improvement</li>
                      <li><strong>Search Queries:</strong> Temporarily logged for rate limiting and abuse prevention</li>
                      <li><strong>No Tracking:</strong> No persistent user tracking or profiling</li>
                    </ul>
                  </div>
                </div>

                <div class="faq-item">
                  <button @click="toggleFaq('query-logging')" class="faq-question">
                    <span>Are my search queries logged or stored?</span>
                    <svg class="faq-icon" :class="{ 'rotate-180': openFaqs['query-logging'] }" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div v-if="openFaqs['query-logging']" class="faq-answer">
                    <p>Search queries are temporarily logged for operational purposes including rate limiting, abuse prevention, and system optimization. Logs are automatically purged after 30 days and contain no personally identifiable information. We never share or sell query data.</p>
                  </div>
                </div>

                <div class="faq-item">
                  <button @click="toggleFaq('security-measures')" class="faq-question">
                    <span>What security measures protect NetScanner?</span>
                    <svg class="faq-icon" :class="{ 'rotate-180': openFaqs['security-measures'] }" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div v-if="openFaqs['security-measures']" class="faq-answer">
                    <p>NetScanner implements multiple security layers:</p>
                    <ul class="list-disc list-inside mt-2 space-y-1">
                      <li><strong>HTTPS Encryption:</strong> All communications encrypted with TLS 1.3</li>
                      <li><strong>DDoS Protection:</strong> Advanced traffic filtering and rate limiting</li>
                      <li><strong>Input Validation:</strong> Comprehensive sanitization of all user inputs</li>
                      <li><strong>Security Headers:</strong> CSP, HSTS, and other protective headers</li>
                      <li><strong>Regular Audits:</strong> Continuous security monitoring and updates</li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>

            <!-- Troubleshooting -->
            <div>
              <h2 class="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                <span class="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">🛠️</span>
                Troubleshooting
              </h2>
              <div class="space-y-4">

                <div class="faq-item">
                  <button @click="toggleFaq('live-scan-not-working')" class="faq-question">
                    <span>Live Scan is not working or showing errors</span>
                    <svg class="faq-icon" :class="{ 'rotate-180': openFaqs['live-scan-not-working'] }" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div v-if="openFaqs['live-scan-not-working']" class="faq-answer">
                    <p>If Live Scan isn't working, try these solutions:</p>
                    <ul class="list-disc list-inside mt-2 space-y-1">
                      <li><strong>Check Network:</strong> Ensure stable internet connection</li>
                      <li><strong>Browser Compatibility:</strong> Use a modern browser with WebSocket support</li>
                      <li><strong>Firewall/Proxy:</strong> WebSocket connections may be blocked</li>
                      <li><strong>Target Domain:</strong> Verify the domain is accessible and valid</li>
                      <li><strong>Refresh Page:</strong> Reload to establish new connection</li>
                    </ul>
                  </div>
                </div>

                <div class="faq-item">
                  <button @click="toggleFaq('no-results')" class="faq-question">
                    <span>Why am I getting no results for my search?</span>
                    <svg class="faq-icon" :class="{ 'rotate-180': openFaqs['no-results'] }" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div v-if="openFaqs['no-results']" class="faq-answer">
                    <p>No results can occur for several reasons:</p>
                    <ul class="list-disc list-inside mt-2 space-y-1">
                      <li><strong>New Domain:</strong> Recently registered domains may not be indexed yet</li>
                      <li><strong>Private Infrastructure:</strong> Internal/private networks aren't publicly scanned</li>
                      <li><strong>Typos:</strong> Check spelling and format of your query</li>
                      <li><strong>Data Coverage:</strong> We may not have scanned this target recently</li>
                      <li><strong>Try Live Scan:</strong> Use real-time scanning for immediate results</li>
                    </ul>
                  </div>
                </div>

                <div class="faq-item">
                  <button @click="toggleFaq('slow-performance')" class="faq-question">
                    <span>NetScanner is loading slowly</span>
                    <svg class="faq-icon" :class="{ 'rotate-180': openFaqs['slow-performance'] }" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div v-if="openFaqs['slow-performance']" class="faq-answer">
                    <p>To improve performance:</p>
                    <ul class="list-disc list-inside mt-2 space-y-1">
                      <li><strong>Clear Cache:</strong> Clear browser cache and cookies</li>
                      <li><strong>Check Connection:</strong> Verify internet speed and stability</li>
                      <li><strong>Disable Extensions:</strong> Browser extensions may interfere</li>
                      <li><strong>Try Different Server:</strong> Performance varies by geographic location</li>
                      <li><strong>Reduce Concurrent Requests:</strong> Limit simultaneous scans</li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>

            <!-- Support & Contact -->
            <div>
              <h2 class="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                <span class="w-8 h-8 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">💬</span>
                Support & Contact
              </h2>
              <div class="space-y-4">

                <div class="faq-item">
                  <button @click="toggleFaq('get-help')" class="faq-question">
                    <span>How can I get help or report issues?</span>
                    <svg class="faq-icon" :class="{ 'rotate-180': openFaqs['get-help'] }" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div v-if="openFaqs['get-help']" class="faq-answer">
                    <p>We offer several support channels:</p>
                    <ul class="list-disc list-inside mt-2 space-y-1">
                      <li><strong>GitHub Issues:</strong> Report bugs and feature requests on our repository</li>
                      <li><strong>Documentation:</strong> Comprehensive guides and API references</li>
                      <li><strong>Community Forum:</strong> Connect with other users and developers</li>
                      <li><strong>Email Support:</strong> Direct contact for complex issues</li>
                    </ul>
                  </div>
                </div>

                <div class="faq-item">
                  <button @click="toggleFaq('contribute')" class="faq-question">
                    <span>How can I contribute to NetScanner?</span>
                    <svg class="faq-icon" :class="{ 'rotate-180': openFaqs['contribute'] }" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div v-if="openFaqs['contribute']" class="faq-answer">
                    <p>We welcome contributions in many forms:</p>
                    <ul class="list-disc list-inside mt-2 space-y-1">
                      <li><strong>Code Contributions:</strong> Submit pull requests for new features or fixes</li>
                      <li><strong>Bug Reports:</strong> Help us identify and fix issues</li>
                      <li><strong>Documentation:</strong> Improve guides and help content</li>
                      <li><strong>Feature Requests:</strong> Suggest new capabilities</li>
                      <li><strong>Testing:</strong> Help test beta features and releases</li>
                      <li><strong>Spreading the Word:</strong> Share NetScanner with your network</li>
                    </ul>
                  </div>
                </div>

                <div class="faq-item">
                  <button @click="toggleFaq('commercial-use')" class="faq-question">
                    <span>Can I use NetScanner for commercial purposes?</span>
                    <svg class="faq-icon" :class="{ 'rotate-180': openFaqs['commercial-use'] }" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div v-if="openFaqs['commercial-use']" class="faq-answer">
                    <p>Yes! NetScanner can be used for commercial purposes under our open-source license. This includes security consulting, penetration testing, network analysis, and integration into commercial products. For high-volume commercial usage, consider self-hosting or contact us about dedicated infrastructure options.</p>
                  </div>
                </div>

              </div>
            </div>

          </div>

          <!-- Contact Section -->
          <div class="mt-12 text-center bg-slate-900/30 rounded-2xl p-8 border border-slate-700/30">
            <h3 class="text-xl font-semibold text-white mb-4">Still have questions?</h3>
            <p class="text-slate-300 mb-6">
              Can't find what you're looking for? We're here to help you get the most out of NetScanner.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://github.com/p3t3r67x0/purple_pee" 
                target="_blank"
                class="inline-flex items-center gap-2 bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 text-white font-medium px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105"
              >
                📚 GitHub Repository
              </a>
              <nuxt-link 
                to="/docs/api" 
                class="inline-flex items-center gap-2 border border-white/20 bg-white/10 hover:bg-white/20 text-white font-medium px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              >
                📖 API Documentation
              </nuxt-link>
            </div>
          </div>

        </div>
      </section>
    </div>
    <navfooter></navfooter>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import Modal from '@/components/modal.vue'
import Footer from '@/components/navfooter.vue'
import Navbar from '@/components/navheader.vue'
import { useMainStore } from '~/stores/main'

const mainStore = useMainStore()
const { modalVisible } = storeToRefs(mainStore)

const openFaqs = ref<Record<string, boolean>>({})

const toggleFaq = (faqId: string) => {
  openFaqs.value[faqId] = !openFaqs.value[faqId]
}

useHead({
  title: 'Frequently Asked Questions - NetScanner Help & Support',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Get answers to common questions about NetScanner. Learn about features, API usage, security, troubleshooting, and how to get the most out of our internet intelligence platform.'
    },
    {
      name: 'keywords',
      content: 'NetScanner FAQ, help, support, troubleshooting, API questions, live scan, match conditions, network analysis, security scanning'
    },
    {
      property: 'og:title',
      content: 'NetScanner FAQ - Help & Support'
    },
    {
      property: 'og:description',
      content: 'Comprehensive FAQ covering NetScanner features, usage, troubleshooting, and support resources.'
    }
  ]
})
</script>

<style scoped>
.faq-item {
  @apply border border-white/10 rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm;
}

.faq-question {
  @apply w-full flex items-center justify-between p-4 text-left text-white font-medium hover:bg-white/10 transition-colors duration-200;
}

.faq-icon {
  @apply w-5 h-5 text-white/70 transition-transform duration-200;
}

.faq-answer {
  @apply p-4 pt-0 text-slate-300 leading-relaxed;
}

.faq-answer ul {
  @apply ml-4;
}

.faq-answer code {
  @apply bg-slate-800/80 text-emerald-300 px-2 py-1 rounded text-sm font-mono;
}
</style>
