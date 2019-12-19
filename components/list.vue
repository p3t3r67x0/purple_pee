<template>
<div class="container mx-auto">
  <h1 class="text-xl font-thin mb-3">Latest added <strong class="font-bold">Subnets</strong></h1>

  <div class="flex flex-wrap justify-start overflow-hidden mx-3 md:mx-0 mb-6">
    <ul v-for="result in results" class="mx-auto-3">
      <li class="bg-white rounded shadow-md leading-normal p-3">
        <strong class="block">AS {{ result.whois.asn }}</strong>
        <nuxt-link v-bind:to="generateLink(result.whois.asn_cidr)" class="md:text-xl font-light text-blue-500 hover:text-blue-700">{{ result.whois.asn_cidr }}</nuxt-link>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  props: {
    results: Array
  },
  methods: {
    generateLink(cidr) {
      return 'subnet/' + cidr
    }
  }
}
</script>
