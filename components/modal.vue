<template>
  <div class="z-6500 fixed inset-0 flex items-center justify-center px-4 py-6 sm:py-12">
    <div class="absolute inset-0 bg-black/40 backdrop-blur-sm" @click="closeModal" aria-hidden="true"></div>
    <div
      :class="[
        'relative w-full max-w-lg rounded-2xl p-6 shadow-xl transition sm:p-8',
        errorStatusClass
      ]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <button
        type="button"
        @click="closeModal"
        class="absolute right-4 top-4 rounded-full p-1 text-gray-600 transition hover:bg-white/40 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-600"
        aria-label="Close"
      >
        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </button>
      <div class="space-y-2 pr-4">
        <h2 id="modal-title" class="text-xl font-semibold">{{ errorTitle }}</h2>
        <p class="text-sm leading-relaxed">{{ errorMessageText }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useMainStore } from '~/stores/main'

const mainStore = useMainStore()
const { errorMessage, errorStatus } = storeToRefs(mainStore)

const errorMessageText = computed(() => {
  const value = errorMessage.value

  if (value && typeof value === 'object' && 'message' in value) {
    const message = (value as Record<string, unknown>).message
    return typeof message === 'string' ? message : ''
  }

  return (value as string | null) ?? ''
})

const errorStatusValue = computed(() => errorStatus.value ?? null)

const errorTitle = computed(() => {
  const status = errorStatusValue.value

  if (status === 409 || status === 404) {
    return 'Warning'
  }

  if (status === 500 || status === 400 || status === 401 || status === 405) {
    return 'Error'
  }

  return 'Hint'
})

const errorStatusClass = computed(() => {
  const status = errorStatusValue.value

  if (status === 409 || status === 404) {
    return 'border-l-4 border-orange-500 bg-orange-50 text-orange-900'
  }

  if (status === 500 || status === 400 || status === 401 || status === 405) {
    return 'border-l-4 border-red-500 bg-red-50 text-red-900'
  }

  return 'border-l-4 border-gray-500 bg-gray-50 text-gray-900'
})

const closeModal = () => {
  mainStore.updateModalVisible(false)
  mainStore.updateErrorMessage(null)
  mainStore.updateErrorStatus(null)
}

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    closeModal()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>
