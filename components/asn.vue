<template>
<div class="container mx-auto">
  <div v-for="result in results" class="overflow-hidden bg-white rounded w-full shadow-md leading-normal mb-6 p-3">
    <div v-if="result.name" class="text-3xl font-medium text-purple-700">
      {{ result.name }}
    </div>
    <div v-if="result.asn" class="mt-4">
      <strong>AS number</strong>
      <p class="text-xl text-gray-700 font-light">
        {{ result.asn }}
      </p>
    </div>
    <div v-if="result.ip" class="mt-4">
      <strong>IP address</strong>
      <p class="text-xl text-gray-700 font-light">
        {{ result.ip }}
      </p>
    </div>
    <div v-if="result.host" class="mt-4">
      <strong>Hostname</strong>
      <p class="text-xl text-gray-700 font-light">
        {{ result.host }}
      </p>
    </div>
    <div v-if="result.cidr" class="mt-4">
      <strong>Prefixes</strong>
      <p class="text-xl text-gray-700 font-light">
        {{ result.cidr.join(', ') }}
      </p>
    </div>
    <div v-if="result.whois" class="mt-4">
      <strong>ASN whois</strong>
      <ul class="font-mono text-md font-light">
        <li v-for="v, k in result.whois" class="mt-1">
          <strong class="font-bold">{{ k }}</strong>:  <span class="text-gray-700 font-thin">{{ v }}</span>
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
  }
}
</script>
