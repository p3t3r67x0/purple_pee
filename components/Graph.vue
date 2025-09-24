<template>
  <div id="xhr" class="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
    <div class="glass-panel rounded-3xl border border-white/10 px-5 pb-6 pt-5 shadow-glass sm:px-8">
      <h2 class="text-lg font-semibold uppercase tracking-[0.35em] text-white/60">
        Relationship graph
      </h2>
      <div class="mt-6 overflow-hidden rounded-2xl border border-white/5 bg-white/5 relative">
        <!-- Legend -->
        <div class="absolute top-4 left-4 z-10 bg-black/60 backdrop-blur-sm rounded-lg p-3 text-xs text-white">
          <div class="font-semibold mb-2 text-white/90">Node Types</div>
          <div class="flex items-center gap-2 mb-1">
            <div class="w-3 h-3 rounded-full bg-[#2cb1bc]"></div>
            <span class="text-white/80">Main Node</span>
          </div>
          <div class="flex items-center gap-2 mb-1">
            <div class="w-3 h-3 rounded-full bg-[#5c1bb3]"></div>
            <span class="text-white/80">Domain</span>
          </div>
          <div class="flex items-center gap-2 mb-1">
            <div class="w-3 h-3 rounded-full bg-[#e11d48]"></div>
            <span class="text-white/80">IPv4</span>
          </div>
          <div class="flex items-center gap-2">
            <div class="w-3 h-3 rounded-full bg-[#7c3aed]"></div>
            <span class="text-white/80">IPv6</span>
          </div>
        </div>

        <!-- Zoom Instructions -->
        <div class="absolute bottom-4 left-4 z-10 bg-black/60 backdrop-blur-sm rounded-lg p-3 text-xs text-white/70">
          <div class="font-semibold mb-1 text-white/90">Navigation</div>
          <div>• Mouse wheel: Zoom in/out</div>
          <div>• Click + drag: Pan around</div>
          <div>• Use controls (top-right)</div>
        </div>

        <svg ref="svg" class="h-[32rem] w-full sm:h-[36rem] lg:h-[40rem]" width="100%" height="640"></svg>
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
  source: string | number
  target: string | number
  type?: string
  [key: string]: any
}

const props = defineProps<{ results: { nodes?: GraphNode[]; edges?: GraphEdge[] } }>()

const svg = ref<SVGSVGElement | null>(null)

