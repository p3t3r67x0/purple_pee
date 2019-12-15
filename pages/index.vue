<template>
<div>
  <navheader></navheader>

  <div class="container mx-auto">
    <div class="text-center text-gray-900 leading-normal my-6 md:my-12">
      <h1 class="font-sans font-thin text-3xl md:text-5xl"><strong class="font-black">purplepee.co</strong> - Open source ASN lookup</h1>
    </div>
  </div>

  <dns v-if="results.length > 0 && results[0].domain != null" v-bind:results="results"></dns>
  <asn v-if="results.length > 0 && results[0].ip != null" v-bind:results="results"></asn>

  <div class="container mx-auto">
    <div class="bg-white rounded shadow-md leading-normal mx-3 md:mx-0 mb-6 px-3 pt-2 pb-3">
      <h2 class="text-xl md:text-3xl text-purple-800 font-light mb-2">Search with conditional Queries</h2>
      <p class="md:w-9/12 text-md sm:text-lg md:text-xl text-gray-800 mb-3">To get the most out of Purplepee it's important to understand the search query syntax. Search filters are special keywords to tell Purplepee that you wish to search specific
        properties. Note that there is no space in
        between the filtername and its value. They take the format of...</p>
      <ul class="text-lg">
        <li class="mt-3 md:mt-6">
          <p class="text-xl md:text-2xl text-gray-800 mb-3">Search for a specific port</p>
          <div class="bg-gray-200 p-2 mb-2">
            <code class="font-mono">
              <span class="text-red-600">port:</span><span class="text-blue-600">21</span> OR
              <span class="text-red-600">port:</span><span class="text-blue-600">22</span> OR
              <span class="text-red-600">port:</span><span class="text-blue-600">25</span> OR
              <span class="text-red-600">port:</span><span class="text-blue-600">53</span> OR
              <span class="text-red-600">port:</span><span class="text-blue-600">80</span> OR
              <span class="text-red-600">port:</span><span class="text-blue-600">111</span> OR
              <span class="text-red-600">port:</span><span class="text-blue-600">443</span>
            </code>
          </div>
          <p class="md:w-9/12 text-md sm:text-lg md:text-xl text-gray-800">
            We provide you a buch of ports to search for at the moment you can search for ports you see above.
          </p>
        </li>
        <li class="mt-3 md:mt-6">
          <p class="text-xl md:text-2xl text-gray-800 mb-3">Search for a specific status code</p>
          <div class="bg-gray-200 p-2">
            <code class="font-mono">
              <span class="text-red-600">status:</span><span class="text-blue-600">100</span> OR
              <span class="text-red-600">status:</span><span class="text-blue-600">302</span> OR
              <span class="text-red-600">status:</span><span class="text-blue-600">400</span> OR
              <span class="text-red-600">status:</span><span class="text-blue-600">307</span> OR
              <span class="text-red-600">status:</span><span class="text-blue-600">500</span>
            </code>
          </div>
          <p class="md:w-9/12 text-md sm:text-lg md:text-xl text-gray-800">
            With this query you can search for a specific HTTP response status codes. See <a href="https://developer.mozilla.org/de/docs/Web/HTTP/Status" target="_blank"
              class="break-all text-blue-400 hover:text-blue-600">https://developer.mozilla.org/de/docs/Web/HTTP/Status</a> for further information.
          </p>
        </li>
        <li class="mt-3 md:mt-6">
          <p class="text-xl md:text-2xl text-gray-800 mb-3">Search for a specific country</p>
          <div class="bg-gray-200 p-2 mb-2">
            <code class="font-mono">
              <span class="text-red-600">country:</span><span class="text-blue-600">SG</span> OR
              <span class="text-red-600">country:</span><span class="text-blue-600">US</span> OR
              <span class="text-red-600">country:</span><span class="text-blue-600">CA</span> OR
              <span class="text-red-600">country:</span><span class="text-blue-600">DE</span> OR
              <span class="text-red-600">country:</span><span class="text-blue-600">VN</span>
            </code>
          </div>
          <p class="md:w-9/12 text-md sm:text-lg md:text-xl text-gray-800">
            Using the above example, if you wanted to find devices located in Singapore then you would use the country search filter which accepts as an argument a 2-letter country code.
          </p>
        </li>
        <li class="mt-3 md:mt-6">
          <p class="text-xl md:text-2xl text-gray-800 mb-3">Search for a specific hoster or organisation</p>
          <div class="bg-gray-200 p-2">
            <code class="font-mono">
              <span class="text-red-600">org:</span><span class="text-blue-600">hetzner</span> OR
              <span class="text-red-600">org:</span><span class="text-blue-600">amazon</span> OR
              <span class="text-red-600">org:</span><span class="text-blue-600">hetzner</span> OR
              <span class="text-red-600">org:</span><span class="text-blue-600">google</span>
            </code>
          </div>
        </li>
        <li class="mt-3 md:mt-6">
          <p class="text-xl md:text-2xl text-gray-800 mb-3">Search for a specific registry</p>
          <div class="bg-gray-200 p-2">
            <code class="font-mono">
              <span class="text-red-600">registry:</span><span class="text-blue-600">apnic</span> OR
              <span class="text-red-600">registry:</span><span class="text-blue-600">ripencc</span> OR
              <span class="text-red-600">registry:</span><span class="text-blue-600">afrinic</span> OR
              <span class="text-red-600">registry:</span><span class="text-blue-600">arin</span> OR
              <span class="text-red-600">registry:</span><span class="text-blue-600">lacnic</span>
            </code>
          </div>
        </li>
        <li class="mt-3 md:mt-6">
          <p class="text-xl md:text-2xl text-gray-800 mb-3">Search for a specific subnet</p>
          <div class="bg-gray-200 p-2">
            <code class="font-mono">
              <span class="text-red-600">cidr:</span><span class="text-blue-600">8.8.8.0/24</span> OR
              <span class="text-red-600">cidr:</span><span class="text-blue-600">213.133.0.0/19</span> OR
              <span class="text-red-600">cidr:</span><span class="text-blue-600">64.239.160.0/20</span>
            </code>
          </div>
        </li>
        <li class="mt-3 md:mt-6">
          <p class="text-xl md:text-2xl text-gray-800 mb-3">Search for a specific server</p>
          <div class="bg-gray-200 p-2 mb-2">
            <code class="font-mono">
              <span class="text-red-600">server:</span><span class="text-blue-600">nginx</span> OR
              <span class="text-red-600">server:</span><span class="text-blue-600">cloudflare</span> OR
              <span class="text-red-600">server:</span><span class="text-blue-600">apache</span>
            </code>
          </div>
          <p class="md:w-9/12 text-md sm:text-lg md:text-xl text-gray-800">
            This are a view examples how you can find datasets with a specific server. You can search with this condition for any server name you know and see if there are results.
          </p>
        </li>
        <li class="mt-3 md:mt-6">
          <p class="text-xl md:text-2xl text-gray-800 mb-3">Search for a specific site</p>
          <div class="bg-gray-200 p-2">
            <code class="font-mono">
              <span class="text-red-600">site:</span><span class="text-blue-600">google.com</span> OR
              <span class="text-red-600">site:</span><span class="text-blue-600">hackerone.com</span> OR
              <span class="text-red-600">site:</span><span class="text-blue-600">barackobama.com</span> OR
              <span class="text-red-600">site:</span><span class="text-blue-600">fb.com</span>
            </code>
          </div>
        </li>
        <li class="mt-3 md:mt-6">
          <p class="text-xl md:text-2xl text-gray-800 mb-3">Search for a specific cname record</p>
          <div class="bg-gray-200 p-2">
            <code class="font-mono">
              <span class="text-red-600">cname:</span><span class="text-blue-600">shops.myshopify.com</span> OR
              <span class="text-red-600">cname:</span><span class="text-blue-600">domains.shoplineapp.com</span> OR
              <span class="text-red-600">cname:</span><span class="text-blue-600">lb.wordpress.com</span>
            </code>
          </div>
        </li>
        <li class="mt-3 md:mt-6">
          <p class="text-xl md:text-2xl text-gray-800 mb-3">Search for a specific mx record</p>
          <div class="bg-gray-200 p-2">
            <code class="font-mono">
              <span class="text-red-600">mx:</span><span class="text-blue-600">alt3.aspmx.l.google.com</span> OR
              <span class="text-red-600">mx:</span><span class="text-blue-600">smtp.secureserver.net</span> OR
              <span class="text-red-600">mx:</span><span class="text-blue-600">mx.yandex.ru</span>
            </code>
          </div>
        </li>
      </ul>
    </div>
  </div>

  <navfooter></navfooter>
</div>
</template>

<script>
import Asn from '@/components/asn.vue'
import Dns from '@/components/dns.vue'
import Footer from '@/components/navfooter.vue'
import Navbar from '@/components/navheader.vue'

export default {
  components: {
    asn: Asn,
    dns: Dns,
    navfooter: Footer,
    navheader: Navbar
  },
  head: {
    title: 'Open source ASN lookup',
    meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Purplepee is a simple tool allowing individuals to view all sort of analytics data about the current state and structure of the internet.'
    }]
  },
  computed: {
    results() {
      return this.$store.state.results
    }
  }
}
</script>
