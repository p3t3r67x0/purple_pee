import { computed, ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useMainStore } from '~/stores/main'
import { useHead, useNuxtApp } from '#app'
import { fetchJson, handleFetchError } from '~/utils/http'
import { useSlugParam } from '~/composables/useSlugParam'

interface MatchResultsOptions {
  prefix: string
  displayPrefix?: string
  headTitle: (decodedQuery: string) => string
  headDescription: (decodedQuery: string) => string
  buildQueryTitle?: (decodedQuery: string, rawQuery: string) => [string, string]
  transformQueryForStore?: (decodedQuery: string) => string | null
  fetchPath?: (decodedQuery: string, rawQuery: string) => string
}

const decodeValue = (value: string) => {
  try {
    return decodeURIComponent(value)
  } catch {
    return value
  }
}

export const useMatchResultsPage = (options: MatchResultsOptions) => {
  const { prefix, displayPrefix, buildQueryTitle, transformQueryForStore, fetchPath, headTitle, headDescription } = options
  const slug = useSlugParam()
  const { $env } = useNuxtApp()
  const apiUrl = $env?.API_URL ?? ''
  const mainStore = useMainStore()
  const { modalVisible, loading: loadingIndicator } = storeToRefs(mainStore)

  const results = ref<any[]>([])
  const currentPage = ref(1)

  const rawQuery = computed(() => slug.value)
  const decodedQuery = computed(() => decodeValue(rawQuery.value))

  const queryTitle = computed(() => {
    if (buildQueryTitle) {
      return buildQueryTitle(decodedQuery.value, rawQuery.value)
    }

    return [displayPrefix ?? prefix, rawQuery.value] as [string, string]
  })

  useHead(() => ({
    title: headTitle(decodedQuery.value),
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: headDescription(decodedQuery.value)
      }
    ]
  }))

  const fetchLatest = async (decoded: string, raw: string) => {
    try {
      const endpoint = fetchPath ? fetchPath(decoded, raw) : `${apiUrl}/match/${prefix}:${decoded}`
      const response = await fetchJson(endpoint)
      results.value = Array.isArray(response) ? response : []
    } catch (error) {
      results.value = []
      handleFetchError(error)
    }
  }

  watch(
    slug,
    async (rawValue) => {
      const normalized = rawValue ?? ''
      const decoded = decodeValue(normalized)
      currentPage.value = 1

      const queryForStore = transformQueryForStore
        ? transformQueryForStore(decoded)
        : `${prefix}:${decoded}`

      mainStore.updateQuery(queryForStore ?? null)
      mainStore.updateLoadingIndicator(true)

      await fetchLatest(decoded, normalized)
    },
    { immediate: true }
  )

  return {
    results,
    currentPage,
    modalVisible,
    loadingIndicator,
    queryTitle,
    decodedQuery,
    refresh: () => fetchLatest(decodedQuery.value, rawQuery.value)
  }
}
