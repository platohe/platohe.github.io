var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, colors } from './utils'\r
export const meta = {\r
  id: 'flat-bump-chart',\r
  title: 'Flat Bump Chart',\r
  desc: 'Flat Bump Chart — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'FlatBumpChart',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","flat-bump-chart"],\r
}\r
\r
export default function FlatBumpChart({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = [12,15,18,22,25,28,30,32,35,38,40,42,45,48,50,55,58,62,65,70]\r
    const data = (customData && Array.isArray(customData) && customData.length > 0 && typeof customData[0] === 'number') ? customData : DEFAULT_DATA\r
    const x = d3.scaleLinear().domain([0, data.length - 1]).range([M.left, W - M.right])\r
    const y = d3.scaleLinear().domain([0, d3.max(data) * 1.1]).range([H - M.bottom, M.top])\r
    const g = svg.append('g')\r
    g.append('g').attr('transform', \`translate(0,\${H - M.bottom})\`).call(d3.axisBottom(x).ticks(5).tickSize(0).tickPadding(8)).call(s => s.select('.domain').attr('stroke', 'var(--border)')).call(s => s.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
    g.append('g').attr('transform', \`translate(\${M.left},0)\`).call(d3.axisLeft(y).ticks(5).tickSize(0).tickPadding(8)).call(s => s.select('.domain').attr('stroke', 'var(--border)')).call(s => s.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
    const line = d3.line().x((_, i) => x(i)).y(d => y(d)).curve(d3.curveMonotoneX)\r
    g.append('path').datum(data).attr('d', line).attr('fill', 'none').attr('stroke', colors[0]).attr('stroke-width', 2.2)\r
    g.selectAll('circle').data(data).join('circle').attr('cx', (_, i) => x(i)).attr('cy', d => y(d)).attr('r', 3).attr('fill', colors[0])\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};