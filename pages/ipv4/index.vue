<template>
<div class="min-h-screen flex flex-col">
  <div class="flex-grow">
    <navheader></navheader>
    <modal v-if="modalVisible"></modal>
    <list
      v-bind:results="results"
      :total="pagination.total"
      :currentPage="currentPage"
      :hasNext="pagination.has_next"
      :hasPrevious="pagination.has_previous"
      @nextPage="nextPage"
      @prevPage="prevPage"
    ></list>
  </div>
  <navfooter></navfooter>
</div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Modal from '@/components/modal.vue'
import List from '@/components/ipv4-list.vue'
import Footer from '@/components/navfooter.vue'
import Navbar from '@/components/navheader.vue'
import { fetchJson, handleFetchError, isPaginatedResponse } from '~/utils/http'
import { useMainStore } from '~/stores/main'
import { storeToRefs } from 'pinia'
import { useNuxtApp } from '#app'

const DEFAULT_PAGE = 1
const DEFAULT_PAGE_SIZE = 25

const results = ref<any[]>([])
const currentPage = ref(DEFAULT_PAGE)
const pageSize = ref(DEFAULT_PAGE_SIZE)
const pagination = ref({
  page: DEFAULT_PAGE,
  page_size: DEFAULT_PAGE_SIZE,
  total: 0,
  total_pages: 1,
  has_next: false,
  has_previous: false
})
const mainStore = useMainStore()
const { modalVisible } = storeToRefs(mainStore)
const { $env } = useNuxtApp()

useHead(() => ({
  title: 'Latest IPv4 Addresses & Network Analysis | NetScanner IP Database',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Explore the latest IPv4 address entries and network analysis data. Comprehensive IPv4 database with geolocation, ASN information, port scans, and network infrastructure details.'
    },
    {
      name: 'keywords',
      content: 'IPv4 addresses, IP database, network analysis, geolocation, ASN lookup, port scanning, IP intelligence, network infrastructure'
    },
    {
      property: 'og:title',
      content: 'Latest IPv4 Addresses & Network Analysis | NetScanner'
    },
    {
      property: 'og:description',
      content: 'Comprehensive IPv4 database with real-time network analysis, geolocation data, and infrastructure intelligence.'
    }
  ]
}))

const fetchLatest = async (page = currentPage.value) => {
  try {
    const response = await fetchJson(`${$env.API_URL}/ipv4?page=${page}&page_size=${pageSize.value}`)

    if (isPaginatedResponse<any>(response)) {
      results.value = response.results
      pagination.value = {
        page: response.page,
        page_size: response.page_size,
        total: response.total,
        total_pages: response.total_pages,
        has_next: response.has_next,
        has_previous: response.has_previous
      }
      currentPage.value = response.page
      pageSize.value = response.page_size
      return
    }

    if (response && typeof response === 'object' && Array.isArray((response as { results?: unknown[] }).results)) {
      const fallbackResults = (response as { results?: any[] }).results ?? []
      results.value = fallbackResults
      pagination.value = {
        page,
        page_size: pageSize.value,
        total: fallbackResults.length,
        total_pages: 1,
        has_next: false,
        has_previous: page > 1
      }
      currentPage.value = pagination.value.page
      return
    }

    const fallbackArray = Array.isArray(response) ? response : []
    results.value = fallbackArray
    pagination.value = {
      page,
      page_size: pageSize.value,
      total: fallbackArray.length,
      total_pages: 1,
      has_next: false,
      has_previous: page > 1
    }
    currentPage.value = pagination.value.page
  } catch (error) {
    handleFetchError(error)
    pagination.value = {
      page,
      page_size: pageSize.value,
      total: 0,
      total_pages: 1,
      has_next: false,
      has_previous: page > 1
    }
  }
}

const nextPage = () => {
  if (!pagination.value.has_next) {
    return
  }

  fetchLatest(currentPage.value + 1)
}

const prevPage = () => {
  if (!pagination.value.has_previous) {
    return
  }

  fetchLatest(currentPage.value - 1)
}

onMounted(() => {
  fetchLatest(currentPage.value)
})
</script>
