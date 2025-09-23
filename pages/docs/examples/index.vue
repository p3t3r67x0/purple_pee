<template>
  <div class="min-h-screen flex flex-col">
    <div class="flex-grow">
      <navheader></navheader>
      <modal v-if="modalVisible"></modal>
      
      <section class="mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-10">
        <!-- Header -->
        <div class="mb-6 sm:mb-8">
          <h1 class="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            NetScanner API Examples
          </h1>
          <p class="text-slate-300 text-lg">Comprehensive guides and real-world examples for using the NetScanner API</p>
          <div class="flex flex-wrap gap-2 mt-4">
            <span class="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">Match Conditions</span>
            <span class="bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full text-sm">Server Examples</span>
            <span class="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">Integration Guides</span>
          </div>
        </div>

        <!-- Main Content -->
        <div class="glass-panel rounded-3xl border border-white/10 bg-black/80 shadow-glass p-4 sm:p-8">
          
          <!-- Example Categories -->
          <div class="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-2">
            
            <!-- Match Conditions Guide -->
            <div class="bg-gradient-to-br from-purple-900/30 to-purple-800/30 rounded-xl p-4 sm:p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 group">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors">Match Conditions Guide</h3>
                  <p class="text-slate-400 text-sm">Complete reference for all API conditions</p>
                </div>
              </div>
              
              <p class="text-slate-300 mb-4">
                Comprehensive documentation covering all 15+ match conditions, network infrastructure filtering, 
                SSL/TLS analysis, geographic targeting, and real-world integration examples.
              </p>
              
              <div class="space-y-3 mb-6">
                <div class="flex items-center gap-2 text-sm">
                  <span class="w-2 h-2 bg-emerald-400 rounded-full"></span>
                  <span class="text-slate-300">Network Infrastructure (ASN, CIDR, Ports)</span>
                </div>
                <div class="flex items-center gap-2 text-sm">
                  <span class="w-2 h-2 bg-blue-400 rounded-full"></span>
                  <span class="text-slate-300">Geographic Filtering (Country, State, City)</span>
                </div>
                <div class="flex items-center gap-2 text-sm">
                  <span class="w-2 h-2 bg-green-400 rounded-full"></span>
                  <span class="text-slate-300">SSL/TLS Security Analysis</span>
                </div>
                <div class="flex items-center gap-2 text-sm">
                  <span class="w-2 h-2 bg-purple-400 rounded-full"></span>
                  <span class="text-slate-300">Web Technology Detection</span>
                </div>
                <div class="flex items-center gap-2 text-sm">
                  <span class="w-2 h-2 bg-cyan-400 rounded-full"></span>
                  <span class="text-slate-300">DNS & Domain Intelligence</span>
                </div>
              </div>
              
              <NuxtLink 
                to="/docs/examples/status" 
                class="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium px-4 sm:px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 w-full justify-center"
              >
                📖 View Complete Guide
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </NuxtLink>
            </div>

            <!-- Server Examples -->
            <div class="bg-gradient-to-br from-emerald-900/30 to-emerald-800/30 rounded-xl p-4 sm:p-6 border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-300 group">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-white group-hover:text-emerald-300 transition-colors">Server Examples</h3>
                  <p class="text-slate-400 text-sm">Implementation patterns and code samples</p>
                </div>
              </div>
              
              <p class="text-slate-300 mb-4">
                Ready-to-use code examples for integrating NetScanner API into your applications, 
                with practical implementations for security research, monitoring, and compliance.
              </p>
              
              <div class="space-y-3 mb-6">
                <div class="flex items-center gap-2 text-sm">
                  <span class="w-2 h-2 bg-yellow-400 rounded-full"></span>
                  <span class="text-slate-300">Python Integration Examples</span>
                </div>
                <div class="flex items-center gap-2 text-sm">
                  <span class="w-2 h-2 bg-blue-400 rounded-full"></span>
                  <span class="text-slate-300">JavaScript/Node.js Implementations</span>
                </div>
                <div class="flex items-center gap-2 text-sm">
                  <span class="w-2 h-2 bg-red-400 rounded-full"></span>
                  <span class="text-slate-300">Security Research Workflows</span>
                </div>
                <div class="flex items-center gap-2 text-sm">
                  <span class="w-2 h-2 bg-orange-400 rounded-full"></span>
                  <span class="text-slate-300">Monitoring & Compliance Scripts</span>
                </div>
                <div class="flex items-center gap-2 text-sm">
                  <span class="w-2 h-2 bg-pink-400 rounded-full"></span>
                  <span class="text-slate-300">Data Analysis & Visualization</span>
                </div>
              </div>
              
              <NuxtLink 
                to="/docs/examples/server" 
                class="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-medium px-4 sm:px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 w-full justify-center"
              >
                🛠️ View Code Examples
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </NuxtLink>
            </div>

          </div>

          <!-- Quick Navigation -->
          <div class="mt-8 sm:mt-12">
            <h2 class="text-2xl font-semibold text-white mb-4 sm:mb-6">Quick Navigation</h2>
            <div class="grid gap-3 sm:gap-4 md:grid-cols-3">
              
              <NuxtLink 
                to="/docs/api"
                class="bg-slate-800/30 rounded-xl p-4 border border-slate-700/30 hover:border-purple-500/40 transition-all duration-300 group"
              >
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <svg class="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-medium text-white group-hover:text-purple-300 transition-colors">API Documentation</h3>
                    <p class="text-slate-400 text-sm">Complete endpoint reference</p>
                  </div>
                </div>
              </NuxtLink>

              <NuxtLink 
                to="/live/scan"
                class="bg-slate-800/30 rounded-xl p-4 border border-slate-700/30 hover:border-emerald-500/40 transition-all duration-300 group"
              >
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                    <svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-medium text-white group-hover:text-emerald-300 transition-colors">Live Scanner</h3>
                    <p class="text-slate-400 text-sm">Real-time domain analysis</p>
                  </div>
                </div>
              </NuxtLink>

              <NuxtLink 
                to="/docs/faq"
                class="bg-slate-800/30 rounded-xl p-4 border border-slate-700/30 hover:border-blue-500/40 transition-all duration-300 group"
              >
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <svg class="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-medium text-white group-hover:text-blue-300 transition-colors">FAQ</h3>
                    <p class="text-slate-400 text-sm">Frequently asked questions</p>
                  </div>
                </div>
              </NuxtLink>

            </div>
          </div>

          <!-- Getting Started -->
          <div class="mt-8 sm:mt-12 bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-xl p-4 sm:p-6 border border-purple-500/20">
            <h2 class="text-xl font-semibold text-white mb-4">🚀 Getting Started</h2>
            <p class="text-slate-300 mb-4">
              New to the NetScanner API? Start with these essential resources to quickly understand 
              how to leverage our comprehensive network intelligence platform.
            </p>
            <div class="flex flex-col sm:flex-row gap-3">
              <a 
                href="https://api.netscanner.io/dns?page=1&page_size=5"
                target="_blank"
                class="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium px-4 sm:px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105"
              >
                🌐 Try Live API
              </a>
              <NuxtLink 
                to="/docs/examples/status" 
                class="inline-flex items-center gap-2 border border-purple-400/50 bg-purple-400/10 hover:bg-purple-400/20 text-purple-300 font-medium px-4 sm:px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105"
              >
                📚 Browse Examples
              </NuxtLink>
            </div>
          </div>

        </div>
      </section>
    </div>
    <navfooter></navfooter>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import Modal from '@/components/modal.vue'
import Footer from '@/components/navfooter.vue'
import Navbar from '@/components/navheader.vue'
import { useMainStore } from '~/stores/main'

const mainStore = useMainStore()
const { modalVisible } = storeToRefs(mainStore)

useHead({
  title: 'NetScanner API Examples | Complete Integration Guides & Match Conditions',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Comprehensive NetScanner API examples including match conditions guide, server implementation examples, security research workflows, and real-world integration patterns.'
    },
    {
      name: 'keywords',
      content: 'NetScanner API examples, match conditions, server examples, integration guide, API documentation, network analysis, security research, domain intelligence'
    },
    {
      property: 'og:title',
      content: 'NetScanner API Examples - Integration Guides & Match Conditions'
    },
    {
      property: 'og:description',
      content: 'Complete collection of NetScanner API examples, implementation patterns, and comprehensive guides for developers.'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:title',
      content: 'NetScanner API Examples & Integration Guides'
    },
    {
      name: 'twitter:description',
      content: 'Comprehensive examples and guides for integrating the NetScanner API into your applications.'
    }
  ]
})
</script>