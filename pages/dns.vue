<template>
<div class="min-h-screen flex flex-col">
  <div class="flex-grow">
    <navheader></navheader>
    <modal v-if="modalVisible"></modal>
    <query v-if="!loadingIndicator" v-bind:query="queryTitle" v-bind:results="results.length"></query>
    <dns v-bind:results="results"></dns>
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
  created() {
    this.fetchLatest()
  },
  head() {
    return {
      title: 'Latest DNS lookup entries',
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Find latest DNS lookup entries they change every few seconds so make sure you keep uptodate.'
      }]
    }
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
      return ['latest', 'DNS']
    }
  },
  methods: {
    fetchLatest() {
      this.$axios.$get(process.env.API_URL + '/dns').then(res => {
        this.results = res
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
