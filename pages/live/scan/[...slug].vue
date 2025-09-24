<template>
  <div class="min-h-screen flex flex-col">
    <div class="flex-grow">
      <Navbar />
      <Modal v-if="modalVisible"></Modal>
      <section class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div class="glass-panel rounded-3xl border border-white/10 bg-black/80 shadow-glass">
          <div class="flex items-center space-x-2 border-b border-white/10 bg-black/40 px-5 py-3 rounded-t-3xl">
            <span class="h-3 w-3 rounded-full bg-red-400/80"></span>
            <span class="h-3 w-3 rounded-full bg-amber-300/80"></span>
            <span class="h-3 w-3 rounded-full bg-emerald-400/80"></span>
            <span class="ml-auto font-mono text-xs uppercase tracking-widest text-white/50">live scan terminal</span>
          </div>
          <div class="p-5 sm:p-8">
            <div class="space-y-4 font-mono text-sm text-green-200">
              <p>
                <span class="text-emerald-300">netscanner@live</span>:~$ live-scan
                <span v-if="decodedDomain" class="ml-2 text-white/80">{{ decodedDomain }}</span>
                <span v-else class="ml-2">
                  <input ref="domainInput" v-model="inputDomain" @keyup.enter="startScanWithInput"
                    @blur="handleInputBlur"
                    class="bg-transparent text-white/80 border-none outline-none placeholder-white/50 caret-emerald-300 min-w-[200px]"
                    placeholder="waiting-for-target" type="text" autocomplete="off" spellcheck="false" />
                </span>
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
                  <div class="space-y-3">
                    <div class="flex items-center justify-between gap-3">
                      <p class="text-slate-400"><span>payload</span>:</p>
                      <button
                        type="button"
                        class="inline-flex items-center gap-2 rounded-lg border border-emerald-400/40 px-3 py-1.5 text-xs font-medium text-emerald-200 transition hover:border-emerald-300 hover:text-emerald-100"
                        @click="copyPayload"
                      >
                        <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h8a2 2 0 012 2v9a2 2 0 01-2 2H8a2 2 0 01-2-2V9a2 2 0 012-2zm12-3H8a2 2 0 00-2 2v1m12-3a2 2 0 012 2v9m0-11h-2a2 2 0 00-2 2v1" />
                        </svg>
                        <span>{{ copyLabel }}</span>
                      </button>
                    </div>
                    <pre
                      class="rounded-xl border border-emerald-400/20 bg-black/60 p-4 text-xs text-emerald-200 whitespace-pre-wrap">{{ formattedResult }}</pre>
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
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import Modal from '@/components/Modal.vue'
import Footer from '@/components/NavFooter.vue'
import Navbar from '@/components/NavHeader.vue'
import { useSlugParam } from '~/composables/useSlugParam'
import { useMainStore } from '~/stores/main'
import { storeToRefs } from 'pinia'
import { useNuxtApp, useHead, navigateTo } from '#app'

const slug = useSlugParam()
const { $env } = useNuxtApp()
const mainStore = useMainStore()
const { modalVisible, loading: loadingIndicator } = storeToRefs(mainStore)

const status = ref<'idle' | 'connecting' | 'complete' | 'error'>('idle')
const result = ref<unknown>(null)
const errorMessage = ref<string | null>(null)
const lastUpdated = ref<number | null>(null)
const socket = ref<WebSocket | null>(null)
const inputDomain = ref<string>('')
const domainInput = ref<HTMLInputElement | null>(null)
const copyLabel = ref('Copy payload')

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

let copyTimeout: ReturnType<typeof setTimeout> | null = null

const copyPayload = async () => {
  const text = formattedResult.value
  if (!text) {
    copyLabel.value = 'Nothing to copy'
    resetCopyLabel()
    return
  }

  try {
    await navigator.clipboard.writeText(text)
    copyLabel.value = 'Copied!'
  } catch {
    copyLabel.value = 'Copy failed'
  }

  resetCopyLabel()
}

const resetCopyLabel = () => {
  if (copyTimeout) {
    clearTimeout(copyTimeout)
  }
  copyTimeout = setTimeout(() => {
    copyLabel.value = 'Copy payload'
  }, 2000)
}

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

const startScanWithInput = () => {
  const domain = inputDomain.value.trim()
  if (domain) {
    // Navigate to the scan page with the domain
    navigateTo(`/live/scan/${encodeURIComponent(domain)}`)
  }
}

const handleInputBlur = () => {
  // Keep focus if no domain is provided
  if (!inputDomain.value.trim() && !decodedDomain.value) {
    setTimeout(() => {
      domainInput.value?.focus()
    }, 100)
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

  // Auto-focus input if no domain is provided
  if (!decodedDomain.value) {
    setTimeout(() => {
      domainInput.value?.focus()
    }, 100)
  }
})

onBeforeUnmount(() => {
  stopWatching?.()
  socket.value?.close()
  if (copyTimeout) {
    clearTimeout(copyTimeout)
  }
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
