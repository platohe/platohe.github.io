var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'moving-average',\r
  title: 'Moving Average',\r
  desc: 'Moving Average — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'MovingAverage',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","moving-average"],\r
}\r
\r
export default function MovingAverage({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const DEFAULT_DATA = [{"x":0,"y":20},{"x":5,"y":25},{"x":10,"y":22},{"x":15,"y":30},{"x":20,"y":35},{"x":25,"y":28},{"x":30,"y":40},{"x":35,"y":45},{"x":40,"y":42}]\r
\r
    const data = (customData && Array.isArray(customData) && customData.length > 0)\r
      ? customData.map((d, i) => ({ x: d.x !== undefined ? d.x : (d.day !== undefined ? d.day : i * 5), y: d.y !== undefined ? d.y : (d.value !== undefined ? d.value : 20) }))\r
      : DEFAULT_DATA\r
\r
    const x = d3.scaleLinear().domain([0, 40]).range([0, 310])\r
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
    const line = d3.line().x((d) => x(d.x)).y((d) => y(d.y)).curve(d3.curveCatmullRom.alpha(0.5))\r
    g.append('path')\r
      .datum(data)\r
      .attr('d', line)\r
      .attr('fill', 'none')\r
      .attr('stroke', '#94a3b8')\r
      .attr('stroke-width', 1.5).attr('stroke-opacity', 0.6)\r
\r
    const ma = data.map((d, i) => {\r
      const window = data.slice(Math.max(0, i - 2), i + 1)\r
      return { x: d.x, y: d3.mean(window, (v) => v.y) }\r
    })\r
\r
    const maLine = d3.line().x((d) => x(d.x)).y((d) => y(d.y)).curve(d3.curveBasis)\r
    g.append('path')\r
      .datum(ma)\r
      .attr('d', maLine)\r
      .attr('fill', 'none')\r
      .attr('stroke', '#6366f1')\r
      .attr('stroke-width', 2.5)\r
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