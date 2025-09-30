<template>
  <div class="min-h-screen flex flex-col">
    <div class="flex-grow">
      <Navbar />
      <Imprint />
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Footer from '@/components/NavFooter.vue'
import Navbar from '@/components/NavHeader.vue'
import Imprint from '@/components/Imprint.vue'

useHead(() => ({
  title: 'Legal Disclaimer & Imprint | NetScanner Privacy Policy',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'NetScanner legal disclaimer, imprint, and privacy policy. Learn about our terms of use, data handling practices, and legal information for our network analysis platform.'
    },
    {
      name: 'keywords',
      content: 'legal disclaimer, imprint, privacy policy, terms of use, data protection, GDPR compliance, legal information'
    },
    {
      property: 'og:title',
      content: 'Legal Disclaimer & Imprint | NetScanner'
    },
    {
      property: 'og:description',
      content: 'Legal information, privacy policy, and imprint for NetScanner network analysis platform.'
    }
  ]
}))
</script>
