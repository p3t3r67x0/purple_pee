<template>
  <div id="xhr" class="container mx-auto">
    <div class="bg-white rounded shadow-md leading-normal mx-3 md:mx-0 mb-6 px-3 pt-2 pb-3">
      <svg ref="svg" width="100%" height="800"></svg>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    results: { type: Object, required: true }
  },
  mounted() {
    if (process.client && this.results.nodes && this.results.edges) {
      this.renderGraph()
    }
  },
  methods: {
    async renderGraph() {
      const d3 = await import('d3') // lazy import avoids SSR issue

      const svg = d3.select(this.$refs.svg)
      svg.selectAll('*').remove() // clear on re-render

      const width = this.$refs.svg.clientWidth
      const height = 800

      // Data
      const nodes = this.results.nodes.map((n, i) => ({
        id: n.id || i,
        label: n.label || `Node ${i}`,
        type: n.id.startsWith('main') ? 'main' : 'sub',
        ...n
      }))

      const links = this.results.edges.map(e => ({
        source: e.from,
        target: e.to,
        ...e
      }))

      // Define arrow markers
      svg.append('defs').append('marker')
        .attr('id', 'arrow')
        .attr('viewBox', '0 -5 10 10')
        .attr('refX', 20) // how far back from node
        .attr('refY', 0)
        .attr('markerWidth', 6)
        .attr('markerHeight', 6)
        .attr('orient', 'auto')
        .append('path')
        .attr('d', 'M0,-5L10,0L0,5')
        .attr('fill', '#999')

      // Force simulation
      const simulation = d3.forceSimulation(nodes)
        .force('link', d3.forceLink(links).id(d => d.id).distance(140))
        .force('charge', d3.forceManyBody().strength(-300))
        .force('center', d3.forceCenter(width / 2, height / 2))

      // Links with arrows
      const link = svg.append('g')
        .attr('stroke', '#999')
        .attr('stroke-opacity', 0.6)
        .selectAll('line')
        .data(links)
        .enter().append('line')
        .attr('stroke-width', 1.5)
        .attr('marker-end', 'url(#arrow)')

      // Nodes
      const node = svg.append('g')
        .selectAll('circle')
        .data(nodes)
        .enter().append('circle')
        .attr('r', d => d.type === 'main' ? 16 : 10)
        .attr('fill', d => d.type === 'main' ? '#2b6cb0' : '#63b3ed')
        .attr('stroke', '#fff')
        .attr('stroke-width', 2)
        .call(d3.drag()
          .on('start', dragstarted)
          .on('drag', dragged)
          .on('end', dragended))

      // Labels
      const label = svg.append('g')
        .selectAll('text')
        .data(nodes)
        .enter().append('text')
        .text(d => d.label)
        .attr('font-size', 12)
        .attr('dy', -20)
        .attr('text-anchor', 'middle')
        .attr('fill', '#333')

      // Tooltips
      const tooltip = d3.select('body').append('div')
        .style('position', 'absolute')
        .style('background', 'white')
        .style('padding', '4px 8px')
        .style('border', '1px solid #ccc')
        .style('border-radius', '4px')
        .style('font-size', '12px')
        .style('pointer-events', 'none')
        .style('opacity', 0)

      node.on('mouseover', (event, d) => {
        tooltip.transition().duration(200).style('opacity', 0.9)
        tooltip.html(`<strong>${d.label}</strong>`)
          .style('left', (event.pageX + 10) + 'px')
          .style('top', (event.pageY - 20) + 'px')
      })
      node.on('mouseout', () => {
        tooltip.transition().duration(200).style('opacity', 0)
      })

      // Update simulation
      simulation.on('tick', () => {
        link
          .attr('x1', d => d.source.x)
          .attr('y1', d => d.source.y)
          .attr('x2', d => d.target.x)
          .attr('y2', d => d.target.y)

        node
          .attr('cx', d => d.x)
          .attr('cy', d => d.y)

        label
          .attr('x', d => d.x)
          .attr('y', d => d.y - (d.type === 'main' ? 20 : 14))
      })

      // Drag handlers
      function dragstarted(event, d) {
        if (!event.active) simulation.alphaTarget(0.3).restart()
        d.fx = d.x
        d.fy = d.y
      }
      function dragged(event, d) {
        d.fx = event.x
        d.fy = event.y
      }
      function dragended(event, d) {
        if (!event.active) simulation.alphaTarget(0)
        d.fx = null
        d.fy = null
      }
    }
  }
}
</script>
