var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH } from './utils'\r
\r
export const meta = {\r
  id: 'step-chart',\r
  title: 'Step Chart',\r
  desc: 'Step Chart — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'StepChart',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","step-chart"],\r
}\r
\r
export default function StepChart({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"date":"2024-01","value":4.5},{"date":"2024-02","value":4.5},{"date":"2024-03","value":4.25},{"date":"2024-04","value":4.25},{"date":"2024-05","value":4},{"date":"2024-06","value":4},{"date":"2024-07","value":3.75},{"date":"2024-08","value":3.75},{"date":"2024-09","value":3.5},{"date":"2024-10","value":3.25},{"date":"2024-11","value":3},{"date":"2024-12","value":2.75}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
\r
    const x = d3.scalePoint()\r
      .domain(data.map(d => d.date))\r
      .range([0, IW]).padding(0.05)\r
\r
    const y = d3.scaleLinear()\r
      .domain([d3.min(data, d => d.value) * 0.9, d3.max(data, d => d.value) * 1.05])\r
      .range([IH, 0])\r
\r
    const g = svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
\r
    g.append('g').call(d3.axisLeft(y).ticks(5).tickFormat(d => d + '%').tickSize(-IW).tickPadding(6))\r
      .call(gr => gr.select('.domain').remove())\r
      .call(gr => gr.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-dasharray', '2,2').attr('stroke-opacity', 0.4))\r
      .call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '7px'))\r
\r
    g.append('g').attr('transform', \`translate(0,\${IH})\`)\r
      .call(d3.axisBottom(x).tickSize(0).tickPadding(8))\r
      .call(gr => gr.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '6.5px'))\r
\r
    // Step area fill\r
    g.append('path')\r
      .datum(data)\r
      .attr('d', d3.area().x(d => x(d.date)).y0(IH).y1(d => y(d.value)).curve(d3.curveStepAfter))\r
      .attr('fill', '#6366f1').attr('fill-opacity', 0.12)\r
\r
    // Step line\r
    g.append('path')\r
      .datum(data)\r
      .attr('d', d3.line().x(d => x(d.date)).y(d => y(d.value)).curve(d3.curveStepAfter))\r
      .attr('fill', 'none').attr('stroke', '#6366f1').attr('stroke-width', 2.5)\r
\r
    // Rate change points\r
    data.forEach((d, i) => {\r
      if (i === 0 || data[i - 1].value !== d.value) {\r
        g.append('circle')\r
          .attr('cx', x(d.date)).attr('cy', y(d.value)).attr('r', 4.5)\r
          .attr('fill', '#6366f1').attr('stroke', '#ffffff').attr('stroke-width', 1.5)\r
      }\r
    })\r
\r
    svg.append('text').attr('x', 14).attr('y', 16)\r
      .attr('fill', 'var(--text-primary)').attr('font-size', '8.5px').attr('font-weight', '600')\r
      .text('Step Chart (Fed Funds Rate Decisions, 2024)')\r
  }, [customData])\r
\r
  return (\r
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\r
      <svg ref={ref} viewBox={\`0 0 \${W} \${H}\`} style={{ width: '100%', height: '100%', maxWidth: '500px' }} />\r
    </div>\r
  )\r
}\r
`;export{e as default};