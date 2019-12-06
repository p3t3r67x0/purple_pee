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

  if (!prefix.match(/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\/\d{1,3}/)) {
    return false
  }

  return true
}

function isValidDomain(domain) {
  if (typeof(domain) !== 'string') {
    return false
  }

  if (!domain.match(/([a-z0-9-]{1,63}\.?[a-z0-9\-.]{1,63}\.[a-z\.]{2,})/)) {
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

export default {
  data() {
    return {
      q: [this.$store.state.results.length > 0 ? '' : null]
    }
  },
  methods: {
    trimWhitespaces(q) {
      if (Array.isArray(q)) {
        q = q[0]
      }

      return q.trim()
    },
    autoComplete() {
      const query = this.trimWhitespaces(this.q)

      if (isValidAsn(query)) {
        this.$axios.$get('http://127.0.0.1:5000/asn/' + query).then(res => {
          this.$store.commit('update', res)
          this.$router.push({
            name: 'index'
          })
        })
      }

      if (isValidDomain(query)) {
        this.$axios.$get('http://127.0.0.1:5000/dns/' + query).then(res => {
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
