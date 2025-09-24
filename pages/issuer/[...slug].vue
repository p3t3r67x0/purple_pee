<template>
  <div class="min-h-screen flex flex-col">
    <div class="flex-grow">
      <Navbar />
      <Modal v-if="modalVisible"></Modal>
      <Dns v-if="!loadingIndicator" v-bind:results="results" :currentPage="currentPage" :total="pagination.total"
        :hasNext="pagination.has_next" :hasPrevious="pagination.has_previous" @nextPage="nextPage" @prevPage="prevPage">
      </Dns>
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Dns from '@/components/Dns.vue'
import Modal from '@/components/Modal.vue'
import Footer from '@/components/NavFooter.vue'
import Navbar from '@/components/NavHeader.vue'
import { useMatchResultsPage } from '~/composables/useMatchResultsPage'

const { results, currentPage, pagination, modalVisible, loadingIndicator, nextPage, prevPage } = useMatchResultsPage({
  prefix: 'issuer',
  headTitle: (decodedQuery) => `SSL Certificate Issuer: ${decodedQuery} | NetScanner CA Analysis`,
  headDescription: (decodedQuery) => `Comprehensive analysis of SSL certificates issued by ${decodedQuery}. Explore certificate authority profiles, issuance patterns, trust chains, and security assessments for certificates from this issuer.`
})
</script>
