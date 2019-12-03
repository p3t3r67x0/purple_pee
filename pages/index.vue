<template>
<div>
  <navigation></navigation>

  <div class="container mx-auto">
    <div class="text-center text-gray-900 leading-normal mb-12">
      <h1 class="font-sans font-thin text-5xl"><strong class="font-black">purplepee.co</strong> - Open source ASN loopup</h1>
    </div>
  </div>

  <dns v-if="results.length > 0 && results[0].domain != null" v-bind:results="results"></dns>

  <div class="container mx-auto">
    <div v-for="result in results" class="overflow-hidden bg-white rounded w-full shadow-md leading-normal mb-6 p-3">
      <div v-if="result.as && result.as[0].asn != null">
        <div v-if="result.as[0].name" class="mb-4 text-3xl font-medium text-purple-700">
          {{ result.as[0].name }}
        </div>
        <div v-if="result.as[0].asn" class="mb-4">
          <strong>AS number</strong>
          <p class="text-xl text-gray-700 font-light">
            {{ result.as[0].asn }}
          </p>
        </div>
        <div v-if="result.as[0].prefix" class="mb-4">
          <strong>Subnet</strong>
          <p class="text-xl text-gray-700 font-light">
            {{ result.as[0].prefix }}
          </p>
        </div>
      </div>
      <div v-else>
        <div class="mb-4 text-3xl font-medium text-gray-500">
          We are sorry, no stats available
        </div>
      </div>
      <div v-if="result.ip" v-bind:class="{ 'mb-4': result.host }">
        <strong>IP address</strong>
        <p class="text-xl text-gray-700 font-light">
          {{ result.ip }}
        </p>
      </div>
      <div v-if="result.host">
        <strong>Hostname</strong>
        <p class="text-xl text-gray-700 font-light">
          {{ result.host }}
        </p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Dns from '@/components/dns.vue'
import Navigation from '@/components/navigation.vue'

export default {
  components: {
    dns: Dns,
    navigation: Navigation
  },
  computed: {
    results() {
      return this.$store.state.results
    }
  }
}
</script>
