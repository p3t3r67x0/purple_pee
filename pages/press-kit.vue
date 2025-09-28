<template>
  <div class="relative min-h-screen bg-gradient-to-br from-cosmic-haze via-[#1a1440] to-black text-white">
    <NavHeader />

    <!-- Background Pattern -->
    <div
      class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/15 via-slate-900/10 to-transparent pointer-events-none">
    </div>
    <div
      class="absolute inset-0 bg-grid-white/[0.02] [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.65))] pointer-events-none">
    </div>

    <main class="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
      <!-- Hero -->
      <section class="grid gap-12 lg:grid-cols-[3fr,2fr] items-center mb-16">
        <div>
          <div class="inline-flex items-center gap-3 mb-6">
            <div
              class="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/25">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <span class="text-sm uppercase tracking-[0.35em] text-purple-300/80">Media Resources</span>
          </div>
          <h1 class="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
            <span class="bg-gradient-to-r from-purple-300 via-pink-300 to-amber-300 bg-clip-text text-transparent">
              NetScanner Press Kit
            </span>
          </h1>
          <p class="text-lg sm:text-xl text-slate-200/90 leading-relaxed max-w-2xl">
            Download logos, screenshots, fact sheets, and copy designed for journalists, partners, and event hosts.
            Everything here is cleared for editorial use—just credit NetScanner and link to {{ marketingUrl }} when
            possible.
          </p>

          <div class="mt-8 grid gap-4 sm:grid-cols-3">
            <div v-for="stat in heroStats" :key="stat.label"
              class="rounded-2xl bg-white/5 border border-white/10 px-5 py-4 backdrop-blur-sm">
              <p class="text-3xl font-semibold text-white">{{ stat.value }}</p>
              <p class="text-sm uppercase tracking-[0.35em] text-slate-400">{{ stat.label }}</p>
            </div>
          </div>

          <div class="mt-10 flex flex-wrap items-center gap-4">
            <a href="https://github.com/p3t3r67x0/purple_pee" target="_blank"
              class="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 font-medium text-white shadow-lg shadow-purple-500/30 transition hover:from-purple-400 hover:to-pink-400">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 4h6m0 0v6m0-6L10 14">
                </path>
              </svg>
              Download assets on GitHub
            </a>
            <a href="#media-contact"
              class="inline-flex items-center gap-3 rounded-xl border border-white/20 px-6 py-3 font-medium text-slate-200 transition hover:border-white/40 hover:text-white">
              Media contact
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>

        <div class="relative">
          <div
            class="absolute -inset-4 rounded-3xl bg-gradient-to-br from-purple-500/30 via-pink-500/20 to-transparent blur-3xl">
          </div>
          <div
            class="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl">
            <img :src="toolScreenshot" alt="NetScanner interface overview" class="w-full object-cover" />
            <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <p class="text-sm uppercase tracking-[0.3em] text-purple-200/90">Product UI</p>
              <p class="text-lg font-semibold text-white">NetScanner dashboard and live scan modules</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Press assets -->
      <section class="mb-16">
        <div class="flex flex-wrap items-end justify-between gap-4 mb-8">
          <div>
            <h2 class="text-3xl font-bold text-white">Press materials</h2>
            <p class="text-slate-300 mt-2 max-w-2xl">
              Grab individual assets below. Each download includes light and dark variants where applicable to ensure
              brand consistency across backgrounds.
            </p>
          </div>
        </div>

        <div class="grid gap-6 md:grid-cols-2">
          <article v-for="asset in pressAssets" :key="asset.title"
            class="group relative overflow-hidden rounded-3xl border border-white/10 bg-black/20 p-6 backdrop-blur-sm transition hover:border-white/30">
            <div class="flex items-start justify-between gap-6">
              <div>
                <h3 class="text-xl font-semibold text-white mb-2">{{ asset.title }}</h3>
                <p class="text-sm text-slate-300 leading-relaxed">{{ asset.description }}</p>
                <p class="mt-4 text-xs uppercase tracking-[0.3em] text-slate-400">Formats: {{ asset.formats }}</p>
              </div>
              <div
                class="hidden h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500/40 to-pink-500/40 border border-white/10 sm:flex">
                <svg class="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h16v16H4z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l5-5 4 4 2-2 5 5">
                  </path>
                </svg>
              </div>
            </div>
            <div class="mt-6 flex flex-wrap gap-3">
              <a v-for="link in asset.links" :key="link.label" :href="link.href"
                class="inline-flex items-center gap-2 rounded-xl border border-white/15 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-white/40 hover:text-white"
                target="_blank" rel="noopener">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l5-5 4 4 2-2 5 5">
                  </path>
                </svg>
                {{ link.label }}
              </a>
            </div>
          </article>
        </div>
      </section>

      <!-- Bundled downloads -->
      <section class="mb-16">
        <div class="flex flex-wrap items-end justify-between gap-4 mb-8">
          <div>
            <h2 class="text-3xl font-bold text-white">Complete press kits</h2>
            <p class="text-slate-300 mt-2 max-w-3xl">
              Prefer everything in one place? These curated bundles include ready-to-send assets, fact sheets, and
              talking points.
            </p>
          </div>
        </div>

        <div class="grid gap-6 md:grid-cols-3">
          <article v-for="pack in pressPackages" :key="pack.title"
            class="rounded-3xl border border-white/10 bg-black/20 p-6 backdrop-blur-sm transition hover:border-white/30">
            <div class="flex items-start justify-between gap-4">
              <div>
                <h3 class="text-xl font-semibold text-white">{{ pack.title }}</h3>
                <p class="text-sm text-slate-300 leading-relaxed mt-2">{{ pack.description }}</p>
              </div>
              <span
                class="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-slate-400">
                {{ pack.size }}
              </span>
            </div>
            <a :href="pack.href" target="_blank" rel="noopener"
              class="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-500/80 to-pink-500/80 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-purple-500/20 transition hover:from-purple-400 hover:to-pink-400">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l5-5 4 4 2-2 5 5"></path>
              </svg>
              Download bundle
            </a>
            <p class="mt-4 text-xs text-slate-400">Updated {{ pack.updated }}</p>
          </article>
        </div>
      </section>

      <!-- Brand voice & highlights -->
      <section class="mb-16 space-y-10">
        <div class="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
          <div class="flex flex-col gap-6 lg:flex-row lg:justify-between lg:items-start">
            <div class="max-w-3xl">
              <h2 class="text-3xl font-semibold text-white">Boilerplate copy</h2>
              <p class="mt-4 text-lg text-slate-200 leading-relaxed">
                NetScanner is an open-source network intelligence platform developed by a global community of security
                researchers and contributors. By unifying DNS, ASN, SSL/TLS, and service telemetry, NetScanner helps
                teams discover assets, monitor exposure, and run live scans without maintaining their own scanning
                fleet. The project is community-driven, not backed by any commercial entity.
              </p>
              <p class="mt-4 text-slate-400 text-sm">
                Please reference "NetScanner" as one word with a capital N and S. The platform URL is
                <a :href="marketingHref" class="text-purple-300 hover:text-purple-200" target="_blank">{{ marketingUrl
                  }}</a>.
              </p>
            </div>
            <div class="rounded-2xl border border-white/10 bg-black/20 p-6 text-sm text-slate-200 max-w-sm">
              <h3 class="text-lg font-semibold text-white">Suggested pull quote</h3>
              <p class="mt-3 italic text-slate-300">
                “NetScanner consolidates our live telemetry into a single source of truth, making it easy to brief
                stakeholders on emerging threats.”
              </p>
              <p class="mt-4 text-xs text-slate-500">
                Use or adapt this quote when you need a quick description of what NetScanner delivers for defenders.
              </p>
            </div>
          </div>
        </div>

        <div class="grid gap-6 lg:grid-cols-3">
          <article
            class="rounded-3xl border border-white/10 bg-gradient-to-br from-purple-500/20 via-pink-500/10 to-transparent p-8 backdrop-blur-sm">
            <h2 class="text-2xl font-semibold text-white">Fast facts</h2>
            <p class="mt-2 text-sm uppercase tracking-[0.3em] text-purple-200/80">Key themes for coverage</p>
            <ul class="mt-6 space-y-5 text-slate-200">
              <li v-for="fact in brandFacts" :key="fact.title" class="space-y-2">
                <h3 class="text-base font-semibold text-white">{{ fact.title }}</h3>
                <p class="text-sm text-slate-300 leading-relaxed">{{ fact.description }}</p>
              </li>
            </ul>
          </article>

          <article class="rounded-3xl border border-white/10 bg-black/25 p-8 backdrop-blur-sm">
            <h2 class="text-2xl font-semibold text-white">Usage guidelines</h2>
            <p class="mt-2 text-sm uppercase tracking-[0.3em] text-slate-400">How to represent NetScanner</p>
            <ul class="mt-6 space-y-5 text-slate-200">
              <li v-for="rule in usageGuidelines" :key="rule.title" class="space-y-2">
                <h3 class="text-base font-semibold text-white">{{ rule.title }}</h3>
                <p class="text-sm text-slate-300 leading-relaxed">{{ rule.description }}</p>
              </li>
            </ul>
          </article>

          <article class="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <h2 class="text-2xl font-semibold text-white">Platform pillars</h2>
            <p class="mt-2 text-sm uppercase tracking-[0.3em] text-slate-400">Story starters</p>
            <ul class="mt-6 space-y-5 text-slate-200">
              <li v-for="pillar in platformPillars" :key="pillar.title" class="space-y-2">
                <h3 class="text-base font-semibold text-white">{{ pillar.title }}</h3>
                <p class="text-sm text-slate-300 leading-relaxed">{{ pillar.description }}</p>
              </li>
            </ul>
          </article>
        </div>
      </section>

      <!-- Company timeline -->
      <section class="mb-16">
        <div class="flex flex-wrap items-end justify-between gap-4 mb-8">
          <div>
            <h2 class="text-3xl font-bold text-white">Community milestones</h2>
            <p class="text-slate-300 mt-2 max-w-3xl">
              A quick look at the community-driven project journey from early research tool to a platform adopted by
              defenders worldwide.
            </p>
          </div>
        </div>
        <div class="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
          <ol class="relative border-l border-white/15 pl-6">
            <li v-for="event in timelineEvents" :key="event.year + event.title" class="mb-10 last:mb-0">
              <span
                class="absolute -left-[13px] flex h-6 w-6 items-center justify-center rounded-full border-2 border-purple-400 bg-black text-xs font-semibold text-purple-200">
                {{ event.year }}
              </span>
              <h3 class="text-xl font-semibold text-white">{{ event.title }}</h3>
              <p class="mt-2 text-sm text-slate-300 leading-relaxed">{{ event.description }}</p>
            </li>
          </ol>
        </div>
      </section>

      <!-- FAQ -->
      <section class="mb-20">
        <div class="flex flex-wrap items-end justify-between gap-4 mb-8">
          <div>
            <h2 class="text-3xl font-bold text-white">FAQ</h2>
            <p class="text-slate-300 mt-2 max-w-3xl">
              Quick answers to the questions we hear most from reporters and conference organizers.
            </p>
          </div>
        </div>
        <div class="grid gap-6 md:grid-cols-2">
          <article v-for="item in faqItems" :key="item.question"
            class="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <h3 class="text-xl font-semibold text-white">{{ item.question }}</h3>
            <p class="mt-3 text-sm text-slate-300 leading-relaxed">{{ item.answer }}</p>
          </article>
        </div>
      </section>

      <!-- Media contact -->
      <section id="media-contact" class="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
        <div class="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 class="text-3xl font-semibold text-white">Media inquiries</h2>
            <p class="text-slate-300 mt-3 max-w-2xl">
              Need interview availability, quotes, or custom assets? Our community maintainers are available for
              journalists, analysts, conference organizers, and partners covering open-source security tools.
            </p>
            <div class="mt-6 space-y-4 text-slate-200">
              <p class="flex items-center gap-3">
                <span
                  class="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500">
                  <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                    </path>
                  </svg>
                </span>
                <a href="mailto:press@netscanner.io"
                  class="text-purple-300 hover:text-purple-200 transition">press@netscanner.io</a>
              </p>
              <p class="flex items-center gap-3">
                <span
                  class="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500">
                  <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </span>
                <span>Global remote team • Available across time zones</span>
              </p>
            </div>
          </div>
          <div class="rounded-2xl border border-white/10 bg-black/30 p-6 text-sm text-slate-300 max-w-sm">
            <h3 class="text-lg font-semibold text-white mb-3">Embargo policy</h3>
            <p>
              We often preview upcoming releases under embargo. Email us with your publication and deadline to request
              early access to project roadmaps or security research.
            </p>
          </div>
        </div>
      </section>
    </main>

    <NavFooter />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import NavFooter from '@/components/NavFooter.vue'
