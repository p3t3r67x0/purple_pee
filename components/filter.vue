<template>
<div class="container mx-auto">
  <div class="bg-white rounded shadow-md leading-normal mx-3 md:mx-0 mb-6 px-3 pt-2 pb-3">
    <h2 class="text-xl md:text-3xl text-gray-900 font-bold mb-2">Search with conditional Queries</h2>
    <p class="md:w-10/12 text-sm sm:text-base md:text-lg text-gray-800 mb-2">To get the most out of purplepee.co it's important to understand the search query syntax. Search filters are special keywords to tell Purplepee that you wish to search
      specific properties. Note that there is no space in between the filtername and its value. They take the format of...</p>
    <ul class="text-lg">
      <li class="mt-3 md:mt-6">
        <p class="text-lg md:text-xl font-bold text-gray-800 mb-2">Search for a specific port</p>
        <div class="bg-gray-200 p-2 mb-2">
          <code class="font-mono">
            <nuxt-link to="/port/21" class="text-blue-600 hover:text-blue-700">port:21</nuxt-link> or
            <nuxt-link to="/port/3306" class="text-blue-600 hover:text-blue-700">port:3306</nuxt-link> or
            <nuxt-link to="/port/27017" class="text-blue-600 hover:text-blue-700">port:27017</nuxt-link> or
            <nuxt-link to="/port/443" class="text-blue-600 hover:text-blue-700">port:443</nuxt-link> or
            <nuxt-link to="/port/111" class="text-blue-600 hover:text-blue-700">port:111</nuxt-link> or
            <nuxt-link to="/port/80" class="text-blue-600 hover:text-blue-700">port:80</nuxt-link> or
            <nuxt-link to="/port/25" class="text-blue-600 hover:text-blue-700">port:25</nuxt-link>
          </code>
        </div>
        <p class="md:w-10/12 text-sm sm:text-base md:text-lg text-gray-800">
          We provide you a bunch of ports to search for. You can search for following ports 21, 22, 25, 53, 80, 111, 443, 3306, 5432, 8529, 7000, 7001, 9042, 5984, 9200, 9300, 27017, 27018, 27019, 28017, 7473, 7474, 6379, 8087, 8098, 8080, 28015,
          29015, 7574, 8983 with the syntax above.
        </p>
      </li>
      <li class="mt-3 md:mt-6">
        <p class="text-lg md:text-xl font-bold text-gray-800 mb-2">Search for a specific status code</p>
        <div class="bg-gray-200 p-2">
          <code class="font-mono">
            <nuxt-link to="/status/100" class="text-blue-600 hover:text-blue-700">status:100</nuxt-link> or
            <nuxt-link to="/status/302" class="text-blue-600 hover:text-blue-700">status:302</nuxt-link> or
            <nuxt-link to="/status/400" class="text-blue-600 hover:text-blue-700">status:400</nuxt-link> or
            <nuxt-link to="/status/307" class="text-blue-600 hover:text-blue-700">status:307</nuxt-link> or
            <nuxt-link to="/status/500" class="text-blue-600 hover:text-blue-700">status:500</nuxt-link>
          </code>
        </div>
        <p class="md:w-10/12 text-sm sm:text-base md:text-lg text-gray-800">
          With this query you can search for a specific HTTP response status codes. See <a href="https://developer.mozilla.org/de/docs/Web/HTTP/Status" target="_blank" class="break-word text-blue-400 hover:text-blue-600">https://developer.mozilla.org/de/docs/Web/HTTP/Status</a>
          for further information.
        </p>
      </li>
      <li class="mt-3 md:mt-6">
        <p class="text-lg md:text-xl font-bold text-gray-800 mb-2">Search for a specific country</p>
        <div class="bg-gray-200 p-2 mb-2">
          <code class="font-mono">
            <nuxt-link to="/country/SG" class="text-blue-600 hover:text-blue-700">country:SG</nuxt-link> or
            <nuxt-link to="/country/US" class="text-blue-600 hover:text-blue-700">country:US</nuxt-link> or
            <nuxt-link to="/country/CA" class="text-blue-600 hover:text-blue-700">country:CA</nuxt-link> or
            <nuxt-link to="/country/DE" class="text-blue-600 hover:text-blue-700">country:DE</nuxt-link> or
            <nuxt-link to="/country/VN" class="text-blue-600 hover:text-blue-700">country:VN</nuxt-link>
          </code>
        </div>
        <p class="md:w-10/12 text-sm sm:text-base md:text-lg text-gray-800">
          Using the above example, if you wanted to find devices located in Singapore then you would use the country search filter which accepts as an argument a 2-letter country code.
        </p>
      </li>
      <li class="mt-3 md:mt-6">
        <p class="text-lg md:text-xl font-bold text-gray-800 mb-2">Search for a specific hoster or organisation</p>
        <div class="bg-gray-200 p-2">
          <code class="font-mono">
            <nuxt-link to="/org/ovh" class="text-blue-600 hover:text-blue-700">org:ovh</nuxt-link> or
            <nuxt-link to="/org/hetzner" class="text-blue-600 hover:text-blue-700">org:hetzner</nuxt-link> or
            <nuxt-link to="/org/amazon" class="text-blue-600 hover:text-blue-700">org:amazon</nuxt-link> or
            <nuxt-link to="/org/google" class="text-blue-600 hover:text-blue-700">org:google</nuxt-link>
          </code>
        </div>
      </li>
      <li class="mt-3 md:mt-6">
        <p class="text-lg md:text-xl font-bold text-gray-800 mb-2">Search for a specific registry</p>
        <div class="bg-gray-200 p-2">
          <code class="font-mono">
            <nuxt-link to="/registry/apnic" class="text-blue-600 hover:text-blue-700">registry:apnic</nuxt-link> or
            <nuxt-link to="/registry/ripencc" class="text-blue-600 hover:text-blue-700">registry:ripencc</nuxt-link> or
            <nuxt-link to="/registry/afrinic" class="text-blue-600 hover:text-blue-700">registry:afrinic</nuxt-link> or
            <nuxt-link to="/registry/arin" class="text-blue-600 hover:text-blue-700">registry:arin</nuxt-link> or
            <nuxt-link to="/registry/lacnic" class="text-blue-600 hover:text-blue-700">registry:lacnic</nuxt-link>
          </code>
        </div>
      </li>
      <li class="mt-3 md:mt-6">
        <p class="text-lg md:text-xl font-bold text-gray-800 mb-2">Search for a specific subnet</p>
        <div class="bg-gray-200 p-2">
          <code class="font-mono">
            <nuxt-link to="/cidr/8.8.8.0/24" class="text-blue-600 hover:text-blue-700">cidr:8.8.8.0/24</nuxt-link> or
            <nuxt-link to="/cidr/213.133.0.0/19" class="text-blue-600 hover:text-blue-700">cidr:213.133.0.0/19</nuxt-link> or
            <nuxt-link to="/cidr/64.239.160.0/20" class="text-blue-600 hover:text-blue-700">cidr:64.239.160.0/20</nuxt-link>
          </code>
        </div>
      </li>
      <li class="mt-3 md:mt-6">
        <p class="text-lg md:text-xl font-bold text-gray-800 mb-2">Search for a specific server</p>
        <div class="bg-gray-200 p-2 mb-2">
          <code class="font-mono">
            <nuxt-link to="/server/nginx" class="text-blue-600 hover:text-blue-700">server:nginx</nuxt-link> or
            <nuxt-link to="/server/cloudflare" class="text-blue-600 hover:text-blue-700">server:cloudflare</nuxt-link> or
            <nuxt-link to="/server/apache" class="text-blue-600 hover:text-blue-700">server:apache</nuxt-link>
          </code>
        </div>
        <p class="md:w-10/12 text-sm sm:text-base md:text-lg text-gray-800">
          This are a view examples how you can find datasets with a specific server. You can search with this condition for any server name you know and see if there are results.
        </p>
      </li>
      <li class="mt-3 md:mt-6">
        <p class="text-lg md:text-xl font-bold text-gray-800 mb-2">Search for a specific site</p>
        <div class="bg-gray-200 p-2">
          <code class="font-mono">
            <nuxt-link to="/site/google.de" class="text-blue-600 hover:text-blue-700">site:google.de</nuxt-link> or
            <nuxt-link to="/site/hackerone.com" class="text-blue-600 hover:text-blue-700">site:hackerone.com</nuxt-link> or
            <nuxt-link to="/site/yandex.ru" class="text-blue-600 hover:text-blue-700">site:yandex.ru</nuxt-link> or
            <nuxt-link to="/site/fb.com" class="text-blue-600 hover:text-blue-700">site:fb.com</nuxt-link>
          </code>
        </div>
      </li>
      <li class="mt-3 md:mt-6">
        <p class="text-lg md:text-xl font-bold text-gray-800 mb-2">Search for a specific cname record</p>
        <div class="bg-gray-200 p-2">
          <code class="font-mono">
            <nuxt-link to="/cname/shops.myshopify.com" class="text-blue-600 hover:text-blue-700">cname:shops.myshopify.com</nuxt-link> or
            <nuxt-link to="/cname/domains.shoplineapp.com" class="text-blue-600 hover:text-blue-700">cname:domains.shoplineapp.com</nuxt-link> or
            <nuxt-link to="/cname/lb.wordpress.com" class="text-blue-600 hover:text-blue-700">cname:lb.wordpress.com</nuxt-link>
          </code>
        </div>
      </li>
      <li class="mt-3 md:mt-6">
        <p class="text-lg md:text-xl font-bold text-gray-800 mb-2">Search for a specific mx record</p>
        <div class="bg-gray-200 p-2">
          <code class="font-mono">
            <nuxt-link to="/mx/alt3.aspmx.l.google.com" class="text-blue-600 hover:text-blue-700">mx:alt3.aspmx.l.google.com</nuxt-link> or
            <nuxt-link to="/mx/smtp.secureserver.net" class="text-blue-600 hover:text-blue-700">mx:smtp.secureserver.net</nuxt-link> or
            <nuxt-link to="/mx/mx.yandex.ru" class="text-blue-600 hover:text-blue-700">mx:mx.yandex.ru</nuxt-link>
          </code>
        </div>
      </li>
    </ul>
  </div>
</div>
</template>
