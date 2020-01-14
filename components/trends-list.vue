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

<script>
export default {
  props: {
    results: Array
  },
  computed: {
    loadingIndicator() {
      return this.$store.state.loading
    }
  },
  methods: {
    isCountry(path) {
      const r = path.split('/').filter(Boolean)

      if (r[0] === 'country') {
        return true
      }
    },
    generatePath(image) {
      return require('~/assets/svg/' + image.toLowerCase() + '.svg')
    },
    generateName(path) {
      const r = path.split(':')

      if (r.length >= 2) {
        return r.splice(1).join(':')
      }
    },
    generateTitle(path) {
      const r = path.split('/').filter(Boolean)

      if (r[0] === 'mx') {
        return 'MX record'
      } else if (r[0] === 'ipv4') {
        return 'A record'
      } else if (r[0] === 'ipv6') {
        return 'AAAA record'
      } else if (r[0] === 'cname') {
        return 'CNAME record'
      } else if (r[0] === 'soa') {
        return 'SOA record'
      } else if (r[0] === 'ns') {
        return 'NS record'
      } else if (r[0] === 'cidr') {
        return 'CIDR'
      } else if (r[0] === 'dns') {
        return 'DNS'
      } else if (r[0] === 'asn') {
        return 'ASN'
      } else if (r[0] === 'org') {
        return 'ISP'
      } else if (r[0] === 'registry') {
        return 'ASN registry'
      } else if (r[0] === 'country') {
        return 'GEO country'
      } else if (r[0] === 'state') {
        return 'GEO state'
      } else if (r[0] === 'city') {
        return 'GEO city'
      } else if (r[0] === 'loc') {
        return 'GEO location'
      } else if (r[0] === 'status') {
        return 'HTTP status'
      } else if (r[0] === 'port') {
        return 'TCP port'
      } else if (r[0] === 'server') {
        return 'Server'
      } else if (r[0] === 'site') {
        return 'Domain'
      } else if (r[0] === 'ssl') {
        return 'SSL certificate'
      } else if (r[0] === 'issuer') {
        return 'SSL issuer'
      } else if (r[0] === 'ocsp') {
        return 'SSL ocsp'
      } else if (r[0] === 'crl') {
        return 'SSL crl'
      } else if (r[0] === 'ca') {
        return 'SSL ca'
      } else if (r[0] === 'unit') {
        return 'SSL issuer unit'
      } else if (r[0] === 'before') {
        return 'SSL valid not_before'
      } else if (r[0] === 'after') {
        return 'SSL valid not_after'
      } else if (r[0] === 'banner') {
        return 'SSH banner'
      } else if (r[0] === 'service') {
        return 'Service'
      }
    },
    generateLink(path) {
      const r = path.split(':')

      if (r.length >= 2) {
        const query = r.splice(1).join(':')
        const match = r.splice(0)[0]

        if (match.length >= 2) {
          const prefix = match.split('/')[2]
          return '/' + prefix + '/' + query
        }
      }
    }
  }
}
</script>
