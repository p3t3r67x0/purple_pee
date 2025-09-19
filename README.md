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


## Local Development

Install Node.js 20 (LTS) using your preferred method (for example through [nvm](https://github.com/nvm-sh/nvm)) and then install dependencies.

```bash
# install dependencies
npm install

# start the Nuxt 3 dev server on http://localhost:3000
npm run dev
```

`purplepee` reads all public runtime configuration from environment variables. You can copy `.env` to `.env.local` (ignored by git) and adjust it to your needs:

```bash
BASE_URL=http://localhost
FAQ_URL=
HELP_URL=
SUPPORT_URL=
API_URL=http://localhost:8000
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
```

Run a production build locally with:

```bash
npm run build
NODE_ENV=production node .output/server/index.mjs
```


## Systemd Service

Build the project (`npm run build`) and create `/etc/systemd/system/purplepee.service` with the following content. Adjust the paths, user and group to match your environment.

```bash
[Unit]
Description=Nuxt 3 instance to serve purplepee
After=network.target

[Service]
User=<user>
Group=<group>
WorkingDirectory=/home/<user>/git/purple_pee
EnvironmentFile=/etc/purplepee.env
ExecStart=/usr/bin/env NODE_ENV=production PORT=3000 node .output/server/index.mjs
Restart=on-failure
RestartSec=5

[Install]
WantedBy=multi-user.target
```

The optional `/etc/purplepee.env` file can store the same variables as `.env`. After creating or updating the service definition reload systemd, enable the service and start it:

```bash
sudo systemctl daemon-reload
sudo systemctl enable purplepee
sudo systemctl start purplepee
```


## Setup Nginx with SSL

Install dependencies from Ubuntu repository

```bash
sudo apt install nginx-full certbot python-certbot-nginx
```

Create `/etc/nginx/sites-available/purplepee` and symlink it to `sites-enabled`. Replace `purplepee.example.com` with your domain.

```nginx
server {
  listen 80;
  listen [::]:80;
  server_name purplepee.example.com;

  location / {
    proxy_pass http://127.0.0.1:3000;
    proxy_http_version 1.1;
    proxy_set_header Host $host;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
  }
}
```

```bash
sudo ln -s /etc/nginx/sites-available/purplepee /etc/nginx/sites-enabled/purplepee
```

Test the configuration and reload nginx:

```bash
sudo nginx -t
sudo systemctl reload nginx
```

Finally request certificates with certbot:

```bash
sudo certbot --nginx -d purplepee.example.com
```
