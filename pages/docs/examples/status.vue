<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
    <Navbar />
    <Modal v-if="modalVisible"></Modal>

    <div class="container mx-auto px-3 sm:px-4 py-6 sm:py-8">
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8">
        <!-- Sidebar -->
        <div class="lg:col-span-1">
          <div class="bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-lg p-4 sm:p-6 sticky top-8">
            <nav>
              <div class="mb-4 sm:mb-6">
                <h2 class="text-lg font-semibold text-white">API Examples</h2>
              </div>
              <ul class="space-y-2">
                <li>
                  <NuxtLink to="/docs/examples"
                    class="block py-2 px-3 text-sm text-gray-400 hover:text-purple-300 rounded">
                    Overview
                  </NuxtLink>
                </li>
                <li>
                  <div class="text-purple-300 text-sm font-medium py-2 px-3">Match Conditions</div>
                  <ul class="ml-4 space-y-1">
                    <li>
                      <a href="#network-infrastructure"
                        class="block py-1 px-2 text-sm text-gray-400 hover:text-purple-300 rounded">
                        Network Infrastructure
                      </a>
                    </li>
                    <li>
                      <a href="#geographic-filtering"
                        class="block py-1 px-2 text-sm text-gray-400 hover:text-purple-300 rounded">
                        Geographic Filtering
                      </a>
                    </li>
                    <li>
                      <a href="#ssl-security"
                        class="block py-1 px-2 text-sm text-gray-400 hover:text-purple-300 rounded">
                        SSL/TLS Security
                      </a>
                    </li>
                    <li>
                      <a href="#web-technology"
                        class="block py-1 px-2 text-sm text-gray-400 hover:text-purple-300 rounded">
                        Web Technology
                      </a>
                    </li>
                    <li>
                      <a href="#dns-domain" class="block py-1 px-2 text-sm text-gray-400 hover:text-purple-300 rounded">
                        DNS & Domain
                      </a>
                    </li>
                    <li>
                      <a href="#organizational"
                        class="block py-1 px-2 text-sm text-gray-400 hover:text-purple-300 rounded">
                        Organizational
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <div class="text-purple-300 text-sm font-medium py-2 px-3 mt-3 sm:mt-4">Integration</div>
                  <ul class="ml-4 space-y-1">
                    <li>
                      <a href="#security-research"
                        class="block py-1 px-2 text-sm text-gray-400 hover:text-purple-300 rounded">
                        Security Research
                      </a>
                    </li>
                    <li>
                      <a href="#compliance-monitoring"
                        class="block py-1 px-2 text-sm text-gray-400 hover:text-purple-300 rounded">
                        Compliance & Monitoring
                      </a>
                    </li>
                    <li>
                      <a href="#data-analytics"
                        class="block py-1 px-2 text-sm text-gray-400 hover:text-purple-300 rounded">
                        Data Analytics
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <div class="text-purple-300 text-sm font-medium py-2 px-3 mt-3 sm:mt-4">Reference</div>
                  <ul class="ml-4 space-y-1">
                    <li>
                      <a href="#api-response"
                        class="block py-1 px-2 text-sm text-gray-400 hover:text-purple-300 rounded">
                        Response Format
                      </a>
                    </li>
                    <li>
                      <a href="#quick-start"
                        class="block py-1 px-2 text-sm text-gray-400 hover:text-purple-300 rounded">
                        Quick Start
                      </a>
                    </li>
                    <li>
                      <NuxtLink to="/docs/examples/server"
                        class="block py-1 px-2 text-sm text-gray-400 hover:text-purple-300 rounded">
                        Server Examples
                      </NuxtLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <div class="text-purple-300 text-sm font-medium py-2 px-3 mt-3 sm:mt-4">Documentation</div>
                  <ul class="ml-4 space-y-1">
                    <li>
                      <NuxtLink to="/docs/api"
                        class="block py-1 px-2 text-sm text-gray-400 hover:text-purple-300 rounded">
                        API Reference
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/docs/faq"
                        class="block py-1 px-2 text-sm text-gray-400 hover:text-purple-300 rounded">
                        FAQ
                      </NuxtLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <!-- Main Content -->
        <div class="lg:col-span-3">
          <div class="bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-lg p-4 sm:p-8">
            <!-- Header -->
            <div class="mb-6 sm:mb-8">
              <h1
                class="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                NetScanner API Comprehensive Guide</h1>
              <p class="text-slate-300 text-lg">Complete documentation for all endpoints, conditions, and advanced
                features</p>
              <div class="flex flex-wrap gap-2 mt-4">
                <span class="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">20+ Endpoints</span>
                <span class="bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full text-sm">15+ Match
                  Conditions</span>
                <span class="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">Real-time Analytics</span>
                <span class="bg-amber-500/20 text-amber-300 px-3 py-1 rounded-full text-sm">GraphQL Support</span>
              </div>
            </div>

            <!-- API Endpoints Overview -->
            <div class="mb-6 sm:mb-8">
              <h2 class="text-2xl font-semibold text-white mb-4 sm:mb-6">Core API Endpoints</h2>
              <div class="grid gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">

                <!-- Query Endpoint -->
                <div
                  class="bg-gradient-to-br from-purple-900/30 to-purple-800/30 rounded-xl p-3 sm:p-4 border border-purple-500/20">
                  <div class="flex items-center gap-2 mb-3">
                    <span class="w-3 h-3 bg-purple-400 rounded-full"></span>
                    <h3 class="text-lg font-semibold text-white">Query Search</h3>
                  </div>
                  <code class="text-purple-300 text-sm block mb-2">/query/{term}</code>
                  <p class="text-slate-300 text-sm">Full-text search across all domain records and metadata</p>
                  <div class="mt-3 text-xs text-purple-200">
                    Examples: /query/google.com, /query/amazon
                  </div>
                </div>

                <!-- DNS Endpoint -->
                <div
                  class="bg-gradient-to-br from-emerald-900/30 to-emerald-800/30 rounded-xl p-3 sm:p-4 border border-emerald-500/20">
                  <div class="flex items-center gap-2 mb-3">
                    <span class="w-3 h-3 bg-emerald-400 rounded-full"></span>
                    <h3 class="text-lg font-semibold text-white">DNS Records</h3>
                  </div>
                  <code class="text-emerald-300 text-sm block mb-2">/dns</code>
                  <p class="text-slate-300 text-sm">Latest DNS records with pagination and filtering</p>
                  <div class="mt-3 text-xs text-emerald-200">
                    Parameters: page, page_size, domain_filter
                  </div>
                </div>

                <!-- IP Endpoint -->
                <div
                  class="bg-gradient-to-br from-blue-900/30 to-blue-800/30 rounded-xl p-3 sm:p-4 border border-blue-500/20">
                  <div class="flex items-center gap-2 mb-3">
                    <span class="w-3 h-3 bg-blue-400 rounded-full"></span>
                    <h3 class="text-lg font-semibold text-white">IP Analysis</h3>
                  </div>
                  <code class="text-blue-300 text-sm block mb-2">/ip/{address}</code>
                  <p class="text-slate-300 text-sm">Detailed IP address information and geolocation</p>
                  <div class="mt-3 text-xs text-blue-200">
                    Examples: /ip/8.8.8.8, /ip/1.1.1.1
                  </div>
                </div>

                <!-- Match Endpoint -->
                <div
                  class="bg-gradient-to-br from-amber-900/30 to-amber-800/30 rounded-xl p-3 sm:p-4 border border-amber-500/20">
                  <div class="flex items-center gap-2 mb-3">
                    <span class="w-3 h-3 bg-amber-400 rounded-full"></span>
                    <h3 class="text-lg font-semibold text-white">Conditional Search</h3>
                  </div>
                  <code class="text-amber-300 text-sm block mb-2">/match/{condition}:{value}</code>
                  <p class="text-slate-300 text-sm">Advanced filtering with 15+ conditions</p>
                  <div class="mt-3 text-xs text-amber-200">
                    15 conditions: asn, country, port, ssl, status...
                  </div>
                </div>

                <!-- Graph Endpoint -->
                <div
                  class="bg-gradient-to-br from-cyan-900/30 to-cyan-800/30 rounded-xl p-3 sm:p-4 border border-cyan-500/20">
                  <div class="flex items-center gap-2 mb-3">
                    <span class="w-3 h-3 bg-cyan-400 rounded-full"></span>
                    <h3 class="text-lg font-semibold text-white">Relationship Graph</h3>
                  </div>
                  <code class="text-cyan-300 text-sm block mb-2">/graph/{domain}</code>
                  <p class="text-slate-300 text-sm">Domain relationships and infrastructure connections</p>
                  <div class="mt-3 text-xs text-cyan-200">
                    SSL, DNS, CDN, and hosting relationships
                  </div>
                </div>

                <!-- Trends Endpoint -->
                <div
                  class="bg-gradient-to-br from-pink-900/30 to-pink-800/30 rounded-xl p-3 sm:p-4 border border-pink-500/20">
                  <div class="flex items-center gap-2 mb-3">
                    <span class="w-3 h-3 bg-pink-400 rounded-full"></span>
                    <h3 class="text-lg font-semibold text-white">Analytics & Trends</h3>
                  </div>
                  <code class="text-pink-300 text-sm block mb-2">/trends/{type}</code>
                  <p class="text-slate-300 text-sm">API usage analytics and request patterns</p>
                  <div class="mt-3 text-xs text-pink-200">
                    Types: requests, endpoints, errors, performance
                  </div>
                </div>

              </div>
            </div>

            <!-- Network Infrastructure Endpoints -->
            <div class="mb-6 sm:mb-8">
              <h2 class="text-2xl font-semibold text-white mb-4 sm:mb-6">Network Infrastructure</h2>
              <div class="grid gap-4 sm:gap-6 md:grid-cols-2">

                <!-- ASN Analysis -->
                <div class="bg-slate-900/30 rounded-xl p-4 sm:p-6 border border-slate-700/30">
                  <h3 class="text-xl font-semibold text-emerald-400 mb-4">ASN (Autonomous Systems)</h3>
                  <div class="space-y-3">
                    <div class="bg-black/50 rounded-lg p-3">
                      <code class="text-emerald-300">/asn</code>
                      <span class="text-slate-400 ml-4">→ List all ASNs with filtering</span>
                    </div>
                    <div class="bg-black/50 rounded-lg p-3">
                      <code class="text-emerald-300">/asn/{number}</code>
                      <span class="text-slate-400 ml-4">→ Specific ASN details</span>
                    </div>
                    <div class="text-sm text-slate-300">
                      <strong>Filters:</strong> country_code, organization, ip_count
                    </div>
                    <div class="text-sm text-slate-300">
                      <strong>Examples:</strong> /asn?country_code=US, /asn/15169
                    </div>
                  </div>
                </div>

                <!-- CIDR Networks -->
                <div class="bg-slate-900/30 rounded-xl p-4 sm:p-6 border border-slate-700/30">
                  <h3 class="text-xl font-semibold text-sky-400 mb-4">CIDR Network Ranges</h3>
                  <div class="space-y-3">
                    <div class="bg-black/50 rounded-lg p-3">
                      <code class="text-sky-300">/cidr</code>
                      <span class="text-slate-400 ml-4">→ Network range listings</span>
                    </div>
                    <div class="bg-black/50 rounded-lg p-3">
                      <code class="text-sky-300">/subnet/{range}</code>
                      <span class="text-slate-400 ml-4">→ Subnet analysis</span>
                    </div>
                    <div class="text-sm text-slate-300">
                      <strong>Use Cases:</strong> Network topology, IP allocation tracking
                    </div>
                    <div class="text-sm text-slate-300">
                      <strong>Examples:</strong> /subnet/192.168.1/24, /cidr?page=1
                    </div>
                  </div>
                </div>

                <!-- IPv4 & IPv6 -->
                <div class="bg-slate-900/30 rounded-xl p-4 sm:p-6 border border-slate-700/30">
                  <h3 class="text-xl font-semibold text-purple-400 mb-4">IP Address Analysis</h3>
                  <div class="space-y-3">
                    <div class="bg-black/50 rounded-lg p-3">
                      <code class="text-purple-300">/ipv4</code>
                      <span class="text-slate-400 ml-4">→ IPv4 address records</span>
                    </div>
                    <div class="bg-black/50 rounded-lg p-3">
                      <code class="text-purple-300">/ipv6/{address}</code>
                      <span class="text-slate-400 ml-4">→ IPv6 address lookup</span>
                    </div>
                    <div class="text-sm text-slate-300">
                      <strong>Features:</strong> Geolocation, ASN mapping, reverse DNS
                    </div>
                    <div class="text-sm text-slate-300">
                      <strong>Examples:</strong> /ipv4?page=1, /ipv6/2001:4860:4860::8888
                    </div>
                  </div>
                </div>

                <!-- Geographic Data -->
                <div class="bg-slate-900/30 rounded-xl p-4 sm:p-6 border border-slate-700/30">
                  <h3 class="text-xl font-semibold text-orange-400 mb-4">Geographic Intelligence</h3>
                  <div class="space-y-3">
                    <div class="bg-black/50 rounded-lg p-3">
                      <code class="text-orange-300">/country/{code}</code>
                      <span class="text-slate-400 ml-4">→ Country-based filtering</span>
                    </div>
                    <div class="bg-black/50 rounded-lg p-3">
                      <code class="text-orange-300">/city/{name}</code>
                      <span class="text-slate-400 ml-4">→ City-level analysis</span>
                    </div>
                    <div class="bg-black/50 rounded-lg p-3">
                      <code class="text-orange-300">/state/{name}</code>
                      <span class="text-slate-400 ml-4">→ State/province data</span>
                    </div>
                    <div class="text-sm text-slate-300">
                      <strong>Examples:</strong> /country/US, /city/san-francisco, /state/california
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <!-- All Match Conditions -->
            <div class="mb-6 sm:mb-8">
              <h2 class="text-2xl font-semibold text-white mb-4 sm:mb-6">Complete Match Conditions Reference</h2>
              <p class="text-slate-300 mb-4 sm:mb-6">Use <code class="text-amber-300">/match/{condition}:{value}</code>
                for powerful filtering capabilities</p>

              <div class="grid gap-4 sm:gap-6">

                <!-- Network Infrastructure Conditions -->
                <div id="network-infrastructure"
                  class="bg-gradient-to-r from-slate-900/50 to-slate-800/50 rounded-xl p-4 sm:p-6 border border-emerald-500/20">
                  <h3 class="text-xl font-semibold text-emerald-400 mb-4">🌐 Network Infrastructure</h3>
                  <div class="grid gap-4 md:grid-cols-2">

                    <div class="space-y-3">
                      <div class="bg-black/30 rounded-lg p-3">
                        <div class="font-mono text-emerald-300 mb-1">asn:{number}</div>
                        <div class="text-sm text-slate-300">Filter by Autonomous System Number</div>
                        <div class="text-xs text-slate-400 mt-1">Example: /match/asn:13335 (Cloudflare)</div>
                      </div>

                      <div class="bg-black/30 rounded-lg p-3">
                        <div class="font-mono text-emerald-300 mb-1">cidr:{range}</div>
                        <div class="text-sm text-slate-300">Filter by network CIDR range</div>
                        <div class="text-xs text-slate-400 mt-1">Example: /match/cidr:8.8.8.0/24</div>
                      </div>
                    </div>

                    <div class="space-y-3">
                      <div class="bg-black/30 rounded-lg p-3">
                        <div class="font-mono text-emerald-300 mb-1">port:{number}</div>
                        <div class="text-sm text-slate-300">Filter by open network ports</div>
                        <div class="text-xs text-slate-400 mt-1">Example: /match/port:443 (HTTPS)</div>
                      </div>

                      <div class="bg-black/30 rounded-lg p-3">
                        <div class="font-mono text-emerald-300 mb-1">registry:{name}</div>
                        <div class="text-sm text-slate-300">Filter by regional internet registry</div>
                        <div class="text-xs text-slate-400 mt-1">Example: /match/registry:arin</div>
                      </div>
                    </div>

                  </div>
                </div>

                <!-- Geographic Conditions -->
                <div id="geographic-filtering"
                  class="bg-gradient-to-r from-slate-900/50 to-slate-800/50 rounded-xl p-4 sm:p-6 border border-blue-500/20">
                  <h3 class="text-xl font-semibold text-blue-400 mb-4">🌍 Geographic Filtering</h3>
                  <div class="grid gap-4 md:grid-cols-3">

                    <div class="bg-black/30 rounded-lg p-3">
                      <div class="font-mono text-blue-300 mb-1">country:{code}</div>
                      <div class="text-sm text-slate-300">Filter by country code (ISO 3166)</div>
                      <div class="text-xs text-slate-400 mt-1">Example: /match/country:US</div>
                    </div>

                    <div class="bg-black/30 rounded-lg p-3">
                      <div class="font-mono text-blue-300 mb-1">state:{name}</div>
                      <div class="text-sm text-slate-300">Filter by state or province</div>
                      <div class="text-xs text-slate-400 mt-1">Example: /match/state:california</div>
                    </div>

                    <div class="bg-black/30 rounded-lg p-3">
                      <div class="font-mono text-blue-300 mb-1">city:{name}</div>
                      <div class="text-sm text-slate-300">Filter by city location</div>
                      <div class="text-xs text-slate-400 mt-1">Example: /match/city:london</div>
                    </div>

                  </div>
                </div>

                <!-- SSL/TLS Security Conditions -->
                <div id="ssl-security"
                  class="bg-gradient-to-r from-slate-900/50 to-slate-800/50 rounded-xl p-4 sm:p-6 border border-green-500/20">
                  <h3 class="text-xl font-semibold text-green-400 mb-4">🔒 SSL/TLS & Security</h3>
                  <div class="grid gap-4 md:grid-cols-2">

                    <div class="space-y-3">
                      <div class="bg-black/30 rounded-lg p-3">
                        <div class="font-mono text-green-300 mb-1">ssl:{text}</div>
                        <div class="text-sm text-slate-300">Search SSL certificate details</div>
                        <div class="text-xs text-slate-400 mt-1">Example: /match/ssl:cloudflare</div>
                      </div>

                      <div class="bg-black/30 rounded-lg p-3">
                        <div class="font-mono text-green-300 mb-1">ca:{authority}</div>
                        <div class="text-sm text-slate-300">Filter by Certificate Authority</div>
                        <div class="text-xs text-slate-400 mt-1">Example: /match/ca:digicert</div>
                      </div>

                      <div class="bg-black/30 rounded-lg p-3">
                        <div class="font-mono text-green-300 mb-1">issuer:{name}</div>
                        <div class="text-sm text-slate-300">Filter by certificate issuer</div>
                        <div class="text-xs text-slate-400 mt-1">Example: /match/issuer:letsencrypt</div>
                      </div>
                    </div>

                    <div class="space-y-3">
                      <div class="bg-black/30 rounded-lg p-3">
                        <div class="font-mono text-green-300 mb-1">before:{date}</div>
                        <div class="text-sm text-slate-300">Certificates valid before date</div>
                        <div class="text-xs text-slate-400 mt-1">Example: /match/before:2024-12-31</div>
                      </div>

                      <div class="bg-black/30 rounded-lg p-3">
                        <div class="font-mono text-green-300 mb-1">after:{date}</div>
                        <div class="text-sm text-slate-300">Certificates valid after date</div>
                        <div class="text-xs text-slate-400 mt-1">Example: /match/after:2024-01-01</div>
                      </div>

                      <div class="bg-black/30 rounded-lg p-3">
                        <div class="font-mono text-green-300 mb-1">ocsp:{url}</div>
                        <div class="text-sm text-slate-300">Filter by OCSP responder</div>
                        <div class="text-xs text-slate-400 mt-1">Example: /match/ocsp:ocsp.digicert.com</div>
                      </div>
                    </div>

                  </div>
                </div>

                <!-- Web Technology Conditions -->
                <div id="web-technology"
                  class="bg-gradient-to-r from-slate-900/50 to-slate-800/50 rounded-xl p-4 sm:p-6 border border-purple-500/20">
                  <h3 class="text-xl font-semibold text-purple-400 mb-4">⚙️ Web Technology & Services</h3>
                  <div class="grid gap-4 md:grid-cols-2">

                    <div class="space-y-3">
                      <div class="bg-black/30 rounded-lg p-3">
                        <div class="font-mono text-purple-300 mb-1">server:{name}</div>
                        <div class="text-sm text-slate-300">Filter by web server software</div>
                        <div class="text-xs text-slate-400 mt-1">Example: /match/server:nginx</div>
                      </div>

                      <div class="bg-black/30 rounded-lg p-3">
                        <div class="font-mono text-purple-300 mb-1">service:{technology}</div>
                        <div class="text-sm text-slate-300">Filter by detected services</div>
                        <div class="text-xs text-slate-400 mt-1">Example: /match/service:php</div>
                      </div>
                    </div>

                    <div class="space-y-3">
                      <div class="bg-black/30 rounded-lg p-3">
                        <div class="font-mono text-purple-300 mb-1">status:{code}</div>
                        <div class="text-sm text-slate-300">Filter by HTTP response status</div>
                        <div class="text-xs text-slate-400 mt-1">Example: /match/status:200</div>
                      </div>

                      <div class="bg-black/30 rounded-lg p-3">
                        <div class="font-mono text-purple-300 mb-1">banner:{text}</div>
                        <div class="text-sm text-slate-300">Search service banners</div>
                        <div class="text-xs text-slate-400 mt-1">Example: /match/banner:apache</div>
                      </div>
                    </div>

                  </div>
                </div>

                <!-- DNS & Domain Conditions -->
                <div id="dns-domain"
                  class="bg-gradient-to-r from-slate-900/50 to-slate-800/50 rounded-xl p-4 sm:p-6 border border-cyan-500/20">
                  <h3 class="text-xl font-semibold text-cyan-400 mb-4">🌐 DNS & Domain Intelligence</h3>
                  <div class="grid gap-4 md:grid-cols-3">

                    <div class="bg-black/30 rounded-lg p-3">
                      <div class="font-mono text-cyan-300 mb-1">mx:{server}</div>
                      <div class="text-sm text-slate-300">Filter by MX record servers</div>
                      <div class="text-xs text-slate-400 mt-1">Example: /match/mx:gmail.com</div>
                    </div>

                    <div class="bg-black/30 rounded-lg p-3">
                      <div class="font-mono text-cyan-300 mb-1">ns:{nameserver}</div>
                      <div class="text-sm text-slate-300">Filter by nameserver</div>
                      <div class="text-xs text-slate-400 mt-1">Example: /match/ns:cloudflare.com</div>
                    </div>

                    <div class="bg-black/30 rounded-lg p-3">
                      <div class="font-mono text-cyan-300 mb-1">cname:{target}</div>
                      <div class="text-sm text-slate-300">Filter by CNAME targets</div>
                      <div class="text-xs text-slate-400 mt-1">Example: /match/cname:amazonaws.com</div>
                    </div>

                  </div>
                </div>

                <!-- Organizational Conditions -->
                <div id="organizational"
                  class="bg-gradient-to-r from-slate-900/50 to-slate-800/50 rounded-xl p-4 sm:p-6 border border-orange-500/20">
                  <h3 class="text-xl font-semibold text-orange-400 mb-4">🏢 Organizational Intelligence</h3>
                  <div class="grid gap-4 md:grid-cols-2">

                    <div class="space-y-3">
                      <div class="bg-black/30 rounded-lg p-3">
                        <div class="font-mono text-orange-300 mb-1">org:{name}</div>
                        <div class="text-sm text-slate-300">Filter by organization name</div>
                        <div class="text-xs text-slate-400 mt-1">Example: /match/org:google</div>
                      </div>

                      <div class="bg-black/30 rounded-lg p-3">
                        <div class="font-mono text-orange-300 mb-1">unit:{department}</div>
                        <div class="text-sm text-slate-300">Filter by organizational unit</div>
                        <div class="text-xs text-slate-400 mt-1">Example: /match/unit:it</div>
                      </div>
                    </div>

                    <div class="space-y-3">
                      <div class="bg-black/30 rounded-lg p-3">
                        <div class="font-mono text-orange-300 mb-1">site:{identifier}</div>
                        <div class="text-sm text-slate-300">Filter by site identifier</div>
                        <div class="text-xs text-slate-400 mt-1">Example: /match/site:production</div>
                      </div>

                      <div class="bg-black/30 rounded-lg p-3">
                        <div class="font-mono text-orange-300 mb-1">loc:{location}</div>
                        <div class="text-sm text-slate-300">Filter by location identifier</div>
                        <div class="text-xs text-slate-400 mt-1">Example: /match/loc:datacenter1</div>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>

            <!-- Analytics & Monitoring -->
            <div class="mb-6 sm:mb-8">
              <h2 class="text-2xl font-semibold text-white mb-4 sm:mb-6">Analytics & Monitoring Endpoints</h2>
              <div class="grid gap-4 sm:gap-6 md:grid-cols-2">

                <!-- Trends Analysis -->
                <div
                  class="bg-gradient-to-br from-pink-900/30 to-pink-800/30 rounded-xl p-4 sm:p-6 border border-pink-500/20">
                  <h3 class="text-xl font-semibold text-pink-400 mb-4">📊 Request Trends</h3>
                  <div class="space-y-3">
                    <div class="bg-black/30 rounded-lg p-3">
                      <code class="text-pink-300 text-sm">/trends/requests</code>
                      <div class="text-slate-300 text-sm mt-1">API usage analytics and patterns</div>
                    </div>

                    <div class="text-sm text-slate-300">
                      <strong>Parameters:</strong>
                      <ul class="list-disc list-inside ml-4 mt-2 space-y-1">
                        <li><code class="text-amber-300">interval</code>: hour, minute, day</li>
                        <li><code class="text-amber-300">lookback_minutes</code>: Analysis timeframe</li>
                        <li><code class="text-amber-300">path</code>: Specific endpoint trends</li>
                        <li><code class="text-amber-300">top_paths</code>: Most popular endpoints</li>
                        <li><code class="text-amber-300">buckets</code>: Data aggregation buckets</li>
                      </ul>
                    </div>

                    <div class="text-sm text-slate-300">
                      <strong>Example Queries:</strong>
                      <div class="space-y-2 mt-2">
                        <div class="bg-black/50 rounded p-2">
                          <code
                            class="text-xs text-emerald-300">/trends/requests?interval=hour&lookback_minutes=1440</code>
                          <div class="text-xs text-slate-400 mt-1">24-hour API usage patterns</div>
                        </div>
                        <div class="bg-black/50 rounded p-2">
                          <code class="text-xs text-emerald-300">/trends/requests?top_paths=10&recent_limit=50</code>
                          <div class="text-xs text-slate-400 mt-1">Most popular API endpoints</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Live Monitoring -->
                <div
                  class="bg-gradient-to-br from-cyan-900/30 to-cyan-800/30 rounded-xl p-4 sm:p-6 border border-cyan-500/20">
                  <h3 class="text-xl font-semibold text-cyan-400 mb-4">🔴 Live Monitoring</h3>
                  <div class="space-y-3">
                    <div class="bg-black/30 rounded-lg p-3">
                      <code class="text-cyan-300 text-sm">/live/scan/{target}</code>
                      <div class="text-slate-300 text-sm mt-1">Real-time domain scanning</div>
                    </div>

                    <div class="text-sm text-slate-300">
                      <strong>Features:</strong>
                      <ul class="list-disc list-inside ml-4 mt-2 space-y-1">
                        <li>WebSocket-based real-time results</li>
                        <li>Progressive scan result streaming</li>
                        <li>Multi-protocol analysis</li>
                        <li>SSL certificate validation</li>
                        <li>DNS resolution tracking</li>
                      </ul>
                    </div>

                    <div class="text-sm text-slate-300">
                      <strong>Scan Types:</strong>
                      <div class="grid grid-cols-2 gap-2 mt-2 text-xs">
                        <div>🌐 DNS Resolution</div>
                        <div>🔒 SSL Analysis</div>
                        <div>🚪 Port Scanning</div>
                        <div>📍 Geolocation</div>
                        <div>🏢 Organization Info</div>
                        <div>⚡ Performance Tests</div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <!-- Advanced Integration Examples -->
            <div class="mb-6 sm:mb-8">
              <h2 class="text-2xl font-semibold text-white mb-4 sm:mb-6">Real-World Integration Examples</h2>

              <!-- Security Research -->
              <div id="security-research" class="mb-4 sm:mb-6">
                <h3 class="text-lg font-semibold text-emerald-400 mb-3 sm:mb-4">🔍 Security Research Workflows</h3>
                <div class="grid gap-3 sm:gap-4 md:grid-cols-2">

                  <div class="bg-slate-900/30 rounded-xl p-3 sm:p-4 border border-emerald-500/20">
                    <h4 class="font-medium text-white mb-3">Certificate Authority Analysis</h4>
                    <div class="space-y-2 text-sm">
                      <div class="bg-black/50 rounded p-2">
                        <code class="text-emerald-300 text-xs">/match/ca:letsencrypt</code>
                        <div class="text-slate-400 text-xs mt-1">Find Let's Encrypt certificates</div>
                      </div>
                      <div class="bg-black/50 rounded p-2">
                        <code class="text-emerald-300 text-xs">/match/before:2024-12-31</code>
                        <div class="text-slate-400 text-xs mt-1">Expiring certificates</div>
                      </div>
                      <div class="bg-black/50 rounded p-2">
                        <code class="text-emerald-300 text-xs">/match/ssl:cloudflare</code>
                        <div class="text-slate-400 text-xs mt-1">Cloudflare-protected domains</div>
                      </div>
                    </div>
                  </div>

                  <div class="bg-slate-900/30 rounded-xl p-3 sm:p-4 border border-emerald-500/20">
                    <h4 class="font-medium text-white mb-3">Infrastructure Reconnaissance</h4>
                    <div class="space-y-2 text-sm">
                      <div class="bg-black/50 rounded p-2">
                        <code class="text-emerald-300 text-xs">/match/asn:15169</code>
                        <div class="text-slate-400 text-xs mt-1">Google Cloud infrastructure</div>
                      </div>
                      <div class="bg-black/50 rounded p-2">
                        <code class="text-emerald-300 text-xs">/match/port:22</code>
                        <div class="text-slate-400 text-xs mt-1">SSH-accessible hosts</div>
                      </div>
                      <div class="bg-black/50 rounded p-2">
                        <code class="text-emerald-300 text-xs">/match/server:nginx</code>
                        <div class="text-slate-400 text-xs mt-1">Nginx-powered sites</div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              <!-- Compliance Monitoring -->
              <div id="compliance-monitoring" class="mb-4 sm:mb-6">
                <h3 class="text-lg font-semibold text-blue-400 mb-3 sm:mb-4">📋 Compliance & Monitoring</h3>
                <div class="grid gap-3 sm:gap-4 md:grid-cols-2">

                  <div class="bg-slate-900/30 rounded-xl p-3 sm:p-4 border border-blue-500/20">
                    <h4 class="font-medium text-white mb-3">Geographic Compliance</h4>
                    <div class="space-y-2 text-sm">
                      <div class="bg-black/50 rounded p-2">
                        <code class="text-blue-300 text-xs">/match/country:EU</code>
                        <div class="text-slate-400 text-xs mt-1">GDPR-relevant hosting</div>
                      </div>
                      <div class="bg-black/50 rounded p-2">
                        <code class="text-blue-300 text-xs">/match/state:california</code>
                        <div class="text-slate-400 text-xs mt-1">CCPA jurisdiction</div>
                      </div>
                      <div class="bg-black/50 rounded p-2">
                        <code class="text-blue-300 text-xs">/org/my-company</code>
                        <div class="text-slate-400 text-xs mt-1">Company-owned domains</div>
                      </div>
                    </div>
                  </div>

                  <div class="bg-slate-900/30 rounded-xl p-3 sm:p-4 border border-blue-500/20">
                    <h4 class="font-medium text-white mb-3">Service Monitoring</h4>
                    <div class="space-y-2 text-sm">
                      <div class="bg-black/50 rounded p-2">
                        <code class="text-blue-300 text-xs">/match/status:500</code>
                        <div class="text-slate-400 text-xs mt-1">Server error monitoring</div>
                      </div>
                      <div class="bg-black/50 rounded p-2">
                        <code class="text-blue-300 text-xs">/trends/requests?path=/dns</code>
                        <div class="text-slate-400 text-xs mt-1">DNS endpoint usage</div>
                      </div>
                      <div class="bg-black/50 rounded p-2">
                        <code class="text-blue-300 text-xs">/match/port:443</code>
                        <div class="text-slate-400 text-xs mt-1">HTTPS availability</div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              <!-- Data Science & Analytics -->
              <div id="data-analytics" class="mb-4 sm:mb-6">
                <h3 class="text-lg font-semibold text-purple-400 mb-3 sm:mb-4">📊 Data Science & Analytics</h3>
                <div class="grid gap-3 sm:gap-4 md:grid-cols-2">

                  <div class="bg-slate-900/30 rounded-xl p-3 sm:p-4 border border-purple-500/20">
                    <h4 class="font-medium text-white mb-3">Market Intelligence</h4>
                    <div class="space-y-2 text-sm">
                      <div class="bg-black/50 rounded p-2">
                        <code class="text-purple-300 text-xs">/query/competitors</code>
                        <div class="text-slate-400 text-xs mt-1">Competitor analysis</div>
                      </div>
                      <div class="bg-black/50 rounded p-2">
                        <code class="text-purple-300 text-xs">/match/service:wordpress</code>
                        <div class="text-slate-400 text-xs mt-1">Technology adoption tracking</div>
                      </div>
                      <div class="bg-black/50 rounded p-2">
                        <code class="text-purple-300 text-xs">/graph/brand-domain.com</code>
                        <div class="text-slate-400 text-xs mt-1">Brand relationship mapping</div>
                      </div>
                    </div>
                  </div>

                  <div class="bg-slate-900/30 rounded-xl p-3 sm:p-4 border border-purple-500/20">
                    <h4 class="font-medium text-white mb-3">Trend Analysis</h4>
                    <div class="space-y-2 text-sm">
                      <div class="bg-black/50 rounded p-2">
                        <code class="text-purple-300 text-xs">/trends/requests?interval=day&buckets=30</code>
                        <div class="text-slate-400 text-xs mt-1">Monthly usage patterns</div>
                      </div>
                      <div class="bg-black/50 rounded p-2">
                        <code class="text-purple-300 text-xs">/match/asn:* (pagination)</code>
                        <div class="text-slate-400 text-xs mt-1">Infrastructure consolidation</div>
                      </div>
                      <div class="bg-black/50 rounded p-2">
                        <code class="text-purple-300 text-xs">/dns?page_size=1000</code>
                        <div class="text-slate-400 text-xs mt-1">Bulk data analysis</div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <!-- API Response Examples -->
            <div id="api-response" class="mb-6 sm:mb-8">
              <h2 class="text-2xl font-semibold text-white mb-4 sm:mb-6">Complete Response Format Reference</h2>

              <!-- Standard Domain Response -->
              <div class="mb-4 sm:mb-6">
                <h3 class="text-lg font-semibold text-amber-400 mb-3 sm:mb-4">Standard Domain Record Response</h3>
                <div class="bg-slate-900/50 rounded-xl p-3 sm:p-4 border border-slate-700/50">
                  <pre class="text-emerald-300 text-sm overflow-x-auto"><code>{
  "results": [
    {
      "id": "507f1f77bcf86cd799439011",
      "domain": "example.com",
      "subdomain": "www.example.com",
      "a_record": ["93.184.216.34"],
      "aaaa_record": ["2606:2800:220:1:248:1893:25c8:1946"],
      "cname_record": [
        {
          "name": "www.example.com",
          "target": "example.edgekey.net",
          "ttl": 300
        }
      ],
      "mx_record": [
        {
          "exchange": "mail.example.com",
          "priority": 10,
          "ttl": 3600
        }
      ],
      "ns_record": [
        "ns1.example.com",
        "ns2.example.com"
      ],
      "txt_record": [
        "v=spf1 include:_spf.google.com ~all",
        "google-site-verification=abc123def456"
      ],
      "ssl": {
        "valid": true,
        "issuer": {
          "common_name": "DigiCert Global Root CA",
          "organization": "DigiCert Inc",
          "organizational_unit": "www.digicert.com",
          "country": "US",
          "state": "Utah",
          "city": "Lehi"
        },
        "subject": {
          "common_name": "example.com",
          "organization": "Example Corporation",
          "organizational_unit": "IT Department",
          "country": "US",
          "state": "California",
          "city": "San Francisco"
        },
        "subject_alt_names": [
          "example.com",
          "www.example.com",
          "api.example.com"
        ],
        "not_before": "2023-06-01T00:00:00Z",
        "not_after": "2024-06-01T00:00:00Z",
        "fingerprint_sha256": "sha256:abc123...",
        "serial_number": "123456789",
        "signature_algorithm": "sha256WithRSAEncryption",
        "public_key_algorithm": "rsaEncryption",
        "key_size": 2048,
        "ocsp_stapling": true,
        "sct_count": 2
      },
      "header": {
        "status": "200",
        "server": "nginx/1.18.0 (Ubuntu)",
        "x-powered-by": "Express",
        "content-type": "text/html; charset=utf-8",
        "content-length": "1234",
        "cache-control": "public, max-age=3600",
        "x-frame-options": "SAMEORIGIN",
        "x-content-type-options": "nosniff",
        "strict-transport-security": "max-age=31536000"
      },
      "geo": {
        "ip": "93.184.216.34",
        "country_code": "US",
        "country": "United States",
        "state": "California",
        "city": "San Francisco",
        "zip_code": "94107",
        "latitude": 37.7749,
        "longitude": -122.4194,
        "timezone": "America/Los_Angeles",
        "isp": "Akamai Technologies"
      },
      "whois": {
        "asn": "15169",
        "asn_description": "GOOGLE - Google LLC, US",
        "asn_country_code": "US",
        "asn_cidr": "93.184.216.0/24",
        "asn_registry": "arin",
        "organization": "Google LLC",
        "org_country_code": "US"
      },
      "ports": [
        {
          "port": 80,
          "protocol": "tcp",
          "service": "http",
          "state": "open",
          "banner": "nginx/1.18.0"
        },
        {
          "port": 443,
          "protocol": "tcp",
          "service": "https",
          "state": "open",
          "banner": "nginx/1.18.0 SSL"
        }
      ],
      "technologies": [
        {
          "name": "Nginx",
          "version": "1.18.0",
          "categories": ["Web Servers"]
        },
        {
          "name": "Express",
          "categories": ["Web Frameworks"]
        }
      ],
      "security": {
        "ssl_grade": "A+",
        "hsts_enabled": true,
        "hsts_max_age": 31536000,
        "mixed_content": false,
        "vulnerabilities": []
      },
      "performance": {
        "response_time_ms": 142,
        "ttfb_ms": 89,
        "size_bytes": 1234,
        "compression": "gzip"
      },
      "created": "2024-01-15T10:30:00Z",
      "updated": "2024-09-22T14:20:00Z",
      "scan_type": "full",
      "confidence": 0.95
    }
  ],
  "pagination": {
    "page": 1,
    "page_size": 25,
    "total": 1247,
    "pages": 50,
    "has_next": true,
    "has_previous": false,
    "next_url": "/dns?page=2&page_size=25",
    "previous_url": null
  },
  "query_info": {
    "query": "example.com",
    "endpoint": "/dns",
    "execution_time_ms": 45,
    "cache_hit": false,
    "api_version": "2.1",
    "timestamp": "2024-09-22T14:20:00Z"
  }
}</code></pre>
                </div>
              </div>

              <!-- Trends Response Example -->
              <div class="mb-4 sm:mb-6">
                <h3 class="text-lg font-semibold text-pink-400 mb-3 sm:mb-4">Analytics Trends Response</h3>
                <div class="bg-slate-900/50 rounded-xl p-3 sm:p-4 border border-slate-700/50">
                  <pre class="text-emerald-300 text-sm overflow-x-auto"><code>{
  "trends": [
    {
      "timestamp": "2024-09-22T14:00:00Z",
      "requests": 1247,
      "unique_ips": 89,
      "endpoints": {
        "/dns": 456,
        "/match/*": 321,
        "/query/*": 298,
        "/ip/*": 172
      },
      "top_conditions": [
        {"condition": "asn", "count": 123},
        {"condition": "country", "count": 89},
        {"condition": "port", "count": 67}
      ],
      "response_times": {
        "avg_ms": 142,
        "p50_ms": 98,
        "p95_ms": 456,
        "p99_ms": 1234
      },
      "status_codes": {
        "200": 1180,
        "400": 42,
        "404": 15,
        "500": 10
      }
    }
  ],
  "summary": {
    "period": "hour",
    "total_requests": 1247,
    "avg_requests_per_minute": 20.8,
    "peak_minute": "2024-09-22T14:15:00Z",
    "peak_requests": 45
  }
}</code></pre>
                </div>
              </div>
            </div>

            <!-- Quick Start Guide -->
            <div id="quick-start" class="mb-6 sm:mb-8">
              <h2 class="text-2xl font-semibold text-white mb-4 sm:mb-6">Quick Start Guide</h2>
              <div class="grid gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-4">

                <div
                  class="bg-gradient-to-br from-emerald-500/10 to-emerald-600/10 rounded-xl p-3 sm:p-4 border border-emerald-500/20">
                  <div class="text-emerald-400 font-semibold mb-2">1. Basic Search</div>
                  <code class="text-emerald-300 text-sm">/query/google.com</code>
                  <div class="text-slate-400 text-xs mt-2">Start with simple domain queries</div>
                </div>

                <div
                  class="bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-xl p-3 sm:p-4 border border-blue-500/20">
                  <div class="text-blue-400 font-semibold mb-2">2. Filter by ASN</div>
                  <code class="text-blue-300 text-sm">/match/asn:13335</code>
                  <div class="text-slate-400 text-xs mt-2">Find Cloudflare-hosted domains</div>
                </div>

                <div
                  class="bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-xl p-3 sm:p-4 border border-purple-500/20">
                  <div class="text-purple-400 font-semibold mb-2">3. Geographic Search</div>
                  <code class="text-purple-300 text-sm">/match/country:US</code>
                  <div class="text-slate-400 text-xs mt-2">US-hosted infrastructure</div>
                </div>

                <div
                  class="bg-gradient-to-br from-amber-500/10 to-amber-600/10 rounded-xl p-3 sm:p-4 border border-amber-500/20">
                  <div class="text-amber-400 font-semibold mb-2">4. Analyze Trends</div>
                  <code class="text-amber-300 text-sm">/trends/requests</code>
                  <div class="text-slate-400 text-xs mt-2">Monitor API usage patterns</div>
                </div>

              </div>

              <div class="mt-4 sm:mt-6 text-center">
                <div class="flex flex-col sm:flex-row gap-3 justify-center">
                  <a href="https://api.netscanner.io/dns?page=1&page_size=5" target="_blank"
                    class="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium px-4 sm:px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105">
                    🚀 Try Live API
                  </a>
                  <NuxtLink to="/docs/api"
                    class="inline-flex items-center gap-2 border border-purple-400/50 bg-purple-400/10 hover:bg-purple-400/20 text-purple-300 font-medium px-4 sm:px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105">
                    📖 API Documentation
                  </NuxtLink>
                  <NuxtLink to="/live/scan"
                    class="inline-flex items-center gap-2 border border-emerald-400/50 bg-emerald-400/10 hover:bg-emerald-400/20 text-emerald-300 font-medium px-4 sm:px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105">
                    🔍 Live Scanner
                  </NuxtLink>
                </div>
              </div>
            </div>

            <!-- Navigation -->
            <div class="text-center">
              <nuxt-link to="/docs/api"
                class="inline-flex items-center gap-2 bg-gradient-to-r from-cosmic-aurora to-sky-500 hover:from-cosmic-aurora/80 hover:to-sky-500/80 text-white font-medium px-4 sm:px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-glow">
                ← Back to API Documentation
              </nuxt-link>
            </div>

          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import Modal from '@/components/Modal.vue'
