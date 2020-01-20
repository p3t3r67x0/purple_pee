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

<script>
export default {
  computed: {
    q: {
      get() {
        return this.$store.state.query
      },
      set(query) {
        this.$store.commit('updateQuery', query)
      },
    }
  },
  methods: {
    trimWhitespaces(q) {
      let r = q

      if (Array.isArray(q)) {
        r = q[0]
      }

      if (r !== null) {
        return r.trim()
      } else {
        return r
      }
    },
    isValidAsn(asn) {
      if (typeof(asn) !== 'string') {
        return false
      }

      if (!asn.match(/^(AS)?[^\.0-9]{1,}/)) {
        return false
      }

      return true
    },
    isValidIpv6(ip) {
      if (typeof(ip) !== 'string') {
        return false
      }

      if (!ip.match(/([a-f0-9:]+:+)+[a-f0-9]+/i)) {
        return false
      }

      return true
    },
    isValidIpv4(ip) {
      if (typeof(ip) !== 'string') {
        return false
      }

      if (!ip.match(/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/)) {
        return false
      }

      return ip.split('.').filter(octect => octect >= 0 && octect <= 255).length === 4
    },
    isValidCidr(cidr) {
      if (typeof(cidr) !== 'string') {
        return false
      }

      if (!cidr.match(/(^(?!(port:|ipv4:|ipv6:|status:|banner:|asn:|ssl:|ocsp:|crl:|ca:|issuer:|unit:|service:|country:|state:|city:|loc:|org:|registry:|cidr:|server:|site:|cname:|mx:|ns:))\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\/\d{1,3})/)) {
        return false
      }

      return true
    },
    isValidDomain(domain) {
      if (typeof(domain) !== 'string') {
        return false
      }

      if (!domain.match(/([\w-.]{1,63}|[\w-.]{1,63}[^\x00-\x7F\w-]{1,63})\.?([\w\-.]{1,63}|[\w\-.]{1,63}[^\x00-\x7F\w-]{1,63})\.([a-z\-.]{2,})/i) &&
        !domain.match(/([\w\d-]{1,63}|[\d\w-]*[^\x00-\x7F\w-]{1,63})\.?([\w\d]{1,63}|[\d\w\-.]*[^\x00-\x7F\-.]{1,63})\.([a-z\.]{2,}|[\w]*[^\x00-\x7F\.]{2,})/i)) {
        return false
      }

      return true
    },
    isValidMatch(match) {
      if (typeof(match) !== 'string') {
        return false
      }

      if (!match.match(/(^(port:)+[0-9]{2,})/) &&
        !match.match(/(^(status:)+[0-9]{3})/) &&
        !match.match(/(^(org:)+[\w\/\.-]{2,})/i) &&
        !match.match(/(^(asn:)+(AS)?[0-9]{1,})/i) &&
        !match.match(/(^(registry:)+[a-z]{4,})/i) &&
        !match.match(/(^(before:|after:)+[ \d:-]+)/i) &&
        !match.match(/(^(ipv6:)+([a-f0-9:]+:+)+[a-f0-9]+)/i) &&
        !match.match(/(^(country:|state:|city:)+\w{2})/i) &&
        !match.match(/(^(ipv4:)+[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})/) &&
        !match.match(/(^(cidr:)+[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\/[0-9]{1,3})/) &&
        !match.match(/(^(issuer:|unit:|banner:|service:|server:|loc:)+(?! )[\w ;\(\):=,\/\.-]{2,}[^\s]$)/i) &&
        !match.match(/(^(ssl:|site:|cname:|mx:|ns:)+([\w-.]{1,63}|[\w-.]{1,63}[^\x00-\x7F\w-]{1,63})\.?([\w\-.]{1,63}|[\w\-.]{1,63}[^\x00-\x7F\w-]{1,63})*\.([a-z\-.]{2,}))/i) &&
        !match.match(/(^(ssl:|site:|cname:|mx:|ns:)+([\w\d-]{1,63}|[\d\w-]*[^\x00-\x7F\w-]{1,63})\.?([\w\d]{1,63}|[\d\w\-.]*[^\x00-\x7F\-.]{1,63})(\.([a-z\.]{2,}|[\w]*[^\x00-\x7F\.]{2,})))/i) &&
        !match.match(/(^(ocsp:|crl:|ca:)+((http:\/\/)?[\w-.]{1,63}|[\w-.]{1,63}[^\x00-\x7F\w-]{1,63})\.?([\w\-.]{1,63}|[\w\-.]{1,63}[^\x00-\x7F\w-]{1,63})*\.([a-z\-.]{2,}))/i) &&
        !match.match(/(^(ocsp:|crl:|ca:)+((http:\/\/)?[\w\d-]{1,63}|[\d\w-]*[^\x00-\x7F\w-]{1,63})\.?([\w\d]{1,63}|[\d\w\-.]*[^\x00-\x7F\-.]{1,63})(\.([a-z\.]{2,}|[\w]*[^\x00-\x7F\.]{2,})))/i)) {
        return false
      }

      return true
    },
    isValidFilter(query) {
      if (typeof(query) !== 'string') {
        return false
      }

      if (!query.match(/^(port:|ipv4:|ipv6:|status:|banner:|asn:|ssl:|ocsp:|crl:|ca:|issuer:|unit:|service:|country:|state:|city:|loc:|org:|registry:|cidr:|server:|site:|cname:|mx:|ns:)/i)) {
        return false
      }

      return true
    },
    splitMatch(query) {
      const splitted = query.split(':')

      if (splitted.length >= 2) {
        return [splitted[0], splitted.splice(1).join(':')]
      }
    },
    searchMatch() {
      let query = this.q

      if (query !== null && query.length > 0) {
        query = this.trimWhitespaces(query)
      }

      if (this.isValidFilter(query) && this.isValidMatch(query)) {
        const q = this.splitMatch(query)

        if (q[0] && q[1]) {
          this.$router.push({
            name: q[0] + '-all',
            params: {
              pathMatch: encodeURIComponent(q[1])
            }
          })
        }
      } else if (!this.isValidFilter(query) && !this.isValidIpv4(query) && !this.isValidDomain(query) && this.isValidAsn(query)) {
        this.$router.push({
          name: 'asn-all',
          params: {
            pathMatch: encodeURIComponent(query)
          }
        })
      } else if (!this.isValidFilter(query) && !this.isValidCidr(query) && !this.isValidIpv4(query) && this.isValidDomain(query)) {
        this.$router.push({
          name: 'site-all',
          params: {
            pathMatch: encodeURIComponent(query)
          }
        })
      } else if (!this.isValidFilter(query) && this.isValidIpv4(query)) {
        this.$router.push({
          name: 'ipv4-all',
          params: {
            pathMatch: encodeURIComponent(query)
          }
        })
      } else if (!this.isValidFilter(query) && this.isValidIpv6(query)) {
        this.$router.push({
          name: 'ipv6-all',
          params: {
            pathMatch: encodeURIComponent(query)
          }
        })
      } else if (!this.isValidFilter(query) && this.isValidCidr(query)) {
        this.$router.push({
          name: 'cidr-all',
          params: {
            pathMatch: encodeURIComponent(query)
          }
        })
      } else {
        this.$router.push({
          name: 'search-all',
          params: {
            pathMatch: encodeURIComponent(query)
          }
        })
      }
    }
  }
}
</script>
