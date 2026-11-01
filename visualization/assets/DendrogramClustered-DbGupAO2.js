var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH } from './utils'\r
\r
export const meta = {\r
  id: 'dendrogram-clustered',\r
  title: 'Dendrogram Clustered',\r
  desc: 'Dendrogram Clustered — a hierarchies chart visualization',\r
  category: 'Hierarchies',\r
  component: 'DendrogramClustered',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-hierarchy"],\r
  tags: ["hierarchies","dendrogram-clustered"],\r
}\r
\r
export default function DendrogramClustered({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"name":"Mammals","children":[{"name":"Primates","children":[{"name":"Human"},{"name":"Chimp"}]},{"name":"Carnivora","children":[{"name":"Dog"},{"name":"Cat"}]},{"name":"Cetacea","children":[{"name":"Whale"},{"name":"Dolphin"}]}]},{"name":"Birds","children":[{"name":"Passerines","children":[{"name":"Sparrow"},{"name":"Robin"}]},{"name":"Raptors","children":[{"name":"Eagle"},{"name":"Hawk"}]}]},{"name":"Reptiles","children":[{"name":"Squamata","children":[{"name":"Lizard"},{"name":"Snake"}]},{"name":"Testudines","children":[{"name":"Turtle"}]}]}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (customData && typeof customData === 'object' && customData.name) ? customData : DEFAULT_DATA\r
\r
    const width = IW\r
    const height = IH\r
\r
    const root = d3.hierarchy(Array.isArray(data) ? { name: 'Root', children: data } : data)\r
    const tree = d3.tree().size([height, width])\r
    tree(root)\r
\r
    const color = d3.scaleOrdinal(['#6366f1', '#f59e0b', '#10b981', '#ef4444', '#8b5cf6', '#06b6d4'])\r
\r
    const g = svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
\r
    // Links\r
    g.selectAll('.link')\r
      .data(root.links())\r
      .join('path')\r
        .attr('class', 'link')\r
        .attr('fill', 'none')\r
        .attr('stroke', 'var(--border)')\r
        .attr('stroke-width', 1.5)\r
        .attr('d', d => {\r
          const path = \`M\${d.source.y},\${d.source.x}\r
            C\${d.source.y + (d.target.y - d.source.y) / 2},\${d.source.x}\r
             \${d.target.y - (d.target.y - d.source.y) / 2},\${d.target.x}\r
             \${d.target.y},\${d.target.x}\`\r
          return path\r
        })\r
\r
    // Nodes\r
    const node = g.selectAll('.node')\r
      .data(root.descendants())\r
      .join('g')\r
        .attr('class', 'node')\r
        .attr('transform', d => \`translate(\${d.y},\${d.x})\`)\r
\r
    node.filter(d => !d.children)\r
      .append('circle')\r
        .attr('r', 4)\r
        .attr('fill', d => color(d.data.name))\r
        .attr('stroke', 'var(--bg)').attr('stroke-width', 1.5)\r
\r
    node.filter(d => !d.children)\r
      .append('text')\r
        .attr('dy', d => d.depth === 0 ? -12 : 4)\r
        .attr('dx', d => d.depth === 0 ? 0 : 8)\r
        .attr('text-anchor', d => d.depth === 0 ? 'middle' : 'start')\r
        .attr('fill', d => d.depth === 0 ? 'var(--text)' : 'var(--text-secondary)')\r
        .attr('font-size', d => d.depth === 0 ? '10px' : '8px')\r
        .attr('font-weight', d => d.depth === 0 ? 600 : 400)\r
        .text(d => d.data.name);\r
\r
    // Cluster background for root level (extent of each subtree → always positive height);\r
    (root.children || []).forEach((child, i) => {\r
      const xs = child.descendants().map(d => d.x)\r
      const x0 = Math.min(...xs) - 5\r
      const x1 = Math.max(...xs) + 5\r
      g.append('rect')\r
        .attr('x', 0).attr('y', x0)\r
        .attr('width', IW).attr('height', x1 - x0)\r
        .attr('fill', color(i % color.length)).attr('fill-opacity', 0.05)\r
        .attr('rx', 4)\r
    })\r
  }, [customData])\r
\r
  return (\r
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\r
      <svg ref={ref} viewBox={\`0 0 \${W} \${H}\`} style={{ width: '100%', height: '100%', maxWidth: '500px' }} />\r
    </div>\r
  )\r
}\r
`;export{e as default};