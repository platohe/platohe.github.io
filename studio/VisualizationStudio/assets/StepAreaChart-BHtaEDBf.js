var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH } from './utils'\r
\r
export const meta = {\r
  id: 'step-area-chart',\r
  title: 'Step Area Chart',\r
  desc: 'Step Area Chart — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'StepAreaChart',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["bars","step-area-chart"],\r
}\r
\r
export default function StepAreaChart({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"x":0,"y":20},{"x":5,"y":20},{"x":10,"y":35},{"x":15,"y":35},{"x":20,"y":50},{"x":25,"y":50},{"x":30,"y":65},{"x":35,"y":65}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
\r
    const x = d3.scaleLinear().domain(d3.extent(data, d => d.x)).range([0, IW])\r
    const y = d3.scaleLinear().domain([0, d3.max(data, d => d.y) * 1.1]).range([IH, 0])\r
\r
    const g = svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
\r
    // Grid\r
    g.append('g')\r
      .call(d3.axisLeft(y).ticks(4).tickSize(-IW).tickPadding(6))\r
      .call(gr => gr.select('.domain').remove())\r
      .call(gr => gr.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-dasharray', '2,2').attr('stroke-opacity', 0.4))\r
      .call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '7px'))\r
      .lower()\r
\r
    const area = d3.area()\r
      .x(d => x(d.x))\r
      .y0(y(0))\r
      .y1(d => y(d.y))\r
      .curve(d3.curveStep)\r
\r
    const line = d3.line()\r
      .x(d => x(d.x))\r
      .y(d => y(d.y))\r
      .curve(d3.curveStep)\r
\r
    const gradId = 'stepGrad'\r
    const defs = svg.append('defs')\r
    const grad = defs.append('linearGradient').attr('id', gradId).attr('x1', '0').attr('y1', '0').attr('x2', '0').attr('y2', '1')\r
    grad.append('stop').attr('offset', '0%').attr('stop-color', '#f59e0b').attr('stop-opacity', 0.5)\r
    grad.append('stop').attr('offset', '100%').attr('stop-color', '#f59e0b').attr('stop-opacity', 0.05)\r
\r
    g.append('path').datum(data).attr('d', area).attr('fill', \`url(#\${gradId})\`)\r
    g.append('path').datum(data).attr('d', line).attr('fill', 'none').attr('stroke', '#f59e0b').attr('stroke-width', 2)\r
\r
    // Dots at steps\r
    data.forEach(d => {\r
      g.append('circle').attr('cx', x(d.x)).attr('cy', y(d.y)).attr('r', 3)\r
        .attr('fill', '#f59e0b').attr('stroke', 'var(--bg)').attr('stroke-width', 1.5)\r
    })\r
\r
    // Axes\r
    g.append('g').attr('transform', \`translate(0,\${IH})\`)\r
      .call(d3.axisBottom(x).ticks(6).tickSize(0).tickPadding(8))\r
      .call(gr => gr.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '7.5px'))\r
\r
    g.append('g')\r
      .call(d3.axisLeft(y).ticks(4).tickSize(0).tickPadding(6))\r
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