<template>
<div class="min-h-screen flex flex-col">
  <div class="flex-grow">
    <navheader></navheader>
    <list v-bind:results="results"></list>
  </div>
  <navfooter></navfooter>
</div>
</template>

<script>
import List from '@/components/asn-list.vue'
import Footer from '@/components/navfooter.vue'
import Navbar from '@/components/navheader.vue'

export default {
  components: {
    list: List,
    navfooter: Footer,
    navheader: Navbar
  },
  data() {
    return {
      results: [],
    }
  },
  created() {
    this.fetchLatest(this.query)
  },
  methods: {
    fetchLatest(query) {
      this.$axios.$get(process.env.API_URL + '/asn').then(res => {
        this.results = res
      });
    }
  }
}
</script>
