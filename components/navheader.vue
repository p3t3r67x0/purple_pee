<template>
  <header
    class="z-6000 sticky top-0 left-0 w-full bg-purple-700/95 backdrop-blur supports-[backdrop-filter]:bg-purple-700/80 shadow-md"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-wrap items-center gap-3 py-3 md:py-4">
        <div class="flex w-full items-center justify-between md:w-auto">
          <nuxt-link to="/" class="flex items-center gap-3 text-white">
            <svg
              class="fill-current w-9 h-9 sm:w-10 sm:h-10"
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="692pt"
              height="692pt"
              viewBox="0 0 692 692"
            >
              <path
                d="M344.3 28.3c.3.9.2 1.7-.3 1.7-.9 0-2.6 3.9-2.2 5.2.1.5-.3.8-.9.8-.8 0-.7.5.1 1.5 1.1 1.3 1 1.4-.6.8-.6-.2-1.2-.2-1.2.2 0 .3-.7 3.6-1.5 7.2-.8 3.6-1.5 6.8-1.5 7.2 0 .4-.4 1.1-.9 1.5-.5.4-.8 1.1-.8 1.6.1.4-2.1 4.3-4.9 8.7-6 9.2-5.9 9.1-4.8 9.1.6 0 1.2-.4 1.4-1 .2-.5.7-1 1.2-1 .5 0 .3.9-.6 2.2-1 1.6-1.1 2-.1 1.3.8-.4.2.5-1.2 2.2-1.4 1.6-2.8 2.9-3.3 2.8-1.2-.4-2.8 2.3-2.3 3.6.3.8.2 1.6-.2 1.9-.5.3-.3 1.5.4 2.7 1 1.6 1.1 2.5.3 3.5-.8 1-.7 1.6.2 2.3.9.7.8 1.1-.4 1.6-1.8.7-1.9 1.7-.2 1.7 1.6 0 1.6-.2-.4 4.2-1.6 3.4-2 6.8-.5 4.5.5-.8.9-.1.9 1.7 0 1.7-.3 3.1-.8 3.1-.4 0-.8.7-.8 1.5 0 .9.3 1.5.8 1.5.6 0 .8 1.4.8 3.8 0 3.5.1 3.7 1.4 2.3.8-.8 1.8-1.5 2.3-1.5.5 0 2.3-2.4 4-5.4 1.8-3.1 5.2-8.5 7.7-12 2.6-3.4 4.6-6.5 4.5-6.7-.2-.2-.2-.7 0-1.1.2-.5.7-.6 1.1-.3 1.3 1.3.6 2.6-3.1 5.7-2 1.7-3.4 3.5-3.1 4 .4.6.1.7-.7.2-.9-.5-1 0-.6 2 .7 3.3-.6 5.2-2.1 3.2-.9-1.1-1.2-.5-1.4 2.9 0 2.4-.1 4.8-.3 5.4-.3.9.4 1.2 2.9 1.2 2.7 0 3.2.3 2.8 1.5-.7 1.7 1.1 3.3 4 3.5 1.5.1 1.9.5 1.5 1.6-.5 1.2-.1 1.4 2 1.2 1.8-.1 3.1-1 4.3-3 1.3-2.1 1.9-2.4 3.4-1.6 2.4 1.2 2.5 1.2 2.8-.6.2-.8 1-.1 2.3 2.1 1.1 1.9 2.4 3.6 2.9 3.7.6.2 1.8-1.9 2.9-4.7 1.1-2.9 2.3-5.3 2.7-5.3 1.9 0 5.5 6.7 4.9 9.3-.1.4.3.7 1 .7 1.5 0 2.4.2 4.5.9 1 .3 1.4 1.6 1.4 4 0 4.9.8 6.8 2.8 6.8 1 0 2.4 1.1 3.1 2.6.7 1.4 1.8 3.2 2.4 4 .7.8 1.4 2.2 1.7 3.1.2 1 1.2 1.8 2.3 2 .6.2 1.1 1.1 1.1 2 0 1 .3 2.9.5 4.3.5 2.5.8 2.8 3.1 2.8 3 0 5.5 1.7 5.5 3.8 0 .9.7 1.9 1.5 2.2 1.1.4 1.5 1.4 1.5 4 0 2.1-.4 3.6-1 3.6-.5 0-1 .7-1 1.5 0 .9.5 1.5 1 1.5.6 0 1 1.2 1 2.8 0 1.5.4 3.4.9 4.1.6.8 1.1 9.4 1.2 21.2.2 16 .5 19.8 1.7 20.6.7.5 1.2 1.6 1 2.4-.3 1.4.7 5.4 2.1 8.4.3.6.4 1.6.1 2.2-.3.8-.6.8-.6-.2-.3-5.2-.5-5.7-2.3-6.2-1.7-.4-1.9-.1-1.6 2.6.3 2.1-.1 3.5-1.2 4.4-1.4 1.1-1.4 1.4.4 3.5 1.3 1.5 1.8 3 1.4 4-.8 2.2 1.4 8.5 4.3 12 1.4 1.7 2.7 4.1 3 5.3.3 1.3.9 2.3 1.4 2.3.4 0 .8 1.7.8 3.8 0 2.8-.4 3.9-1.5 4.2-1.9.5-1.9 1.3-.1 4.8 1.7 3.3 1.8 3.3 4-3.3 1.5-4.8 1.6-4.8 4.8-3.8 4 1.2 5.2 3.8 3.3 7.5-1.4 2.7-1.3 3 .8 4.3 1.3.8 2.6 1.5 2.8 1.5.7 0 4.2 4 4.2 4.9 0 .5 1.4 2.9 3.1 5.3 2 2.9 2.9 5.1 2.6 6.3-.4 1.5.1 1.9 1.9 1.9 1.3 0 2.4.6 2.5 1.3.4 3.9 1 4.7 3 4.7 1.4 0 1.9.5 1.7 1.7-.3 1.2.2 1.7 1.9 1.7 2.4 0 4.3 3.1 4.3 7.1 0 3.1 4.3 4.9 6.2 2.6.7-.8 2.1-1.7 3-2.1.9-.3 1.8-1.3 2.1-2.3.3-1 .6-1 .9.3.5 1.6-.8 4.4-1.8 3.8-.3-.2-.5 1.2-.4 3.1.1 2.6.5 3.4 1.6 3.2.9-.1 1.5.7 1.7 2.4.2 1.7.8 2.6 1.8 2.6 1.1 0 1.4.7 1.1 2.2-.7 4.1-.5 6 .7 6.4 1.9.6 5.7 5.1 5.7 6.7 0 .7.6 2.3 1.3 3.4.9 1.5 1.3 7 1.5 19.7.2 11.4.6 17.5 1.3 17.3.7-.1.9 1.9.5 6.2-.5 5.3-.3 6.3 1.5 8.5 1.2 1.4 1.9 3.2 1.7 4.1-.2.9.1 1.6.7 1.6.5 0 1 .7 1 1.5 0 1-.4 1.2-1.3.5-1.1-.8-.8.3.7 1.5.7 1.2 1.1 2.7.7 3.3-.3.6.5 1.5 1.6 1.8 1.1.3 2.3 1.3 2.5 2.2.3 1 .5.9.5-.4.2-2.7 1.4-1.4 1.9 2.1.3 2.4.7 2.9 1.7 2.2.9-.5 1-1.1.4-1.5-.6-.3-1-.9-1-1.5 0-.5.4-1 .8-1 .5 0 1.5-1.8 2.3-4.1.8-2.2 1.6-4 1.7-4 .2 0 .3 2.2.3 5 0 4.3-.2 5-.9 3.8-.8-1.1-1.3-.6-2.2 2.1-.7 1.9-1.5 3.4-2 3.4-.4 0-1.3 1.1-2 2.4-.9 1.8-1.8 2.3-3.2 1.8-1.6-.6-1.9-.3-1.4 1.4.4 1.3.1 2-.9 2-.8 0-1.5-.6-1.5-1.4 0-.8-.7-1.7-1.5-2-1.1-.3-1.5.2-1.4 1.5.1 1.6-.9 2.4-3.4 2.4-4.1 0-6 1.6-6 5.3 0 3.8-2.1 5.8-5.5 5.4-1.7-.2-2.6.2-2.6 1.1 0 .8-.7 1.2-1.5.8-.8-.3-1.7-.1-2 .4-.3.5-2.2 1-4.2 1-4.1 0-4.5.5-4.5 5.7 0 1.9-.4 3.3-.9 3-.5-.3-1.1.5-1.3 1.7-.1 1.1.3 2.5.9 3 .7.5 1.3 1.7 1.3 2.6 0 1 .6 1.7 1.4 1.7.8 0 1.3-.8 1.2-1.8-.1-.9.3-1.6.8-1.6.6 0 1.1.9 1.1 2 0 2.2-2.8 3.4-7 2.9-1.9-.2-2.6.2-2.3 1.2.5 1.1-2 1.8-10.1 2.7-2.7.3-3.3.1-2.7-.8.5-.8.9-2.1.9-3 .1-1.6.1-1.6-2 .1-1 .8-2 .4-3.5-1.2-1.4-1.4-2.5-1.8-3.5-1.2-.7.5-2.4.9-3.7.9-1.3 0-2.8.8-3.3 1.7-.5 1-1.7 1.8-2.7 1.8-.9 0-1.6.5-1.6 1.1 0 .6-.7.9-1.5.5-.8-.3-1.5-.1-1.5.5 0 .5-.4.7-.9.4-.5-.3-2.3.5-3.9 1.7-1.7 1.3-4 2.3-5.2 2.3-1.3 0-2.3.4-2.3 1 0 .5-.6.7-1.4.4-.7-.3-1.6-.1-1.9.5-.5.7-1.7.2-3.5-1.4-1.9-1.6-2.4-1.8-1.5-.5.7.9 1.7 1.7 2.1 1.7.4 0 .7.5.7 1 0 .6-.6.9-1.3.7-.8-.2-1.1.1-.8.8.3.8-.4 1.2-2.2 1.2-1.4 0-2.7.6-2.9 1.3-.2.8-1.5 1.2-3.5 1.1-1.9-.2-3 .2-2.7 1 .3 1.1-1.5 1.3-11 1-1.7-.1-3.7.4-4.6 1.2-1.5 1.4-1.5 1.4.6 1.1 1.2-.1 2.1.3 2.1 1.1 0 .8.9 1.4 2 1.4 1.1 0 1.9.6 1.8 1.4-.1.7.7 1.5 1.7 1.8 1 .3 1.8 1.1 1.8 1.8 0 .7.9 1.1 2.1.7 1.3-.3 2.7.3 3.5 1.4.8 1.1 1.9 1.5 2.7 1 1-.6 1-.4-.2.8-.9.9-1.6 1.8-1.6 2.1 0 .3-.8 1-1.8 1.7-1 .6-1.4 1.3-.8 1.7.5.3.1 1-.9 1.4-1.1.5-1.5 1.4-1.1 2.6.6 2-1.9 5.8-5.4 8.2-1.4.9-1.9.8-2.3-.4-.4-1.3-.5-1.2-1.3.4-1 1.8-1.1 1.9-2.1.2-.9-1.7-1-1.7-1 0 0 .9-1.1 1.7-2.7 1.7-1.6.1-2.3.7-1.7 1.4.6.8-.4 1-3 .8-1.3-.1-3.5.5-4.8 1.4-1.5 1.1-2.9 1.5-3.9 1-1.2-.5-1.7-.2-1.7 1.1 0 1.2-.6 1.8-1.8 1.8-.9 0-2.9.7-4.3 1.6-1.4.9-3.2 1.6-3.9 1.6-.7 0-1.4.9-1.6 2.1-.2 1.3-.8 2.2-1.3 2.2-.5 0-.8-.4-.7-.8.1-.4-.1-.7-.6-.6-.4.1-1.4-1-2.3-2.4-1-1.5-1.4-1.9-1.1-.8.3 1 .1 2-.6 2.3-.7.2-.9-.4-.7-1.6.3-1.4-.2-2.1-1.6-2.1-1.1 0-2.4-.6-3-1.3-.7-.8-.9-.5-.7.9.2 1.1-.3 2.2-1.1 2.4-.7.3-1.3.9-1.3 1.4 0 .5-.7.9-1.5.9-.9 0-1.5.9-1.5 2.4 0 1.8-.7 2.6-2.5 2.6-1.4 0-2.5.5-2.5 1.1 0 .6-.4 1.1-.9 1.1-.6 0-.8 1-.6 2.5.3 1.3 0 2.8-.6 3.4-.7.7-.9 1.5-.4 1.8.5.3.5 1.8-.1 3.4-.5 1.7-1 4-1 5.3 0 1.2-.6 2.2-1.4 2.2-.7 0-1.4.7-1.4 1.5 0 .8-.6 1.5-1.4 1.5-.8 0-1.2-.7-.9-1.5.3-.8.1-1.5-.5-1.5-.5 0-1 .7-1 1.5 0 .9-.6 1.5-1.4 1.5-.7 0-1.6.9-1.9 2-.3 1.3-1.1 1.9-2.3 1.7-1.6-.3-2 .7-1.6 3.4.4 3-.3 4.3-2.3 4.3-.6 0-1.8.9-2.7 2-.8 1-1.6 1.9-1.8 1.9-.2 0-.3-1.8-.3-4 0-3.2-.3-4-1.4-4-.8 0-1.6.7-1.9 1.5-.3.8-1.2 1.5-2 1.5-.8 0-1.7.7-2 1.5-.4 1-.2 1.5.7 1.5.8 0 1.5.6 1.5 1.4 0 .8-.6 1.4-1.4 1.4-.8 0-1.4.8-1.4 1.8 0 1-.4 1.3-1 .8-.5-.4-1 0-1 1 0 .9-.7 1.6-1.5 1.6-.9 0-1.5.9-1.5 2.3 0 1.2-.6 2.7-1.3 3.2-.9.6-1.2 1.9-.8 3.3.4 1.4.2 2.3-.7 2.3-.9 0-1.4.7-1.1 2 .3 1.3-.2 2.1-1.5 2.3-1.1.1-2-.5-2.3-1.5-.3-1.2-.9-1.6-1.9-1.2-.8.3-2.4-.2-3.6-1.3-1.4-1.2-2.8-1.7-3.2-1.1-.4.7-.8.6-.8-.2 0-.6.4-1 .9-1 .5 0 .7-.5.3-1.1-.3-.6.5-1.3 1.9-1.6 1.6-.4 2.2-1.2 1.7-2.3-.4-.9-.2-1.5.4-1.5s1.1-.5 1.1-1.1c0-.7-.9-.9-2.1-.6-1.4.3-2.7-.3-3.3-1.6-.6-1.3-1.3-1.9-1.7-1.4-.3.6-1.7.9-3.1.9-1.4 0-2.7.4-3 .9-.3.5-1.1.6-1.7.2-.7-.3-1.3 0-1.3.8 0 1.4-3.9 1.2-5.3-.3-.4-.4-1-.4-1.3.1-.9 1.3-1.7.9-1.4-.7.2-1.3-.3-1.8-1.7-1.8-1.3 0-1.9-.6-1.9-2 0-1.1-.5-2-1-2-.6 0-1-.7-1-.5z"
              />
              <path d="M320 71.1c0 .5.5.7 1 .4.6-.3 1-.8 1-1.1 0-.2-.4-.4-1-.4-.5 0-1 .5-1 1.1z" />
            </svg>
            <span class="hidden text-lg font-semibold sm:inline">purplepee.co</span>
          </nuxt-link>
          <button
            type="button"
            class="inline-flex items-center justify-center rounded-md p-2 text-purple-100 transition hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-700 md:hidden"
            @click="toggleMenu"
            :aria-expanded="isMenuOpen ? 'true' : 'false'"
            aria-controls="mobile-menu"
          >
            <span class="sr-only">Toggle navigation</span>
            <svg
              v-if="!isMenuOpen"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="h-6 w-6"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="h-6 w-6"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div class="order-last w-full md:order-none md:flex-1">
          <div class="md:max-w-xl">
            <search />
          </div>
        </div>

        <nav class="hidden md:flex items-center gap-6 ml-auto text-sm font-medium text-purple-100">
          <nuxt-link to="/trends" class="transition hover:text-white">Trends</nuxt-link>
          <nuxt-link to="/isp/germany" class="transition hover:text-white">ISPs</nuxt-link>
          <nuxt-link to="/ipv4" class="transition hover:text-white">IPv4</nuxt-link>
          <nuxt-link to="/dns" class="transition hover:text-white">DNS</nuxt-link>
          <nuxt-link to="/asn" class="transition hover:text-white">ASN</nuxt-link>
        </nav>

        <form
          action="https://www.paypal.com/cgi-bin/webscr"
          method="post"
          target="_top"
          class="hidden shrink-0 items-center md:flex"
        >
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="hosted_button_id" value="CT7GDG2U4TAQW" />
          <input
            type="image"
            src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif"
            border="0"
            name="submit"
            alt="Donate with PayPal"
            title="PayPal - The safer, easier way to pay online!"
            class="h-8 w-auto"
          />
          <img alt="" border="0" src="https://www.paypal.com/en_DE/i/scr/pixel.gif" width="1" height="1" />
        </form>
      </div>

      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div v-if="isMenuOpen" class="w-full pb-4 md:hidden" id="mobile-menu">
          <div class="space-y-4 rounded-lg border border-white/10 bg-purple-600/95 p-4 shadow-lg backdrop-blur-sm">
            <nav class="flex flex-col gap-3 text-sm font-medium text-purple-50">
              <nuxt-link to="/trends" class="rounded-md px-3 py-2 hover:bg-purple-500/60" @click="closeMenu">
                Trending now
              </nuxt-link>
              <nuxt-link to="/isp/germany" class="rounded-md px-3 py-2 hover:bg-purple-500/60" @click="closeMenu">
                ISPs Germany
              </nuxt-link>
              <nuxt-link to="/ipv4" class="rounded-md px-3 py-2 hover:bg-purple-500/60" @click="closeMenu">
                IPv4 Entries
              </nuxt-link>
              <nuxt-link to="/dns" class="rounded-md px-3 py-2 hover:bg-purple-500/60" @click="closeMenu">
                DNS Entries
              </nuxt-link>
              <nuxt-link to="/asn" class="rounded-md px-3 py-2 hover:bg-purple-500/60" @click="closeMenu">
                ASN Entries
              </nuxt-link>
            </nav>
            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top" class="flex justify-center">
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input type="hidden" name="hosted_button_id" value="CT7GDG2U4TAQW" />
              <input
                type="image"
                src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif"
                border="0"
                name="submit"
                alt="Donate with PayPal"
                title="PayPal - The safer, easier way to pay online!"
                class="h-8 w-auto"
              />
              <img alt="" border="0" src="https://www.paypal.com/en_DE/i/scr/pixel.gif" width="1" height="1" />
            </form>
          </div>
        </div>
      </Transition>
    </div>
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
