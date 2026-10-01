var e=`import { useRef, useEffect } from 'react'\r
import * as d3 from 'd3'\r
import { defaultDataMap } from './defaultData'\r
\r
export const meta = {\r
  id: 'cluster-dendrogram',\r
  title: 'Cluster Dendrogram',\r
  desc: 'Cluster Dendrogram — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'ClusterDendrogram',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-hierarchy"],\r
  tags: ["bars","cluster-dendrogram"],\r
}\r
\r
export default function ClusterDendrogram({ data }) {\r
  const svgRef = useRef(null)\r
\r
  useEffect(() => {\r
    if (!svgRef.current) return\r
\r
    const chartData = data || defaultDataMap.ClusterDendrogram\r
    const width = 600\r
    const height = 400\r
    const margin = { top: 20, right: 120, bottom: 20, left: 40 }\r
\r
    const root = d3.hierarchy(chartData)\r
\r
    const clusterLayout = d3.cluster()\r
      .size([height - margin.top - margin.bottom, width - margin.left - margin.right])\r
\r
    clusterLayout(root)\r
\r
    const svg = d3.select(svgRef.current)\r
      .attr('viewBox', [0, 0, width, height])\r
      .style('font', '11px sans-serif')\r
\r
    svg.selectAll('*').remove()\r
\r
    const g = svg.append('g')\r
      .attr('transform', \`translate(\${margin.left},\${margin.top})\`)\r
\r
    // Links\r
    g.append('g')\r
      .attr('fill', 'none')\r
      .attr('stroke', '#475569')\r
      .attr('stroke-width', 1.5)\r
      .selectAll('path')\r
      .data(root.links())\r
      .join('path')\r
        .attr('d', d3.linkHorizontal()\r
          .x(d => d.y)\r
          .y(d => d.x))\r
\r
    // Nodes\r
    const node = g.append('g')\r
      .selectAll('g')\r
      .data(root.descendants())\r
      .join('g')\r
        .attr('transform', d => \`translate(\${d.y},\${d.x})\`)\r
\r
    node.append('circle')\r
      .attr('r', 4)\r
      .attr('fill', d => d.children ? '#6366f1' : '#10b981')\r
      .attr('stroke', '#0f172a')\r
      .attr('stroke-width', 1.5)\r
\r
    node.append('text')\r
      .attr('dy', '0.32em')\r
      .attr('x', d => d.children ? -8 : 8)\r
      .attr('text-anchor', d => d.children ? 'end' : 'start')\r
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