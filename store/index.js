export const state = () => ({
  loading: false,
  results: []
})

export const mutations = {
  update(state, res) {
    state.results = res
  },
  updateLoadingIndicator(state, loading) {
    state.loading = loading
  }
}
