var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, colors } from './utils'\r
export const meta = {\r
  id: 'correlation-scatter-multi',\r
  title: 'Correlation Scatter Multi',\r
  desc: 'Correlation Scatter Multi — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'CorrelationScatterMulti',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","correlation-scatter-multi"],\r
}\r
\r
export default function CorrelationScatterMulti({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = {"scatterA":[{"x":10,"y":12},{"x":20,"y":22},{"x":30,"y":28},{"x":40,"y":35}],"scatterB":[{"x":12,"y":18},{"x":22,"y":15},{"x":32,"y":32},{"x":42,"y":28}]}\r
    const data = (customData && customData.scatterA && customData.scatterB) ? customData : DEFAULT_DATA\r
    const all = [...data.scatterA, ...data.scatterB]\r
    const x = d3.scaleLinear().domain([0, 50]).range([M.left, W - M.right])\r
    const y = d3.scaleLinear().domain([0, 40]).range([H - M.bottom, M.top])\r
    const g = svg.append('g')\r
    g.append('g').attr('transform', \`translate(0,\${H - M.bottom})\`).call(d3.axisBottom(x).ticks(5).tickSize(0).tickPadding(8)).call(s => s.select('.domain').attr('stroke', 'var(--border)')).call(s => s.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
    g.append('g').attr('transform', \`translate(\${M.left},0)\`).call(d3.axisLeft(y).ticks(5).tickSize(0).tickPadding(8)).call(s => s.select('.domain').attr('stroke', 'var(--border)')).call(s => s.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
    g.selectAll('circle.a').data(data.scatterA).join('circle').attr('cx', d => x(d.x)).attr('cy', d => y(d.y)).attr('r', 4).attr('fill', colors[0]).attr('opacity', 0.85)\r
    g.selectAll('circle.b').data(data.scatterB).join('circle').attr('cx', d => x(d.x)).attr('cy', d => y(d.y)).attr('r', 4).attr('fill', colors[1]).attr('opacity', 0.85)\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};