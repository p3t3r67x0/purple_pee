<template>
<div class="container mx-auto">
  <div v-for="result in results" class="overflow-hidden bg-white rounded shadow-md leading-normal mx-3 md:mx-0 mb-6 p-3">
    <div v-if="result.domain" class="flex text-2xl md:text-3xl font-medium text-purple-700">
      <p class="break-all">{{ result.domain }}</p>
      <a v-bind:href="generateUrl(result.domain)" target="_blank" class="ml-1 mt-2 md:mt-3 text-gray-600">
        <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22">
          <path d="M19 6.41L8.7 16.71a1 1 0 1 1-1.4-1.42L17.58 5H14a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V6.41zM17 14a1 1 0 0 1 2 0v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2h5a1 1 0 0 1 0 2H5v12h12v-5z" /></svg>
      </a>
    </div>
    <div v-if="result.a_record" class="mt-3 md:mt-4">
      <strong class="text-lg">A records</strong>
      <ul class="md:text-xl text-gray-700 font-light">
        <li v-for="a_record in result.a_record">
          {{ a_record }}
        </li>
      </ul>
    </div>
    <div v-if="result.aaaa_record" class="mt-3 md:mt-4">
      <strong class="text-lg">AAAA records</strong>
      <ul class="md:text-xl text-gray-700 font-light">
        <li v-for="aaaa_record in result.aaaa_record">
          {{ aaaa_record }}
        </li>
      </ul>
    </div>
    <div v-if="result.cname_record" class="mt-3 md:mt-4">
      <strong class="text-lg">CNAME records</strong>
      <ul class="md:text-xl text-gray-700 font-light">
        <li v-for="cname_record in result.cname_record">
          {{ cname_record.target }}
        </li>
      </ul>
    </div>
    <div v-if="result.mx_record" class="mt-3 md:mt-4">
      <strong class="text-lg">MX records</strong>
      <ul class="md:text-xl text-gray-700 font-light">
        <li v-for="mx_record in result.mx_record">
          {{ mx_record.exchange }}, {{ mx_record.preference }}
        </li>
      </ul>
    </div>
    <div v-if="result.banner" class="mt-3 md:mt-4">
      <strong class="text-lg">SSH banner</strong>
      <ul class="md:text-xl text-gray-700 font-light">
        {{ result.banner }}
      </ul>
    </div>
    <div v-if="result.whois" class="mt-3 md:mt-4">
      <strong class="text-lg">ASN whois</strong>
      <ul class="font-mono text-md font-light">
        <li v-for="v, k in result.whois" class="mt-1">
          <strong class="font-bold">{{ k }}</strong>:  <span class="text-gray-700 font-thin">{{ v }}</span>
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
    <div v-if="result.ssl_cert" class="mt-3 md:mt-4">
      <strong class="text-lg">SSL cert</strong>
      <ul v-for="ssl_cert in result.ssl_cert" class="font-mono text-md font-light">
        <li v-for="val, key in ssl_cert">
          <div v-if="key == 'subject'">
            <div v-for="v, k in val" class="mt-2">
              <span class="font-bold">{{ k }}</span>: <span class="text-gray-700 font-thin">{{ v }}</span>
            </div>
          </div>
          <div v-if="key == 'issuer'">
            <div v-for="v, k in val" class="mt-2">
              <span class="font-bold">{{ k }}</span>: <span class="text-gray-700 font-thin">{{ v }}</span>
            </div>
          </div>
          <div v-if="key == 'hash'">
            <div v-for="v, k in val" class="mt-2">
              <span class="font-bold">{{ k }}</span>: <span class="text-gray-700 font-thin">{{ v }}</span>
            </div>
          </div>
          <div v-if="key == 'ciphers'">
            <div v-for="v, k in val" class="mt-2">
              <span class="font-bold">tls_version</span>: <span class="text-gray-700 font-thin">{{ v['tls_version'] }}</span>, <span class="text-gray-700 font-thin">{{ v['name'] }}</span>, <span>{{ v['bits'] }}</span>
            </div>
          </div>
          <div v-if="key == 'subject_alt_names'" class="mt-2">
              <span class="font-bold">subject_alt_names</span>: <span class="text-gray-700 font-thin">{{ val.join(', ') }}</span>
          </div>
          <div v-if="key != 'ciphers' && key != 'subject_alt_names' && key != 'issuer' && key != 'subject'" class="mt-2">
            <span class="font-bold">{{ key }}</span>: <span class="text-gray-700 font-thin">{{ val }}</span>
          </div>
        </li>
      </ul>
    </div>
    <div v-if="result.header" class="mt-3 md:mt-4">
      <strong class="text-lg">HTTP header</strong>
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
    generatePath(image) {
      return require('~/assets/svg/' + image.toLowerCase() + '.svg')
    },
    generateUrl(domain) {
      return 'http://' + domain
    }
  }
}
</script>
