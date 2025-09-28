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
          <div v-if="getStringRecords(result.a_record).length" class="mt-3 md:mt-4">
            <strong class="text-base sm:text-lg">A records</strong>
            <ul class="font-mono text-sm sm:text-base font-light">
              <li v-for="a_record in getStringRecords(result.a_record)" :key="`a-${a_record}`">
                <nuxt-link v-bind:to="generateLink('ipv4', a_record)"
                  v-bind:class="{ 'rounded-full border border-white/15 bg-white/10 px-2 py-1': filter == a_record && prefix == 'ipv4' }"
                  class="text-cosmic-aurora hover:text-cosmic-rose">{{ a_record }}</nuxt-link>
              </li>
            </ul>
          </div>
          <div v-if="getStringRecords(result.aaaa_record).length" class="mt-3 md:mt-4">
            <strong class="text-base sm:text-lg">AAAA records</strong>
            <ul class="font-mono font-light text-sm sm:text-base text-white/70">
              <li v-for="aaaa_record in getStringRecords(result.aaaa_record)" :key="`aaaa-${aaaa_record}`">
                <nuxt-link v-bind:to="generateLink('ipv6', aaaa_record)"
                  v-bind:class="{ 'rounded-full border border-white/15 bg-white/10 px-2 py-1': filter == aaaa_record && prefix == 'ipv6' }"
                  class="text-cosmic-aurora hover:text-cosmic-rose">{{ aaaa_record }}</nuxt-link>
              </li>
            </ul>
          </div>
          <div v-if="getCnameRecords(result.cname_record).length" class="mt-3 md:mt-4">
            <strong class="text-base sm:text-lg">CNAME records</strong>
            <ul class="font-mono font-light text-sm sm:text-base text-white/70">
              <li v-for="cname_record in getCnameRecords(result.cname_record)" :key="`cname-${cname_record.target}`" class="break-all">
                <nuxt-link v-bind:to="generateLink('cname', cname_record.target)"
                  v-bind:class="{ 'rounded-full border border-white/15 bg-white/10 px-2 py-1': filter == cname_record.target && prefix == 'cname' }"
                  class="text-cosmic-aurora hover:text-cosmic-rose">{{ cname_record.target }}</nuxt-link>
              </li>
            </ul>
          </div>
          <div v-if="getStringRecords(result.txt_record).length" class="mt-3 md:mt-4">
            <strong class="text-base sm:text-lg">TXT records</strong>
            <ul class="font-mono font-light text-sm sm:text-base text-white/70">
              <li v-for="txt_record in getStringRecords(result.txt_record)" :key="`txt-${txt_record}`">
                {{ txt_record }}
              </li>
            </ul>
          </div>
          <div v-if="getMxRecords(result.mx_record).length" class="mt-3 md:mt-4">
            <strong class="text-base sm:text-lg">MX records</strong>
            <ul class="font-mono font-light text-sm sm:text-base text-white/70">
              <li v-for="mx_record in getMxRecords(result.mx_record)" :key="`mx-${mx_record.exchange}`" class="break-all">
                <nuxt-link v-bind:to="generateLink('mx', mx_record.exchange)"
                  v-bind:class="{ 'rounded-full border border-white/15 bg-white/10 px-2 py-1': filter == mx_record.exchange && prefix == 'mx' }"
                  class="text-cosmic-aurora hover:text-cosmic-rose">{{ mx_record.exchange }}</nuxt-link>
                <span v-if="mx_record.preference !== undefined && mx_record.preference !== null">, {{ mx_record.preference }}</span>
              </li>
            </ul>
          </div>
          <div v-if="getStringRecords(result.ns_record).length" class="mt-3 md:mt-4">
            <strong class="text-base sm:text-lg">NS records</strong>
            <ul class="font-mono font-light text-sm sm:text-base text-white/70">
              <li v-for="ns_record in getStringRecords(result.ns_record)" :key="`ns-${ns_record}`" class="break-all">
                <nuxt-link v-bind:to="generateLink('ns', ns_record)"
                  v-bind:class="{ 'rounded-full border border-white/15 bg-white/10 px-2 py-1': filter == ns_record && prefix == 'ns' }"
                  class="text-cosmic-aurora hover:text-cosmic-rose">{{ ns_record }}</nuxt-link>
              </li>
            </ul>
          </div>
          <div v-if="getStringRecords(result.soa_record).length" class="mt-3 md:mt-4">
            <strong class="text-base sm:text-lg">SOA records</strong>
            <ul class="font-mono font-light text-sm sm:text-base text-white/70">
              <li v-for="soa_record in getStringRecords(result.soa_record)" :key="`soa-${soa_record}`">
                {{ soa_record }}
              </li>
            </ul>
          </div>
          <div v-if="getStringRecords(result.txt_record).length" class="mt-3 md:mt-4">
            <strong class="text-base sm:text-lg">TXT records</strong>
            <ul class="font-mono font-light text-sm sm:text-base text-white/70">
              <li v-for="txt_record in getStringRecords(result.txt_record)" :key="`txt-${txt_record}`">
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
          <div v-if="getGeoEntries(result.geo).length" class="mt-3 md:mt-4">
            <strong class="text-base sm:text-lg">GEO data</strong>
            <ul class="font-mono text-sm sm:text-base font-light">
              <li v-for="{ key, value } in getGeoEntries(result.geo)" :key="key" class="mt-1">
                <strong class="font-bold">geo_{{ key }}</strong>:
                <span v-bind:class="{ 'rounded-full border border-white/15 bg-white/10 px-2 py-1': filter == value && prefix == 'country' }">
                  <nuxt-link v-if="key == 'country_code'" v-bind:to="generateLink('country', value as string)"
                    class="text-cosmic-aurora hover:text-cosmic-rose">{{ value }}</nuxt-link>
                  <span><img v-if="key == 'country_code'" v-bind:src="generatePath(value as string)" class="inline w-9 h-4"></span>
                </span>
                <nuxt-link v-if="key == 'country'" v-bind:to="generateLink('country', result.geo?.country_code ?? value as string)"
                  class="text-cosmic-aurora hover:text-cosmic-rose">{{ value }}</nuxt-link>
                <nuxt-link v-if="key == 'state'" v-bind:to="generateLink('state', value as string)"
                  v-bind:class="{ 'rounded-full border border-white/15 bg-white/10 px-2 py-1': filter == value && prefix == 'state' }"
                  class="text-cosmic-aurora hover:text-cosmic-rose">{{ value }}</nuxt-link>
                <nuxt-link v-if="key == 'city'" v-bind:to="generateLink('city', value as string)"
                  v-bind:class="{ 'rounded-full border border-white/15 bg-white/10 px-2 py-1': filter == value && prefix == 'city' }"
                  class="text-cosmic-aurora hover:text-cosmic-rose">{{ value }}</nuxt-link>
                <nuxt-link v-if="key == 'loc' && isLocEntry(value)"
                  v-bind:to="generateLink('loc', `${value.coordinates[0]},${value.coordinates[1]}`)"
                  v-bind:class="{ 'rounded-full border border-white/15 bg-white/10 px-2 py-1': prefix == 'loc' }"
                  class="text-cosmic-aurora hover:text-cosmic-rose">{{ value.coordinates[0] }},{{ value.coordinates[1] }}</nuxt-link>
                <span v-if="key == 'distance'" class="text-white/70 font-thin">{{ value }}</span>
              </li>
            </ul>
          </div>
          <div v-if="getWhoisEntries(result.whois).length" class="mt-3 md:mt-4">
            <strong class="text-base sm:text-lg">ASN whois</strong>
            <ul class="font-mono text-sm sm:text-base font-light">
              <li v-for="{ key, value } in getWhoisEntries(result.whois)" :key="key" class="mt-1">
                <strong class="font-bold">{{ key }}</strong>: <span v-if="key == 'asn_date'"
                  class="text-white/70 font-thin">{{ value }}</span>
                <span v-bind:class="{ 'rounded-full border border-white/15 bg-white/10 px-2 py-1': filter == value && prefix == 'country' }">
                  <nuxt-link v-if="key == 'asn_country_code'" v-bind:to="generateLink('country', value)"
                    class="font-thin text-cosmic-aurora hover:text-cosmic-rose">{{ value }}</nuxt-link>
                  <span><img v-if="key == 'asn_country_code'" v-bind:src="generatePath(value as string)" class="inline w-9 h-4"></span>
                </span>
                <nuxt-link v-if="key == 'asn_description'" v-bind:to="generateLink('org', value as string)"
                  v-bind:class="{ 'rounded-full border border-white/15 bg-white/10 px-2 py-1': filter == value && prefix == 'org' }"
                  class="font-thin text-cosmic-aurora hover:text-cosmic-rose">{{ value }}</nuxt-link>
                <nuxt-link v-if="key == 'asn_registry'" v-bind:to="generateLink('registry', value as string)"
                  v-bind:class="{ 'rounded-full border border-white/15 bg-white/10 px-2 py-1': filter == value && prefix == 'registry' }"
                  class="font-thin text-cosmic-aurora hover:text-cosmic-rose">{{ value }}</nuxt-link>
                <nuxt-link v-if="key == 'asn_cidr'" v-bind:to="generateLink('cidr', value as string)"
                  v-bind:class="{ 'rounded-full border border-white/15 bg-white/10 px-2 py-1': prefix == 'cidr' }"
                  class="font-thin text-cosmic-aurora hover:text-cosmic-rose">{{ value }}</nuxt-link>
                <nuxt-link v-if="key == 'asn'" v-bind:to="generateLink('asn', value as string)"
                  v-bind:class="{ 'rounded-full border border-white/15 bg-white/10 px-2 py-1': prefix == 'asn' }"
                  class="font-thin text-cosmic-aurora hover:text-cosmic-rose">{{ value }}</nuxt-link>
              </li>
            </ul>
          </div>
          <div v-if="getPortRecords(result.ports).length" class="mt-3 md:mt-4">
            <strong class="text-base sm:text-lg">Ports</strong>
            <ul class="font-mono text-sm sm:text-base font-light">
              <li v-for="port in getPortRecords(result.ports)" :key="`port-${port.port}-${port.proto ?? 'unknown'}`" class="mt-1">
                <nuxt-link v-bind:to="generateLink('port', port.port)"
                  v-bind:class="{ 'rounded-full border border-white/15 bg-white/10 px-2 py-1': filter == port.port && prefix == 'port' }"
                  class="text-cosmic-aurora hover:text-cosmic-rose">
                  {{ port.port }}<template v-if="port.proto">/{{ port.proto }}</template>
                </nuxt-link>
                <template v-if="port.status">: <span>{{ port.status }}</span></template>
              </li>
            </ul>
          </div>
          <div v-if="result.ssl" class="mt-3 md:mt-4">
            <strong class="text-base sm:text-lg">SSL cert</strong>
            <div class="mt-2 space-y-4 font-mono text-sm sm:text-base font-light text-white/70">
              <div v-if="result.ssl.subject" class="space-y-1">
                <span class="font-bold text-white/80">Subject</span>
                <ul class="space-y-1">
                  <li v-if="result.ssl.subject.common_name">
                    <span class="font-bold text-white">Common name</span>:
                    <nuxt-link
                      :to="generateLink('ssl', result.ssl.subject.common_name)"
                      :class="[
                        'font-thin text-cosmic-aurora hover:text-cosmic-rose',
                        { 'rounded-full border border-white/15 bg-white/10 px-2 py-1': filter == result.ssl.subject.common_name && prefix == 'ssl' }
                      ]"
                    >{{ result.ssl.subject.common_name }}</nuxt-link>
                  </li>
                  <li v-if="result.ssl.subject.organization_name">
                    <span class="font-bold text-white">Organisation</span>:
                    <nuxt-link
                      :to="generateLink('org', result.ssl.subject.organization_name)"
                      :class="[
                        'font-thin text-cosmic-aurora hover:text-cosmic-rose',
                        { 'rounded-full border border-white/15 bg-white/10 px-2 py-1': filter == result.ssl.subject.organization_name && prefix == 'org' }
                      ]"
                    >{{ result.ssl.subject.organization_name }}</nuxt-link>
                  </li>
                  <li v-if="result.ssl.subject.organizational_unit_name">
                    <span class="font-bold text-white">Organisation unit</span>:
                    <nuxt-link
                      :to="generateLink('unit', result.ssl.subject.organizational_unit_name)"
                      :class="[
                        'font-thin text-cosmic-aurora hover:text-cosmic-rose',
                        {
                          'rounded-full border border-white/15 bg-white/10 px-2 py-1':
                            filter == result.ssl.subject.organizational_unit_name && prefix == 'unit'
                        }
                      ]"
                    >{{ result.ssl.subject.organizational_unit_name }}</nuxt-link>
                  </li>
                  <li v-if="result.ssl.subject.state_or_province_name">
                    <span class="font-bold text-white">Province</span>:
                    <nuxt-link
                      :to="generateLink('state', result.ssl.subject.state_or_province_name)"
                      :class="[
                        'font-thin text-cosmic-aurora hover:text-cosmic-rose',
                        { 'rounded-full border border-white/15 bg-white/10 px-2 py-1': filter == result.ssl.subject.state_or_province_name && prefix == 'state' }
                      ]"
                    >{{ result.ssl.subject.state_or_province_name }}</nuxt-link>
                  </li>
                  <li v-if="result.ssl.subject.locality_name">
                    <span class="font-bold text-white">Locality</span>:
                    <nuxt-link
                      :to="generateLink('city', result.ssl.subject.locality_name)"
                      :class="[
                        'font-thin text-cosmic-aurora hover:text-cosmic-rose',
                        { 'rounded-full border border-white/15 bg-white/10 px-2 py-1': filter == result.ssl.subject.locality_name && prefix == 'city' }
                      ]"
                    >{{ result.ssl.subject.locality_name }}</nuxt-link>
                  </li>
                  <li v-if="result.ssl.subject.country_name">
                    <span class="font-bold text-white">Country</span>:
                    <span class="inline-flex items-center gap-2">
                      <nuxt-link
                        :to="generateLink('country', result.ssl.subject.country_name)"
                        :class="[
                          'font-thin text-cosmic-aurora hover:text-cosmic-rose',
                          { 'rounded-full border border-white/15 bg-white/10 px-2 py-1': filter == result.ssl.subject.country_name && prefix == 'country' }
                        ]"
                      >{{ result.ssl.subject.country_name }}</nuxt-link>
                      <img :src="generatePath(result.ssl.subject.country_name)" class="inline h-4 w-9" />
                    </span>
                  </li>
                </ul>
              </div>

              <div v-if="result.ssl.issuer" class="space-y-1">
                <span class="font-bold text-white/80">Issuer</span>
                <ul class="space-y-1">
                  <li v-if="result.ssl.issuer.common_name">
                    <span class="font-bold text-white">Common name</span>:
                    <nuxt-link
                      :to="generateLink('issuer', result.ssl.issuer.common_name)"
                      :class="[
                        'font-thin text-cosmic-aurora hover:text-cosmic-rose',
                        { 'rounded-full border border-white/15 bg-white/10 px-2 py-1': filter == result.ssl.issuer.common_name && prefix == 'issuer' }
                      ]"
                    >{{ result.ssl.issuer.common_name }}</nuxt-link>
                  </li>
                  <li v-if="result.ssl.issuer.organization_name">
                    <span class="font-bold text-white">Organisation</span>:
                    <nuxt-link
                      :to="generateLink('issuer', result.ssl.issuer.organization_name)"
                      :class="[
                        'font-thin text-cosmic-aurora hover:text-cosmic-rose',
                        { 'rounded-full border border-white/15 bg-white/10 px-2 py-1': filter == result.ssl.issuer.organization_name && prefix == 'issuer' }
                      ]"
                    >{{ result.ssl.issuer.organization_name }}</nuxt-link>
                  </li>
                  <li v-if="result.ssl.issuer.organizational_unit_name">
                    <span class="font-bold text-white">Organisation unit</span>:
                    <nuxt-link
                      :to="generateLink('unit', result.ssl.issuer.organizational_unit_name)"
                      :class="[
                        'font-thin text-cosmic-aurora hover:text-cosmic-rose',
                        {
                          'rounded-full border border-white/15 bg-white/10 px-2 py-1':
                            filter == result.ssl.issuer.organizational_unit_name && prefix == 'unit'
                        }
                      ]"
                    >{{ result.ssl.issuer.organizational_unit_name }}</nuxt-link>
                  </li>
                  <li v-if="result.ssl.issuer.state_or_province_name">
                    <span class="font-bold text-white">Province</span>:
                    <nuxt-link
                      :to="generateLink('state', result.ssl.issuer.state_or_province_name)"
                      :class="[
                        'font-thin text-cosmic-aurora hover:text-cosmic-rose',
                        { 'rounded-full border border-white/15 bg-white/10 px-2 py-1': filter == result.ssl.issuer.state_or_province_name && prefix == 'state' }
                      ]"
                    >{{ result.ssl.issuer.state_or_province_name }}</nuxt-link>
                  </li>
                  <li v-if="result.ssl.issuer.locality_name">
                    <span class="font-bold text-white">Locality</span>:
                    <nuxt-link
                      :to="generateLink('city', result.ssl.issuer.locality_name)"
                      :class="[
                        'font-thin text-cosmic-aurora hover:text-cosmic-rose',
                        { 'rounded-full border border-white/15 bg-white/10 px-2 py-1': filter == result.ssl.issuer.locality_name && prefix == 'city' }
                      ]"
                    >{{ result.ssl.issuer.locality_name }}</nuxt-link>
                  </li>
                  <li v-if="result.ssl.issuer.country_name">
                    <span class="font-bold text-white">Country</span>:
                    <span class="inline-flex items-center gap-2">
                      <nuxt-link
                        :to="generateLink('country', result.ssl.issuer.country_name)"
                        :class="[
                          'font-thin text-cosmic-aurora hover:text-cosmic-rose',
                          { 'rounded-full border border-white/15 bg-white/10 px-2 py-1': filter == result.ssl.issuer.country_name && prefix == 'country' }
                        ]"
                      >{{ result.ssl.issuer.country_name }}</nuxt-link>
                      <img :src="generatePath(result.ssl.issuer.country_name)" class="inline h-4 w-9" />
                    </span>
                  </li>
                </ul>
              </div>

              <div v-if="hasAltNames(result.ssl)" class="space-y-1">
                <span class="font-bold text-white/80">Subject alternative names</span>
                <ul class="flex flex-wrap gap-2">
                  <li v-for="name in getAltNames(result.ssl)" :key="name">
                    <nuxt-link
                      :to="generateLink('ssl', name)"
                      :class="[
                        'font-thin text-cosmic-aurora hover:text-cosmic-rose',
                        { 'rounded-full border border-white/15 bg-white/10 px-2 py-1': filter == name && prefix == 'ssl' }
                      ]"
                    >{{ name }}</nuxt-link>
                  </li>
                </ul>
              </div>

              <div class="space-y-1">
                <div v-if="result.ssl.serial">
                  <span class="font-bold text-white">Serial</span>:
                  <span class="text-white/60">{{ result.ssl.serial }}</span>
                </div>
                <div v-if="result.ssl.version !== undefined">
                  <span class="font-bold text-white">Version</span>:
                  <span class="text-white/60">{{ result.ssl.version }}</span>
                </div>
                <div v-if="result.ssl.not_before">
                  <span class="font-bold text-white">Valid from</span>:
                  <nuxt-link
                    :to="generateLink('before', result.ssl.not_before)"
                    :class="[
                      'font-thin text-cosmic-aurora hover:text-cosmic-rose',
                      { 'rounded-full border border-white/15 bg-white/10 px-2 py-1': prefix == 'before' }
                    ]"
                  >{{ convertToLocalDatetime(result.ssl.not_before) }}</nuxt-link>
                </div>
                <div v-if="result.ssl.not_after">
                  <span class="font-bold text-white">Valid until</span>:
                  <nuxt-link
                    :to="generateLink('after', result.ssl.not_after)"
                    :class="[
                      'font-thin text-cosmic-aurora hover:text-cosmic-rose',
                      { 'rounded-full border border-white/15 bg-white/10 px-2 py-1': prefix == 'after' }
                    ]"
                  >{{ convertToLocalDatetime(result.ssl.not_after) }}</nuxt-link>
                </div>
                <div v-if="result.ssl.handshake_version || result.ssl.handshake_cipher">
                  <span class="font-bold text-white">Handshake</span>:
                  <span class="text-white/60">
                    <span v-if="result.ssl.handshake_version">{{ result.ssl.handshake_version }}</span>
                    <span v-if="describeCipher(result.ssl.handshake_cipher)" class="text-white/60">
                      <span v-if="result.ssl.handshake_version"> · </span>{{ describeCipher(result.ssl.handshake_cipher) }}
                    </span>
                  </span>
                </div>
                <div v-if="result.ssl.ocsp">
                  <span class="font-bold text-white">OCSP</span>:
                  <nuxt-link
                    :to="generateLink('ocsp', result.ssl.ocsp)"
                    :class="[
                      'font-thin text-cosmic-aurora hover:text-cosmic-rose',
                      { 'rounded-full border border-white/15 bg-white/10 px-2 py-1': filter == result.ssl.ocsp && prefix == 'ocsp' }
                    ]"
                  >{{ result.ssl.ocsp }}</nuxt-link>
                </div>
                <div v-if="result.ssl.ca_issuers">
                  <span class="font-bold text-white">CA issuer</span>:
                  <nuxt-link
                    :to="generateLink('ca', result.ssl.ca_issuers)"
                    :class="[
                      'font-thin text-cosmic-aurora hover:text-cosmic-rose',
                      { 'rounded-full border border-white/15 bg-white/10 px-2 py-1': filter == result.ssl.ca_issuers && prefix == 'ca' }
                    ]"
                  >{{ result.ssl.ca_issuers }}</nuxt-link>
                </div>
              </div>

              <div v-if="result.ssl.tls_versions" class="space-y-1">
                <span class="font-bold text-white/80">TLS versions</span>
                <ul class="space-y-1">
                  <li v-for="(tlsDetails, tlsVersion) in result.ssl.tls_versions" :key="tlsVersion">
                    <span class="font-bold text-white">{{ tlsVersion }}</span>:
                    <span :class="tlsDetails.accepted ? 'text-cosmic-aurora' : 'text-cosmic-rose'">
                      {{ tlsDetails.accepted ? 'accepted' : 'rejected' }}
                    </span>
                    <span v-if="describeCipher(tlsDetails.cipher)" class="text-white/60">
                      — {{ describeCipher(tlsDetails.cipher) }}
                    </span>
                    <span v-else-if="tlsDetails.version" class="text-white/60">
                      — {{ tlsDetails.version }}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div v-if="result.qrcode" class="w-full sm:w-3/12 sm:text-right mt-1 mr-1">
          <strong class="block text-lg mb-2">QR code</strong>
          <div class="inline-block rounded-2xl bg-white p-2">
            <img class="w-32 sm:w-36" :src="generateCode(result.qrcode)" alt="QR code" />
          </div>
        </div>
      </div>
      <div v-if="getHeaderEntries(result.header).length" class="mt-3 md:mt-4">
        <strong class="text-base sm:text-lg">HTTP header</strong>
        <code class="font-mono text-sm sm:text-base">
        <ul class="bg-white/10 overflow-scroll px-3 pt-3">
          <li v-for="{ key, value } in getHeaderEntries(result.header)" :key="key">
            <span class="font-bold">{{ key }}</span>: <span v-if="key !== 'x-powered-by' && key !== 'status' && key !== 'server'" class="font-thin">{{ value }}</span>
            <nuxt-link v-if="key === 'status'" v-bind:to="generateLink('status', value as string)" v-bind:class="{ 'rounded-full border border-white/15 bg-white/10 px-2 py-1': filter == value && prefix == 'status' }" class="text-cosmic-aurora hover:text-cosmic-rose">{{ value }}</nuxt-link>
            <nuxt-link v-if="key === 'server'" v-bind:to="generateLink('server', value as string)" v-bind:class="{ 'rounded-full border border-white/15 bg-white/10 px-2 py-1': filter == value && prefix == 'server' }" class="text-cosmic-aurora hover:text-cosmic-rose">{{ value }}</nuxt-link>
            <nuxt-link v-if="key === 'x-powered-by'" v-bind:to="generateLink('service', value as string)" v-bind:class="{ 'rounded-full border border-white/15 bg-white/10 px-2 py-1': filter == value && prefix == 'service' }" class="text-cosmic-aurora hover:text-cosmic-rose">{{ value }}</nuxt-link>
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

