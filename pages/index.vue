<template>
<div class="min-h-screen flex flex-col">
  <div class="flex-grow">
    <navheader></navheader>

    <div class="container mx-auto">
      <div class="text-center text-gray-900 leading-normal my-6 md:my-12">
        <h1 class="font-sans font-thin text-3xl md:text-5xl"><strong class="font-black">purplepee.co</strong> - Open source ASN lookup</h1>
      </div>
    </div>

    <dns v-if="results.length > 0 && results[0].domain != null" v-bind:results="results"></dns>
    <asn v-if="results.length > 0 && results[0].ip != null" v-bind:results="results"></asn>

    <filter-help></filter-help>
  </div>
  <navfooter></navfooter>
</div>
</template>

<script>
import Asn from '@/components/asn.vue'
import Dns from '@/components/dns.vue'
import Footer from '@/components/navfooter.vue'
import Navbar from '@/components/navheader.vue'
import FilterHelp from '@/components/filter.vue'

export default {
  components: {
    asn: Asn,
    dns: Dns,
    navheader: Navbar,
    navfooter: Footer,
    filterHelp: FilterHelp
  },
  head: {
    title: 'Open source ASN lookup',
    meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Purplepee is a simple tool allowing individuals to view all sort of analytics data about the current state and structure of the internet.'
    }]
  },
  computed: {
    results() {
      return this.$store.state.results
    }
  }
}
</script>
