var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH } from './utils'\r
\r
export const meta = {\r
  id: 'small-multiples',\r
  title: 'Small Multiples',\r
  desc: 'Small Multiples — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'SmallMultiples',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","small-multiples"],\r
}\r
\r
export default function SmallMultiples({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"name":"Revenue","color":"#3b82f6","values":[42,55,48,62,78,85,92,88,105,118,124,132]},{"name":"Profit","color":"#10b981","values":[8,12,9,18,24,28,32,27,38,42,48,55]},{"name":"Customers","color":"#f59e0b","values":[310,385,420,462,538,590,640,612,702,780,820,890]},{"name":"Churn %","color":"#ef4444","values":[12,10,11,9,8,7,8,9,7,6,5,4]},{"name":"NPS Score","color":"#8b5cf6","values":[42,44,40,46,50,55,58,56,62,65,68,72]},{"name":"Support Tickets","color":"#ec4899","values":[85,78,92,65,58,70,64,55,48,42,38,32]}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
\r
    const cols = 3\r
    const rows = Math.ceil(data.length / cols)\r
    const margin = { top: 38, right: 12, bottom: 10, left: 12 }\r
    const cellW = (W - margin.left - margin.right) / cols\r
    const cellH = (H - margin.top - margin.bottom) / rows\r
    const innerPad = { t: 18, r: 8, b: 14, l: 8 }\r
\r
    const months = ['J','F','M','A','M','J','J','A','S','O','N','D']\r
\r
    data.slice(0, 6).forEach((series, idx) => {\r
      const col = idx % cols\r
      const row = Math.floor(idx / cols)\r
      const ox = margin.left + col * cellW\r
      const oy = margin.top + row * cellH\r
\r
      const iw = cellW - innerPad.l - innerPad.r\r
      const ih = cellH - innerPad.t - innerPad.b\r
\r
      const vals = series.values || []\r
      const x = d3.scalePoint().domain(vals.map((_, i) => i)).range([0, iw]).padding(0.1)\r
      const y = d3.scaleLinear().domain([d3.min(vals) * 0.9, d3.max(vals) * 1.05]).range([ih, 0])\r
\r
      const g = svg.append('g').attr('transform', \`translate(\${ox + innerPad.l},\${oy + innerPad.t})\`)\r
\r
      // Cell background\r
      svg.append('rect')\r
        .attr('x', ox + 1).attr('y', oy + 1)\r
        .attr('width', cellW - 2).attr('height', cellH - 2)\r
        .attr('fill', 'var(--bg-secondary)').attr('rx', 4)\r
        .attr('stroke', 'var(--border)').attr('stroke-width', 0.5)\r
\r
      // Area fill\r
      g.append('path')\r
        .datum(vals)\r
        .attr('d', d3.area().x((d, i) => x(i)).y0(ih).y1(d => y(d)).curve(d3.curveCatmullRom))\r
        .attr('fill', series.color).attr('fill-opacity', 0.12)\r
\r
      // Line\r
      g.append('path')\r
        .datum(vals)\r
        .attr('d', d3.line().x((d, i) => x(i)).y(d => y(d)).curve(d3.curveCatmullRom))\r
        .attr('fill', 'none').attr('stroke', series.color).attr('stroke-width', 1.8)\r
\r
      // Series label\r
      svg.append('text')\r
        .attr('x', ox + 6).attr('y', oy + 12)\r
        .attr('fill', series.color).attr('font-size', '7.5px').attr('font-weight', '700')\r
        .text(series.name)\r
\r
      // Last value\r
      const last = vals[vals.length - 1]\r
      svg.append('text')\r
        .attr('x', ox + cellW - 6).attr('y', oy + 12)\r
        .attr('text-anchor', 'end').attr('fill', 'var(--text-secondary)').attr('font-size', '7px')\r
        .attr('font-family', 'var(--font-mono)').text(last)\r
    })\r
\r
    svg.append('text').attr('x', 14).attr('y', 18)\r
      .attr('fill', 'var(--text-primary)').attr('font-size', '8.5px').attr('font-weight', '600')\r
      .text('Small Multiples Grid (6 KPI Trend Panels)')\r
  }, [customData])\r
\r
  return (\r
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\r
      <svg ref={ref} viewBox={\`0 0 \${W} \${H}\`} style={{ width: '100%', height: '100%', maxWidth: '500px' }} />\r
    </div>\r
  )\r
}\r
`;export{e as default};