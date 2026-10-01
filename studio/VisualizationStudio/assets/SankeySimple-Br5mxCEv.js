var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'sankey-simple',\r
  title: 'Sankey Simple',\r
  desc: 'Sankey Simple — a networks chart visualization',\r
  category: 'Networks',\r
  component: 'SankeySimple',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-shape"],\r
  tags: ["networks","sankey-simple"],\r
}\r
\r
export default function SankeySimple({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = {"nodes":[{"name":"Google"},{"name":"Facebook"},{"name":"Twitter"},{"name":"Blog"},{"name":"Email"},{"name":"Direct"},{"name":"Purchase"},{"name":"Signup"}],"links":[{"source":0,"target":6,"value":300},{"source":0,"target":7,"value":200},{"source":1,"target":6,"value":180},{"source":1,"target":7,"value":120},{"source":2,"target":6,"value":100},{"source":3,"target":7,"value":90},{"source":4,"target":6,"value":110},{"source":5,"target":7,"value":80}]}\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const config = (customData && customData.nodes) ? customData : DEFAULT_DATA\r
    const { nodes, links } = config\r
    const margin = { top: 25, right: 20, bottom: 25, left: 20 }\r
    const w = W - margin.left - margin.right\r
    const h = H - margin.top - margin.bottom\r
\r
    const colW = w / 3\r
    const nodeWidth = 12\r
\r
    // Compute node columns topologically: pure sources land in column 0,\r
    // every other node sits one column past its furthest source.\r
    const nodeX = {}\r
    const nodeH = {}\r
    const incoming = nodes.map(() => [])\r
    const outgoing = nodes.map(() => [])\r
    links.forEach((l, i) => {\r
      outgoing[l.source].push(l)\r
      incoming[l.target].push(l)\r
    })\r
    nodes.forEach((_, i) => {\r
      if (incoming[i].length === 0) nodeX[i] = 0\r
      nodeH[i] = Math.max(15, Math.min(60, (outgoing[i].reduce((s, l) => s + l.value, 0) + incoming[i].reduce((s, l) => s + l.value, 0)) / 2))\r
    })\r
    let guard = 0\r
    while (Object.keys(nodeX).length < nodes.length && guard < nodes.length * 2) {\r
      guard++\r
      nodes.forEach((_, i) => {\r
        if (nodeX[i] !== undefined) return\r
        const srcCols = incoming[i].map(l => nodeX[l.source])\r
        if (srcCols.every(c => c !== undefined)) nodeX[i] = Math.max(...srcCols) + 1\r
      })\r
    }\r
    // Any stragglers (cycles) get the last column.\r
    nodes.forEach((_, i) => {\r
      if (nodeX[i] === undefined) nodeX[i] = guard\r
    })\r
\r
    const col = {}\r
    nodes.forEach((_, i) => { col[i] = nodeX[i] })\r
    const colPositions = [...new Set(Object.values(col))].sort((a, b) => a - b)\r
\r
    const xMap = {}\r
    colPositions.forEach((c, i) => { xMap[c] = margin.left + (i / (colPositions.length - 1 || 1)) * w })\r
\r
    // Compute y positions per column\r
    const colNodes = {}\r
    nodes.forEach((_, i) => {\r
      const c = col[i]\r
      if (!colNodes[c]) colNodes[c] = []\r
      colNodes[c].push(i)\r
    })\r
    const yMap = {}\r
    Object.entries(colNodes).forEach(([c, indices]) => {\r
      const totalH = indices.reduce((s, i) => s + nodeH[i], 0)\r
      let y = (h - totalH) / 2\r
      indices.forEach(i => { yMap[i] = y + nodeH[i] / 2; y += nodeH[i] })\r
    })\r
\r
    const color = d3.scaleOrdinal(colors)\r
\r
    // Links — each ribbon draws itself in with a staggered sweep\r
    links.forEach((link, li) => {\r
      const sx = xMap[col[link.source]] + nodeWidth\r
      const tx = xMap[col[link.target]]\r
      const sy = yMap[link.source], ty = yMap[link.target]\r
      const lw = Math.max(2, link.value / d3.max(links.map(l => l.value)) * 18)\r
      const cp = (sx + tx) / 2\r
      const path = \`M \${sx},\${sy} C \${cp},\${sy} \${cp},\${ty} \${tx},\${ty}\`\r
      const el = svg.append('path').attr('d', path)\r
        .attr('fill', 'none').attr('stroke', color(links.indexOf(link) % colors.length))\r
        .attr('stroke-width', lw).attr('stroke-opacity', 0)\r
      if (el.node() && el.node().getTotalLength) {\r
        const len = el.node().getTotalLength()\r
        el.attr('stroke-dasharray', \`\${len} \${len}\`).attr('stroke-dashoffset', len)\r
          .transition().duration(800).delay(li * 80).ease(d3.easeCubicInOut)\r
          .attr('stroke-dashoffset', 0)\r
          .attr('stroke-opacity', 0.3)\r
      } else {\r
        el.attr('stroke-opacity', 0.3)\r
      }\r
    })\r
\r
    // Nodes — grow from their centerline, labels fade in after\r
    nodes.forEach((nd, i) => {\r
      const nx = xMap[col[i]]\r
      const ny = yMap[i]\r
      svg.append('rect')\r
        .attr('x', nx).attr('y', ny).attr('width', nodeWidth).attr('height', 0)\r
        .attr('fill', colors[i % colors.length]).attr('opacity', 0.8).attr('rx', 2)\r
        .transition().duration(600).delay(i * 60).ease(d3.easeCubicOut)\r
        .attr('y', ny - nodeH[i] / 2).attr('height', nodeH[i])\r
      svg.append('text')\r
        .attr('x', nx + (col[i] < 1 ? nodeWidth + 4 : -4))\r
        .attr('y', ny + 3)\r
        .attr('text-anchor', col[i] < 1 ? 'start' : 'end')\r
        .attr('fill', 'var(--text)').attr('font-size', '9px').attr('font-weight', 500)\r
        .attr('opacity', 0)\r
        .transition().duration(400).delay(350 + i * 60)\r
        .attr('opacity', 1)\r
        .text(nd.name)\r
    })\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};