var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'progress-bars',\r
  title: 'Progress Bars',\r
  desc: 'Progress Bars — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'ProgressBars',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["bars","progress-bars"],\r
}\r
\r
export default function ProgressBars({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"label":"Project Alpha","current":85,"target":100,"color":"#6366f1"},{"label":"Project Beta","current":62,"target":100,"color":"#06b6d4"},{"label":"Project Gamma","current":94,"target":100,"color":"#10b981"},{"label":"Project Delta","current":41,"target":100,"color":"#f59e0b"},{"label":"Project Epsilon","current":77,"target":100,"color":"#ec4899"},{"label":"Project Zeta","current":56,"target":100,"color":"#8b5cf6"}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
    const margin = { top: 30, right: 50, bottom: 20, left: 120 }\r
    const w = W - margin.left - margin.right\r
    const rowH = (H - margin.top - margin.bottom) / data.length\r
    const barH = rowH * 0.55\r
\r
    const x = d3.scaleLinear().domain([0, 100]).range([0, w])\r
\r
    data.forEach((d, i) => {\r
      const gy = margin.top + i * rowH + (rowH - barH) / 2\r
      const g = svg.append('g').attr('transform', \`translate(\${margin.left},\${gy})\`)\r
\r
      // Label\r
      svg.append('text')\r
        .attr('x', margin.left - 8).attr('y', gy + barH / 2 + 4)\r
        .attr('text-anchor', 'end').attr('fill', 'var(--text)').attr('font-size', '11px').attr('font-weight', 500)\r
        .text(d.label)\r
\r
      // Track background\r
      g.append('rect')\r
        .attr('x', 0).attr('y', 0).attr('width', w).attr('height', barH)\r
        .attr('fill', 'var(--bg-secondary)').attr('rx', 4)\r
        .attr('stroke', 'var(--border)').attr('stroke-width', 0.5)\r
\r
      // Progress fill\r
      const pct = Math.min(100, Math.max(0, (d.current / d.target) * 100))\r
      g.append('rect')\r
        .attr('x', 1).attr('y', 1).attr('width', Math.max(0, (w - 2) * pct / 100)).attr('height', barH - 2)\r
        .attr('fill', d.color || colors[i % colors.length]).attr('rx', 3)\r
        .attr('opacity', 0.85)\r
\r
      // Target marker\r
      const tx = x(d.target)\r
      g.append('line')\r
        .attr('x1', tx).attr('x2', tx).attr('y1', -4).attr('y2', barH + 4)\r
        .attr('stroke', 'var(--text-secondary)').attr('stroke-width', 1.5).attr('stroke-dasharray', '3,2')\r
\r
      // Value label\r
      svg.append('text')\r
        .attr('x', margin.left + w + 6).attr('y', gy + barH / 2 + 4)\r
        .attr('fill', 'var(--text-secondary)').attr('font-size', '10px').attr('font-family', 'var(--font-mono)')\r
        .text(\`\${Math.round(pct)}%\`)\r
    })\r
\r
    // Scale axis\r
    svg.append('g')\r
      .attr('transform', \`translate(\${margin.left},\${margin.top - 10})\`)\r
      .call(d3.axisTop(x).ticks(5).tickSize(0).tickPadding(4))\r
      .call(gr => gr.select('.domain').remove())\r
      .call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '9px'))\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};