<template>
<div class="min-h-screen flex flex-col">
  <div class="flex-grow">
    <navheader></navheader>
    <asn v-bind:results="results"></asn>
  </div>
  <navfooter></navfooter>
</div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Asn from '@/components/asn2.vue'
import Footer from '@/components/navfooter.vue'
import Navbar from '@/components/navheader.vue'
import { fetchJson, handleFetchError } from '~/utils/http'
import { useNuxtApp } from '#app'

const results = ref<any[]>([])
const { $env } = useNuxtApp()

const fetchLatest = async () => {
  try {
    const response = await fetchJson(`${$env.API_URL}/asn`)
    results.value = Array.isArray(response) ? response : []
  } catch (error) {
    handleFetchError(error)
  }
}

onMounted(() => {
  fetchLatest()
})
</script>
