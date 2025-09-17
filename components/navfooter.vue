<template>
  <footer class="mt-12 bg-purple-700 text-purple-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
        <div class="text-center sm:text-left">
          <p class="text-sm font-semibold uppercase tracking-wide text-purple-100">Links</p>
          <ul class="mt-4 space-y-2 text-sm">
            <li>
              <nuxt-link v-bind:to="faqUrl" class="transition hover:text-white">FAQ</nuxt-link>
            </li>
            <li>
              <nuxt-link v-bind:to="helpUrl" class="transition hover:text-white">Help</nuxt-link>
            </li>
            <li>
              <nuxt-link v-bind:to="supportUrl" class="transition hover:text-white">Support</nuxt-link>
            </li>
          </ul>
        </div>
        <div class="text-center sm:text-left">
          <p class="text-sm font-semibold uppercase tracking-wide text-purple-100">Service</p>
          <ul class="mt-4 space-y-2 text-sm">
            <li>
              <a v-bind:href="apiUrl" target="_blank" class="transition hover:text-white">API</a>
            </li>
            <li>
              <nuxt-link v-bind:to="docsUrl" class="transition hover:text-white">Docs</nuxt-link>
            </li>
            <li>
              <a v-bind:href="issuesUrl" target="_blank" class="transition hover:text-white">Issues</a>
            </li>
          </ul>
        </div>
        <div class="text-center sm:text-left">
          <p class="text-sm font-semibold uppercase tracking-wide text-purple-100">Social</p>
          <ul class="mt-4 space-y-2 text-sm">
            <li>
              <a v-bind:href="twitterUrl" target="_blank" class="transition hover:text-white">Twitter</a>
            </li>
            <li>
              <a v-bind:href="facebookUrl" target="_blank" class="transition hover:text-white">Facebook</a>
            </li>
            <li>
              <a v-bind:href="linkedinUrl" target="_blank" class="transition hover:text-white">LinkedIn</a>
            </li>
          </ul>
        </div>
        <div class="text-center sm:text-left">
          <p class="text-sm font-semibold uppercase tracking-wide text-purple-100">Project</p>
          <ul class="mt-4 space-y-2 text-sm">
            <li>
              <nuxt-link v-bind:to="aboutUrl" class="transition hover:text-white">About</nuxt-link>
            </li>
            <li>
              <nuxt-link v-bind:to="contactUrl" class="transition hover:text-white">Contact</nuxt-link>
            </li>
            <li>
              <nuxt-link v-bind:to="blogUrl" class="transition hover:text-white">Blog</nuxt-link>
            </li>
          </ul>
        </div>
        <div class="text-center sm:text-left">
          <p class="text-sm font-semibold uppercase tracking-wide text-purple-100">Legal</p>
          <ul class="mt-4 space-y-2 text-sm">
            <li>
              <nuxt-link v-bind:to="termsUrl" class="transition hover:text-white">Terms</nuxt-link>
            </li>
            <li>
              <nuxt-link v-bind:to="privacyUrl" class="transition hover:text-white">Privacy</nuxt-link>
            </li>
            <li>
              <nuxt-link v-bind:to="imprintUrl" class="transition hover:text-white">Imprint</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="mt-10 border-t border-white/20 pt-6 text-center text-xs text-purple-100/80">
        © {{ currentYear }} purplepee.co — Open source ASN lookup
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
