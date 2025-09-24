<template>
  <div class="max-w-5xl mx-auto space-y-6 px-4 sm:px-6 lg:px-8">
    <article
      v-for="result in results"
      :key="`${result.asn}-${result.ip ?? ''}`"
      class="space-y-5 rounded-2xl border border-purple-100 bg-white p-5 shadow-sm sm:p-8"
    >
      <header v-if="result.ip" class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p class="break-all text-2xl font-semibold text-purple-700 sm:text-3xl">{{ result.ip }}</p>
        <a
          :href="generateUrl(result.ip)"
          target="_blank"
          rel="noopener"
          class="inline-flex items-center gap-2 text-sm font-medium text-purple-700 transition hover:text-purple-900"
        >
          Open host
          <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M19 6.41 8.7 16.71a1 1 0 0 1-1.4-1.42L17.58 5H14a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V6.41Z" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M17 13v5H5V6h5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </a>
      </header>

      <dl class="grid gap-4 sm:grid-cols-2">
        <div v-if="result.asn" class="space-y-1">
          <dt class="text-sm font-semibold text-gray-600">AS number</dt>
          <dd class="text-base font-medium text-gray-800 sm:text-lg">{{ result.asn }}</dd>
        </div>
        <div v-if="result.name" class="space-y-1 sm:col-span-2">
          <dt class="text-sm font-semibold text-gray-600">AS name</dt>
          <dd class="break-all text-base font-medium text-gray-800 sm:text-lg">{{ result.name }}</dd>
        </div>
        <div v-if="result.host" class="space-y-1 sm:col-span-2">
          <dt class="text-sm font-semibold text-gray-600">Hostname</dt>
          <dd class="break-all text-base font-medium text-gray-800 sm:text-lg">{{ result.host }}</dd>
        </div>
        <div v-if="result.cidr" class="space-y-1 sm:col-span-2">
          <dt class="text-sm font-semibold text-gray-600">Prefixes</dt>
          <dd class="text-base font-medium text-gray-800 sm:text-lg">{{ result.cidr.join(', ') }}</dd>
        </div>
      </dl>

      <section v-if="result.whois" class="space-y-3">
        <h3 class="text-base font-semibold text-gray-900 sm:text-lg">ASN whois</h3>
        <ul class="space-y-2 rounded-lg bg-gray-50 p-4 font-mono text-sm text-gray-800">
          <li v-for="(value, key) in result.whois" :key="key" class="flex flex-wrap items-center gap-2">
            <span class="font-semibold text-gray-700">{{ key }}:</span>
            <span class="font-light text-gray-700">{{ value }}</span>
            <img
              v-if="key === 'asn_country_code'"
              :src="generatePath(value as string)"
              class="h-4 w-8 rounded-sm"
              :alt="`${value} flag`"
            />
          </li>
        </ul>
      </section>

      <section v-if="result.ports" class="space-y-3">
        <h3 class="text-base font-semibold text-gray-900 sm:text-lg">Ports</h3>
        <ul class="grid gap-2 sm:grid-cols-2">
          <li v-for="port in result.ports" :key="`${port.port}-${port.proto}`" class="rounded-lg bg-gray-50 px-3 py-2 font-mono text-sm text-gray-800">
            <strong class="font-semibold text-gray-900">{{ port.port }}/{{ port.proto }}</strong>
            <span class="ml-2 text-gray-600">{{ port.status }}</span>
          </li>
        </ul>
      </section>
    </article>
  </div>
</template>

<script setup lang="ts">
defineProps<{ results: Array<Record<string, any>> }>()

const generatePath = (image?: string) => `/svg/${(image ?? 'unknown').toLowerCase()}.svg`
const generateUrl = (domain: string) => `http://${domain}`
</script>
