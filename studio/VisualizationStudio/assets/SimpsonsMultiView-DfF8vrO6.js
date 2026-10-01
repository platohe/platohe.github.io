var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, colors } from './utils'\r
export const meta = {\r
  id: 'simpsons-multi-view',\r
  title: 'Simpsons Multi View',\r
  desc: 'Simpsons Multi View — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'SimpsonsMultiView',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","simpsons-multi-view"],\r
}\r
\r
export default function SimpsonsMultiView({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = {"aggregated":[{"x":10,"y":20},{"x":20,"y":30},{"x":30,"y":40}],"disaggregated":[{"group":"A","points":[{"x":10,"y":35},{"x":20,"y":25}]},{"group":"B","points":[{"x":30,"y":45},{"x":40,"y":35}]}]}\r
    const data = (customData && customData.aggregated && customData.disaggregated) ? customData : DEFAULT_DATA\r
    const all = [...data.aggregated, ...data.disaggregated.flatMap(g => g.points)]\r
    const x = d3.scaleLinear().domain([0, 50]).range([M.left, W - M.right])\r
    const y = d3.scaleLinear().domain([0, 50]).range([H - M.bottom, M.top])\r
    const g = svg.append('g')\r
    g.append('g').attr('transform', \`translate(0,\${H - M.bottom})\`).call(d3.axisBottom(x).ticks(5).tickSize(0).tickPadding(8)).call(s => s.select('.domain').attr('stroke', 'var(--border)')).call(s => s.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
    g.append('g').attr('transform', \`translate(\${M.left},0)\`).call(d3.axisLeft(y).ticks(5).tickSize(0).tickPadding(8)).call(s => s.select('.domain').attr('stroke', 'var(--border)')).call(s => s.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
    g.selectAll('circle.agg').data(data.aggregated).join('circle').attr('cx', d => x(d.x)).attr('cy', d => y(d.y)).attr('r', 5).attr('fill', colors[0]).attr('opacity', 0.9)\r
    data.disaggregated.forEach((grp, i) => g.selectAll(\`circle.g\${i}\`).data(grp.points).join('circle').attr('cx', d => x(d.x)).attr('cy', d => y(d.y)).attr('r', 3.5).attr('fill', colors[i + 1]).attr('opacity', 0.7))\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};