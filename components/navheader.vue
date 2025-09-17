<template>
  <header class="sticky top-0 z-50 w-full border-b border-white/10 bg-gradient-to-br from-cosmic-haze/85 via-purple-800/60 to-black/70 backdrop-blur-2xl shadow-glass">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-wrap items-center justify-between gap-3 py-3 sm:py-4">
        <!-- Logo -->
        <div class="flex w-full items-center justify-between md:w-auto">
          <nuxt-link to="/" class="flex items-center gap-2 text-slate-100 transition hover:drop-shadow-neon">
            <svg class="w-9 h-9 sm:w-10 sm:h-10 text-cosmic-aurora" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 692 692">
              <path d="..." />
            </svg>
            <span class="hidden text-base font-semibold tracking-wide sm:inline">purplepee.co</span>
          </nuxt-link>
        </div>

        <!-- Search -->
        <div class="w-full order-last md:order-none md:flex-1 md:max-w-lg">
          <div class="flex items-center gap-2">
            <div class="flex-1 rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur-xl shadow-glass">
              <search />
            </div>

            <!-- Mobile Menu Button -->
            <button
              type="button"
              @click="toggleMenu"
              :aria-expanded="isMenuOpen ? 'true' : 'false'"
              aria-controls="mobile-menu"
              class="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-white transition hover:border-cosmic-aurora/60 hover:text-cosmic-aurora focus:outline-none focus:ring-2 focus:ring-cosmic-aurora focus:ring-offset-2 focus:ring-offset-black md:hidden"
            >
              <span class="sr-only">Toggle navigation</span>
              <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Desktop Nav -->
        <nav class="hidden md:flex items-center gap-6 ml-auto text-sm font-medium text-slate-100/90">
          <nuxt-link to="/trends" class="rounded-full px-3 py-1.5 transition hover:bg-white/10 hover:text-white">Trends</nuxt-link>
          <nuxt-link to="/isp/germany" class="rounded-full px-3 py-1.5 transition hover:bg-white/10 hover:text-white">ISPs</nuxt-link>
          <nuxt-link to="/ipv4" class="rounded-full px-3 py-1.5 transition hover:bg-white/10 hover:text-white">IPv4</nuxt-link>
          <nuxt-link to="/dns" class="rounded-full px-3 py-1.5 transition hover:bg-white/10 hover:text-white">DNS</nuxt-link>
          <nuxt-link to="/asn" class="rounded-full px-3 py-1.5 transition hover:bg-white/10 hover:text-white">ASN</nuxt-link>
        </nav>

      </div>

      <!-- Mobile Menu -->
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div v-if="isMenuOpen" class="md:hidden pb-4" id="mobile-menu">
          <div class="space-y-3 rounded-3xl border border-white/10 bg-white/10 p-5 shadow-glass backdrop-blur-xl">
            <nav class="flex flex-col gap-2 text-sm font-medium text-slate-100">
              <nuxt-link to="/trends" class="rounded-full px-4 py-2 transition hover:bg-white/15 hover:text-white" @click="closeMenu">Trending now</nuxt-link>
              <nuxt-link to="/isp/germany" class="rounded-full px-4 py-2 transition hover:bg-white/15 hover:text-white" @click="closeMenu">ISPs Germany</nuxt-link>
              <nuxt-link to="/ipv4" class="rounded-full px-4 py-2 transition hover:bg-white/15 hover:text-white" @click="closeMenu">IPv4 Entries</nuxt-link>
              <nuxt-link to="/dns" class="rounded-full px-4 py-2 transition hover:bg-white/15 hover:text-white" @click="closeMenu">DNS Entries</nuxt-link>
              <nuxt-link to="/asn" class="rounded-full px-4 py-2 transition hover:bg-white/15 hover:text-white" @click="closeMenu">ASN Entries</nuxt-link>
            </nav>

          </div>
        </div>
      </Transition>
    </div>

    <!-- Loading indicator -->
    <loading v-if="loadingIndicator" />
  </header>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import Search from '@/components/search.vue'
import Loading from '@/components/loading.vue'
import { useMainStore } from '~/stores/main'

const mainStore = useMainStore()
const { loading: loadingIndicator } = storeToRefs(mainStore)

const isMenuOpen = ref(false)
const route = useRoute()

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

watch(
  () => route.fullPath,
  () => {
    closeMenu()
  }
)
</script>
