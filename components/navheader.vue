<template>
  <header class="sticky top-0 z-50 w-full bg-purple-700/90 backdrop-blur border-b border-purple-500/30 shadow-sm">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-wrap items-center justify-between gap-3 py-2 sm:py-3">
        <!-- Logo -->
        <div class="flex w-full items-center justify-between md:w-auto">
          <nuxt-link to="/" class="flex items-center gap-2 text-white">
            <svg class="w-8 h-8 sm:w-9 sm:h-9" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 692 692">
              <path d="..." />
            </svg>
            <span class="hidden text-base font-semibold sm:inline">purplepee.co</span>
          </nuxt-link>
        </div>

        <!-- Search -->
        <div class="w-full order-last md:order-none md:flex-1 md:max-w-md">
          <div class="flex items-center gap-2">
            <div class="flex-1">
              <search />
            </div>

            <!-- Mobile Menu Button -->
            <button
              type="button"
              @click="toggleMenu"
              :aria-expanded="isMenuOpen ? 'true' : 'false'"
              aria-controls="mobile-menu"
              class="inline-flex items-center justify-center rounded-md p-2 text-purple-100 transition hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-700 md:hidden"
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
        <nav class="hidden md:flex items-center gap-5 ml-auto text-sm font-medium text-purple-100">
          <nuxt-link to="/trends" class="hover:text-white">Trends</nuxt-link>
          <nuxt-link to="/isp/germany" class="hover:text-white">ISPs</nuxt-link>
          <nuxt-link to="/ipv4" class="hover:text-white">IPv4</nuxt-link>
          <nuxt-link to="/dns" class="hover:text-white">DNS</nuxt-link>
          <nuxt-link to="/asn" class="hover:text-white">ASN</nuxt-link>
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
          <div class="space-y-3 rounded-lg border border-purple-400/30 bg-purple-600/90 p-4 shadow-lg backdrop-blur-sm">
            <nav class="flex flex-col gap-2 text-sm font-medium text-purple-50">
              <nuxt-link to="/trends" class="rounded px-3 py-2 hover:bg-purple-500/60" @click="closeMenu">Trending now</nuxt-link>
              <nuxt-link to="/isp/germany" class="rounded px-3 py-2 hover:bg-purple-500/60" @click="closeMenu">ISPs Germany</nuxt-link>
              <nuxt-link to="/ipv4" class="rounded px-3 py-2 hover:bg-purple-500/60" @click="closeMenu">IPv4 Entries</nuxt-link>
              <nuxt-link to="/dns" class="rounded px-3 py-2 hover:bg-purple-500/60" @click="closeMenu">DNS Entries</nuxt-link>
              <nuxt-link to="/asn" class="rounded px-3 py-2 hover:bg-purple-500/60" @click="closeMenu">ASN Entries</nuxt-link>
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
