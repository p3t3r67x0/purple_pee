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

        <!-- Desktop Nav -->
        <nav class="hidden md:flex items-center gap-3 ml-auto text-sm font-medium text-white/85">
          <button
            type="button"
            @click="openSearch"
            class="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 text-white/80 transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/70 hover:text-white hover:shadow-glow"
          >
            <span class="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
              <span class="absolute -left-8 top-1/2 h-16 w-16 -translate-y-1/2 rounded-full bg-cosmic-flare/35 blur-2xl"></span>
              <span class="absolute -right-6 -top-6 h-14 w-14 rounded-full bg-cosmic-aurora/40 blur-2xl"></span>
            </span>
            <span class="relative z-10 flex items-center gap-3">
              <span class="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cosmic-aurora/80 to-sky-500/80 text-white shadow-glass">
                <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-4.35-4.35m1.1-4.3a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z" />
                </svg>
              </span>
              <span>Search</span>
              <svg class="h-4 w-4 text-white/50 transition group-hover:translate-x-1 group-hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8 5l8 7-8 7" />
              </svg>
            </span>
          </button>

          <nuxt-link
            to="/trends"
            class="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 text-white/80 transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/70 hover:text-white hover:shadow-glow"
          >
            <span class="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
              <span class="absolute -left-8 top-1/2 h-16 w-16 -translate-y-1/2 rounded-full bg-cosmic-aurora/40 blur-2xl"></span>
              <span class="absolute -right-6 -top-6 h-14 w-14 rounded-full bg-cosmic-flare/35 blur-2xl"></span>
            </span>
            <span class="relative z-10 flex items-center gap-3">
              <span class="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cosmic-aurora/80 to-cosmic-flare/80 text-white shadow-glass">
                <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5 9 9l4.5 4.5L21 6" />
                </svg>
              </span>
              <span>Trends</span>
              <svg class="h-4 w-4 text-white/50 transition group-hover:translate-x-1 group-hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8 5l8 7-8 7" />
              </svg>
            </span>
          </nuxt-link>

          <nuxt-link
            to="/isp/germany"
            class="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 text-white/80 transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/70 hover:text-white hover:shadow-glow"
          >
            <span class="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
              <span class="absolute -left-8 top-1/2 h-16 w-16 -translate-y-1/2 rounded-full bg-purple-400/45 blur-2xl"></span>
              <span class="absolute -right-6 -top-6 h-14 w-14 rounded-full bg-cosmic-haze/35 blur-2xl"></span>
            </span>
            <span class="relative z-10 flex items-center gap-3">
              <span class="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-purple-400/80 to-cosmic-haze/80 text-white shadow-glass">
                <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4 7h16M4 12h10M4 17h7" />
                </svg>
              </span>
              <span>ISPs</span>
              <svg class="h-4 w-4 text-white/50 transition group-hover:translate-x-1 group-hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8 5l8 7-8 7" />
              </svg>
            </span>
          </nuxt-link>

          <nuxt-link
            to="/ipv4"
            class="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 text-white/80 transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/70 hover:text-white hover:shadow-glow"
          >
            <span class="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
              <span class="absolute -left-8 top-1/2 h-16 w-16 -translate-y-1/2 rounded-full bg-indigo-400/45 blur-2xl"></span>
              <span class="absolute -right-6 -top-6 h-14 w-14 rounded-full bg-sky-500/35 blur-2xl"></span>
            </span>
            <span class="relative z-10 flex items-center gap-3">
              <span class="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-400/80 to-sky-500/80 text-white shadow-glass">
                <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 5h18M3 12h12m-5 7h11" />
                </svg>
              </span>
              <span>IPv4</span>
              <svg class="h-4 w-4 text-white/50 transition group-hover:translate-x-1 group-hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8 5l8 7-8 7" />
              </svg>
            </span>
          </nuxt-link>

          <nuxt-link
            to="/dns"
            class="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 text-white/80 transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/70 hover:text-white hover:shadow-glow"
          >
            <span class="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
              <span class="absolute -left-8 top-1/2 h-16 w-16 -translate-y-1/2 rounded-full bg-cyan-400/45 blur-2xl"></span>
              <span class="absolute -right-6 -top-6 h-14 w-14 rounded-full bg-emerald-400/35 blur-2xl"></span>
            </span>
            <span class="relative z-10 flex items-center gap-3">
              <span class="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/80 to-emerald-400/80 text-white shadow-glass">
                <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v4m0 10v4m7-7h-4M9 12H5m12-5.657-2.828 2.829M8.828 15.172 6 18m12 .001-2.828-2.829M8.828 8.829 6 6" />
                </svg>
              </span>
              <span>DNS</span>
              <svg class="h-4 w-4 text-white/50 transition group-hover:translate-x-1 group-hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8 5l8 7-8 7" />
              </svg>
            </span>
          </nuxt-link>

          <nuxt-link
            to="/asn"
            class="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 text-white/80 transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/70 hover:text-white hover:shadow-glow"
          >
            <span class="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
              <span class="absolute -left-8 top-1/2 h-16 w-16 -translate-y-1/2 rounded-full bg-rose-400/45 blur-2xl"></span>
              <span class="absolute -right-6 -top-6 h-14 w-14 rounded-full bg-orange-400/35 blur-2xl"></span>
            </span>
            <span class="relative z-10 flex items-center gap-3">
              <span class="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-rose-400/80 to-orange-400/80 text-white shadow-glass">
                <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m5 12 4.5 4.5L19 7.5" />
                </svg>
              </span>
              <span>ASN</span>
              <svg class="h-4 w-4 text-white/50 transition group-hover:translate-x-1 group-hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8 5l8 7-8 7" />
              </svg>
            </span>
          </nuxt-link>
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
          <div class="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-cosmic-haze/50 via-purple-900/60 to-black/70 p-5 shadow-glass backdrop-blur-2xl">
            <div class="pointer-events-none absolute inset-0 -z-10 opacity-80">
              <div class="absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-cosmic-aurora/60 blur-[120px]"></div>
              <div class="absolute -bottom-12 -left-10 h-40 w-40 rounded-full bg-cosmic-flare/40 blur-[110px]"></div>
              <div class="absolute -right-12 top-8 h-36 w-36 rounded-full bg-sky-500/40 blur-[100px]"></div>
            </div>

            <div class="relative flex flex-col gap-4 text-slate-100">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-xs uppercase tracking-[0.35em] text-white/50">Explore</p>
                  <p class="text-lg font-semibold text-white">Navigate the dataset</p>
                </div>
                <span class="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-white/80 shadow-glow">
                  <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m10.5 6.75 1.5-1.5 1.5 1.5m0 10.5-1.5 1.5-1.5-1.5M6.75 10.5l-1.5 1.5 1.5 1.5m10.5 0 1.5-1.5-1.5-1.5M9 9h6v6H9z" />
                  </svg>
                </span>
              </div>

              <nav class="flex flex-col gap-3 text-sm font-medium">
                <button
                  type="button"
                  class="group flex items-center justify-between rounded-2xl border border-white/5 bg-white/5 px-4 py-3 text-white/85 transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/70 hover:text-white hover:shadow-glow"
                  @click="openSearchFromMenu"
                >
                  <div class="flex items-center gap-3">
                    <span class="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cosmic-aurora/80 to-sky-500/80 text-white shadow-glass">
                      <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-4.35-4.35m1.1-4.3a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z" />
                      </svg>
                    </span>
                    <div class="text-left">
                      <p class="text-sm font-semibold">Search</p>
                      <p class="text-xs text-white/60">Lookup domains, IPs, ASNs & more</p>
                    </div>
                  </div>
                  <svg class="h-4 w-4 text-white/50 transition group-hover:translate-x-1 group-hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8 5l8 7-8 7" />
                  </svg>
                </button>

                <nuxt-link
                  to="/trends"
                  class="group flex items-center justify-between rounded-2xl border border-white/5 bg-white/5 px-4 py-3 text-white/85 transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/70 hover:text-white hover:shadow-glow"
                  @click="closeMenu"
                >
                  <div class="flex items-center gap-3">
                    <span class="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cosmic-aurora/80 to-cosmic-flare/80 text-white shadow-glass">
                      <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5 9 9l4.5 4.5L21 6" />
                      </svg>
                    </span>
                    <div class="text-left">
                      <p class="text-sm font-semibold">Trending now</p>
                      <p class="text-xs text-white/60">Real-time signals across the network</p>
                    </div>
                  </div>
                  <svg class="h-4 w-4 text-white/50 transition group-hover:translate-x-1 group-hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8 5l8 7-8 7" />
                  </svg>
                </nuxt-link>

                <nuxt-link
                  to="/isp/germany"
                  class="group flex items-center justify-between rounded-2xl border border-white/5 bg-white/5 px-4 py-3 text-white/85 transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/70 hover:text-white hover:shadow-glow"
                  @click="closeMenu"
                >
                  <div class="flex items-center gap-3">
                    <span class="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-purple-400/80 to-cosmic-haze/80 text-white shadow-glass">
                      <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 7h16M4 12h10M4 17h7" />
                      </svg>
                    </span>
                    <div class="text-left">
                      <p class="text-sm font-semibold">ISPs Germany</p>
                      <p class="text-xs text-white/60">Curated list of German providers</p>
                    </div>
                  </div>
                  <svg class="h-4 w-4 text-white/50 transition group-hover:translate-x-1 group-hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8 5l8 7-8 7" />
                  </svg>
                </nuxt-link>

                <nuxt-link
                  to="/ipv4"
                  class="group flex items-center justify-between rounded-2xl border border-white/5 bg-white/5 px-4 py-3 text-white/85 transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/70 hover:text-white hover:shadow-glow"
                  @click="closeMenu"
                >
                  <div class="flex items-center gap-3">
                    <span class="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-400/80 to-sky-500/80 text-white shadow-glass">
                      <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 5h18M3 12h12m-5 7h11" />
                      </svg>
                    </span>
                    <div class="text-left">
                      <p class="text-sm font-semibold">IPv4 Entries</p>
                      <p class="text-xs text-white/60">Millions of scanned IPv4 hosts</p>
                    </div>
                  </div>
                  <svg class="h-4 w-4 text-white/50 transition group-hover:translate-x-1 group-hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8 5l8 7-8 7" />
                  </svg>
                </nuxt-link>

                <nuxt-link
                  to="/dns"
                  class="group flex items-center justify-between rounded-2xl border border-white/5 bg-white/5 px-4 py-3 text-white/85 transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/70 hover:text-white hover:shadow-glow"
                  @click="closeMenu"
                >
                  <div class="flex items-center gap-3">
                    <span class="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/80 to-emerald-400/80 text-white shadow-glass">
                      <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v4m0 10v4m7-7h-4M9 12H5m12-5.657-2.828 2.829M8.828 15.172 6 18m12 .001-2.828-2.829M8.828 8.829 6 6" />
                      </svg>
                    </span>
                    <div class="text-left">
                      <p class="text-sm font-semibold">DNS Entries</p>
                      <p class="text-xs text-white/60">Inspect authoritative DNS records</p>
                    </div>
                  </div>
                  <svg class="h-4 w-4 text-white/50 transition group-hover:translate-x-1 group-hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8 5l8 7-8 7" />
                  </svg>
                </nuxt-link>

                <nuxt-link
                  to="/asn"
                  class="group flex items-center justify-between rounded-2xl border border-white/5 bg-white/5 px-4 py-3 text-white/85 transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/70 hover:text-white hover:shadow-glow"
                  @click="closeMenu"
                >
                  <div class="flex items-center gap-3">
                    <span class="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-rose-400/80 to-orange-400/80 text-white shadow-glass">
                      <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m5 12 4.5 4.5L19 7.5" />
                      </svg>
                    </span>
                    <div class="text-left">
                      <p class="text-sm font-semibold">ASN Entries</p>
                      <p class="text-xs text-white/60">Understand autonomous systems</p>
                    </div>
                  </div>
                  <svg class="h-4 w-4 text-white/50 transition group-hover:translate-x-1 group-hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8 5l8 7-8 7" />
                  </svg>
                </nuxt-link>
              </nav>
            </div>
          </div>
        </div>
      </Transition>
    </div>

    <!-- Loading indicator -->
    <loading v-if="loadingIndicator" />
  </header>
  <search-modal :open="isSearchOpen" @close="closeSearch" />
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import Loading from '@/components/loading.vue'
import SearchModal from '@/components/search-modal.vue'
import { useMainStore } from '~/stores/main'

const mainStore = useMainStore()
const { loading: loadingIndicator } = storeToRefs(mainStore)

const isMenuOpen = ref(false)
const isSearchOpen = ref(false)
const route = useRoute()

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const openSearch = () => {
  isSearchOpen.value = true
}

const closeSearch = () => {
  isSearchOpen.value = false
}

const openSearchFromMenu = () => {
  closeMenu()
  openSearch()
}

watch(
  () => route.fullPath,
  () => {
    closeMenu()
    closeSearch()
  }
)
</script>
