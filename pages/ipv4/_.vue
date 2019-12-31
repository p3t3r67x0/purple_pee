<template>
<div class="min-h-screen flex flex-col">
  <div class="flex-grow">
    <navheader></navheader>
    <modal v-if="modalVisible"></modal>
    <query v-if="!loadingIndicator" v-bind:query="query" v-bind:results="results"></query>
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
  head() {
    return {
      title: 'IPv4 results for ' + this.query,
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Explore latest IPv4 results ' + this.query
      }]
    }
  },
  created() {
    this.fetchLatest(this.query)
    this.$store.commit('updateQuery', 'ipv4:' + this.query)
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
    query() {
      return this.$route.params.pathMatch
    },
  },
  methods: {
    fetchLatest(query) {
      this.$axios.$get(process.env.API_URL + '/match/ipv4:' + query).then(res => {
        this.results = res
      }).catch((error) => {
        if (error.response) {
          this.$store.commit('updateErrorMessage', error.response.data)
          this.$store.commit('updateErrorStatus', error.response.status)
          this.$store.commit('updateModalVisible', true)
          this.$store.commit('updateLoadingIndicator', false)
        }
      })
    }
  }
}
</script>
