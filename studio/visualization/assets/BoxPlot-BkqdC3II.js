var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'box-plot',\r
  title: 'Box Plot',\r
  desc: 'Box Plot — a analysis chart visualization',\r
  category: 'Analysis',\r
  component: 'BoxPlot',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["analysis","box-plot"],\r
}\r
\r
export default function BoxPlot({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const DEFAULT_DATA = [{"name":"Group A","data":[20,25,30,35,40,45,50]},{"name":"Group B","data":[30,38,42,46,50,58,65]},{"name":"Group C","data":[15,22,28,32,35,42,48]}]\r
\r
    const groups = (customData && Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
\r
    const names = groups.map(g => g.name || g.group || 'Group')\r
    const x = d3.scaleBand().domain(names).range([40, 360]).padding(0.4)\r
    const y = d3.scaleLinear().domain([0, 80]).range([250, 20])\r
\r
    svg.append('g')\r
      .attr('transform', 'translate(50,20)')\r
      .call(d3.axisLeft(y).ticks(5).tickSize(-310).tickPadding(0))\r
      .call((g) => g.select('.domain').remove())\r
      .call((g) => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.5))\r
      .call((g) => g.selectAll('text').remove())\r
      .lower()\r
\r
    const color = ['#6366f1', '#f59e0b', '#10b981', '#ef4444']\r
\r
    groups.forEach((g, i) => {\r
      const gName = g.name || g.group || \`G\${i+1}\`\r
      const vals = Array.isArray(g.data) ? g.data : (Array.isArray(g.values) ? g.values : [20, 30, 40])\r
      const sorted = [...vals].sort(d3.ascending)\r
      const q1 = d3.quantile(sorted, 0.25) || sorted[0]\r
      const q2 = d3.quantile(sorted, 0.5) || sorted[Math.floor(sorted.length/2)]\r
      const q3 = d3.quantile(sorted, 0.75) || sorted[sorted.length-1]\r
      const min = sorted[0]\r
      const max = sorted[sorted.length - 1]\r
      const cx = x(gName) + x.bandwidth() / 2 + 50\r
\r
      svg.append('rect')\r
        .attr('x', cx - x.bandwidth() / 2).attr('y', y(q3) + 20)\r
        .attr('width', x.bandwidth()).attr('height', Math.max(2, y(q1) - y(q3)))\r
        .attr('fill', color[i % color.length]).attr('opacity', 0.4)\r
        .attr('stroke', color[i % color.length]).attr('stroke-width', 1.5).attr('rx', 2)\r
\r
      svg.append('line')\r
        .attr('x1', cx - x.bandwidth() / 2).attr('x2', cx + x.bandwidth() / 2)\r
        .attr('y1', y(q2) + 20).attr('y2', y(q2) + 20)\r
        .attr('stroke', color[i % color.length]).attr('stroke-width', 2)\r
\r
      svg.append('line')\r
        .attr('x1', cx).attr('x2', cx)\r
        .attr('y1', y(q3) + 20).attr('y2', y(max) + 20)\r
        .attr('stroke', color[i % color.length]).attr('stroke-width', 1.5)\r
\r
      svg.append('line')\r
        .attr('x1', cx).attr('x2', cx)\r
        .attr('y1', y(q1) + 20).attr('y2', y(min) + 20)\r
        .attr('stroke', color[i % color.length]).attr('stroke-width', 1.5)\r
    })\r
\r
    svg.append('g')\r
      .attr('transform', 'translate(50,270)')\r
      .call(d3.axisBottom(x).tickSize(0).tickPadding(8))\r
      .call((g) => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call((g) => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    svg.append('g')\r
      .attr('transform', 'translate(50,20)')\r
      .call(d3.axisLeft(y).ticks(5).tickSize(0).tickPadding(8))\r
      .call((g) => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call((g) => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};