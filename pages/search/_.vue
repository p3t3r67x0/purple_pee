<template>
<div class="min-h-screen flex flex-col">
  <div class="flex-grow">
    <navheader></navheader>
    <query v-if="!loadingIndicator" v-bind:query="query"></query>
    <dns v-if="!loadingIndicator" v-bind:results="results"></dns>
  </div>
  <navfooter></navfooter>
</div>
</template>

<script>
import Dns from '@/components/dns.vue'
import Query from '@/components/query.vue'
import Footer from '@/components/navfooter.vue'
import Navbar from '@/components/navheader.vue'

export default {
  components: {
    dns: Dns,
    query: Query,
    navfooter: Footer,
    navheader: Navbar
  },
  params: [true],
  computed: {
    loadingIndicator() {
      return this.$store.state.loading
    },
    results() {
      return this.$store.state.results
    },
    query() {
      return this.$route.params.pathMatch
    }
  }
}
</script>
