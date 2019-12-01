export const state = () => ({
  results: null
})

export const mutations = {
  update(state, res) {
    state.results = res
  }
}
