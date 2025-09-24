<template>
  <div class="min-h-screen bg-gradient-to-br from-cosmic-haze via-[#1a1440] to-black text-white">
    <NavHeader />

    <div class="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="text-center mb-14">
        <h1 class="text-4xl sm:text-5xl font-bold mb-6">
          <span class="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">NetScanner Tutorials</span>
        </h1>
        <p class="text-slate-300 max-w-2xl mx-auto leading-relaxed text-lg">
          Learn how to get the most out of NetScanner: network intelligence workflows, API automation patterns,
          infrastructure mapping strategies, and data pivot techniques.
        </p>
      </div>

      <!-- Filters -->
      <div class="mb-12 flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
        <div class="flex flex-wrap gap-2">
          <button
            v-for="t in ['all', ...tags]"
            :key="t"
            @click="setTag(t)"
            :aria-pressed="activeTag === t"
            :class="[
              'px-4 py-2 rounded-full text-xs font-medium uppercase tracking-wide transition-all focus:outline-none focus:ring-2 focus:ring-purple-500/60 focus:ring-offset-0',
              'backdrop-blur-sm border',
              activeTag === t
                ? 'bg-gradient-to-r from-purple-500/40 to-pink-500/40 border-purple-400/40 text-white shadow-inner'
                : 'bg-white/5 hover:bg-white/10 border-white/10 text-slate-300'
            ]"
          >
            {{ t }}
          </button>
        </div>
        <div class="relative w-full md:w-72">
          <input
            v-model="search"
            type="text"
            placeholder="Search tutorials..."
            class="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
          <svg class="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      <!-- Posts List -->
      <div v-if="filteredPosts.length" class="space-y-10">
        <div
          v-for="p in filteredPosts"
          :key="p._id || p.slug"
          class="relative group rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.06] transition-colors p-8 overflow-hidden"
        >
          <!-- subtle gradient accent -->
          <div class="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-transparent"></div>

          <div class="flex flex-col gap-4 relative">
            <div class="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-slate-400">
              <span v-if="p.tags?.length" class="px-2 py-0.5 rounded bg-purple-500/15 text-purple-300 font-medium">{{ p.tags[0] }}</span>
              <span class="h-px w-6 bg-white/10" v-if="p.tags?.length"></span>
              <span>{{ formatDate(p.date) }}</span>
              <span class="h-px w-6 bg-white/10"></span>
              <span>{{ p.readingTime || estimateMinutes(p) }} min read</span>
            </div>

            <h2 class="text-2xl md:text-3xl font-semibold leading-tight">
              <nuxt-link :to="p._path || `/blog/${p.slug}`" class="bg-gradient-to-r from-purple-200 via-white to-pink-200 bg-clip-text text-transparent group-hover:from-purple-300 group-hover:to-pink-300 transition-colors">
                {{ p.title }}
              </nuxt-link>
            </h2>

            <p class="text-slate-300/90 leading-relaxed text-base md:text-lg max-w-3xl">
              {{ p.description }}
            </p>

            <div class="flex flex-wrap gap-2 mt-2" v-if="p.tags?.length">
              <button
                v-for="tag in p.tags"
                :key="tag"
                type="button"
                @click="setTag(tag)"
                :aria-pressed="activeTag === tag"
                :class="[
                  'inline-flex items-center gap-1 rounded-full border px-3 py-1 text-[11px] font-medium tracking-wide transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500/60',
                  activeTag === tag
                    ? 'border-purple-400/60 bg-purple-500/30 text-purple-100'
                    : 'border-purple-400/30 bg-purple-500/10 text-purple-200 hover:bg-purple-500/20'
                ]"
              >
                #{{ tag }}
              </button>
            </div>

            <div class="mt-4 flex items-center gap-6 text-sm">
              <nuxt-link
                :to="p._path || `/blog/${p.slug}`"
                class="inline-flex items-center gap-2 text-purple-300 hover:text-pink-300 transition-colors font-medium"
              >
                Read Tutorial
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="text-center py-24">
        <p class="text-slate-400">No tutorials match your current filters.</p>
      </div>
    </div>

    <NavFooter />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watchEffect, watch } from 'vue'
// Rely on Nuxt auto-imports; declare for type hinting if necessary (avoid #imports path resolution issue)
// eslint-disable-next-line @typescript-eslint/no-unused-vars
declare const useRoute: any, useRouter: any, useHead: any, useAsyncData: any, queryContent: any
const route = useRoute()
const router = useRouter()

useHead({
  title: 'NetScanner Tutorials & Guides',
  meta: [
    { name: 'description', content: 'Tutorials and workflow guides for NetScanner network intelligence platform.' },
    { property: 'og:title', content: 'NetScanner Tutorials & Guides' },
    { property: 'og:description', content: 'Learn ASN lookups, DNS exploration, SSL pivots, automation patterns.' }
  ]
})

const allPosts = ref<any[]>([])
const tags = ref<string[]>([])
const activeTag = ref('all')
const search = ref('')

// Fetch content from /content/blog
const { data } = await useAsyncData('blog-posts', () => queryContent('/blog').where({ published: true }).sort({ date: -1 }).find())

watchEffect(() => {
  if (data.value) {
    allPosts.value = data.value
    const set = new Set<string>()
    data.value.forEach((p: any) => Array.isArray(p.tags) && p.tags.forEach((t: string) => set.add(t)))
    tags.value = Array.from(set).sort()
    // Initialize from query if present
    const qTag = (route.query.tag as string) || 'all'
    if (qTag && (qTag === 'all' || tags.value.includes(qTag))) {
      activeTag.value = qTag
    }
  }
})

const filteredPosts = computed(() => {
  return allPosts.value.filter((p: any) => {
    const tagMatch = activeTag.value === 'all' || (Array.isArray(p.tags) && p.tags.includes(activeTag.value))
    const s = search.value.trim().toLowerCase()
    const searchMatch = !s || (p.title?.toLowerCase().includes(s) || p.description?.toLowerCase().includes(s))
    return tagMatch && searchMatch
  })
})

function formatDate(date?: string) {
  if (!date) return ''
  return new Date(date).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })
}

function estimateMinutes(p: any): number {
  if (p?.body?.children) {
    // Rough word count from text nodes
    const text = p.body.children
      .filter((c: any) => c.type === 'text' || c.type === 'paragraph')
      .map((c: any) => (c.value || c.children?.map((k: any) => k.value).join(' ') || ''))
      .join(' ')
    const words = text.split(/\s+/).filter(Boolean).length
    return Math.max(1, Math.round(words / 200))
  }
  // Fallback if no body yet
  const descWords = (p.description || '').split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.round(descWords / 120))
}

function setTag(tag: string) {
  if (tag === activeTag.value) return
  activeTag.value = tag
  const query = { ...route.query }
  if (tag === 'all') {
    delete query.tag
  } else {
    query.tag = tag
  }
  router.replace({ query })
}

// Keep query param in sync if manually changed (e.g., browser nav)
watch(() => route.query.tag, (newTag) => {
  const t = (newTag as string) || 'all'
  if (t !== activeTag.value && (t === 'all' || tags.value.includes(t))) {
    activeTag.value = t
  }
})
</script>
