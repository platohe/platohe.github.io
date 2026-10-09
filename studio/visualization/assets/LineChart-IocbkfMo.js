var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
import { getDefaultData } from './defaultData'\r
\r
export const meta = {\r
  id: 'line-chart',\r
  title: 'Line Chart',\r
  desc: 'Line Chart — a lines chart visualization',\r
  category: 'Lines',\r
  component: 'LineChart',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["lines","line-chart"],\r
}\r
\r
export default function LineChart({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"x":0,"y":25},{"x":5,"y":35},{"x":10,"y":28},{"x":15,"y":55},{"x":20,"y":48},{"x":25,"y":70},{"x":30,"y":65}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0)\r
      ? customData\r
      : DEFAULT_DATA // 'LineChart')\r
\r
    const maxX = d3.max(data, (d) => d.x) || 10\r
    const maxY = (d3.max(data, (d) => d.y) || 10) * 1.1\r
\r
    const x = d3.scaleLinear().domain([0, maxX]).range([0, 310])\r
    const y = d3.scaleLinear().domain([0, maxY]).range([230, 0])\r
\r
    const g = svg.append('g').attr('transform', 'translate(50,20)')\r
\r
    // Grid\r
    g.append('g')\r
      .call(d3.axisLeft(y).ticks(5).tickSize(-310).tickPadding(0))\r
      .call((group) => group.select('.domain').remove())\r
      .call((group) => group.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.5))\r
      .call((group) => group.selectAll('text').remove())\r
      .lower()\r
\r
    // Line\r
    const line = d3.line()\r
      .x((d) => x(d.x))\r
      .y((d) => y(d.y))\r
      .curve(d3.curveCatmullRom.alpha(0.5))\r
\r
    g.append('path')\r
      .datum(data)\r
      .attr('d', line)\r
      .attr('fill', 'none')\r
      .attr('stroke', '#6366f1')\r
      .attr('stroke-width', 2.5)\r
\r
    // Area fill\r
    const area = d3.area()\r
      .x((d) => x(d.x))\r
      .y0(230)\r
      .y1((d) => y(d.y))\r
      .curve(d3.curveCatmullRom.alpha(0.5))\r
\r
    g.append('path')\r
      .datum(data)\r
      .attr('d', area)\r
      .attr('fill', 'url(#lineGrad)')\r
      .attr('opacity', 0.3)\r
\r
    const defs = svg.append('defs')\r
    const grad = defs.append('linearGradient').attr('id', 'lineGrad').attr('x1', '0').attr('y1', '0').attr('x2', '0').attr('y2', '1')\r
    grad.append('stop').attr('offset', '0%').attr('stop-color', '#6366f1').attr('stop-opacity', 0.6)\r
    grad.append('stop').attr('offset', '100%').attr('stop-color', '#6366f1').attr('stop-opacity', 0)\r
\r
    // Dots\r
    g.selectAll('circle')\r
      .data(data)\r
      .join('circle')\r
      .attr('cx', (d) => x(d.x))\r
      .attr('cy', (d) => y(d.y))\r
      .attr('r', 4)\r
      .attr('fill', '#6366f1')\r
      .attr('stroke', 'var(--bg)')\r
      .attr('stroke-width', 2)\r
\r
    // Axes\r
    g.append('g')\r
      .attr('transform', 'translate(0,230)')\r
      .call(d3.axisBottom(x).ticks(6).tickSize(0).tickPadding(8))\r
      .call((group) => group.select('.domain').attr('stroke', 'var(--border)'))\r
      .call((group) => group.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    g.append('g')\r
      .call(d3.axisLeft(y).ticks(5).tickSize(0).tickPadding(8))\r
      .call((group) => group.select('.domain').attr('stroke', 'var(--border)'))\r
      .call((group) => group.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};