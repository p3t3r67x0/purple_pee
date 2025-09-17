<template>
<div class="min-h-screen flex flex-col">
  <div class="flex-grow">
    <navheader></navheader>
    <asn v-bind:results="results"></asn>
  </div>
  <navfooter></navfooter>
</div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Asn from '@/components/asn2.vue'
import Footer from '@/components/navfooter.vue'
import Navbar from '@/components/navheader.vue'
import { fetchJson, handleFetchError, isPaginatedResponse } from '~/utils/http'
import { useNuxtApp } from '#app'

const results = ref<any[]>([])
const { $env } = useNuxtApp()

const DEFAULT_PAGE = 1
const DEFAULT_PAGE_SIZE = 25

const fetchLatest = async (page = DEFAULT_PAGE) => {
  try {
    const response = await fetchJson(`${$env.API_URL}/asn?page=${page}&page_size=${DEFAULT_PAGE_SIZE}`)

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
