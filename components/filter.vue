<template>
  <div id="xhr" class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
    <div class="glass-panel space-y-10 rounded-3xl border border-white/10 px-5 py-8 shadow-glass sm:px-10 sm:py-12">
      <header class="space-y-3 text-center sm:text-left">
        <h2 class="text-2xl font-semibold text-white sm:text-3xl">Search with conditional queries</h2>
        <p class="mx-auto max-w-3xl text-sm leading-relaxed text-white/70 sm:text-base">
          To get the most out of purplepee.co it's important to understand how to filter your search results by specific
          properties. Note that there is no space in between the filter name and its value. They take the format of
          <code class="rounded border border-white/15 bg-white/10 px-1 py-0.5 text-xs font-semibold text-white/80">filter:value</code>.
        </p>
      </header>

      <ul class="space-y-8">
        <li class="space-y-3">
          <p class="text-lg font-semibold text-white sm:text-xl">Search for a specific port</p>
          <div class="overflow-x-auto rounded-lg bg-white/10 border border-white/15 px-3 py-2">
            <code class="block whitespace-nowrap font-mono text-sm text-cosmic-aurora sm:text-base">
              <nuxt-link to="/port/21" class="hover:text-cosmic-rose">port:21</nuxt-link> ·
              <nuxt-link to="/port/3306" class="hover:text-cosmic-rose">port:3306</nuxt-link> ·
              <nuxt-link to="/port/27017" class="hover:text-cosmic-rose">port:27017</nuxt-link> ·
              <nuxt-link to="/port/443" class="hover:text-cosmic-rose">port:443</nuxt-link> ·
              <nuxt-link to="/port/111" class="hover:text-cosmic-rose">port:111</nuxt-link> ·
              <nuxt-link to="/port/80" class="hover:text-cosmic-rose">port:80</nuxt-link> ·
              <nuxt-link to="/port/25" class="hover:text-cosmic-rose">port:25</nuxt-link>
            </code>
          </div>
          <p class="max-w-3xl text-sm leading-relaxed text-white/70 sm:text-base">
            We provide you a bunch of ports to search for. You can search for following ports 21, 22, 25, 53, 80, 111, 443,
            29015, 7574, 8983 with the syntax above.
          </p>
        </li>

        <li class="space-y-3">
          <p class="text-lg font-semibold text-white sm:text-xl">Search for a specific status code</p>
          <div class="overflow-x-auto rounded-lg bg-white/10 border border-white/15 px-3 py-2">
            <code class="block whitespace-nowrap font-mono text-sm text-cosmic-aurora sm:text-base">
              <nuxt-link to="/status/100" class="hover:text-cosmic-rose">status:100</nuxt-link> ·
              <nuxt-link to="/status/302" class="hover:text-cosmic-rose">status:302</nuxt-link> ·
              <nuxt-link to="/status/400" class="hover:text-cosmic-rose">status:400</nuxt-link> ·
              <nuxt-link to="/status/307" class="hover:text-cosmic-rose">status:307</nuxt-link> ·
              <nuxt-link to="/status/500" class="hover:text-cosmic-rose">status:500</nuxt-link>
            </code>
          </div>
          <p class="max-w-3xl text-sm leading-relaxed text-white/70 sm:text-base">
            With this query you can search for a specific HTTP response status codes. See
            <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Status" target="_blank" class="text-cosmic-aurora hover:text-cosmic-rose">
              Mozillas developer guide
            </a>
            for further information.
          </p>
        </li>

        <li class="space-y-3">
          <p class="text-lg font-semibold text-white sm:text-xl">Search for a specific ISO country code</p>
          <div class="overflow-x-auto rounded-lg bg-white/10 border border-white/15 px-3 py-2">
            <code class="block whitespace-nowrap font-mono text-sm text-cosmic-aurora sm:text-base">
              <nuxt-link to="/country/SG" class="hover:text-cosmic-rose">country:SG</nuxt-link> ·
              <nuxt-link to="/country/US" class="hover:text-cosmic-rose">country:US</nuxt-link> ·
              <nuxt-link to="/country/CA" class="hover:text-cosmic-rose">country:CA</nuxt-link> ·
              <nuxt-link to="/country/DE" class="hover:text-cosmic-rose">country:DE</nuxt-link> ·
              <nuxt-link to="/country/VN" class="hover:text-cosmic-rose">country:VN</nuxt-link>
            </code>
          </div>
          <p class="max-w-3xl text-sm leading-relaxed text-white/70 sm:text-base">
            Using the above example, if you wanted to find devices located in Singapore then you would use the country search
            parameter to filter your results for <code class="rounded bg-white/10 border border-white/15 px-1 py-0.5 text-xs font-semibold text-white/80">country:SG</code>.
          </p>
        </li>

        <li class="space-y-3">
          <p class="text-lg font-semibold text-white sm:text-xl">Search for a specific hoster or organisation</p>
          <div class="overflow-x-auto rounded-lg bg-white/10 border border-white/15 px-3 py-2">
            <code class="block whitespace-nowrap font-mono text-sm text-cosmic-aurora sm:text-base">
              <nuxt-link to="/org/DIGITALOCEAN-ASN - DigitalOcean, LLC, US" class="hover:text-cosmic-rose">
                org:DIGITALOCEAN-ASN - DigitalOcean, LLC, US
              </nuxt-link>
              ·
              <nuxt-link to="/org/OVH, FR" class="hover:text-cosmic-rose">org:OVH, FR</nuxt-link>
              ·
              <nuxt-link to="/org/ARUBA-ASN, IT" class="hover:text-cosmic-rose">org:ARUBA-ASN, IT</nuxt-link>
            </code>
          </div>
        </li>

        <li class="space-y-3">
          <p class="text-lg font-semibold text-white sm:text-xl">Search for a specific SSH banner</p>
          <div class="overflow-x-auto rounded-lg bg-white/10 border border-white/15 px-3 py-2">
            <code class="block whitespace-nowrap font-mono text-sm text-cosmic-aurora sm:text-base">
              <nuxt-link to="/banner/SSH-2.0-OpenSSH_7.9" class="hover:text-cosmic-rose">banner:SSH-2.0-OpenSSH_7.9</nuxt-link>
              ·
              <nuxt-link to="/banner/SSH-2.0-OpenSSH_6.6.1p1 Ubuntu-2ubuntu2.13" class="hover:text-cosmic-rose">
                banner:SSH-2.0-OpenSSH_6.6.1p1 Ubuntu-2ubuntu2.13
              </nuxt-link>
            </code>
          </div>
        </li>

        <li class="space-y-3">
          <p class="text-lg font-semibold text-white sm:text-xl">Search for a specific service</p>
          <div class="overflow-x-auto rounded-lg bg-white/10 border border-white/15 px-3 py-2">
            <code class="block whitespace-nowrap font-mono text-sm text-cosmic-aurora sm:text-base">
              <nuxt-link to="/service/PleskLin" class="hover:text-cosmic-rose">service:PleskLin</nuxt-link>
              ·
              <nuxt-link to="/service/Nette Framework" class="hover:text-cosmic-rose">service:Nette Framework</nuxt-link>
              ·
              <nuxt-link to="/service/SmugMug/1.0" class="hover:text-cosmic-rose">service:SmugMug/1.0</nuxt-link>
            </code>
          </div>
        </li>

        <li class="space-y-3">
          <p class="text-lg font-semibold text-white sm:text-xl">Search for a specific registry</p>
          <div class="overflow-x-auto rounded-lg bg-white/10 border border-white/15 px-3 py-2">
            <code class="block whitespace-nowrap font-mono text-sm text-cosmic-aurora sm:text-base">
              <nuxt-link to="/registry/apnic" class="hover:text-cosmic-rose">registry:apnic</nuxt-link>
              ·
              <nuxt-link to="/registry/ripencc" class="hover:text-cosmic-rose">registry:ripencc</nuxt-link>
              ·
              <nuxt-link to="/registry/afrinic" class="hover:text-cosmic-rose">registry:afrinic</nuxt-link>
              ·
              <nuxt-link to="/registry/arin" class="hover:text-cosmic-rose">registry:arin</nuxt-link>
            </code>
          </div>
        </li>

        <li class="space-y-3">
          <p class="text-lg font-semibold text-white sm:text-xl">Search for a specific IPv4 address</p>
          <div class="overflow-x-auto rounded-lg bg-white/10 border border-white/15 px-3 py-2">
            <code class="block whitespace-nowrap font-mono text-sm text-cosmic-aurora sm:text-base">
              <nuxt-link to="/ipv4/31.13.64.16" class="hover:text-cosmic-rose">ipv4:31.13.64.16</nuxt-link>
              ·
              <nuxt-link to="/ipv4/172.217.23.142" class="hover:text-cosmic-rose">ipv4:172.217.23.142</nuxt-link>
              ·
              <nuxt-link to="/ipv4/198.185.159.144" class="hover:text-cosmic-rose">ipv4:198.185.159.144</nuxt-link>
            </code>
          </div>
        </li>

        <li class="space-y-3">
          <p class="text-lg font-semibold text-white sm:text-xl">Search for a specific name server</p>
          <div class="overflow-x-auto rounded-lg bg-white/10 border border-white/15 px-3 py-2">
            <code class="block whitespace-nowrap font-mono text-sm text-cosmic-aurora sm:text-base">
              <nuxt-link to="/ns/ns2.google.com" class="hover:text-cosmic-rose">ns:ns2.google.com</nuxt-link>
              ·
              <nuxt-link to="/ns/dns3.arubadns.net" class="hover:text-cosmic-rose">ns:dns3.arubadns.net</nuxt-link>
              ·
              <nuxt-link to="/ns/c.ns.c10r.facebook.com" class="hover:text-cosmic-rose">ns:c.ns.c10r.facebook.com</nuxt-link>
            </code>
          </div>
        </li>

        <li class="space-y-3">
          <p class="text-lg font-semibold text-white sm:text-xl">Search for a specific subnet</p>
          <div class="overflow-x-auto rounded-lg bg-white/10 border border-white/15 px-3 py-2">
            <code class="block whitespace-nowrap font-mono text-sm text-cosmic-aurora sm:text-base">
              <nuxt-link to="/cidr/8.8.8.0/24" class="hover:text-cosmic-rose">cidr:8.8.8.0/24</nuxt-link>
              ·
              <nuxt-link to="/cidr/213.133.0.0/19" class="hover:text-cosmic-rose">cidr:213.133.0.0/19</nuxt-link>
              ·
              <nuxt-link to="/cidr/144.217.0.0/16" class="hover:text-cosmic-rose">cidr:144.217.0.0/16</nuxt-link>
            </code>
          </div>
        </li>

        <li class="space-y-3">
          <p class="text-lg font-semibold text-white sm:text-xl">Search for a specific server</p>
          <div class="overflow-x-auto rounded-lg bg-white/10 border border-white/15 px-3 py-2">
            <code class="block whitespace-nowrap font-mono text-sm text-cosmic-aurora sm:text-base">
              <nuxt-link to="/server/Nginx" class="hover:text-cosmic-rose">server:Nginx</nuxt-link>
              ·
              <nuxt-link to="/server/Apache/2.2.22 (Debian)" class="hover:text-cosmic-rose">server:Apache/2.2.22 (Debian)</nuxt-link>
              ·
              <nuxt-link to="/server/aruba-proxy" class="hover:text-cosmic-rose">server:aruba-proxy</nuxt-link>
            </code>
          </div>
          <p class="max-w-3xl text-sm leading-relaxed text-white/70 sm:text-base">
            These are a few examples how you can find datasets with a specific server. You can search with this condition for
            all server names we have in our database.
          </p>
        </li>

        <li class="space-y-3">
          <p class="text-lg font-semibold text-white sm:text-xl">Search for a specific site</p>
          <div class="overflow-x-auto rounded-lg bg-white/10 border border-white/15 px-3 py-2">
            <code class="block whitespace-nowrap font-mono text-sm text-cosmic-aurora sm:text-base">
              <nuxt-link to="/site/google.de" class="hover:text-cosmic-rose">site:google.de</nuxt-link>
              ·
              <nuxt-link to="/site/hackerone.com" class="hover:text-cosmic-rose">site:hackerone.com</nuxt-link>
              ·
              <nuxt-link to="/site/yandex.ru" class="hover:text-cosmic-rose">site:yandex.ru</nuxt-link>
              ·
              <nuxt-link to="/site/fb.com" class="hover:text-cosmic-rose">site:fb.com</nuxt-link>
            </code>
          </div>
        </li>

        <li class="space-y-3">
          <p class="text-lg font-semibold text-white sm:text-xl">Search for a specific CNAME record</p>
          <div class="overflow-x-auto rounded-lg bg-white/10 border border-white/15 px-3 py-2">
            <code class="block whitespace-nowrap font-mono text-sm text-cosmic-aurora sm:text-base">
              <nuxt-link to="/cname/shops.myshopify.com" class="hover:text-cosmic-rose">cname:shops.myshopify.com</nuxt-link>
              ·
              <nuxt-link to="/cname/domains.shoplineapp.com" class="hover:text-cosmic-rose">cname:domains.shoplineapp.com</nuxt-link>
              ·
              <nuxt-link to="/cname/lb.wordpress.com" class="hover:text-cosmic-rose">cname:lb.wordpress.com</nuxt-link>
            </code>
          </div>
        </li>

        <li class="space-y-3">
          <p class="text-lg font-semibold text-white sm:text-xl">Search for a specific MX record</p>
          <div class="overflow-x-auto rounded-lg bg-white/10 border border-white/15 px-3 py-2">
            <code class="block whitespace-nowrap font-mono text-sm text-cosmic-aurora sm:text-base">
              <nuxt-link to="/mx/alt3.aspmx.l.google.com" class="hover:text-cosmic-rose">mx:alt3.aspmx.l.google.com</nuxt-link>
              ·
              <nuxt-link to="/mx/smtp.secureserver.net" class="hover:text-cosmic-rose">mx:smtp.secureserver.net</nuxt-link>
              ·
              <nuxt-link to="/mx/mx.yandex.ru" class="hover:text-cosmic-rose">mx:mx.yandex.ru</nuxt-link>
            </code>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
