# purple_pee

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
