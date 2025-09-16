import { useMainStore } from '~/stores/main'

export default defineNuxtPlugin((nuxtApp) => {
  const mainStore = useMainStore()

  const storeProxy = {
    state: mainStore,
    commit: (mutation: keyof typeof mainStore | string, payload: unknown) => {
      const handler = (mainStore as Record<string, (value: unknown) => void>)[mutation as string]

      if (typeof handler === 'function') {
        handler.call(mainStore, payload)
      } else if (process.dev) {
        console.warn(`[store] Unknown mutation: ${String(mutation)}`)
      }
    }
  }

  nuxtApp.provide('store', storeProxy)
})
