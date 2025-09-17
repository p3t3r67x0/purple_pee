<template>
  <div class="relative w-full">
    <div class="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-gradient-to-r from-cosmic-flare/30 via-cosmic-aurora/25 to-sky-500/20 opacity-70 blur-3xl transition duration-500"></div>

    <div class="relative flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 shadow-glass backdrop-blur-2xl transition duration-300 focus-within:border-cosmic-aurora/70 focus-within:shadow-glow">
      <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cosmic-aurora/80 via-purple-500/70 to-cosmic-flare/80 text-white shadow-glow">
        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-4.35-4.35m1.1-4.3a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z" />
        </svg>
      </div>

      <div class="flex flex-1 flex-col">
        <label for="global-search" class="sr-only">Search across Purplepee</label>
        <input
          id="global-search"
          type="text"
          class="w-full border-none bg-transparent text-base font-medium text-white placeholder-white/40 outline-none focus:ring-0"
          @keyup.enter="searchMatch"
          v-model="q"
          autofocus
          placeholder="Search domains, IPs, ASNs, datasets..."
        />
        <div class="mt-2 hidden items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/45 sm:flex">
          <span class="rounded-full border border-white/15 bg-white/10 px-2 py-0.5">Domain</span>
          <span class="rounded-full border border-white/15 bg-white/10 px-2 py-0.5">ASN</span>
          <span class="rounded-full border border-white/15 bg-white/10 px-2 py-0.5">IPv4</span>
          <span class="rounded-full border border-white/15 bg-white/10 px-2 py-0.5">IPv6</span>
          <span class="rounded-full border border-white/15 bg-white/10 px-2 py-0.5">CIDR</span>
        </div>
      </div>

      <button
        type="button"
        @click="searchMatch"
        class="flex items-center gap-2 rounded-2xl border border-white/10 bg-gradient-to-r from-cosmic-flare via-cosmic-aurora to-indigo-400 px-4 py-2 text-sm font-semibold text-white shadow-glow transition duration-300 hover:-translate-y-0.5 hover:shadow-glow focus:outline-none focus:ring-2 focus:ring-cosmic-aurora/70"
      >
        <span>Explore</span>
        <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
        </svg>
      </button>
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
