var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH } from './utils'\r
\r
export const meta = {\r
  id: 'ecdf-plot',\r
  title: 'Ecdf Plot',\r
  desc: 'Ecdf Plot — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'EcdfPlot',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","ecdf-plot"],\r
}\r
\r
export default function EcdfPlot({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"group":"Control","values":[14,18,22,25,29,31,35,38,42,45,52,58,64,70]},{"group":"Treatment","values":[25,32,38,44,49,53,58,62,69,74,80,85,92,98]}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0)\r
      ? customData\r
      : DEFAULT_DATA\r
\r
    const allValues = data.flatMap(d => d.values || [])\r
    const xMin = (d3.min(allValues) || 0) - 5\r
    const xMax = (d3.max(allValues) || 100) + 5\r
\r
    const x = d3.scaleLinear()\r
      .domain([xMin, xMax])\r
      .range([0, IW])\r
\r
    const y = d3.scaleLinear()\r
      .domain([0, 1])\r
      .range([IH, 0])\r
\r
    const g = svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
\r
    // Grid\r
    g.append('g')\r
      .call(d3.axisLeft(y).ticks(5).tickFormat(d3.format('.0%')).tickSize(-IW).tickPadding(6))\r
      .call(gr => gr.select('.domain').remove())\r
      .call(gr => gr.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-dasharray', '2,2').attr('stroke-opacity', 0.4))\r
      .call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '7px'))\r
\r
    g.append('g')\r
      .attr('transform', \`translate(0,\${IH})\`)\r
      .call(d3.axisBottom(x).ticks(8).tickSize(-IH).tickPadding(6))\r
      .call(gr => gr.select('.domain').remove())\r
      .call(gr => gr.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-dasharray', '2,2').attr('stroke-opacity', 0.4))\r
      .call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '7px'))\r
\r
    const colors = ['#6366f1', '#10b981', '#f59e0b', '#ef4444']\r
\r
    data.forEach((group, idx) => {\r
      const sorted = [...(group.values || [])].sort((a, b) => a - b)\r
      const n = sorted.length\r
      if (n === 0) return\r
\r
      const ecdfPoints = []\r
      ecdfPoints.push({ x: xMin, y: 0 })\r
      sorted.forEach((val, i) => {\r
        ecdfPoints.push({ x: val, y: (i + 1) / n })\r
      })\r
\r
      const stepLine = d3.line()\r
        .curve(d3.curveStepAfter)\r
        .x(d => x(d.x))\r
        .y(d => y(d.y))\r
\r
      g.append('path')\r
        .datum(ecdfPoints)\r
        .attr('fill', 'none')\r
        .attr('stroke', colors[idx % colors.length])\r
        .attr('stroke-width', 2.2)\r
        .attr('d', stepLine)\r
\r
      // Points on steps\r
      g.selectAll(\`.dot-\${idx}\`)\r
        .data(sorted)\r
        .join('circle')\r
        .attr('cx', d => x(d))\r
        .attr('cy', (d, i) => y((i + 1) / n))\r
        .attr('r', 2.5)\r
        .attr('fill', colors[idx % colors.length])\r
    })\r
\r
    // Legend\r
    const legG = svg.append('g').attr('transform', \`translate(\${W - 130}, 12)\`)\r
    data.forEach((group, idx) => {\r
      legG.append('circle')\r
        .attr('cx', idx * 60 + 4)\r
        .attr('cy', 0)\r
        .attr('r', 3)\r
        .attr('fill', colors[idx % colors.length])\r
\r
      legG.append('text')\r
        .attr('x', idx * 60 + 10)\r
        .attr('y', 3)\r
        .attr('fill', 'var(--text-secondary)')\r
        .attr('font-size', '7.5px')\r
        .text(group.group || \`Group \${idx + 1}\`)\r
    })\r
\r
    // Header\r
    svg.append('text')\r
      .attr('x', 14)\r
      .attr('y', 16)\r
      .attr('fill', 'var(--text-primary)')\r
      .attr('font-size', '8.5px')\r
      .attr('font-weight', '600')\r
      .text('Empirical Cumulative Distribution Function (ECDF)')\r
  }, [customData])\r
\r
  return (\r
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\r
      <svg ref={ref} viewBox={\`0 0 \${W} \${H}\`} style={{ width: '100%', height: '100%', maxWidth: '500px' }} />\r
    </div>\r
  )\r
}\r
`;export{e as default};