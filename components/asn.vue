<template>
<div class="container mx-auto">
  <div v-for="result in results" class="overflow-hidden bg-white rounded w-full shadow-md leading-normal mb-6 p-3">
    <div v-if="result.as[0].name" class="text-3xl font-medium text-purple-700">
      {{ result.as[0].name }}
    </div>
    <div v-if="result.as[0].asn" class="mt-4">
      <strong>AS number</strong>
      <p class="text-xl text-gray-700 font-light">
        {{ result.as[0].asn }}
      </p>
    </div>
    <div v-if="result.as[0].prefix" class="mt-4">
      <strong>Subnet</strong>
      <p class="text-xl text-gray-700 font-light">
        {{ result.as[0].prefix }}
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
