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
  data() {
    return {
      results: [],
    }
  },
  created() {
    this.fetchLatest(this.query)
  },
  computed: {
    loadingIndicator() {
      return this.$store.state.loading
    },
    query() {
      return this.$route.params.pathMatch
    }
  },
  methods: {
    fetchLatest(query) {
      this.$axios.$get(process.env.API_URL + '/match/org:' + query).then(res => {
        this.results = res
      }).catch((error) => {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log(error.message);
        }

        console.log(error.config);
        this.$store.commit('updateLoadingIndicator', false)
      })
    }
  }
}
</script>
