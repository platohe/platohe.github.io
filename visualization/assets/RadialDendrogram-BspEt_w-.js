var e=`import { useRef, useEffect } from 'react'\r
import * as d3 from 'd3'\r
import { defaultDataMap } from './defaultData'\r
\r
export const meta = {\r
  id: 'radial-dendrogram',\r
  title: 'Radial Dendrogram',\r
  desc: 'Radial Dendrogram — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'RadialDendrogram',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","radial-dendrogram"],\r
}\r
\r
export default function RadialDendrogram({ data }) {\r
  const svgRef = useRef(null)\r
\r
  useEffect(() => {\r
    if (!svgRef.current) return\r
\r
    const chartData = data || defaultDataMap.RadialDendrogram\r
    const width = 500\r
    const height = 500\r
    const radius = width / 2 - 60\r
\r
    const root = d3.hierarchy(chartData)\r
\r
    d3.cluster()\r
      .size([2 * Math.PI, radius])(root)\r
\r
    const svg = d3.select(svgRef.current)\r
      .attr('viewBox', [-width / 2, -height / 2, width, height])\r
      .style('font', '10px sans-serif')\r
\r
    svg.selectAll('*').remove()\r
\r
    // Links\r
    svg.append('g')\r
      .attr('fill', 'none')\r
      .attr('stroke', '#475569')\r
      .attr('stroke-width', 1.5)\r
      .selectAll('path')\r
      .data(root.links())\r
      .join('path')\r
        .attr('d', d3.linkRadial()\r
          .angle(d => d.x)\r
          .radius(d => d.y))\r
\r
    // Nodes\r
    const node = svg.append('g')\r
      .selectAll('g')\r
      .data(root.descendants())\r
      .join('g')\r
        .attr('transform', d => \`rotate(\${d.x * 180 / Math.PI - 90}) translate(\${d.y},0)\`)\r
\r
    node.append('circle')\r
      .attr('r', 4)\r
      .attr('fill', d => d.children ? '#6366f1' : '#10b981')\r
      .attr('stroke', '#0f172a')\r
      .attr('stroke-width', 1.5)\r
\r
    node.append('text')\r
      .attr('dy', '0.32em')\r
      .attr('x', d => d.x < Math.PI === !d.children ? 8 : -8)\r
      .attr('text-anchor', d => d.x < Math.PI === !d.children ? 'start' : 'end')\r
      .attr('transform', d => d.x >= Math.PI ? 'rotate(180)' : null)\r
      .attr('fill', '#cbd5e1')\r
      .text(d => d.data.name)\r
\r
  }, [data])\r
\r
  return (\r
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\r
      <svg ref={svgRef} style={{ width: '100%', height: '100%', maxHeight: '450px' }} />\r
    </div>\r
  )\r
}\r
`;export{e as default};