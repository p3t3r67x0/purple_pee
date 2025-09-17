<template>
<div id="xhr" v-if="!loadingIndicator" class="container mx-auto px-3 md:px-0">
  <h1 class="text-xl font-thin mb-6">Explore current <strong class="font-bold">trends</strong></h1>

  <div class="grid gap-6 lg:grid-cols-3">
    <section class="lg:col-span-2 space-y-4">
      <header class="flex items-center justify-between">
        <h2 class="text-lg font-semibold text-gray-800">Traffic Timeline</h2>
        <p class="text-sm text-gray-500" v-if="metadataInfo">
          <span class="font-medium capitalize">{{ metadataInfo.interval }}</span>
          • Last {{ metadataInfo.lookback_minutes }} minutes
        </p>
      </header>
      <p
        v-if="metadataInfo && (metadataInfo.total_requests !== undefined || metadataInfo.bucket_count !== undefined)"
        class="text-xs text-gray-500"
      >
        <span v-if="metadataInfo.total_requests !== undefined">Total requests: {{ metadataInfo.total_requests }}</span>
        <span
          v-if="metadataInfo.bucket_count !== undefined"
          :class="{ 'ml-2': metadataInfo.total_requests !== undefined }"
        >
          Buckets: {{ metadataInfo.bucket_count }}
        </span>
      </p>

      <div class="hidden md:block">
        <table class="min-w-full table-auto border divide-y divide-gray-200 rounded-lg shadow-sm bg-white">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Window</th>
              <th class="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Count</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr v-for="bucket in timelineBuckets" :key="bucket.window_start">
              <td class="px-4 py-2">
                <div class="font-mono text-sm text-gray-700">
                  {{ formatWindow(bucket.window_start, bucket.window_end) }}
                </div>
              </td>
              <td class="px-4 py-2">
                <span class="font-semibold text-indigo-600">{{ bucket.count }}</span>
              </td>
            </tr>
            <tr v-if="!timelineBuckets.length">
              <td colspan="2" class="px-4 py-6 text-center text-sm text-gray-500">No timeline data available.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <ul v-if="timelineBuckets.length" class="space-y-3 md:hidden">
        <li v-for="bucket in timelineBuckets" :key="bucket.window_start" class="rounded-lg border border-purple-200 bg-white p-3 shadow-sm">
          <p class="font-mono text-sm text-gray-700">{{ formatWindow(bucket.window_start, bucket.window_end) }}</p>
          <p class="mt-2 text-sm font-semibold text-indigo-600">{{ bucket.count }} requests</p>
        </li>
      </ul>
      <p v-else class="md:hidden text-sm text-gray-500">No timeline data available.</p>
    </section>

    <section class="space-y-4">
      <div class="bg-white rounded-lg shadow-sm border border-gray-200">
        <header class="border-b border-gray-200 px-4 py-3">
          <h2 class="text-lg font-semibold text-gray-800">Top Paths</h2>
          <p class="text-sm text-gray-500">Most requested endpoints in the selected window.</p>
        </header>
        <ul class="divide-y divide-gray-200">
          <li v-for="path in topPathsList" :key="path.path" class="px-4 py-3">
            <div class="flex items-center justify-between">
              <nuxt-link :to="normalizePath(path.path)" class="font-mono text-sm text-blue-600 hover:text-blue-700 break-all">
                {{ path.path }}
              </nuxt-link>
              <span class="ml-4 inline-flex items-center rounded-full bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600">
                {{ path.count }}
              </span>
            </div>
          </li>
          <li v-if="!topPathsList.length" class="px-4 py-6 text-center text-sm text-gray-500">No top paths recorded.</li>
        </ul>
      </div>

      <div class="bg-white rounded-lg shadow-sm border border-gray-200">
        <header class="border-b border-gray-200 px-4 py-3">
          <h2 class="text-lg font-semibold text-gray-800">Recent Requests</h2>
          <p class="text-sm text-gray-500">Latest activity across endpoints.</p>
        </header>
        <ul class="divide-y divide-gray-200">
          <li v-for="request in recentRequestsList" :key="request.created + request.path" class="px-4 py-3">
            <div class="flex flex-col space-y-1">
              <div class="flex items-center justify-between">
                <nuxt-link :to="normalizePath(request.path)" class="font-mono text-sm text-blue-600 hover:text-blue-700 break-all">
                  {{ request.path }}
                </nuxt-link>
                <span class="text-xs font-medium text-gray-500">{{ formatTimestamp(request.created) }}</span>
              </div>
              <div class="flex flex-wrap items-center gap-2 text-xs text-gray-500">
                <span class="inline-flex items-center rounded bg-gray-100 px-2 py-0.5 font-medium uppercase">{{ request.request_method }}</span>
                <span class="inline-flex items-center rounded bg-gray-100 px-2 py-0.5 font-medium">{{ request.status_code }}</span>
                <span class="font-mono">{{ request.remote_address }}</span>
              </div>
            </div>
          </li>
          <li v-if="!recentRequestsList.length" class="px-4 py-6 text-center text-sm text-gray-500">No recent requests recorded.</li>
        </ul>
      </div>
    </section>
  </div>
</div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useMainStore } from '~/stores/main'

interface TimelineBucket {
  window_start: string
  window_end: string
  count: number
}

interface TrendsMetadata {
  interval: string
  lookback_minutes: number
  total_requests?: number
  bucket_count?: number
}

const props = withDefaults(
  defineProps<{
    results: Array<Record<string, any>>
    timeline?: TimelineBucket[]
    topPaths?: Array<Record<string, any>>
    recentRequests?: Array<Record<string, any>>
    metadata?: TrendsMetadata | null
  }>(),
  {
    results: () => [],
    timeline: () => [],
    topPaths: () => [],
    recentRequests: () => [],
    metadata: null
  }
)

const mainStore = useMainStore()
const { loading: loadingIndicator } = storeToRefs(mainStore)

const timelineBuckets = computed(() => props.timeline ?? [])
const topPathsList = computed(() => props.topPaths ?? [])
const recentRequestsList = computed(() => props.recentRequests ?? [])
const metadataInfo = computed(() => props.metadata)

const normalizePath = (path: string) => {
  if (!path || path === '#') {
    return '#'
  }

  return path.startsWith('/') ? path : `/${path}`
}

const formatTimestamp = (value?: string) => {
  if (!value) {
    return ''
  }

  const date = new Date(value)

  if (Number.isNaN(date.getTime())) {
    return value
  }

  return date.toLocaleString(undefined, {
    hour12: false,
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  })
}

const formatWindow = (start?: string, end?: string) => {
  if (!start || !end) {
    return 'Unknown window'
  }

  const startDate = new Date(start)
  const endDate = new Date(end)

  if (Number.isNaN(startDate.getTime()) || Number.isNaN(endDate.getTime())) {
    return `${start} → ${end}`
  }

  const startLabel = startDate.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit', hour12: false })
  const endLabel = endDate.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit', hour12: false })
  const sameDay = startDate.toDateString() === endDate.toDateString()

  if (sameDay) {
    return `${startDate.toLocaleDateString(undefined, { month: 'short', day: 'numeric' })} ${startLabel} → ${endLabel}`
  }

  return `${startDate.toLocaleString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: false })} → ${endDate.toLocaleString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: false })}`
}
</script>
