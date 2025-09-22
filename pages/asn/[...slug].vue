<template>
<div class="min-h-screen flex flex-col">
  <div class="flex-grow">
    <navheader></navheader>
    <modal v-if="modalVisible"></modal>
    <dns
      v-if="!loadingIndicator"
      v-bind:results="results"
      :currentPage="currentPage"
      :total="pagination.total"
      :hasNext="pagination.has_next"
      :hasPrevious="pagination.has_previous"
      @nextPage="nextPage"
      @prevPage="prevPage"
    ></dns>
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

const { results, currentPage, pagination, modalVisible, loadingIndicator, nextPage, prevPage } = useMatchResultsPage({
  prefix: 'asn',
  headTitle: (decodedQuery) => `ASN ${decodedQuery} Network Analysis | NetScanner Autonomous System Intelligence`,
  headDescription: (decodedQuery) => `Comprehensive analysis of Autonomous System ${decodedQuery}. Explore network allocations, IP ranges, ISP information, BGP routing data, and infrastructure details for this ASN.`,
  buildQueryTitle: (decodedQuery, rawQuery) => { const parts = rawQuery.split(/[a-z]/i); return ['asn', parts[2] ?? decodedQuery]; }
})
</script>
