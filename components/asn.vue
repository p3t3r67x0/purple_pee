<template>
<div class="container mx-auto">
  <div v-for="result in results" class="overflow-hidden bg-white rounded shadow-md leading-normal mx-3 md:mx-0 mb-6 p-3">
    <div v-if="result.name" class="text-2xl md:text-3xl font-medium text-purple-700">
      <p class="break-all">{{ result.name }}</p>
    </div>
    <div v-if="result.asn" class="mt-3 md:mt-4">
      <strong class="text-lg">AS number</strong>
      <p class="text-lg md:text-xl text-gray-700 font-light">
        {{ result.asn }}
      </p>
    </div>
    <div v-if="result.ip" class="mt-3 md:mt-4">
      <strong class="text-lg">IP address</strong>
      <p class="text-lg md:text-xl text-gray-700 font-light">
        {{ result.ip }}
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
          <strong class="font-bold">{{ k }}</strong>:  <span class="text-gray-700 font-thin">{{ v }}</span>
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
  }
}
</script>
