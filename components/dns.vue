<template>
  <div id="xhr" v-if="!loadingIndicator" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
    <div class="glass-panel rounded-3xl border border-white/10 px-5 py-6 shadow-glass sm:px-8">
      <h1 class="text-2xl font-light tracking-wide text-white/90">
        <span v-if="totalCount > 0" class="block">
          Found <strong class="font-bold text-white">{{ totalCount }}</strong> DNS {{ totalCount === 1 ? 'result' : 'results' }}
        </span>
        <span v-else class="block text-white/70">No DNS results found</span>
        <span class="mt-2 block pt-2 text-sm font-normal text-white/60 sm:text-base">
          Showing {{ visibleCount }} {{ visibleCount === 1 ? 'result' : 'results' }} · Page {{ currentPage }}
        </span>
      </h1>
      <div v-for="result in results"
        class="neon-divider mt-6 overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-5 shadow-glass transition duration-300 hover:border-cosmic-aurora/60 hover:shadow-glow">
      <div class="sm:flex">
        <div class="w-full sm:w-9/12 mb-4 sm:mb-0">
          <div v-if="result.domain" class="flex">
            <p class="break-all text-2xl md:text-3xl font-light md:font-medium text-white">
              <nuxt-link v-bind:to="generateLink('site', result.domain)"
                v-bind:class="{ 'rounded-full border border-white/15 bg-white/10 px-2 py-1': prefix == 'site' }">{{ result.domain }}</nuxt-link>
            </p>
            <a v-bind:href="generateUrl(result.domain)" target="_blank" class="ml-1 mt-2 md:mt-3 text-white/60">
              <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22">
                <path
                  d="M19 6.41L8.7 16.71a1 1 0 1 1-1.4-1.42L17.58 5H14a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V6.41zM17 14a1 1 0 0 1 2 0v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2h5a1 1 0 0 1 0 2H5v12h12v-5z" />
              </svg>
            </a>
          </div>
          <div v-if="result.a_record" class="mt-3 md:mt-4">
            <strong class="text-base sm:text-lg">A records</strong>
            <ul class="font-mono text-sm sm:text-base font-light">
              <li v-for="a_record in result.a_record">
                <nuxt-link v-bind:to="generateLink('ipv4', a_record)"
                  v-bind:class="{ 'rounded-full border border-white/15 bg-white/10 px-2 py-1': filter == a_record && prefix == 'ipv4' }"
                  class="text-cosmic-aurora hover:text-cosmic-rose">{{ a_record }}</nuxt-link>
              </li>
            </ul>
          </div>
          <div v-if="result.aaaa_record" class="mt-3 md:mt-4">
            <strong class="text-base sm:text-lg">AAAA records</strong>
            <ul class="font-mono font-light text-sm sm:text-base text-white/70">
              <li v-for="aaaa_record in result.aaaa_record">
                <nuxt-link v-bind:to="generateLink('ipv6', aaaa_record)"
                  v-bind:class="{ 'rounded-full border border-white/15 bg-white/10 px-2 py-1': filter == aaaa_record && prefix == 'ipv6' }"
                  class="text-cosmic-aurora hover:text-cosmic-rose">{{ aaaa_record }}</nuxt-link>
              </li>
            </ul>
          </div>
          <div v-if="result.cname_record" class="mt-3 md:mt-4">
            <strong class="text-base sm:text-lg">CNAME records</strong>
            <ul class="font-mono font-light text-sm sm:text-base text-white/70">
              <li v-for="cname_record in result.cname_record" class="break-all">
                <nuxt-link v-bind:to="generateLink('cname', cname_record.target)"
                  v-bind:class="{ 'rounded-full border border-white/15 bg-white/10 px-2 py-1': filter == cname_record.target && prefix == 'cname' }"
                  class="text-cosmic-aurora hover:text-cosmic-rose">{{ cname_record.target }}</nuxt-link>
              </li>
            </ul>
          </div>
          <div v-if="result.mx_record" class="mt-3 md:mt-4">
            <strong class="text-base sm:text-lg">MX records</strong>
            <ul class="font-mono font-light text-sm sm:text-base text-white/70">
              <li v-for="mx_record in result.mx_record" class="break-all">
                <nuxt-link v-bind:to="generateLink('mx', mx_record.exchange)"
                  v-bind:class="{ 'rounded-full border border-white/15 bg-white/10 px-2 py-1': filter == mx_record.exchange && prefix == 'mx' }"
                  class="text-cosmic-aurora hover:text-cosmic-rose">{{ mx_record.exchange }}</nuxt-link>, {{
                    mx_record.preference }}
              </li>
            </ul>
          </div>
          <div v-if="result.ns_record" class="mt-3 md:mt-4">
            <strong class="text-base sm:text-lg">NS records</strong>
            <ul class="font-mono font-light text-sm sm:text-base text-white/70">
              <li v-for="ns_record in result.ns_record" class="break-all">
                <nuxt-link v-bind:to="generateLink('ns', ns_record)"
                  v-bind:class="{ 'rounded-full border border-white/15 bg-white/10 px-2 py-1': filter == ns_record && prefix == 'ns' }"
                  class="text-cosmic-aurora hover:text-cosmic-rose">{{ ns_record }}</nuxt-link>
              </li>
            </ul>
          </div>
          <div v-if="result.soa_record" class="mt-3 md:mt-4">
            <strong class="text-base sm:text-lg">SOA records</strong>
            <ul class="font-mono font-light text-sm sm:text-base text-white/70">
              <li v-for="soa_record in result.soa_record">
                {{ soa_record }}
              </li>
            </ul>
          </div>
          <div v-if="result.txt_record" class="mt-3 md:mt-4">
            <strong class="text-base sm:text-lg">TXT records</strong>
            <ul class="font-mono font-light text-sm sm:text-base text-white/70">
              <li v-for="txt_record in result.txt_record">
                {{ txt_record }}
              </li>
            </ul>
          </div>
          <div v-if="result.banner" class="mt-3 md:mt-4">
            <strong class="text-base sm:text-lg">SSH banner</strong>
            <ul class="font-mono font-light text-sm sm:text-base text-white/70">
              <li>
                <nuxt-link v-bind:to="generateLink('banner', result.banner)"
                  v-bind:class="{ 'rounded-full border border-white/15 bg-white/10 px-2 py-1': filter == result.banner && prefix == 'banner' }"
                  class="text-cosmic-aurora hover:text-cosmic-rose">{{ result.banner }}</nuxt-link>
              </li>
            </ul>
          </div>
          <div v-if="result.geo" class="mt-3 md:mt-4">
            <strong class="text-base sm:text-lg">GEO data</strong>
            <ul class="font-mono text-sm sm:text-base font-light">
              <li v-for="v, k in result.geo" class="mt-1">
                <strong class="font-bold">geo_{{ k }}</strong>:
                <span v-bind:class="{ 'rounded-full border border-white/15 bg-white/10 px-2 py-1': filter == v && prefix == 'country' }">
                  <nuxt-link v-if="k == 'country_code'" v-bind:to="generateLink('country', v)"
                    class="text-cosmic-aurora hover:text-cosmic-rose">{{ v }}</nuxt-link>
                  <span><img v-if="k == 'country_code'" v-bind:src="generatePath(v)" class="inline w-9 h-4"></span>
                </span>
                <nuxt-link v-if="k == 'country'" v-bind:to="generateLink('country', result.geo.country_code)"
                  class="text-cosmic-aurora hover:text-cosmic-rose">{{ v }}</nuxt-link>
                <nuxt-link v-if="k == 'state'" v-bind:to="generateLink('state', v)"
                  v-bind:class="{ 'rounded-full border border-white/15 bg-white/10 px-2 py-1': filter == v && prefix == 'state' }"
                  class="text-cosmic-aurora hover:text-cosmic-rose">{{ v }}</nuxt-link>
                <nuxt-link v-if="k == 'city'" v-bind:to="generateLink('city', v)"
                  v-bind:class="{ 'rounded-full border border-white/15 bg-white/10 px-2 py-1': filter == v && prefix == 'city' }"
                  class="text-cosmic-aurora hover:text-cosmic-rose">{{ v }}</nuxt-link>
                <nuxt-link v-if="k == 'loc'" v-bind:to="generateLink('loc', v.coordinates[0] + ',' + v.coordinates[1])"
                  v-bind:class="{ 'rounded-full border border-white/15 bg-white/10 px-2 py-1': prefix == 'loc' }"
                  class="text-cosmic-aurora hover:text-cosmic-rose">{{ v.coordinates[0] }},{{ v.coordinates[1] }}</nuxt-link>
                <span v-if="k == 'distance'" class="text-white/70 font-thin">{{ v }}</span>
              </li>
            </ul>
          </div>
          <div v-if="result.whois" class="mt-3 md:mt-4">
            <strong class="text-base sm:text-lg">ASN whois</strong>
            <ul class="font-mono text-sm sm:text-base font-light">
              <li v-for="v, k in result.whois" class="mt-1">
                <strong class="font-bold">{{ k }}</strong>: <span v-if="k == 'asn_date'"
                  class="text-white/70 font-thin">{{ v }}</span>
                <span v-bind:class="{ 'rounded-full border border-white/15 bg-white/10 px-2 py-1': filter == v && prefix == 'country' }">
                  <nuxt-link v-if="k == 'asn_country_code'" v-bind:to="generateLink('country', v)"
                    class="font-thin text-cosmic-aurora hover:text-cosmic-rose">{{ v }}</nuxt-link>
                  <span><img v-if="k == 'asn_country_code'" v-bind:src="generatePath(v)" class="inline w-9 h-4"></span>
                </span>
                <nuxt-link v-if="k == 'asn_description'" v-bind:to="generateLink('org', v)"
                  v-bind:class="{ 'rounded-full border border-white/15 bg-white/10 px-2 py-1': filter == v && prefix == 'org' }"
                  class="font-thin text-cosmic-aurora hover:text-cosmic-rose">{{ v }}</nuxt-link>
                <nuxt-link v-if="k == 'asn_registry'" v-bind:to="generateLink('registry', v)"
                  v-bind:class="{ 'rounded-full border border-white/15 bg-white/10 px-2 py-1': filter == v && prefix == 'registry' }"
                  class="font-thin text-cosmic-aurora hover:text-cosmic-rose">{{ v }}</nuxt-link>
                <nuxt-link v-if="k == 'asn_cidr'" v-bind:to="generateLink('cidr', v)"
                  v-bind:class="{ 'rounded-full border border-white/15 bg-white/10 px-2 py-1': prefix == 'cidr' }"
                  class="font-thin text-cosmic-aurora hover:text-cosmic-rose">{{ v }}</nuxt-link>
                <nuxt-link v-if="k == 'asn'" v-bind:to="generateLink('asn', v)"
                  v-bind:class="{ 'rounded-full border border-white/15 bg-white/10 px-2 py-1': prefix == 'asn' }"
                  class="font-thin text-cosmic-aurora hover:text-cosmic-rose">{{ v }}</nuxt-link>
              </li>
            </ul>
          </div>
          <div v-if="result.ports" class="mt-3 md:mt-4">
            <strong class="text-base sm:text-lg">Ports</strong>
            <ul class="font-mono text-sm sm:text-base font-light">
              <li v-for="port in result.ports" class="mt-1">
                <nuxt-link v-bind:to="generateLink('port', port.port)"
                  v-bind:class="{ 'rounded-full border border-white/15 bg-white/10 px-2 py-1': filter == port.port && prefix == 'port' }"
                  class="text-cosmic-aurora hover:text-cosmic-rose">{{ port.port }}/{{ port.proto }}</nuxt-link>: <span>{{
                    port.status }}</span>
              </li>
            </ul>
          </div>
          <div v-if="result.ssl" class="mt-3 md:mt-4">
            <strong class="text-base sm:text-lg">SSL cert</strong>
            <ul class="font-mono text-sm sm:text-base font-light">
              <li v-for="val, key in result.ssl">
                <div v-if="key == 'subject'">
                  <div v-for="v, k in val" class="mt-1">
                    <p v-if="k == 'country_name'">
                      <span class="font-bold">ssl_subject_country</span>:
                      <span v-bind:class="{ 'rounded-full border border-white/15 bg-white/10 px-2 py-1': filter == v && prefix == 'country' }">
                        <nuxt-link v-if="k == 'country_name'" v-bind:to="generateLink('country', v)"
                          class="font-thin text-cosmic-aurora hover:text-cosmic-rose">{{ v }}</nuxt-link>
                        <span><img v-bind:src="generatePath(v)" class="inline w-9 h-4"></span>
                      </span>
                    </p>
                    <p v-if="k == 'common_name'">
                      <span class="font-bold">ssl_subject_name</span>:
                      <nuxt-link v-bind:to="generateLink('ssl', v)"
                        v-bind:class="{ 'rounded-full border border-white/15 bg-white/10 px-2 py-1': filter == v && prefix == 'ssl' }"
                        class="font-thin text-cosmic-aurora hover:text-cosmic-rose">{{ v }}</nuxt-link>
                    </p>
                    <p v-if="k == 'organization_name'">
                      <span class="font-bold">ssl_subject_organisation</span>:
                      <nuxt-link v-bind:to="generateLink('org', v)"
                        v-bind:class="{ 'rounded-full border border-white/15 bg-white/10 px-2 py-1': filter == v && prefix == 'org' }"
                        class="font-thin text-cosmic-aurora hover:text-cosmic-rose">{{ v }}</nuxt-link>
                    </p>
                    <p v-if="k == 'organizational_unit_name'">
                      <span class="font-bold">ssl_subject_organisation_unit</span>:
                      <nuxt-link v-bind:to="generateLink('unit', v)"
                        v-bind:class="{ 'rounded-full border border-white/15 bg-white/10 px-2 py-1': filter == v && prefix == 'unit' }"
                        class="font-thin text-cosmic-aurora hover:text-cosmic-rose">{{ v }}</nuxt-link>
                    </p>
                    <p v-if="k == 'state_or_province_name'">
                      <span class="font-bold">ssl_subject_province</span>:
                      <nuxt-link v-bind:to="generateLink('state', v)"
                        v-bind:class="{ 'rounded-full border border-white/15 bg-white/10 px-2 py-1': filter == v && prefix == 'state' }"
                        class="font-thin text-cosmic-aurora hover:text-cosmic-rose">{{ v }}</nuxt-link>
                    </p>
                    <p v-if="k == 'locality_name'">
                      <span class="font-bold">ssl_subject_locality</span>:
                      <nuxt-link v-bind:to="generateLink('city', v)"
                        v-bind:class="{ 'rounded-full border border-white/15 bg-white/10 px-2 py-1': filter == v && prefix == 'city' }"
                        class="font-thin text-cosmic-aurora hover:text-cosmic-rose">{{ v }}</nuxt-link>
                    </p>
                  </div>
                </div>
                <div v-if="key == 'issuer'">
                  <div v-for="v, k in val" class="mt-1">
                    <p v-if="k == 'country_name'">
                      <span class="font-bold">ssl_issuer_country</span>:
                      <nuxt-link v-if="k == 'country_name'" v-bind:to="generateLink('country', v)"
                        class="font-thin text-cosmic-aurora hover:text-cosmic-rose">{{ v }}</nuxt-link>
                      <span><img v-bind:src="generatePath(v)" class="inline w-9 h-4"></span>
                    </p>
                    <p v-if="k == 'common_name'">
                      <span class="font-bold">ssl_issuer_name</span>:
                      <nuxt-link v-bind:to="generateLink('issuer', v)"
                        v-bind:class="{ 'rounded-full border border-white/15 bg-white/10 px-2 py-1': filter == v && prefix == 'issuer' }"
                        class="font-thin text-cosmic-aurora hover:text-cosmic-rose">{{ v }}</nuxt-link>
                    </p>
                    <p v-if="k == 'organization_name'">
                      <span class="font-bold">ssl_issuer_organisation</span>:
                      <nuxt-link v-bind:to="generateLink('issuer', v)"
                        v-bind:class="{ 'rounded-full border border-white/15 bg-white/10 px-2 py-1': filter == v && prefix == 'issuer' }"
                        class="font-thin text-cosmic-aurora hover:text-cosmic-rose">{{ v }}</nuxt-link>
                    </p>
                    <p v-if="k == 'organizational_unit_name'">
                      <span class="font-bold">ssl_issuer_organisation_unit</span>:
                      <nuxt-link v-bind:to="generateLink('unit', v)"
                        v-bind:class="{ 'rounded-full border border-white/15 bg-white/10 px-2 py-1': filter == v && prefix == 'unit' }"
                        class="font-thin text-cosmic-aurora hover:text-cosmic-rose">{{ v }}</nuxt-link>
                    </p>
                    <p v-if="k == 'state_or_province_name'">
                      <span class="font-bold">ssl_issuer_province</span>:
                      <nuxt-link v-bind:to="generateLink('state', v)"
                        v-bind:class="{ 'rounded-full border border-white/15 bg-white/10 px-2 py-1': filter == v && prefix == 'state' }"
                        class="font-thin text-cosmic-aurora hover:text-cosmic-rose">{{ v }}</nuxt-link>
                    </p>
                    <p v-if="k == 'locality_name'">
                      <span class="font-bold">ssl_issuer_locality</span>:
                      <nuxt-link v-bind:to="generateLink('city', v)"
                        v-bind:class="{ 'rounded-full border border-white/15 bg-white/10 px-2 py-1': filter == v && prefix == 'city' }"
                        class="font-thin text-cosmic-aurora hover:text-cosmic-rose">{{ v }}</nuxt-link>
                    </p>
                  </div>
                </div>
                <div v-if="key == 'subject_alt_names'" class="mt-1">
                  <span class="font-bold">ssl_subject_alt_names</span>:
                  <span v-for="v, i in val">
                    <nuxt-link v-bind:to="generateLink('ssl', v)"
                      v-bind:class="{ 'rounded-full border border-white/15 bg-white/10 px-2 py-1': filter == v && prefix == 'ssl' }"
                      class="font-thin text-cosmic-aurora hover:text-cosmic-rose">{{ v }}</nuxt-link><span
                      v-if="i !== val.length - 1">, </span>
                  </span>
                </div>
                <div v-if="key == 'not_before'" class="mt-1">
                  <span class="font-bold">ssl_not_before</span>:
                  <nuxt-link v-bind:to="generateLink('before', val)"
                    v-bind:class="{ 'rounded-full border border-white/15 bg-white/10 px-2 py-1': prefix == 'before' }"
                    class="font-thin text-cosmic-aurora hover:text-cosmic-rose">{{ convertToLocalDatetime(val) }}</nuxt-link>
                </div>
                <div v-if="key == 'not_after'" class="mt-1">
                  <span class="font-bold">ssl_not_after</span>:
                  <nuxt-link v-bind:to="generateLink('after', val)"
                    v-bind:class="{ 'rounded-full border border-white/15 bg-white/10 px-2 py-1': prefix == 'after' }"
                    class="font-thin text-cosmic-aurora hover:text-cosmic-rose">{{ convertToLocalDatetime(val) }}</nuxt-link>
                </div>
                <div
                  v-if="key != 'ssl_not_before' && key != 'ssl_not_after' && key != 'ciphers' && key != 'subject_alt_names' && key != 'issuer' && key != 'subject'"
                  class="mt-1">
                  <p v-if="key == 'ca_issuers'">
                    <span class="font-bold">ssl_ca_issuer</span>:
                    <nuxt-link v-bind:to="generateLink('ca', val)"
                      v-bind:class="{ 'rounded-full border border-white/15 bg-white/10 px-2 py-1': filter == val && prefix == 'ca' }"
                      class="font-thin text-cosmic-aurora hover:text-cosmic-rose">{{ val }}</nuxt-link>
                  </p>
                  <p v-if="key == 'crl_distribution_points'">
                    <span class="font-bold">ssl_crl_distribution</span>:
                    <nuxt-link v-bind:to="generateLink('crl', val)"
                      v-bind:class="{ 'rounded-full border border-white/15 bg-white/10 px-2 py-1': filter == val && prefix == 'crl' }"
                      class="font-thin text-cosmic-aurora hover:text-cosmic-rose">{{ val }}</nuxt-link>
                  </p>
                  <p v-if="key == 'ocsp'">
                    <span class="font-bold">ssl_ocsp</span>:
                    <nuxt-link v-bind:to="generateLink('ocsp', val)"
                      v-bind:class="{ 'rounded-full border border-white/15 bg-white/10 px-2 py-1': filter == val && prefix == 'ocsp' }"
                      class="font-thin text-cosmic-aurora hover:text-cosmic-rose">{{ val }}</nuxt-link>
                  </p>
                  <p v-if="key == 'serial'">
                    <span class="font-bold">ssl_serial</span>:
                    <span class="text-white/70 font-thin">{{ val }}</span>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div v-if="result.qrcode" class="w-full sm:w-3/12 sm:text-right mt-1 mr-1">
          <strong class="block text-lg mb-2">QR code</strong>
          <div class="inline-block rounded-2xl bg-white p-2">
            <img class="w-32 sm:w-36" :src="generateCode(result.qrcode)" alt="QR code" />
          </div>
        </div>
      </div>
      <div v-if="result.header" class="mt-3 md:mt-4">
        <strong class="text-base sm:text-lg">HTTP header</strong>
        <code class="font-mono text-sm sm:text-base">
        <ul class="bg-white/10 overflow-scroll px-3 pt-3">
          <li v-for="val, key in result.header">
            <span class="font-bold">{{ key }}</span>: <span v-if="key !== 'x-powered-by' && key !== 'status' && key !== 'server'" class="font-thin">{{ val }}</span>
            <nuxt-link v-if="key === 'status'" v-bind:to="generateLink('status', val)" v-bind:class="{ 'rounded-full border border-white/15 bg-white/10 px-2 py-1': filter == val && prefix == 'status' }" class="text-cosmic-aurora hover:text-cosmic-rose">{{ val }}</nuxt-link>
            <nuxt-link v-if="key === 'server'" v-bind:to="generateLink('server', val)" v-bind:class="{ 'rounded-full border border-white/15 bg-white/10 px-2 py-1': filter == val && prefix == 'server' }" class="text-cosmic-aurora hover:text-cosmic-rose">{{ val }}</nuxt-link>
            <nuxt-link v-if="key === 'x-powered-by'" v-bind:to="generateLink('service', val)" v-bind:class="{ 'rounded-full border border-white/15 bg-white/10 px-2 py-1': filter == val && prefix == 'service' }" class="text-cosmic-aurora hover:text-cosmic-rose">{{ val }}</nuxt-link>
          </li>
        </ul>
      </code>
      </div>
    </div>
    </div>

    <div class="mt-8 flex justify-center space-x-4">
      <button
        @click="$emit('prevPage')"
        class="rounded-full border border-white/20 bg-white/10 px-6 py-2 text-sm font-semibold uppercase tracking-wider text-white transition hover:border-cosmic-aurora/60 hover:text-cosmic-aurora disabled:cursor-not-allowed disabled:border-white/5 disabled:text-white/30"
        :disabled="!hasPrevious"
      >
        Previous
      </button>
      <button
        @click="$emit('nextPage')"
        class="rounded-full border border-white/20 bg-gradient-to-r from-cosmic-flare/60 to-cosmic-aurora/50 px-6 py-2 text-sm font-semibold uppercase tracking-wider text-white transition hover:shadow-glow disabled:cursor-not-allowed disabled:opacity-50"
        :disabled="!hasNext"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from '#app'
