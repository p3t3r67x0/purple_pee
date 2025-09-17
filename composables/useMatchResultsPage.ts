import { computed, ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useMainStore } from '~/stores/main'
import { useHead, useNuxtApp } from '#app'
import { fetchJson, handleFetchError, isPaginatedResponse } from '~/utils/http'
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

  const DEFAULT_PAGE = 1
  const DEFAULT_PAGE_SIZE = 25

  const results = ref<any[]>([])
  const currentPage = ref(DEFAULT_PAGE)
  const pageSize = ref(DEFAULT_PAGE_SIZE)
  const pagination = ref({
    page: DEFAULT_PAGE,
    page_size: DEFAULT_PAGE_SIZE,
    total: 0,
    total_pages: 1,
    has_next: false,
    has_previous: false
  })

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

  const fetchLatest = async (decoded: string, raw: string, page = DEFAULT_PAGE) => {
    try {
      const endpoint = fetchPath ? fetchPath(decoded, raw) : `${apiUrl}/match/${prefix}:${decoded}`
      const separator = endpoint.includes('?') ? '&' : '?'
      const url = `${endpoint}${separator}page=${page}&page_size=${pageSize.value}`
      const response = await fetchJson(url)

      if (isPaginatedResponse<any>(response)) {
        results.value = response.results ?? []
        const derivedHasNext = response.page < response.total_pages
        const derivedHasPrevious = response.page > 1

        pagination.value = {
          page: response.page,
          page_size: response.page_size,
          total: response.total,
          total_pages: response.total_pages,
          has_next: Boolean(response.has_next) || derivedHasNext,
          has_previous: Boolean(response.has_previous) || derivedHasPrevious
        }
        currentPage.value = response.page
        pageSize.value = response.page_size
        mainStore.updateResultList(response.results ?? [])
        return
      }

      if (Array.isArray(response)) {
        results.value = response
        const totalPages = response.length > 0 ? Math.max(1, Math.ceil(response.length / pageSize.value)) : 1

        pagination.value = {
          page,
          page_size: pageSize.value,
          total: response.length,
          total_pages: totalPages,
          has_next: page < totalPages,
          has_previous: page > 1
        }
        currentPage.value = pagination.value.page
        mainStore.updateResultList(response)
        return
      }

      if (response && typeof response === 'object' && Array.isArray((response as { results?: unknown[] }).results)) {
        const fallbackResults = (response as { results?: any[] }).results ?? []
        results.value = fallbackResults
        const totalPages = fallbackResults.length > 0 ? Math.max(1, Math.ceil(fallbackResults.length / pageSize.value)) : 1

        pagination.value = {
          page,
          page_size: pageSize.value,
          total: fallbackResults.length,
          total_pages: totalPages,
          has_next: page < totalPages,
          has_previous: page > 1
        }
        currentPage.value = pagination.value.page
        mainStore.updateResultList(fallbackResults)
        return
      }

      results.value = []
      pagination.value = {
        page,
        page_size: pageSize.value,
        total: 0,
        total_pages: 1,
        has_next: false,
        has_previous: page > 1
      }
      mainStore.updateResultList([])
    } catch (error) {
      results.value = []
      pagination.value = {
        page,
        page_size: pageSize.value,
        total: 0,
        total_pages: 1,
        has_next: false,
        has_previous: page > 1
      }
      handleFetchError(error)
    }
  }

  const nextPage = () => {
    if (!pagination.value.has_next) {
      return
    }

    fetchLatest(decodedQuery.value, rawQuery.value, currentPage.value + 1)
  }

  const prevPage = () => {
    if (!pagination.value.has_previous) {
      return
    }

    fetchLatest(decodedQuery.value, rawQuery.value, currentPage.value - 1)
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

      await fetchLatest(decoded, normalized, DEFAULT_PAGE)
    },
    { immediate: true }
  )

  return {
    results,
    currentPage,
    pageSize,
    pagination,
    modalVisible,
    loadingIndicator,
    queryTitle,
    decodedQuery,
    nextPage,
    prevPage,
    refresh: () => fetchLatest(decodedQuery.value, rawQuery.value, currentPage.value)
  }
}
