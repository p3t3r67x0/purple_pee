<template>
<div class="min-h-screen flex flex-col">
  <div class="flex-grow">
    <navheader></navheader>
    <modal v-if="modalVisible"></modal>
    <list
      v-bind:results="results"
      :timeline="timeline"
      :topPaths="topPaths"
      :recentRequests="recentRequests"
      :metadata="metadata"
    ></list>
  </div>
  <navfooter></navfooter>
</div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Modal from '@/components/modal.vue'
import List from '@/components/trends-list.vue'
import Footer from '@/components/navfooter.vue'
import Navbar from '@/components/navheader.vue'
import { fetchJson, handleFetchError, isPaginatedResponse } from '~/utils/http'
import { useMainStore } from '~/stores/main'
import { storeToRefs } from 'pinia'
import { useNuxtApp } from '#app'

const results = ref<any[]>([])
const timeline = ref<Array<Record<string, any>>>([])
const topPaths = ref<Array<Record<string, any>>>([])
const recentRequests = ref<Array<Record<string, any>>>([])
const metadata = ref<{ interval: string; lookback_minutes: number; total_requests?: number; bucket_count?: number } | null>(null)
const mainStore = useMainStore()
const { modalVisible } = storeToRefs(mainStore)
const { $env } = useNuxtApp()

useHead(() => ({
  title: 'Network Trends & Analytics Dashboard | NetScanner Real-time Statistics',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Explore real-time network trends and analytics on NetScanner. Monitor API usage patterns, popular queries, traffic analytics, and discover trending domains, IPs, and network infrastructure changes.'
    },
    {
      name: 'keywords',
      content: 'network trends, analytics dashboard, API statistics, traffic monitoring, trending domains, network analytics, real-time data, usage patterns'
    },
    {
      property: 'og:title',
      content: 'Network Trends & Analytics Dashboard | NetScanner'
    },
    {
      property: 'og:description',
      content: 'Real-time network analytics and trends dashboard with API usage statistics, popular queries, and traffic monitoring.'
    }
  ]
}))

const DEFAULT_PAGE = 1
const DEFAULT_PAGE_SIZE = 25
const DEFAULT_INTERVAL = 'minute'
const DEFAULT_LOOKBACK_MINUTES = 60
const DEFAULT_BUCKETS = 20
const DEFAULT_TOP_PATHS = 5
const DEFAULT_RECENT_LIMIT = 20

const fetchLatest = async (page = DEFAULT_PAGE) => {
  try {
    const query = new URLSearchParams({
      interval: DEFAULT_INTERVAL,
      lookback_minutes: String(DEFAULT_LOOKBACK_MINUTES),
      buckets: String(DEFAULT_BUCKETS),
      top_paths: String(DEFAULT_TOP_PATHS),
      recent_limit: String(DEFAULT_RECENT_LIMIT),
      page: String(page),
      page_size: String(DEFAULT_PAGE_SIZE)
    })

    const response = await fetchJson(`${$env.API_URL}/trends/requests?${query.toString()}`)

    if (response && typeof response === 'object') {
      const data = response as {
        timeline?: unknown
        top_paths?: unknown
        recent_requests?: unknown
        interval?: unknown
        lookback_minutes?: unknown
        results?: unknown
        total_requests?: unknown
        bucket_count?: unknown
      }

      const interval = typeof data.interval === 'string' ? data.interval : null
      const lookback = typeof data.lookback_minutes === 'number' ? data.lookback_minutes : null
      const totalRequests = typeof data.total_requests === 'number' ? data.total_requests : null
      const bucketCount = typeof data.bucket_count === 'number' ? data.bucket_count : null

      metadata.value = interval && lookback !== null
        ? {
            interval,
            lookback_minutes: lookback,
            ...(totalRequests !== null ? { total_requests: totalRequests } : {}),
            ...(bucketCount !== null ? { bucket_count: bucketCount } : {})
          }
        : null

      if (isPaginatedResponse<any>(data.timeline)) {
        timeline.value = data.timeline.results ?? []
      } else if (Array.isArray((data.timeline as { results?: unknown[] } | undefined)?.results)) {
        timeline.value = (data.timeline as { results?: any[] }).results ?? []
      } else if (Array.isArray(data.timeline)) {
        timeline.value = data.timeline as any[]
      } else {
        timeline.value = []
      }

      topPaths.value = Array.isArray(data.top_paths) ? (data.top_paths as any[]) : []
      recentRequests.value = Array.isArray(data.recent_requests) ? (data.recent_requests as any[]) : []

      results.value = Array.isArray(data.results)
        ? (data.results as any[])
        : Array.isArray(response)
          ? (response as any[])
          : []

      return
    }

    results.value = Array.isArray(response) ? (response as any[]) : []
    timeline.value = []
    topPaths.value = []
    recentRequests.value = []
    metadata.value = null
  } catch (error) {
    handleFetchError(error)
    timeline.value = []
    topPaths.value = []
    recentRequests.value = []
    metadata.value = null
  }
}

onMounted(() => {
  fetchLatest(DEFAULT_PAGE)
})
</script>
