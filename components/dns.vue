<template>
<div class="container mx-auto">
  <div v-for="result in results" class="overflow-hidden bg-white rounded w-full shadow-md leading-normal mb-6 p-3">
    <div v-if="result.domain" class="text-3xl font-medium text-purple-700">
      {{ result.domain }}
    </div>
    <div v-if="result.a_record" class="mt-4">
      <strong>A redords</strong>
      <ul class="text-xl text-gray-700 font-light">
        <li v-for="a_record in result.a_record">
          {{ a_record }}
        </li>
      </ul>
    </div>
    <div v-if="result.aaaa_record" class="mt-4">
      <strong>AAAA redords</strong>
      <ul class="text-xl text-gray-700 font-light">
        <li v-for="aaaa_record in result.aaaa_record">
          {{ aaaa_record }}
        </li>
      </ul>
    </div>
    <div v-if="result.cname_record" class="mt-4">
      <strong>CNAME redords</strong>
      <ul class="text-xl text-gray-700 font-light">
        <li v-for="cname_record in result.cname_record">
          {{ cname_record.target }}
        </li>
      </ul>
    </div>
    <div v-if="result.mx_record" class="mt-4">
      <strong>MX redords</strong>
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
  }
}
</script>
