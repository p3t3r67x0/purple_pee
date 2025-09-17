<template>
<div class="min-h-screen flex flex-col">
  <div class="flex-grow">
    <navheader></navheader>
    <modal v-if="modalVisible"></modal>
    <query v-if="!loadingIndicator" v-bind:query="queryTitle" v-bind:results="results.length"></query>
    <dns
      v-bind:results="results"
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
import { computed, onMounted, ref } from 'vue'
import Dns from '@/components/dns.vue'
import Modal from '@/components/modal.vue'
import Query from '@/components/query.vue'
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

const queryTitle = computed(() => ['latest', 'DNS'])

useHead(() => ({
  title: 'Latest DNS lookup entries',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Find latest DNS lookup entries they change every few seconds so make sure you keep uptodate.'
    }
  ]
}))

const fetchLatest = async (page = 1, size = DEFAULT_PAGE_SIZE) => {
  try {
    const response = await fetchJson(`${$env.API_URL}/dns?page=${page}&page_size=${size}`)

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
        page_size: size,
        total: fallbackResults.length,
        total_pages: 1,
        has_next: false,
        has_previous: page > 1
      }
      currentPage.value = pagination.value.page
      pageSize.value = pagination.value.page_size
      return
    }

    const fallbackArray = Array.isArray(response) ? response : []
    results.value = fallbackArray
    pagination.value = {
      page,
      page_size: size,
      total: fallbackArray.length,
      total_pages: 1,
      has_next: false,
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
