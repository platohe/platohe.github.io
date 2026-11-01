var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'histogram',\r
  title: 'Histogram',\r
  desc: 'Histogram — a analysis chart visualization',\r
  category: 'Analysis',\r
  component: 'Histogram',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["analysis","histogram"],\r
}\r
\r
export default function Histogram({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const DEFAULT_DATA = [12,18,19,22,25,27,28,29,31,35,38,42,45,48,52,55,60,62,65,68,72]\r
    const data = (customData && Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
\r
    const histogram = d3.bin()\r
      .domain([0, 100])\r
      .thresholds(15)\r
\r
    const bins = histogram(data)\r
    const x = d3.scaleLinear().domain([0, 100]).range([40, 360])\r
    const maxBinLen = d3.max(bins, (b) => b.length) || 1\r
    const y = d3.scaleLinear()\r
      .domain([0, maxBinLen * 1.1])\r
      .range([250, 20])\r
\r
    // Grid\r
    svg.append('g')\r
      .attr('transform', 'translate(50,20)')\r
      .call(d3.axisLeft(y).ticks(5).tickSize(-310).tickPadding(0))\r
      .call((g) => g.select('.domain').remove())\r
      .call((g) => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.5))\r
      .call((g) => g.selectAll('text').remove())\r
      .lower()\r
\r
    const barW = Math.max(2, (x(bins[0].x1) - x(bins[0].x0) - 2))\r
\r
    svg.selectAll('rect')\r
      .data(bins)\r
      .join('rect')\r
      .attr('x', (d) => x(d.x0) + 50)\r
      .attr('y', (d) => y(d.length) + 20)\r
      .attr('width', barW)\r
      .attr('height', (d) => 250 - y(d.length))\r
      .attr('fill', '#6366f1').attr('opacity', 0.7)\r
      .attr('rx', 2)\r
\r
    // Axes\r
    svg.append('g')\r
      .attr('transform', 'translate(50,270)')\r
      .call(d3.axisBottom(x).ticks(6).tickSize(0).tickPadding(8))\r
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