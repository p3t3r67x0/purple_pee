# purplepee.co - Open source ASN lookup

> Purplepee is a simple tool allowing individuals to view all sort of analytics data about the current state and structure of the internet. This tool allows you in detail to view general information about a websites HTTP header, a servers DNS records or there IP addresses, a list of open ports and ASN whois information.


## Search with conditional Queries

To get the most out of Purplepee it's important to understand the search query syntax. Search filters are special keywords to tell Purplepee that you wish to search specific properties. Note that there is no space in between the filtername and its value. They take the format of...


### Search for a specific port

`port:21` OR `port:22` OR `port:25` OR `port:53` OR `port:80` OR `port:111` OR `port:443`

We provide you a bunch of ports to search for. You can search for following ports 21, 22, 25, 53, 80, 111, 443, 3306, 5432, 8529, 7000, 7001, 9042, 5984, 9200, 9300, 27017, 27018, 27019, 28017, 7473, 7474, 6379, 8087, 8098, 8080, 28015, 29015, 7574, 8983 with the syntax above.


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

`cidr:8.8.8.0/24` OR `cidr:213.133.0.0/19` OR `cidr:64.239.160.0/2


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
$ sudo apt install npm && npm install

# serve with hot reload at localhost:3000
$ npm run dev

# setup your .env file in the root folder
BASE_URL=
FAQ_URL=
HELP_URL=
SUPPORT_URL=
API_URL=
DOCS_URL=
ISSUES_URL=
TWITTER_URL=
FACEBOOK_URL=
LINKEDIN_URL=
ABOUT_URL=
CONTACT_URL=
BLOG_URL=
TERMS_URL=
PRIVACY_URL=
IMPRINT_URL=

# build for production and launch server
$ npm run build
$ npm run start
```


## Systemd Setup

Create `/etc/systemd/system/purplepee.service` with following content.

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

After you created this file you must enable this service

```bash
sudo systemctl enable purplepee
```


## Setup Nginx with SSL

Install dependencies from Ubuntu repository

```bash
sudo apt install nginx-full certbot python-certbot-nginx
```
