<template>
<div class="flex flex-wrap items-stretch w-full relative">
  <input type="text" class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border h-8 border-gray-200 rounded rounded-r-none px-2 relative" @keyup.enter="searchMatch" v-model="q" autofocus placeholder="Enter a Domain, IP, ASN or Hostname">
  <div class="flex -mr-px">
    <a v-on:click="searchMatch" class="flex items-center leading-normal bg-gray-300 rounded rounded-l-none border border-l-0 border-gray-200 px-2 whitespace-no-wrap text-gray-dark text-sm cursor-pointer">
      <svg class="text-gray-600 h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path class="heroicon-ui" d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/></svg>
    </a>
  </div>
</div>
</template>

<script>
function isValidIpv4(ip) {
  if (typeof(ip) !== 'string') {
    return false
  }

  if (!ip.match(/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/)) {
    return false
  }

  return ip.split('.').filter(octect => octect >= 0 && octect <= 255).length === 4
}

function isValidCidr(prefix) {
  if (typeof(prefix) !== 'string') {
    return false
  }

  if (!prefix.match(/(^(?!(port:|status:|banner:|asn:|ssl:|app:|country:|org:|registry:|cidr:|server:|site:|cname:|mx:|ns:))\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\/\d{1,3})/)) {
    return false
  }

  return true
}

function isValidDomain(domain) {
  if (typeof(domain) !== 'string') {
    return false
  }

  if (!domain.match(
      /((^(?!(port:|status:|banner:|asn:|ssl:|app:|ssl:|app:|country:|org:|registry:|cidr:|server:|site:|cname:|mx:|ns:)([\w-.]{1,63}|[\w-.]{1,63}[^\x00-\x7F\w-]{1,63}))\.?([\w\-.]{1,63}|[\w\-.]{1,63}[^\x00-\x7F\w-]{1,63})\.([\w\-.]{2,})))|(^(?!(port:|status:|banner:|asn:|ssl:|app:|country:|org:|registry:|cidr:|server:|site:|cname:|mx:|ns:)([\w\d-]{1,63}|[\d\w-]*[^\x00-\x7F\w-]{1,63}))\.?([\w\d]{1,63}|[\d\w\-.]*[^\x00-\x7F\-.]{1,63})\.([a-z\.]{2,}|[\w]*[^\x00-\x7F\.]{2,}))/i
    )) {
    return false
  }

  return true
}

function isValidAsn(asn) {
  if (typeof(asn) !== 'string') {
    return false
  }

  if (!asn.match(/((AS)+[0-9]{1,})/i)) {
    return false
  }

  return true
}

