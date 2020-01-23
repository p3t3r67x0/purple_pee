<template>
<div id="xhr" class="container mx-auto">
  <div class="bg-white rounded shadow-md leading-normal mx-3 md:mx-0 mb-6 px-3 pt-2 pb-3">
    <div ref="net" id="net" class="w-full outline-none"></div>
  </div>
</div>
</template>

<style scoped>
#net {
  height: 800px
}
</style>

<script>
export default {
  props: {
    query: String
  },
  data() {
    return {
      nodes: [],
      edges: [],
      options: {
        autoResize: true,
        height: '100%',
        width: '100%',
        nodes: {
          shape: 'dot',
          size: 7,
          scaling: {
            min: 8,
            max: 22,
            label: {
              min: 12,
              max: 22,
              drawThreshold: 17,
              maxVisible: 40
            }
          },
          font: {
            size: 10,
            face: '"Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
            color: '#1a202c'
          }
        },
        edges: {
          width: 0.15,
          color: {
            inherit: 'from'
          },
          selectionWidth: 1,
          smooth: {
            type: 'continuous',
            roundness: 0.5
          },
        },
        physics: false,
        interaction: {
          zoomView: false,
          hideEdgesOnDrag: false,
          hideEdgesOnZoom: false,
          navigationButtons: true,
        },
        layout: {
          randomSeed: 191006,
          improvedLayout: true
        }
      }
    }
  },
  mounted() {
    this.fetchGraph(this.query)
  },
  methods: {
    createGraph(nodes, edges) {
      let nodesDataset = new vis.DataSet(nodes)
      let edgesDataset = new vis.DataSet(edges)

      const data = {
        nodes: nodesDataset,
        edges: edgesDataset
      }

      const network = new vis.Network(this.$refs.net, data, this.options)
      const vm = this

      window.onresize = function() {
        network.fit()
      }

      network.on('click', function() {
        const selection = network.getSelection()
        const connectedNodes = network.getConnectedNodes(selection.nodes[0])

        nodesDataset.forEach(node => {
          let label, color

          if (connectedNodes.includes(node.id)) {
            color = undefined
          } else if (node.id !== selection.nodes[0] && selection.nodes[0] !== undefined && !(connectedNodes.includes(node.id))) {
            color = '#e2e8f0'
          } else {
            color: undefined
          }

          nodesDataset.update({
            id: node.id,
            color: color
          })
        })
      })
    },
    fetchGraph(query) {
      this.$axios.$get(process.env.API_URL + '/graph/' + decodeURIComponent(query)).then(res => {
        this.createGraph(res.nodes, res.edges)
      }).catch((error) => {
        if (error.response) {
          this.$store.commit('updateResultList', [])

          if (error.response.status !== 404) {
            this.$store.commit('updateErrorMessage', error.response.data)
            this.$store.commit('updateErrorStatus', error.response.status)
            this.$store.commit('updateModalVisible', true)
            this.$store.commit('updateLoadingIndicator', false)
          }
        }
      })
    }
  }
}
</script>