const normalizeAltNames = (value: unknown): string[] => {
  if (!value) {
    return []
  }

  if (Array.isArray(value)) {
    return (value as Array<string | number | null | undefined>)
      .map((item) => (item ?? '').toString().trim())
      .filter((item) => item.length > 0)
  }

  if (typeof value === 'string') {
    const trimmed = value.trim()
    return trimmed ? [trimmed] : []
  }

  return []
}

const getAltNames = (ssl: Record<string, unknown> | null | undefined): string[] => {
  if (!ssl || typeof ssl !== 'object') {
    return []
  }

  return normalizeAltNames((ssl as { subject_alt_names?: unknown }).subject_alt_names)
}

const hasAltNames = (ssl: Record<string, unknown> | null | undefined): boolean => getAltNames(ssl).length > 0

const normalizeArray = <T>(value: unknown, extractor: (item: unknown) => T | null): T[] => {
  if (!Array.isArray(value)) {
    return []
  }

  return (value as unknown[])
    .map((item) => extractor(item))
    .filter((item): item is T => item != null)
}

const getStringRecords = (value: unknown): string[] => normalizeArray<string>(value, (item) => {
  if (item == null) {
    return null
  }

  if (typeof item === 'string') {
    const trimmed = item.trim()
    return trimmed ? trimmed : null
  }

  if (typeof item === 'number') {
    return item.toString()
  }

  return null
})

