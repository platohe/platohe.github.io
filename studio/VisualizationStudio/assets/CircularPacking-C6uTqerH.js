var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'circular-packing',\r
  title: 'Circular Packing',\r
  desc: 'Circular Packing — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'CircularPacking',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-hierarchy"],\r
  tags: ["bars","circular-packing"],\r
}\r
\r
export default function CircularPacking({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    // Circular packing data\r
    const DEFAULT_DATA = {"name":"Root","children":[{"name":"Group A","children":[{"name":"A1","value":100},{"name":"A2","value":80},{"name":"A3","value":60},{"name":"A4","value":40}]},{"name":"Group B","children":[{"name":"B1","value":90},{"name":"B2","value":70},{"name":"B3","value":50}]},{"name":"Group C","children":[{"name":"C1","value":85},{"name":"C2","value":65},{"name":"C3","value":45},{"name":"C4","value":30}]}]}\r
\r
    const data = (customData && customData.name) ? customData : DEFAULT_DATA\r
\r
    const width = 380\r
    const height = 265\r
\r
    const root = d3.hierarchy(data)\r
      .sum(d => d.value)\r
      .sort((a, b) => b.value - a.value)\r
\r
    const pack = d3.pack()\r
      .size([width, height])\r
      .padding(3)\r
\r
    pack(root)\r
\r
    const color = d3.scaleOrdinal()\r
      .domain(['Group A', 'Group B', 'Group C'])\r
      .range(['#6366f1', '#f59e0b', '#10b981'])\r
\r
    const g = svg.append('g')\r
      .attr('transform', 'translate(10, 30)')\r
\r
    // Draw circles\r
    g.selectAll('circle')\r
      .data(root.descendants())\r
      .join('circle')\r
      .attr('cx', d => d.x)\r
      .attr('cy', d => d.y)\r
      .attr('r', d => d.r)\r
      .attr('fill', d => d.children ? (d.parent ? color(d.parent.data.name) : '#ef4444') : color(d.parent.data.name))\r
      .attr('opacity', d => d.children ? 0.3 : 0.8)\r
      .attr('stroke', 'var(--bg)')\r
      .attr('stroke-width', 1)\r
      .attr('cursor', 'pointer')\r
      .on('mouseover', function() {\r
        d3.select(this)\r
          .transition()\r
          .duration(200)\r
          .attr('opacity', 1)\r
      })\r
      .on('mouseout', function() {\r
        d3.select(this)\r
          .transition()\r
          .duration(200)\r
          .attr('opacity', d => d.children ? 0.3 : 0.8)\r
      })\r
\r
    // Add labels for leaf nodes\r
    g.selectAll('text')\r
      .data(root.leaves())\r
      .join('text')\r
      .attr('x', d => d.x)\r
      .attr('y', d => d.y)\r
      .attr('text-anchor', 'middle')\r
      .attr('dominant-baseline', 'middle')\r
      .attr('fill', 'white')\r
      .attr('font-size', d => Math.min(12, d.r / 3))\r
      .attr('font-weight', 600)\r
      .text(d => d.data.name)\r
\r
    // Title\r
    svg.append('text')\r
      .attr('x', 200)\r
      .attr('y', 20)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text)')\r
      .attr('font-size', '14px')\r
      .attr('font-weight', 600)\r
      .text('Circular Packing')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}`;export{e as default};