<template>
<div class="container mx-auto">
  <h1 class="text-xl font-thin mx-3 md:mx-0 mb-3">Latest added <strong class="font-bold">Subnets</strong></h1>

  <ul class="flex content-start flex-wrap bg-gray-200 mb-6 mx-2 md:mx-0 p-1">
    <li v-for="result in results" class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-1">
      <div v-if="result.whois" class="bg-white rounded shadow-md leading-normal p-3">
        <strong class="block font-medium">AS {{ result.whois.asn }}</strong>
        <nuxt-link v-bind:to="generateLink(result.whois.asn_cidr)" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">{{ result.whois.asn_cidr }}</nuxt-link>
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
    generateLink(cidr) {
      return 'cidr/' + cidr
    }
  }
}
</script>
