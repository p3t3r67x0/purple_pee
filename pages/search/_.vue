<template>
<div class="min-h-screen flex flex-col">
  <div class="flex-grow">
    <navheader></navheader>
    <modal v-if="modalVisible"></modal>
    <query v-if="!loadingIndicator" v-bind:query="query" v-bind:results="results"></query>
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
  params: [true],
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
    query() {
      const query = this.$route.params.pathMatch
      this.fetchLatest(query)
      return query
    }
  },
  head() {
    return {
      title: 'Search results for ' + this.query,
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Explore your search results ' + this.query
      }]
    }
  },
  methods: {
    isValidMatch(match) {
      if (typeof(match) !== 'string') {
        return false
      }

      if (!match.match(
          /(^port:)\d{2,}|(^asn:)(AS)?\d{1,}|(^status:)\d{3}|(^banner:|^app:|^server:)(?! )[\w ;\(\):=,\/\.-]{2,}[^\s]$|(^country:)\w{2}|(^org:)[\w\/\.-]{2,}|(^registry:)\w{4,}|(^cidr:)\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\/\d{1,3}|((ssl:|site:|cname:|mx:)+((([\w-.]{1,63}|[\w-.]{1,63}[^\x00-\x7F\w-]{1,63})\.?([\w\-.]{1,63}|[\w\-.]{1,63}[^\x00-\x7F\w-]{1,63})*\.([\w\-.]{2,}))|(([\w\d-]{1,63}|[\d\w-]*[^\x00-\x7F\w-]{1,63})\.?([\w\d]{1,63}|[\d\w\-.]*[^\x00-\x7F\-.]{1,63})(\.([a-z\.]{2,}|[\w]*[^\x00-\x7F\.]{2,}))*)))/i
        )) {
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
        query = this.trimWhitespaces(query.toLowerCase())
      }

      if (this.isValidMatch(query)) {
        this.$axios.$get(process.env.API_URL + '/match/' + query).then(res => {
          this.$store.commit('updateResultList', res)
        }).catch((error) => {
          if (error.response) {
            this.$store.commit('updateResultList', [])
            this.$store.commit('updateErrorMessage', error.response.data)
            this.$store.commit('updateErrorStatus', error.response.status)
            this.$store.commit('updateModalVisible', true)
            this.$store.commit('updateLoadingIndicator', false)
          }
        })
      }
    }
  }
}
</script>
