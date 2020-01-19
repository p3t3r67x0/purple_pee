<template>
<div class="min-h-screen flex flex-col">
  <div class="flex-grow">
    <navheader></navheader>
    <modal v-if="modalVisible"></modal>
    <query v-if="!loadingIndicator" v-bind:query="queryTitle" v-bind:results="results.length"></query>
    <dns v-if="!loadingIndicator" v-bind:results="results"></dns>
  </div>
  <navfooter></navfooter>
</div>
</template>

<script>
import Dns from '@/components/dns.vue'
import Modal from '@/components/modal.vue'
import Query from '@/components/query.vue'
import Footer from '@/components/navfooter.vue'
import Navbar from '@/components/navheader.vue'

export default {
  components: {
    dns: Dns,
    query: Query,
    modal: Modal,
    navfooter: Footer,
    navheader: Navbar
  },
  created() {
    this.fetchLatest(this.query)
  },
  head() {
    return {
      title: 'Search results for ' + decodeURIComponent(this.query),
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Explore your search results ' + decodeURIComponent(this.query)
      }]
    }
  },
  computed: {
    modalVisible() {
      return this.$store.state.modalVisible
    },
    loadingIndicator() {
      return this.$store.state.loading
    },
    results() {
      return this.$store.state.results
    },
    queryTitle() {
      const query = decodeURIComponent(this.$route.params.pathMatch).split(':')

      if (query.length >= 2) {
        return [query[0], query.splice(1).join(':')]
      } else {
        return ['', decodeURIComponent(this.$route.params.pathMatch)]
      }
    },
    query() {
      return this.$route.params.pathMatch
    }
  },
  methods: {
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
    trimWhitespaces(query) {
      let r = query

      if (Array.isArray(query)) {
        r = query[0]
      }

      if (r !== null) {
        return r.trim()
      } else {
        return r
      }
    },
    fetchLatest(query) {
      if (query !== null && query.length > 0) {
        query = this.trimWhitespaces(query)
      }

      if (this.results.length === 0 && this.isValidMatch(query)) {
        this.$axios.$get(process.env.API_URL + '/match/' + query).then(res => {
          this.$store.commit('updateResultList', res)
        }).catch((error) => {
          if (error.response) {
            this.$store.commit('updateResultList', [])

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