type CnameRecord = {
  target: string
}

const getCnameRecords = (value: unknown): CnameRecord[] => normalizeArray<CnameRecord>(value, (item) => {
  if (!item || typeof item !== 'object') {
    return null
  }

  const target = (item as Record<string, unknown>).target

  if (typeof target !== 'string') {
    return null
  }

  const trimmed = target.trim()

  if (!trimmed) {
    return null
  }

  return { target: trimmed }
})

type MxRecord = {
  exchange: string
  preference?: number | string
}

const getMxRecords = (value: unknown): MxRecord[] => normalizeArray<MxRecord>(value, (item) => {
  if (!item || typeof item !== 'object') {
    return null
  }

  const record = item as Record<string, unknown>
  const exchange = typeof record.exchange === 'string' ? record.exchange.trim() : null

  if (!exchange) {
    return null
  }

  let preference: number | string | undefined
  if (typeof record.preference === 'number') {
    preference = record.preference
  } else if (typeof record.preference === 'string' && record.preference.trim()) {
    preference = record.preference.trim()
  }

  return preference !== undefined ? { exchange, preference } : { exchange }
})

type PortRecord = {
  port: string
  proto?: string
  status?: string
}

const getPortRecords = (value: unknown): PortRecord[] => normalizeArray<PortRecord>(value, (item) => {
  if (!item || typeof item !== 'object') {
    return null
  }

  const record = item as Record<string, unknown>
  const rawPort = record.port

  if (rawPort == null) {
    return null
  }

  const port = typeof rawPort === 'number' ? rawPort.toString() : typeof rawPort === 'string' ? rawPort.trim() : ''

  if (!port) {
    return null
  }

  const proto = typeof record.proto === 'string' && record.proto.trim() ? record.proto.trim() : undefined
  const status = typeof record.status === 'string' && record.status.trim() ? record.status.trim() : undefined

  return { port, proto, status }
})