function isValidMatch(match) {
  if (typeof(match) !== 'string') {
    return false
  }

  if (!match.match(
      /(^port:)\d{2,}|(^ipv4:)\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}|(^asn:)(AS)?\d{1,}|(^status:)\d{3}|(^banner:|^app:|^server:)(?! )[\w ;\(\):=,\/\.-]{2,}[^\s]$|(^country:)\w{2}|(^org:)[\w\/\.-]{2,}|(^registry:)\w{4,}|(^cidr:)\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\/\d{1,3}|((ssl:|site:|cname:|mx:|ns:)+((([\w-.]{1,63}|[\w-.]{1,63}[^\x00-\x7F\w-]{1,63})\.?([\w\-.]{1,63}|[\w\-.]{1,63}[^\x00-\x7F\w-]{1,63})*\.([\w\-.]{2,}))|(([\w\d-]{1,63}|[\d\w-]*[^\x00-\x7F\w-]{1,63})\.?([\w\d]{1,63}|[\d\w\-.]*[^\x00-\x7F\-.]{1,63})(\.([a-z\.]{2,}|[\w]*[^\x00-\x7F\.]{2,}))*)))/i
    )) {
    return false
  }

  return true
}

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
    searchMatch() {
      let query = this.q

      if (query !== null && query.length > 0) {
        query = this.trimWhitespaces(query.toLowerCase())
      }

      if (isValidMatch(query)) {
        this.$store.commit('updateQuery', query)

        this.$axios.$get(process.env.API_URL + '/match/' + query).then(response => {
          this.$store.commit('updateResultList', response)
          this.$router.push({
            name: 'search-all',
            params: {
              pathMatch: query
            }
          })
        }).catch((error) => {
          if (error.response) {
            this.$store.commit('updateResultList', [])
            this.$router.push({
              name: 'search-all',
              params: {
                pathMatch: query
              }
            })

            if (error.response.status !== 404) {
              this.$store.commit('updateErrorMessage', error.response.data)
              this.$store.commit('updateErrorStatus', error.response.status)
              this.$store.commit('updateModalVisible', true)
              this.$store.commit('updateLoadingIndicator', false)
            }
          }
        })
      }

      if (isValidAsn(query)) {
        this.$axios.$get(process.env.API_URL + '/match/asn:' + query).then(response => {
          this.$store.commit('updateResultList', response)
          this.$router.push({
            name: 'search-all',
            params: {
              pathMatch: query
            }
          })
        }).catch((error) => {
          if (error.response) {
            this.$store.commit('updateResultList', [])
            this.$router.push({
              name: 'search-all',
              params: {
                pathMatch: query
              }
            })

            if (error.response.status !== 404) {
              this.$store.commit('updateErrorMessage', error.response.data)
              this.$store.commit('updateErrorStatus', error.response.status)
              this.$store.commit('updateModalVisible', true)
              this.$store.commit('updateLoadingIndicator', false)
            }
          }
        })
      }

      if (!isValidCidr(query) && !isValidIpv4(query) && isValidDomain(query)) {
        this.$axios.$get(process.env.API_URL + '/match/site:' + query).then(response => {
          this.$store.commit('updateResultList', response)
          this.$router.push({
            name: 'search-all',
            params: {
              pathMatch: query
            }
          })
        }).catch((error) => {
          if (error.response) {
            this.$store.commit('updateResultList', [])
            this.$router.push({
              name: 'search-all',
              params: {
                pathMatch: query
              }
            })

            if (error.response.status !== 404) {
              this.$store.commit('updateErrorMessage', error.response.data)
              this.$store.commit('updateErrorStatus', error.response.status)
              this.$store.commit('updateModalVisible', true)
              this.$store.commit('updateLoadingIndicator', false)
            }
          }
        })
      }

      if (isValidIpv4(query)) {
        this.$axios.$get(process.env.API_URL + '/match/ipv4:' + query).then(response => {
          this.$store.commit('updateResultList', response)
          this.$router.push({
            name: 'search-all',
            params: {
              pathMatch: query
            }
          })
        }).catch((error) => {
          if (error.response) {
            this.$store.commit('updateResultList', [])
            this.$router.push({
              name: 'search-all',
              params: {
                pathMatch: query
              }
            })

            if (error.response.status !== 404) {
              this.$store.commit('updateErrorMessage', error.response.data)
              this.$store.commit('updateErrorStatus', error.response.status)
              this.$store.commit('updateModalVisible', true)
              this.$store.commit('updateLoadingIndicator', false)
            }
          }
        })
      }

      if (isValidCidr(query)) {
        this.$axios.$get(process.env.API_URL + '/match/cidr:' + query).then(response => {
          this.$store.commit('updateResultList', response)
          this.$router.push({
            name: 'search-all',
            params: {
              pathMatch: query
            }
          })
        }).catch((error) => {
          if (error.response) {
            this.$store.commit('updateResultList', [])
            this.$router.push({
              name: 'search-all',
              params: {
                pathMatch: query
              }
            })

            if (error.response.status !== 404) {
              this.$store.commit('updateErrorMessage', error.response.data)
              this.$store.commit('updateErrorStatus', error.response.status)
              this.$store.commit('updateModalVisible', true)
              this.$store.commit('updateLoadingIndicator', false)
            }
          }
        })
      }
    }
  }
}
</script>
