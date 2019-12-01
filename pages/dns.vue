<template>
<div>
  <navigation></navigation>

  <div class="container mx-auto">
    <div v-for="result in results" class="overflow-hidden bg-white rounded w-full shadow-md leading-normal mb-6 p-3">
      <div v-if="result.domain" class="text-3xl font-medium text-purple-700">
        {{ result.domain }}
      </div>
      <div v-if="result.a_record" class="mb-4">
        <strong>A redords</strong>
        <ul class="text-xl text-gray-700 font-light">
          <li v-for="a_record in result.a_record" >
            {{ a_record }}
          </li>
        </ul>
      </div>
      <div v-if="result.aaaa_record" class="mb-4">
        <strong>AAAA redords</strong>
        <ul class="text-xl text-gray-700 font-light">
          <li v-for="aaaa_record in result.aaaa_record" >
            {{ aaaa_record }}
          </li>
        </ul>
      </div>
      <div v-if="result.cname">
        {{ result.cname }}
      </div>
      <div v-if="result.mx_record">
        <strong>MX redords</strong>
        <ul class="text-xl text-gray-700 font-light">
          <li v-for="mx_record in result.mx_record" >
            {{ mx_record.exchange }}, {{ mx_record.preference }}
          </li>
        </ul>
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
      results: []
    }
  },
  created() {
    this.fetchLatest()
  },
  methods: {
    fetchLatest() {
      this.$axios.$get('http://127.0.0.1:5000/dns').then(res => {
        this.results = res
      });
    },
    extractIpData(res) {
      this.results = res
    }
  }
}
</script>