const palette = {
  mainNode: '#2cb1bc',
  domainNode: '#5c1bb3',
  ipv4Node: '#e11d48',
  ipv6Node: '#f97316',
  defaultNode: '#6b7280',
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

  // Create a group for all graph elements that will be zoomed/panned
  const container = svgSelection.append('g').attr('class', 'graph-container')

  const nodes = rawNodes.map((node, index) => ({
    ...node,
    id: node.id ?? index,
    label: node.label ?? `Node ${index}`,
    nodeType: node.type || 'unknown', // Rename to avoid conflict with D3's internal type
    isMainNode: false // Will be determined based on centrality
  }))

  const links = rawEdges
    .filter(edge => edge.source !== edge.target) // Remove self-loops
    .map((edge) => ({
      ...edge,
      source: edge.source,
      target: edge.target,
      edgeType: edge.type || 'unknown'
    }))

  // Determine main node based on degree centrality (most connections)
  const nodeDegree = new Map<string | number, number>()
  links.forEach(link => {
    nodeDegree.set(link.source, (nodeDegree.get(link.source) || 0) + 1)
    nodeDegree.set(link.target, (nodeDegree.get(link.target) || 0) + 1)
  })

  let maxDegree = 0
  let mainNodeId: string | number | null = null
  nodeDegree.forEach((degree, nodeId) => {
    if (degree > maxDegree) {
      maxDegree = degree
      mainNodeId = nodeId
    }
  })

  // Mark the main node
  nodes.forEach(node => {
    node.isMainNode = node.id === mainNodeId
  })

  // Add zoom behavior
  const zoom = d3.zoom()
    .scaleExtent([0.1, 4])
    .on('zoom', (event) => {
      container.attr('transform', event.transform)
    })

  svgSelection.call(zoom)

  // Add zoom controls
  const controls = svgSelection.append('g')
    .attr('class', 'zoom-controls')
    .attr('transform', `translate(${width - 120}, 20)`)

  // Zoom in button
  const zoomInButton = controls.append('g')
    .attr('class', 'zoom-button')
    .style('cursor', 'pointer')

  zoomInButton.append('rect')
    .attr('width', 30)
    .attr('height', 30)
    .attr('rx', 6)
    .attr('fill', 'rgba(0,0,0,0.7)')
    .attr('stroke', 'rgba(255,255,255,0.3)')
    .attr('stroke-width', 1)

  zoomInButton.append('text')
    .attr('x', 15)
    .attr('y', 20)
    .attr('text-anchor', 'middle')
    .attr('fill', 'white')
    .attr('font-size', '16')
    .attr('font-weight', 'bold')
    .text('+')

  zoomInButton.on('click', () => {
    svgSelection.transition().duration(300).call(
      zoom.scaleBy, 1.5
    )
  })

  // Zoom out button
  const zoomOutButton = controls.append('g')
    .attr('class', 'zoom-button')
    .attr('transform', 'translate(35, 0)')
    .style('cursor', 'pointer')

  zoomOutButton.append('rect')
    .attr('width', 30)
    .attr('height', 30)
    .attr('rx', 6)
    .attr('fill', 'rgba(0,0,0,0.7)')
    .attr('stroke', 'rgba(255,255,255,0.3)')
    .attr('stroke-width', 1)

  zoomOutButton.append('text')
    .attr('x', 15)
    .attr('y', 20)
    .attr('text-anchor', 'middle')
    .attr('fill', 'white')
    .attr('font-size', '16')
    .attr('font-weight', 'bold')
    .text('−')

  zoomOutButton.on('click', () => {
    svgSelection.transition().duration(300).call(
      zoom.scaleBy, 0.67
    )
  })

  // Reset zoom button
  const resetButton = controls.append('g')
    .attr('class', 'zoom-button')
    .attr('transform', 'translate(70, 0)')
    .style('cursor', 'pointer')

  resetButton.append('rect')
    .attr('width', 30)
    .attr('height', 30)
    .attr('rx', 6)
    .attr('fill', 'rgba(0,0,0,0.7)')
    .attr('stroke', 'rgba(255,255,255,0.3)')
    .attr('stroke-width', 1)

  resetButton.append('text')
    .attr('x', 15)
    .attr('y', 20)
    .attr('text-anchor', 'middle')
    .attr('fill', 'white')
    .attr('font-size', '12')
    .text('⌂')

  resetButton.on('click', () => {
    svgSelection.transition().duration(500).call(
      zoom.transform,
      d3.zoomIdentity
    )
  })

  container
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

  // Dynamic parameters based on number of nodes
  const nodeCount = nodes.length
  const linkDistance = Math.max(100, Math.min(200, 50 + nodeCount * 2))
  const chargeStrength = Math.max(-800, -200 - nodeCount * 8)
  const collisionRadius = Math.max(40, 25 + Math.sqrt(nodeCount) * 2)

  const simulation = d3
    .forceSimulation(nodes)
    .force('link', d3.forceLink(links).id((d: any) => d.id).distance(linkDistance))
    .force('charge', d3.forceManyBody().strength(chargeStrength))
    .force('center', d3.forceCenter(width / 2, height / 2))
    .force('collision', d3.forceCollide().radius(collisionRadius))
    .force('x', d3.forceX().strength(0.1))
    .force('y', d3.forceY().strength(0.1))

  const getEdgeColor = (d: any) => {
    switch (d.edgeType) {
      case 'a_record': return '#10b981'
      case 'mx_record': return '#f59e0b'
      case 'ns_record': return '#3b82f6'
      case 'ssl_alt_name': return '#8b5cf6'
      default: return palette.linkStroke
    }
  }

  const getEdgeWidth = (d: any) => {
    switch (d.edgeType) {
      case 'a_record': return 2
      case 'mx_record': return 1.5
      case 'ns_record': return 1.5
      case 'ssl_alt_name': return 1
      default: return 1
    }
  }

  const link = container
    .append('g')
    .selectAll('line')
    .data(links)
    .enter()
    .append('line')
    .attr('stroke', getEdgeColor)
    .attr('stroke-opacity', 0.8)
    .attr('stroke-width', getEdgeWidth)
    .attr('marker-end', 'url(#arrow)')
    .style('cursor', 'pointer')

  // Add edge tooltips
  link
    .on('mouseover', (event: any, d: any) => {
      tooltip.transition().duration(200).style('opacity', 0.9)
      const edgeTypeDisplay = d.edgeType ? d.edgeType.replace('_', ' ').toUpperCase() : 'UNKNOWN'
      const sourceLabel = d.source.label || d.source.id || d.source
      const targetLabel = d.target.label || d.target.id || d.target
      const content = `<strong>${edgeTypeDisplay}</strong><br/><span style="font-size: 10px; opacity: 0.8;">${sourceLabel} → ${targetLabel}</span>`
      tooltip
        .html(content)
        .style('left', `${event.pageX + 10}px`)
        .style('top', `${event.pageY - 20}px`)
    })
    .on('mouseout', () => {
      tooltip.transition().duration(200).style('opacity', 0)
    })

  const getNodeColor = (d: any) => {
    if (d.isMainNode) return palette.mainNode
    switch (d.nodeType) {
      case 'domain': return palette.domainNode
      case 'ipv4': return palette.ipv4Node
      case 'ipv6': return palette.ipv6Node
      default: return palette.defaultNode
    }
  }

  const getNodeRadius = (d: any) => {
    if (d.isMainNode) return 16
    return 10
  }

  const node = container
    .append('g')
    .selectAll('circle')
    .data(nodes)
    .enter()
    .append('circle')
    .attr('r', getNodeRadius)
    .attr('fill', getNodeColor)
    .attr('stroke', palette.nodeStroke)
    .attr('stroke-width', 2)
    .style('filter', (d: any) =>
      d.isMainNode
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

  const getNavigationUrl = (d: any) => {
    const label = d.label || ''
    switch (d.nodeType) {
      case 'domain':
        return `/site/${label}`
      case 'ipv4':
        return `/ipv4/${label}`
      case 'ipv6':
        return `/ipv6/${label}`
      case 'ssl':
        // Replace *. with '' for SSL domains
        const cleanDomain = label.replace(/^\*\./, '')
        return `/site/${cleanDomain}`
      case 'ns':
        return `/site/${label}`
      default:
        return null
    }
  }

  // Dynamic label parameters based on node count
  const getLabelFontSize = () => {
    if (nodeCount > 50) return 10
    if (nodeCount > 20) return 11
    return 12
  }

  const getLabelOffset = (d: any) => {
    const baseOffset = d.isMainNode ? -22 : -18
    const extraOffset = nodeCount > 30 ? -4 : 0
    return baseOffset + extraOffset
  }

  const label = container
    .append('g')
    .selectAll('text')
    .data(nodes)
    .enter()
    .append('text')
    .text((d: any) => d.label)
    .attr('font-size', getLabelFontSize())
    .attr('dy', (d: any) => getLabelOffset(d))
    .attr('text-anchor', 'middle')
    .attr('fill', palette.label)
    .style('cursor', (d: any) => getNavigationUrl(d) ? 'pointer' : 'default')
    .style('text-decoration', (d: any) => getNavigationUrl(d) ? 'underline' : 'none')
    .style('text-decoration-color', (d: any) => getNavigationUrl(d) ? 'rgba(255,255,255,0.5)' : 'none')
    .on('click', (event: any, d: any) => {
      const url = getNavigationUrl(d)
      if (url) {
        window.location.href = url
      }
    })
    .on('mouseover', (event: any, d: any) => {
      if (getNavigationUrl(d)) {
        d3.select(event.target)
          .style('fill', '#60a5fa')
          .style('text-decoration-color', 'rgba(96,165,250,0.8)')
      }
    })
    .on('mouseout', (event: any, d: any) => {
      if (getNavigationUrl(d)) {
        d3.select(event.target)
          .style('fill', palette.label)
          .style('text-decoration-color', 'rgba(255,255,255,0.5)')
      }
    })

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
      const nodeTypeDisplay = d.nodeType ? d.nodeType.toUpperCase() : 'UNKNOWN'
      const content = `<strong>${d.label}</strong><br/><span style="font-size: 10px; opacity: 0.8;">${nodeTypeDisplay}</span>`
      tooltip
        .html(content)
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
      .attr('y', (d: any) => d.y + getLabelOffset(d))
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