type KeyValueEntry = {
  key: string
  value: unknown
}

const getWhoisEntries = (value: unknown): KeyValueEntry[] => {
  if (!value || typeof value !== 'object') {
    return []
  }

  return Object.entries(value as Record<string, unknown>)
    .filter(([, entryValue]) => entryValue !== null && entryValue !== undefined && entryValue !== '')
    .map(([entryKey, entryValue]) => ({ key: entryKey, value: entryValue }))
}

const getHeaderEntries = (value: unknown): KeyValueEntry[] => getWhoisEntries(value)

const isFiniteNumber = (value: unknown): value is number => typeof value === 'number' && Number.isFinite(value)

const getGeoEntries = (value: unknown): KeyValueEntry[] => {
  if (!value || typeof value !== 'object') {
    return []
  }

  return Object.entries(value as Record<string, unknown>)
    .map(([entryKey, entryValue]) => {
      if (entryKey === 'loc') {
        if (!isLocEntry(entryValue)) {
          return null
        }

        const [latitude, longitude] = entryValue.coordinates

        if (!isFiniteNumber(latitude) || !isFiniteNumber(longitude)) {
          return null
        }

        return { key: entryKey, value: { coordinates: [latitude, longitude] as [number, number] } }
      }

      if (entryValue === null || entryValue === undefined) {
        return null
      }

      if (typeof entryValue === 'string') {
        const trimmed = entryValue.trim()
        return trimmed ? { key: entryKey, value: trimmed } : null
      }

      if (typeof entryValue === 'number') {
        return Number.isFinite(entryValue) ? { key: entryKey, value: entryValue } : null
      }

      return null
    })
    .filter((entry): entry is KeyValueEntry => entry != null)
}

