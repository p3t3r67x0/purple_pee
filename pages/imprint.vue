<template>
<div class="min-h-screen flex flex-col">
  <div class="flex-grow">
    <navheader></navheader>
    <imprint></imprint>
  </div>
  <navfooter></navfooter>
</div>
</template>

<script>
import Footer from '@/components/navfooter.vue'
import Navbar from '@/components/navheader.vue'
import Imprint from '@/components/imprint.vue'

export default {
  components: {
    imprint: Imprint,
    navfooter: Footer,
    navheader: Navbar
  },
  head: {
    title: 'Checkout our legal disclaimer'
    meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Checkout our legal disclaimer'
    }]
  }
}
</script>
