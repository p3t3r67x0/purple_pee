<template>
<div class="min-h-screen flex flex-col">
  <div class="flex-grow">
    <navheader></navheader>
    <modal v-if="modalVisible"></modal>
    <query v-if="!loadingIndicator" v-bind:query="queryTitle" v-bind:results="results.length"></query>
    <dns v-if="!loadingIndicator" v-bind:results="results" :currentPage="currentPage"></dns>
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
import { fetchJson, handleFetchError } from '~/utils/http'

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
      currentPage: 1
    }
  },
  created() {
    this.fetchLatest(this.query)
    this.$store.commit('updateQuery', 'before:' + decodeURIComponent(this.query))
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
      return ['not_before',  this.$slugParam()]
    },
    query() {
      return this.$slugParam()
    }
  },
  head() {
    return {
      title: 'SSL ceritificates not valid before ' + decodeURIComponent(this.query),
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Explore latest SSL ceritificates not valid before ' + decodeURIComponent(this.query)
      }]
    }
  },
  methods: {
    async fetchLatest(query) {
      try {
        const res = await fetchJson(this.$env.API_URL + '/match/before:' + decodeURIComponent(query))
        this.results = res
      } catch (error) {
        handleFetchError(error)
      }
    }
  }
}
</script>
