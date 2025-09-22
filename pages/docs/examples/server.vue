<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
    <navheader></navheader>
    <div class="container mx-auto px-4 py-8">
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <!-- Sidebar -->
        <div class="lg:col-span-1">
          <div class="bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6 sticky top-8">
            <nav>
              <div class="mb-6">
                <h2 class="text-lg font-semibold text-white">API Documentation</h2>
              </div>
              <ul class="space-y-2">
                <li>
                  <NuxtLink 
                    to="/docs/api" 
                    class="block py-2 px-3 text-sm text-gray-300 hover:text-purple-300 hover:bg-purple-500/10 rounded-md transition-colors"
                  >
                    Overview
                  </NuxtLink>
                </li>
                <li>
                  <div class="text-purple-300 text-sm font-medium py-2 px-3">Examples</div>
                  <ul class="ml-4 space-y-1">
                    <li>
                      <NuxtLink 
                        to="/docs/examples/status" 
                        class="block py-1 px-2 text-sm text-gray-400 hover:text-purple-300 rounded"
                      >
                        Match Conditions
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink 
                        to="/docs/examples/server" 
                        class="block py-1 px-2 text-sm bg-purple-500/20 text-purple-300 rounded font-medium"
                      >
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
          <div class="bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-lg p-8">
            <h1 class="text-3xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              API Usage Examples
            </h1>
            
            <div class="bg-slate-800/50 rounded-lg p-6 mb-8 border border-purple-500/10">
              <p class="text-gray-300 mb-4">
                Practical examples demonstrating how to use the NetScanner API for network reconnaissance, 
                infrastructure analysis, and security research. These examples show real-world usage patterns 
                and advanced filtering techniques.
              </p>
            </div>

            <!-- Network Discovery Examples -->
            <div class="space-y-6">
              <div class="bg-slate-800/30 rounded-lg border border-purple-500/10 p-6">
                <h2 class="text-xl font-semibold text-white mb-4 flex items-center">
                  <div class="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mr-3"></div>
                  Network Discovery
                </h2>
                <div class="space-y-4">
                  <div v-for="example in networkExamples" :key="example.title" 
                       class="bg-slate-900/50 rounded-lg p-4 border border-purple-500/5">
                    <h3 class="text-lg font-medium text-white mb-2">{{ example.title }}</h3>
                    <p class="text-gray-300 text-sm mb-3">{{ example.description }}</p>
                    <div class="bg-slate-800/50 rounded p-3 font-mono text-xs">
                      <div class="text-gray-400 mb-1">Request:</div>
                      <div class="text-purple-300 mb-3">{{ example.endpoint }}</div>
                      <div class="text-gray-400 mb-1">Use Case:</div>
                      <div class="text-gray-300">{{ example.useCase }}</div>
                    </div>
                    <div class="mt-3">
                      <a 
                        :href="`${apiUrl}${example.endpoint}`" 
                        target="_blank"
                        class="text-purple-400 hover:text-purple-300 text-sm transition-colors"
                      >
                        Try this example →
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <!-- SSL/Certificate Analysis -->
              <div class="bg-slate-800/30 rounded-lg border border-purple-500/10 p-6">
                <h2 class="text-xl font-semibold text-white mb-4 flex items-center">
                  <div class="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full mr-3"></div>
                  SSL Certificate Analysis
                </h2>
                <div class="space-y-4">
                  <div v-for="example in sslExamples" :key="example.title" 
                       class="bg-slate-900/50 rounded-lg p-4 border border-purple-500/5">
                    <h3 class="text-lg font-medium text-white mb-2">{{ example.title }}</h3>
                    <p class="text-gray-300 text-sm mb-3">{{ example.description }}</p>
                    <div class="bg-slate-800/50 rounded p-3 font-mono text-xs">
                      <div class="text-gray-400 mb-1">Request:</div>
                      <div class="text-purple-300 mb-3">{{ example.endpoint }}</div>
                      <div class="text-gray-400 mb-1">Use Case:</div>
                      <div class="text-gray-300">{{ example.useCase }}</div>
                    </div>
                    <div class="mt-3">
                      <a 
                        :href="`${apiUrl}${example.endpoint}`" 
                        target="_blank"
                        class="text-purple-400 hover:text-purple-300 text-sm transition-colors"
                      >
                        Try this example →
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Geographic & ISP Analysis -->
              <div class="bg-slate-800/30 rounded-lg border border-purple-500/10 p-6">
                <h2 class="text-xl font-semibold text-white mb-4 flex items-center">
                  <div class="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mr-3"></div>
                  Geographic & ISP Analysis
                </h2>
                <div class="space-y-4">
                  <div v-for="example in geoExamples" :key="example.title" 
                       class="bg-slate-900/50 rounded-lg p-4 border border-purple-500/5">
                    <h3 class="text-lg font-medium text-white mb-2">{{ example.title }}</h3>
                    <p class="text-gray-300 text-sm mb-3">{{ example.description }}</p>
                    <div class="bg-slate-800/50 rounded p-3 font-mono text-xs">
                      <div class="text-gray-400 mb-1">Request:</div>
                      <div class="text-purple-300 mb-3">{{ example.endpoint }}</div>
                      <div class="text-gray-400 mb-1">Use Case:</div>
                      <div class="text-gray-300">{{ example.useCase }}</div>
                    </div>
                    <div class="mt-3">
                      <a 
                        :href="`${apiUrl}${example.endpoint}`" 
                        target="_blank"
                        class="text-purple-400 hover:text-purple-300 text-sm transition-colors"
                      >
                        Try this example →
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Infrastructure & Services -->
              <div class="bg-slate-800/30 rounded-lg border border-purple-500/10 p-6">
                <h2 class="text-xl font-semibold text-white mb-4 flex items-center">
                  <div class="w-2 h-2 bg-gradient-to-r from-red-400 to-pink-400 rounded-full mr-3"></div>
                  Infrastructure & Services
                </h2>
                <div class="space-y-4">
                  <div v-for="example in infraExamples" :key="example.title" 
                       class="bg-slate-900/50 rounded-lg p-4 border border-purple-500/5">
                    <h3 class="text-lg font-medium text-white mb-2">{{ example.title }}</h3>
                    <p class="text-gray-300 text-sm mb-3">{{ example.description }}</p>
                    <div class="bg-slate-800/50 rounded p-3 font-mono text-xs">
                      <div class="text-gray-400 mb-1">Request:</div>
                      <div class="text-purple-300 mb-3">{{ example.endpoint }}</div>
                      <div class="text-gray-400 mb-1">Use Case:</div>
                      <div class="text-gray-300">{{ example.useCase }}</div>
                    </div>
                    <div class="mt-3">
                      <a 
                        :href="`${apiUrl}${example.endpoint}`" 
                        target="_blank"
                        class="text-purple-400 hover:text-purple-300 text-sm transition-colors"
                      >
                        Try this example →
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Advanced Queries -->
              <div class="bg-slate-800/30 rounded-lg border border-purple-500/10 p-6">
                <h2 class="text-xl font-semibold text-white mb-4 flex items-center">
                  <div class="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3"></div>
                  Advanced Query Patterns
                </h2>
                <div class="space-y-4">
                  <div v-for="example in advancedExamples" :key="example.title" 
                       class="bg-slate-900/50 rounded-lg p-4 border border-purple-500/5">
                    <h3 class="text-lg font-medium text-white mb-2">{{ example.title }}</h3>
                    <p class="text-gray-300 text-sm mb-3">{{ example.description }}</p>
                    <div class="bg-slate-800/50 rounded p-3 font-mono text-xs">
                      <div class="text-gray-400 mb-1">Request:</div>
                      <div class="text-purple-300 mb-3">{{ example.endpoint }}</div>
                      <div class="text-gray-400 mb-1">Use Case:</div>
                      <div class="text-gray-300">{{ example.useCase }}</div>
                    </div>
                    <div class="mt-3">
                      <a 
                        :href="`${apiUrl}${example.endpoint}`" 
                        target="_blank"
                        class="text-purple-400 hover:text-purple-300 text-sm transition-colors"
                      >
                        Try this example →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Best Practices -->
            <div class="mt-8 bg-slate-800/30 rounded-lg border border-purple-500/10 p-6">
              <h2 class="text-xl font-semibold text-white mb-4">Best Practices</h2>
              <div class="space-y-3 text-gray-300">
                <div class="flex items-start">
                  <div class="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>Use pagination parameters to limit response size for large result sets</div>
                </div>
                <div class="flex items-start">
                  <div class="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>Combine multiple conditions using separate API calls for complex queries</div>
                </div>
                <div class="flex items-start">
                  <div class="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>Cache results locally when performing repetitive analysis</div>
                </div>
                <div class="flex items-start">
                  <div class="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>Use the graph endpoint to discover related infrastructure</div>
                </div>
                <div class="flex items-start">
                  <div class="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>Monitor trends endpoint for API usage patterns and optimization</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <navfooter></navfooter>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const apiUrl = computed(() => process.env.API_URL)

