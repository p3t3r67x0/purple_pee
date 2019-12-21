<template>
<div class="min-h-screen flex flex-col">
  <div class="flex-grow">
    <navheader></navheader>

    <div class="container mx-auto">
      <div class="text-center text-gray-900 leading-normal mx-3 md:mx-0 my-6 md:my-12">
        <h1 class="font-sans font-thin text-3xl md:text-5xl mb-3"><strong class="font-black">purplepee.co</strong> - Open source ASN lookup</h1>
        <h2 class="font-sans font-thin text-xl md:text-3xl">Welcome to purplepee.co! This tool allows you to view general relations about a websites HTTP header, websites DNS records, websites SSL certificates and open TCP ports as well ASN whois information.</h2>
      </div>
    </div>

    <dns v-if="results.length > 0 && results[0].domain != null" v-bind:results="results"></dns>

    <filter-help></filter-help>
  </div>
  <navfooter></navfooter>
</div>
</template>

<script>
import Dns from '@/components/dns.vue'
import Footer from '@/components/navfooter.vue'
import Navbar from '@/components/navheader.vue'
import FilterHelp from '@/components/filter.vue'

export default {
  components: {
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
