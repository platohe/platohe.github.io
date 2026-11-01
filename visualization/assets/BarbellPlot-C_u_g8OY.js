var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'barbell-plot',\r
  title: 'Barbell Plot',\r
  desc: 'Barbell Plot — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'BarbellPlot',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["bars","barbell-plot"],\r
}\r
\r
export default function BarbellPlot({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"category":"React","left":72,"right":91},{"category":"Vue","left":65,"right":82},{"category":"Angular","left":58,"right":70},{"category":"Svelte","left":45,"right":78},{"category":"Solid","left":38,"right":65}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
    const margin = { top: 30, right: 40, bottom: 30, left: 80 }\r
    const w = W - margin.left - margin.right\r
    const rowH = (H - margin.top - margin.bottom) / data.length\r
\r
    const x = d3.scaleLinear().domain([0, 100]).range([0, w])\r
    const y = d3.scaleBand().domain(data.map(d => d.category)).range([0, H - margin.top - margin.bottom]).padding(0.4)\r
\r
    const g = svg.append('g').attr('transform', \`translate(\${margin.left},\${margin.top})\`)\r
\r
    data.forEach(d => {\r
      const gy = y(d.category) + y.bandwidth() / 2\r
\r
      // Connecting line\r
      g.append('line')\r
        .attr('x1', x(d.left)).attr('x2', x(d.right))\r
        .attr('y1', gy).attr('y2', gy)\r
        .attr('stroke', 'var(--border)').attr('stroke-width', 2)\r
\r
      // Left circle\r
      g.append('circle').attr('cx', x(d.left)).attr('cy', gy).attr('r', 7)\r
        .attr('fill', colors[0]).attr('stroke', 'var(--bg)').attr('stroke-width', 2)\r
      g.append('text').attr('x', x(d.left)).attr('y', gy - 12)\r
        .attr('text-anchor', 'middle').attr('fill', colors[0]).attr('font-size', '9px').attr('font-weight', 600)\r
        .text(d.left)\r
\r
      // Right circle\r
      g.append('circle').attr('cx', x(d.right)).attr('cy', gy).attr('r', 7)\r
        .attr('fill', colors[1]).attr('stroke', 'var(--bg)').attr('stroke-width', 2)\r
      g.append('text').attr('x', x(d.right)).attr('y', gy - 12)\r
        .attr('text-anchor', 'middle').attr('fill', colors[1]).attr('font-size', '9px').attr('font-weight', 600)\r
        .text(d.right)\r
    })\r
\r
    g.append('g').attr('transform', \`translate(0,\${H - margin.top - margin.bottom})\`)\r
      .call(d3.axisBottom(x).ticks(5).tickSize(0).tickPadding(6))\r
      .call(gr => gr.select('.domain').remove())\r
      .call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '9px'))\r
\r
    g.append('g').call(d3.axisLeft(y).tickSize(0).tickPadding(8))\r
      .call(gr => gr.select('.domain').remove())\r
      .call(gr => gr.selectAll('text').attr('fill', 'var(--text)').attr('font-size', '10px'))\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};