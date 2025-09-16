<template>
<div class="min-h-screen flex flex-col">
  <div class="flex-grow">
    <navheader></navheader>
    <imprint></imprint>
  </div>
  <navfooter></navfooter>
</div>
</template>

<script setup lang="ts">
import Footer from '@/components/navfooter.vue'
import Navbar from '@/components/navheader.vue'
import Imprint from '@/components/imprint.vue'

useHead(() => ({
  title: 'Checkout our legal disclaimer',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Checkout our legal disclaimer'
    }
  ]
}))
</script>
