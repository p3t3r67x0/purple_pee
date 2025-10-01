<template>
<div id="xhr" v-if="!loadingIndicator" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
  <div class="glass-panel rounded-3xl border border-white/10 px-5 py-6 shadow-glass sm:px-8">
    <h1 class="text-2xl font-light tracking-wide text-white/90">
      Explore current <strong class="font-semibold text-white">trends</strong>
    </h1>

    <div class="mt-8 grid gap-6 lg:grid-cols-3">
      <section class="lg:col-span-2 space-y-5">
        <div class="rounded-2xl border border-white/10 bg-white/10 shadow-glass">
          <header class="border-b border-white/10 px-4 py-3">
            <h2 class="text-lg font-semibold text-white">Recent Requests</h2>
            <p class="text-sm text-white/60">Latest activity across endpoints.</p>
          </header>
          <ul class="divide-y divide-white/10">
            <li v-for="request in recentRequestsList" :key="request.created + request.path" class="px-4 py-3">
              <div class="flex flex-col space-y-1">
                <div class="flex items-start justify-between gap-3">
                  <nuxt-link :to="normalizePath(request.path)" class="break-all font-mono text-sm text-cosmic-aurora transition hover:text-cosmic-rose">
                    {{ request.path }}
                  </nuxt-link>
                  <span class="text-xs font-medium text-white/50">{{ formatTimestamp(request.created) }}</span>
                </div>
                <div class="flex flex-wrap items-center gap-2 text-xs text-white/60">
                  <span class="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-2 py-0.5 font-medium uppercase">{{ request.request_method }}</span>
                  <span class="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-2 py-0.5 font-medium">{{ request.status_code }}</span>
                  <span class="font-mono">{{ request.remote_address }}</span>
                </div>
              </div>
            </li>
            <li v-if="!recentRequestsList.length" class="px-4 py-6 text-center text-sm text-white/60">No recent requests recorded.</li>
          </ul>
        </div>
      </section>

      <section class="space-y-4">
        <div class="rounded-2xl border border-white/10 bg-white/10 shadow-glass">
          <header class="border-b border-white/10 px-4 py-3">
            <h2 class="text-lg font-semibold text-white">Top Paths</h2>
            <p class="text-sm text-white/60">Most requested endpoints in the selected window.</p>
          </header>
          <ul class="divide-y divide-white/10">
            <li v-for="path in topPathsList" :key="path.path" class="px-4 py-3">
              <div class="flex items-center justify-between gap-4">
                <nuxt-link :to="normalizePath(path.path)" class="break-all font-mono text-sm text-cosmic-aurora transition hover:text-cosmic-rose">
                  {{ path.path }}
                </nuxt-link>
                <span class="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-white/80">
                  {{ path.count }}
                </span>
              </div>
            </li>
            <li v-if="!topPathsList.length" class="px-4 py-6 text-center text-sm text-white/60">No top paths recorded.</li>
          </ul>
        </div>

        <div class="rounded-2xl border border-white/10 bg-white/10 shadow-glass">
          <header class="border-b border-white/10 px-4 py-3">
            <h2 class="text-lg font-semibold text-white">Traffic Timeline</h2>
            <p class="text-sm text-white/60" v-if="metadataInfo">
              <span class="font-medium capitalize text-white/80">{{ metadataInfo.interval }}</span>
              • Last {{ metadataInfo.lookback_minutes }} minutes
            </p>
          </header>
          <div class="p-4">
            <p
              v-if="metadataInfo && (metadataInfo.total_requests !== undefined || metadataInfo.bucket_count !== undefined)"
              class="text-xs text-white/50 mb-4"
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
              <table class="min-w-full table-auto overflow-hidden rounded-2xl border border-white/10 bg-white/5 text-left shadow-glass">
                <thead class="bg-white/5">
                  <tr>
                    <th class="px-4 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-white/60">Window</th>
                    <th class="px-4 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-white/60">Count</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="bucket in timelineBuckets" :key="bucket.window_start" class="border-t border-white/10">
                    <td class="px-4 py-3 font-mono text-sm text-white/80">
                      {{ formatWindow(bucket.window_start, bucket.window_end) }}
                    </td>
                    <td class="px-4 py-3">
                      <span class="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-cosmic-aurora">
                        {{ bucket.count }}
                      </span>
                    </td>
                  </tr>
                  <tr v-if="!timelineBuckets.length">
                    <td colspan="2" class="px-4 py-6 text-center text-sm text-white/60">No timeline data available.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <ul v-if="timelineBuckets.length" class="space-y-3 md:hidden">
              <li v-for="bucket in timelineBuckets" :key="bucket.window_start" class="rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass">
                <p class="font-mono text-sm text-white/80">{{ formatWindow(bucket.window_start, bucket.window_end) }}</p>
                <p class="mt-2 text-sm font-semibold text-cosmic-aurora">{{ bucket.count }} requests</p>
              </li>
            </ul>
            <p v-else class="md:hidden text-sm text-white/60">No timeline data available.</p>
          </div>
        </div>
      </section>
    </div>
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
