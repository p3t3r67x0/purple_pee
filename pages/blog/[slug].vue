<template>
  <div class="min-h-screen bg-gradient-to-br from-cosmic-haze via-[#1a1440] to-black text-white">
    <NavHeader />

    <div v-if="post" class="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="mb-12">
        <div class="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-slate-400 mb-5">
          <span v-for="t in post.tags" :key="t" class="px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 font-medium">{{ t }}</span>
          <span class="h-px w-6 bg-white/10"></span>
          <span>{{ formattedDate }}</span>
          <span class="h-px w-6 bg-white/10"></span>
          <span>{{ post.readingTime || minutes }} min read</span>
        </div>
        <h1 class="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-pink-400 bg-clip-text text-transparent leading-tight">
          {{ post.title }}
        </h1>
        <p class="text-slate-300 text-lg leading-relaxed max-w-2xl">
          {{ post.description }}
        </p>
      </div>

      <div class="grid lg:grid-cols-[minmax(0,1fr)_260px] gap-12">
        <div>
          <ContentRenderer v-if="post" :value="post" class="prose prose-invert max-w-none" />
        </div>
        <aside class="hidden lg:block sticky top-28 h-max space-y-6 text-sm">
          <div class="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <h2 class="text-xs font-semibold tracking-wider text-slate-400 mb-3">ON THIS PAGE</h2>
            <ul v-if="headings.length" class="space-y-2">
              <li v-for="h in headings" :key="h.id" :class="{'pl-4': h.depth === 3, 'pl-8': h.depth === 4}">
                <a :href="`#${h.id}`" class="block text-slate-400 hover:text-purple-300 transition-colors text-[13px] leading-snug">
                  {{ h.text }}
                </a>
              </li>
            </ul>
            <p v-else class="text-slate-500 text-[13px]">No sections</p>
          </div>
        </aside>
      </div>

      <div class="mt-16 pt-10 border-t border-white/10">
        <nuxt-link to="/blog" class="inline-flex items-center gap-2 text-sm text-purple-300 hover:text-purple-200 transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
          Back to tutorials
        </nuxt-link>
      </div>
    </div>

    <div v-else class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
      <h1 class="text-3xl font-bold mb-4">Article not found</h1>
      <p class="text-slate-400 mb-8">The tutorial you're looking for was moved or doesn't exist.</p>
      <nuxt-link to="/blog" class="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg shadow-purple-500/25">
        View all Tutorials
      </nuxt-link>
    </div>

    <NavFooter />
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
// Rely on Nuxt auto-imports; declare for TS tooling
// eslint-disable-next-line @typescript-eslint/no-unused-vars
declare const useRoute: any, useAsyncData: any, queryContent: any, useHead: any

const route = useRoute()
const slug = Array.isArray(route.params.slug) ? route.params.slug[0] : (route.params.slug as string)

// Load single content doc
const { data: post } = await useAsyncData(`post-${slug}`, () =>
  queryContent('/blog').where({ slug }).findOne()
)

// Extract headings for TOC (h2-h4) after post loads
const headings = ref<Array<{ id: string; depth: number; text: string }>>([])
watch(post, (p) => {
  if (p?.body?.children) {
    const hs: Array<{ id: string; depth: number; text: string }> = []
    const slugify = (str: string) => str.toLowerCase().replace(/[^a-z0-9\s]/g, '').trim().replace(/\s+/g, '-')
    p.body.children.forEach((node: any) => {
      if (node.tag && /^h[2-4]$/.test(node.tag)) {
        const depth = parseInt(node.tag[1])
        const text = (node.children || []).map((c: any) => c.value).join(' ').trim()
        const id = node.props?.id || slugify(text)
        hs.push({ id, depth, text })
      }
    })
    headings.value = hs
  }
}, { immediate: true })

const formattedDate = computed(() => post.value?.date ? new Date(post.value.date).toLocaleDateString(undefined, {
  year: 'numeric', month: 'short', day: 'numeric'
}) : '')

// Local fallback reading time if plugin not yet processed
const minutes = computed(() => post.value?.readingTime || 1)

watch(post, (p) => {
  if (p) {
    const baseUrl = (p.siteUrl || 'https://netscanner.example.com').replace(/\/$/, '')
    // front-matter can optionally provide ogImage
    const ogImage = p.ogImage || `${baseUrl}/logo-300x300.png`
    useHead({
      title: `${p.title} - NetScanner Tutorial`,
      meta: [
        { name: 'description', content: p.description },
        { property: 'og:title', content: `${p.title} - NetScanner Tutorial` },
        { property: 'og:description', content: p.description },
        { property: 'og:type', content: 'article' },
        { property: 'og:image', content: ogImage },
        { property: 'og:image:alt', content: p.title },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: `${p.title} - NetScanner Tutorial` },
        { name: 'twitter:description', content: p.description },
        { name: 'twitter:image', content: ogImage }
      ]
    })
  }
}, { immediate: true })
</script>
