export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        'http-equiv': 'X-UA-Compatible',
        content: 'IE=edge'
      },
      {
        name: 'msapplication-TileColor',
        content: '#6b46c1'
      },
      {
        name: 'msapplication-TileImage',
        content: '/ms-icon-144x144.png'
      },
      {
        name: 'theme-color',
        content: '#6b46c1'
      },
      {
        property: 'og:site_name',
        content: 'purplepee.co'
      },
      {
        property: 'og:title',
        content: 'purplepee.co - Open source ASN lookup'
      },
      {
        property: 'og:description',
        content: 'Purplepee is a simple tool allowing individuals to view all sort of analytics data about the current state and structure of the internet.'
      },
      {
        property: 'og:url',
        content: 'https://purplepee.co'
      },
      {
        property: 'og:image',
        content: '/logo-300x300.png'
      },
      {
        property: 'og:image:type',
        content: 'image/png'
      },
      {
        property: 'og:image:width',
        content: '300'
      },
      {
        property: 'og:image:height',
        content: '300'
      },
      {
        property: 'og:type',
        content: 'website'
      },
      {
        property: 'og:locale',
        content: 'en_US'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || 'Purplepee is a simple tool allowing individuals to view all sort of analytics data about the current state and structure of the internet.'
      }
    ],
    link: [{
        rel: 'apple-touch-icon',
        sizes: '60x60',
        href: '/apple-icon-60x60.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '76x76',
        href: '/apple-icon-76x76.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '120x120',
        href: '/apple-icon-120x120.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '152x152',
        href: '/apple-icon-152x152.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-icon-180x180.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        href: '/android-icon-192x192.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '256x256',
        href: '/android-icon-256x256.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '512x512',
        href: '/android-icon-512x512.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png'
      },
      {
        rel: 'manifest',
        href: '/manifest.json'
      }
    ],
    titleTemplate: '%s - purplepee.co',
    title: process.env.npm_package_name || 'Open source ASN lookup',
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#6b46c1'
  },

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{
    src: '~/plugins/axios.js',
    ssr: false
  }, {
    src: '~/plugins/localStorage.js',
    ssr: false
  }],

  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/dotenv'
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios',
  ],

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
