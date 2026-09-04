var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'adjacency-matrix',\r
  title: 'Adjacency Matrix',\r
  desc: 'Adjacency Matrix — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'AdjacencyMatrix',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","adjacency-matrix"],\r
}\r
\r
export default function AdjacencyMatrix({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = {"nodes":["Alice","Bob","Carol","David","Eva","Frank","Grace","Heidi"],"links":[{"source":0,"target":1,"value":8},{"source":0,"target":2,"value":5},{"source":0,"target":4,"value":3},{"source":1,"target":2,"value":6},{"source":1,"target":3,"value":4},{"source":2,"target":4,"value":9},{"source":3,"target":5,"value":7},{"source":4,"target":5,"value":5},{"source":5,"target":6,"value":4},{"source":6,"target":7,"value":8},{"source":0,"target":7,"value":2},{"source":2,"target":6,"value":5}]}\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (customData && customData.nodes && customData.links)\r
      ? customData\r
      : DEFAULT_DATA\r
\r
    const nodes = data.nodes || []\r
    const n = nodes.length\r
\r
    const margin = { top: 55, right: 35, bottom: 20, left: 55 }\r
    const size = Math.min(W - margin.left - margin.right, H - margin.top - margin.bottom)\r
    const cellSize = size / n\r
\r
    const g = svg.append('g').attr('transform', \`translate(\${margin.left},\${margin.top})\`)\r
\r
    // Build symmetric matrix\r
    const matrix = Array.from({ length: n }, () => Array(n).fill(0))\r
    data.links.forEach(l => {\r
      const s = typeof l.source === 'number' ? l.source : nodes.indexOf(l.source)\r
      const t = typeof l.target === 'number' ? l.target : nodes.indexOf(l.target)\r
      if (s >= 0 && s < n && t >= 0 && t < n) {\r
        matrix[s][t] = l.value || 1\r
        matrix[t][s] = l.value || 1\r
      }\r
    })\r
\r
    const maxVal = d3.max(data.links, d => d.value) || 10\r
    const colorScale = d3.scaleSequential(d3.interpolateBlues)\r
      .domain([0, maxVal])\r
\r
    // Draw cells\r
    for (let i = 0; i < n; i++) {\r
      for (let j = 0; j < n; j++) {\r
        const val = matrix[i][j]\r
        const isDiag = i === j\r
\r
        g.append('rect')\r
          .attr('x', j * cellSize)\r
          .attr('y', i * cellSize)\r
          .attr('width', cellSize - 1)\r
          .attr('height', cellSize - 1)\r
          .attr('rx', 2)\r
          .attr('fill', isDiag ? 'var(--border)' : val > 0 ? colorScale(val) : 'var(--background)')\r
          .attr('fill-opacity', isDiag ? 0.3 : 0.9)\r
          .attr('stroke', 'var(--border)')\r
          .attr('stroke-width', 0.5)\r
          .attr('stroke-opacity', 0.3)\r
\r
        if (val > 0 && !isDiag) {\r
          g.append('text')\r
            .attr('x', j * cellSize + cellSize / 2)\r
            .attr('y', i * cellSize + cellSize / 2 + 2.5)\r
            .attr('text-anchor', 'middle')\r
            .attr('fill', val > maxVal * 0.6 ? '#ffffff' : 'var(--text-primary)')\r
            .attr('font-size', '6.5px')\r
            .attr('font-family', 'var(--font-mono)')\r
            .text(val)\r
        }\r
      }\r
    }\r
\r
    // Row / Column Labels\r
    nodes.forEach((name, idx) => {\r
      // Top column label rotated -45 deg\r
      g.append('text')\r
        .attr('transform', \`translate(\${idx * cellSize + cellSize / 2}, -6) rotate(-45)\`)\r
        .attr('text-anchor', 'start')\r
        .attr('fill', 'var(--text-secondary)')\r
        .attr('font-size', '7px')\r
        .attr('font-weight', '500')\r
        .text(name)\r
\r
      // Left row label\r
      g.append('text')\r
        .attr('x', -6)\r
        .attr('y', idx * cellSize + cellSize / 2 + 2.5)\r
        .attr('text-anchor', 'end')\r
        .attr('fill', 'var(--text-secondary)')\r
        .attr('font-size', '7px')\r
        .attr('font-weight', '500')\r
        .text(name)\r
    })\r
\r
    // Header\r
    svg.append('text')\r
      .attr('x', 14)\r
      .attr('y', 18)\r
      .attr('fill', 'var(--text-primary)')\r
      .attr('font-size', '8.5px')\r
      .attr('font-weight', '600')\r
      .text('Network Adjacency Co-occurrence Matrix')\r
  }, [customData])\r
\r
  return (\r
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\r
      <svg ref={ref} viewBox={\`0 0 \${W} \${H}\`} style={{ width: '100%', height: '100%', maxWidth: '500px' }} />\r
    </div>\r
  )\r
}\r
`;export{e as default};