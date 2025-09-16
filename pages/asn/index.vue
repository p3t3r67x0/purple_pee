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
import List from '@/components/asn-list.vue'
import Footer from '@/components/navfooter.vue'
import Navbar from '@/components/navheader.vue'
import { fetchJson, handleFetchError } from '~/utils/http'

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
      showModal: false
    }
  },
  created() {
    this.fetchLatest(this.query)
  },
  head() {
    return {
      title: 'Explore the latest ASN entries',
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Explore the latest ASN entries'
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
    async fetchLatest(query) {
      try {
        const res = await fetchJson(this.$env.API_URL + '/asn')

        this.results = res
      } catch (error) {
        handleFetchError(error)
      }
    }
  }
}
</script>
