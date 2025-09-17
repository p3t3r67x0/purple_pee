<template>
  <footer class="mt-16 border-t border-white/10 bg-gradient-to-br from-cosmic-haze/70 via-[#1a1440]/60 to-black/80 text-slate-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
        <div class="text-center sm:text-left">
          <p class="text-xs font-semibold uppercase tracking-[0.35em] text-slate-200">Links</p>
          <ul class="mt-5 space-y-2 text-sm text-slate-200/80">
            <li>
              <nuxt-link v-bind:to="faqUrl" class="transition hover:text-white/95">FAQ</nuxt-link>
            </li>
            <li>
              <nuxt-link v-bind:to="helpUrl" class="transition hover:text-white/95">Help</nuxt-link>
            </li>
            <li>
              <nuxt-link v-bind:to="supportUrl" class="transition hover:text-white/95">Support</nuxt-link>
            </li>
          </ul>
        </div>
        <div class="text-center sm:text-left">
          <p class="text-xs font-semibold uppercase tracking-[0.35em] text-slate-200">Service</p>
          <ul class="mt-5 space-y-2 text-sm text-slate-200/80">
            <li>
              <a v-bind:href="apiUrl" target="_blank" class="transition hover:text-white/95">API</a>
            </li>
            <li>
              <nuxt-link v-bind:to="docsUrl" class="transition hover:text-white/95">Docs</nuxt-link>
            </li>
            <li>
              <a v-bind:href="issuesUrl" target="_blank" class="transition hover:text-white/95">Issues</a>
            </li>
          </ul>
        </div>
        <div class="text-center sm:text-left">
          <p class="text-xs font-semibold uppercase tracking-[0.35em] text-slate-200">Social</p>
          <ul class="mt-5 space-y-2 text-sm text-slate-200/80">
            <li>
              <a v-bind:href="twitterUrl" target="_blank" class="transition hover:text-white/95">Twitter</a>
            </li>
            <li>
              <a v-bind:href="facebookUrl" target="_blank" class="transition hover:text-white/95">Facebook</a>
            </li>
            <li>
              <a v-bind:href="linkedinUrl" target="_blank" class="transition hover:text-white/95">LinkedIn</a>
            </li>
          </ul>
        </div>
        <div class="text-center sm:text-left">
          <p class="text-xs font-semibold uppercase tracking-[0.35em] text-slate-200">Project</p>
          <ul class="mt-5 space-y-2 text-sm text-slate-200/80">
            <li>
              <nuxt-link v-bind:to="aboutUrl" class="transition hover:text-white/95">About</nuxt-link>
            </li>
            <li>
              <nuxt-link v-bind:to="contactUrl" class="transition hover:text-white/95">Contact</nuxt-link>
            </li>
            <li>
              <nuxt-link v-bind:to="blogUrl" class="transition hover:text-white/95">Blog</nuxt-link>
            </li>
          </ul>
        </div>
        <div class="text-center sm:text-left">
          <p class="text-xs font-semibold uppercase tracking-[0.35em] text-slate-200">Legal</p>
          <ul class="mt-5 space-y-2 text-sm text-slate-200/80">
            <li>
              <nuxt-link v-bind:to="termsUrl" class="transition hover:text-white/95">Terms</nuxt-link>
            </li>
            <li>
              <nuxt-link v-bind:to="privacyUrl" class="transition hover:text-white/95">Privacy</nuxt-link>
            </li>
            <li>
              <nuxt-link v-bind:to="imprintUrl" class="transition hover:text-white/95">Imprint</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 text-xs text-slate-300/70 sm:flex-row">
        <span>© {{ currentYear }} purplepee.co — Open source ASN lookup</span>
        <span class="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-slate-400/70">
          <span class="h-px w-8 bg-gradient-to-r from-transparent via-white/40 to-transparent"></span>
          crafted for curious minds
          <span class="h-px w-8 bg-gradient-to-r from-transparent via-white/40 to-transparent"></span>
        </span>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useNuxtApp } from '#app'

const { $env } = useNuxtApp()
const env = $env ?? {}
const withFallback = (value?: string | null) => value || '#'

const faqUrl = ref(withFallback(env.FAQ_URL))
const helpUrl = ref(withFallback(env.HELP_URL))
const supportUrl = ref(withFallback(env.SUPPORT_URL))
const apiUrl = ref(withFallback(env.API_URL))
const docsUrl = ref(withFallback(env.DOCS_URL))
const issuesUrl = ref(withFallback(env.ISSUES_URL))
const twitterUrl = ref(withFallback(env.TWITTER_URL))
const facebookUrl = ref(withFallback(env.FACEBOOK_URL))
const linkedinUrl = ref(withFallback(env.LINKEDIN_URL))
const aboutUrl = ref(withFallback(env.ABOUT_URL))
const contactUrl = ref(withFallback(env.CONTACT_URL))
const blogUrl = ref(withFallback(env.BLOG_URL))
const termsUrl = ref(withFallback(env.TERMS_URL))
const privacyUrl = ref(withFallback(env.PRIVACY_URL))
const imprintUrl = ref(withFallback(env.IMPRINT_URL))

const currentYear = new Date().getFullYear()
</script>