import NavHeader from '@/components/NavHeader.vue'
import toolScreenshot from '@/assets/img/netscanner_screenshot.png'
import { useNuxtApp } from '#app'

declare const useHead: any

const { $env } = useNuxtApp()
const marketingBase = computed(() => $env?.BASE_URL)
const marketingUrl = computed(() => marketingBase.value.replace(/^https?:\/\//, ''))
const marketingHref = computed(() => marketingBase.value)

const heroStats = [
  { label: 'Founded', value: '2019' },
  { label: 'Live scans / month', value: '40K+' },
  { label: 'Global coverage', value: '180+ regions' }
]

const pressAssets = [
  {
    title: 'Primary logo set',
    description: 'Full-color and monochrome wordmarks for light and dark backgrounds.',
    formats: 'PNG, SVG',
    links: [
      { label: 'Download PNG', href: '/logo-300x300.png' },
      { label: 'Download SVG', href: '/safari-pinned-tab.svg' }
    ]
  },
  {
    title: 'Product screenshots',
    description: 'High-resolution captures of the NetScanner dashboard, live scan flow, and asset explorer.',
    formats: 'PNG',
    links: [
      { label: 'Dashboard view', href: toolScreenshot }
    ]
  },
  {
    title: 'Icon set',
    description: 'Square icons for app stores, favicons, and social avatars.',
    formats: 'PNG',
    links: [
      { label: '512×512 icon', href: '/android-chrome-512x512.png' },
      { label: '256×256 icon', href: '/android-chrome-256x256.png' }
    ]
  },
  {
    title: 'Brand color palette',
    description: 'HEX and RGB values for our core gradients and neutrals.',
    formats: 'JSON',
    links: [
      { label: 'Download palette JSON', href: '/brand-palette.json' }
    ]
  }
]

const pressPackages = [
  {
    title: 'Complete media kit',
    description: 'All brand assets, boilerplate copy, fact sheet, and recent changelog in one download.',
    size: 'ZIP',
    href: 'https://github.com/p3t3r67x0/purple_pee/archive/refs/heads/master.zip',
    updated: 'Sep 2025'
  },
  {
    title: 'Product briefing notes',
    description: 'Overview of roadmap themes, flagship capabilities, and recommended messaging for interviews.',
    size: 'Markdown',
    href: 'https://github.com/p3t3r67x0/purple_pee/blob/master/README.md',
    updated: 'Sep 2025'
  },
  {
    title: 'Screenshots package',
    description: 'Curated PNGs showing dashboards, live scans, and network map visualizations.',
    size: 'PNG bundle',
    href: 'https://raw.githubusercontent.com/p3t3r67x0/purple_pee/master/assets/img/netscanner_screenshot.png',
    updated: 'Sep 2025'
  }
]

const brandFacts = [
  {
    title: 'Open-source & community-driven',
    description: 'NetScanner is fully open-source, developed by security researchers and contributors worldwide. No corporate backing, no commercial agenda—just community-focused network intelligence.'
  },
  {
    title: 'Security-first design',
    description: 'NetScanner aggregates DNS, SSL/TLS, service metadata, and open-source intelligence to deliver actionable context to defenders.'
  },
  {
    title: 'API & automation ready',
    description: 'Community-built REST and WebSocket endpoints let teams trigger live scans, pull history, and enrich SIEM pipelines with a few lines of code.'
  },
  {
    title: 'Trusted by analysts worldwide',
    description: 'Hundreds of analysts, researchers, and operators rely on NetScanner to maintain situational awareness across their digital estate.'
  }
]

const usageGuidelines = [
  {
    title: 'Credit NetScanner and link back',
    description: 'Reference NetScanner by name and include netscanner.io or the GitHub repository when sharing assets.'
  },
  {
    title: 'Keep logos intact',
    description: 'Do not stretch, recolor, or place the logo on backgrounds that reduce legibility. Use the provided light/dark variants.'
  },
  {
    title: 'Label platform screenshots',
    description: 'Include context for which module or insight is depicted to help readers understand what they are viewing.'
  },
  {
    title: 'Preview quotes where possible',
    description: 'Email press@netscanner.io for approvals if you plan to attribute direct quotes to specific team members.'
  }
]

const platformPillars = [
  {
    title: 'Unified telemetry',
    description: 'One workspace for DNS, SSL/TLS, port scanning, and service metadata removes the handoff friction between different toolchains.'
  },
  {
    title: 'Operator-friendly automation',
    description: 'Live scans, scheduled jobs, and webhook alerts keep defenders informed without requiring custom infrastructure.'
  },
  {
    title: 'Transparent data lineage',
    description: 'Every result includes sourcing, timestamps, and enrichment notes so analysts can trace findings back to the original evidence.'
  }
]

const timelineEvents = [
  {
    year: '2019',
    title: 'Community project launch',
    description: 'Open-source prototype released to security researchers as a lightweight interface for DNS intelligence. No corporate backing—just community collaboration.'
  },
  {
    year: '2020',
    title: 'Launch of live scan engine',
    description: 'Community contributors introduced on-demand scanning and visualization, expanding coverage to IPv6 and global ASN datasets.'
  },
  {
    year: '2022',
    title: 'API & automation rollout',
    description: 'Community-developed REST and WebSocket endpoints plus SDK samples for integrating NetScanner into SOC workflows.'
  },
  {
    year: '2024',
    title: 'Community program milestones',
    description: 'Opened documentation, changelog, and contributor pathways to the public; thousands of monthly scans now come from community analysts worldwide.'
  },
  {
    year: '2025',
    title: 'Glass UI refresh & press-ready launch',
    description: 'Community delivered the new UI, accessibility upgrades, and this updated press kit to streamline media collaboration.'
  }
]

const faqItems = [
  {
    question: 'Can I edit NetScanner visuals for my publication?',
    answer: 'You may crop screenshots for layout purposes but please avoid altering colors or overlaying additional UI elements that could misrepresent the platform.'
  },
  {
    question: 'How do I request an interview or quote?',
    answer: 'Email press@netscanner.io with your deadline, topic, and preferred spokesperson. Our press desk responds within one business day.'
  },
  {
    question: 'Do you provide early access to upcoming features?',
    answer: 'Yes. We share embargoed briefings with vetted journalists and analysts. Mention “embargo request” in your subject line and we will coordinate a preview.'
  },
  {
    question: 'Is there a demo environment for reviewers?',
    answer: 'We can provision time-limited demo accounts tied to specific stories or conference sessions. Include the data range you need when reaching out.'
  }
]

useHead({
  title: 'NetScanner Press Kit & Media Resources',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Download NetScanner logos, screenshots, fact sheets, and press-ready copy. Contact the NetScanner media team for briefings or interview requests.'
    },
    {
      property: 'og:title',
      content: 'NetScanner Press Kit'
    },
    {
      property: 'og:description',
      content: 'Press-ready logos, screenshots, and boilerplate copy for covering NetScanner and its network intelligence platform.'
    }
  ]
})
</script>
