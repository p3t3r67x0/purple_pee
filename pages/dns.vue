<template>
<div class="min-h-screen flex flex-col">
  <div class="flex-grow">
    <navheader></navheader>
    <modal v-if="modalVisible"></modal>
    <query v-if="!loadingIndicator" v-bind:query="queryTitle" v-bind:results="results.length"></query>
    <dns v-bind:results="results" :currentPage="currentPage" @nextPage="nextPage" @prevPage="prevPage"></dns>
  </div>
  <navfooter></navfooter>
</div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import Dns from '@/components/dns.vue'
import Modal from '@/components/modal.vue'
import Query from '@/components/query.vue'
import Footer from '@/components/navfooter.vue'
import Navbar from '@/components/navheader.vue'
import { fetchJson, handleFetchError } from '~/utils/http'
import { useMainStore } from '~/stores/main'
import { storeToRefs } from 'pinia'
import { useNuxtApp } from '#app'

const results = ref<any[]>([])
const currentPage = ref(1)
const pageSize = ref(10)
const mainStore = useMainStore()
const { modalVisible, loading: loadingIndicator } = storeToRefs(mainStore)
const { $env } = useNuxtApp()

const queryTitle = computed(() => ['latest', 'DNS'])

useHead(() => ({
  title: 'Latest DNS lookup entries',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Find latest DNS lookup entries they change every few seconds so make sure you keep uptodate.'
    }
  ]
}))

const fetchLatest = async (page = 1, size = 10) => {
  try {
    const response = await fetchJson(`${$env.API_URL}/dns?page=${page}&page_size=${size}`)
    results.value = Array.isArray(response?.results) ? response.results : []
  } catch (error) {
    handleFetchError(error)
  }
}

const nextPage = () => {
  currentPage.value += 1
  fetchLatest(currentPage.value, pageSize.value)
}

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value -= 1
    fetchLatest(currentPage.value, pageSize.value)
  }
}

onMounted(() => {
  fetchLatest(currentPage.value, pageSize.value)
})
</script>
