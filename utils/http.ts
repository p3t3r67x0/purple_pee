import { useMainStore } from '~/stores/main'

interface FetchJsonOptions extends RequestInit {
  trackLoading?: boolean
}

export interface FetchError extends Error {
  response?: {
    data: unknown
    status?: number
  }
}

const parseBody = async (response: Response) => {
  const contentType = response.headers.get('content-type') || ''

  if (response.status === 204) {
    return null
  }

  if (contentType.includes('application/json')) {
    try {
      return await response.json()
    } catch {
      return null
    }
  }

  try {
    return await response.text()
  } catch {
    return null
  }
}

export const fetchJson = async (url: string, options: FetchJsonOptions = {}) => {
  const { trackLoading = true, headers, ...init } = options
  const mainStore = useMainStore()

  if (trackLoading) {
    mainStore.updateLoadingIndicator(true)
  }

  try {
    const response = await fetch(url, {
      method: init.method ?? 'GET',
      ...init,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...(headers || {})
      }
    })

    if (!response.ok) {
      const errorData = await parseBody(response)
      const error: FetchError = new Error(`Request failed with status ${response.status}`)
      error.response = {
        data: errorData,
        status: response.status
      }

      throw error
    }

    return await parseBody(response)
  } finally {
    if (trackLoading) {
      mainStore.updateLoadingIndicator(false)
    }
  }
}

interface HandleFetchErrorOptions {
  updateResultList?: boolean
}

export const handleFetchError = (error: unknown, options: HandleFetchErrorOptions = {}) => {
  const { updateResultList = true } = options
  const mainStore = useMainStore()
  const response = (error as FetchError | undefined)?.response

  if (!response) {
    return
  }

  if (updateResultList) {
    mainStore.updateResultList([])
  }

  if (response.status !== 404) {
    mainStore.updateErrorMessage(response.data as string | null)
    mainStore.updateErrorStatus(response.status ?? null)
    mainStore.updateModalVisible(true)
    mainStore.updateLoadingIndicator(false)
  }
}