import { storeToRefs } from 'pinia'
import { useMainStore } from '~/stores/main'

interface DnsResult {
  [key: string]: any
}

const props = withDefaults(
  defineProps<{
    results: DnsResult[]
    currentPage: number
    hasNext?: boolean
    hasPrevious?: boolean
    total?: number
  }>(),
  {
    results: () => [],
    currentPage: 1,
    hasNext: false,
    hasPrevious: false,
    total: 0
  }
)

const $emit = defineEmits(['nextPage', 'prevPage'])

const mainStore = useMainStore()
const { loading: loadingIndicator } = storeToRefs(mainStore)
const route = useRoute()

const visibleCount = computed(() => props.results.length)
const totalCount = computed(() => (props.total && props.total > 0 ? props.total : props.results.length))

const prefix = computed(() => {
  const path = decodeURIComponent(route.fullPath ?? '')

  if (!path.startsWith('/')) {
    return ''
  }

  const segments = path.split('/').filter(Boolean)
  const [firstSegment, secondSegment] = segments

  if (firstSegment === 'search' && secondSegment) {
    return decodeURIComponent(secondSegment).split(':')[0] ?? ''
  }

  return firstSegment ?? ''
})

const filter = computed(() => {
  const path = decodeURIComponent(route.fullPath ?? '')

  if (!path.startsWith('/')) {
    return ''
  }

  const segments = path.split('/').filter(Boolean)
  const [, ...rest] = segments
  const query = rest.join('/')

  if (segments[0] === 'search') {
    const decoded = decodeURIComponent(query)
    return decoded.split(':').slice(1).join(':')
  }

  return query
})

const generatePath = (image?: string) => `/svg/${(image ?? 'unknown').toLowerCase()}.svg`
const generateCode = (base64: string) => `data:image/png;base64,${base64}`
const generateUrl = (domain: string) => `http://${domain}`
const generateLink = (linkPrefix: string, query: string) => `/${linkPrefix}/${encodeURIComponent(query)}`
const convertToLocalDatetime = (isoTimestamp: string) => {
  const date = new Date(isoTimestamp)
  return date.toLocaleString('de-DE', { timeZone: 'Europe/Berlin' })
}
</script>
