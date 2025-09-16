<template>
<div class="flex flex-wrap items-stretch w-full relative">
  <input type="text" class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border h-8 border-gray-200 rounded rounded-r-none px-2 relative" @keyup.enter="searchMatch" v-model="q" autofocus placeholder="Enter a Domain, IP, ASN or Hostname">
  <div class="flex -mr-px">
    <a v-on:click="searchMatch" class="flex items-center leading-normal bg-gray-300 rounded rounded-l-none border border-l-0 border-gray-200 px-2 whitespace-no-wrap text-gray-dark text-sm cursor-pointer">
      <svg class="text-gray-600 h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path class="heroicon-ui" d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" /></svg>
    </a>
  </div>
</div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useRouter } from '#app'
import { useMainStore } from '~/stores/main'

const router = useRouter()
const mainStore = useMainStore()
const { query } = storeToRefs(mainStore)

const q = computed({
  get: () => query.value,
  set: (value: string | null) => {
    mainStore.updateQuery(value)
  }
})

const trimWhitespaces = (value: string | string[] | null) => {
  let normalized = value

  if (Array.isArray(normalized)) {
    ;[normalized] = normalized
  }

  if (typeof normalized === 'string') {
    return normalized.trim()
  }

  return normalized
}

const isValidAsn = (value: unknown) => {
  if (typeof value !== 'string') {
    return false
  }

  return /^(AS)?[^\.0-9]{1,}/.test(value)
}

const isValidIpv6 = (value: unknown) => {
  if (typeof value !== 'string') {
    return false
  }

  return /([a-f0-9:]+:+)+[a-f0-9]+/i.test(value)
}

const isValidIpv4 = (value: unknown) => {
  if (typeof value !== 'string') {
    return false
  }

  if (!/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(value)) {
    return false
  }

  return value.split('.').filter((octet) => {
    const numeric = Number(octet)
    return !Number.isNaN(numeric) && numeric >= 0 && numeric <= 255
  }).length === 4
}

const isValidCidr = (value: unknown) => {
  if (typeof value !== 'string') {
    return false
  }

  return /(^(?!(port:|ipv4:|ipv6:|status:|banner:|asn:|ssl:|ocsp:|crl:|ca:|issuer:|unit:|service:|country:|state:|city:|loc:|org:|registry:|cidr:|server:|site:|cname:|mx:|ns:))\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\/\d{1,3})/.test(value)
}

const isValidDomain = (value: unknown) => {
  if (typeof value !== 'string') {
    return false
  }

  return (
    /([\w-.]{1,63}|[\w-.]{1,63}[^\x00-\x7F\w-]{1,63})\.?([\w\-.]{1,63}|[\w\-.]{1,63}[^\x00-\x7F\w-]{1,63})\.([a-z\-.]{2,})/i.test(value) ||
    /([\w\d-]{1,63}|[\d\w-]*[^\x00-\x7F\w-]{1,63})\.?([\w\d]{1,63}|[\d\w\-.]*[^\x00-\x7F\-.]{1,63})\.([a-z\.]{2,}|[\w]*[^\x00-\x7F\.]{2,})/i.test(value)
  )
}

