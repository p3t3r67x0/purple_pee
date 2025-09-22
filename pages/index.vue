<template>
  <div class="flex min-h-screen flex-col">
    <div class="flex-grow">
      <navheader />

      <main class="mx-auto max-w-7xl space-y-12 px-4 py-16 sm:px-6 lg:px-8">
        <section class="glass-panel rounded-4xl border border-white/10 px-6 py-10 text-center shadow-glass sm:px-12">
          <span class="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
            Internet intelligence
          </span>
          <h1 class="mt-6 text-3xl font-light tracking-wide text-white/90 sm:text-5xl">
            <strong class="font-semibold text-white">NetScanner</strong> — Open source ASN lookup
          </h1>
          <p class="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-white/70 sm:text-lg">
            Welcome to NetScanner! Explore HTTP headers, DNS records, SSL certificates, open TCP ports, and ASN WHOIS data in a single place.
          </p>
        </section>

        <filter-help />
      </main>
    </div>
    <navfooter />
  </div>
</template>

<script setup lang="ts">
import Footer from '@/components/navfooter.vue'
import Navbar from '@/components/navheader.vue'
import FilterHelp from '/components/filter.vue'

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
