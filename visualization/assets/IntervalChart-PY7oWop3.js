var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH } from './utils'\r
\r
export const meta = {\r
  id: 'interval-chart',\r
  title: 'Interval Chart',\r
  desc: 'Interval Chart — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'IntervalChart',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","interval-chart"],\r
}\r
\r
export default function IntervalChart({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"label":"Product A","value":75,"errorLow":65,"errorHigh":85},{"label":"Product B","value":82,"errorLow":78,"errorHigh":90},{"label":"Product C","value":68,"errorLow":60,"errorHigh":76},{"label":"Product D","value":90,"errorLow":85,"errorHigh":95},{"label":"Product E","value":72,"errorLow":68,"errorHigh":80},{"label":"Product F","value":88,"errorLow":80,"errorHigh":96}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
\r
    const y = d3.scaleBand()\r
      .domain(data.map(d => d.label))\r
      .range([0, IH])\r
      .padding(0.35)\r
\r
    const x = d3.scaleLinear()\r
      .domain([0, d3.max(data, d => d.errorHigh) * 1.05])\r
      .range([0, IW])\r
\r
    const g = svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
\r
    // Grid\r
    g.append('g')\r
      .call(d3.axisLeft(y).ticks(0).tickSize(-IW).tickPadding(0))\r
      .call(gr => gr.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.3))\r
      .call(gr => gr.selectAll('text').remove())\r
      .lower()\r
\r
    // Error intervals\r
    data.forEach(d => {\r
      const cy = y(d.label) + y.bandwidth() / 2\r
      const barH = y.bandwidth() * 0.3\r
\r
      // Error bar background\r
      g.append('rect')\r
        .attr('x', x(d.errorLow)).attr('y', cy - barH / 2)\r
        .attr('width', x(d.errorHigh) - x(d.errorLow)).attr('height', barH)\r
        .attr('fill', '#6366f1').attr('fill-opacity', 0.2)\r
        .attr('stroke', '#6366f1').attr('stroke-width', 1).attr('rx', 2);\r
\r
      // Error caps\r
      [d.errorLow, d.errorHigh].forEach(v => {\r
        g.append('line')\r
          .attr('x1', x(v)).attr('x2', x(v))\r
          .attr('y1', cy - barH / 2 - 3).attr('y2', cy + barH / 2 + 3)\r
          .attr('stroke', '#6366f1').attr('stroke-width', 1.5)\r
      })\r
\r
      // Point estimate\r
      g.append('circle')\r
        .attr('cx', x(d.value)).attr('cy', cy)\r
        .attr('r', 4).attr('fill', '#6366f1').attr('stroke', 'var(--bg)').attr('stroke-width', 1.5)\r
    })\r
\r
    // Axes\r
    g.append('g')\r
      .attr('transform', \`translate(0,\${IH})\`)\r
      .call(d3.axisBottom(x).ticks(6).tickSize(0).tickPadding(8))\r
      .call(gr => gr.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '7.5px'))\r
\r
    g.append('g')\r
      .call(d3.axisLeft(y).tickSize(0).tickPadding(8))\r
      .call(gr => gr.select('.domain').remove())\r
      .call(gr => gr.selectAll('text').attr('fill', 'var(--text-primary)').attr('font-size', '8px').attr('font-weight', 500))\r
  }, [customData])\r
\r
  return (\r
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\r
      <svg ref={ref} viewBox={\`0 0 \${W} \${H}\`} style={{ width: '100%', height: '100%', maxWidth: '500px' }} />\r
    </div>\r
  )\r
}\r
`;export{e as default};