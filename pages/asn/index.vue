<template>
<div class="min-h-screen flex flex-col">
  <div class="flex-grow">
    <navheader></navheader>
    <list v-bind:results="results"></list>
  </div>
  <navfooter></navfooter>
</div>
</template>

<script>
import List from '@/components/asn-list.vue'
import Footer from '@/components/navfooter.vue'
import Navbar from '@/components/navheader.vue'

export default {
  components: {
    list: List,
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
  head: {
    title: 'Explore the latest ASN entries',
    meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Explore the latest ASN entries'
    }]
  },
  methods: {
    fetchLatest(query) {
      this.$axios.$get(process.env.API_URL + '/asn').then(res => {
        this.results = res
      }).catch((error) => {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log(error.message);
        }

        console.log(error.config);
        this.$store.commit('updateLoadingIndicator', false)
      })
    }
  }
}
</script>
