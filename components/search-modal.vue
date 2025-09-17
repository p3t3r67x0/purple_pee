<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div v-if="open" class="fixed inset-0 z-[7000] flex items-center justify-center px-4 py-6 sm:py-12">
        <div class="absolute inset-0 bg-black/70 backdrop-blur" @click="close" aria-hidden="true"></div>
        <div class="relative w-full max-w-3xl rounded-3xl border border-white/15 bg-white/10 px-5 py-6 shadow-glass backdrop-blur-2xl sm:px-8 sm:py-8">
          <button
            type="button"
            @click="close"
            class="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white/70 transition hover:border-cosmic-aurora/60 hover:text-white focus:outline-none focus:ring-2 focus:ring-cosmic-aurora/70"
            aria-label="Close search"
          >
            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>

          <div class="flex flex-col gap-6 text-white">
            <div class="flex flex-col gap-2">
              <p class="text-xs uppercase tracking-[0.35em] text-white/50">Search</p>
              <h2 class="text-2xl font-semibold">Discover datasets across Purplepee</h2>
            </div>

            <Search />

            <div class="grid gap-3 text-xs text-white/60 sm:grid-cols-3">
              <div class="rounded-2xl border border-white/10 bg-white/5 p-3">
                <p class="font-semibold text-white/80">Quick filters</p>
                <p class="mt-1 text-white/60">Use prefixes like <code class="font-mono text-white">ipv4:</code> or <code class="font-mono text-white">asn:</code> to jump straight into namespaces.</p>
              </div>
              <div class="rounded-2xl border border-white/10 bg-white/5 p-3">
                <p class="font-semibold text-white/80">Keyboard</p>
                <p class="mt-1 text-white/60">Press <span class="rounded border border-white/20 bg-white/10 px-1 py-0.5 text-[10px] uppercase tracking-wide">Enter</span> to search, <span class="rounded border border-white/20 bg-white/10 px-1 py-0.5 text-[10px] uppercase tracking-wide">Esc</span> to close.</p>
              </div>
              <div class="rounded-2xl border border-white/10 bg-white/5 p-3">
                <p class="font-semibold text-white/80">Supported inputs</p>
                <p class="mt-1 text-white/60">Domains, IPs, ASNs, CIDR blocks, SSL metadata, and more.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { nextTick, onBeforeUnmount, watch } from 'vue'
import Search from '@/components/search.vue'

const props = defineProps<{ open: boolean }>()
const emit = defineEmits<{ close: [] }>()

const close = () => {
  emit('close')
}

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    close()
  }
}

watch(
  () => props.open,
  (value) => {
    if (value) {
      window.addEventListener('keydown', handleKeydown)
      nextTick(() => {
        const input = document.getElementById('global-search') as HTMLInputElement | null
        input?.focus()
      })
    } else {
      window.removeEventListener('keydown', handleKeydown)
    }
  }
)

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>
