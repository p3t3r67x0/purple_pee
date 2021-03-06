export const state = () => ({
  query: null,
  results: [],
  loading: false,
  errorStatus: null,
  errorMessage: null,
  modalVisible: false
})

export const mutations = {
  updateQuery(state, query) {
    state.query = query
  },
  updateResultList(state, res) {
    state.results = res
  },
  updateErrorMessage(state, message) {
    state.errorMessage = message
  },
  updateErrorStatus(state, status) {
    state.errorStatus = status
  },
  updateLoadingIndicator(state, loading) {
    state.loading = loading
  },
  updateModalVisible(state, visible) {
    state.modalVisible = visible
  }
}