const isValidMatch = (value: unknown) => {
  if (typeof value !== 'string') {
    return false
  }

  const patterns = [
    /(^(port:)+[0-9]{2,})/,
    /(^(status:)+[0-9]{3})/,
    /(^(org:)+[\w\/\.-]{2,})/i,
    /(^(asn:)+(AS)?[0-9]{1,})/i,
    /(^(registry:)+[a-z]{4,})/i,
    /(^(before:|after:)+[ \d:-]+)/i,
    /(^(ipv6:)+([a-f0-9:]+:+)+[a-f0-9]+)/i,
    /(^(country:|state:|city:)+\w{2})/i,
    /(^(ipv4:)+[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})/,
    /(^(cidr:)+[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\/[0-9]{1,3})/,
    /(^(issuer:|unit:|banner:|service:|server:|loc:)+(?! )[\w ;\(\):=,\/\.-]{2,}[^\s]$)/i,
    /(^(ssl:|site:|cname:|mx:|ns:)+([\w-.]{1,63}|[\w-.]{1,63}[^\x00-\x7F\w-]{1,63})\.?([\w\-.]{1,63}|[\w\-.]{1,63}[^\x00-\x7F\w-]{1,63})*\.([a-z\-.]{2,}))/i,
    /(^(ssl:|site:|cname:|mx:|ns:)+([\w\d-]{1,63}|[\d\w-]*[^\x00-\x7F\w-]{1,63})\.?([\w\d]{1,63}|[\d\w\-.]*[^\x00-\x7F\-.]{1,63})(\.([a-z\.]{2,}|[\w]*[^\x00-\x7F\.]{2,})))/i,
    /(^(ocsp:|crl:|ca:)+((http:\/\/)?[\w-.]{1,63}|[\w-.]{1,63}[^\x00-\x7F\w-]{1,63})\.?([\w\-.]{1,63}|[\w\-.]{1,63}[^\x00-\x7F\w-]{1,63})*\.([a-z\-.]{2,}))/i,
    /(^(ocsp:|crl:|ca:)+((http:\/\/)?[\w\d-]{1,63}|[\d\w-]*[^\x00-\x7F\w-]{1,63})\.?([\w\d]{1,63}|[\d\w\-.]*[^\x00-\x7F\-.]{1,63})(\.([a-z\.]{2,}|[\w]*[^\x00-\x7F\.]{2,})))/i
  ]

  return patterns.some((pattern) => pattern.test(value))
}

const isValidFilter = (value: unknown) => {
  if (typeof value !== 'string') {
    return false
  }

  return /^(port:|ipv4:|ipv6:|status:|banner:|asn:|ssl:|ocsp:|crl:|ca:|issuer:|unit:|service:|country:|state:|city:|loc:|org:|registry:|cidr:|server:|site:|cname:|mx:|ns:)/i.test(value)
}

const splitMatch = (value: string) => {
  const segments = value.split(':')

  if (segments.length >= 2) {
    const [prefix] = segments
    return [prefix, segments.splice(1).join(':')]
  }

  return null
}

const searchMatch = () => {
  let queryValue = q.value

  if (queryValue !== null && queryValue.length > 0) {
    queryValue = trimWhitespaces(queryValue)
  }

  if (isValidFilter(queryValue) && isValidMatch(queryValue)) {
    const parts = typeof queryValue === 'string' ? splitMatch(queryValue) : null

    if (parts && parts[0] && parts[1]) {
      const normalized = trimWhitespaces(parts[1]) ?? ''
      router.push(`/${parts[0]}/${encodeURIComponent(normalized)}`)
      return
    }
  } else if (!isValidFilter(queryValue) && !isValidIpv4(queryValue) && !isValidDomain(queryValue) && isValidAsn(queryValue)) {
    router.push(`/asn/${encodeURIComponent(queryValue as string)}`)
    return
  } else if (!isValidFilter(queryValue) && !isValidCidr(queryValue) && !isValidIpv4(queryValue) && isValidDomain(queryValue)) {
    router.push(`/site/${encodeURIComponent(queryValue as string)}`)
    return
  } else if (!isValidFilter(queryValue) && isValidIpv4(queryValue)) {
    router.push(`/ipv4/${encodeURIComponent(queryValue as string)}`)
    return
  } else if (!isValidFilter(queryValue) && isValidIpv6(queryValue)) {
    router.push(`/ipv6/${encodeURIComponent(queryValue as string)}`)
    return
  } else if (!isValidFilter(queryValue) && isValidCidr(queryValue)) {
    router.push(`/cidr/${encodeURIComponent(queryValue as string)}`)
    return
  }

  router.push(`/search/${encodeURIComponent((queryValue as string | null) || '')}`)
}
</script>
