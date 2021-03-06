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
      results: []
    }
  },
  head() {
    return {
      title: 'ASN results for ' + decodeURIComponent(this.query),
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Explore latest ASN results ' + decodeURIComponent(this.query)
      }]
    }
  },
  created() {
    this.fetchLatest(this.query)
    this.$store.commit('updateQuery', 'asn:' + decodeURIComponent(this.query))
    this.$store.commit('updateLoadingIndicator', true)
  },
  watch: {
    modalVisible: function() {}
  },
  computed: {
    modalVisible() {
      return this.$store.state.modalVisible
    },
    loadingIndicator() {
      return this.$store.state.loading
    },
    queryTitle() {
      return ['asn',  this.$route.params.pathMatch.split(/[a-z]/i)[2]]
    },
    query() {
      return this.$route.params.pathMatch
    }
  },
  methods: {
    fetchLatest(query) {
      this.$axios.$get(process.env.API_URL + '/match/asn:' + query).then(response => {
        this.results = response
      }).catch((error) => {
        if (error.response) {
          this.$store.commit('updateResultList', [])

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
