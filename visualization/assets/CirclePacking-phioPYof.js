var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'circle-packing',\r
  title: 'Circle Packing',\r
  desc: 'Circle Packing — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'CirclePacking',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-hierarchy"],\r
  tags: ["bars","circle-packing"],\r
}\r
\r
export default function CirclePacking({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const DEFAULT_DATA = {"name":"root","children":[{"name":"Web","children":[{"name":"React","value":95},{"name":"Vue","value":72},{"name":"Svelte","value":38}]},{"name":"Mobile","children":[{"name":"iOS","value":68},{"name":"Android","value":85}]},{"name":"Backend","children":[{"name":"Node","value":78},{"name":"Go","value":55},{"name":"Rust","value":42}]},{"name":"Data","children":[{"name":"Python","value":90},{"name":"R","value":35}]}]}\r
    const data = (customData && ((Array.isArray(customData) && customData.length > 0) || (!Array.isArray(customData) && typeof customData === 'object' && Object.keys(customData).length > 0))) ? customData : DEFAULT_DATA\r
\r
    const width = 380, height = 270\r
    const color = d3.scaleOrdinal()\r
      .domain(['Web', 'Mobile', 'Backend', 'Data'])\r
      .range(['#6366f1', '#f59e0b', '#10b981', '#ef4444'])\r
\r
    const root = d3.hierarchy(data)\r
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
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};