type GeoLoc = {
  coordinates: [number, number]
}

const isLocEntry = (value: unknown): value is GeoLoc => {
  if (!value || typeof value !== 'object' || !('coordinates' in value)) {
    return false
  }

  const { coordinates } = value as { coordinates?: unknown }

  return Array.isArray(coordinates) && coordinates.length >= 2 &&
    typeof coordinates[0] === 'number' && typeof coordinates[1] === 'number'
}

const describeCipher = (cipher: unknown): string => {
  if (!cipher) {
    return ''
  }

  if (Array.isArray(cipher)) {
    const [name, protocol, strength] = cipher as Array<string | number | undefined>
    const parts: string[] = []

    if (typeof name === 'string' && name) {
      parts.push(name)
    }

    if (typeof protocol === 'string' && protocol) {
      parts.push(protocol)
    }

    if (typeof strength === 'number' && strength > 0) {
      parts.push(`${strength}-bit`)
    } else if (typeof strength === 'string' && strength) {
      parts.push(strength)
    }

    return parts.join(' · ')
  }

  if (typeof cipher === 'string') {
    return cipher
  }

  if (typeof cipher === 'object') {
    const { name, protocol, version, bits, strength } = cipher as Record<string, unknown>
    const parts: string[] = []

    if (typeof name === 'string' && name) {
      parts.push(name)
    }

    if (typeof protocol === 'string' && protocol) {
      parts.push(protocol)
    }

    if (typeof version === 'string' && version) {
      parts.push(version)
    }

    const sizeCandidate = typeof bits === 'number' ? bits : typeof strength === 'number' ? strength : null
    if (sizeCandidate && sizeCandidate > 0) {
      parts.push(`${sizeCandidate}-bit`)
    }

    return parts.join(' · ')
  }

  return ''
}

const generatePath = (image?: string) => `/svg/${(image ?? 'unknown').toLowerCase()}.svg`
const generateCode = (base64: string) => `data:image/png;base64,${base64}`
const generateUrl = (domain: string) => `http://${domain}`
const generateLink = (linkPrefix: string, query: string) => `/${linkPrefix}/${encodeURIComponent(query)}`
const convertToLocalDatetime = (isoTimestamp: string) => {
  const date = new Date(isoTimestamp)
  return date.toLocaleString('de-DE', { timeZone: 'Europe/Berlin' })
}
</script>
