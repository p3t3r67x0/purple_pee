<template>
<div>
  <navigation></navigation>

  <div class="container mx-auto">
    <div v-for="result in results" class="overflow-hidden bg-white rounded w-full shadow-md leading-normal mb-6 p-3">
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
      <div v-if="result.ip" class="mb-4">
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
import Navigation from '@/components/navigation.vue'

export default {
  components: {
    navigation: Navigation
  },
  data() {
    return {
      ip: null,
      host: null,
      asn: null,
      name: null,
      prefix: null,
      results: []
    }
  },
  created() {
    this.fetchLatest()
  },
  methods: {
    fetchLatest() {
      this.$axios.$get('http://127.0.0.1:5000/ip').then(res => {
        this.results = res
      });
    },
    extractIpData(res) {
      this.results = res
    }
  }
}
</script>
