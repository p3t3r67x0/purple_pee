<template>
<div class="min-h-screen flex flex-col">
  <div class="flex-grow">
    <navheader></navheader>
    <query v-bind:query="query"></query>
    <dns v-bind:results="results"></dns>
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
  data() {
    return {
      results: [],
    }
  },
  created() {
    this.fetchLatest(this.query)
  },
  computed: {
    query() {
      return this.$route.params.pathMatch
    },
  },
  methods: {
    fetchLatest(query) {
      this.$axios.$get(process.env.API_URL + '/match/cidr:' + query).then(res => {
        this.results = res
      });
    }
  }
}
</script>
