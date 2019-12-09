<template>
<div>
  <input class="px-2 py-1 rounded bg-gray-800 text-sm text-white w-full" type="text" v-on:keyup="autoComplete" v-model="q" placeholder="Enter a Domain, IP, ASN or Hostname">
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

function isValidPrefix(prefix) {
  if (typeof(prefix) !== 'string') {
    return false
  }

  if (!prefix.match(/(^(?!(port:|status:|ssl:|app:|country:|org:|registry:|cidr:|server:|site:|cname:|mx:))\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\/\d{1,3})/)) {
    return false
  }

  return true
}

function isValidDomain(domain) {
  if (typeof(domain) !== 'string') {
    return false
  }

  if (!domain.match(/((^(?!(port:|status:|ssl:|app:|ssl:|app:|country:|org:|registry:|cidr:|server:|site:|cname:|mx:)([\w-.]{1,63}|[\w-.]{1,63}[^\x00-\x7F\w-]{1,63}))\.?([\w\-.]{1,63}|[\w\-.]{1,63}[^\x00-\x7F\w-]{1,63})\.([\w\-.]{2,})))|(^(?!(port:|status:|ssl:|app:|country:|org:|registry:|cidr:|server:|site:|cname:|mx:)([\w\d-]{1,63}|[\d\w-]*[^\x00-\x7F\w-]{1,63}))\.?([\w\d]{1,63}|[\d\w\-.]*[^\x00-\x7F\-.]{1,63})\.([a-z\.]{2,}|[\w]*[^\x00-\x7F\.]{2,}))/i)) {
    return false
  }

  return true
}

function isValidAsn(asn) {
  if (typeof(asn) !== 'string') {
    return false
  }

  if (!asn.match(/((AS)+[0-9]{3,9})/i)) {
    return false
  }

  return true
}

function isValidMatch(match) {
  if (typeof(match) !== 'string') {
    return false
  }

  if (!match.match(/(^port:)\d{2,}|(^status:)\d{3}|(^app:|^server:)(?! )[\w ;\(\):=,\/\.-]{2,}[^\s]$|(^country:)\w{2}|(^org:)[\w\/\.-]{2,}|(^registry:)\w{4,}|(^cidr:)\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\/\d{1,3}|((ssl:|site:|cname:|mx:)+((([\w-.]{1,63}|[\w-.]{1,63}[^\x00-\x7F\w-]{1,63})\.?([\w\-.]{1,63}|[\w\-.]{1,63}[^\x00-\x7F\w-]{1,63})*\.([\w\-.]{2,}))|(([\w\d-]{1,63}|[\d\w-]*[^\x00-\x7F\w-]{1,63})\.?([\w\d]{1,63}|[\d\w\-.]*[^\x00-\x7F\-.]{1,63})(\.([a-z\.]{2,}|[\w]*[^\x00-\x7F\.]{2,}))*)))/i)) {
    return false
  }

  return true
}

export default {
  data() {
    return {
      q: null
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
    autoComplete() {
      let query = this.q

      if (query !== null && query.length > 0) {
        query = this.trimWhitespaces(query.toLowerCase())
      }

      if (isValidMatch(query)) {
        this.$axios.$get('http://127.0.0.1:5000/match/' + query).then(res => {
          this.$store.commit('update', res)
          this.$router.push({
            name: 'index'
          })
        })
      }

      if (isValidAsn(query)) {
        this.$axios.$get('http://127.0.0.1:5000/asn/' + query).then(res => {
          this.$store.commit('update', res)
          this.$router.push({
            name: 'index'
          })
        })
      }

      if (isValidDomain(query)) {
        const q = query.split(/[\.-_#+*!"§&/()=?"]/).sort(function(a, b) {
          return b.length - a.length;
        })[0]

        this.$axios.$get('http://127.0.0.1:5000/dns/' + q).then(res => {
          this.$store.commit('update', res)
          this.$router.push({
            name: 'index'
          })
        })
      }

      if (isValidIpv4(query)) {
        this.$axios.$get('http://127.0.0.1:5000/ip/' + query).then(res => {
          this.$store.commit('update', res)
          this.$router.push({
            name: 'index'
          })
        })
      }

      if (isValidPrefix(query)) {
        this.$axios.$get('http://127.0.0.1:5000/subnet/' + query).then(res => {
          this.$store.commit('update', res)
          this.$router.push({
            name: 'index'
          })
        })
      }
    }
  }
}
</script>
