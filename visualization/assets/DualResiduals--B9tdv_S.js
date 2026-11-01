var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, colors } from './utils'\r
export const meta = {\r
  id: 'dual-residuals',\r
  title: 'Dual Residuals',\r
  desc: 'Dual Residuals — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'DualResiduals',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","dual-residuals"],\r
}\r
\r
export default function DualResiduals({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = {"residualsA":[{"x":10,"r":-1.2},{"x":20,"r":0.8},{"x":30,"r":-0.5},{"x":40,"r":1.4},{"x":50,"r":-0.9},{"x":60,"r":0.3}],"residualsB":[{"x":10,"r":0.9},{"x":20,"r":-0.7},{"x":30,"r":1.1},{"x":40,"r":-1.3},{"x":50,"r":0.6},{"x":60,"r":-0.4}]}\r
    const data = (customData && customData.residualsA && customData.residualsB) ? customData : DEFAULT_DATA\r
    const all = [...data.residualsA, ...data.residualsB]\r
    const x = d3.scaleLinear().domain([0, 70]).range([M.left, W - M.right])\r
    const y = d3.scaleLinear().domain([-2, 2]).range([H - M.bottom, M.top])\r
    const g = svg.append('g')\r
    g.append('g').attr('transform', \`translate(0,\${H - M.bottom})\`).call(d3.axisBottom(x).ticks(6).tickSize(0).tickPadding(8)).call(s => s.select('.domain').attr('stroke', 'var(--border)')).call(s => s.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
    g.append('g').attr('transform', \`translate(\${M.left},0)\`).call(d3.axisLeft(y).ticks(5).tickSize(0).tickPadding(8)).call(s => s.select('.domain').attr('stroke', 'var(--border)')).call(s => s.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
    g.append('line').attr('x1', x(0)).attr('x2', x(70)).attr('y1', y(0)).attr('y2', y(0)).attr('stroke', 'var(--border)').attr('stroke-dasharray', '4,4')\r
    g.selectAll('circle.a').data(data.residualsA).join('circle').attr('cx', d => x(d.x)).attr('cy', d => y(d.r)).attr('r', 4).attr('fill', colors[0]).attr('opacity', 0.85)\r
    g.selectAll('circle.b').data(data.residualsB).join('circle').attr('cx', d => x(d.x)).attr('cy', d => y(d.r)).attr('r', 4).attr('fill', colors[1]).attr('opacity', 0.85)\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};