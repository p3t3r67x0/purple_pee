<template>
<div id="xhr" v-if="!loadingIndicator" class="container mx-auto">
  <h1 class="text-xl font-thin mx-3 md:mx-0 mb-3">Explore current <strong class="font-bold">trends</strong></h1>

  <ul class="flex content-start flex-wrap bg-gray-200 mb-6 mx-2 md:mx-0 p-1">
    <li v-for="result in results" class="w-full sm:w-1/2 md:w-1/3 p-1">
      <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
        <p class="font-bold font-mono">{{ generateTitle(generateLink(result.trend)) }}</p>
        <span><img v-if="isCountry(generateLink(result.trend))" v-bind:src="generatePath(generateName(result.trend))" class="inline w-9 h-4 mr-1"></span>
        <nuxt-link v-bind:to="generateLink(result.trend)" class="break-words font-mono font-light text-base text-blue-500 hover:text-blue-700">{{ generateName(result.trend) }}</nuxt-link>
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

const isCountry = (path: string) => {
  const segments = path.split('/').filter(Boolean)
  return segments[0] === 'country'
}

const generatePath = (image?: string) => `/svg/${(image ?? 'unknown').toLowerCase()}.svg`

const generateName = (path: string) => {
  const segments = path.split(':')

  if (segments.length >= 2) {
    return segments.splice(1).join(':')
  }

  return ''
}

const generateTitle = (path: string) => {
  const [prefix] = path.split('/').filter(Boolean)

  switch (prefix) {
    case 'mx':
      return 'MX record'
    case 'ipv4':
      return 'A record'
    case 'ipv6':
      return 'AAAA record'
    case 'cname':
      return 'CNAME record'
    case 'soa':
      return 'SOA record'
    case 'ns':
      return 'NS record'
    case 'cidr':
      return 'CIDR'
    case 'dns':
      return 'DNS'
    case 'asn':
      return 'ASN'
    case 'org':
      return 'ISP'
    case 'registry':
      return 'ASN registry'
    case 'country':
      return 'GEO country'
    case 'state':
      return 'GEO state'
    case 'city':
      return 'GEO city'
    case 'loc':
      return 'GEO location'
    case 'status':
      return 'HTTP status'
    case 'port':
      return 'TCP port'
    case 'server':
      return 'Server'
    case 'site':
      return 'Domain'
    case 'ssl':
      return 'SSL certificate'
    case 'issuer':
      return 'SSL issuer'
    case 'ocsp':
      return 'SSL ocsp'
    case 'crl':
      return 'SSL crl'
    case 'ca':
      return 'SSL ca'
    case 'unit':
      return 'SSL issuer unit'
    case 'before':
      return 'SSL valid not_before'
    case 'after':
      return 'SSL valid not_after'
    case 'banner':
      return 'SSH banner'
    case 'service':
      return 'Service'
    default:
      return ''
  }
}

const generateLink = (path: string) => {
  const segments = path.split(':')

  if (segments.length >= 2) {
    const query = segments.splice(1).join(':')
    const match = segments.splice(0)[0]

    if (match.length >= 2) {
      const prefix = match.split('/')[2]
      return `/${prefix}/${query}`
    }
  }

  return '#'
}
</script>
