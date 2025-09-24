<template>
  <div class="flex min-h-screen flex-col">
    <div class="flex-grow">
      <Navbar />

      <main class="mx-auto max-w-7xl space-y-8 px-3 py-8 sm:space-y-12 sm:px-6 sm:py-16 lg:px-8">
        <section
          class="glass-panel rounded-4xl border border-white/10 px-4 py-6 text-center shadow-glass sm:px-12 sm:py-10">
          <span
            class="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
            🌐 Internet Intelligence Platform
          </span>

          <!-- Search Bar -->
          <div class="mx-auto mt-6 max-w-2xl">
            <SearchBar input-id="homepage-search" :use-store="false" />
          </div>

          <h1 class="mt-6 sm:mt-12 text-3xl font-light tracking-wide text-white/90 sm:text-5xl">
            <strong class="font-semibold text-white">NetScanner</strong> — Discover the Hidden Web
          </h1>
          <p class="mx-auto mt-6 max-w-4xl text-lg leading-relaxed text-white/80 sm:text-xl">
            Uncover the digital DNA of any domain. NetScanner is your comprehensive open-source intelligence platform
            that reveals the hidden infrastructure, security posture, and network topology behind every corner of the
            internet.
          </p>

          <div class="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 text-left">
            <div class="rounded-2xl border border-white/10 bg-white/5 p-3 sm:p-4 backdrop-blur-sm">
              <div class="flex items-center gap-3 mb-2">
                <span
                  class="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-400/80 to-green-500/80 text-white text-sm font-bold">🔍</span>
                <h3 class="font-semibold text-white text-sm">Deep Discovery</h3>
              </div>
              <p class="text-xs text-white/70">Analyze DNS records, SSL certificates, HTTP headers, and network
                infrastructure in seconds</p>
            </div>

            <div class="rounded-2xl border border-white/10 bg-white/5 p-3 sm:p-4 backdrop-blur-sm">
              <div class="flex items-center gap-3 mb-2">
                <span
                  class="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-400/80 to-sky-500/80 text-white text-sm font-bold">🌍</span>
                <h3 class="font-semibold text-white text-sm">Global Intelligence</h3>
              </div>
              <p class="text-xs text-white/70">Track ASN allocations, geographic distribution, and organizational
                ownership across the globe</p>
            </div>

            <div class="rounded-2xl border border-white/10 bg-white/5 p-3 sm:p-4 backdrop-blur-sm">
              <div class="flex items-center gap-3 mb-2">
                <span
                  class="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-400/80 to-pink-500/80 text-white text-sm font-bold">🔒</span>
                <h3 class="font-semibold text-white text-sm">Security Insights</h3>
              </div>
              <p class="text-xs text-white/70">Evaluate security configurations, open ports, certificate health, and
                vulnerability exposure</p>
            </div>

            <div class="rounded-2xl border border-white/10 bg-white/5 p-3 sm:p-4 backdrop-blur-sm">
              <div class="flex items-center gap-3 mb-2">
                <span
                  class="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-orange-400/80 to-red-500/80 text-white text-sm font-bold">⚡</span>
                <h3 class="font-semibold text-white text-sm">Live Scanning</h3>
              </div>
              <p class="text-xs text-white/70">Real-time network reconnaissance with live port scanning and instant
                infrastructure mapping</p>
            </div>
          </div>

          <div class="mt-6 flex flex-col sm:flex-row gap-4 justify-center items-center sm:mt-8">
            <nuxt-link to="/live/scan"
              class="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
              🚀 Start Live Scan
            </nuxt-link>
            <nuxt-link to="/docs/api"
              class="inline-flex items-center gap-2 border border-white/20 bg-white/10 hover:bg-white/20 text-white font-medium px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm">
              📚 View Documentation
            </nuxt-link>
          </div>

          <p class="mt-6 text-sm text-white/60 max-w-2xl mx-auto">
            Whether you're a security researcher, network administrator, or digital detective, NetScanner provides the
            comprehensive intelligence you need to understand and protect digital infrastructure.
          </p>
        </section>

        <FilterHelp />
      </main>
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Footer from '@/components/NavFooter.vue'
import Navbar from '@/components/NavHeader.vue'
import FilterHelp from '@/components/Filter.vue'
import SearchBar from '@/components/SearchBar.vue'

useHead(() => ({
  title: 'NetScanner - Open Source Internet Intelligence Platform | ASN Lookup & Network Analysis',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'NetScanner is a comprehensive open source internet intelligence platform. Explore HTTP headers, DNS records, SSL certificates, open TCP ports, ASN WHOIS data, and network infrastructure analysis all in one place.'
    },
    {
      name: 'keywords',
      content: 'ASN lookup, network analysis, DNS records, SSL certificates, HTTP headers, TCP ports, WHOIS data, internet intelligence, network security, infrastructure mapping'
    },
    {
      property: 'og:title',
      content: 'NetScanner - Open Source Internet Intelligence Platform'
    },
    {
      property: 'og:description',
      content: 'Comprehensive network analysis tool for exploring internet infrastructure, DNS records, SSL certificates, and ASN data.'
    },
    {
      property: 'og:type',
      content: 'website'
    }
  ]
}))
</script>
