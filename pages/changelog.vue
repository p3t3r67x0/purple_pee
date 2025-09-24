<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-slate-100 flex flex-col">
    <Navbar />

    <main class="flex-grow">
      <section class="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-12">
            <div class="inline-flex items-center gap-3 mb-6">
              <div class="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-500/20">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11 5H6a2 2 0 00-2 2v11a1 1 0 001 1h14a1 1 0 001-1V9a2 2 0 00-2-2h-5l-2-2z"
                  />
                </svg>
              </div>
              <div class="text-left">
                <h1 class="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                  NetScanner Changelog
                </h1>
                <p class="text-sm uppercase tracking-[0.3em] text-amber-300/80 mt-2">Release notes & platform updates</p>
              </div>
            </div>
            <p class="text-lg text-slate-300 leading-relaxed">
              Stay up to date with the latest improvements, fixes, and enhancements shipped to the NetScanner platform.
              These release notes are automatically sourced from our public GitHub repository.
            </p>
          </div>

          <div class="bg-slate-900/60 backdrop-blur-sm border border-amber-500/20 rounded-3xl shadow-2xl shadow-amber-500/10 overflow-hidden">
            <div v-if="pending" class="p-10 flex flex-col items-center gap-4 text-slate-300">
              <div class="w-10 h-10 border-2 border-amber-400 border-t-transparent rounded-full animate-spin"></div>
              <p class="text-sm uppercase tracking-[0.35em] text-amber-200/80">Loading changelog…</p>
            </div>
            <div v-else-if="error" class="p-8 sm:p-10 space-y-4 text-center">
              <h2 class="text-2xl font-semibold text-white">We couldn't load the changelog right now</h2>
              <p class="text-slate-300">
                Something went wrong while fetching the latest updates from GitHub.
                You can try again in a moment or read the changelog directly on GitHub.
              </p>
              <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <button
                  type="button"
                  class="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-medium shadow-lg shadow-amber-500/30 hover:from-amber-400 hover:to-orange-400 transition"
                  @click="refresh"
                >
                  Retry loading
                </button>
                <a
                  :href="githubChangelogUrl"
                  target="_blank"
                  class="px-6 py-3 rounded-xl border border-amber-400/50 text-amber-200 hover:text-white hover:border-amber-300 transition"
                >
                  View on GitHub
                </a>
              </div>
            </div>
            <div v-else class="relative">
              <div class="absolute inset-x-0 h-24 bg-gradient-to-b from-amber-500/5 to-transparent pointer-events-none"></div>
              <div class="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-amber-500/5 to-transparent pointer-events-none"></div>

              <div class="p-6 sm:p-8 lg:p-10 space-y-6">
                <div class="flex flex-wrap items-center justify-between gap-3 text-xs uppercase tracking-[0.3em] text-amber-200/70">
                  <span class="flex items-center gap-2">
                    <span class="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    Live from GitHub
                  </span>
                  <a :href="githubChangelogUrl" target="_blank" class="flex items-center gap-2 text-amber-200 hover:text-white transition">
                    <span>Open on GitHub</span>
                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5h10m0 0v10m0-10L5 19"></path>
                    </svg>
                  </a>
                </div>

                <pre class="max-h-[70vh] overflow-y-auto whitespace-pre-wrap leading-relaxed text-sm text-slate-200/90 font-mono bg-black/20 rounded-2xl p-6 border border-white/5 shadow-inner">
{{ changelogText }}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import Footer from '@/components/NavFooter.vue'
import Navbar from '@/components/NavHeader.vue'
const githubChangelogUrl = 'https://github.com/p3t3r67x0/purple_pee/blob/main/CHANGELOG.md'

const { data, pending, error, refresh } = await useAsyncData('repo-changelog', async () => {
  try {
    const response = await $fetch<string>('https://raw.githubusercontent.com/p3t3r67x0/purple_pee/main/CHANGELOG.md', {
      responseType: 'text',
      headers: {
        Accept: 'text/plain'
      }
    })
    return response?.trim() ?? ''
  } catch (err) {
    console.error('Failed to load changelog', err)
    throw err
  }
})

const changelogText = computed(() => data.value ?? '')

useHead(() => ({
  title: 'NetScanner Changelog & Release Notes',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Discover the latest NetScanner releases, features, and bug fixes. This changelog is sourced directly from the official GitHub repository.'
    },
    {
      name: 'keywords',
      content: 'netscanner changelog, release notes, product updates, platform changes, version history'
    },
    {
      property: 'og:title',
      content: 'NetScanner Changelog & Release Notes'
    },
    {
      property: 'og:description',
      content: 'Follow NetScanner development with the latest updates synced from GitHub.'
    }
  ]
}))
</script>
