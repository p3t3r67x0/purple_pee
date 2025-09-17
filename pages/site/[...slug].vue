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

<script setup lang="ts">
import { ref, watch } from 'vue'
import Dns from '@/components/dns.vue'
import Modal from '@/components/modal.vue'
import Query from '@/components/query.vue'
import Graph from '@/components/graph.vue'
import Footer from '@/components/navfooter.vue'
import Navbar from '@/components/navheader.vue'
import { fetchJson, handleFetchError, isPaginatedResponse } from '~/utils/http'
import { useMatchResultsPage } from '~/composables/useMatchResultsPage'
import { useNuxtApp } from '#app'

const graphResults = ref<{ nodes: any[]; edges: any[] }>({ nodes: [], edges: [] })
const showGraph = ref(false)
const { $env } = useNuxtApp()

const { results, currentPage, modalVisible, loadingIndicator, queryTitle, decodedQuery } = useMatchResultsPage({
  prefix: 'site',
  headTitle: (decodedQuery) => `Site results for ${decodedQuery}`,
  headDescription: (decodedQuery) => `Explore latest site results ${decodedQuery}`,
  buildQueryTitle: (decodedQuery) => ['site', decodedQuery]
})

useHead(() => ({
  script: [
    {
      src: 'https://unpkg.com/vis-network/standalone/umd/vis-network.min.js'
    }
  ]
}))

const fetchGraph = async (query: string) => {
  if (!query) {
    graphResults.value = { nodes: [], edges: [] }
    showGraph.value = false
    return
  }

  try {
    const response = await fetchJson(`${$env.API_URL}/graph/${query}`, { trackLoading: false })
    const payload = isPaginatedResponse<any>(response) ? response.results : response

    if (Array.isArray(payload) && payload.length > 0) {
      const raw = payload[0] as { main: Array<{ domain: string }>; all: Array<{ domain: string }> }
      const nodes = [
        ...raw.main.map((m, index) => ({ id: `main-${index}`, label: m.domain })),
        ...raw.all.map((a, index) => ({ id: `all-${index}`, label: a.domain }))
      ]
      const edges = raw.all.map((_, index) => ({ from: 'main-0', to: `all-${index}` }))

      graphResults.value = { nodes, edges }
      showGraph.value = true
    } else {
      graphResults.value = { nodes: [], edges: [] }
      showGraph.value = false
    }
  } catch (error) {
    handleFetchError(error, { updateResultList: false })
    graphResults.value = { nodes: [], edges: [] }
    showGraph.value = false
  }
}

watch(
  decodedQuery,
  (value) => {
    fetchGraph(value)
  },
  { immediate: true }
)
</script>