import Footer from '@/components/navfooter.vue'
import Navbar from '@/components/navheader.vue'
import { useMainStore } from '~/stores/main'

const mainStore = useMainStore()
const { modalVisible } = storeToRefs(mainStore)

useHead({
  title: 'Complete NetScanner API Guide - 20+ Endpoints & Advanced Features | NetScanner Documentation',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Comprehensive NetScanner API documentation covering 20+ endpoints, 15+ match conditions, analytics, live monitoring, and real-world integration examples. Complete reference for developers.'
    },
    {
      name: 'keywords',
      content: 'NetScanner API, comprehensive guide, match conditions, DNS API, domain intelligence, network analysis, SSL certificates, real-time analytics, live scanning, cybersecurity API, infrastructure monitoring'
    },
    {
      property: 'og:title',
      content: 'Complete NetScanner API Guide | Comprehensive Documentation'
    },
    {
      property: 'og:description',
      content: 'Master the NetScanner API with our complete guide covering all endpoints, advanced filtering, analytics, and practical integration examples.'
    },
    {
      property: 'og:type',
      content: 'article'
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:title',
      content: 'Complete NetScanner API Guide - 20+ Endpoints & Features'
    },
    {
      name: 'twitter:description',
      content: 'Comprehensive documentation for the NetScanner API with real-world examples and advanced features.'
    }
  ]
})
</script>
