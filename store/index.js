export const state = () => ({
  results: []
})

export const mutations = {
  update(state, res) {
    state.results = res
  }
}
