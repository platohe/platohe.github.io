var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'scatter-with-legend',\r
  title: 'Scatter With Legend',\r
  desc: 'Scatter With Legend — a dots chart visualization',\r
  category: 'Dots',\r
  component: 'ScatterWithLegend',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["dots","scatter-with-legend"],\r
}\r
\r
export default function ScatterWithLegend({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"x":20,"y":35,"group":"A","label":"Point 1"},{"x":35,"y":50,"group":"B","label":"Point 2"},{"x":50,"y":28,"group":"A","label":"Point 3"},{"x":65,"y":72,"group":"C","label":"Point 4"},{"x":80,"y":45,"group":"B","label":"Point 5"},{"x":42,"y":60,"group":"A","label":"Point 6"},{"x":58,"y":38,"group":"C","label":"Point 7"},{"x":73,"y":68,"group":"B","label":"Point 8"}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
    const margin = { top: 30, right: 80, bottom: 40, left: 50 }\r
    const w = W - margin.left - margin.right\r
    const h = H - margin.top - margin.bottom\r
\r
    const x = d3.scaleLinear().domain(d3.extent(data, d => d.x)).range([0, w])\r
    const y = d3.scaleLinear().domain(d3.extent(data, d => d.y)).range([h, 0])\r
    const groups = [...new Set(data.map(d => d.group))]\r
    const color = d3.scaleOrdinal(colors).domain(groups)\r
\r
    const g = svg.append('g').attr('transform', \`translate(\${margin.left},\${margin.top})\`)\r
\r
    g.selectAll('.pt').data(data).join('circle')\r
      .attr('cx', d => x(d.x)).attr('cy', d => y(d.y)).attr('r', 6)\r
      .attr('fill', d => color(d.group)).attr('opacity', 0.8)\r
      .attr('stroke', 'var(--bg)').attr('stroke-width', 1.5)\r
      .on('mouseover', function () { d3.select(this).attr('r', 8) })\r
      .on('mouseout', function () { d3.select(this).attr('r', 6) })\r
\r
    // Axis\r
    g.append('g').attr('transform', \`translate(0,\${h})\`)\r
      .call(d3.axisBottom(x).ticks(6)).call(gr => gr.select('.domain').remove())\r
      .call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '9px'))\r
    g.append('g').call(d3.axisLeft(y).ticks(5)).call(gr => gr.select('.domain').remove())\r
      .call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '9px'))\r
\r
    // Legend\r
    const lg = svg.append('g').attr('transform', \`translate(\${margin.left + w + 15},30)\`)\r
    groups.forEach((g, i) => {\r
      lg.append('circle').attr('cx', 0).attr('cy', i * 20).attr('r', 5)\r
        .attr('fill', color(g)).attr('opacity', 0.8)\r
      lg.append('text').attr('x', 12).attr('y', i * 20 + 4)\r
        .attr('fill', 'var(--text)').attr('font-size', '10px').text(g)\r
    })\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};