var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH } from './utils'\r
\r
export const meta = {\r
  id: 'lollipop-diverging',\r
  title: 'Lollipop Diverging',\r
  desc: 'Lollipop Diverging — a historical chart visualization',\r
  category: 'Historical',\r
  component: 'LollipopDiverging',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["historical","lollipop-diverging"],\r
}\r
\r
export default function LollipopDiverging({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"label":"Product A","value":45},{"label":"Product B","value":-30},{"label":"Product C","value":60},{"label":"Product D","value":-20},{"label":"Product E","value":75},{"label":"Product F","value":-40}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
\r
    const sorted = [...data].sort((a, b) => b.value - a.value)\r
\r
    const maxAbs = d3.max(sorted, d => Math.abs(d.value)) || 1\r
    const x = d3.scaleLinear().domain([-maxAbs * 1.2, maxAbs * 1.2]).range([0, IW])\r
    const y = d3.scaleBand().domain(sorted.map(d => d.label)).range([0, IH]).padding(0.4)\r
\r
    const g = svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
\r
    // Center line\r
    g.append('line')\r
      .attr('x1', x(0)).attr('x2', x(0)).attr('y1', 0).attr('y2', IH)\r
      .attr('stroke', 'var(--border)').attr('stroke-width', 1.5)\r
\r
    sorted.forEach((d, i) => {\r
      const cy = y(d.label) + y.bandwidth() / 2\r
      const col = d.value >= 0 ? '#10b981' : '#ef4444'\r
      const lineEnd = x(d.value)\r
\r
      // Lollipop stem\r
      g.append('line')\r
        .attr('x1', x(0)).attr('x2', lineEnd).attr('y1', cy).attr('y2', cy)\r
        .attr('stroke', col).attr('stroke-width', 2.5).attr('stroke-opacity', 0.8)\r
\r
      // Head circle\r
      g.append('circle')\r
        .attr('cx', lineEnd).attr('cy', cy)\r
        .attr('r', 6).attr('fill', col).attr('stroke', 'var(--bg)').attr('stroke-width', 1.5)\r
\r
      // Value label\r
      g.append('text')\r
        .attr('x', lineEnd + (d.value >= 0 ? 8 : -8))\r
        .attr('y', cy + 3)\r
        .attr('text-anchor', d.value >= 0 ? 'start' : 'end')\r
        .attr('fill', col).attr('font-size', '7px').attr('font-weight', 600)\r
        .text(d.value)\r
    })\r
\r
    // Y labels\r
    g.append('g')\r
      .call(d3.axisLeft(y).tickSize(0).tickPadding(8))\r
      .call(gr => gr.select('.domain').remove())\r
      .call(gr => gr.selectAll('text').attr('fill', 'var(--text-primary)').attr('font-size', '8px').attr('font-weight', 500))\r
\r
    // X axis\r
    g.append('g')\r
      .attr('transform', \`translate(0,\${IH})\`)\r
      .call(d3.axisBottom(x).ticks(6).tickSize(0).tickPadding(6))\r
      .call(gr => gr.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '7px'))\r
  }, [customData])\r
\r
  return (\r
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\r
      <svg ref={ref} viewBox={\`0 0 \${W} \${H}\`} style={{ width: '100%', height: '100%', maxWidth: '500px' }} />\r
    </div>\r
  )\r
}\r
`;export{e as default};