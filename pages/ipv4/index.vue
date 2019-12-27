<template>
<div class="min-h-screen flex flex-col">
  <div class="flex-grow">
    <navheader></navheader>
    <modal v-if="modalVisible"></modal>
    <list v-bind:results="results"></list>
  </div>
  <navfooter></navfooter>
</div>
</template>

<script>
import Modal from '@/components/modal.vue'
import List from '@/components/ipv4-list.vue'
import Footer from '@/components/navfooter.vue'
import Navbar from '@/components/navheader.vue'

export default {
  components: {
    list: List,
    modal: Modal,
    navfooter: Footer,
    navheader: Navbar
  },
  data() {
    return {
      results: [],
    }
  },
  created() {
    this.fetchLatest(this.query)
  },
  head() {
    return {
      title: 'Explore the latest IPv4 entries',
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Explore the latest IPv4 entries'
      }]
    }
  },
  watch: {
    modalVisible: function() {}
  },
  computed: {
    modalVisible() {
      return this.$store.state.modalVisible
    }
  },
  methods: {
    fetchLatest(query) {
      this.$axios.$get(process.env.API_URL + '/ipv4').then(res => {
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
