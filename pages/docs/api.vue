<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
    <NavHeader />
    <div class="container mx-auto px-3 sm:px-4 py-6 sm:py-8">
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8">
        <!-- Sidebar -->
        <div class="lg:col-span-1">
          <div class="bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-lg p-4 sm:p-6 sticky top-8">
            <nav>
              <div class="mb-4 sm:mb-6">
                <h2 class="text-lg font-semibold text-white">API Documentation</h2>
              </div>
              <ul class="space-y-2">
                <li>
                  <NuxtLink to="/docs/api"
                    class="block py-2 px-3 text-sm bg-purple-500/20 text-purple-300 rounded font-medium">
                    Overview
                  </NuxtLink>
                </li>
                <li>
                  <div class="text-purple-300 text-sm font-medium py-2 px-3">Core Endpoints</div>
                  <ul class="ml-4 space-y-1">
                    <li>
                      <a href="#query-endpoint"
                        class="block py-1 px-2 text-sm text-gray-400 hover:text-purple-300 rounded">
                        /query
                      </a>
                    </li>
                    <li>
                      <a href="#dns-endpoint"
                        class="block py-1 px-2 text-sm text-gray-400 hover:text-purple-300 rounded">
                        /dns
                      </a>
                    </li>
                    <li>
                      <a href="#match-endpoint"
                        class="block py-1 px-2 text-sm text-gray-400 hover:text-purple-300 rounded">
                        /match
                      </a>
                    </li>
                    <li>
                      <a href="#ipv4-endpoint"
                        class="block py-1 px-2 text-sm text-gray-400 hover:text-purple-300 rounded">
                        /ipv4
                      </a>
                    </li>
                    <li>
                      <a href="#asn-endpoint"
                        class="block py-1 px-2 text-sm text-gray-400 hover:text-purple-300 rounded">
                        /asn
                      </a>
                    </li>
                    <li>
                      <a href="#cidr-endpoint"
                        class="block py-1 px-2 text-sm text-gray-400 hover:text-purple-300 rounded">
                        /cidr
                      </a>
                    </li>
                    <li>
                      <a href="#ip-endpoint"
                        class="block py-1 px-2 text-sm text-gray-400 hover:text-purple-300 rounded">
                        /ip
                      </a>
                    </li>
                    <li>
                      <a href="#subnet-endpoint"
                        class="block py-1 px-2 text-sm text-gray-400 hover:text-purple-300 rounded">
                        /subnet
                      </a>
                    </li>
                    <li>
                      <a href="#graph-endpoint"
                        class="block py-1 px-2 text-sm text-gray-400 hover:text-purple-300 rounded">
                        /graph
                      </a>
                    </li>
                    <li>
                      <a href="#trends-endpoint"
                        class="block py-1 px-2 text-sm text-gray-400 hover:text-purple-300 rounded">
                        /trends
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <div class="text-purple-300 text-sm font-medium py-2 px-3 mt-3 sm:mt-4">Examples</div>
                  <ul class="ml-4 space-y-1">
                    <li>
                      <NuxtLink to="/docs/examples/status"
                        class="block py-1 px-2 text-sm text-gray-400 hover:text-purple-300 rounded">
                        Match Conditions
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/docs/examples/server"
                        class="block py-1 px-2 text-sm text-gray-400 hover:text-purple-300 rounded">
                        Server Examples
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
            <h1
              class="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              NetScanner API Documentation
            </h1>

            <!-- Introduction -->
            <div class="bg-slate-800/50 rounded-lg p-4 sm:p-6 mb-6 sm:mb-8 border border-purple-500/10">
              <p class="text-gray-300 mb-4">
                NetScanner provides a comprehensive REST API for network reconnaissance, DNS analysis, and
                infrastructure discovery.
                Built with FastAPI and powered by MongoDB, it offers real-time insights into internet infrastructure.
              </p>
              <div class="bg-slate-700/50 rounded p-3 sm:p-4 font-mono text-sm">
                <div class="text-purple-300 mb-1">Base URL:</div>
                <div class="text-white">{{ apiUrl }}</div>
              </div>
            </div>

            <!-- Authentication & Rate Limits -->
            <div class="bg-slate-800/30 rounded-lg border border-purple-500/10 p-4 sm:p-6 mb-6 sm:mb-8">
              <h2 class="text-2xl font-semibold text-white mb-4">Authentication & Limits</h2>
              <div class="space-y-4">
                <div>
                  <h3 class="text-lg font-medium text-purple-300 mb-2">Authentication</h3>
                  <p class="text-gray-300">Currently, the API is publicly accessible without authentication. Rate
                    limiting may apply.</p>
                </div>
                <div>
                  <h3 class="text-lg font-medium text-purple-300 mb-2">Pagination</h3>
                  <p class="text-gray-300 mb-2">All list endpoints support pagination with the following parameters:</p>
                  <ul class="text-gray-400 text-sm space-y-1 ml-4">
                    <li>• <code class="text-purple-300">page</code>: Page number (default: 1)</li>
                    <li>• <code class="text-purple-300">page_size</code>: Items per page (default: 25, max: 100)</li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Core Endpoints -->
            <div class="space-y-6 sm:space-y-8">
              <!-- Query Endpoint -->
              <div id="query-endpoint" class="bg-slate-800/30 rounded-lg border border-purple-500/10 p-4 sm:p-6">
                <h2 class="text-2xl font-semibold text-white mb-4 flex items-center">
                  <div class="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mr-3"></div>
                  Domain Search
                </h2>
                <div class="space-y-4">
                  <div class="bg-slate-900/50 rounded p-3 sm:p-4">
                    <div class="flex items-center gap-2 mb-2">
                      <span class="bg-green-500/20 text-green-300 px-2 py-1 rounded text-xs font-mono">GET</span>
                      <code class="text-white">/query/{domain}</code>
                    </div>
                    <p class="text-gray-300 text-sm mb-3">Full-text search across DNS records for domain names and
                      related information.</p>
                    <div class="text-xs text-gray-400 space-y-1">
                      <div><strong>Parameters:</strong></div>
                      <div>• <code>domain</code> (path): Domain name to search for</div>
                      <div>• <code>page</code>, <code>page_size</code> (query): Pagination parameters</div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- DNS Endpoint -->
              <div id="dns-endpoint" class="bg-slate-800/30 rounded-lg border border-purple-500/10 p-4 sm:p-6">
                <h2 class="text-2xl font-semibold text-white mb-4 flex items-center">
                  <div class="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full mr-3"></div>
                  DNS Records
                </h2>
                <div class="space-y-4">
                  <div class="bg-slate-900/50 rounded p-3 sm:p-4">
                    <div class="flex items-center gap-2 mb-2">
                      <span class="bg-green-500/20 text-green-300 px-2 py-1 rounded text-xs font-mono">GET</span>
                      <code class="text-white">/dns</code>
                    </div>
                    <p class="text-gray-300 text-sm mb-3">Retrieve the most recently updated DNS records with
                      comprehensive domain information.</p>
                    <div class="text-xs text-gray-400 space-y-1">
                      <div><strong>Returns:</strong> A/AAAA records, CNAME, MX, NS records, WHOIS data, GeoIP
                        information</div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Match Endpoint -->
              <div id="match-endpoint" class="bg-slate-800/30 rounded-lg border border-purple-500/10 p-6">
                <h2 class="text-2xl font-semibold text-white mb-4 flex items-center">
                  <div class="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3"></div>
                  Advanced Filtering
                </h2>
                <div class="space-y-4">
                  <div class="bg-slate-900/50 rounded p-4">
                    <div class="flex items-center gap-2 mb-2">
                      <span class="bg-green-500/20 text-green-300 px-2 py-1 rounded text-xs font-mono">GET</span>
                      <code class="text-white">/match/{condition}:{query}</code>
                    </div>
                    <p class="text-gray-300 text-sm mb-3">Search domains using advanced condition-based filtering.</p>
                    <div class="text-xs text-gray-400 space-y-1">
                      <div><strong>Supported Conditions:</strong></div>
                      <div class="grid grid-cols-2 gap-2 mt-2">
                        <div>• <code class="text-purple-300">asn</code> - ASN number</div>
                        <div>• <code class="text-purple-300">country</code> - Country code</div>
                        <div>• <code class="text-purple-300">port</code> - Open ports</div>
                        <div>• <code class="text-purple-300">ssl</code> - SSL certificates</div>
                        <div>• <code class="text-purple-300">status</code> - HTTP status</div>
                        <div>• <code class="text-purple-300">server</code> - HTTP server</div>
                        <div>• <code class="text-purple-300">cidr</code> - Network range</div>
                        <div>• <code class="text-purple-300">org</code> - Organization</div>
                      </div>
                      <div class="mt-2">
                        <NuxtLink to="/docs/examples/status" class="text-purple-400 hover:text-purple-300 text-sm">
                          View all match conditions →
                        </NuxtLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- IPv4 Endpoint -->
              <div id="ipv4-endpoint" class="bg-slate-800/30 rounded-lg border border-purple-500/10 p-6">
                <h2 class="text-2xl font-semibold text-white mb-4 flex items-center">
                  <div class="w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mr-3"></div>
                  IPv4 Records
                </h2>
                <div class="space-y-4">
                  <div class="bg-slate-900/50 rounded p-4">
                    <div class="flex items-center gap-2 mb-2">
                      <span class="bg-green-500/20 text-green-300 px-2 py-1 rounded text-xs font-mono">GET</span>
                      <code class="text-white">/ipv4</code>
                    </div>
                    <p class="text-gray-300 text-sm mb-3">Get the most recent IPv4 address records and their associated
                      domains.</p>
                  </div>
                </div>
              </div>

              <!-- ASN Endpoint -->
              <div id="asn-endpoint" class="bg-slate-800/30 rounded-lg border border-purple-500/10 p-6">
                <h2 class="text-2xl font-semibold text-white mb-4 flex items-center">
                  <div class="w-3 h-3 bg-gradient-to-r from-red-400 to-pink-400 rounded-full mr-3"></div>
                  ASN Information
                </h2>
                <div class="space-y-4">
                  <div class="bg-slate-900/50 rounded p-4">
                    <div class="flex items-center gap-2 mb-2">
                      <span class="bg-green-500/20 text-green-300 px-2 py-1 rounded text-xs font-mono">GET</span>
                      <code class="text-white">/asn</code>
                    </div>
                    <p class="text-gray-300 text-sm mb-3">Retrieve Autonomous System Number information and associated
                      networks.</p>
                    <div class="text-xs text-gray-400 space-y-1">
                      <div><strong>Query Parameters:</strong></div>
                      <div>• <code>country_code</code> (optional): Filter by country code</div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- CIDR Endpoint -->
              <div id="cidr-endpoint" class="bg-slate-800/30 rounded-lg border border-purple-500/10 p-6">
                <h2 class="text-2xl font-semibold text-white mb-4 flex items-center">
                  <div class="w-3 h-3 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full mr-3"></div>
                  CIDR Ranges
                </h2>
                <div class="space-y-4">
                  <div class="bg-slate-900/50 rounded p-4">
                    <div class="flex items-center gap-2 mb-2">
                      <span class="bg-green-500/20 text-green-300 px-2 py-1 rounded text-xs font-mono">GET</span>
                      <code class="text-white">/cidr</code>
                    </div>
                    <p class="text-gray-300 text-sm mb-3">Get the latest CIDR network ranges and associated ASN
                      information.</p>
                  </div>
                </div>
              </div>

              <!-- IP Lookup Endpoint -->
              <div id="ip-endpoint" class="bg-slate-800/30 rounded-lg border border-purple-500/10 p-6">
                <h2 class="text-2xl font-semibold text-white mb-4 flex items-center">
                  <div class="w-3 h-3 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full mr-3"></div>
                  IP Address Lookup
                </h2>
                <div class="space-y-4">
                  <div class="bg-slate-900/50 rounded p-4">
                    <div class="flex items-center gap-2 mb-2">
                      <span class="bg-green-500/20 text-green-300 px-2 py-1 rounded text-xs font-mono">GET</span>
                      <code class="text-white">/ip/{ipv4}</code>
                    </div>
                    <p class="text-gray-300 text-sm mb-3">Detailed information about a specific IPv4 address including
                      domains and reverse DNS.</p>
                    <div class="text-xs text-gray-400 space-y-1">
                      <div><strong>Parameters:</strong></div>
                      <div>• <code>ipv4</code> (path): IPv4 address to lookup</div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Subnet Endpoint -->
              <div id="subnet-endpoint" class="bg-slate-800/30 rounded-lg border border-purple-500/10 p-6">
                <h2 class="text-2xl font-semibold text-white mb-4 flex items-center">
                  <div class="w-3 h-3 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full mr-3"></div>
                  Subnet Analysis
                </h2>
                <div class="space-y-4">
                  <div class="bg-slate-900/50 rounded p-4">
                    <div class="flex items-center gap-2 mb-2">
                      <span class="bg-green-500/20 text-green-300 px-2 py-1 rounded text-xs font-mono">GET</span>
                      <code class="text-white">/subnet/{network}/{prefix}</code>
                    </div>
                    <p class="text-gray-300 text-sm mb-3">Analyze specific subnet ranges and discover associated
                      domains.</p>
                    <div class="text-xs text-gray-400 space-y-1">
                      <div><strong>Example:</strong> <code>/subnet/192.168.1/24</code></div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Graph Endpoint -->
              <div id="graph-endpoint" class="bg-slate-800/30 rounded-lg border border-purple-500/10 p-6">
                <h2 class="text-2xl font-semibold text-white mb-4 flex items-center">
                  <div class="w-3 h-3 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mr-3"></div>
                  Relationship Graph
                </h2>
                <div class="space-y-4">
                  <div class="bg-slate-900/50 rounded p-4">
                    <div class="flex items-center gap-2 mb-2">
                      <span class="bg-green-500/20 text-green-300 px-2 py-1 rounded text-xs font-mono">GET</span>
                      <code class="text-white">/graph/{domain}</code>
                    </div>
                    <p class="text-gray-300 text-sm mb-3">Discover related domains through SSL certificates, DNS
                      records, and infrastructure connections.</p>
                    <div class="text-xs text-gray-400 space-y-1">
                      <div><strong>Relations:</strong> SSL SANs, CNAME records, MX records, nameservers</div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Trends Endpoint -->
              <div id="trends-endpoint" class="bg-slate-800/30 rounded-lg border border-purple-500/10 p-6">
                <h2 class="text-2xl font-semibold text-white mb-4 flex items-center">
                  <div class="w-3 h-3 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full mr-3"></div>
                  Request Trends
                </h2>
                <div class="space-y-4">
                  <div class="bg-slate-900/50 rounded p-4">
                    <div class="flex items-center gap-2 mb-2">
                      <span class="bg-green-500/20 text-green-300 px-2 py-1 rounded text-xs font-mono">GET</span>
                      <code class="text-white">/trends/requests</code>
                    </div>
                    <p class="text-gray-300 text-sm mb-3">Analyze API usage patterns and request statistics over time.
                    </p>
                    <div class="text-xs text-gray-400 space-y-1">
                      <div><strong>Parameters:</strong></div>
                      <div>• <code>interval</code>: minute, hour, day</div>
                      <div>• <code>lookback_minutes</code>: Time window</div>
                      <div>• <code>buckets</code>: Number of data points</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Response Format -->
            <div class="mt-6 sm:mt-8 bg-slate-800/30 rounded-lg border border-purple-500/10 p-4 sm:p-6">
              <h2 class="text-2xl font-semibold text-white mb-4">Response Format</h2>
              <div class="space-y-4">
                <div>
                  <h3 class="text-lg font-medium text-purple-300 mb-2">Standard Response</h3>
                  <div class="bg-slate-900/50 rounded p-3 sm:p-4 font-mono text-sm">
                    <pre class="text-gray-300">{
  "results": [...],
  "pagination": {
    "page": 1,
    "page_size": 25,
    "total": 1000,
    "pages": 40
  }
}</pre>
                  </div>
                </div>
                <div>
                  <h3 class="text-lg font-medium text-purple-300 mb-2">Error Response</h3>
                  <div class="bg-slate-900/50 rounded p-3 sm:p-4 font-mono text-sm">
                    <pre class="text-gray-300">{
  "detail": "No documents found"
}</pre>
                  </div>
                </div>
              </div>
            </div>

            <!-- Examples -->
            <div class="mt-6 sm:mt-8 bg-slate-800/30 rounded-lg border border-purple-500/10 p-4 sm:p-6">
              <h2 class="text-2xl font-semibold text-white mb-4 sm:mb-6">Interactive Examples</h2>

              <!-- Basic Search Examples -->
              <div class="mb-6 sm:mb-8">
                <h3 class="text-lg font-medium text-purple-300 mb-3 sm:mb-4">Basic Domain & Infrastructure Search</h3>
                <div class="grid gap-3 sm:gap-4 md:grid-cols-2">
                  <div class="bg-slate-900/50 rounded p-3 sm:p-4">
                    <div class="text-gray-300 text-sm mb-2">Search for Google domains:</div>
                    <div class="font-mono text-xs text-purple-300 break-all mb-3">
                      {{ apiUrl }}/query/google.com
                    </div>
                    <div class="text-xs text-gray-400">Full-text search across DNS records</div>
                  </div>

                  <div class="bg-slate-900/50 rounded p-4">
                    <div class="text-gray-300 text-sm mb-2">Latest DNS records:</div>
                    <div class="font-mono text-xs text-purple-300 break-all mb-3">
                      {{ apiUrl }}/dns?page=1&page_size=10
                    </div>
                    <div class="text-xs text-gray-400">Recently updated DNS entries</div>
                  </div>

                  <div class="bg-slate-900/50 rounded p-4">
                    <div class="text-gray-300 text-sm mb-2">IPv4 lookup:</div>
                    <div class="font-mono text-xs text-purple-300 break-all mb-3">
                      {{ apiUrl }}/ip/8.8.8.8
                    </div>
                    <div class="text-xs text-gray-400">Detailed IP address information</div>
                  </div>

                  <div class="bg-slate-900/50 rounded p-4">
                    <div class="text-gray-300 text-sm mb-2">ASN information:</div>
                    <div class="font-mono text-xs text-purple-300 break-all mb-3">
                      {{ apiUrl }}/asn?country_code=US
                    </div>
                    <div class="text-xs text-gray-400">US-based autonomous systems</div>
                  </div>
                </div>
              </div>

              <!-- Advanced Match Conditions -->
              <div class="mb-6 sm:mb-8">
                <h3 class="text-lg font-medium text-purple-300 mb-3 sm:mb-4">Advanced Match Conditions</h3>
                <div class="grid gap-3 sm:gap-4 md:grid-cols-2">
                  <div class="bg-slate-900/50 rounded p-4">
                    <div class="text-gray-300 text-sm mb-2">Domains on Google's ASN:</div>
                    <div class="font-mono text-xs text-purple-300 break-all mb-3">
                      {{ apiUrl }}/match/asn:15169
                    </div>
                    <div class="text-xs text-gray-400">All domains hosted on Google infrastructure</div>
                  </div>

                  <div class="bg-slate-900/50 rounded p-4">
                    <div class="text-gray-300 text-sm mb-2">Domains with HTTPS enabled:</div>
                    <div class="font-mono text-xs text-purple-300 break-all mb-3">
                      {{ apiUrl }}/match/port:443
                    </div>
                    <div class="text-xs text-gray-400">Find all domains with SSL/TLS</div>
                  </div>

                  <div class="bg-slate-900/50 rounded p-4">
                    <div class="text-gray-300 text-sm mb-2">Let's Encrypt certificates:</div>
                    <div class="font-mono text-xs text-purple-300 break-all mb-3">
                      {{ apiUrl }}/match/ssl:Let's Encrypt
                    </div>
                    <div class="text-xs text-gray-400">Domains using Let's Encrypt SSL</div>
                  </div>

                  <div class="bg-slate-900/50 rounded p-4">
                    <div class="text-gray-300 text-sm mb-2">German infrastructure:</div>
                    <div class="font-mono text-xs text-purple-300 break-all mb-3">
                      {{ apiUrl }}/match/country:DE
                    </div>
                    <div class="text-xs text-gray-400">Domains hosted in Germany</div>
                  </div>

                  <div class="bg-slate-900/50 rounded p-4">
                    <div class="text-gray-300 text-sm mb-2">Nginx web servers:</div>
                    <div class="font-mono text-xs text-purple-300 break-all mb-3">
                      {{ apiUrl }}/match/server:nginx
                    </div>
                    <div class="text-xs text-gray-400">Sites running Nginx</div>
                  </div>

                  <div class="bg-slate-900/50 rounded p-4">
                    <div class="text-gray-300 text-sm mb-2">HTTP status codes:</div>
                    <div class="font-mono text-xs text-purple-300 break-all mb-3">
                      {{ apiUrl }}/match/status:200
                    </div>
                    <div class="text-xs text-gray-400">Successfully responding domains</div>
                  </div>
                </div>
              </div>

              <!-- Network Analysis -->
              <div class="mb-6 sm:mb-8">
                <h3 class="text-lg font-medium text-purple-300 mb-3 sm:mb-4">Network Analysis & Topology</h3>
                <div class="grid gap-3 sm:gap-4 md:grid-cols-2">
                  <div class="bg-slate-900/50 rounded p-4">
                    <div class="text-gray-300 text-sm mb-2">Subnet analysis:</div>
                    <div class="font-mono text-xs text-purple-300 break-all mb-3">
                      {{ apiUrl }}/subnet/192.168.1/24
                    </div>
                    <div class="text-xs text-gray-400">Analyze specific network ranges</div>
                  </div>

                  <div class="bg-slate-900/50 rounded p-4">
                    <div class="text-gray-300 text-sm mb-2">CIDR network ranges:</div>
                    <div class="font-mono text-xs text-purple-300 break-all mb-3">
                      {{ apiUrl }}/cidr?page=1&page_size=20
                    </div>
                    <div class="text-xs text-gray-400">Latest CIDR allocations</div>
                  </div>

                  <div class="bg-slate-900/50 rounded p-4">
                    <div class="text-gray-300 text-sm mb-2">Domain relationship graph:</div>
                    <div class="font-mono text-xs text-purple-300 break-all mb-3">
                      {{ apiUrl }}/graph/example.com
                    </div>
                    <div class="text-xs text-gray-400">SSL, DNS, and infrastructure relationships</div>
                  </div>

                  <div class="bg-slate-900/50 rounded p-4">
                    <div class="text-gray-300 text-sm mb-2">IPv4 records:</div>
                    <div class="font-mono text-xs text-purple-300 break-all mb-3">
                      {{ apiUrl }}/ipv4?page=1&page_size=25
                    </div>
                    <div class="text-xs text-gray-400">Recent IPv4 address discoveries</div>
                  </div>
                </div>
              </div>

              <!-- Specialized Match Conditions -->
              <div class="mb-6 sm:mb-8">
                <h3 class="text-lg font-medium text-purple-300 mb-3 sm:mb-4">Specialized Security & Certificate Analysis
                </h3>
                <div class="grid gap-3 sm:gap-4 md:grid-cols-2">
                  <div class="bg-slate-900/50 rounded p-4">
                    <div class="text-gray-300 text-sm mb-2">Certificate authorities:</div>
                    <div class="font-mono text-xs text-purple-300 break-all mb-3">
                      {{ apiUrl }}/match/ca:DigiCert
                    </div>
                    <div class="text-xs text-gray-400">Domains with DigiCert certificates</div>
                  </div>

                  <div class="bg-slate-900/50 rounded p-4">
                    <div class="text-gray-300 text-sm mb-2">Organizational units:</div>
                    <div class="font-mono text-xs text-purple-300 break-all mb-3">
                      {{ apiUrl }}/match/unit:IT Department
                    </div>
                    <div class="text-xs text-gray-400">Certificates by organizational unit</div>
                  </div>

                  <div class="bg-slate-900/50 rounded p-4">
                    <div class="text-gray-300 text-sm mb-2">Certificate validity periods:</div>
                    <div class="font-mono text-xs text-purple-300 break-all mb-3">
                      {{ apiUrl }}/match/before:2024-01-01
                    </div>
                    <div class="text-xs text-gray-400">Certificates valid before date</div>
                  </div>

                  <div class="bg-slate-900/50 rounded p-4">
                    <div class="text-gray-300 text-sm mb-2">OCSP responders:</div>
                    <div class="font-mono text-xs text-purple-300 break-all mb-3">
                      {{ apiUrl }}/match/ocsp:ocsp.digicert.com
                    </div>
                    <div class="text-xs text-gray-400">Certificate revocation endpoints</div>
                  </div>

                  <div class="bg-slate-900/50 rounded p-4">
                    <div class="text-gray-300 text-sm mb-2">Service detection:</div>
                    <div class="font-mono text-xs text-purple-300 break-all mb-3">
                      {{ apiUrl }}/match/service:PHP
                    </div>
                    <div class="text-xs text-gray-400">Sites powered by specific technologies</div>
                  </div>

                  <div class="bg-slate-900/50 rounded p-4">
                    <div class="text-gray-300 text-sm mb-2">Geographic regions:</div>
                    <div class="font-mono text-xs text-purple-300 break-all mb-3">
                      {{ apiUrl }}/match/state:California
                    </div>
                    <div class="text-xs text-gray-400">Infrastructure by state/province</div>
                  </div>
                </div>
              </div>

              <!-- API Analytics -->
              <div class="mb-6 sm:mb-8">
                <h3 class="text-lg font-medium text-purple-300 mb-3 sm:mb-4">API Analytics & Monitoring</h3>
                <div class="grid gap-3 sm:gap-4 md:grid-cols-2">
                  <div class="bg-slate-900/50 rounded p-4">
                    <div class="text-gray-300 text-sm mb-2">Request trends (hourly):</div>
                    <div class="font-mono text-xs text-purple-300 break-all mb-3">
                      {{ apiUrl }}/trends/requests?interval=hour&lookback_minutes=1440
                    </div>
                    <div class="text-xs text-gray-400">API usage patterns over 24 hours</div>
                  </div>

                  <div class="bg-slate-900/50 rounded p-4">
                    <div class="text-gray-300 text-sm mb-2">Popular endpoints:</div>
                    <div class="font-mono text-xs text-purple-300 break-all mb-3">
                      {{ apiUrl }}/trends/requests?top_paths=10&recent_limit=50
                    </div>
                    <div class="text-xs text-gray-400">Most frequently used API endpoints</div>
                  </div>

                  <div class="bg-slate-900/50 rounded p-4">
                    <div class="text-gray-300 text-sm mb-2">Endpoint-specific trends:</div>
                    <div class="font-mono text-xs text-purple-300 break-all mb-3">
                      {{ apiUrl }}/trends/requests?path=/dns&interval=minute
                    </div>
                    <div class="text-xs text-gray-400">Usage patterns for specific endpoints</div>
                  </div>

                  <div class="bg-slate-900/50 rounded p-4">
                    <div class="text-gray-300 text-sm mb-2">Daily aggregation:</div>
                    <div class="font-mono text-xs text-purple-300 break-all mb-3">
                      {{ apiUrl }}/trends/requests?interval=day&buckets=7
                    </div>
                    <div class="text-xs text-gray-400">Weekly request patterns</div>
                  </div>
                </div>
              </div>

              <!-- Sample Response -->
              <div class="mb-4 sm:mb-6">
                <h3 class="text-lg font-medium text-purple-300 mb-3 sm:mb-4">Sample Response Structure</h3>
                <div class="bg-slate-900/50 rounded p-3 sm:p-4 font-mono text-sm">
                  <pre class="text-gray-300 whitespace-pre-wrap overflow-x-auto">{
  "results": [
    {
      "domain": "example.com",
      "a_record": ["93.184.216.34"],
      "cname_record": [{"target": "example.edgekey.net"}],
      "mx_record": [{"exchange": "mail.example.com", "priority": 10}],
      "ns_record": ["ns1.example.com", "ns2.example.com"],
      "ssl": {
        "issuer": {
          "common_name": "DigiCert Global Root CA",
          "organization": "DigiCert Inc",
          "country": "US"
        },
        "subject": {
          "common_name": "example.com",
          "organization": "Example Corp"
        },
        "subject_alt_names": ["example.com", "www.example.com"],
        "not_before": "2023-06-01T00:00:00Z",
        "not_after": "2024-06-01T00:00:00Z"
      },
      "header": {
        "status": "200",
        "server": "nginx/1.18.0",
        "x-powered-by": "Express"
      },
      "geo": {
        "country_code": "US",
        "country": "United States",
        "state": "California",
        "city": "San Francisco"
      },
      "whois": {
        "asn": "15169",
        "asn_description": "GOOGLE - Google LLC, US",
        "asn_country_code": "US",
        "asn_cidr": "93.184.216.0/24",
        "asn_registry": "arin"
      },
      "ports": [
        {"port": 80, "protocol": "tcp"},
        {"port": 443, "protocol": "tcp"}
      ],
      "created": "2024-01-15T10:30:00Z",
      "updated": "2024-09-22T14:20:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "page_size": 25,
    "total": 1247,
    "pages": 50,
    "has_next": true,
    "has_previous": false
  }
}</pre>
                </div>
              </div>

              <!-- Try It Out -->
              <div
                class="text-center bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl p-4 sm:p-6 border border-purple-500/20">
                <h3 class="text-lg font-semibold text-white mb-3">Ready to Explore?</h3>
                <p class="text-gray-300 mb-4">
                  Start with these endpoints or build your own queries using the comprehensive API reference above.
                </p>
                <div class="flex flex-col sm:flex-row gap-3 justify-center">
                  <a :href="`${apiUrl}/dns?page=1&page_size=5`" target="_blank"
                    class="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium px-4 sm:px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105">
                    🚀 Try Live API
                  </a>
                  <NuxtLink to="/docs/examples/status"
                    class="inline-flex items-center gap-2 border border-purple-400/50 bg-purple-400/10 hover:bg-purple-400/20 text-purple-300 font-medium px-4 sm:px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105">
                    📖 View More Examples
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <NavFooter />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useNuxtApp } from '#imports'
import NavHeader from '../../components/NavHeader.vue'

const { $env } = useNuxtApp()
const apiUrl = computed(() => $env?.API_URL)

useHead(() => ({
  title: 'API Documentation | NetScanner Developer Reference & Endpoints',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Complete NetScanner API documentation with comprehensive endpoints for network analysis, SSL certificates, DNS records, ASN lookups, and infrastructure discovery. Developer reference with examples and usage patterns.'
    },
    {
      name: 'keywords',
      content: 'API documentation, REST API, network analysis API, DNS API, SSL certificate API, ASN API, developer reference, programming interface'
    },
    {
      property: 'og:title',
      content: 'NetScanner API Documentation - Developer Reference'
    },
    {
      property: 'og:description',
      content: 'Comprehensive API documentation for NetScanner network analysis platform with endpoints, examples, and developer guides.'
    }
  ]
}))
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}

/* Smooth scrolling for anchor links */
:global(html) {
  scroll-behavior: smooth;
}

/* Enhance the scroll offset for better positioning */
:global([id]) {
  scroll-margin-top: 80px;
}
</style>
