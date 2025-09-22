<template>
  <div class="min-h-screen flex flex-col">
    <div class="flex-grow">
      <navheader></navheader>
      <modal v-if="modalVisible"></modal>
      <section class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div class="glass-panel rounded-3xl border border-white/10 bg-black/80 shadow-glass">
          <div class="flex items-center space-x-2 border-b border-white/10 bg-black/40 px-5 py-3">
            <span class="h-3 w-3 rounded-full bg-red-400/80"></span>
            <span class="h-3 w-3 rounded-full bg-amber-300/80"></span>
            <span class="h-3 w-3 rounded-full bg-emerald-400/80"></span>
            <span class="ml-auto font-mono text-xs uppercase tracking-widest text-white/50">live scan terminal</span>
          </div>
          <div class="p-5 sm:p-8">
            <div class="space-y-4 font-mono text-sm text-green-200">
              <p>
                <span class="text-emerald-300">purplepee@scanner</span>:~$ live-scan
                <span class="ml-2 text-white/80">{{ decodedDomain || 'waiting-for-target' }}</span>
              </p>

              <template v-if="true">
                <p>
                  <span class="text-slate-400">status</span>:
                  <span :class="statusClass">{{ statusLabel }}</span>
                  <span v-if="lastUpdatedLabel" class="ml-2 text-slate-500"># {{ lastUpdatedLabel }}</span>
                </p>

                <template v-if="errorMessage">
                  <p class="text-red-400">! {{ errorMessage }}</p>
                </template>

                <template v-else-if="status === 'connecting' || loadingIndicator">
                  <p><span class="text-slate-400">connecting</span>… awaiting response from {{ decodedDomain }}.</p>
                </template>

                <template v-else-if="status === 'complete'">
                  <div class="space-y-2">
                    <p><span class="text-slate-400">payload</span>:</p>
                    <pre
                      class="max-h-[32rem] overflow-auto rounded-xl border border-emerald-400/20 bg-black/60 p-4 text-xs text-emerald-200 whitespace-pre-wrap">{{ formattedResult }}</pre>
                    <p class="text-slate-500"># reload to trigger a new live request.</p>
                  </div>
                </template>

                <template v-else>
                  <p class="text-slate-400">provide a valid domain to trigger the live scan pipeline.</p>
                </template>
              </template>
            </div>
          </div>
        </div>
      </section>
    </div>
    <navfooter></navfooter>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import Modal from '@/components/modal.vue'
import Footer from '@/components/navfooter.vue'
import Navbar from '@/components/navheader.vue'
import { useSlugParam } from '~/composables/useSlugParam'
import { useMainStore } from '~/stores/main'
import { storeToRefs } from 'pinia'
import { useNuxtApp, useHead } from '#app'

const slug = useSlugParam()
const { $env } = useNuxtApp()
const mainStore = useMainStore()
const { modalVisible, loading: loadingIndicator } = storeToRefs(mainStore)

const status = ref<'idle' | 'connecting' | 'complete' | 'error'>('idle')
const result = ref<unknown>(null)
const errorMessage = ref<string | null>(null)
const lastUpdated = ref<number | null>(null)
const socket = ref<WebSocket | null>(null)

const rawDomain = computed(() => slug.value)
const decodedDomain = computed(() => {
  const domain = rawDomain.value || ''

  try {
    return decodeURIComponent(domain)
  } catch {
    return domain
  }
})

const formattedResult = computed(() => {
  if (!result.value) return ''
  try {
    return JSON.stringify(result.value, null, 2)
  } catch {
    return String(result.value)
  }
})

const statusLabel = computed(() => {
  switch (status.value) {
    case 'connecting': return 'Connecting'
    case 'complete': return 'Complete'
    case 'error': return 'Error'
    default: return 'Idle'
  }
})

const statusClass = computed(() => {
  switch (status.value) {
    case 'connecting': return 'text-amber-300'
    case 'complete': return 'text-emerald-300'
    case 'error': return 'text-red-400'
    default: return 'text-slate-400'
  }
})

const lastUpdatedLabel = computed(() => {
  if (!lastUpdated.value) return ''
  try {
    return new Date(lastUpdated.value).toLocaleString()
  } catch {
    return ''
  }
})

useHead(() => ({
  title: decodedDomain.value ? `Live scan for ${decodedDomain.value}` : 'Live scan',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: decodedDomain.value
        ? `Live scanning status for ${decodedDomain.value}`
        : 'Live scanning status overview'
    }
  ]
}))

const buildEndpoint = (domain: string) => {
  const base = ($env?.API_URL || '').replace(/\/$/, '')
  if (!base || !domain) return ''

  // Ensure ws:// or wss://
  const url = new URL(base)
  url.protocol = url.protocol === 'https:' ? 'wss:' : 'ws:'

  const endpoint = `${url.toString()}live/scan/${encodeURIComponent(domain)}`

  console.log('WebSocket endpoint:', endpoint)
  return endpoint
}

const startScan = (domain: string) => {
  if (!domain) {
    status.value = 'idle'
    result.value = null
    errorMessage.value = null
    lastUpdated.value = null
    return
  }

  const endpoint = buildEndpoint(domain)
  if (!endpoint) {
    errorMessage.value = 'Missing API_URL configuration. Set it in your environment variables.'
    status.value = 'error'
    return
  }

  // Reset
  result.value = null
  errorMessage.value = null
  lastUpdated.value = null
  status.value = 'connecting'
  mainStore.updateLoadingIndicator(true)

  // Close previous socket
  socket.value?.close()

  try {
    socket.value = new WebSocket(endpoint)

    socket.value.onopen = () => {
      status.value = 'connecting'
    }

    socket.value.onmessage = (event) => {
      try {
        result.value = JSON.parse(event.data)
      } catch {
        result.value = event.data
      }
      lastUpdated.value = Date.now()
      status.value = 'complete'
      mainStore.updateLoadingIndicator(false)
    }

    socket.value.onerror = () => {
      errorMessage.value = 'WebSocket error'
      status.value = 'error'
      mainStore.updateLoadingIndicator(false)
    }

    socket.value.onclose = () => {
      if (status.value !== 'complete') {
        status.value = 'error'
        errorMessage.value = 'Connection closed'
        mainStore.updateLoadingIndicator(false)
      }
    }
  } catch (err) {
    errorMessage.value = String(err)
    status.value = 'error'
    mainStore.updateLoadingIndicator(false)
  }
}

let stopWatching: (() => void) | null = null

onMounted(() => {
  stopWatching = watch(
    decodedDomain,
    (domain) => {
      startScan(domain)
    },
    { immediate: true }
  )
})

onBeforeUnmount(() => {
  stopWatching?.()
  socket.value?.close()
})

useHead(() => ({
  title: computed(() => `Live Network Scan: ${decodedDomain.value || 'Real-time Domain Analysis'} | NetScanner`),
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: computed(() => `Real-time network scanning and analysis for ${decodedDomain.value || 'domains'}. Live DNS lookup, SSL certificate analysis, port scanning, and infrastructure discovery with instant results.`)
    },
    {
      name: 'keywords',
      content: 'live network scan, real-time analysis, domain scanning, SSL analysis, port scanning, DNS lookup, network security, infrastructure discovery'
    },
    {
      property: 'og:title',
      content: computed(() => `Live Network Scan: ${decodedDomain.value || 'Real-time Analysis'} | NetScanner`)
    },
    {
      property: 'og:description',
      content: 'Real-time network scanning and analysis with instant DNS, SSL, and infrastructure discovery.'
    }
  ]
}))
</script>
