var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'edge-bundling',\r
  title: 'Edge Bundling',\r
  desc: 'Edge Bundling — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'EdgeBundling',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","edge-bundling"],\r
}\r
\r
export default function EdgeBundling({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const width = 380, height = 265\r
    const DEFAULT_DATA = 100\r
    const cx = 200, cy = 145\r
\r
    // Create hierarchical data with leaf nodes\r
    const depth = 3, leavesPerNode = 4\r
    const nodes = []\r
    let id = 0\r
\r
    function makeTree(d) {\r
      const angle = Math.random() * 2 * Math.PI\r
      const r = 30 + d * 35\r
      const node = { x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle), depth: d, id: id++ }\r
      nodes.push(node)\r
      if (d < depth) {\r
        node.children = Array.from({ length: leavesPerNode }, () => makeTree(d + 1))\r
        return node\r
      }\r
      return node\r
    }\r
    const radius = (customData && ((Array.isArray(customData) && customData.length > 0) || (!Array.isArray(customData) && typeof customData === 'object' && Object.keys(customData).length > 0))) ? customData : DEFAULT_DATA\r
\r
    makeTree(0)\r
    const leaves = nodes.filter((n) => n.depth === depth)\r
\r
    // Create edges between random leaves that share a parent at depth 2\r
    const edges = []\r
    for (let i = 0; i < 30; i++) {\r
      const a = leaves[Math.floor(Math.random() * leaves.length)]\r
      let b = leaves[Math.floor(Math.random() * leaves.length)]\r
      while (b === a) b = leaves[Math.floor(Math.random() * leaves.length)]\r
      edges.push({ source: a, target: b })\r
    }\r
\r
    const color = d3.scaleOrdinal()\r
      .domain(d3.range(4))\r
      .range(['#6366f1', '#f59e0b', '#10b981', '#ef4444'])\r
\r
    // Draw edges as quadratic curves\r
    edges.forEach((e, i) => {\r
      const mx = (e.source.x + e.target.x) / 2\r
      const my = (e.source.y + e.target.y) / 2 - 30\r
      svg.append('path')\r
        .attr('d', \`M\${e.source.x},\${e.source.y}Q\${mx},\${my} \${e.target.x},\${e.target.y}\`)\r
        .attr('fill', 'none')\r
        .attr('stroke', color[i % 4])\r
        .attr('stroke-opacity', 0.4)\r
        .attr('stroke-width', 1.5)\r
    })\r
\r
    // Draw nodes\r
    nodes.forEach((n) => {\r
      svg.append('circle')\r
        .attr('cx', n.x).attr('cy', n.y)\r
        .attr('r', n.depth === 0 ? 6 : n.depth === depth ? 4 : 3)\r
        .attr('fill', n.depth === 0 ? '#6366f1' : n.depth === depth ? color[n.id % 4] : '#94a3b8')\r
        .attr('opacity', n.depth === 0 ? 1 : 0.8)\r
    })\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};