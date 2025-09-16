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
import List from '@/components/trends-list.vue'
import Footer from '@/components/navfooter.vue'
import Navbar from '@/components/navheader.vue'
import { fetchJson, handleFetchError } from '~/utils/http'
import { useMainStore } from '~/stores/main'
import { storeToRefs } from 'pinia'
import { useNuxtApp } from '#app'

const results = ref<any[]>([])
const mainStore = useMainStore()
const { modalVisible } = storeToRefs(mainStore)
const { $env } = useNuxtApp()

useHead(() => ({
  title: 'See what is trending now',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Explore trends on purplepee.co'
    }
  ]
}))

const fetchLatest = async () => {
  try {
    const response = await fetchJson(`${$env.API_URL}/trends`)
    results.value = Array.isArray(response) ? response : []
  } catch (error) {
    handleFetchError(error)
  }
}

onMounted(() => {
  fetchLatest()
})
</script>
