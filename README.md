# purple_pee


## Search with conditional Queries

To get the most out of Purplepee it's important to understand the search query syntax. Search filters are special keywords to tell Purplepee that you wish to search specific properties. Note that there is no space in between the filtername and its value. They take the format of...


### Search for a specific port

`port:21` OR `port:22` OR `port:25` OR `port:53` OR `port:80` OR `port:111` OR `port:443`

We provide you a buch of ports to search for at the moment you can search for ports you see above.


### Search for a specific status code

`status:100` OR `status:302` OR `status:400` OR `status:307` OR `status:500`

With this query you can search for a specific HTTP response status codes. See [https://developer.mozilla.org/de/docs/Web/HTTP/Status](https://developer.mozilla.org/de/docs/Web/HTTP/Status) for further information.


### Search for a specific country

`country:SG` OR `country:US` OR `country:CA` OR `country:DE` OR `country:VN`

Using the above example, if you wanted to find devices located in Singapore then you would use the country search filter which accepts as an argument a 2-letter country code.


### Search for a specific hoster or organisation

`org:hetzner` OR `org:amazon` OR `org:hetzner` OR `org:google`


### Search for a specific registry

`registry:apnic` OR `registry:ripencc` OR `registry:afrinic` OR `registry:arin` OR `registry:lacnic`


### Search for a specific subnet

`cidr:8.8.8.0/24` OR `cidr:213.133.0.0/19` OR `cidr:64.239.160.0/20`


### Search for a specific server

`server:nginx` OR `server:cloudflare` OR `server:apache`

This are a view examples how you can find datasets with a specific server. You can search with this condition for any server name you know and see if there are results.


### Search for a specific site

`site:google.com` OR `site:hackerone.com` OR `site:barackobama.com` OR `site:fb.com`


### Search for a specific cname record

`cname:shops.myshopify.com` OR `cname:domains.shoplineapp.com` OR `cname:lb.wordpress.com`


### Search for a specific mx record

`mx:alt3.aspmx.l.google.com` OR `mx:smtp.secureserver.net` OR `mx:mx.yandex.ru`


![First draft of Purple Pee's UI](/assets/img/purple_pee_screenshot_first_draft.png?raw=true)


## Build Setup

```bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```


## Systemd Setup

```bash
[Unit]
Description=Nuxtjs instance to serve purplepee
After=network.target

[Service]
User=<user>
WorkingDirectory=/home/<user>/git/purple_pee
ExecStart=/usr/bin/node /home/<user>/git/purple_pee/node_modules/.bin/nuxt start --port 3000
Restart=on-failure

[Install]
WantedBy=multi-user.target
```
