var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'stern-brocot',\r
  title: 'Stern Brocot',\r
  desc: 'Stern Brocot — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'SternBrocot',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","stern-brocot"],\r
}\r
\r
export default function SternBrocot({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const DEFAULT_DATA = 200\r
    const cx = (customData && ((Array.isArray(customData) && customData.length > 0) || (!Array.isArray(customData) && typeof customData === 'object' && Object.keys(customData).length > 0))) ? customData : DEFAULT_DATA\r
    const maxDepth = 4\r
    const color = ['#6366f1', '#f59e0b', '#10b981', '#ef4444', '#8b5cf6', '#06b6d4']\r
\r
    // Build the Stern-Brocot tree of mediants.\r
    function buildTree(left, right, depth) {\r
      const n = left.n + right.n\r
      const d = left.d + right.d\r
      const node = { name: \`\${n}/\${d}\`, children: [] }\r
      if (depth < maxDepth) {\r
        node.children.push(buildTree(left, { n, d }, depth + 1))\r
        node.children.push(buildTree({ n, d }, right, depth + 1))\r
      }\r
      return node\r
    }\r
\r
    const root = d3.hierarchy(buildTree({ n: 0, d: 1 }, { n: 1, d: 0 }, 0))\r
    const tree = d3.tree().size([H - 40, W - 80])\r
    tree(root)\r
    const centerShift = (typeof cx === 'number' ? cx : 200) - 200\r
\r
    // Links\r
    root.links().forEach((link) => {\r
      svg.append('line')\r
        .attr('x1', link.source.y + 40 + centerShift).attr('y1', link.source.x + 20)\r
        .attr('x2', link.target.y + 40 + centerShift).attr('y2', link.target.x + 20)\r
        .attr('stroke', 'var(--border)')\r
        .attr('stroke-width', 1)\r
    })\r
\r
    // Nodes\r
    root.descendants().forEach((d) => {\r
      const x = d.y + 40 + centerShift\r
      const y = d.x + 20\r
      svg.append('circle')\r
        .attr('cx', x).attr('cy', y)\r
        .attr('r', 8)\r
        .attr('fill', color[d.depth % color.length])\r
        .attr('opacity', 0.8)\r
        .attr('stroke', 'var(--bg)').attr('stroke-width', 1.5)\r
\r
      svg.append('text')\r
        .attr('x', x).attr('y', y + 3)\r
        .attr('text-anchor', 'middle').attr('dominant-baseline', 'middle')\r
        .attr('fill', 'white').attr('font-size', '9px').attr('font-weight', 600)\r
        .text(d.data.name)\r
    })\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};