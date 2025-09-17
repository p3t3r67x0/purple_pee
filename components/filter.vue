<template>
  <div id="xhr" class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="space-y-8 rounded-2xl bg-white px-5 py-6 shadow-md sm:px-8 sm:py-10">
      <header class="space-y-3 text-center sm:text-left">
        <h2 class="text-2xl font-bold text-gray-900 sm:text-3xl">Search with conditional queries</h2>
        <p class="mx-auto max-w-3xl text-sm leading-relaxed text-gray-700 sm:text-base">
          To get the most out of purplepee.co it's important to understand how to filter your search results by specific
          properties. Note that there is no space in between the filter name and its value. They take the format of
          <code class="rounded bg-gray-100 px-1 py-0.5 text-xs font-semibold text-gray-800">filter:value</code>.
        </p>
      </header>

      <ul class="space-y-8">
        <li class="space-y-3">
          <p class="text-lg font-semibold text-gray-900 sm:text-xl">Search for a specific port</p>
          <div class="overflow-x-auto rounded-lg bg-gray-100 px-3 py-2">
            <code class="block whitespace-nowrap font-mono text-sm text-blue-600 sm:text-base">
              <nuxt-link to="/port/21" class="hover:text-blue-700">port:21</nuxt-link> ·
              <nuxt-link to="/port/3306" class="hover:text-blue-700">port:3306</nuxt-link> ·
              <nuxt-link to="/port/27017" class="hover:text-blue-700">port:27017</nuxt-link> ·
              <nuxt-link to="/port/443" class="hover:text-blue-700">port:443</nuxt-link> ·
              <nuxt-link to="/port/111" class="hover:text-blue-700">port:111</nuxt-link> ·
              <nuxt-link to="/port/80" class="hover:text-blue-700">port:80</nuxt-link> ·
              <nuxt-link to="/port/25" class="hover:text-blue-700">port:25</nuxt-link>
            </code>
          </div>
          <p class="max-w-3xl text-sm leading-relaxed text-gray-700 sm:text-base">
            We provide you a bunch of ports to search for. You can search for following ports 21, 22, 25, 53, 80, 111, 443,
            29015, 7574, 8983 with the syntax above.
          </p>
        </li>

        <li class="space-y-3">
          <p class="text-lg font-semibold text-gray-900 sm:text-xl">Search for a specific status code</p>
          <div class="overflow-x-auto rounded-lg bg-gray-100 px-3 py-2">
            <code class="block whitespace-nowrap font-mono text-sm text-blue-600 sm:text-base">
              <nuxt-link to="/status/100" class="hover:text-blue-700">status:100</nuxt-link> ·
              <nuxt-link to="/status/302" class="hover:text-blue-700">status:302</nuxt-link> ·
              <nuxt-link to="/status/400" class="hover:text-blue-700">status:400</nuxt-link> ·
              <nuxt-link to="/status/307" class="hover:text-blue-700">status:307</nuxt-link> ·
              <nuxt-link to="/status/500" class="hover:text-blue-700">status:500</nuxt-link>
            </code>
          </div>
          <p class="max-w-3xl text-sm leading-relaxed text-gray-700 sm:text-base">
            With this query you can search for a specific HTTP response status codes. See
            <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Status" target="_blank" class="text-blue-600 hover:text-blue-700">
              Mozillas developer guide
            </a>
            for further information.
          </p>
        </li>

        <li class="space-y-3">
          <p class="text-lg font-semibold text-gray-900 sm:text-xl">Search for a specific ISO country code</p>
          <div class="overflow-x-auto rounded-lg bg-gray-100 px-3 py-2">
            <code class="block whitespace-nowrap font-mono text-sm text-blue-600 sm:text-base">
              <nuxt-link to="/country/SG" class="hover:text-blue-700">country:SG</nuxt-link> ·
              <nuxt-link to="/country/US" class="hover:text-blue-700">country:US</nuxt-link> ·
              <nuxt-link to="/country/CA" class="hover:text-blue-700">country:CA</nuxt-link> ·
              <nuxt-link to="/country/DE" class="hover:text-blue-700">country:DE</nuxt-link> ·
              <nuxt-link to="/country/VN" class="hover:text-blue-700">country:VN</nuxt-link>
            </code>
          </div>
          <p class="max-w-3xl text-sm leading-relaxed text-gray-700 sm:text-base">
            Using the above example, if you wanted to find devices located in Singapore then you would use the country search
            parameter to filter your results for <code class="rounded bg-gray-100 px-1 py-0.5 text-xs font-semibold text-gray-800">country:SG</code>.
          </p>
        </li>

        <li class="space-y-3">
          <p class="text-lg font-semibold text-gray-900 sm:text-xl">Search for a specific hoster or organisation</p>
          <div class="overflow-x-auto rounded-lg bg-gray-100 px-3 py-2">
            <code class="block whitespace-nowrap font-mono text-sm text-blue-600 sm:text-base">
              <nuxt-link to="/org/DIGITALOCEAN-ASN - DigitalOcean, LLC, US" class="hover:text-blue-700">
                org:DIGITALOCEAN-ASN - DigitalOcean, LLC, US
              </nuxt-link>
              ·
              <nuxt-link to="/org/OVH, FR" class="hover:text-blue-700">org:OVH, FR</nuxt-link>
              ·
              <nuxt-link to="/org/ARUBA-ASN, IT" class="hover:text-blue-700">org:ARUBA-ASN, IT</nuxt-link>
            </code>
          </div>
        </li>

        <li class="space-y-3">
          <p class="text-lg font-semibold text-gray-900 sm:text-xl">Search for a specific SSH banner</p>
          <div class="overflow-x-auto rounded-lg bg-gray-100 px-3 py-2">
            <code class="block whitespace-nowrap font-mono text-sm text-blue-600 sm:text-base">
              <nuxt-link to="/banner/SSH-2.0-OpenSSH_7.9" class="hover:text-blue-700">banner:SSH-2.0-OpenSSH_7.9</nuxt-link>
              ·
              <nuxt-link to="/banner/SSH-2.0-OpenSSH_6.6.1p1 Ubuntu-2ubuntu2.13" class="hover:text-blue-700">
                banner:SSH-2.0-OpenSSH_6.6.1p1 Ubuntu-2ubuntu2.13
              </nuxt-link>
            </code>
          </div>
        </li>

        <li class="space-y-3">
          <p class="text-lg font-semibold text-gray-900 sm:text-xl">Search for a specific service</p>
          <div class="overflow-x-auto rounded-lg bg-gray-100 px-3 py-2">
            <code class="block whitespace-nowrap font-mono text-sm text-blue-600 sm:text-base">
              <nuxt-link to="/service/PleskLin" class="hover:text-blue-700">service:PleskLin</nuxt-link>
              ·
              <nuxt-link to="/service/Nette Framework" class="hover:text-blue-700">service:Nette Framework</nuxt-link>
              ·
              <nuxt-link to="/service/SmugMug/1.0" class="hover:text-blue-700">service:SmugMug/1.0</nuxt-link>
            </code>
          </div>
        </li>

        <li class="space-y-3">
          <p class="text-lg font-semibold text-gray-900 sm:text-xl">Search for a specific registry</p>
          <div class="overflow-x-auto rounded-lg bg-gray-100 px-3 py-2">
            <code class="block whitespace-nowrap font-mono text-sm text-blue-600 sm:text-base">
              <nuxt-link to="/registry/apnic" class="hover:text-blue-700">registry:apnic</nuxt-link>
              ·
              <nuxt-link to="/registry/ripencc" class="hover:text-blue-700">registry:ripencc</nuxt-link>
              ·
              <nuxt-link to="/registry/afrinic" class="hover:text-blue-700">registry:afrinic</nuxt-link>
              ·
              <nuxt-link to="/registry/arin" class="hover:text-blue-700">registry:arin</nuxt-link>
            </code>
          </div>
        </li>

        <li class="space-y-3">
          <p class="text-lg font-semibold text-gray-900 sm:text-xl">Search for a specific IPv4 address</p>
          <div class="overflow-x-auto rounded-lg bg-gray-100 px-3 py-2">
            <code class="block whitespace-nowrap font-mono text-sm text-blue-600 sm:text-base">
              <nuxt-link to="/ipv4/31.13.64.16" class="hover:text-blue-700">ipv4:31.13.64.16</nuxt-link>
              ·
              <nuxt-link to="/ipv4/172.217.23.142" class="hover:text-blue-700">ipv4:172.217.23.142</nuxt-link>
              ·
              <nuxt-link to="/ipv4/198.185.159.144" class="hover:text-blue-700">ipv4:198.185.159.144</nuxt-link>
            </code>
          </div>
        </li>

        <li class="space-y-3">
          <p class="text-lg font-semibold text-gray-900 sm:text-xl">Search for a specific name server</p>
          <div class="overflow-x-auto rounded-lg bg-gray-100 px-3 py-2">
            <code class="block whitespace-nowrap font-mono text-sm text-blue-600 sm:text-base">
              <nuxt-link to="/ns/ns2.google.com" class="hover:text-blue-700">ns:ns2.google.com</nuxt-link>
              ·
              <nuxt-link to="/ns/dns3.arubadns.net" class="hover:text-blue-700">ns:dns3.arubadns.net</nuxt-link>
              ·
              <nuxt-link to="/ns/c.ns.c10r.facebook.com" class="hover:text-blue-700">ns:c.ns.c10r.facebook.com</nuxt-link>
            </code>
          </div>
        </li>

        <li class="space-y-3">
          <p class="text-lg font-semibold text-gray-900 sm:text-xl">Search for a specific subnet</p>
          <div class="overflow-x-auto rounded-lg bg-gray-100 px-3 py-2">
            <code class="block whitespace-nowrap font-mono text-sm text-blue-600 sm:text-base">
              <nuxt-link to="/cidr/8.8.8.0/24" class="hover:text-blue-700">cidr:8.8.8.0/24</nuxt-link>
              ·
              <nuxt-link to="/cidr/213.133.0.0/19" class="hover:text-blue-700">cidr:213.133.0.0/19</nuxt-link>
              ·
              <nuxt-link to="/cidr/144.217.0.0/16" class="hover:text-blue-700">cidr:144.217.0.0/16</nuxt-link>
            </code>
          </div>
        </li>

        <li class="space-y-3">
          <p class="text-lg font-semibold text-gray-900 sm:text-xl">Search for a specific server</p>
          <div class="overflow-x-auto rounded-lg bg-gray-100 px-3 py-2">
            <code class="block whitespace-nowrap font-mono text-sm text-blue-600 sm:text-base">
              <nuxt-link to="/server/Nginx" class="hover:text-blue-700">server:Nginx</nuxt-link>
              ·
              <nuxt-link to="/server/Apache/2.2.22 (Debian)" class="hover:text-blue-700">server:Apache/2.2.22 (Debian)</nuxt-link>
              ·
              <nuxt-link to="/server/aruba-proxy" class="hover:text-blue-700">server:aruba-proxy</nuxt-link>
            </code>
          </div>
          <p class="max-w-3xl text-sm leading-relaxed text-gray-700 sm:text-base">
            These are a few examples how you can find datasets with a specific server. You can search with this condition for
            all server names we have in our database.
          </p>
        </li>

        <li class="space-y-3">
          <p class="text-lg font-semibold text-gray-900 sm:text-xl">Search for a specific site</p>
          <div class="overflow-x-auto rounded-lg bg-gray-100 px-3 py-2">
            <code class="block whitespace-nowrap font-mono text-sm text-blue-600 sm:text-base">
              <nuxt-link to="/site/google.de" class="hover:text-blue-700">site:google.de</nuxt-link>
              ·
              <nuxt-link to="/site/hackerone.com" class="hover:text-blue-700">site:hackerone.com</nuxt-link>
              ·
              <nuxt-link to="/site/yandex.ru" class="hover:text-blue-700">site:yandex.ru</nuxt-link>
              ·
              <nuxt-link to="/site/fb.com" class="hover:text-blue-700">site:fb.com</nuxt-link>
            </code>
          </div>
        </li>

        <li class="space-y-3">
          <p class="text-lg font-semibold text-gray-900 sm:text-xl">Search for a specific CNAME record</p>
          <div class="overflow-x-auto rounded-lg bg-gray-100 px-3 py-2">
            <code class="block whitespace-nowrap font-mono text-sm text-blue-600 sm:text-base">
              <nuxt-link to="/cname/shops.myshopify.com" class="hover:text-blue-700">cname:shops.myshopify.com</nuxt-link>
              ·
              <nuxt-link to="/cname/domains.shoplineapp.com" class="hover:text-blue-700">cname:domains.shoplineapp.com</nuxt-link>
              ·
              <nuxt-link to="/cname/lb.wordpress.com" class="hover:text-blue-700">cname:lb.wordpress.com</nuxt-link>
            </code>
          </div>
        </li>

        <li class="space-y-3">
          <p class="text-lg font-semibold text-gray-900 sm:text-xl">Search for a specific MX record</p>
          <div class="overflow-x-auto rounded-lg bg-gray-100 px-3 py-2">
            <code class="block whitespace-nowrap font-mono text-sm text-blue-600 sm:text-base">
              <nuxt-link to="/mx/alt3.aspmx.l.google.com" class="hover:text-blue-700">mx:alt3.aspmx.l.google.com</nuxt-link>
              ·
              <nuxt-link to="/mx/smtp.secureserver.net" class="hover:text-blue-700">mx:smtp.secureserver.net</nuxt-link>
              ·
              <nuxt-link to="/mx/mx.yandex.ru" class="hover:text-blue-700">mx:mx.yandex.ru</nuxt-link>
            </code>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
