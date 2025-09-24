<template>
  <div class="min-h-screen flex flex-col">
    <div class="flex-grow">
      <Navbar />
      <Modal v-if="modalVisible"></Modal>
      <Dns
        v-if="!loadingIndicator"
        v-bind:results="results"
        :currentPage="currentPage"
        :total="pagination.total"
        :hasNext="pagination.has_next"
        :hasPrevious="pagination.has_previous"
        @nextPage="nextPage"
        @prevPage="prevPage"
      ></Dns>
      <client-only>
        <Graph v-if="!loadingIndicator && showGraph" v-bind:results="graphResults" ></Graph>
      </client-only>
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import Dns from '@/components/Dns.vue'
import Modal from '@/components/Modal.vue'
import Graph from '@/components/Graph.vue'
import Footer from '@/components/NavFooter.vue'
import Navbar from '@/components/NavHeader.vue'
import { fetchJson, handleFetchError, isPaginatedResponse } from '~/utils/http'
import { useMatchResultsPage } from '~/composables/useMatchResultsPage'
import { useNuxtApp } from '#app'

const graphResults = ref<{ nodes: any[]; edges: any[] }>({ nodes: [], edges: [] })
const showGraph = ref(false)
const { $env } = useNuxtApp()

const { results, currentPage, pagination, modalVisible, loadingIndicator, nextPage, prevPage, decodedQuery } = useMatchResultsPage({
  prefix: 'site',
  headTitle: (decodedQuery) => `Website Analysis: ${decodedQuery} | NetScanner Domain Intelligence`,
  headDescription: (decodedQuery) => `Comprehensive website and domain analysis for ${decodedQuery}. Explore DNS records, SSL certificates, subdomains, hosting infrastructure, and security intelligence for this domain.`,
  buildQueryTitle: (decodedQuery) => ['site', decodedQuery]
})

const fetchGraph = async (query: string) => {
  if (!query) {
    graphResults.value = { nodes: [], edges: [] }
    showGraph.value = false
    return
  }

  try {
    const response = await fetchJson(`${$env.API_URL}/graph/${query}`, { trackLoading: false })
    const payload = isPaginatedResponse<any>(response) ? response.results : response

    // Check if the API response already has the correct format
    if (payload && payload.nodes && payload.edges) {
      // API response is already in the correct format
      graphResults.value = {
        nodes: payload.nodes,
        edges: payload.edges
      }
      showGraph.value = payload.nodes.length > 0 && payload.edges.length > 0
    } else if (Array.isArray(payload) && payload.length > 0) {
      // Fallback for old format
      const raw = payload[0] as { main: Array<{ domain: string }>; all: Array<{ domain: string }> }
      const nodes = [
        ...raw.main.map((m, index) => ({ id: `main-${index}`, label: m.domain, type: 'domain' })),
        ...raw.all.map((a, index) => ({ id: `all-${index}`, label: a.domain, type: 'domain' }))
      ]
      const edges = raw.all.map((_, index) => ({ source: 'main-0', target: `all-${index}`, type: 'related' }))

      graphResults.value = { nodes, edges }
      showGraph.value = nodes.length > 0
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
