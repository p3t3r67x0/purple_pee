<template>
<div class="min-h-screen flex flex-col">
  <div class="flex-grow">
    <navheader></navheader>
    <modal v-if="modalVisible"></modal>
    <dns v-if="!loadingIndicator" v-bind:results="results"></dns>
  </div>
  <navfooter></navfooter>
</div>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue'
import Dns from '@/components/dns.vue'
import Modal from '@/components/modal.vue'
import Footer from '@/components/navfooter.vue'
import Navbar from '@/components/navheader.vue'
import { useRouter } from '#app'
import { useMainStore } from '~/stores/main'
import { storeToRefs } from 'pinia'
import { useSlugParam } from '~/composables/useSlugParam'

const slug = useSlugParam()
const router = useRouter()
const mainStore = useMainStore()
const { modalVisible, loading: loadingIndicator, results } = storeToRefs(mainStore)

const decodedSlug = computed(() => {
  const value = slug.value || ''
  try {
    return decodeURIComponent(value)
  } catch {
    return value
  }
})

useHead(() => ({
  title: `Search Results: ${decodedSlug.value} | NetScanner Network Intelligence Search`,
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: `Comprehensive network intelligence search results for "${decodedSlug.value}". Discover domains, IP addresses, SSL certificates, DNS records, ASN data, and network infrastructure related to your search query.`
    },
    {
      name: 'keywords',
      content: 'network search, domain search, IP lookup, SSL search, DNS search, ASN search, infrastructure search, cybersecurity intelligence'
    },
    {
      property: 'og:title',
      content: `Search Results: ${decodedSlug.value} | NetScanner`
    },
    {
      property: 'og:description',
      content: 'Advanced network intelligence search with comprehensive results for domains, IPs, certificates, and infrastructure data.'
    }
  ]
}))

const trimWhitespaces = (value: string | null) => (value ? value.trim() : value)

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

const isValidAsn = (value: unknown) => typeof value === 'string' && /^(AS)?[^\.0-9]{1,}/.test(value)
const isValidIpv4 = (value: unknown) => typeof value === 'string' && /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/.test(value)
const isValidIpv6 = (value: unknown) => typeof value === 'string' && /([a-f0-9:]+:+)+[a-f0-9]+/i.test(value)
const isValidDomain = (value: unknown) => {
  if (typeof value !== 'string') {
    return false
  }

  return (
    /([\w-.]{1,63}|[\w-.]{1,63}[^\x00-\x7F\w-]{1,63})\.?([\w\-.]{1,63}|[\w\-.]{1,63}[^\x00-\x7F\w-]{1,63})\.([a-z\-.]{2,})/i.test(value) ||
    /([\w\d-]{1,63}|[\d\w-]*[^\x00-\x7F\w-]{1,63})\.?([\w\d]{1,63}|[\d\w\-.]*[^\x00-\x7F\-.]{1,63})\.([a-z\.]{2,}|[\w]*[^\x00-\x7F\.]{2,})/i.test(value)
  )
}

const isValidCidr = (value: unknown) =>
  typeof value === 'string' && /(^(?!(port:|ipv4:|ipv6:|status:|banner:|asn:|ssl:|ocsp:|crl:|ca:|issuer:|unit:|service:|country:|state:|city:|loc:|org:|registry:|cidr:|server:|site:|cname:|mx:|ns:))\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\/\d{1,3})/.test(value)

const splitMatch = (value: string) => {
  const parts = value.split(':')

  if (parts.length >= 2) {
    const [prefix] = parts
    return [prefix, parts.slice(1).join(':')]
  }

  return null
}

const navigateToMatch = (value: string | null) => {
  if (value === null) {
    return
  }

  const trimmed = trimWhitespaces(value)

  if (!trimmed) {
    router.push('/search/')
    return
  }

  if (isValidFilter(trimmed) && isValidMatch(trimmed)) {
    const parts = splitMatch(trimmed)

    if (parts && parts[0] && parts[1]) {
      const normalized = trimWhitespaces(parts[1]) ?? ''
      router.push(`/${parts[0]}/${encodeURIComponent(normalized)}`)
      return
    }
  } else if (!isValidFilter(trimmed) && !isValidIpv4(trimmed) && !isValidDomain(trimmed) && isValidAsn(trimmed)) {
    router.push(`/asn/${encodeURIComponent(trimmed)}`)
    return
  } else if (!isValidFilter(trimmed) && !isValidCidr(trimmed) && !isValidIpv4(trimmed) && isValidDomain(trimmed)) {
    router.push(`/site/${encodeURIComponent(trimmed)}`)
    return
  } else if (!isValidFilter(trimmed) && isValidIpv4(trimmed)) {
    router.push(`/ipv4/${encodeURIComponent(trimmed)}`)
    return
  } else if (!isValidFilter(trimmed) && isValidIpv6(trimmed)) {
    router.push(`/ipv6/${encodeURIComponent(trimmed)}`)
    return
  } else if (!isValidFilter(trimmed) && isValidCidr(trimmed)) {
    router.push(`/cidr/${encodeURIComponent(trimmed)}`)
    return
  }

  router.push(`/search/${encodeURIComponent(trimmed || '')}`)
}

watch(
  decodedSlug,
  (value) => {
    mainStore.updateResultList([])
    navigateToMatch(value)
  },
  { immediate: true }
)
</script>
