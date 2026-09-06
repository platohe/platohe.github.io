var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
// Abramowitz-Stegun erf approximation\r
function erf(x) {\r
  const t = 1 / (1 + 0.3275911 * Math.abs(x))\r
  const y = 1 - (((((1.061405429 * t - 1.453152027) * t) + 1.421413741) * t - 0.284496736) * t + 0.254829592) * t * Math.exp(-x * x)\r
  return x >= 0 ? y : -y\r
}\r
\r
function normCdf(x) { return 0.5 * (1 + erf(x / Math.SQRT2)) }\r
\r
export const meta = {\r
  id: 'pp-plot',\r
  title: 'Pp Plot',\r
  desc: 'Pp Plot — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'PpPlot',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","pp-plot"],\r
}\r
\r
export default function PpPlot({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const DEFAULT_DATA = [12,15,14,18,22,24,25,28,30,32,35,38,40,42,45,48,50,55,58,62,65,70,73,78,81,84,88,90,95]\r
    const data = (customData && Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
\r
    const sorted = [...data].sort(d3.ascending)\r
    const n = sorted.length\r
    const mean = d3.mean(sorted)\r
    const sd = d3.deviation(sorted) || 1\r
\r
    const pts = sorted.map((v, i) => ({\r
      x: normCdf((v - mean) / sd), // theoretical CDF\r
      y: (i + 1) / (n + 1),        // empirical CDF (Weibull plotting position)\r
    }))\r
\r
    const x = d3.scaleLinear().domain([0, 1]).range([M.left, W - M.right])\r
    const y = d3.scaleLinear().domain([0, 1]).range([H - M.bottom, M.top])\r
\r
    svg.append('g')\r
      .attr('transform', \`translate(0,\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(-IW).tickPadding(8))\r
      .call((g) => g.select('.domain').remove())\r
      .call((g) => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-dasharray', '2,3'))\r
      .call((g) => g.selectAll('.tick text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
      .lower()\r
\r
    svg.append('line')\r
      .attr('x1', x(0)).attr('y1', y(0)).attr('x2', x(1)).attr('y2', y(1))\r
      .attr('stroke', 'var(--border)').attr('stroke-width', 1).attr('stroke-dasharray', '4,4')\r
\r
    svg.selectAll('circle')\r
      .data(pts)\r
      .join('circle')\r
      .attr('cx', (d) => x(d.x)).attr('cy', (d) => y(d.y))\r
      .attr('r', 3).attr('fill', colors[0]).attr('opacity', 0.75)\r
\r
    svg.append('g')\r
      .attr('transform', \`translate(0,\${H - M.bottom})\`)\r
      .call(d3.axisBottom(x).ticks(6).tickSize(0).tickPadding(8).tickFormat(d3.format('.0%')))\r
      .call((g) => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call((g) => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    svg.append('text')\r
      .attr('x', W / 2).attr('y', H - 4)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '11px')\r
      .text('Theoretical CDF vs Empirical CDF (normal PP plot)')\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}`;export{e as default};