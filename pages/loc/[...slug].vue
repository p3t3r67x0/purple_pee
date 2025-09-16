<template>
<div class="min-h-screen flex flex-col">
  <div class="flex-grow">
    <navheader></navheader>
    <modal v-if="modalVisible"></modal>
    <query v-if="!loadingIndicator" v-bind:query="queryTitle" v-bind:results="results.length"></query>
    <dns v-if="!loadingIndicator" v-bind:results="results" :currentPage="currentPage"></dns>
  </div>
  <navfooter></navfooter>
</div>
</template>

<script setup lang="ts">
import Dns from '@/components/dns.vue'
import Modal from '@/components/modal.vue'
import Query from '@/components/query.vue'
import Footer from '@/components/navfooter.vue'
import Navbar from '@/components/navheader.vue'
import { useMatchResultsPage } from '~/composables/useMatchResultsPage'

const { results, currentPage, modalVisible, loadingIndicator, queryTitle } = useMatchResultsPage({
  prefix: 'loc',
  displayPrefix: 'location',
  headTitle: (decodedQuery) => `Location based results for ${decodedQuery}`,
  headDescription: (decodedQuery) => `Explore latest location results ${decodedQuery}`
})
</script>
