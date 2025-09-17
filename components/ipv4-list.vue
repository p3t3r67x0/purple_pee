<template>
<div id="xhr" v-if="!loadingIndicator" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
  <div class="glass-panel rounded-3xl border border-white/10 px-5 py-6 shadow-glass sm:px-8">
    <h1 class="text-2xl font-light tracking-wide text-white/90">
      <span v-if="total > 0" class="block">
        Found <strong class="font-bold text-white">{{ total }}</strong> IPv4 {{ total === 1 ? 'address' : 'addresses' }}
      </span>
      <span v-else class="block text-white/70">No IPv4 addresses found</span>
      <span class="mt-2 block pt-2 text-sm font-normal text-white/60 sm:text-base">
        Showing {{ visibleCount }} {{ visibleCount === 1 ? 'result' : 'results' }} · Page {{ currentPage }}
      </span>
    </h1>

    <ul class="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <li v-for="result in results" :key="result.a_record" class="group">
        <div class="rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:border-cosmic-aurora/60 hover:shadow-glow">
          <span>
            <img v-if="result.country_code" :src="generatePath(result.country_code)" class="mr-2 inline h-4 w-9 rounded-sm border border-white/20 object-cover" />
          </span>
          <nuxt-link :to="generateLink(result.a_record)" class="font-mono text-base text-white transition hover:text-cosmic-aurora">
            {{ result.a_record }}
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

const generatePath = (image?: string) => `/svg/${(image ?? 'unknown').toLowerCase()}.svg`
const generateLink = (ip: string) => `ipv4/${ip}`
</script>
