<template>
<div id="xhr" v-if="!loadingIndicator" class="container mx-auto">
  <div v-for="result in results" class="overflow-hidden bg-white rounded shadow-md leading-normal mx-3 md:mx-0 mb-6 p-3">
    <div class="sm:flex">
      <div class="w-full sm:w-9/12 mb-4 sm:mb-0">
        <div v-if="result.domain" class="flex">
          <p class="break-all text-2xl md:text-3xl font-light md:font-medium text-purple-700">
            <nuxt-link v-bind:to="generateLink('site', result.domain)">{{ result.domain }}</nuxt-link>
          </p>
          <a v-bind:href="generateUrl(result.domain)" target="_blank" class="ml-1 mt-2 md:mt-3 text-gray-600">
            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22">
              <path d="M19 6.41L8.7 16.71a1 1 0 1 1-1.4-1.42L17.58 5H14a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V6.41zM17 14a1 1 0 0 1 2 0v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2h5a1 1 0 0 1 0 2H5v12h12v-5z" /></svg>
          </a>
        </div>
        <div v-if="result.a_record" class="mt-3 md:mt-4">
          <strong class="text-base sm:text-lg">A records</strong>
          <ul class="font-mono text-sm sm:text-base font-light">
            <li v-for="a_record in result.a_record">
              <nuxt-link v-bind:to="generateLink('ipv4', a_record)" class="text-blue-500 hover:text-blue-700">{{ a_record }}</nuxt-link>
            </li>
          </ul>
        </div>
        <div v-if="result.aaaa_record" class="mt-3 md:mt-4">
          <strong class="text-base sm:text-lg">AAAA records</strong>
          <ul class="font-mono font-light text-sm sm:text-base text-gray-700">
            <li v-for="aaaa_record in result.aaaa_record">
              <nuxt-link v-bind:to="generateLink('ipv6', aaaa_record)" class="text-blue-500 hover:text-blue-700">{{ aaaa_record }}</nuxt-link>
            </li>
          </ul>
        </div>
        <div v-if="result.cname_record" class="mt-3 md:mt-4">
          <strong class="text-base sm:text-lg">CNAME records</strong>
          <ul class="font-mono font-light text-sm sm:text-base text-gray-700">
            <li v-for="cname_record in result.cname_record" class="break-all">
              <nuxt-link v-bind:to="generateLink('cname', cname_record.target)" class="text-blue-500 hover:text-blue-700">{{ cname_record.target }}</nuxt-link>
            </li>
          </ul>
        </div>
        <div v-if="result.mx_record" class="mt-3 md:mt-4">
          <strong class="text-base sm:text-lg">MX records</strong>
          <ul class="font-mono font-light text-sm sm:text-base text-gray-700">
            <li v-for="mx_record in result.mx_record" class="break-all">
              <nuxt-link v-bind:to="generateLink('mx', mx_record.exchange)" class="text-blue-500 hover:text-blue-700">{{ mx_record.exchange }}</nuxt-link>, {{ mx_record.preference }}
            </li>
          </ul>
        </div>
        <div v-if="result.ns_record" class="mt-3 md:mt-4">
          <strong class="text-base sm:text-lg">NS records</strong>
          <ul class="font-mono font-light text-sm sm:text-base text-gray-700">
            <li v-for="ns_record in result.ns_record" class="break-all">
              <nuxt-link v-bind:to="generateLink('ns', ns_record)" class="text-blue-500 hover:text-blue-700">{{ ns_record }}</nuxt-link>
            </li>
          </ul>
        </div>
        <div v-if="result.soa_record" class="mt-3 md:mt-4">
          <strong class="text-base sm:text-lg">SOA records</strong>
          <ul class="font-mono font-light text-sm sm:text-base text-gray-700">
            <li v-for="soa_record in result.soa_record">
              {{ soa_record }}
            </li>
          </ul>
        </div>
        <div v-if="result.txt_record" class="mt-3 md:mt-4">
          <strong class="text-base sm:text-lg">TXT records</strong>
          <ul class="font-mono font-light text-sm sm:text-base text-gray-700">
            <li v-for="txt_record in result.txt_record">
              {{ txt_record }}
            </li>
          </ul>
        </div>
        <div v-if="result.banner" class="mt-3 md:mt-4">
          <strong class="text-base sm:text-lg">SSH banner</strong>
          <ul class="font-mono font-light text-sm sm:text-base text-gray-700">
            <nuxt-link v-bind:to="generateLink('banner', result.banner)" class="text-blue-500 hover:text-blue-700">{{ result.banner }}</nuxt-link>
          </ul>
        </div>
        <div v-if="result.geo" class="mt-3 md:mt-4">
          <strong class="text-base sm:text-lg">GEO data</strong>
          <ul class="font-mono text-sm sm:text-base font-light">
            <li v-for="v, k in result.geo" class="mt-1">
              <strong class="font-bold">geo_{{ k }}</strong>:
              <nuxt-link v-if="k == 'country_code'" v-bind:to="generateLink('country', v)" class="text-blue-500 hover:text-blue-700">{{ v }}</nuxt-link>
              <span><img v-if="k == 'country_code'" v-bind:src="generatePath(v)" class="inline w-9 h-4"></span>
              <nuxt-link v-if="k == 'country'" v-bind:to="generateLink('country', result.geo.country_code)" class="text-blue-500 hover:text-blue-700">{{ v }}</nuxt-link>
              <nuxt-link v-if="k == 'state'" v-bind:to="generateLink('state', v)" class="text-blue-500 hover:text-blue-700">{{ v }}</nuxt-link>
              <nuxt-link v-if="k == 'city'" v-bind:to="generateLink('city', v)" class="text-blue-500 hover:text-blue-700">{{ v }}</nuxt-link>
              <nuxt-link v-if="k == 'loc'" v-bind:to="generateLink('loc', v.coordinates[0] + ',' + v.coordinates[1])" class="text-blue-500 hover:text-blue-700">{{ v.coordinates[0] }},{{ v.coordinates[1] }}</nuxt-link>
              <span v-if="k == 'distance'" class="text-gray-700 font-thin">{{ v }}</span>
            </li>
          </ul>
        </div>
        <div v-if="result.whois" class="mt-3 md:mt-4">
          <strong class="text-base sm:text-lg">ASN whois</strong>
          <ul class="font-mono text-sm sm:text-base font-light">
            <li v-for="v, k in result.whois" class="mt-1">
              <strong class="font-bold">{{ k }}</strong>: <span v-if="k == 'asn_date'" class="text-gray-700 font-thin">{{ v }}</span>
              <nuxt-link v-if="k == 'asn_country_code'" v-bind:to="generateLink('country', v)" class="font-thin text-blue-500 hover:text-blue-700">{{ v }}</nuxt-link>
              <span><img v-if="k == 'asn_country_code'" v-bind:src="generatePath(v)" class="inline w-9 h-4"></span>
              <nuxt-link v-if="k == 'asn_description'" v-bind:to="generateLink('org', v)" class="font-thin text-blue-500 hover:text-blue-700">{{ v }}</nuxt-link>
              <nuxt-link v-if="k == 'asn_registry'" v-bind:to="generateLink('registry', v)" class="font-thin text-blue-500 hover:text-blue-700">{{ v }}</nuxt-link>
              <nuxt-link v-if="k == 'asn_cidr'" v-bind:to="generateLink('cidr', v)" class="font-thin text-blue-500 hover:text-blue-700">{{ v }}</nuxt-link>
              <nuxt-link v-if="k == 'asn'" v-bind:to="generateLink('asn', 'AS' + v)" class="font-thin text-blue-500 hover:text-blue-700">{{ v }}</nuxt-link>
            </li>
          </ul>
        </div>
        <div v-if="result.ports" class="mt-3 md:mt-4">
          <strong class="text-base sm:text-lg">Ports</strong>
          <ul class="font-mono text-sm sm:text-base font-light">
            <li v-for="port in result.ports" class="mt-1">
              <nuxt-link v-bind:to="generateLink('port', port.port)" class="text-blue-500 hover:text-blue-700">{{ port.port }}/{{ port.proto }}</nuxt-link>: <span>{{ port.status }}</span>
            </li>
          </ul>
        </div>
        <div v-if="result.ssl.not_before_formatted && result.ssl.not_after_formatted" class="mt-3 md:mt-4">
          <strong class="text-base sm:text-lg">SSL cert</strong>
          <ul class="font-mono text-sm sm:text-base font-light">
            <li v-for="val, key in result.ssl">
              <div v-if="key == 'subject'">
                <div v-for="v, k in val" class="mt-2">
                  <p v-if="k == 'country_name'">
                    <span class="font-bold">ssl_subject_country</span>:
                    <nuxt-link v-if="k == 'country_name'" v-bind:to="generateLink('country', v)" class="font-thin text-blue-500 hover:text-blue-700">{{ v }}</nuxt-link>
                    <span><img v-bind:src="generatePath(v)" class="inline w-9 h-4"></span>
                  </p>
                  <p v-if="k == 'common_name'">
                    <span class="font-bold">ssl_subject_name</span>:
                    <nuxt-link v-bind:to="generateLink('ssl', v)" class="font-thin text-blue-500 hover:text-blue-700">{{ v }}</nuxt-link>
                  </p>
                  <p v-if="k == 'organization_name'">
                    <span class="font-bold">ssl_subject_organisation</span>:
                    <nuxt-link v-bind:to="generateLink('org', v)" class="font-thin text-blue-500 hover:text-blue-700">{{ v }}</nuxt-link>
                  </p>
                  <p v-if="k == 'organizational_unit_name'">
                    <span class="font-bold">ssl_subject_organisation_unit</span>:
                    <nuxt-link v-bind:to="generateLink('org', v)" class="font-thin text-blue-500 hover:text-blue-700">{{ v }}</nuxt-link>
                  </p>
                  <p v-if="k == 'state_or_province_name'">
                    <span class="font-bold">ssl_subject_province</span>:
                    <nuxt-link v-bind:to="generateLink('state', v)" class="font-thin text-blue-500 hover:text-blue-700">{{ v }}</nuxt-link>
                  </p>
                  <p v-if="k == 'locality_name'">
                    <span class="font-bold">ssl_subject_locality</span>:
                    <nuxt-link v-bind:to="generateLink('city', v)" class="font-thin text-blue-500 hover:text-blue-700">{{ v }}</nuxt-link>
                  </p>
                </div>
              </div>
              <div v-if="key == 'issuer'">
                <div v-for="v, k in val" class="mt-2">
                  <p v-if="k == 'country_name'">
                    <span class="font-bold">ssl_issuer_country</span>:
                    <nuxt-link v-if="k == 'country_name'" v-bind:to="generateLink('country', v)" class="font-thin text-blue-500 hover:text-blue-700">{{ v }}</nuxt-link>
                    <span><img v-bind:src="generatePath(v)" class="inline w-9 h-4"></span>
                  </p>
                  <p v-if="k == 'common_name'">
                    <span class="font-bold">ssl_issuer_name</span>:
                    <nuxt-link v-bind:to="generateLink('issuer', v)" class="font-thin text-blue-500 hover:text-blue-700">{{ v }}</nuxt-link>
                  </p>
                  <p v-if="k == 'organization_name'">
                    <span class="font-bold">ssl_issuer_organisation</span>:
                    <nuxt-link v-bind:to="generateLink('issuer', v)" class="font-thin text-blue-500 hover:text-blue-700">{{ v }}</nuxt-link>
                  </p>
                  <p v-if="k == 'organizational_unit_name'">
                    <span class="font-bold">ssl_issuer_organisation_unit</span>:
                    <nuxt-link v-bind:to="generateLink('org', v)" class="font-thin text-blue-500 hover:text-blue-700">{{ v }}</nuxt-link>
                  </p>
                  <p v-if="k == 'state_or_province_name'">
                    <span class="font-bold">ssl_issuer_province</span>:
                    <nuxt-link v-bind:to="generateLink('state', v)" class="font-thin text-blue-500 hover:text-blue-700">{{ v }}</nuxt-link>
                  </p>
                  <p v-if="k == 'locality_name'">
                    <span class="font-bold">ssl_issuer_locality</span>:
                    <nuxt-link v-bind:to="generateLink('city', v)" class="font-thin text-blue-500 hover:text-blue-700">{{ v }}</nuxt-link>
                  </p>
                </div>
              </div>
              <div v-if="key == 'subject_alt_names'" class="mt-2">
                <span class="font-bold">ssl_subject_alt_names</span>:
                <span v-for="v, i in val">
                  <nuxt-link v-bind:to="generateLink('ssl', v)" class="font-thin text-blue-500 hover:text-blue-700">{{ v }}</nuxt-link><span v-if="i !== val.length - 1">, </span>
                </span>
              </div>
              <div v-if="key == 'not_before_formatted'" class="mt-2">
                <span class="font-bold">ssl_not_before</span>:
                <nuxt-link v-bind:to="generateLink('before', val)" class="font-thin text-blue-500 hover:text-blue-700">{{ val }}</nuxt-link>
              </div>
              <div v-if="key == 'not_after_formatted'" class="mt-2">
                <span class="font-bold">ssl_not_after</span>:
                <nuxt-link v-bind:to="generateLink('after', val)" class="font-thin text-blue-500 hover:text-blue-700">{{ val }}</nuxt-link>
              </div>
              <div v-if="key != 'not_after_formatted' && key != 'not_before_formatted' && key != 'not_before' && key != 'not_after' && key != 'ciphers' && key != 'subject_alt_names' && key != 'issuer' && key != 'subject'" class="mt-2">
                <p v-if="key == 'ca_issuers'">
                  <span class="font-bold">ssl_ca_issuer</span>:
                  <nuxt-link v-bind:to="generateLink('ca', val)" class="font-thin text-blue-500 hover:text-blue-700">{{ val }}</nuxt-link>
                </p>
                <p v-if="key == 'crl_distribution_points'">
                  <span class="font-bold">ssl_crl_distribution</span>:
                  <nuxt-link v-bind:to="generateLink('crl', val)" class="font-thin text-blue-500 hover:text-blue-700">{{ val }}</nuxt-link>
                </p>
                <p v-if="key == 'ocsp'">
                  <span class="font-bold">ssl_ocsp</span>:
                  <nuxt-link v-bind:to="generateLink('ocsp', val)" class="font-thin text-blue-500 hover:text-blue-700">{{ val }}</nuxt-link>
                </p>
                <p v-if="key == 'serial'">
                  <span class="font-bold">ssl_serial</span>:
                  <span class="text-gray-700 font-thin">{{ val }}</span>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div v-if="result.qrcode" class="w-full sm:w-3/12 sm:text-right mt-1 mr-1">
        <strong class="block text-lg mb-2">QR code</strong>
        <img class="w-1/2 sm:w-2/3 lg:w-1/2 sm:float-right" v-bind:src="generateCode(result.qrcode)">
      </div>
    </div>
    <div v-if="result.header" class="mt-3 md:mt-4">
      <strong class="text-base sm:text-lg">HTTP header</strong>
      <code class="font-mono text-sm sm:text-base">
        <ul class="bg-gray-300 overflow-scroll px-3 pt-3">
          <li v-for="val, key in result.header">
            <span class="font-bold">{{ key }}</span>: <span v-if="key !== 'x-powered-by' && key !== 'status' && key !== 'server'" class="font-thin">{{ val }}</span>
            <nuxt-link v-if="key === 'status'" v-bind:to="generateLink('status', val)" class="text-blue-500 hover:text-blue-700">{{ val }}</nuxt-link>
            <nuxt-link v-if="key === 'server'" v-bind:to="generateLink('server', val)" class="text-blue-500 hover:text-blue-700">{{ val }}</nuxt-link>
            <nuxt-link v-if="key === 'x-powered-by'" v-bind:to="generateLink('service', val)" class="text-blue-500 hover:text-blue-700">{{ val }}</nuxt-link>
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
  computed: {
    loadingIndicator() {
      return this.$store.state.loading
    }
  },
  methods: {
    generatePath(image) {
      return require('~/assets/svg/' + image.toLowerCase() + '.svg')
    },
    generateCode(base64) {
      return 'data:image/png;base64,' + base64
    },
    generateUrl(domain) {
      return 'http://' + domain
    },
    generateLink(prefix, query) {
      return '/' + prefix + '/' + encodeURIComponent(query)
    }
  }
}
</script>
