<template>
<div class="min-h-screen flex flex-col">
  <div class="flex-grow">
    <navheader></navheader>
    <modal v-if="modalVisible"></modal>
    <query v-if="!loadingIndicator" v-bind:query="queryTitle" v-bind:results="results.length"></query>
    <dns v-if="!loadingIndicator" v-bind:results="results"></dns>
  </div>
  <navfooter></navfooter>
</div>
</template>

<script>
import Dns from '@/components/dns.vue'
import Modal from '@/components/modal.vue'
import Query from '@/components/query.vue'
import Footer from '@/components/navfooter.vue'
import Navbar from '@/components/navheader.vue'

export default {
  components: {
    dns: Dns,
    query: Query,
    modal: Modal,
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
    this.$store.commit('updateQuery', 'registry:' + decodeURIComponent(this.query))
    this.$store.commit('updateLoadingIndicator', true)
  },
  computed: {
    modalVisible() {
      return this.$store.state.modalVisible
    },
    loadingIndicator() {
      return this.$store.state.loading
    },
    queryTitle() {
      return ['reqistry',  this.$route.params.pathMatch]
    },
    query() {
      return this.$route.params.pathMatch
    }
  },
  head() {
    return {
      title: 'Registry results for ' + decodeURIComponent(this.query),
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Explore latest registry results ' + decodeURIComponent(this.query)
      }]
    }
  },
  methods: {
    fetchLatest(query) {
      this.$axios.$get(process.env.API_URL + '/match/registry:' + decodeURIComponent(query)).then(res => {
        this.results = res
      }).catch((error) => {
        if (error.response) {
          this.$store.commit('updateResultList', [])
          this.$router.push({
            name: 'search-all',
            params: {
              pathMatch: query
            }
          })

          if (error.response.status !== 404) {
            this.$store.commit('updateErrorMessage', error.response.data)
            this.$store.commit('updateErrorStatus', error.response.status)
            this.$store.commit('updateModalVisible', true)
            this.$store.commit('updateLoadingIndicator', false)
          }
        }
      })
    }
  }
}
</script>
