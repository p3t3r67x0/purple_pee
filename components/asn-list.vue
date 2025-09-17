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
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useMainStore } from '~/stores/main'

defineProps<{ results: Array<Record<string, any>> }>()

const mainStore = useMainStore()
const { loading: loadingIndicator } = storeToRefs(mainStore)

const generatePath = (image?: string) => `/svg/${(image ?? 'unknown').toLowerCase()}.svg`
const generateLink = (query: string | number) => `/asn/AS${query}`
</script>
