<template>
<div id="xhr" v-if="!loadingIndicator" class="container mx-auto">
  <h1 class="text-xl font-thin mx-3 md:mx-0 mb-3">Latest added <strong class="font-bold">IPv4 addresses</strong></h1>

  <ul class="flex content-start flex-wrap bg-gray-200 mb-6 mx-2 md:mx-0 p-1">
    <li v-for="result in results" class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-1">
      <div class="bg-white rounded shadow-md leading-normal p-3">
        <span><img v-if="result.country_code" v-bind:src="generatePath(result.country_code)" class="inline w-9 h-4 mr-1"></span>
        <nuxt-link v-bind:to="generateLink(result.a_record)" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">{{ result.a_record }}</nuxt-link>
      </div>
    </li>
  </ul>
</div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useMainStore } from '~/stores/main'

defineProps<{ results: Array<Record<string, any>> }>()

const mainStore = useMainStore()
const { loading: loadingIndicator } = storeToRefs(mainStore)

const generatePath = (image?: string) => `/svg/${(image ?? 'unknown').toLowerCase()}.svg`
const generateLink = (ip: string) => `ipv4/${ip}`
</script>
