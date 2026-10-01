var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'normal-plot-effects',\r
  title: 'Normal Plot Effects',\r
  desc: 'Normal Plot Effects — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'NormalPlotEffects',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","normal-plot-effects"],\r
}\r
\r
export default function NormalPlotEffects({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"effect":-6.504,"rank":5},{"effect":-5.002,"rank":11},{"effect":-4.535,"rank":7},{"effect":-1.034,"rank":2},{"effect":-0.554,"rank":10},{"effect":0.532,"rank":6},{"effect":2.022,"rank":1},{"effect":2.495,"rank":8},{"effect":3.395,"rank":4},{"effect":7.049,"rank":3},{"effect":7.309,"rank":9},{"effect":7.641,"rank":12}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
    const n = data.length\r
\r
    const x = d3.scaleLinear().domain(d3.extent(data, d => d.effect)).range([0, IW])\r
    const y = d3.scaleLinear().domain([0, 1]).range([IH, 0])\r
\r
    // Normal quantiles (approx)\r
    const normalQuantiles = data.map((d, i) => {\r
      const p = (i - 0.375) / (n + 0.25)\r
      const z = Math.sqrt(2) * erfcInv(2 * p)\r
      return { effect: d.effect, z }\r
    })\r
\r
    // Grid\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(-IW).tickPadding(0))\r
      .call(g => g.select('.domain').remove()).call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.4)).call(g => g.selectAll('text').remove()).lower()\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisBottom(x).ticks(6).tickSize(-IH).tickPadding(0))\r
      .call(g => g.select('.domain').remove()).call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.4)).call(g => g.selectAll('text').remove()).lower()\r
\r
    // Reference line (through origin with slope = std)\r
    const mean = d3.mean(data, d => d.effect)\r
    const std = d3.deviation(data, d => d.effect) || 1\r
    const refLine = d3.line()\r
      .x(d => x(d.effect))\r
      .y(d => y(d.z))\r
      .curve(d3.curveLinear)\r
    svg.append('path').datum([\r
      { effect: mean - 3 * std, z: -3 },\r
      { effect: mean + 3 * std, z: 3 },\r
    ]).attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('d', refLine).attr('fill', 'none').attr('stroke', colors[1]).attr('stroke-width', 1.5).attr('stroke-dasharray', '4,4')\r
\r
    // Points\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .selectAll('circle').data(normalQuantiles).join('circle')\r
      .attr('cx', d => x(d.effect)).attr('cy', d => y(d.z))\r
      .attr('r', d => Math.abs(d.z) > 2 ? 5 : 3.5)\r
      .attr('fill', d => Math.abs(d.z) > 2 ? colors[3] : colors[0])\r
      .attr('stroke', '#fff').attr('stroke-width', 1)\r
\r
    // Axis labels\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top + IH + 28})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text('Effect Size')\r
    svg.append('text').attr('transform', \`translate(12,\${M.top + IH/2}) rotate(-90)\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text('Normal Quantile (z)')\r
\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top - 10})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)').attr('font-size', '14px').attr('font-weight', 'bold').text('Normal Plot of Effects')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
\r
// Approximation of inverse complementary error function\r
function erfcInv(p) {\r
  // Simple approximation\r
  const a = 0.147\r
  const logP = Math.log(1 - p * p)\r
  const term = 2 / (Math.PI * a) + logP / 2\r
  return Math.sign(1 - p) * Math.sqrt(Math.sqrt(term * term - logP / a) - term)\r
}\r
`;export{e as default};