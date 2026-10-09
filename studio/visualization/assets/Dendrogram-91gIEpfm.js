var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'dendrogram',\r
  title: 'Dendrogram',\r
  desc: 'Dendrogram — a hierarchies chart visualization',\r
  category: 'Hierarchies',\r
  component: 'Dendrogram',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["hierarchies","dendrogram"],\r
}\r
\r
export default function Dendrogram({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    // Dendrogram data\r
    const DEFAULT_DATA = {"name":"Root","children":[{"name":"Cluster A","children":[{"name":"A1","value":10},{"name":"A2","value":15},{"name":"A3","value":12}]},{"name":"Cluster B","children":[{"name":"B1","value":8},{"name":"B2","value":20},{"name":"B3","value":14}]},{"name":"Cluster C","children":[{"name":"C1","value":18},{"name":"C2","value":11}]}]}\r
\r
    const data = (customData && customData.name) ? customData : DEFAULT_DATA\r
\r
    const margin = { top: 30, right: 30, bottom: 50, left: 60 }\r
    const width = 380 - margin.left - margin.right\r
    const height = 265 - margin.top - margin.bottom\r
\r
    const root = d3.hierarchy(data)\r
    \r
    const cluster = d3.cluster()\r
      .size([height, width])\r
\r
    cluster(root)\r
\r
    const g = svg.append('g')\r
      .attr('transform', \`translate(\${margin.left},\${margin.top})\`)\r
\r
    // Draw links\r
    g.selectAll('.link')\r
      .data(root.links())\r
      .join('path')\r
      .attr('class', 'link')\r
      .attr('d', d3.linkHorizontal()\r
        .x(d => d.y)\r
        .y(d => d.x))\r
      .attr('fill', 'none')\r
      .attr('stroke', 'var(--border)')\r
      .attr('stroke-width', 1.5)\r
\r
    // Draw nodes\r
    g.selectAll('.node')\r
      .data(root.descendants())\r
      .join('circle')\r
      .attr('cx', d => d.y)\r
      .attr('cy', d => d.x)\r
      .attr('r', d => d.children ? 4 : 6)\r
      .attr('fill', d => d.children ? '#6366f1' : '#f59e0b')\r
      .attr('stroke', 'var(--bg)')\r
      .attr('stroke-width', 2)\r
      .attr('cursor', 'pointer')\r
      .on('mouseover', function() {\r
        d3.select(this)\r
          .transition()\r
          .duration(200)\r
          .attr('r', d => d.children ? 6 : 8)\r
      })\r
      .on('mouseout', function() {\r
        d3.select(this)\r
          .transition()\r
          .duration(200)\r
          .attr('r', d => d.children ? 4 : 6)\r
      })\r
\r
    // Add labels\r
    g.selectAll('.label')\r
      .data(root.descendants())\r
      .join('text')\r
      .attr('x', d => d.y + 10)\r
      .attr('y', d => d.x + 4)\r
      .attr('fill', 'var(--text-secondary)')\r
      .attr('font-size', '10px')\r
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
      .text('Dendrogram')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}`;export{e as default};