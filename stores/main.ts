import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    query: null as string | null,
    results: [] as any[],
    loading: false,
    errorStatus: null as number | null,
    errorMessage: null as string | null,
    modalVisible: false
  }),
  actions: {
    updateQuery(query: string | null) {
      this.query = query
    },
    updateResultList(results: any[]) {
      this.results = results
    },
    updateErrorMessage(message: string | null) {
      this.errorMessage = message
    },
    updateErrorStatus(status: number | null) {
      this.errorStatus = status
    },
    updateLoadingIndicator(loading: boolean) {
      this.loading = loading
    },
    updateModalVisible(visible: boolean) {
      this.modalVisible = visible
    }
  }
})
