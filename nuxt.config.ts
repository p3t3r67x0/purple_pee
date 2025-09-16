import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  app: {
    head: {
      script: [
        {
          src: 'https://unpkg.com/vis-network/standalone/umd/vis-network.min.js',
          body: true
        }
      ],
      meta: [
        { charset: 'utf-8' },
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
          content:
            'Purplepee is a simple tool allowing individuals to view all sort of analytics data about the current state and structure of the internet.'
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
          key: 'description',
          name: 'description',
          content:
            'Purplepee is a simple tool allowing individuals to view all sort of analytics data about the current state and structure of the internet.'
        }
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://unpkg.com/vis-network/styles/vis-network.min.css'
        },
        {
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
      title: 'Open source ASN lookup'
    }
  },
  css: [],
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
  plugins: ['~/plugins/env', '~/plugins/store', '~/plugins/router', '~/plugins/persistedState.client'],
  runtimeConfig: {
    public: {
      BASE_URL: process.env.BASE_URL || '',
      FAQ_URL: process.env.FAQ_URL || '#',
      HELP_URL: process.env.HELP_URL || '#',
      SUPPORT_URL: process.env.SUPPORT_URL || '#',
      API_URL: process.env.API_URL || '',
      DOCS_URL: process.env.DOCS_URL || '#',
      ISSUES_URL: process.env.ISSUES_URL || '#',
      TWITTER_URL: process.env.TWITTER_URL || '#',
      FACEBOOK_URL: process.env.FACEBOOK_URL || '#',
      LINKEDIN_URL: process.env.LINKEDIN_URL || '#',
      ABOUT_URL: process.env.ABOUT_URL || '#',
      CONTACT_URL: process.env.CONTACT_URL || '#',
      BLOG_URL: process.env.BLOG_URL || '#',
      TERMS_URL: process.env.TERMS_URL || '#',
      PRIVACY_URL: process.env.PRIVACY_URL || '#',
      IMPRINT_URL: process.env.IMPRINT_URL || '#'
    }
  }
})
