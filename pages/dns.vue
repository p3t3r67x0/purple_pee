<template>
<div class="min-h-screen flex flex-col">
  <div class="flex-grow">
    <navheader></navheader>
    <modal v-if="modalVisible"></modal>
    <dns v-bind:results="results"></dns>
  </div>
  <navfooter></navfooter>
</div>
</template>

<script>
import Dns from '@/components/dns.vue'
import Modal from '@/components/modal.vue'
import Footer from '@/components/navfooter.vue'
import Navbar from '@/components/navheader.vue'

export default {
  components: {
    dns: Dns,
    modal: Modal,
    navfooter: Footer,
    navheader: Navbar
  },
  data() {
    return {
      results: []
    }
  },
  created() {
    this.fetchLatest()
  },
  head() {
    return {
      title: 'Latest DNS lookup entries',
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Find latest DNS lookup entries they change every few seconds so make sure you keep uptodate.'
      }]
    }
  },
  methods: {
    fetchLatest() {
      this.$axios.$get(process.env.API_URL + '/dns').then(res => {
        this.results = res
      }).catch((error) => {
        if (error.response) {
          this.$store.commit('updateErrorMessage', error.response.data)
          this.$store.commit('updateErrorStatus', error.response.status)
          this.$store.commit('updateModalVisible', true)
          this.$store.commit('updateLoadingIndicator', false)
        }
      })
    }
  }
}
</script>
