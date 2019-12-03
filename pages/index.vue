<template>
<div>
  <navigation></navigation>

  <div class="container mx-auto">
    <div class="text-center text-gray-900 leading-normal mb-12">
      <h1 class="font-sans font-thin text-5xl"><strong class="font-black">purplepee.co</strong> - Open source ASN lookup</h1>
    </div>
  </div>

  <dns v-if="results.length > 0 && results[0].domain != null" v-bind:results="results"></dns>
  <asn v-if="results.length > 0 && results[0].ip != null" v-bind:results="results"></asn>
</div>
</template>

<script>
import Asn from '@/components/asn.vue'
import Dns from '@/components/dns.vue'
import Navigation from '@/components/navigation.vue'

export default {
  components: {
    dns: Dns,
    asn: Asn,
    navigation: Navigation
  },
  computed: {
    results() {
      return this.$store.state.results
    }
  }
}
</script>
