<template>
  <div class="flex min-h-screen flex-col">
    <div class="flex-grow">
      <navheader />

      <main class="mx-auto max-w-5xl space-y-10 px-4 py-10 sm:px-6 lg:px-8">
        <section class="space-y-4 text-center">
          <h1 class="text-3xl font-light text-gray-900 sm:text-5xl">
            <strong class="font-black">purplepee.co</strong> — Open source ASN lookup
          </h1>
          <p class="mx-auto max-w-3xl text-base leading-relaxed text-gray-700 sm:text-lg">
            Welcome to purplepee.co! This tool allows you to view general relations about a website's HTTP headers, DNS records,
            SSL certificates, open TCP ports and ASN WHOIS information.
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
import FilterHelp from '@/components/filter.vue'

useHead(() => ({
  title: 'Open source ASN lookup',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content:
        'Purplepee is a simple tool allowing individuals to view all sort of analytics data about the current state and structure of the internet.'
    }
  ]
}))
</script>
