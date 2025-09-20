<template>
  <div
    id="xhr"
    class="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8"
  >
    <div
      class="glass-panel rounded-3xl border border-white/10 px-5 pb-6 pt-5 shadow-glass sm:px-8"
    >
      <h2 class="text-lg font-semibold uppercase tracking-[0.35em] text-white/60">
        Relationship graph
      </h2>
      <div class="mt-6 overflow-hidden rounded-2xl border border-white/5 bg-white/5">
        <svg
          ref="svg"
          class="h-[32rem] w-full sm:h-[36rem] lg:h-[40rem]"
          width="100%"
          height="640"
        ></svg>
      </div>
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

const palette = {
  mainNode: '#2cb1bc',
  subNode: '#5c1bb3',
  nodeStroke: 'rgba(255,255,255,0.85)',
  linkStroke: 'rgba(255,255,255,0.28)',
  label: 'rgba(255,255,255,0.85)',
  tooltipBackground: 'rgba(15,13,35,0.92)',
  tooltipBorder: 'rgba(92,27,179,0.6)',
  tooltipShadow: '0 18px 40px rgba(6,4,26,0.65)'
}

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
  const height = Math.max(svg.value.clientHeight || 0, 400)

  svg.value.setAttribute('height', `${height}`)
  svgSelection.attr('viewBox', `0 0 ${width} ${height}`).attr('preserveAspectRatio', 'xMidYMid meet')

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
    .attr('fill', palette.linkStroke)

  const simulation = d3
    .forceSimulation(nodes)
    .force('link', d3.forceLink(links).id((d: any) => d.id).distance(140))
    .force('charge', d3.forceManyBody().strength(-300))
    .force('center', d3.forceCenter(width / 2, height / 2))

  const link = svgSelection
    .append('g')
    .attr('stroke', palette.linkStroke)
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
    .attr('fill', (d: any) => (d.type === 'main' ? palette.mainNode : palette.subNode))
    .attr('stroke', palette.nodeStroke)
    .attr('stroke-width', 2)
    .style('filter', (d: any) =>
      d.type === 'main'
        ? 'drop-shadow(0 0 18px rgba(44,177,188,0.35))'
        : 'drop-shadow(0 0 12px rgba(92,27,179,0.32))'
    )
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
    .attr('fill', palette.label)

  d3.selectAll('.graph-tooltip').remove()

  const tooltip = d3
    .select('body')
    .append('div')
    .attr('class', 'graph-tooltip')
    .style('position', 'absolute')
    .style('background', palette.tooltipBackground)
    .style('padding', '8px 12px')
    .style('border', `1px solid ${palette.tooltipBorder}`)
    .style('border-radius', '12px')
    .style('font-size', '12px')
    .style('pointer-events', 'none')
    .style('opacity', 0)
    .style('color', palette.label)
    .style('box-shadow', palette.tooltipShadow)
    .style('backdrop-filter', 'blur(12px)')

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
