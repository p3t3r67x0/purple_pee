<template>
  <div id="xhr" class="container mx-auto">
    <div class="bg-white rounded shadow-md leading-normal mx-3 md:mx-0 mb-6 px-3 pt-2 pb-3">
      <svg ref="svg" width="100%" height="800"></svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'

interface GraphNode {
  id: string | number
  label?: string
  type?: string
  [key: string]: any
}

interface GraphEdge {
  from: string | number
  to: string | number
  [key: string]: any
}

const props = defineProps<{ results: { nodes?: GraphNode[]; edges?: GraphEdge[] } }>()

const svg = ref<SVGSVGElement | null>(null)

const renderGraph = async () => {
  if (!process.client || !svg.value) {
    return
  }

  const { nodes: rawNodes, edges: rawEdges } = props.results ?? {}

  if (!rawNodes || !rawEdges) {
    return
  }

  const d3 = await import('d3')

  const svgSelection = d3.select(svg.value)
  svgSelection.selectAll('*').remove()

  const width = svg.value.clientWidth
  const height = 800

  const nodes = rawNodes.map((node, index) => ({
    id: node.id ?? index,
    label: node.label ?? `Node ${index}`,
    type: typeof node.id === 'string' && node.id.startsWith('main') ? 'main' : 'sub',
    ...node
  }))

  const links = rawEdges.map((edge) => ({
    source: edge.from,
    target: edge.to,
    ...edge
  }))

  svgSelection
    .append('defs')
    .append('marker')
    .attr('id', 'arrow')
    .attr('viewBox', '0 -5 10 10')
    .attr('refX', 20)
    .attr('refY', 0)
    .attr('markerWidth', 6)
    .attr('markerHeight', 6)
    .attr('orient', 'auto')
    .append('path')
    .attr('d', 'M0,-5L10,0L0,5')
    .attr('fill', '#999')

  const simulation = d3
    .forceSimulation(nodes)
    .force('link', d3.forceLink(links).id((d: any) => d.id).distance(140))
    .force('charge', d3.forceManyBody().strength(-300))
    .force('center', d3.forceCenter(width / 2, height / 2))

  const link = svgSelection
    .append('g')
    .attr('stroke', '#999')
    .attr('stroke-opacity', 0.6)
    .selectAll('line')
    .data(links)
    .enter()
    .append('line')
    .attr('stroke-width', 1.5)
    .attr('marker-end', 'url(#arrow)')

  const node = svgSelection
    .append('g')
    .selectAll('circle')
    .data(nodes)
    .enter()
    .append('circle')
    .attr('r', (d: any) => (d.type === 'main' ? 16 : 10))
    .attr('fill', (d: any) => (d.type === 'main' ? '#2b6cb0' : '#63b3ed'))
    .attr('stroke', '#fff')
    .attr('stroke-width', 2)
    .call(
      d3
        .drag()
        .on('start', (event: any, d: any) => {
          if (!event.active) simulation.alphaTarget(0.3).restart()
          d.fx = d.x
          d.fy = d.y
        })
        .on('drag', (event: any, d: any) => {
          d.fx = event.x
          d.fy = event.y
        })
        .on('end', (event: any, d: any) => {
          if (!event.active) simulation.alphaTarget(0)
          d.fx = null
          d.fy = null
        })
    )

  const label = svgSelection
    .append('g')
    .selectAll('text')
    .data(nodes)
    .enter()
    .append('text')
    .text((d: any) => d.label)
    .attr('font-size', 12)
    .attr('dy', -20)
    .attr('text-anchor', 'middle')
    .attr('fill', '#333')

  d3.selectAll('.graph-tooltip').remove()

  const tooltip = d3
    .select('body')
    .append('div')
    .attr('class', 'graph-tooltip')
    .style('position', 'absolute')
    .style('background', 'white')
    .style('padding', '4px 8px')
    .style('border', '1px solid #ccc')
    .style('border-radius', '4px')
    .style('font-size', '12px')
    .style('pointer-events', 'none')
    .style('opacity', 0)

  node
    .on('mouseover', (event: any, d: any) => {
      tooltip.transition().duration(200).style('opacity', 0.9)
      tooltip
        .html(`<strong>${d.label}</strong>`)
        .style('left', `${event.pageX + 10}px`)
        .style('top', `${event.pageY - 20}px`)
    })
    .on('mouseout', () => {
      tooltip.transition().duration(200).style('opacity', 0)
    })

  simulation.on('tick', () => {
    link
      .attr('x1', (d: any) => d.source.x)
      .attr('y1', (d: any) => d.source.y)
      .attr('x2', (d: any) => d.target.x)
      .attr('y2', (d: any) => d.target.y)

    node
      .attr('cx', (d: any) => d.x)
      .attr('cy', (d: any) => d.y)

    label
      .attr('x', (d: any) => d.x)
      .attr('y', (d: any) => d.y - (d.type === 'main' ? 20 : 14))
  })
}

onMounted(() => {
  renderGraph()
})

watch(
  () => props.results,
  () => {
    renderGraph()
  },
  { deep: true }
)
</script>
