<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
    <NavHeader />
    <Modal v-if="modalVisible"></Modal>

    <div class="container mx-auto px-3 sm:px-4 py-8 sm:py-12">
      <!-- Hero Section -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-4 mb-8">
          <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/25">
            <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9a9 9 0 01-9-9m9 0a9 9 0 00-9 9"></path>
            </svg>
          </div>
          <div class="text-left">
            <h1 class="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              About NetScanner
            </h1>
            <p class="text-lg text-slate-400 mt-2">Advanced Network Intelligence Platform</p>
          </div>
        </div>
        <p class="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Born from curiosity and driven by the need for comprehensive network intelligence,
          NetScanner empowers security researchers, developers, and network administrators 
          with deep insights into the digital infrastructure that powers our world.
        </p>
      </div>

      <!-- Main Content -->
      <div class="max-w-4xl mx-auto">
        <!-- Mission Statement -->
        <div class="bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 mb-12">
          <div class="text-center mb-8">
            <div class="inline-flex items-center gap-3 mb-4">
              <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h2 class="text-2xl font-bold text-white">Our Mission</h2>
            </div>
          </div>
          <p class="text-slate-300 text-lg leading-relaxed text-center">
            To democratize network intelligence by providing open, accessible, and comprehensive 
            tools for understanding the complex relationships within global network infrastructure. 
            We believe that transparency and knowledge sharing are essential for building a more 
            secure and resilient internet.
          </p>
        </div>

        <!-- The Story Behind NetScanner -->
        <div class="grid gap-8 lg:grid-cols-2 mb-12">
          <div class="bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-white">The Genesis</h3>
            </div>
            <p class="text-slate-300 leading-relaxed mb-4">
              NetScanner was born from the frustration of fragmented network intelligence tools. 
              Security researchers and network administrators were forced to use multiple platforms, 
              often expensive and limited, to get a complete picture of network infrastructure.
            </p>
            <p class="text-slate-300 leading-relaxed">
              We recognized the need for a unified platform that could provide comprehensive insights 
              into domains, IP addresses, SSL certificates, DNS records, and autonomous systems—all 
              in one accessible interface.
            </p>
          </div>

          <div class="bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-white">Innovation Driven</h3>
            </div>
            <p class="text-slate-300 leading-relaxed mb-4">
              Our approach combines massive data collection with intuitive visualization and powerful 
              APIs. We continuously scan and index millions of domains, IP addresses, and certificates 
              to provide real-time intelligence about the ever-changing internet landscape.
            </p>
            <p class="text-slate-300 leading-relaxed">
              What sets us apart is our commitment to making complex network data accessible through 
              clean interfaces, comprehensive APIs, and interactive visualizations like our relationship graphs.
            </p>
          </div>
        </div>

        <!-- Core Values -->
        <div class="mb-12">
          <div class="text-center mb-8">
            <h2 class="text-3xl font-bold text-white mb-4">Our Core Values</h2>
            <p class="text-slate-400">The principles that guide everything we build</p>
          </div>

          <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div class="bg-slate-900/50 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-6 text-center">
              <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mx-auto mb-4">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              </div>
              <h4 class="text-lg font-semibold text-white mb-2">Open Source</h4>
              <p class="text-slate-400 text-sm">
                Transparency and community collaboration drive innovation and build trust in security tools.
              </p>
            </div>

            <div class="bg-slate-900/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6 text-center">
              <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-4">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h4 class="text-lg font-semibold text-white mb-2">Performance</h4>
              <p class="text-slate-400 text-sm">
                Lightning-fast queries and real-time data processing ensure you get insights when you need them.
              </p>
            </div>

            <div class="bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 text-center">
              <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h4 class="text-lg font-semibold text-white mb-2">Accuracy</h4>
              <p class="text-slate-400 text-sm">
                Rigorous data validation and multiple verification sources ensure reliable intelligence.
              </p>
            </div>

            <div class="bg-slate-900/50 backdrop-blur-sm border border-amber-500/20 rounded-xl p-6 text-center">
              <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center mx-auto mb-4">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h4 class="text-lg font-semibold text-white mb-2">Community</h4>
              <p class="text-slate-400 text-sm">
                Building tools for and with the security research and network administration community.
              </p>
            </div>
          </div>
        </div>

        <!-- What Makes Us Different -->
        <div class="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/20 rounded-2xl p-8 mb-12">
          <div class="text-center mb-8">
            <h2 class="text-3xl font-bold text-white mb-4">What Makes Us Different</h2>
            <p class="text-slate-400">Why NetScanner stands out in the network intelligence space</p>
          </div>

          <div class="grid gap-8 lg:grid-cols-2">
            <div>
              <h4 class="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                <span class="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                  <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </span>
                Comprehensive Coverage
              </h4>
              <p class="text-slate-300 leading-relaxed mb-6">
                Unlike fragmented tools that focus on single aspects, NetScanner provides a 360-degree 
                view of network infrastructure. From DNS records to SSL certificates, from IP geolocation 
                to ASN relationships—everything is interconnected and accessible.
              </p>

              <h4 class="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                <span class="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                  </svg>
                </span>
                Real-Time Intelligence
              </h4>
              <p class="text-slate-300 leading-relaxed">
                Our continuous scanning infrastructure ensures you're working with fresh data. 
                We monitor changes across millions of domains and provide real-time updates 
                about certificate renewals, DNS changes, and infrastructure modifications.
              </p>
            </div>

            <div>
              <h4 class="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                <span class="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                  </svg>
                </span>
                Interactive Visualizations
              </h4>
              <p class="text-slate-300 leading-relaxed mb-6">
                Complex network relationships become clear through our interactive graphs and 
                visualizations. See how domains, IPs, certificates, and DNS records connect 
                in ways that traditional text-based tools simply cannot convey.
              </p>

              <h4 class="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                <span class="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                  <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                  </svg>
                </span>
                Developer-First API
              </h4>
              <p class="text-slate-300 leading-relaxed">
                Built by developers for developers. Our RESTful API is comprehensive, well-documented, 
                and designed for easy integration. Whether you're building security tools, monitoring 
                systems, or research platforms, our API scales with your needs.
              </p>
            </div>
          </div>
        </div>

        <!-- Use Cases -->
        <div class="mb-12">
          <div class="text-center mb-8">
            <h2 class="text-3xl font-bold text-white mb-4">Who Uses NetScanner</h2>
            <p class="text-slate-400">Empowering professionals across various domains</p>
          </div>

          <div class="grid gap-6 md:grid-cols-3">
            <div class="bg-slate-900/50 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-6">
              <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h4 class="text-lg font-semibold text-white mb-3">Security Researchers</h4>
              <p class="text-slate-400 text-sm mb-4">
                Investigate threat infrastructure, track malicious domains, and understand attack patterns 
                through comprehensive network intelligence.
              </p>
              <ul class="text-xs text-slate-500 space-y-1">
                <li>• Threat hunting and investigation</li>
                <li>• Malware infrastructure analysis</li>
                <li>• Certificate transparency monitoring</li>
                <li>• Attribution and tracking</li>
              </ul>
            </div>

            <div class="bg-slate-900/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6">
              <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                </svg>
              </div>
              <h4 class="text-lg font-semibold text-white mb-3">Network Administrators</h4>
              <p class="text-slate-400 text-sm mb-4">
                Monitor infrastructure changes, validate configurations, and ensure optimal 
                network performance with comprehensive visibility tools.
              </p>
              <ul class="text-xs text-slate-500 space-y-1">
                <li>• Infrastructure monitoring</li>
                <li>• DNS configuration validation</li>
                <li>• Certificate lifecycle management</li>
                <li>• Network topology analysis</li>
              </ul>
            </div>

            <div class="bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6">
              <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                </svg>
              </div>
              <h4 class="text-lg font-semibold text-white mb-3">Developers & DevOps</h4>
              <p class="text-slate-400 text-sm mb-4">
                Integrate network intelligence into applications, automate security checks, 
                and build monitoring solutions with our comprehensive API.
              </p>
              <ul class="text-xs text-slate-500 space-y-1">
                <li>• API integration and automation</li>
                <li>• Security tooling development</li>
                <li>• Continuous monitoring pipelines</li>
                <li>• Data enrichment services</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Call to Action -->
        <div class="text-center bg-gradient-to-r from-purple-900/50 to-pink-900/50 border border-purple-500/20 rounded-2xl p-8">
          <h2 class="text-3xl font-bold text-white mb-4">Join Our Mission</h2>
          <p class="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            Help us build the future of network intelligence. Whether you're contributing code, 
            reporting issues, or simply using our tools, you're part of making the internet 
            more transparent and secure.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://github.com/p3t3r67x0/purple_pee" 
              target="_blank"
              class="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/25"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              Contribute on GitHub
            </a>
            <nuxt-link 
              to="/docs/api"
              class="inline-flex items-center gap-2 border border-purple-400/50 bg-purple-400/10 hover:bg-purple-400/20 text-purple-300 font-medium px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>
              Explore API Docs
            </nuxt-link>
            <nuxt-link 
              to="/live/scan"
              class="inline-flex items-center gap-2 border border-emerald-400/50 bg-emerald-400/10 hover:bg-emerald-400/20 text-emerald-300 font-medium px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
              Try It Now
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    
    <NavFooter />
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import Modal from '@/components/Modal.vue'
import NavFooter from '@/components/NavFooter.vue'
import NavHeader from '@/components/NavHeader.vue'
import { useMainStore } from '~/stores/main'

const mainStore = useMainStore()
const { modalVisible } = storeToRefs(mainStore)

useHead({
  title: 'About NetScanner - Our Mission & Vision | Network Intelligence Platform',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Learn about NetScanner\'s mission to democratize network intelligence. Discover our story, values, and commitment to building open-source tools for security researchers and network administrators.'
    },
    {
      name: 'keywords',
      content: 'NetScanner about, network intelligence platform, open source security tools, mission, vision, team, cybersecurity research, network analysis'
    },
    {
      property: 'og:title',
      content: 'About NetScanner - Advanced Network Intelligence Platform'
    },
    {
      property: 'og:description',
      content: 'Discover NetScanner\'s mission to democratize network intelligence through open-source tools and comprehensive API access for security professionals.'
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
      content: 'About NetScanner - Our Mission & Vision'
    },
    {
      name: 'twitter:description',
      content: 'Learn about NetScanner\'s commitment to building open, accessible network intelligence tools for the security community.'
    }
  ]
})
</script>