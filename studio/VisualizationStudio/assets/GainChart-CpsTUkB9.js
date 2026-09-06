var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'gain-chart',\r
  title: 'Gain Chart',\r
  desc: 'Gain Chart — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'GainChart',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","gain-chart"],\r
}\r
\r
export default function GainChart({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"pct":0,"gain":0},{"pct":0.05,"gain":0.15},{"pct":0.1,"gain":0.163},{"pct":0.15,"gain":0.227},{"pct":0.2,"gain":0.289},{"pct":0.25,"gain":0.35},{"pct":0.3,"gain":0.41},{"pct":0.35,"gain":0.468},{"pct":0.4,"gain":0.526},{"pct":0.45,"gain":0.584},{"pct":0.5,"gain":0.641},{"pct":0.55,"gain":0.698},{"pct":0.6,"gain":0.755},{"pct":0.65,"gain":0.811},{"pct":0.7,"gain":0.867},{"pct":0.75,"gain":0.923},{"pct":0.8,"gain":0.979},{"pct":0.85,"gain":1},{"pct":0.9,"gain":1},{"pct":0.95,"gain":1},{"pct":1,"gain":1}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
\r
    const x = d3.scaleLinear().domain([0, 1]).range([0, IW])\r
    const y = d3.scaleLinear().domain([0, 1]).range([IH, 0])\r
\r
    // Grid\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(-IW).tickPadding(0))\r
      .call(g => g.select('.domain').remove()).call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.4)).call(g => g.selectAll('text').remove()).lower()\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisBottom(x).ticks(5).tickSize(-IH).tickPadding(0))\r
      .call(g => g.select('.domain').remove()).call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.4)).call(g => g.selectAll('text').remove()).lower()\r
\r
    // Random (diagonal)\r
    svg.append('line').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('x1', x(0)).attr('x2', x(1)).attr('y1', y(0)).attr('y2', y(1))\r
      .attr('stroke', colors[2]).attr('stroke-width', 1.5).attr('stroke-dasharray', '6,4')\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW - 50},\${M.top + y(0.5) + 12})\`)\r
      .attr('fill', colors[2]).attr('font-size', '9px').text('Random')\r
\r
    // Gain curve area\r
    const area = d3.area().x(d => x(d.pct)).y0(y(0)).y1(d => y(d.gain)).curve(d3.curveMonotoneX)\r
    svg.append('path').datum(data).attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('d', area).attr('fill', colors[0]).attr('fill-opacity', 0.15)\r
\r
    // Gain curve line\r
    const line = d3.line().x(d => x(d.pct)).y(d => y(d.gain)).curve(d3.curveMonotoneX)\r
    svg.append('path').datum(data).attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('d', line).attr('fill', 'none').attr('stroke', colors[0]).attr('stroke-width', 2.5)\r
\r
    // Axes\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top + IH})\`)\r
      .call(d3.axisBottom(x).ticks(5).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top + IH + 28})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text('Population % (by score decile)')\r
    svg.append('text').attr('transform', \`translate(12,\${M.top + IH/2}) rotate(-90)\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text('Cumulative Gain %')\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top - 10})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)').attr('font-size', '14px').attr('font-weight', 'bold').text('Cumulative Gain Chart')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};