// Network Discovery Examples
const networkExamples = [
  {
    title: 'Find Google Infrastructure',
    description: 'Discover all domains in Google\'s primary ASN',
    endpoint: '/match/asn:15169',
    useCase: 'Map Google\'s global infrastructure and services'
  },
  {
    title: 'Cloudflare Network Analysis',
    description: 'Analyze Cloudflare\'s network presence',
    endpoint: '/match/asn:13335',
    useCase: 'Understand CDN distribution and edge locations'
  },
  {
    title: 'AWS Infrastructure Mapping',
    description: 'Explore Amazon Web Services network blocks',
    endpoint: '/match/org:Amazon',
    useCase: 'Identify AWS-hosted services and regions'
  },
  {
    title: 'RIPE Network Registry',
    description: 'Find European network allocations',
    endpoint: '/match/registry:ripe',
    useCase: 'Research European internet infrastructure'
  }
]

// SSL Certificate Examples
const sslExamples = [
  {
    title: 'Let\'s Encrypt Analysis',
    description: 'Find all domains using Let\'s Encrypt certificates',
    endpoint: '/match/issuer:Let\'s Encrypt',
    useCase: 'Analyze adoption of free SSL certificates'
  },
  {
    title: 'CloudFlare SSL Usage',
    description: 'Domains using CloudFlare SSL services',
    endpoint: '/match/issuer:CloudFlare',
    useCase: 'Identify CloudFlare-protected websites'
  },
  {
    title: 'DigiCert Enterprise',
    description: 'Enterprise-grade certificate analysis',
    endpoint: '/match/issuer:DigiCert',
    useCase: 'Find enterprise and high-value targets'
  },
  {
    title: 'Certificate Expiry Analysis',
    description: 'Find certificates expiring soon',
    endpoint: '/match/before:2024-12-31 23:59:59',
    useCase: 'SSL certificate management and renewal tracking'
  }
]

