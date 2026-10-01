var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'area-chart',\r
  title: 'Area Chart',\r
  desc: 'Area Chart — a areas chart visualization',\r
  category: 'Areas',\r
  component: 'AreaChart',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["areas","area-chart"],\r
}\r
\r
export default function AreaChart({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const DEFAULT_DATA = [{"x":0,"y":39.017},{"x":1,"y":44.513},{"x":2,"y":57.134},{"x":3,"y":58.687},{"x":4,"y":52.614},{"x":5,"y":56.085},{"x":6,"y":47.608},{"x":7,"y":46.071},{"x":8,"y":41.815},{"x":9,"y":28.234},{"x":10,"y":18.613},{"x":11,"y":24.199},{"x":12,"y":21.263},{"x":13,"y":16.936},{"x":14,"y":20.333},{"x":15,"y":31.923},{"x":16,"y":42.63},{"x":17,"y":49.042},{"x":18,"y":45.931},{"x":19,"y":56.42},{"x":20,"y":62.347},{"x":21,"y":47.86},{"x":22,"y":50.583},{"x":23,"y":34.931}]\r
    const data = (customData && ((Array.isArray(customData) && customData.length > 0) || (!Array.isArray(customData) && typeof customData === 'object' && Object.keys(customData).length > 0))) ? customData : DEFAULT_DATA\r
\r
    // Detect time/value keys from data shape\r
    const timeKey = data[0] && data[0].x !== undefined ? 'x' : null\r
    const valKey = data[0] && data[0].y !== undefined ? 'y' : (data[0] ? Object.keys(data[0]).find(k => typeof data[0][k] === 'number') : null)\r
    const x = d3.scaleLinear().domain(timeKey ? d3.extent(data, d => d[timeKey]) : [0, data.length - 1]).range([40, 360])\r
    const y = d3.scaleLinear().domain([0, valKey ? d3.max(data, d => d[valKey]) * 1.1 : 80]).range([250, 20])\r
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
    const area = d3.area()\r
      .x((d) => x(d[timeKey]) + 50)\r
      .y0(270)\r
      .y1((d) => y(d[valKey]) + 20)\r
      .curve(d3.curveCatmullRom.alpha(0.5))\r
\r
    const defs = svg.append('defs')\r
    const grad = defs.append('linearGradient').attr('id', 'areaGrad').attr('x1', '0').attr('y1', '0').attr('x2', '0').attr('y2', '1')\r
    grad.append('stop').attr('offset', '0%').attr('stop-color', '#6366f1').attr('stop-opacity', 0.5)\r
    grad.append('stop').attr('offset', '100%').attr('stop-color', '#6366f1').attr('stop-opacity', 0.05)\r
\r
    svg.append('path')\r
      .datum(data)\r
      .attr('d', area)\r
      .attr('fill', 'url(#areaGrad)')\r
\r
    const line = d3.line()\r
      .x((d) => x(d[timeKey]) + 50)\r
      .y((d) => y(d[valKey]) + 20)\r
      .curve(d3.curveCatmullRom.alpha(0.5))\r
\r
    svg.append('path')\r
      .datum(data)\r
      .attr('d', line)\r
      .attr('fill', 'none')\r
      .attr('stroke', '#6366f1')\r
      .attr('stroke-width', 2)\r
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