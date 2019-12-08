<template>
<div>
  <navigation></navigation>

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
      <p class="md:w-9/12 text-md sm:text-lg md:text-xl mb-3">To get the most out of Purplepee it's important to understand the search query syntax. Search filters are special keywords to tell Purplepee that you wish to search specific properties. Note that there is no space in
        between the filtername and its value. They take the format of...</p>
      <ul class="text-lg">
        <li class="mt-3 md:mt-6">
          <div class="bg-gray-200 p-2">
            <code class="font-mono"><span class="text-orange-600">port:</span><span class="text-gray-700"></span>21</code>
          </div>
        </li>
        <li class="mt-3 md:mt-6">
          <div class="bg-gray-200 p-2">
            <code class="font-mono"><span class="text-orange-600">status:</span><span class="text-gray-700"></span>302</code>
          </div>
        </li>
        <li class="mt-3 md:mt-6">
          <div class="bg-gray-200 p-2">
            <code class="font-mono"><span class="text-orange-600">country:</span><span class="text-gray-700"></span>SG</code>
          </div>
          <p class="md:w-9/12 text-md sm:text-lg md:text-xl text-gray-700">
            Using the above example, if you wanted to find devices located in Singapore then you would use the country search filter which accepts as an argument a 2-letter country code.
          </p>
        </li>
        <li class="mt-3 md:mt-6">
          <div class="bg-gray-200 p-2">
            <code class="font-mono"><span class="text-orange-600">org:</span><span class="text-gray-700"></span>hetzner</code>
          </div>
        </li>
        <li class="mt-3 md:mt-6">
          <div class="bg-gray-200 p-2">
            <code class="font-mono"><span class="text-orange-600">registry:</span><span class="text-gray-700"></span>ripencc</code>
          </div>
        </li>
        <li class="mt-3 md:mt-6">
          <div class="bg-gray-200 p-2">
            <code class="font-mono"><span class="text-orange-600">cidr:</span><span class="text-gray-700"></span>xxxx</code>
          </div>
        </li>
        <li class="mt-3 md:mt-6">
          <div class="bg-gray-200 p-2">
            <code class="font-mono"><span class="text-orange-600">server:</span><span class="text-gray-700"></span>nginx</code>
          </div>
        </li>
        <li class="mt-3 md:mt-6">
          <div class="bg-gray-200 p-2">
            <code class="font-mono"><span class="text-orange-600">site:</span><span class="text-gray-700"></span>example.org</code>
          </div>
        </li>
        <li class="mt-3 md:mt-6">
          <div class="bg-gray-200 p-2">
            <code class="font-mono"><span class="text-orange-600">cname:</span><span class="text-gray-700"></span>sunnysalan.com</code>
          </div>
        </li>
        <li class="mt-3 md:mt-6">
          <div class="bg-gray-200 p-2">
            <code class="font-mono"><span class="text-orange-600">mx:</span><span class="text-gray-700"></span>alt3.aspmx.l.google.com</code>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
import Asn from '@/components/asn.vue'
import Dns from '@/components/dns.vue'
import Navigation from '@/components/navigation.vue'

export default {
  components: {
    dns: Dns,
    asn: Asn,
    navigation: Navigation
  },
  computed: {
    results() {
      return this.$store.state.results
    }
  }
}
</script>