// Geographic Examples
const geoExamples = [
  {
    title: 'German Infrastructure',
    description: 'Analyze German internet infrastructure',
    endpoint: '/match/country:DE',
    useCase: 'GDPR compliance and data sovereignty research'
  },
  {
    title: 'US Government Networks',
    description: 'Find US-based government infrastructure',
    endpoint: '/match/country:US',
    useCase: 'Cybersecurity and critical infrastructure analysis'
  },
  {
    title: 'Silicon Valley Tech',
    description: 'Discover tech companies in California',
    endpoint: '/match/state:California',
    useCase: 'Technology sector infrastructure mapping'
  },
  {
    title: 'Frankfurt Data Centers',
    description: 'Major European internet hub analysis',
    endpoint: '/match/city:Frankfurt',
    useCase: 'Data center and peering point research'
  }
]

// Infrastructure Examples
const infraExamples = [
  {
    title: 'SSH Service Discovery',
    description: 'Find servers with SSH access',
    endpoint: '/match/port:22',
    useCase: 'Remote access infrastructure assessment'
  },
  {
    title: 'HTTPS Web Services',
    description: 'Discover secure web applications',
    endpoint: '/match/port:443',
    useCase: 'Web application security analysis'
  },
  {
    title: 'Nginx Server Analysis',
    description: 'Find servers running Nginx',
    endpoint: '/match/server:nginx',
    useCase: 'Web server technology stack analysis'
  },
  {
    title: 'PHP Application Discovery',
    description: 'Identify PHP-powered websites',
    endpoint: '/match/service:PHP',
    useCase: 'Technology stack and vulnerability research'
  }
]

// Advanced Query Examples
const advancedExamples = [
  {
    title: 'Latest DNS Records',
    description: 'Get recently updated domain records',
    endpoint: '/dns?page=1&page_size=50',
    useCase: 'Monitor new domain registrations and changes'
  },
  {
    title: 'IP Address Investigation',
    description: 'Deep dive into specific IP addresses',
    endpoint: '/ip/8.8.8.8',
    useCase: 'Reverse DNS and infrastructure analysis'
  },
  {
    title: 'Domain Relationship Graph',
    description: 'Discover connected infrastructure',
    endpoint: '/graph/google.com',
    useCase: 'Map complex multi-domain infrastructures'
  },
  {
    title: 'API Usage Trends',
    description: 'Analyze API request patterns',
    endpoint: '/trends/requests?interval=hour&buckets=24',
    useCase: 'API performance monitoring and optimization'
  }
]

useHead(() => ({
  title: 'API Usage Examples | NetScanner Network Discovery & Analysis Samples',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Comprehensive NetScanner API usage examples for network discovery, SSL analysis, geographic filtering, and infrastructure mapping. Practical code samples and query patterns for cybersecurity research.'
    },
    {
      name: 'keywords',
      content: 'API examples, network discovery, SSL analysis, geographic filtering, infrastructure mapping, cybersecurity research, code samples'
    },
    {
      property: 'og:title',
      content: 'NetScanner API Examples - Network Analysis Samples'
    },
    {
      property: 'og:description',
      content: 'Learn NetScanner API with practical examples for network discovery, SSL analysis, and infrastructure research.'
    }
  ]
}))
</script>

<style scoped>
/* Smooth scrolling for anchor links */
:global(html) {
  scroll-behavior: smooth;
}

/* Enhance the scroll offset for better positioning */
:global([id]) {
  scroll-margin-top: 80px;
}
</style>
