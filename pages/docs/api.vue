<template>
<div class="min-h-screen flex flex-col">
  <div class="flex-grow">
    <navheader></navheader>
    <div id="xhr" class="container mx-auto md:flex">
      <div class="md:w-3/12 bg-white rounded shadow-md leading-normal mx-3 md:mr-3 md:ml-0 mb-6 px-3 pt-2 pb-3">
        <h4 class="font-thin text-lg md:text-xl text-gray-900 mb-1">Navigation</h4>
        <ul>
          <li class="mb-3">
            <nuxt-link to="/docs/api" class="text-blue-600 hover:text-blue-700">API Documentation</nuxt-link>
          </li>
          <li class="mb-3">
            <nuxt-link to="/docs/examples/server" class="text-blue-600 hover:text-blue-700">HTTP Server Names</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/docs/examples/status" class="text-blue-600 hover:text-blue-700">HTTP Status Codes</nuxt-link>
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
              Returns a list of entries that have been found on the given port.
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
              Returns a list of entries that have been found on the given HTTP status code.
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
              Returns a list of entries that have been found on the given country code.
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
              Returns a list of entries that have been found on the given registry.
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
