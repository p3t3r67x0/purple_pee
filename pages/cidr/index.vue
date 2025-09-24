<template>
  <div class="min-h-screen flex flex-col">
    <div class="flex-grow">
      <Navbar />
      <Modal v-if="modalVisible"></Modal>
      <List v-bind:results="results"></List>
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Modal from '@/components/Modal.vue'
import List from '@/components/CidrList.vue'
import Footer from '@/components/NavFooter.vue'
import Navbar from '@/components/NavHeader.vue'
import { fetchJson, handleFetchError, isPaginatedResponse } from '~/utils/http'
import { useMainStore } from '~/stores/main'
import { storeToRefs } from 'pinia'
import { useNuxtApp } from '#app'

const results = ref<any[]>([])
const mainStore = useMainStore()
const { modalVisible } = storeToRefs(mainStore)
const { $env } = useNuxtApp()

useHead(() => ({
  title: 'Latest CIDR Blocks & Network Ranges | NetScanner Subnet Database',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Explore the latest CIDR block entries and network subnet allocations. Comprehensive database of IP ranges, network blocks, routing information, and subnet analysis for network administrators.'
    },
    {
      name: 'keywords',
      content: 'CIDR blocks, subnet analysis, network ranges, IP allocations, routing tables, network administration, subnet calculator, network blocks'
    },
    {
      property: 'og:title',
      content: 'Latest CIDR Blocks & Network Ranges | NetScanner'
    },
    {
      property: 'og:description',
      content: 'Comprehensive CIDR database with network subnet allocations, IP ranges, and routing information for network analysis.'
    }
  ]
}))

const DEFAULT_PAGE = 1
const DEFAULT_PAGE_SIZE = 25

const fetchLatest = async (page = DEFAULT_PAGE) => {
  try {
    const response = await fetchJson(`${$env.API_URL}/cidr?page=${page}&page_size=${DEFAULT_PAGE_SIZE}`)

    if (isPaginatedResponse<any>(response)) {
      results.value = response.results
      return
    }

    if (response && typeof response === 'object' && Array.isArray((response as { results?: unknown[] }).results)) {
      results.value = (response as { results?: any[] }).results ?? []
      return
    }

    results.value = Array.isArray(response) ? response : []
  } catch (error) {
    handleFetchError(error)
  }
}

onMounted(() => {
  fetchLatest(DEFAULT_PAGE)
})
</script>
