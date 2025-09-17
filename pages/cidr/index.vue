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

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Modal from '@/components/modal.vue'
import List from '@/components/cidr-list.vue'
import Footer from '@/components/navfooter.vue'
import Navbar from '@/components/navheader.vue'
import { fetchJson, handleFetchError, isPaginatedResponse } from '~/utils/http'
import { useMainStore } from '~/stores/main'
import { storeToRefs } from 'pinia'
import { useNuxtApp } from '#app'

const results = ref<any[]>([])
const mainStore = useMainStore()
const { modalVisible } = storeToRefs(mainStore)
const { $env } = useNuxtApp()

useHead(() => ({
  title: 'Explore the latest CIDR entries',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Explore the latest CIDR entries'
    }
  ]
}))

const DEFAULT_PAGE = 1
const DEFAULT_PAGE_SIZE = 25

const fetchLatest = async (page = DEFAULT_PAGE) => {
  try {
    const response = await fetchJson(`${$env.API_URL}/cidr?page=${page}&page_size=${DEFAULT_PAGE_SIZE}`)

    if (isPaginatedResponse<any>(response)) {
      results.value = response.results
      return
    }

    if (response && typeof response === 'object' && Array.isArray((response as { results?: unknown[] }).results)) {
      results.value = (response as { results?: any[] }).results ?? []
      return
    }

    results.value = Array.isArray(response) ? response : []
  } catch (error) {
    handleFetchError(error)
  }
}

onMounted(() => {
  fetchLatest(DEFAULT_PAGE)
})
</script>
