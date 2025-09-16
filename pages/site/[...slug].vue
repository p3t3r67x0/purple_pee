<template>
  <div class="min-h-screen flex flex-col">
    <div class="flex-grow">
      <navheader></navheader>
      <modal v-if="modalVisible"></modal>
      <query v-if="!loadingIndicator" v-bind:query="queryTitle" v-bind:results="results.length"></query>
      <dns v-if="!loadingIndicator" v-bind:results="results" :currentPage="currentPage"></dns>
      <client-only>
        <graph v-if="!loadingIndicator && showGraph" v-bind:results="graphResults"></graph>
      </client-only>
    </div>
    <navfooter></navfooter>
  </div>
</template>

<script>
import Dns from '@/components/dns.vue'
import Modal from '@/components/modal.vue'
import Query from '@/components/query.vue'
import Graph from '@/components/graph.vue'
import Footer from '@/components/navfooter.vue'
import Navbar from '@/components/navheader.vue'
import { fetchJson, handleFetchError } from '~/utils/http'

export default {
  components: {
    dns: Dns,
    query: Query,
    modal: Modal,
    graph: Graph,
    navfooter: Footer,
    navheader: Navbar
  },
  data() {
    return {
      results: [],
      graphResults: { nodes: [], edges: [] },
      showGraph: false,
      currentPage: 1
    }
  },
  created() {
    this.fetchLatest(this.query)
    this.fetchGraph(this.query)
    this.$store.commit('updateQuery', 'site:' + decodeURIComponent(this.query))
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
      return ['site', decodeURIComponent(this.$slugParam())]
    },
    query() {
      return decodeURIComponent(this.$slugParam())
    }
  },
  head() {
    return {
      script: [{
        src: 'https://unpkg.com/vis-network/standalone/umd/vis-network.min.js'
      }],
      title: 'Site results for ' + decodeURIComponent(this.query),
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Explore latest site results ' + decodeURIComponent(this.query)
      }]
    }
  },
  methods: {
    async fetchLatest(query) {
      try {
        const res = await fetchJson(this.$env.API_URL + '/match/site:' + query)
        this.results = res
      } catch (error) {
        handleFetchError(error)
      }
    },
    async fetchGraph(query) {
      try {
        const res = await fetchJson(this.$env.API_URL + '/graph/' + query, { trackLoading: false })

        if (Array.isArray(res) && res.length > 0) {
          const raw = res[0]

          // transform into nodes + edges for D3
          const nodes = [
            ...raw.main.map((m, i) => ({ id: `main-${i}`, label: m.domain })),
            ...raw.all.map((a, i) => ({ id: `all-${i}`, label: a.domain }))
          ]

          const edges = raw.all.map((a, i) => ({
            from: 'main-0', // link all subdomains to the first main node
            to: `all-${i}`
          }))

          this.graphResults = { nodes, edges }
          this.showGraph = true
        }
      } catch (error) {
        handleFetchError(error, { updateResultList: false })
      }
    }
  }
}
</script>

