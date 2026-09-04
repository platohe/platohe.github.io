var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'arc-diagram-clustered',\r
  title: 'Arc Diagram Clustered',\r
  desc: 'Arc Diagram Clustered — a networks chart visualization',\r
  category: 'Networks',\r
  component: 'ArcDiagramClustered',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-hierarchy","d3-shape"],\r
  tags: ["networks","arc-diagram-clustered"],\r
}\r
\r
export default function ArcDiagramClustered({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = {"nodes":[{"id":"A1","group":"A"},{"id":"A2","group":"A"},{"id":"A3","group":"A"},{"id":"B1","group":"B"},{"id":"B2","group":"B"},{"id":"C1","group":"C"},{"id":"C2","group":"C"},{"id":"C3","group":"C"},{"id":"C4","group":"C"}],"links":[{"source":"A1","target":"A2","value":5},{"source":"A1","target":"A3","value":3},{"source":"A2","target":"A3","value":4},{"source":"B1","target":"B2","value":6},{"source":"C1","target":"C2","value":3},{"source":"C1","target":"C3","value":2},{"source":"C2","target":"C4","value":4},{"source":"C3","target":"C4","value":5},{"source":"A1","target":"B1","value":2},{"source":"B2","target":"C1","value":1}]}\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (customData && customData.nodes && customData.links) ? customData : DEFAULT_DATA\r
\r
    const width = W - 60\r
    const height = 200\r
    const margin = { top: 60, bottom: 20 }\r
\r
    const nodes = data.nodes\r
    const x = d3.scaleBand().domain(nodes.map(d => d.id)).range([0, width]).padding(0.1)\r
    const y = d3.scaleLinear().domain([0, d3.max(data.links, d => d.value) || 10]).range([height - margin.bottom, margin.top])\r
\r
    const g = svg.append('g').attr('transform', 'translate(30,0)')\r
\r
    const color = d3.scaleOrdinal(['#6366f1', '#f59e0b', '#10b981', '#ef4444'])\r
\r
    // Draw arcs\r
    data.links.forEach(d => {\r
      const sx = x(d.source) + x.bandwidth() / 2\r
      const tx = x(d.target) + x.bandwidth() / 2\r
      const mx = (sx + tx) / 2\r
      const arcH = y(d.value)\r
\r
      g.append('path')\r
        .attr('d', \`M\${sx},\${height - margin.bottom} Q\${mx},\${arcH} \${tx},\${height - margin.bottom}\`)\r
        .attr('fill', 'none')\r
        .attr('stroke', color(nodes.find(n => n.id === d.source)?.group || 'A'))\r
        .attr('stroke-width', d.value * 0.5)\r
        .attr('stroke-opacity', 0.6)\r
    })\r
\r
    // Draw nodes\r
    nodes.forEach(n => {\r
      const cx = x(n.id) + x.bandwidth() / 2\r
      g.append('circle')\r
        .attr('cx', cx).attr('cy', height - margin.bottom)\r
        .attr('r', 6).attr('fill', color(n.group)).attr('stroke', 'var(--bg)').attr('stroke-width', 1.5)\r
      g.append('text')\r
        .attr('x', cx).attr('y', height - margin.bottom + 14)\r
        .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '8px')\r
        .text(n.id)\r
    })\r
\r
    // Cluster labels\r
    const groups = [...new Set(nodes.map(n => n.group))]\r
    groups.forEach(groupName => {\r
      const clusterNodes = nodes.filter(n => n.group === groupName)\r
      const midX = (x(clusterNodes[0].id) + x(clusterNodes[clusterNodes.length - 1].id)) / 2 + x.bandwidth() / 2\r
      g.append('text')\r
        .attr('x', midX).attr('y', 10)\r
        .attr('text-anchor', 'middle').attr('fill', color(groupName)).attr('font-size', '9px').attr('font-weight', 600)\r
        .text(\`Cluster \${groupName}\`)\r
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