<template>
  <div>
    <NavHeader />
    <TermsOfService />
    <NavFooter />
  </div>
</template>

<script setup>
// Page-level SEO
useHead({
  title: 'Terms of Service',
  meta: [
    {
      name: 'description',
      content: 'Terms of Service for NetScanner - Open source network intelligence platform. Review our acceptable use policy, privacy terms, and legal obligations for cybersecurity research.'
    },
    {
      name: 'robots',
      content: 'noindex, nofollow'
    }
  ]
})
</script>