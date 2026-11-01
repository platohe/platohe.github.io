var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'dorling-cartogram',\r
  title: 'Dorling Cartogram',\r
  desc: 'Dorling Cartogram — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'DorlingCartogram',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","dorling-cartogram"],\r
}\r
\r
export default function DorlingCartogram({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"name":"California","x":75,"y":150,"value":39,"region":"West"},{"name":"Texas","x":195,"y":220,"value":29.5,"region":"South"},{"name":"Florida","x":310,"y":230,"value":21.8,"region":"South"},{"name":"New York","x":330,"y":90,"value":19.8,"region":"Northeast"},{"name":"Pennsylvania","x":315,"y":115,"value":13,"region":"Northeast"},{"name":"Illinois","x":245,"y":125,"value":12.6,"region":"Midwest"},{"name":"Ohio","x":285,"y":125,"value":11.8,"region":"Midwest"},{"name":"Georgia","x":295,"y":195,"value":10.7,"region":"South"},{"name":"North Carolina","x":315,"y":165,"value":10.5,"region":"South"},{"name":"Michigan","x":275,"y":95,"value":10,"region":"Midwest"},{"name":"Washington","x":80,"y":65,"value":7.7,"region":"West"},{"name":"Arizona","x":110,"y":185,"value":7.2,"region":"West"}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0)\r
      ? customData\r
      : DEFAULT_DATA\r
\r
    const rScale = d3.scaleSqrt()\r
      .domain([0, d3.max(data, d => d.value) || 40])\r
      .range([0, 26])\r
\r
    const nodes = data.map((d, i) => ({\r
      ...d,\r
      id: i,\r
      r: rScale(d.value || 10),\r
      x: d.x,\r
      y: d.y,\r
    }))\r
\r
    const regionColors = {\r
      West: '#38bdf8',\r
      South: '#f59e0b',\r
      Midwest: '#10b981',\r
      Northeast: '#a855f7',\r
    }\r
\r
    const g = svg.append('g')\r
\r
    // Force simulation for Dorling cartogram (position anchoring + non-overlap collision)\r
    const simulation = d3.forceSimulation(nodes)\r
      .force('x', d3.forceX(d => d.x).strength(0.6))\r
      .force('y', d3.forceY(d => d.y).strength(0.6))\r
      .force('collide', d3.forceCollide(d => d.r + 1.5).iterations(4))\r
      .stop()\r
\r
    // Run simulation synchronously\r
    for (let i = 0; i < 120; ++i) simulation.tick()\r
\r
    // Draw connecting anchor ticks\r
    g.selectAll('.anchor-line')\r
      .data(nodes)\r
      .join('line')\r
      .attr('x1', d => d.x)\r
      .attr('y1', d => d.y)\r
      .attr('x2', (d) => simulation.nodes().find(n => n.id === d.id)?.x || d.x)\r
      .attr('y2', (d) => simulation.nodes().find(n => n.id === d.id)?.y || d.y)\r
      .attr('stroke', 'var(--border)')\r
      .attr('stroke-dasharray', '2,2')\r
      .attr('stroke-opacity', 0.5)\r
\r
    // Circles\r
    const nodeG = g.selectAll('.node')\r
      .data(nodes)\r
      .join('g')\r
      .attr('transform', d => \`translate(\${d.x},\${d.y})\`)\r
\r
    nodeG.append('circle')\r
      .attr('r', d => d.r)\r
      .attr('fill', d => regionColors[d.region] || '#6366f1')\r
      .attr('fill-opacity', 0.85)\r
      .attr('stroke', '#ffffff')\r
      .attr('stroke-width', 1.2)\r
\r
    nodeG.append('text')\r
      .attr('text-anchor', 'middle')\r
      .attr('y', 2.5)\r
      .attr('fill', '#ffffff')\r
      .attr('font-size', d => Math.max(5.5, d.r * 0.45) + 'px')\r
      .attr('font-weight', '700')\r
      .text(d => d.name.slice(0, 3).toUpperCase())\r
\r
    // Legend\r
    const regions = ['West', 'South', 'Midwest', 'Northeast']\r
    const legG = svg.append('g').attr('transform', \`translate(\${W - 190}, 14)\`)\r
    regions.forEach((reg, idx) => {\r
      legG.append('circle').attr('cx', idx * 48 + 3).attr('cy', 0).attr('r', 3).attr('fill', regionColors[reg])\r
      legG.append('text').attr('x', idx * 48 + 8).attr('y', 2.5).attr('fill', 'var(--text-secondary)').attr('font-size', '6.5px').text(reg)\r
    })\r
\r
    // Header\r
    svg.append('text')\r
      .attr('x', 14)\r
      .attr('y', 18)\r
      .attr('fill', 'var(--text-primary)')\r
      .attr('font-size', '8.5px')\r
      .attr('font-weight', '600')\r
      .text('Dorling Demographic Cartogram')\r
  }, [customData])\r
\r
  return (\r
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\r
      <svg ref={ref} viewBox={\`0 0 \${W} \${H}\`} style={{ width: '100%', height: '100%', maxWidth: '500px' }} />\r
    </div>\r
  )\r
}\r
`;export{e as default};