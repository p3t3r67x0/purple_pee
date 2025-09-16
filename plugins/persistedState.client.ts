import { useMainStore } from '~/stores/main'

const STORAGE_KEY = 'vuex'

export default defineNuxtPlugin(() => {
  if (process.server) {
    return
  }

  const mainStore = useMainStore()
  const savedState = window.localStorage.getItem(STORAGE_KEY)

  if (savedState) {
    try {
      const parsed = JSON.parse(savedState)
      mainStore.$patch(parsed)
    } catch (error) {
      console.warn('[store] Failed to parse persisted state', error)
    }
  }

  mainStore.$subscribe((_, state) => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  })
})
