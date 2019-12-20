<template>
<div class="container mx-auto">
  <h1 class="text-xl font-thin mx-3 md:mx-0 mb-3">Latest added <strong class="font-bold">Subnets</strong></h1>

  <ul class="flex content-start flex-wrap bg-gray-200 mb-6 mx-2 md:mx-0 p-1">
    <li v-for="result in results" class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-1">
      <div class="bg-white rounded shadow-md leading-normal p-3">
        <div>
          <span v-if="result.country_code">{{ result.country_code }}</span>
          <span v-else class="font-thin">Country unknown</span>
          <span><img v-if="result.country_code" v-bind:src="generatePath(result.country_code)" class="inline w-9 h-4"></span>
        </div>
        <nuxt-link v-bind:to="generateLink(result.a_record)" class="md:text-xl font-light text-blue-500 hover:text-blue-700">{{ result.a_record }}</nuxt-link>
      </div>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  props: {
    results: Array
  },
  methods: {
    generatePath(image) {
      return require('~/assets/svg/' + image.toLowerCase() + '.svg')
    },
    generateLink(ip) {
      return 'ipv4/' + ip
    }
  }
}
</script>
