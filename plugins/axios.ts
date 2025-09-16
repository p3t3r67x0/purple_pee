import { useRuntimeConfig } from '#imports'
import { useMainStore } from '~/stores/main'

const normalizeUrl = (base: string, url: string) => {
  if (/^https?:\/\//i.test(url) || url.startsWith('//')) {
    return url
  }

  if (!base) {
    return url
  }

  if (base.endsWith('/') && url.startsWith('/')) {
    return `${base}${url.slice(1)}`
  }

  if (!base.endsWith('/') && !url.startsWith('/')) {
    return `${base}/${url}`
  }

  return `${base}${url}`
}

const isGraphRequest = (url: string) => url.includes('/graph/')

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  const mainStore = useMainStore()

  const $get = async (url: string, options: Record<string, any> = {}) => {
    const finalUrl = normalizeUrl(config.public.API_URL || '', url)
    const trackLoading = !isGraphRequest(finalUrl)

    mainStore.updateLoadingIndicator(true)

    try {
      const data = await nuxtApp.$fetch(finalUrl, {
        method: 'GET',
        ...options,
        headers: {
          'Content-Type': 'application/json',
          ...(options.headers || {})
        }
      })

      if (trackLoading) {
        mainStore.updateLoadingIndicator(false)
      }

      return data
    } catch (error: any) {
      if (trackLoading) {
        mainStore.updateLoadingIndicator(false)
      }

      if (error && typeof error === 'object') {
        const status = error.status ?? error.statusCode

        if (!error.response && (status !== undefined || error.data !== undefined)) {
          error.response = {
            data: error.data,
            status
          }
        }
      }

      throw error
    }
  }

  const axios = {
    $get
  }

  nuxtApp.provide('axios', axios)
  nuxtApp.vueApp.config.globalProperties.$axios = axios
})
