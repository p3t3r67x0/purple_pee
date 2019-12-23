<template>
<div class="min-h-screen flex flex-col">
  <div class="flex-grow">
    <navheader></navheader>
    <query v-if="!loadingIndicator" v-bind:query="queryTitle"></query>
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
    queryTitle() {
      return 'AS ' + this.$route.params.pathMatch.split(/[a-z]/i)[2]
    },
    query() {
      return this.$route.params.pathMatch
    }
  },
  head() {
    return {
      title: 'ASN results for ' + this.query,
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Explore latest ASN results ' + this.query
      }]
    }
  },
  methods: {
    fetchLatest(query) {
      this.$axios.$get(process.env.API_URL + '/match/asn:' + query).then(response => {
        this.results = response
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
