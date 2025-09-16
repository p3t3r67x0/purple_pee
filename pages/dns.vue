<template>
<div class="min-h-screen flex flex-col">
  <div class="flex-grow">
    <navheader></navheader>
    <modal v-if="modalVisible"></modal>
    <query v-if="!loadingIndicator" v-bind:query="queryTitle" v-bind:results="results.length"></query>
    <dns v-bind:results="results" :currentPage="currentPage" @nextPage="nextPage" @prevPage="prevPage"></dns>
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
      currentPage: 1,
      pageSize: 10
    }
  },
  created() {
    this.fetchLatest(this.currentPage, this.pageSize)
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
    async fetchLatest(page = 1, pageSize = 10) {
      try {
        const res = await fetchJson(this.$env.API_URL + `/dns?page=${page}&page_size=${pageSize}`)
        this.results = res.results
      } catch (error) {
        handleFetchError(error)
      }
    },
    nextPage() {
      this.currentPage++
      this.fetchLatest(this.currentPage, this.pageSize)
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--
        this.fetchLatest(this.currentPage, this.pageSize)
      }
    }
  }
}
</script>
