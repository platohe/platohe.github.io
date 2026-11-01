var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'circle-packing-rollup',\r
  title: 'Circle Packing Rollup',\r
  desc: 'Circle Packing Rollup — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'CirclePackingRollup',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-hierarchy"],\r
  tags: ["bars","circle-packing-rollup"],\r
}\r
\r
export default function CirclePackingRollup({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    // Flat data that will be rolled up\r
    const DEFAULT_DATA = [{"category":"Web","name":"React","value":95},{"category":"Web","name":"Vue","value":72},{"category":"Web","name":"Svelte","value":38},{"category":"Web","name":"Angular","value":45},{"category":"Mobile","name":"iOS","value":68},{"category":"Mobile","name":"Android","value":85},{"category":"Mobile","name":"Flutter","value":55},{"category":"Backend","name":"Node","value":78},{"category":"Backend","name":"Go","value":55},{"category":"Backend","name":"Rust","value":42},{"category":"Backend","name":"Python","value":65},{"category":"Data","name":"Python","value":90},{"category":"Data","name":"R","value":35},{"category":"Data","name":"Julia","value":28},{"category":"Data","name":"SQL","value":70}]\r
\r
    const data = (Array.isArray(customData) && customData.length > 0) ? customData : DEFAULT_DATA\r
\r
    const width = 380, height = 270\r
    const color = d3.scaleOrdinal()\r
      .domain(['Web', 'Mobile', 'Backend', 'Data'])\r
      .range(['#6366f1', '#f59e0b', '#10b981', '#ef4444'])\r
\r
    // Use d3.rollup to aggregate data by category\r
    const rolledUp = d3.rollup(\r
      data,\r
      (v) => ({\r
        name: v[0].category,\r
        children: v.map(d => ({ name: d.name, value: d.value }))\r
      }),\r
      (d) => d.category\r
    )\r
\r
    // Convert to hierarchy format\r
    const hierarchyData = {\r
      name: 'root',\r
      children: Array.from(rolledUp.values())\r
    }\r
\r
    const root = d3.hierarchy(hierarchyData)\r
      .sum((d) => d.value)\r
      .sort((a, b) => b.value - a.value)\r
\r
    d3.pack()\r
      .size([width, height])\r
      .padding(3)(root)\r
\r
    const nodes = root.descendants()\r
\r
    nodes.forEach((d) => {\r
      const r = Math.max(d.r - 1, 2)\r
      if (d.depth === 0) return\r
\r
      const parentColor = d.depth === 1 ? color(d.data.name) : null\r
\r
      svg.append('circle')\r
        .attr('cx', d.x + 50).attr('cy', d.y + 15)\r
        .attr('r', r)\r
        .attr('fill', parentColor || 'var(--bg-secondary)')\r
        .attr('stroke', parentColor || 'var(--border)')\r
        .attr('stroke-width', 1.5)\r
        .attr('opacity', parentColor ? 0.8 : 0.5)\r
        .attr('cursor', 'pointer')\r
        .on('mouseover', function() {\r
          d3.select(this)\r
            .transition()\r
            .duration(200)\r
            .attr('stroke-width', 3)\r
            .attr('opacity', 1)\r
        })\r
        .on('mouseout', function() {\r
          d3.select(this)\r
            .transition()\r
            .duration(200)\r
            .attr('stroke-width', 1.5)\r
            .attr('opacity', parentColor ? 0.8 : 0.5)\r
        })\r
\r
      if (d.children) {\r
        // Parent label\r
        svg.append('text')\r
          .attr('x', d.x + 50).attr('y', d.y + 15 + 4)\r
          .attr('text-anchor', 'middle').attr('dominant-baseline', 'middle')\r
          .attr('fill', parentColor).attr('font-size', '10px').attr('font-weight', 700)\r
          .text(d.data.name)\r
      } else {\r
        if (r > 10) {\r
          svg.append('text')\r
            .attr('x', d.x + 50).attr('y', d.y + 15 + 4)\r
            .attr('text-anchor', 'middle').attr('dominant-baseline', 'middle')\r
            .attr('fill', parentColor).attr('font-size', '9px').attr('font-weight', 600)\r
            .text(d.data.name)\r
        }\r
      }\r
    })\r
\r
    // Add title showing the rollup technique\r
    svg.append('text')\r
      .attr('x', 200)\r
      .attr('y', 295)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text-secondary)')\r
      .attr('font-size', '10px')\r
      .text('Using d3.rollup for data aggregation')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}`;export{e as default};