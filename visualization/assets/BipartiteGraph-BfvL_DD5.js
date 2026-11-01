var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'bipartite-graph',\r
  title: 'Bipartite Graph',\r
  desc: 'Bipartite Graph — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'BipartiteGraph',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","bipartite-graph"],\r
}\r
\r
export default function BipartiteGraph({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = {"leftNodes":["Frontend Dev","Backend Dev","Data Science","Product Design"],"rightNodes":["JavaScript","Python","SQL","Figma","Docker","GraphQL"],"links":[{"source":0,"target":0,"value":9},{"source":0,"target":3,"value":6},{"source":0,"target":5,"value":5},{"source":1,"target":1,"value":8},{"source":1,"target":2,"value":7},{"source":1,"target":4,"value":6},{"source":1,"target":5,"value":6},{"source":2,"target":1,"value":9},{"source":2,"target":2,"value":8},{"source":2,"target":4,"value":5},{"source":3,"target":3,"value":10},{"source":3,"target":0,"value":4}]}\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (customData && customData.leftNodes && customData.rightNodes)\r
      ? customData\r
      : DEFAULT_DATA\r
\r
    const width = W\r
    const height = H\r
\r
    const margin = { top: 40, right: 75, bottom: 25, left: 75 }\r
    const plotW = width - margin.left - margin.right\r
    const plotH = height - margin.top - margin.bottom\r
\r
    const g = svg.append('g').attr('transform', \`translate(\${margin.left},\${margin.top})\`)\r
\r
    const left = data.leftNodes || []\r
    const right = data.rightNodes || []\r
\r
    const yLeft = d3.scalePoint()\r
      .domain(left.map((_, i) => i))\r
      .range([10, plotH - 10])\r
      .padding(0.1)\r
\r
    const yRight = d3.scalePoint()\r
      .domain(right.map((_, i) => i))\r
      .range([10, plotH - 10])\r
      .padding(0.1)\r
\r
    const leftColors = ['#6366f1', '#10b981', '#f59e0b', '#ec4899']\r
\r
    // Draw connecting ribbons/curves\r
    data.links.forEach(l => {\r
      const y0 = yLeft(l.source)\r
      const y1 = yRight(l.target)\r
      if (y0 == null || y1 == null) return\r
\r
      const pathData = d3.linkHorizontal()({\r
        source: [0, y0],\r
        target: [plotW, y1],\r
      })\r
\r
      g.append('path')\r
        .attr('d', pathData)\r
        .attr('fill', 'none')\r
        .attr('stroke', leftColors[l.source % leftColors.length])\r
        .attr('stroke-width', Math.max(1, (l.value || 5) * 0.45))\r
        .attr('stroke-opacity', 0.4)\r
    })\r
\r
    // Draw Left Nodes & Labels\r
    left.forEach((name, i) => {\r
      const yPos = yLeft(i)\r
      g.append('circle')\r
        .attr('cx', 0)\r
        .attr('cy', yPos)\r
        .attr('r', 5)\r
        .attr('fill', leftColors[i % leftColors.length])\r
        .attr('stroke', '#ffffff')\r
        .attr('stroke-width', 1.2)\r
\r
      g.append('text')\r
        .attr('x', -10)\r
        .attr('y', yPos + 3)\r
        .attr('text-anchor', 'end')\r
        .attr('fill', 'var(--text-primary)')\r
        .attr('font-size', '7.5px')\r
        .attr('font-weight', '600')\r
        .text(name)\r
    })\r
\r
    // Draw Right Nodes & Labels\r
    right.forEach((name, i) => {\r
      const yPos = yRight(i)\r
      g.append('circle')\r
        .attr('cx', plotW)\r
        .attr('cy', yPos)\r
        .attr('r', 5)\r
        .attr('fill', '#38bdf8')\r
        .attr('stroke', '#ffffff')\r
        .attr('stroke-width', 1.2)\r
\r
      g.append('text')\r
        .attr('x', plotW + 10)\r
        .attr('y', yPos + 3)\r
        .attr('text-anchor', 'start')\r
        .attr('fill', 'var(--text-primary)')\r
        .attr('font-size', '7.5px')\r
        .attr('font-weight', '600')\r
        .text(name)\r
    })\r
\r
    // Column titles\r
    g.append('text').attr('x', 0).attr('y', -8).attr('text-anchor', 'end').attr('fill', 'var(--text-secondary)').attr('font-size', '7px').text('Role')\r
    g.append('text').attr('x', plotW).attr('y', -8).attr('text-anchor', 'start').attr('fill', 'var(--text-secondary)').attr('font-size', '7px').text('Skills')\r
\r
    // Header\r
    svg.append('text')\r
      .attr('x', 14)\r
      .attr('y', 18)\r
      .attr('fill', 'var(--text-primary)')\r
      .attr('font-size', '8.5px')\r
      .attr('font-weight', '600')\r
      .text('Bipartite Graph (Two-Mode Network Flow)')\r
  }, [customData])\r
\r
  return (\r
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\r
      <svg ref={ref} viewBox={\`0 0 \${W} \${H}\`} style={{ width: '100%', height: '100%', maxWidth: '500px' }} />\r
    </div>\r
  )\r
}\r
`;export{e as default};