export default ({
  app,
  store
}) => {
  app.$axios.defaults.headers.get['Content-Type'] = 'application/json'

  app.$axios.interceptors.request.use(
    function(config) {
      app.store.commit('updateLoadingIndicator', true)
      app.store.commit('updateModalVisible', false)
      // console.log('updateLoadingIndicator: ' + app.store.state.loading)
      return config
    },
    function(error) {
      app.store.commit('updateLoadingIndicator', false)
      // console.log('updateLoadingIndicator: ' + app.store.state.loading)
      return Promise.reject(error)
    }
  )

  app.$axios.interceptors.response.use(
    function(response) {
      app.store.commit('updateLoadingIndicator', false)
      // console.log('updateLoadingIndicator: ' + app.store.state.loading)
      return response
    },
    function(error) {
      app.store.commit('updateLoadingIndicator', false)
      // console.log('updateLoadingIndicator: ' + app.store.state.loading)
      return Promise.reject(error)
    }
  )
}
