<template>
<div class="min-h-screen flex flex-col">
  <div class="flex-grow">
    <navheader></navheader>
    <modal v-if="modalVisible"></modal>
    <dns
      v-bind:results="results"
      :total="pagination.total"
      :currentPage="currentPage"
      :hasNext="pagination.has_next"
      :hasPrevious="pagination.has_previous"
      @nextPage="nextPage"
      @prevPage="prevPage"
    ></dns>
  </div>
  <navfooter></navfooter>
</div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Dns from '@/components/dns.vue'
import Modal from '@/components/modal.vue'
import Footer from '@/components/navfooter.vue'
import Navbar from '@/components/navheader.vue'
import { fetchJson, handleFetchError, isPaginatedResponse } from '~/utils/http'
import { useMainStore } from '~/stores/main'
import { storeToRefs } from 'pinia'
import { useNuxtApp } from '#app'

const results = ref<any[]>([])
const currentPage = ref(1)
const DEFAULT_PAGE_SIZE = 25
const pageSize = ref(DEFAULT_PAGE_SIZE)
const pagination = ref({
  page: 1,
  page_size: DEFAULT_PAGE_SIZE,
  total: 0,
  total_pages: 1,
  has_next: false,
  has_previous: false
})
const mainStore = useMainStore()
const { modalVisible, loading: loadingIndicator } = storeToRefs(mainStore)
const { $env } = useNuxtApp()

useHead(() => ({
  title: 'Latest DNS Records & Domain Lookups | NetScanner DNS Analysis',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Explore the latest DNS lookup entries and domain records. Comprehensive DNS analysis including A, AAAA, MX, CNAME, TXT records with real-time updates and historical data.'
    },
    {
      name: 'keywords',
      content: 'DNS lookup, domain records, DNS analysis, A records, MX records, CNAME records, TXT records, nameservers, DNS resolution'
    },
    {
      property: 'og:title',
      content: 'Latest DNS Records & Domain Lookups | NetScanner'
    },
    {
      property: 'og:description',
      content: 'Real-time DNS analysis and domain record exploration with comprehensive lookup history.'
    }
  ]
}))

const fetchLatest = async (page = 1, size = DEFAULT_PAGE_SIZE) => {
  try {
    const response = await fetchJson(`${$env.API_URL}/dns?page=${page}&page_size=${size}`)

    if (isPaginatedResponse<any>(response)) {
      results.value = response.results
      const derivedHasNext = response.page < response.total_pages
      const derivedHasPrevious = response.page > 1

      pagination.value = {
        page: response.page,
        page_size: response.page_size,
        total: response.total,
        total_pages: response.total_pages,
        has_next: Boolean(response.has_next) || derivedHasNext,
        has_previous: Boolean(response.has_previous) || derivedHasPrevious
      }
      currentPage.value = response.page
      pageSize.value = response.page_size
      return
    }

    if (response && typeof response === 'object' && Array.isArray((response as { results?: unknown[] }).results)) {
      const fallbackResults = (response as { results?: any[] }).results ?? []
      results.value = fallbackResults
      const totalPages = fallbackResults.length > 0 ? Math.max(1, Math.ceil(fallbackResults.length / size)) : 1

      pagination.value = {
        page,
        page_size: size,
        total: fallbackResults.length,
        total_pages: totalPages,
        has_next: page < totalPages,
        has_previous: page > 1
      }
      currentPage.value = pagination.value.page
      pageSize.value = pagination.value.page_size
      return
    }

    const fallbackArray = Array.isArray(response) ? response : []
    results.value = fallbackArray
    const totalPages = fallbackArray.length > 0 ? Math.max(1, Math.ceil(fallbackArray.length / size)) : 1

    pagination.value = {
      page,
      page_size: size,
      total: fallbackArray.length,
      total_pages: totalPages,
      has_next: page < totalPages,
      has_previous: page > 1
    }
    currentPage.value = pagination.value.page
    pageSize.value = pagination.value.page_size
  } catch (error) {
    handleFetchError(error)
    pagination.value = {
      page,
      page_size: size,
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

  fetchLatest(currentPage.value + 1, pageSize.value)
}

const prevPage = () => {
  if (!pagination.value.has_previous) {
    return
  }

  fetchLatest(currentPage.value - 1, pageSize.value)
}

onMounted(() => {
  fetchLatest(currentPage.value, pageSize.value)
})
</script>
