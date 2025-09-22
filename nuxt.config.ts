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
          content: 'NetScanner'
        },
        {
          property: 'og:title',
          content: 'NetScanner - Advanced Internet Intelligence & Network Analysis Platform'
        },
        {
          property: 'og:description',
          content:
            'Discover comprehensive network intelligence with NetScanner. Advanced domain analysis, ASN lookups, SSL certificate monitoring, real-time network scanning, and cybersecurity research tools. Free API access with 20+ endpoints for developers and security professionals.'
        },
        {
          property: 'og:url',
          content: 'https://netscanner.io'
        },
        {
          property: 'og:image',
          content: 'https://netscanner.io/logo-300x300.png'
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
          property: 'og:image:alt',
          content: 'NetScanner - Internet Intelligence Platform Logo'
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
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          name: 'twitter:site',
          content: '@netscanner_io'
        },
        {
          name: 'twitter:creator',
          content: '@netscanner_io'
        },
        {
          name: 'twitter:title',
          content: 'NetScanner - Advanced Internet Intelligence & Network Analysis'
        },
        {
          name: 'twitter:description',
          content: 'Comprehensive network intelligence platform with domain analysis, ASN lookups, SSL monitoring, and real-time scanning. Free API for developers.'
        },
        {
          name: 'twitter:image',
          content: 'https://netscanner.io/logo-300x300.png'
        },
        {
          name: 'twitter:image:alt',
          content: 'NetScanner Platform Logo'
        },
        {
          name: 'author',
          content: 'NetScanner Team'
        },
        {
          name: 'robots',
          content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
        },
        {
          name: 'googlebot',
          content: 'index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1'
        },
        {
          name: 'language',
          content: 'en'
        },
        {
          name: 'classification',
          content: 'Network Analysis, Cybersecurity, API, Developer Tools'
        },
        {
          name: 'category',
          content: 'Technology'
        },
        {
          name: 'coverage',
          content: 'Worldwide'
        },
        {
          name: 'distribution',
          content: 'Global'
        },
        {
          name: 'rating',
          content: 'General'
        },
        {
          key: 'description',
          name: 'description',
          content:
            'NetScanner provides advanced internet intelligence and network analysis capabilities. Explore domains, ASN lookups, SSL certificates, real-time scanning, and comprehensive API access. Essential tools for cybersecurity professionals, researchers, and developers.'
        },
        {
          name: 'keywords',
          content: 'network analysis, domain intelligence, ASN lookup, SSL certificates, cybersecurity, API, real-time scanning, DNS analysis, IP geolocation, infrastructure monitoring, security research, developer tools, OSINT, network reconnaissance'
        },
        {
          name: 'application-name',
          content: 'NetScanner'
        },
        {
          name: 'apple-mobile-web-app-title',
          content: 'NetScanner'
        },
        {
          name: 'apple-mobile-web-app-capable',
          content: 'yes'
        },
        {
          name: 'apple-mobile-web-app-status-bar-style',
          content: 'black-translucent'
        },
        {
          name: 'mobile-web-app-capable',
          content: 'yes'
        },
        {
          name: 'geo.region',
          content: 'US'
        },
        {
          name: 'geo.placename',
          content: 'United States'
        },
        {
          name: 'format-detection',
          content: 'telephone=no'
        },
        {
          'http-equiv': 'Content-Security-Policy',
          content: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://unpkg.com; style-src 'self' 'unsafe-inline' https://unpkg.com; img-src 'self' data: https:; connect-src 'self' https: wss:; font-src 'self' data:; object-src 'none'; media-src 'self'; frame-src 'none';"
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
        },
        {
          rel: 'canonical',
          href: 'https://netscanner.io'
        },
        {
          rel: 'sitemap',
          type: 'application/xml',
          href: '/sitemaps.xml'
        }
      ],
      titleTemplate: '%s | NetScanner - Internet Intelligence Platform',
      title: 'Advanced Network Analysis & Domain Intelligence'
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
