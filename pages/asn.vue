<template>
<div>
  <navheader></navheader>
  <asn v-bind:results="results"></asn>
  <navfooter></navfooter>
</div>
</template>

<script>
import Asn from '@/components/asn.vue'
import Footer from '@/components/navfooter.vue'
import Navbar from '@/components/navheader.vue'

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
    fetchLatest() {
      this.$axios.$get('http://127.0.0.1:5000/asn').then(res => {
        this.results = res
      });
    },
    extractIpData(res) {
      this.results = res
    }
  }
}
</script>
