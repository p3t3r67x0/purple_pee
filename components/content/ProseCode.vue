<template>
  <div class="relative group">
    <pre :class="['!mt-6', 'code-block', copySuccess ? 'ring-2 ring-purple-500/60' : '']"><slot /></pre>
    <button
      type="button"
      @click="copy"
      class="absolute top-2 right-2 inline-flex items-center gap-1.5 rounded-lg bg-[#1b1631]/80 backdrop-blur-sm border border-white/10 px-3 py-1.5 text-[11px] font-medium text-slate-300 hover:text-white hover:border-purple-400/40 hover:bg-[#251d42] active:scale-[0.97] transition focus:outline-none focus:ring-2 focus:ring-purple-500/60"
      :aria-label="copySuccess ? 'Copied' : 'Copy code'"
    >
      <svg v-if="!copySuccess" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2M8 16h8a2 2 0 002-2v-2m-6 6v2m0 0h4m-4 0H8"/></svg>
      <svg v-else class="w-4 h-4 text-green-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
      <span>{{ copySuccess ? 'Copied' : 'Copy' }}</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, getCurrentInstance } from 'vue'

const copySuccess = ref(false)

function copy() {
  const el = (Array.from((getCurrentInstance()?.vnode.el as HTMLElement)?.querySelectorAll('pre code')) || [])[0]
  if (!el) return
  const text = el.textContent || ''
  navigator.clipboard.writeText(text).then(() => {
    copySuccess.value = true
    setTimeout(() => (copySuccess.value = false), 1800)
  })
}
</script>

<style scoped>
.code-block::-webkit-scrollbar { height: 10px; }
.code-block::-webkit-scrollbar-track { background: transparent; }
.code-block::-webkit-scrollbar-thumb { background: rgba(127,90,240,0.35); border-radius: 9999px; }
.code-block::-webkit-scrollbar-thumb:hover { background: rgba(240,118,164,0.55); }
</style>
