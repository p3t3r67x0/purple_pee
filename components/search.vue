<template>
<div>
  <input class="px-2 py-1 rounded bg-gray-800 text-sm text-white w-full" type="text" v-on:keyup="autoComplete" v-model="q" placeholder="Search Purple Pee">
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

export default {
  data() {
    return {
      q: [this.$store.state.results.length > 0 ? this.$store.state.results[0].ip : null]
    }
  },
  methods: {
    autoComplete() {
      this.q = this.q.trim()

      if (isValidIpv4(this.q)) {
        this.$axios.$get('http://127.0.0.1:5000/ip/' + this.q).then(res => {
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
