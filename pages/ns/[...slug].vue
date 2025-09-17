<template>
<div class="min-h-screen flex flex-col">
  <div class="flex-grow">
    <navheader></navheader>
    <modal v-if="modalVisible"></modal>
    <dns v-if="!loadingIndicator" v-bind:results="results" :currentPage="currentPage" :total="pagination.total"></dns>
  </div>
  <navfooter></navfooter>
</div>
</template>

<script setup lang="ts">
import Dns from '@/components/dns.vue'
import Modal from '@/components/modal.vue'
import Footer from '@/components/navfooter.vue'
import Navbar from '@/components/navheader.vue'
import { useMatchResultsPage } from '~/composables/useMatchResultsPage'

const { results, currentPage, pagination, modalVisible, loadingIndicator } = useMatchResultsPage({
  prefix: 'ns',
  headTitle: (decodedQuery) => `NS record results for ${decodedQuery}`,
  headDescription: (decodedQuery) => `Explore latest NS record results ${decodedQuery}`
})
</script>
