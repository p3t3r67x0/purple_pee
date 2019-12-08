<template>
<div class="container mx-auto">
  <div v-for="result in results" class="overflow-hidden bg-white rounded w-full shadow-md leading-normal mb-6 p-3">
    <div v-if="result.domain" class="flex text-3xl font-medium text-purple-700">
      {{ result.domain }}
      <a v-bind:href="generateUrl(result.domain)" target="_blank" class="ml-1 mt-3 text-gray-600">
        <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
          <path d="M19 6.41L8.7 16.71a1 1 0 1 1-1.4-1.42L17.58 5H14a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V6.41zM17 14a1 1 0 0 1 2 0v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2h5a1 1 0 0 1 0 2H5v12h12v-5z" /></svg>
      </a>
    </div>
    <div v-if="result.a_record" class="mt-4">
      <strong>A records</strong>
      <ul class="text-xl text-gray-700 font-light">
        <li v-for="a_record in result.a_record">
          {{ a_record }}
        </li>
      </ul>
    </div>
    <div v-if="result.aaaa_record" class="mt-4">
      <strong>AAAA records</strong>
      <ul class="text-xl text-gray-700 font-light">
        <li v-for="aaaa_record in result.aaaa_record">
          {{ aaaa_record }}
        </li>
      </ul>
    </div>
    <div v-if="result.cname_record" class="mt-4">
      <strong>CNAME records</strong>
      <ul class="text-xl text-gray-700 font-light">
        <li v-for="cname_record in result.cname_record">
          {{ cname_record.target }}
        </li>
      </ul>
    </div>
    <div v-if="result.mx_record" class="mt-4">
      <strong>MX records</strong>
      <ul class="text-xl text-gray-700 font-light">
        <li v-for="mx_record in result.mx_record">
          {{ mx_record.exchange }}, {{ mx_record.preference }}
        </li>
      </ul>
    </div>
    <div v-if="result.banner" class="mt-4">
      <strong>SSH banner</strong>
      <ul class="text-xl text-gray-700 font-light">
        {{ result.banner }}
      </ul>
    </div>
    <div v-if="result.ports" class="mt-4">
      <strong>Ports</strong>
      <ul class="font-mono text-md font-light">
        <li v-for="port in result.ports" class="mt-1">
          <strong class="font-bold">{{ port.port }}/{{ port.proto }}</strong>: <span>{{ port.status }}</span>
        </li>
      </ul>
    </div>
    <div v-if="result.ssl_cert" class="mt-4">
      <strong>SSL cert</strong>
      <ul v-for="ssl_cert in result.ssl_cert" class="font-mono overflow-scroll text-md font-light">
        <li v-for="val, key in ssl_cert" class="mb-1">
          <div v-if="key == 'subject'">
            <div v-for="v, k in val">
              <span class="font-bold">Subject {{ k }}</span>: <span class="text-gray-700 font-thin">{{ v }}</span>
            </div>
          </div>
          <div v-if="key == 'issuer'">
            <div v-for="v, k in val">
              <span class="font-bold">Issuer {{ k }}</span>: <span class="text-gray-700 font-thin">{{ v }}</span>
            </div>
          </div>
          <div v-if="key == 'hash'">
            <div v-for="v, k in val">
              <span class="font-bold">{{ k }}</span>: <span class="text-gray-700 font-thin">{{ v }}</span>
            </div>
          </div>
          <div v-if="key == 'extensions'">
            <div v-for="v, k in val">
              <span class="font-bold">{{ k }}</span>: <span class="text-gray-700 font-thin">{{ v }}</span>
            </div>
          </div>
          <div v-if="key != 'cert' && key != 'extensions' && key != 'hash' && key != 'issuer' && key != 'subject'">
            <span class="font-bold">{{ key }}</span>: <span class="text-gray-700 font-thin">{{ val }}</span>
          </div>
        </li>
      </ul>
    </div>
    <div v-if="result.header" class="mt-4">
      <strong>HTTP header</strong>
      <code>
        <ul class="bg-gray-300 overflow-scroll px-3 pt-3">
          <li v-for="val, key in result.header">
            <span class="font-bold">{{ key }}</span>: <span class="font-thin">{{ val }}</span>
          </li>
        </ul>
      </code>
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
    generateUrl(domain) {
      return 'http://' + domain
    }
  }
}
</script>
