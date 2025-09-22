<template>
  <div id="xhr" class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
    <div class="glass-panel space-y-10 rounded-3xl border border-white/10 px-5 py-8 shadow-glass sm:px-10 sm:py-12">
      <header class="space-y-4 text-center sm:text-left">
        <h2 class="text-2xl font-semibold text-white sm:text-3xl">Complete Guide to NetScanner</h2>
        <p class="mx-auto max-w-3xl text-sm leading-relaxed text-white/70 sm:text-base">
          NetScanner is a powerful network reconnaissance tool that allows you to search and analyze internet-connected devices, services, and infrastructure. 
          This comprehensive guide will help you master all the search capabilities and filtering options available.
        </p>
        <div class="rounded-2xl border border-cosmic-aurora/30 bg-cosmic-aurora/10 p-4">
          <h3 class="text-lg font-semibold text-cosmic-aurora mb-2">Quick Start</h3>
          <p class="text-sm text-white/80 mb-3">
            All search queries follow the format: <code class="rounded border border-white/15 bg-white/10 px-1 py-0.5 text-xs font-semibold text-white/80">filter:value</code>
          </p>
          <p class="text-xs text-white/60">
            <strong>Important:</strong> No spaces between the filter name and its value. Use quotes for values containing spaces.
          </p>
        </div>
      </header>

      <!-- Getting Started Section -->
      <section class="space-y-6">
        <h3 class="text-xl font-semibold text-white border-b border-white/20 pb-2">Getting Started</h3>
        
        <div class="grid gap-4 sm:grid-cols-2">
          <div class="rounded-2xl border border-white/10 bg-white/5 p-4">
            <h4 class="text-lg font-semibold text-cosmic-aurora mb-2">Basic Search</h4>
            <p class="text-sm text-white/70 mb-3">Enter any domain, IP address, or identifier directly in the search box:</p>
            <div class="rounded-lg bg-white/10 border border-white/15 px-3 py-2 mb-2">
              <code class="text-sm text-cosmic-aurora">google.com</code>
            </div>
            <div class="rounded-lg bg-white/10 border border-white/15 px-3 py-2 mb-2">
              <code class="text-sm text-cosmic-aurora">8.8.8.8</code>
            </div>
            <div class="rounded-lg bg-white/10 border border-white/15 px-3 py-2">
              <code class="text-sm text-cosmic-aurora">AS15169</code>
            </div>
          </div>
          
          <div class="rounded-2xl border border-white/10 bg-white/5 p-4">
            <h4 class="text-lg font-semibold text-cosmic-aurora mb-2">Advanced Filtering</h4>
            <p class="text-sm text-white/70 mb-3">Combine multiple filters for precise results:</p>
            <div class="rounded-lg bg-white/10 border border-white/15 px-3 py-2 mb-2">
              <code class="text-sm text-cosmic-aurora">port:22 country:US</code>
            </div>
            <div class="rounded-lg bg-white/10 border border-white/15 px-3 py-2 mb-2">
              <code class="text-sm text-cosmic-aurora">server:Apache status:200</code>
            </div>
            <div class="rounded-lg bg-white/10 border border-white/15 px-3 py-2">
              <code class="text-sm text-cosmic-aurora">org:Google port:443</code>
            </div>
          </div>
        </div>
      </section>

      <!-- Network Filters Section -->
      <section class="space-y-6">
        <h3 class="text-xl font-semibold text-white border-b border-white/20 pb-2">Network & Infrastructure Filters</h3>
        
        <ul class="space-y-8">
          <li class="space-y-3">
            <div class="flex items-center gap-3">
              <span class="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cosmic-aurora/80 to-cosmic-flare/80 text-white text-sm font-bold">IP</span>
              <p class="text-lg font-semibold text-white sm:text-xl">IPv4 & IPv6 Addresses</p>
            </div>
            <div class="overflow-x-auto rounded-lg bg-white/10 border border-white/15 px-3 py-2">
              <code class="block whitespace-nowrap font-mono text-sm text-cosmic-aurora sm:text-base">
                <nuxt-link to="/ipv4/31.13.64.16" class="hover:text-cosmic-rose">ipv4:31.13.64.16</nuxt-link> ·
                <nuxt-link to="/ipv4/172.217.23.142" class="hover:text-cosmic-rose">ipv4:172.217.23.142</nuxt-link> ·
                <nuxt-link to="/ipv6/2001:4860:4860::8888" class="hover:text-cosmic-rose">ipv6:2001:4860:4860::8888</nuxt-link>
              </code>
            </div>
            <p class="max-w-3xl text-sm leading-relaxed text-white/70 sm:text-base">
              Search for specific IPv4 or IPv6 addresses to find detailed information about hosts, including open ports, services, geolocation, and ownership details.
            </p>
          </li>

          <li class="space-y-3">
            <div class="flex items-center gap-3">
              <span class="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-400/80 to-sky-500/80 text-white text-sm font-bold">AS</span>
              <p class="text-lg font-semibold text-white sm:text-xl">Autonomous System Numbers (ASN)</p>
            </div>
            <div class="overflow-x-auto rounded-lg bg-white/10 border border-white/15 px-3 py-2">
              <code class="block whitespace-nowrap font-mono text-sm text-cosmic-aurora sm:text-base">
                <nuxt-link to="/asn/AS15169" class="hover:text-cosmic-rose">asn:AS15169</nuxt-link> ·
                <nuxt-link to="/asn/AS13335" class="hover:text-cosmic-rose">asn:AS13335</nuxt-link> ·
                <nuxt-link to="/asn/AS16509" class="hover:text-cosmic-rose">asn:AS16509</nuxt-link>
              </code>
            </div>
            <p class="max-w-3xl text-sm leading-relaxed text-white/70 sm:text-base">
              Explore all IP ranges and services within specific Autonomous Systems. Useful for analyzing entire networks owned by organizations like Google (AS15169), Cloudflare (AS13335), or Amazon (AS16509).
            </p>
          </li>

          <li class="space-y-3">
            <div class="flex items-center gap-3">
              <span class="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-400/80 to-cosmic-haze/80 text-white text-sm font-bold">NET</span>
              <p class="text-lg font-semibold text-white sm:text-xl">CIDR Network Ranges</p>
            </div>
            <div class="overflow-x-auto rounded-lg bg-white/10 border border-white/15 px-3 py-2">
              <code class="block whitespace-nowrap font-mono text-sm text-cosmic-aurora sm:text-base">
                <nuxt-link to="/cidr/8.8.8.0/24" class="hover:text-cosmic-rose">cidr:8.8.8.0/24</nuxt-link> ·
                <nuxt-link to="/cidr/213.133.0.0/19" class="hover:text-cosmic-rose">cidr:213.133.0.0/19</nuxt-link> ·
                <nuxt-link to="/cidr/144.217.0.0/16" class="hover:text-cosmic-rose">cidr:144.217.0.0/16</nuxt-link>
              </code>
            </div>
            <p class="max-w-3xl text-sm leading-relaxed text-white/70 sm:text-base">
              Analyze entire subnet ranges to understand network topology and discover all active hosts within specific IP blocks. Supports standard CIDR notation (/8, /16, /24, etc.).
            </p>
          </li>
        </ul>
      </section>

      <!-- Service & Port Filters Section -->
      <section class="space-y-6">
        <h3 class="text-xl font-semibold text-white border-b border-white/20 pb-2">Service & Port Analysis</h3>
        
        <ul class="space-y-8">
          <li class="space-y-3">
            <div class="flex items-center gap-3">
              <span class="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-rose-400/80 to-orange-400/80 text-white text-sm font-bold">PT</span>
              <p class="text-lg font-semibold text-white sm:text-xl">Port-based Discovery</p>
            </div>
            <div class="overflow-x-auto rounded-lg bg-white/10 border border-white/15 px-3 py-2">
              <code class="block whitespace-nowrap font-mono text-sm text-cosmic-aurora sm:text-base">
                <nuxt-link to="/port/22" class="hover:text-cosmic-rose">port:22</nuxt-link> ·
                <nuxt-link to="/port/80" class="hover:text-cosmic-rose">port:80</nuxt-link> ·
                <nuxt-link to="/port/443" class="hover:text-cosmic-rose">port:443</nuxt-link> ·
                <nuxt-link to="/port/3306" class="hover:text-cosmic-rose">port:3306</nuxt-link> ·
                <nuxt-link to="/port/27017" class="hover:text-cosmic-rose">port:27017</nuxt-link>
              </code>
            </div>
            <div class="grid gap-3 mt-4 sm:grid-cols-2">
              <div class="rounded-lg bg-cosmic-aurora/10 border border-cosmic-aurora/30 p-3">
                <h5 class="font-semibold text-cosmic-aurora text-sm mb-2">Common Ports</h5>
                <ul class="text-xs text-white/70 space-y-1">
                  <li><code>22</code> - SSH (Secure Shell)</li>
                  <li><code>80</code> - HTTP Web Server</li>
                  <li><code>443</code> - HTTPS Secure Web</li>
                  <li><code>25</code> - SMTP Email</li>
                  <li><code>53</code> - DNS Server</li>
                </ul>
              </div>
              <div class="rounded-lg bg-cosmic-flare/10 border border-cosmic-flare/30 p-3">
                <h5 class="font-semibold text-cosmic-flare text-sm mb-2">Database Ports</h5>
                <ul class="text-xs text-white/70 space-y-1">
                  <li><code>3306</code> - MySQL Database</li>
                  <li><code>5432</code> - PostgreSQL</li>
                  <li><code>27017</code> - MongoDB</li>
                  <li><code>6379</code> - Redis Cache</li>
                  <li><code>9200</code> - Elasticsearch</li>
                </ul>
              </div>
            </div>
          </li>

          <li class="space-y-3">
            <div class="flex items-center gap-3">
              <span class="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400/80 to-emerald-400/80 text-white text-sm font-bold">SV</span>
              <p class="text-lg font-semibold text-white sm:text-xl">Service Detection</p>
            </div>
            <div class="overflow-x-auto rounded-lg bg-white/10 border border-white/15 px-3 py-2">
              <code class="block whitespace-nowrap font-mono text-sm text-cosmic-aurora sm:text-base">
                <nuxt-link to="/service/nginx" class="hover:text-cosmic-rose">service:nginx</nuxt-link> ·
                <nuxt-link to="/service/apache" class="hover:text-cosmic-rose">service:apache</nuxt-link> ·
                <nuxt-link to="/service/openssh" class="hover:text-cosmic-rose">service:openssh</nuxt-link> ·
                <nuxt-link to="/service/mysql" class="hover:text-cosmic-rose">service:mysql</nuxt-link>
              </code>
            </div>
            <p class="max-w-3xl text-sm leading-relaxed text-white/70 sm:text-base">
              Identify specific software and services running on discovered hosts. Includes version detection for security analysis and compatibility assessment.
            </p>
          </li>

          <li class="space-y-3">
            <div class="flex items-center gap-3">
              <span class="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-yellow-400/80 to-orange-500/80 text-white text-sm font-bold">ST</span>
              <p class="text-lg font-semibold text-white sm:text-xl">HTTP Status Codes</p>
            </div>
            <div class="overflow-x-auto rounded-lg bg-white/10 border border-white/15 px-3 py-2">
              <code class="block whitespace-nowrap font-mono text-sm text-cosmic-aurora sm:text-base">
                <nuxt-link to="/status/200" class="hover:text-cosmic-rose">status:200</nuxt-link> ·
                <nuxt-link to="/status/404" class="hover:text-cosmic-rose">status:404</nuxt-link> ·
                <nuxt-link to="/status/500" class="hover:text-cosmic-rose">status:500</nuxt-link> ·
                <nuxt-link to="/status/302" class="hover:text-cosmic-rose">status:302</nuxt-link>
              </code>
            </div>
            <div class="grid gap-3 mt-4 sm:grid-cols-3">
              <div class="rounded-lg bg-green-500/10 border border-green-500/30 p-3">
                <h5 class="font-semibold text-green-400 text-sm mb-2">Success (2xx)</h5>
                <ul class="text-xs text-white/70 space-y-1">
                  <li><code>200</code> - OK</li>
                  <li><code>201</code> - Created</li>
                  <li><code>204</code> - No Content</li>
                </ul>
              </div>
              <div class="rounded-lg bg-yellow-500/10 border border-yellow-500/30 p-3">
                <h5 class="font-semibold text-yellow-400 text-sm mb-2">Redirect (3xx)</h5>
                <ul class="text-xs text-white/70 space-y-1">
                  <li><code>301</code> - Moved Permanently</li>
                  <li><code>302</code> - Found</li>
                  <li><code>304</code> - Not Modified</li>
                </ul>
              </div>
              <div class="rounded-lg bg-red-500/10 border border-red-500/30 p-3">
                <h5 class="font-semibold text-red-400 text-sm mb-2">Error (4xx/5xx)</h5>
                <ul class="text-xs text-white/70 space-y-1">
                  <li><code>404</code> - Not Found</li>
                  <li><code>500</code> - Server Error</li>
                  <li><code>403</code> - Forbidden</li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </section>

      <!-- Geographic & Organizational Filters -->
      <section class="space-y-6">
        <h3 class="text-xl font-semibold text-white border-b border-white/20 pb-2">Geographic & Organizational Intelligence</h3>
        
        <ul class="space-y-8">
          <li class="space-y-3">
            <div class="flex items-center gap-3">
              <span class="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-400/80 to-indigo-500/80 text-white text-sm font-bold">GEO</span>
              <p class="text-lg font-semibold text-white sm:text-xl">Geographic Location</p>
            </div>
            <div class="overflow-x-auto rounded-lg bg-white/10 border border-white/15 px-3 py-2">
              <code class="block whitespace-nowrap font-mono text-sm text-cosmic-aurora sm:text-base">
                <nuxt-link to="/country/US" class="hover:text-cosmic-rose">country:US</nuxt-link> ·
                <nuxt-link to="/country/DE" class="hover:text-cosmic-rose">country:DE</nuxt-link> ·
                <nuxt-link to="/country/SG" class="hover:text-cosmic-rose">country:SG</nuxt-link> ·
                <nuxt-link to="/state/CA" class="hover:text-cosmic-rose">state:CA</nuxt-link> ·
                <nuxt-link to="/city/London" class="hover:text-cosmic-rose">city:London</nuxt-link>
              </code>
            </div>
            <p class="max-w-3xl text-sm leading-relaxed text-white/70 sm:text-base">
              Filter results by geographic location using ISO country codes, state/province abbreviations, or city names. Useful for compliance, regional analysis, and threat intelligence.
            </p>
          </li>

          <li class="space-y-3">
            <div class="flex items-center gap-3">
              <span class="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500/80 to-pink-500/80 text-white text-sm font-bold">ORG</span>
              <p class="text-lg font-semibold text-white sm:text-xl">Organization & ISP</p>
            </div>
            <div class="overflow-x-auto rounded-lg bg-white/10 border border-white/15 px-3 py-2">
              <code class="block whitespace-nowrap font-mono text-sm text-cosmic-aurora sm:text-base">
                <nuxt-link to="/org/Google LLC" class="hover:text-cosmic-rose">org:"Google LLC"</nuxt-link> ·
                <nuxt-link to="/org/Amazon.com, Inc." class="hover:text-cosmic-rose">org:"Amazon.com, Inc."</nuxt-link> ·
                <nuxt-link to="/org/DigitalOcean" class="hover:text-cosmic-rose">org:DigitalOcean</nuxt-link>
              </code>
            </div>
            <p class="max-w-3xl text-sm leading-relaxed text-white/70 sm:text-base">
              Search by organization name or ISP to analyze infrastructure ownership. Use quotes for multi-word organization names.
            </p>
          </li>
        </ul>
      </section>

      <!-- DNS & Domain Filters -->
      <section class="space-y-6">
        <h3 class="text-xl font-semibold text-white border-b border-white/20 pb-2">DNS & Domain Analysis</h3>
        
        <ul class="space-y-8">
          <li class="space-y-3">
            <div class="flex items-center gap-3">
              <span class="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-green-400/80 to-teal-500/80 text-white text-sm font-bold">DNS</span>
              <p class="text-lg font-semibold text-white sm:text-xl">DNS Records</p>
            </div>
            <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div class="space-y-2">
                <h5 class="font-semibold text-green-400 text-sm">Name Servers</h5>
                <div class="rounded-lg bg-white/10 border border-white/15 px-3 py-2">
                  <code class="text-xs text-cosmic-aurora">ns:ns1.google.com</code>
                </div>
              </div>
              <div class="space-y-2">
                <h5 class="font-semibold text-blue-400 text-sm">MX Records</h5>
                <div class="rounded-lg bg-white/10 border border-white/15 px-3 py-2">
                  <code class="text-xs text-cosmic-aurora">mx:gmail-smtp-in.l.google.com</code>
                </div>
              </div>
              <div class="space-y-2">
                <h5 class="font-semibold text-purple-400 text-sm">CNAME Records</h5>
                <div class="rounded-lg bg-white/10 border border-white/15 px-3 py-2">
                  <code class="text-xs text-cosmic-aurora">cname:www.example.com</code>
                </div>
              </div>
              <div class="space-y-2">
                <h5 class="font-semibold text-orange-400 text-sm">Site Analysis</h5>
                <div class="rounded-lg bg-white/10 border border-white/15 px-3 py-2">
                  <code class="text-xs text-cosmic-aurora">site:example.com</code>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </section>

      <!-- SSL/TLS & Security -->
      <section class="space-y-6">
        <h3 class="text-xl font-semibold text-white border-b border-white/20 pb-2">SSL/TLS & Security Analysis</h3>
        
        <ul class="space-y-8">
          <li class="space-y-3">
            <div class="flex items-center gap-3">
              <span class="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-red-400/80 to-pink-500/80 text-white text-sm font-bold">SSL</span>
              <p class="text-lg font-semibold text-white sm:text-xl">Certificate Analysis</p>
            </div>
            <div class="overflow-x-auto rounded-lg bg-white/10 border border-white/15 px-3 py-2">
              <code class="block whitespace-nowrap font-mono text-sm text-cosmic-aurora sm:text-base">
                <nuxt-link to="/ssl/google.com" class="hover:text-cosmic-rose">ssl:google.com</nuxt-link> ·
                <nuxt-link to="/issuer/Let's Encrypt" class="hover:text-cosmic-rose">issuer:"Let's Encrypt"</nuxt-link> ·
                <nuxt-link to="/ca/DigiCert" class="hover:text-cosmic-rose">ca:DigiCert</nuxt-link>
              </code>
            </div>
            <p class="max-w-3xl text-sm leading-relaxed text-white/70 sm:text-base">
              Analyze SSL/TLS certificates, certificate authorities, and security configurations across discovered services.
            </p>
          </li>
        </ul>
      </section>

      <!-- Advanced Features -->
      <section class="space-y-6">
        <h3 class="text-xl font-semibold text-white border-b border-white/20 pb-2">Advanced Search Techniques</h3>
        
        <div class="grid gap-6 lg:grid-cols-2">
          <div class="rounded-2xl border border-cosmic-aurora/30 bg-cosmic-aurora/5 p-6">
            <h4 class="text-lg font-semibold text-cosmic-aurora mb-4">Query Combinations</h4>
            <div class="space-y-3">
              <div>
                <p class="text-sm text-white/80 mb-2">Find SSH servers in Germany:</p>
                <div class="rounded-lg bg-white/10 border border-white/15 px-3 py-2">
                  <code class="text-sm text-cosmic-aurora">port:22 country:DE</code>
                </div>
              </div>
              <div>
                <p class="text-sm text-white/80 mb-2">Apache servers with SSL:</p>
                <div class="rounded-lg bg-white/10 border border-white/15 px-3 py-2">
                  <code class="text-sm text-cosmic-aurora">server:Apache port:443</code>
                </div>
              </div>
              <div>
                <p class="text-sm text-white/80 mb-2">Database servers by organization:</p>
                <div class="rounded-lg bg-white/10 border border-white/15 px-3 py-2">
                  <code class="text-sm text-cosmic-aurora">port:3306 org:DigitalOcean</code>
                </div>
              </div>
            </div>
          </div>

          <div class="rounded-2xl border border-cosmic-flare/30 bg-cosmic-flare/5 p-6">
            <h4 class="text-lg font-semibold text-cosmic-flare mb-4">Search Tips</h4>
            <ul class="space-y-3 text-sm text-white/80">
              <li class="flex items-start gap-2">
                <span class="text-cosmic-flare">•</span>
                <span>Use quotes for values with spaces: <code class="text-xs bg-white/10 px-1 py-0.5 rounded">org:"Google LLC"</code></span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-cosmic-flare">•</span>
                <span>Combine multiple filters with spaces between them</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-cosmic-flare">•</span>
                <span>Case-insensitive search for most text fields</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-cosmic-flare">•</span>
                <span>Use wildcards (*) where supported</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-cosmic-flare">•</span>
                <span>Results are paginated - use navigation controls</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- API & Integration -->
      <section class="space-y-6">
        <h3 class="text-xl font-semibold text-white border-b border-white/20 pb-2">API & Integration</h3>
        <div class="rounded-2xl border border-sky-400/30 bg-sky-400/5 p-6">
          <h4 class="text-lg font-semibold text-sky-400 mb-4">Programmatic Access</h4>
          <p class="text-sm text-white/80 mb-4">
            Access NetScanner data programmatically through our REST API. Perfect for automation, monitoring, and integration with your security tools.
          </p>
          <div class="grid gap-4 sm:grid-cols-2">
            <div>
              <h5 class="font-semibold text-sky-300 text-sm mb-2">API Endpoints</h5>
              <ul class="text-xs text-white/70 space-y-1">
                <li><code>/api/search</code> - General search</li>
                <li><code>/api/host/{ip}</code> - Host details</li>
                <li><code>/api/domain/{domain}</code> - Domain info</li>
                <li><code>/api/asn/{asn}</code> - ASN analysis</li>
              </ul>
            </div>
            <div>
              <h5 class="font-semibold text-sky-300 text-sm mb-2">Response Formats</h5>
              <ul class="text-xs text-white/70 space-y-1">
                <li>JSON (default)</li>
                <li>CSV export</li>
                <li>XML format</li>
                <li>Raw data streams</li>
              </ul>
            </div>
          </div>
          <div class="mt-4">
            <nuxt-link to="/docs/api" class="inline-flex items-center gap-2 rounded-lg bg-sky-400/20 border border-sky-400/40 px-4 py-2 text-sm font-semibold text-sky-300 hover:bg-sky-400/30 transition">
              <span>View API Documentation</span>
              <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
            </nuxt-link>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="border-t border-white/20 pt-6 text-center">
        <p class="text-sm text-white/60">
          Need help? Check our <nuxt-link to="/docs/examples" class="text-cosmic-aurora hover:text-cosmic-rose">examples section</nuxt-link> 
          or <nuxt-link to="/docs/faq" class="text-cosmic-aurora hover:text-cosmic-rose">frequently asked questions</nuxt-link>.
        </p>
      </footer>
    </div>
  </div>
</template>
