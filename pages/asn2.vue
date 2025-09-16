<template>
<div class="min-h-screen flex flex-col">
  <div class="flex-grow">
    <navheader></navheader>
    <asn v-bind:results="results"></asn>
  </div>
  <navfooter></navfooter>
</div>
</template>

<script>
import Asn from '@/components/asn2.vue'
import Footer from '@/components/navfooter.vue'
import Navbar from '@/components/navheader.vue'
import { fetchJson, handleFetchError } from '~/utils/http'

export default {
  components: {
    asn: Asn,
    navfooter: Footer,
    navheader: Navbar
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
    async fetchLatest() {
      try {
        const res = await fetchJson(this.$env.API_URL + '/asn')
        this.results = res
      } catch (error) {
        handleFetchError(error)
      }
    },
    extractIpData(res) {
      this.results = res
    }
  }
}
</script>
