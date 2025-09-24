<template>
  <footer
    class="relative mt-16 overflow-hidden border-t border-white/10 bg-gradient-to-br from-cosmic-haze/70 via-[#1a1440]/80 to-black/90 text-slate-100">
    <!-- Background Pattern -->
    <div
      class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-900/10 to-transparent">
    </div>
    <div class="absolute inset-0 bg-grid-white/[0.02] [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]">
    </div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <!-- Main Brand Section -->
      <div class="mb-16 text-center">
        <div class="inline-flex items-center gap-3 mb-6">
          <div
            class="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/25">
            <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9a9 9 0 01-9-9m9 0a9 9 0 00-9 9"></path>
            </svg>
          </div>
          <div>
            <h3 class="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              NetScanner
            </h3>
            <p class="text-sm text-slate-400">Advanced Network Intelligence Platform</p>
          </div>
        </div>
        <p class="max-w-2xl mx-auto text-slate-300 leading-relaxed">
          Discover, analyze, and monitor network infrastructure with our comprehensive suite of tools.
          From domain intelligence to SSL certificate analysis, we provide the insights you need.
        </p>
      </div>

      <!-- Links Grid -->
      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-6">
        <!-- Tools Section -->
        <div class="text-center sm:text-left">
          <div class="flex items-center gap-2 mb-5">
            <div
              class="w-6 h-6 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
              <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z">
                </path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </div>
            <p class="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-400">Tools</p>
          </div>
          <ul class="space-y-3 text-sm text-slate-200/80">
            <li>
              <nuxt-link to="/dns" class="group flex items-center gap-2 transition hover:text-white/95">
                <span
                  class="w-1 h-1 rounded-full bg-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                DNS Lookup
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/live/scan" class="group flex items-center gap-2 transition hover:text-white/95">
                <span
                  class="w-1 h-1 rounded-full bg-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Live Scanner
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/asn" class="group flex items-center gap-2 transition hover:text-white/95">
                <span
                  class="w-1 h-1 rounded-full bg-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                ASN Lookup
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/ipv4" class="group flex items-center gap-2 transition hover:text-white/95">
                <span
                  class="w-1 h-1 rounded-full bg-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                IP Analysis
              </nuxt-link>
            </li>
          </ul>
        </div>

        <!-- Documentation Section -->
        <div class="text-center sm:text-left">
          <div class="flex items-center gap-2 mb-5">
            <div
              class="w-6 h-6 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
              <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253">
                </path>
              </svg>
            </div>
            <p class="text-xs font-semibold uppercase tracking-[0.35em] text-blue-400">Docs</p>
          </div>
          <ul class="space-y-3 text-sm text-slate-200/80">
            <li>
              <nuxt-link to="/docs/api" class="group flex items-center gap-2 transition hover:text-white/95">
                <span
                  class="w-1 h-1 rounded-full bg-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                API Reference
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/docs/examples" class="group flex items-center gap-2 transition hover:text-white/95">
                <span
                  class="w-1 h-1 rounded-full bg-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Examples
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/docs/faq" class="group flex items-center gap-2 transition hover:text-white/95">
                <span
                  class="w-1 h-1 rounded-full bg-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                FAQ
              </nuxt-link>
            </li>
            <li>
              <a href="https://api.netscanner.io" target="_blank"
                class="group flex items-center gap-2 transition hover:text-white/95">
                <span
                  class="w-1 h-1 rounded-full bg-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Live API
                <svg class="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>

        <!-- Community Section -->
        <div class="text-center sm:text-left">
          <div class="flex items-center gap-2 mb-5">
            <div
              class="w-6 h-6 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z">
                </path>
              </svg>
            </div>
            <p class="text-xs font-semibold uppercase tracking-[0.35em] text-purple-400">Community</p>
          </div>
          <ul class="space-y-3 text-sm text-slate-200/80">
            <li>
              <a href="https://github.com/p3t3r67x0/purple_pee" target="_blank"
                class="group flex items-center gap-2 transition hover:text-white/95">
                <span
                  class="w-1 h-1 rounded-full bg-purple-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                GitHub
                <svg class="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://github.com/p3t3r67x0/purple_pee/issues" target="_blank"
                class="group flex items-center gap-2 transition hover:text-white/95">
                <span
                  class="w-1 h-1 rounded-full bg-purple-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Issues
                <svg class="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://github.com/p3t3r67x0/purple_pee/discussions" target="_blank"
                class="group flex items-center gap-2 transition hover:text-white/95">
                <span
                  class="w-1 h-1 rounded-full bg-purple-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Discussions
                <svg class="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/netscanner_io" target="_blank"
                class="group flex items-center gap-2 transition hover:text-white/95">
                <span
                  class="w-1 h-1 rounded-full bg-purple-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Twitter
                <svg class="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>

        <!-- Resources Section -->
        <div class="text-center sm:text-left">
          <div class="flex items-center gap-2 mb-5">
            <div
              class="w-6 h-6 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
              <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10">
                </path>
              </svg>
            </div>
            <p class="text-xs font-semibold uppercase tracking-[0.35em] text-amber-400">Resources</p>
          </div>
          <ul class="space-y-3 text-sm text-slate-200/80">
            <li>
              <nuxt-link to="/trends" class="group flex items-center gap-2 transition hover:text-white/95">
                <span
                  class="w-1 h-1 rounded-full bg-amber-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Analytics
              </nuxt-link>
            </li>
            <li>
              <a href="#" class="group flex items-center gap-2 transition hover:text-white/95">
                <span
                  class="w-1 h-1 rounded-full bg-amber-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Status Page
              </a>
            </li>
            <li>
              <nuxt-link to="/changelog" class="group flex items-center gap-2 transition hover:text-white/95">
                <span
                  class="w-1 h-1 rounded-full bg-amber-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Changelog
              </nuxt-link>
            </li>
            <li>
              <a href="#" class="group flex items-center gap-2 transition hover:text-white/95">
                <span
                  class="w-1 h-1 rounded-full bg-amber-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Blog
              </a>
            </li>
          </ul>
        </div>

        <!-- Company Section -->
        <div class="text-center sm:text-left">
          <div class="flex items-center gap-2 mb-5">
            <div
              class="w-6 h-6 rounded-lg bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center">
              <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4">
                </path>
              </svg>
            </div>
            <p class="text-xs font-semibold uppercase tracking-[0.35em] text-rose-400">Company</p>
          </div>
          <ul class="space-y-3 text-sm text-slate-200/80">
            <li>
              <nuxt-link to="/about" class="group flex items-center gap-2 transition hover:text-white/95">
                <span
                  class="w-1 h-1 rounded-full bg-rose-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                About Us
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/contact" class="group flex items-center gap-2 transition hover:text-white/95">
                <span
                  class="w-1 h-1 rounded-full bg-rose-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Contact
              </nuxt-link>
            </li>
            <li>
              <a href="#" class="group flex items-center gap-2 transition hover:text-white/95">
                <span
                  class="w-1 h-1 rounded-full bg-rose-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Careers
              </a>
            </li>
            <li>
              <a href="#" class="group flex items-center gap-2 transition hover:text-white/95">
                <span
                  class="w-1 h-1 rounded-full bg-rose-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Press Kit
              </a>
            </li>
          </ul>
        </div>

        <!-- Legal Section -->
        <div class="text-center sm:text-left">
          <div class="flex items-center gap-2 mb-5">
            <div
              class="w-6 h-6 rounded-lg bg-gradient-to-br from-slate-500 to-gray-600 flex items-center justify-center">
              <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z">
                </path>
              </svg>
            </div>
            <p class="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">Legal</p>
          </div>
          <ul class="space-y-3 text-sm text-slate-200/80">
            <li>
              <a href="#" class="group flex items-center gap-2 transition hover:text-white/95">
                <span
                  class="w-1 h-1 rounded-full bg-slate-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" class="group flex items-center gap-2 transition hover:text-white/95">
                <span
                  class="w-1 h-1 rounded-full bg-slate-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Privacy Policy
              </a>
            </li>
            <li>
              <nuxt-link to="/imprint" class="group flex items-center gap-2 transition hover:text-white/95">
                <span
                  class="w-1 h-1 rounded-full bg-slate-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Imprint
              </nuxt-link>
            </li>
            <li>
              <a href="#" class="group flex items-center gap-2 transition hover:text-white/95">
                <span
                  class="w-1 h-1 rounded-full bg-slate-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Cookie Policy
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Stats Section -->
      <div class="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4 text-center">
        <div class="space-y-2">
          <div class="text-2xl font-bold text-emerald-400">1M+</div>
          <div class="text-xs text-slate-400 uppercase tracking-wider">API Requests</div>
        </div>
        <div class="space-y-2">
          <div class="text-2xl font-bold text-blue-400">50K+</div>
          <div class="text-xs text-slate-400 uppercase tracking-wider">Domains Analyzed</div>
        </div>
        <div class="space-y-2">
          <div class="text-2xl font-bold text-purple-400">99.9%</div>
          <div class="text-xs text-slate-400 uppercase tracking-wider">Uptime</div>
        </div>
        <div class="space-y-2">
          <div class="text-2xl font-bold text-amber-400">24/7</div>
          <div class="text-xs text-slate-400 uppercase tracking-wider">Monitoring</div>
        </div>
      </div>

      <!-- Newsletter Section -->
      <div
        class="mt-16 rounded-2xl bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/20 p-8 text-center">
        <h4 class="text-xl font-semibold text-white mb-2">Stay Updated</h4>
        <p class="text-slate-300 mb-6 max-w-md mx-auto">
          Get notified about new features, API updates, and security insights.
        </p>
        <div class="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input type="email" placeholder="Enter your email"
            class="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent">
          <button
            class="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/25">
            Subscribe
          </button>
        </div>
      </div>

      <!-- Bottom Section -->
      <div
        class="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 text-xs text-slate-300/70 sm:flex-row">
        <div class="flex flex-col sm:flex-row items-center gap-4">
          <span>© {{ currentYear }} NetScanner.io — Advanced Network Intelligence</span>
          <div class="flex items-center gap-4">
            <span class="flex items-center gap-2">
              <div class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
              All systems operational
            </span>
            <span>•</span>
            <span>Open Source</span>
            <span>•</span>
            <span>MIT License</span>
          </div>
        </div>
        <div class="flex items-center gap-6">
          <a href="https://github.com/p3t3r67x0/purple_pee" target="_blank"
            class="text-slate-400 hover:text-white transition-colors">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a href="https://twitter.com/netscanner_io" target="_blank"
            class="text-slate-400 hover:text-white transition-colors">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
          </a>
          <div class="h-4 w-px bg-slate-600"></div>
          <span class="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-slate-400/70">
            <span class="h-px w-6 bg-gradient-to-r from-transparent via-white/40 to-transparent"></span>
            crafted with ❤️ for curious minds
            <span class="h-px w-6 bg-gradient-to-r from-transparent via-white/40 to-transparent"></span>
          </span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>
