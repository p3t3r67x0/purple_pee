<template>
<div>
  <navigation></navigation>
  <asn v-bind:results="results"></asn>
</div>
</template>

<script>
import Asn from '@/components/asn.vue'
import Navigation from '@/components/navigation.vue'

export default {
  components: {
    asn: Asn,
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
