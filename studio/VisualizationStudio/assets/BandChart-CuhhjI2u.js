var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'band-chart',\r
  title: 'Band Chart',\r
  desc: 'Band Chart — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'BandChart',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","band-chart"],\r
}\r
\r
export default function BandChart({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const DEFAULT_DATA = [{"x":0,"lower":10,"upper":25},{"x":1,"lower":15,"upper":32},{"x":2,"lower":12,"upper":28},{"x":3,"lower":22,"upper":45},{"x":4,"lower":18,"upper":38}]\r
\r
    const data = (customData && Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
\r
    const x = d3.scaleLinear().domain([0, data.length - 1]).range([0, 310])\r
    const y = d3.scaleLinear().domain([0, 60]).range([230, 0])\r
\r
    const g = svg.append('g').attr('transform', 'translate(50,20)')\r
\r
    g.append('g')\r
      .call(d3.axisLeft(y).ticks(5).tickSize(-310).tickPadding(0))\r
      .call((group) => group.select('.domain').remove())\r
      .call((group) => group.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.5))\r
      .call((group) => group.selectAll('text').remove())\r
      .lower()\r
\r
    const band = d3.area()\r
      .x((d, i) => x(d.x !== undefined ? d.x : i))\r
      .y0((d) => y(d.lower !== undefined ? d.lower : (d.low !== undefined ? d.low : 10)))\r
      .y1((d) => y(d.upper !== undefined ? d.upper : (d.high !== undefined ? d.high : 30)))\r
      .curve(d3.curveCatmullRom.alpha(0.5))\r
\r
    g.append('path')\r
      .datum(data)\r
      .attr('d', band)\r
      .attr('fill', '#6366f1')\r
      .attr('opacity', 0.25)\r
\r
    const upperLine = d3.line()\r
      .x((d, i) => x(d.x !== undefined ? d.x : i))\r
      .y((d) => y(d.upper !== undefined ? d.upper : (d.high !== undefined ? d.high : 30)))\r
      .curve(d3.curveCatmullRom.alpha(0.5))\r
\r
    const lowerLine = d3.line()\r
      .x((d, i) => x(d.x !== undefined ? d.x : i))\r
      .y((d) => y(d.lower !== undefined ? d.lower : (d.low !== undefined ? d.low : 10)))\r
      .curve(d3.curveCatmullRom.alpha(0.5))\r
\r
    g.append('path').datum(data).attr('d', upperLine).attr('fill', 'none').attr('stroke', '#6366f1').attr('stroke-width', 2)\r
    g.append('path').datum(data).attr('d', lowerLine).attr('fill', 'none').attr('stroke', '#6366f1').attr('stroke-width', 2)\r
\r
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