<template>
  <div id="xhr" v-if="!loadingIndicator" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 class="mb-4 text-2xl font-semibold text-gray-900 sm:text-3xl">
      <span class="font-light">Latest added </span><strong>AS numbers</strong>
    </h1>

    <ul class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <li v-for="result in results" :key="result.whois.asn" class="flex">
        <div class="flex w-full items-center gap-3 rounded-lg border border-purple-100 bg-white p-4 shadow-sm transition duration-150 ease-out hover:-translate-y-0.5 hover:shadow-md">
          <img
            v-if="result.whois.asn_country_code"
            :src="generatePath(result.whois.asn_country_code)"
            class="h-5 w-8 rounded-sm object-cover"
            :alt="`${result.whois.asn_country_code} flag`"
          />
          <nuxt-link
            :to="generateLink(result.whois.asn)"
            class="font-mono text-sm font-semibold text-blue-600 transition hover:text-blue-700 sm:text-base"
          >
            AS {{ result.whois.asn }}
          </nuxt-link>
        </div>
      </li>
    </ul>
    <div class="flex justify-center my-6 space-x-4">
      <button
        @click="$emit('prevPage')"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed"
        :disabled="!hasPrevious"
      >
        Previous
      </button>
      <button
        @click="$emit('nextPage')"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed"
        :disabled="!hasNext"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useMainStore } from '~/stores/main'

withDefaults(
  defineProps<{ results: Array<Record<string, any>>; currentPage?: number; hasNext?: boolean; hasPrevious?: boolean }>(),
  {
    results: () => [],
    currentPage: 1,
    hasNext: false,
    hasPrevious: false
  }
)

const $emit = defineEmits(['nextPage', 'prevPage'])

const mainStore = useMainStore()
const { loading: loadingIndicator } = storeToRefs(mainStore)

const generatePath = (image?: string) => `/svg/${(image ?? 'unknown').toLowerCase()}.svg`
const generateLink = (query: string | number) => `/asn/AS${query}`
</script>
