<template>
  <div id="xhr" v-if="!loadingIndicator" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
    <div class="glass-panel rounded-3xl border border-white/10 px-5 py-6 shadow-glass sm:px-8">
      <h1 class="text-2xl font-light tracking-wide text-white/90">
        <span v-if="totalCount > 0" class="block">
          Found <strong class="font-bold text-white">{{ totalCount }}</strong> ASN {{ totalCount === 1 ? 'result' : 'results' }}
        </span>
        <span v-else class="block text-white/70">No AS numbers found</span>
        <span class="mt-2 block pt-2 text-sm font-normal text-white/60 sm:text-base">
          Showing {{ visibleCount }} {{ visibleCount === 1 ? 'result' : 'results' }} · Page {{ currentPage }}
        </span>
      </h1>

      <ul class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <li v-for="result in results" :key="result.whois.asn" class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img
              v-if="result.whois.asn_country_code"
              :src="generatePath(result.whois.asn_country_code)"
              class="h-5 w-9 rounded-md border border-white/20 object-cover"
              :alt="`${result.whois.asn_country_code} flag`"
            />
            <nuxt-link
              :to="generateLink(result.whois.asn)"
              class="font-mono text-sm font-semibold text-white transition hover:text-cosmic-aurora sm:text-base"
            >
              AS {{ result.whois.asn }}
            </nuxt-link>
          </div>
        </li>
      </ul>
    </div>
    <div class="mt-8 flex justify-center space-x-4">
      <button
        @click="$emit('prevPage')"
        class="rounded-full border border-white/20 bg-white/10 px-6 py-2 text-sm font-semibold uppercase tracking-wider text-white transition hover:border-cosmic-aurora/60 hover:text-cosmic-aurora disabled:cursor-not-allowed disabled:border-white/5 disabled:text-white/30"
        :disabled="!hasPrevious"
      >
        Previous
      </button>
      <button
        @click="$emit('nextPage')"
        class="rounded-full border border-white/20 bg-gradient-to-r from-cosmic-flare/60 to-cosmic-aurora/50 px-6 py-2 text-sm font-semibold uppercase tracking-wider text-white transition hover:shadow-glow disabled:cursor-not-allowed disabled:opacity-50"
        :disabled="!hasNext"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useMainStore } from '~/stores/main'

const props = withDefaults(
  defineProps<{
    results: Array<Record<string, any>>
    currentPage?: number
    hasNext?: boolean
    hasPrevious?: boolean
    total?: number
  }>(),
  {
    results: () => [],
    currentPage: 1,
    hasNext: false,
    hasPrevious: false,
    total: 0
  }
)

const $emit = defineEmits(['nextPage', 'prevPage'])

const mainStore = useMainStore()
const { loading: loadingIndicator } = storeToRefs(mainStore)

const visibleCount = computed(() => props.results.length)
const totalCount = computed(() => (props.total && props.total > 0 ? props.total : props.results.length))

const generatePath = (image?: string) => `/svg/${(image ?? 'unknown').toLowerCase()}.svg`
const generateLink = (query: string | number) => `/asn/AS${query}`
</script>
