var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'timeline-chart',\r
  title: 'Timeline Chart',\r
  desc: 'Timeline Chart — a historical chart visualization',\r
  category: 'Historical',\r
  component: 'TimelineChart',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["historical","timeline-chart"],\r
}\r
\r
export default function TimelineChart({ data: customData }) {\r
  const ref = useRef(null)\r
  const DEFAULT_DATA = [{"task":"Design","start":1,"end":4},{"task":"Dev","start":3,"end":8},{"task":"Testing","start":7,"end":10},{"task":"Deploy","start":9,"end":11}]\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
    const margin = { top: 30, right: 20, bottom: 30, left: 80 }\r
    const w = W - margin.left - margin.right, h = H - margin.top - margin.bottom\r
    const x = d3.scaleLinear().domain([0, d3.max(data, d => d.end) * 1.1]).range([0, w])\r
    const y = d3.scaleBand().domain(data.map(d => d.task)).range([0, h]).padding(0.3)\r
    const g = svg.append('g').attr('transform', \`translate(\${margin.left},\${margin.top})\`)\r
    data.forEach((d, i) => {\r
      g.append('rect').attr('x', x(d.start)).attr('y', y(d.task)).attr('width', x(d.end) - x(d.start)).attr('height', y.bandwidth())\r
        .attr('fill', colors[i % colors.length]).attr('opacity', 0.8).attr('rx', 3)\r
      g.append('text').attr('x', x(d.start) + (x(d.end) - x(d.start)) / 2).attr('y', y(d.task) + y.bandwidth() / 2 + 4)\r
        .attr('text-anchor', 'middle').attr('fill', '#fff').attr('font-size', '9px').attr('font-weight', 600)\r
        .text(\`\${d.end - d.start}w\`)\r
    })\r
    g.append('g').call(d3.axisLeft(y).tickSize(0).tickPadding(8)).call(gr => gr.select('.domain').remove()).call(gr => gr.selectAll('text').attr('fill', 'var(--text)').attr('font-size', '11px').attr('font-weight', 500))\r
    g.append('g').attr('transform', \`translate(0,\${h})\`).call(d3.axisBottom(x).ticks(8).tickSize(0).tickPadding(6)).call(gr => gr.select('.domain').remove()).call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '9px'))\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};