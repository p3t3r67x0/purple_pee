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

useHead(() => ({
  title: 'Latest ASN Records & Network Analysis | NetScanner ASN Database',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Explore the latest Autonomous System Number (ASN) records and network allocations. Comprehensive ASN database with ISP information, IP ranges, and network infrastructure details.'
    },
    {
      name: 'keywords',
      content: 'ASN lookup, autonomous system, network analysis, ISP information, IP allocations, BGP routing, network infrastructure, internet backbone'
    },
    {
      property: 'og:title',
      content: 'Latest ASN Records & Network Analysis | NetScanner'
    },
    {
      property: 'og:description',
      content: 'Comprehensive ASN database and network analysis with real-time updates on autonomous systems and network allocations.'
    }
  ]
}))
</script>
