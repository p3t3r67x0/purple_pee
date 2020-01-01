<template>
<div class="min-h-screen flex flex-col">
  <div class="flex-grow">
    <navheader></navheader>
    <div id="xhr" class="container mx-auto md:flex">
      <div class="md:w-3/12 bg-white rounded shadow-md leading-normal mx-3 md:mr-3 md:ml-0 mb-6 px-3 pt-2 pb-3">
        <h4 class="font-thin text-lg md:text-xl text-gray-900 mb-1">Navigation</h4>
        <ul class="mb-6">
          <li class="mb-3">
            <nuxt-link to="/docs/api" class="text-blue-600 hover:text-blue-700">API Documentation</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/docs/examples/server" class="text-blue-600 hover:text-blue-700">HTTP Server Requests</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="md:w-9/12 bg-white rounded shadow-md leading-normal mx-3 md:mx-0 mb-6 px-3 pt-2 pb-3">
        <h2 class="font-sans text-xl md:text-3xl text-gray-900 mb-6">API Documentation</h2>
        <h3 class="font-thin text-lg md:text-xl text-gray-900 mb-1">The base URL for all of these methods is</h3>
        <div class="flex flex-grow mb-6">
          <div class="w-full bg-gray-800 text-white font-mono px-2 py-1">
            https://api.purplepee.co
          </div>
        </div>
        <h3 class="font-thin text-lg md:text-xl text-gray-900 mb-1">Purplepees Search Methods</h3>
        <ul class="">
          <li class="mb-6">
            <div class="flex flex-grow mb-2">
              <div class="font-mono bg-green-500 text-white px-2 py-1">
                GET
              </div>
              <div class="w-full bg-gray-800 text-white font-mono px-2 py-1">
                /match/port:{number}
              </div>
            </div>
            <p class="font-sans">
              Returns a list of entries that have been found on the given port, you can query for following ports 21, 22, 25, 53, 80, 111, 443, 3306, 5432, 8529, 7000, 7001, 9042, 5984, 9200, 9300, 27017, 27018, 27019, 28017, 7473, 7474, 6379, 8087,
              8098, 8080, 28015, 29015, 7574, 8983.
            </p>
          </li>
          <li class="mb-6">
            <div class="flex flex-grow mb-2">
              <div class="font-mono bg-green-500 text-white px-2 py-1">
                GET
              </div>
              <div class="w-full bg-gray-800 text-white font-mono px-2 py-1">
                /match/status:{code}
              </div>
            </div>
            <p class="font-sans">
              Returns a list of entries that have been found on the given HTTP status code, you can query these codes 100, 101, 102, 200, 201, 202, 203, 204, 205, 206, 207, 208, 226, 300, 301, 302, 303, 304, 305, 307, 308, 400, 401,
              402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 421, 422, 423, 424, 426, 428, 429, 431, 444, 451, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 510, 511, 599
            </p>
          </li>
          <li class="mb-6">
            <div class="flex flex-grow mb-2">
              <div class="font-mono bg-green-500 text-white px-2 py-1">
                GET
              </div>
              <div class="w-full bg-gray-800 text-white font-mono px-2 py-1">
                /match/country:{code}
              </div>
            </div>
            <p class="font-sans">
              Returns a list of entries that have been found on the given country, you can query for these countries AD, AE, AF, AG, AI, AL, AM, AO, AR, AS, AT, AU, AW, AZ, BA, BB, BD, BE, BF, BG, BH, BI, BJ, BM, BN, BO, BQ, BR, BS, BT, BW, BY, BZ,
              CA, CD, CF, CG, CH, CI, CK, CL, CM, CN, CO, CR, CU, CV, CW, CY, CZ, DE, DJ, DK, DM, DO, DZ, EC, EE, EG, ER, ES, ET, EU, FI, FJ, FK, FO, FR, GA, GB, GD, GE, GF, GG, GH, GI, GL, GM, GN, GP, GQ, GR, GT, GU, GW, GY, HK, HN, HR, HT, HU, ID,
              IE, IL, IM, IN, IQ, IR, IS, IT, JE, JM, JO, JP, KE, KG, KH, KI, KM, KN, KP, KR, KW, KY, KZ, LA, LB, LC, LI, LK, LR, LS, LT, LU, LV, LY, MA, MC, MD, ME, MF, MG, MK, ML, MM, MN, MO, MP, MQ, MR, MS, MT, MU, MV, MW, MX, MY, MZ, NA, NC, NE,
              NG, NI, NL, NO, NP, NZ, OM, PA, PE, PF, PG, PH, PK, PL, PM, PR, PS, PT, PY, QA, RE, RO, RS, RU, RW, SA, SB, SC, SD, SE, SG, SI, SK, SL, SM, SN, SO, SR, ST, SV, SX, SY, SZ, TC, TD, TG, TH, TJ, TL, TM, TN, TO, TR, TT, TW, TZ, UA, UG, US,
              UY, UZ, VA, VC, VE, VG, VI, VN, VU, WS, YE, ZA, ZM, ZW, ZZ.
            </p>
          </li>
          <li class="mb-6">
            <div class="flex flex-grow mb-2">
              <div class="font-mono bg-green-500 text-white px-2 py-1">
                GET
              </div>
              <div class="w-full bg-gray-800 text-white font-mono px-2 py-1">
                /match/org:{name}
              </div>
            </div>
            <p class="font-sans">
              Returns a list of entries that have been found on the given organization.
            </p>
          </li>
          <li class="mb-6">
            <div class="flex flex-grow mb-2">
              <div class="font-mono bg-green-500 text-white px-2 py-1">
                GET
              </div>
              <div class="w-full bg-gray-800 text-white font-mono px-2 py-1">
                /match/registry:{name}
              </div>
            </div>
            <p class="font-sans">
              Returns a list of entries that have been found on the given registry, you can query for these registries afrinic, apnic, arin, lacnic, ripencc
            </p>
          </li>
          <li class="mb-6">
            <div class="flex flex-grow mb-2">
              <div class="font-mono bg-green-500 text-white px-2 py-1">
                GET
              </div>
              <div class="w-full bg-gray-800 text-white font-mono px-2 py-1">
                /match/cidr:{subnet}
              </div>
            </div>
            <p class="font-sans">
              Returns a list of entries that have been found on the given subnet.
            </p>
          </li>
          <li class="mb-6">
            <div class="flex flex-grow mb-2">
              <div class="font-mono bg-green-500 text-white px-2 py-1">
                GET
              </div>
              <div class="w-full bg-gray-800 text-white font-mono px-2 py-1">
                /match/server:{name}
              </div>
            </div>
            <p class="font-sans">
              Returns a list of entries that have been found on the given server name.
            </p>
          </li>
          <li class="mb-6">
            <div class="flex flex-grow mb-2">
              <div class="font-mono bg-green-500 text-white px-2 py-1">
                GET
              </div>
              <div class="w-full bg-gray-800 text-white font-mono px-2 py-1">
                /match/site:{domain}
              </div>
            </div>
            <p class="font-sans">
              Returns a list of entries that have been found on the given domain.
            </p>
          </li>
          <li class="mb-6">
            <div class="flex flex-grow mb-2">
              <div class="font-mono bg-green-500 text-white px-2 py-1">
                GET
              </div>
              <div class="w-full bg-gray-800 text-white font-mono px-2 py-1">
                /match/cname:{record}
              </div>
            </div>
            <p class="font-sans">
              Returns a list of entries that have been found on the given cname record.
            </p>
          </li>
          <li class="mb-6">
            <div class="flex flex-grow mb-2">
              <div class="font-mono bg-green-500 text-white px-2 py-1">
                GET
              </div>
              <div class="w-full bg-gray-800 text-white font-mono px-2 py-1">
                /match/mx:{record}
              </div>
            </div>
            <p class="font-sans">
              Returns a list of entries that have been found on the given mx record.
            </p>
          </li>
          <li>
            <div class="flex flex-grow mb-2">
              <div class="font-mono bg-green-500 text-white px-2 py-1">
                GET
              </div>
              <div class="w-full bg-gray-800 text-white font-mono px-2 py-1">
                /match/ipv4:{ip}
              </div>
            </div>
            <p class="font-sans">
              Returns a list of entries that have been found on the given IPv4.
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <navfooter></navfooter>
</div>
</template>

<script>
import Footer from '@/components/navfooter.vue'
import Navbar from '@/components/navheader.vue'

export default {
  components: {
    navheader: Navbar,
    navfooter: Footer
  },
  head() {
    return {
      title: 'Open source ASN lookup',
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Purplepee is a simple tool allowing individuals to view all sort of analytics data about the current state and structure of the internet.'
      }]
    }
  }
}
</script>
