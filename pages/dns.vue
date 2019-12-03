<template>
<div>
  <navigation></navigation>
  <dns v-bind:results="results"></dns>
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
