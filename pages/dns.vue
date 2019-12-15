<template>
<div>
  <navheader></navheader>
  <dns v-bind:results="results"></dns>
  <navfooter></navfooter>
</div>
</template>

<script>
import Dns from '@/components/dns.vue'
import Footer from '@/components/navfooter.vue'
import Navbar from '@/components/navheader.vue'

export default {
  components: {
    dns: Dns,
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
