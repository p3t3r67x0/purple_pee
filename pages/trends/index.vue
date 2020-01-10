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
import List from '@/components/trends-list.vue'
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
      title: 'See what is trending now',
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Explore trends on purplepee.co'
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
      this.$axios.$get(process.env.API_URL + '/trends').then(res => {
        this.results = res
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
</script>
