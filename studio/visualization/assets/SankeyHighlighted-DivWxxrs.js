var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'sankey-highlighted',\r
  title: 'Sankey Highlighted',\r
  desc: 'Sankey Highlighted — a networks chart visualization',\r
  category: 'Networks',\r
  component: 'SankeyHighlighted',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-shape"],\r
  tags: ["networks","sankey-highlighted"],\r
}\r
\r
export default function SankeyHighlighted({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = {"nodes":[{"name":"Google"},{"name":"Facebook"},{"name":"Twitter"},{"name":"Blog"},{"name":"Email"},{"name":"Direct"},{"name":"Purchase"},{"name":"Signup"},{"name":"Browse"}],"links":[{"source":0,"target":6,"value":350},{"source":0,"target":7,"value":200},{"source":0,"target":8,"value":150},{"source":1,"target":6,"value":180},{"source":1,"target":7,"value":120},{"source":2,"target":8,"value":200},{"source":2,"target":6,"value":80},{"source":3,"target":6,"value":100},{"source":4,"target":7,"value":90},{"source":5,"target":8,"value":110}]}\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const config = (customData && customData.nodes) ? customData : DEFAULT_DATA\r
    const { nodes, links } = config\r
    const n = nodes.length\r
\r
    const margin = { top: 25, right: 20, bottom: 25, left: 20 }\r
    const w = W - margin.left - margin.right\r
    const h = H - margin.top - margin.bottom\r
\r
    // Simple Sankey layout\r
    const nodeWidth = 14\r
    const nodePadding = 20\r
    const colW = w / (n - 1)\r
\r
    // Assign columns topologically: pure sources → col 0, propagate downstream\r
    const nodeX = {}\r
    const incoming = nodes.map(() => [])\r
    const outgoing = nodes.map(() => [])\r
    links.forEach(l => {\r
      outgoing[l.source].push(l)\r
      incoming[l.target].push(l)\r
    })\r
    nodes.forEach((nd, i) => { if (incoming[i].length === 0) nodeX[i] = 0 })\r
    let guard = 0\r
    while (Object.keys(nodeX).length < n && guard < n * 2) {\r
      guard++\r
      nodes.forEach((nd, i) => {\r
        if (nodeX[i] !== undefined) return\r
        const srcCols = incoming[i].map(l => nodeX[l.source])\r
        if (srcCols.every(c => c !== undefined)) nodeX[i] = Math.max(...srcCols) + 1\r
      })\r
    }\r
    nodes.forEach((nd, i) => { if (nodeX[i] === undefined) nodeX[i] = guard })\r
    const colMax = Math.max(...Object.values(nodeX))\r
\r
    const nodePos = nodes.map((nd, i) => {\r
      const srcLinks = links.filter(l => l.source === i)\r
      const tgtLinks = links.filter(l => l.target === i)\r
      const col = nodeX[i]\r
      const totalIn = tgtLinks.reduce((s, l) => s + l.value, 0)\r
      const totalOut = srcLinks.reduce((s, l) => s + l.value, 0)\r
      const total = Math.max(totalIn, totalOut, 1)\r
      const nodeH = Math.max(10, Math.min(h * 0.3, total / d3.max(links.map(l => l.value)) * h * 0.4))\r
      const yStart = Math.max(10, (h - nodeH * 3) / 2 + (i % 3) * nodeH * 1.1)\r
      return { ...nd, x: colMax > 0 ? (col / colMax) * w : 0, y: yStart, h: nodeH, col }\r
    })\r
\r
    const color = d3.scaleOrdinal(colors)\r
\r
    // Draw links\r
    links.forEach((link, i) => {\r
      const src = nodePos[link.source]\r
      const tgt = nodePos[link.target]\r
      if (!src || !tgt) return\r
\r
      const srcY = src.y + src.h / 2\r
      const tgtY = tgt.y + tgt.h / 2\r
      const lw = Math.max(2, link.value / d3.max(links.map(l => l.value)) * 20)\r
\r
      const sx = src.x + nodeWidth\r
      const tx = tgt.x\r
      const cp = (sx + tx) / 2\r
\r
      const path = \`M \${sx},\${srcY} C \${cp},\${srcY} \${cp},\${tgtY} \${tx},\${tgtY}\`\r
\r
      svg.append('path')\r
        .datum({ link, src, tgt, path, lw })\r
        .attr('d', path)\r
        .attr('fill', 'none')\r
        .attr('stroke', color(i % colors.length))\r
        .attr('stroke-width', lw)\r
        .attr('stroke-opacity', 0.35)\r
        .attr('class', 'sankey-link')\r
        .on('mouseover', function () {\r
          d3.selectAll('.sankey-link').attr('stroke-opacity', 0.1)\r
          d3.select(this).attr('stroke-opacity', 0.8)\r
          d3.selectAll('.sankey-node').attr('opacity', 0.3)\r
          d3.selectAll(\`.sankey-node[data-src="\${link.source}"], .sankey-node[data-tgt="\${link.target}"]\`).attr('opacity', 1)\r
        })\r
        .on('mouseout', function () {\r
          d3.selectAll('.sankey-link').attr('stroke-opacity', 0.35)\r
          d3.selectAll('.sankey-node').attr('opacity', 1)\r
        })\r
    })\r
\r
    // Draw nodes\r
    nodePos.forEach((nd, i) => {\r
      svg.append('rect')\r
        .attr('class', 'sankey-node')\r
        .attr('data-src', i).attr('data-tgt', i)\r
        .attr('x', nd.x).attr('y', nd.y)\r
        .attr('width', nodeWidth).attr('height', nd.h)\r
        .attr('fill', color(i % colors.length)).attr('opacity', 0.8)\r
        .attr('rx', 2)\r
\r
      svg.append('text')\r
        .attr('x', nd.x + (nd.x < W / 2 ? nodeWidth + 4 : -4))\r
        .attr('y', nd.y + nd.h / 2 + 3)\r
        .attr('text-anchor', nd.x < W / 2 ? 'start' : 'end')\r
        .attr('fill', 'var(--text)').attr('font-size', '9px').attr('font-weight', 500)\r
        .text(nd.name)\r
    })\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};