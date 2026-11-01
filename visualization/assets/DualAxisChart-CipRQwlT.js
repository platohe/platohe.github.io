var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'dual-axis-chart',\r
  title: 'Dual Axis Chart',\r
  desc: 'Dual Axis Chart — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'DualAxisChart',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["bars","dual-axis-chart"],\r
}\r
\r
export default function DualAxisChart({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"label":"Jan","revenue":120,"profit":35,"growth":8.2},{"label":"Feb","revenue":145,"profit":42,"growth":9.1},{"label":"Mar","revenue":132,"profit":38,"growth":7.5},{"label":"Apr","revenue":168,"profit":55,"growth":12.3},{"label":"May","revenue":185,"profit":62,"growth":14.1},{"label":"Jun","revenue":172,"profit":58,"growth":11.8}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
    const margin = { top: 30, right: 50, bottom: 35, left: 50 }\r
    const w = W - margin.left - margin.right\r
    const h = H - margin.top - margin.bottom\r
\r
    const x = d3.scaleBand().domain(data.map(d => d.label)).range([0, w]).padding(0.3)\r
    const yLeft = d3.scaleLinear().domain([0, d3.max(data, d => d.revenue) * 1.1]).range([h, 0])\r
    const yRight = d3.scaleLinear().domain([0, d3.max(data, d => d.growth) * 1.2]).range([h, 0])\r
\r
    const g = svg.append('g').attr('transform', \`translate(\${margin.left},\${margin.top})\`)\r
\r
    // Bars (revenue)\r
    g.selectAll('.bar').data(data).join('rect')\r
      .attr('x', d => x(d.label)).attr('y', d => yLeft(d.revenue))\r
      .attr('width', x.bandwidth()).attr('height', d => h - yLeft(d.revenue))\r
      .attr('fill', colors[0]).attr('opacity', 0.8).attr('rx', 2)\r
\r
    // Line (growth)\r
    g.append('path')\r
      .datum(data)\r
      .attr('d', d3.line().x(d => x(d.label) + x.bandwidth() / 2).y(d => yRight(d.growth)).curve(d3.curveCatmullRom))\r
      .attr('fill', 'none').attr('stroke', colors[1]).attr('stroke-width', 2.5)\r
\r
    g.selectAll('.dot').data(data).join('circle')\r
      .attr('cx', d => x(d.label) + x.bandwidth() / 2).attr('cy', d => yRight(d.growth)).attr('r', 4)\r
      .attr('fill', colors[1]).attr('stroke', 'var(--bg)').attr('stroke-width', 1.5)\r
\r
    // Left axis\r
    g.append('g').call(d3.axisLeft(yLeft).ticks(5))\r
      .call(gr => gr.select('.domain').remove())\r
      .call(gr => gr.selectAll('text').attr('fill', colors[0]).attr('font-size', '9px'))\r
\r
    // Right axis\r
    g.append('g').attr('transform', \`translate(\${w},0)\`)\r
      .call(d3.axisRight(yRight).ticks(5))\r
      .call(gr => gr.select('.domain').remove())\r
      .call(gr => gr.selectAll('text').attr('fill', colors[1]).attr('font-size', '9px'))\r
\r
    // Bottom axis\r
    g.append('g').attr('transform', \`translate(0,\${h})\`)\r
      .call(d3.axisBottom(x).tickSize(0).tickPadding(8))\r
      .call(gr => gr.select('.domain').remove())\r
      .call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '10px'))\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};