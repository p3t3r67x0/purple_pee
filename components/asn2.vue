<template>
<div class="container mx-auto">
  <div v-for="result in results" class="overflow-hidden bg-white rounded shadow-md leading-normal mx-3 md:mx-0 mb-6 p-3">
    <div v-if="result.ip" class="flex text-2xl md:text-3xl font-medium text-purple-700">
      <p>{{ result.ip }}</p>
      <a v-bind:href="generateUrl(result.ip)" target="_blank" class="ml-1 mt-2 md:mt-3 text-gray-600">
        <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22">
          <path d="M19 6.41L8.7 16.71a1 1 0 1 1-1.4-1.42L17.58 5H14a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V6.41zM17 14a1 1 0 0 1 2 0v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2h5a1 1 0 0 1 0 2H5v12h12v-5z" /></svg>
      </a>
    </div>
    <div v-if="result.asn" class="mt-3 md:mt-4">
      <strong class="text-lg">AS number</strong>
      <p class="text-lg md:text-xl text-gray-700 font-light">
        {{ result.asn }}
      </p>
    </div>
    <div v-if="result.name" class="mt-3 md:mt-4">
      <strong class="text-lg">AS name</strong>
      <p class="break-all text-lg md:text-xl text-gray-700 font-light">
        {{ result.name }}
      </p>
    </div>
    <div v-if="result.host" class="mt-3 md:mt-4">
      <strong class="text-lg">Hostname</strong>
      <p class="text-lg md:text-xl text-gray-700 font-light">
        {{ result.host }}
      </p>
    </div>
    <div v-if="result.cidr" class="mt-3 md:mt-4">
      <strong class="text-lg">Prefixes</strong>
      <p class="text-lg md:text-xl text-gray-700 font-light">
        {{ result.cidr.join(', ') }}
      </p>
    </div>
    <div v-if="result.whois" class="mt-3 md:mt-4">
      <strong class="text-lg">ASN whois</strong>
      <ul class="font-mono text-md font-light">
        <li v-for="v, k in result.whois" class="mt-1">
          <strong class="font-bold">{{ k }}</strong>: <span class="text-gray-700 font-thin">{{ v }}</span>
          <span><img v-if="k == 'asn_country_code'" v-bind:src="generatePath(v)" class="inline w-9 h-4"></span>
        </li>
      </ul>
    </div>
    <div v-if="result.ports" class="mt-3 md:mt-4">
      <strong class="text-lg">Ports</strong>
      <ul class="font-mono text-md font-light">
        <li v-for="port in result.ports" class="mt-1">
          <strong class="font-bold">{{ port.port }}/{{ port.proto }}</strong>: <span>{{ port.status }}</span>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    results: Array
  },
  methods: {
    generatePath(image) {
      return `/svg/${image ? image.toLowerCase() : 'unknown'}.svg`
    },
    generateUrl(domain) {
      return 'http://' + domain
    }
  }
}
</script>
