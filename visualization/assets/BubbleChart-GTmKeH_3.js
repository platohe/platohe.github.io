var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'bubble-chart',\r
  title: 'Bubble Chart',\r
  desc: 'Bubble Chart — a dots chart visualization',\r
  category: 'Dots',\r
  component: 'BubbleChart',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["dots","bubble-chart"],\r
}\r
\r
export default function BubbleChart({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const DEFAULT_DATA = [{"x":20,"y":30,"r":15,"label":"Alpha","color":"#6366f1"},{"x":40,"y":70,"r":25,"label":"Beta","color":"#f59e0b"},{"x":60,"y":45,"r":10,"label":"Gamma","color":"#10b981"},{"x":80,"y":85,"r":30,"label":"Delta","color":"#ef4444"}]\r
\r
    const data = (customData && Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
\r
    const x = d3.scaleLinear().domain([0, 100]).range([0, 310])\r
    const y = d3.scaleLinear().domain([0, 100]).range([230, 0])\r
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
    g.selectAll('circle')\r
      .data(data)\r
      .join('circle')\r
      .attr('cx', (d) => x(d.x || 0))\r
      .attr('cy', (d) => y(d.y || 0))\r
      .attr('r', (d) => d.r || d.radius || 15)\r
      .attr('fill', (d, i) => d.color || ['#6366f1', '#f59e0b', '#10b981', '#ef4444'][i % 4])\r
      .attr('opacity', 0.75)\r
      .attr('stroke', 'var(--bg)')\r
      .attr('stroke-width', 1.5)\r
\r
    g.selectAll('text')\r
      .data(data)\r
      .join('text')\r
      .attr('x', (d) => x(d.x || 0))\r
      .attr('y', (d) => y(d.y || 0))\r
      .attr('text-anchor', 'middle')\r
      .attr('dominant-baseline', 'middle')\r
      .attr('fill', '#ffffff')\r
      .attr('font-size', '10px')\r
      .attr('font-weight', 600)\r
      .text((d) => d.label || d.name || '')\r
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