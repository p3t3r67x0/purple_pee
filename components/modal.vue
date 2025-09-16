<template>
<div class="z-6500 fixed top-0 right-0 left-0 m-3 flex items-center justify-center">
  <div v-bind:class="errorStatusClass" class="w-full max-w-xl rounded shadow-md bg-white px-3 pt-2 pb-3">
    <svg v-on:click="closeModal" class="bg-text-900 fill-current float-right cursor-pointer -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
      <path class="heroicon-ui" d="M16.24 14.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 0 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12l2.83 2.83z" /></svg>
    <h2 class="text-xl font-medium">{{ errorTitle }}</h2>
    <p class="font-thin">{{ errorMessageText }}</p>
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
    return 'bg-orange-300'
  }

  if (status === 500 || status === 400 || status === 401 || status === 405) {
    return 'bg-red-300'
  }

  return 'bg-gray-300'
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
