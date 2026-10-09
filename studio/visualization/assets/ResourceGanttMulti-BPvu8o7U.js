var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, colors } from './utils'\r
export const meta = {\r
  id: 'resource-gantt-multi',\r
  title: 'Resource Gantt Multi',\r
  desc: 'Resource Gantt Multi — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'ResourceGanttMulti',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","resource-gantt-multi"],\r
}\r
\r
export default function ResourceGanttMulti({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = {"tasks":[{"name":"Design","start":0,"end":4},{"name":"Build","start":3,"end":8},{"name":"Test","start":7,"end":11}],"resources":[{"name":"Alice","load":[0.8,0.6,0.9]},{"name":"Bob","load":[0.5,0.9,0.7]}]}\r
    const data = (customData && customData.tasks && customData.resources) ? customData : DEFAULT_DATA\r
    const y = d3.scaleBand().domain(data.tasks.map(d => d.name)).range([M.top, H - M.bottom]).padding(0.25)\r
    const x = d3.scaleLinear().domain([0, 12]).range([M.left, W - M.right])\r
    const g = svg.append('g')\r
    g.append('g').attr('transform', \`translate(\${M.left},0)\`).call(d3.axisLeft(y).tickSize(0).tickPadding(8)).call(s => s.select('.domain').attr('stroke', 'var(--border)')).call(s => s.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
    g.append('g').attr('transform', \`translate(0,\${H - M.bottom})\`).call(d3.axisBottom(x).ticks(6).tickSize(0).tickPadding(8)).call(s => s.select('.domain').attr('stroke', 'var(--border)')).call(s => s.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
    data.tasks.forEach((t, i) => g.append('rect').attr('x', x(t.start)).attr('y', y(t.name)).attr('width', x(t.end) - x(t.start)).attr('height', y.bandwidth()).attr('fill', colors[i % colors.length]).attr('rx', 3).attr('opacity', 0.85))\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};