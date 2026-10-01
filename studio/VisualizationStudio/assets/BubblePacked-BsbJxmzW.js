var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH } from './utils'\r
\r
export const meta = {\r
  id: 'bubble-packed',\r
  title: 'Bubble Packed',\r
  desc: 'Bubble Packed — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'BubblePacked',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-hierarchy"],\r
  tags: ["bars","bubble-packed"],\r
}\r
\r
export default function BubblePacked({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = {"name":"root","children":[{"name":"Electronics","children":[{"name":"Phones","value":40},{"name":"Laptops","value":30},{"name":"Tablets","value":20}]},{"name":"Clothing","children":[{"name":"Men","value":35},{"name":"Women","value":45},{"name":"Kids","value":15}]},{"name":"Food","children":[{"name":"Organic","value":25},{"name":"Snacks","value":20}]}]}\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (customData && customData.name) ? customData : DEFAULT_DATA\r
\r
    const width = IW\r
    const height = IH\r
    const color = d3.scaleOrdinal(['#6366f1', '#f59e0b', '#10b981', '#ef4444', '#8b5cf6'])\r
\r
    const root = d3.hierarchy(data)\r
      .sum(d => d.value || 1)\r
      .sort((a, b) => (b.value || 1) - (a.value || 1))\r
\r
    d3.pack()\r
      .size([width, height])\r
      .padding(3)(root)\r
\r
    const g = svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
\r
    const circle = g.selectAll('circle')\r
      .data(root.descendants())\r
      .join('circle')\r
        .attr('cx', d => d.x)\r
        .attr('cy', d => d.y)\r
        .attr('r', d => d.r)\r
        .attr('fill', d => d.children ? color(d.depth % color.length) : color(0))\r
        .attr('fill-opacity', d => d.children ? 0.8 : 0.6)\r
        .attr('stroke', 'var(--bg)').attr('stroke-width', 1.5)\r
\r
    circle.filter(d => !d.children)\r
      .append('title')\r
        .text(d => \`\${d.data.name}: \${d.data.value}\`)\r
\r
    g.selectAll('text')\r
      .data(root.descendants())\r
      .join('text')\r
        .attr('x', d => d.x)\r
        .attr('y', d => d.y)\r
        .attr('text-anchor', 'middle')\r
        .attr('dominant-baseline', 'middle')\r
        .attr('fill', '#fff')\r
        .attr('font-size', d => d.r > 20 ? '9px' : '7px')\r
        .attr('font-weight', 600)\r
        .attr('pointer-events', 'none')\r
        .text(d => d.children ? d.data.name : d.data.name)\r
  }, [customData])\r
\r
  return (\r
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\r
      <svg ref={ref} viewBox={\`0 0 \${W} \${H}\`} style={{ width: '100%', height: '100%', maxWidth: '500px' }} />\r
    </div>\r
  )\r
}\r
`;export{e as default};