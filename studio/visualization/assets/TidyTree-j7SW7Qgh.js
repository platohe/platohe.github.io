var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'tidy-tree',\r
  title: 'Tidy Tree',\r
  desc: 'Tidy Tree — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'TidyTree',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-hierarchy"],\r
  tags: ["bars","tidy-tree"],\r
}\r
\r
export default function TidyTree({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const DEFAULT_DATA = {"name":"CEO","children":[{"name":"CTO","children":[{"name":"Frontend Lead","children":[{"name":null,"value":null},{"name":null,"value":null}]},{"name":"Backend Lead","children":[{"name":null,"value":null},{"name":null,"value":null}]}]},{"name":"CFO","children":[{"name":"Accounting","value":6},{"name":"Finance","value":4}]},{"name":"COO","children":[{"name":"HR","value":5},{"name":"Ops","value":7}]}]}\r
    const data = (customData && ((Array.isArray(customData) && customData.length > 0) || (!Array.isArray(customData) && typeof customData === 'object' && Object.keys(customData).length > 0))) ? customData : DEFAULT_DATA\r
\r
    const width = 380, height = 265\r
    const color = ['#6366f1', '#f59e0b', '#10b981', '#ef4444', '#8b5cf6', '#06b6d4', '#ec4899']\r
\r
    const root = d3.hierarchy(data)\r
    const tree = d3.tree().size([height - 20, width - 60])\r
    tree(root)\r
\r
    // Links\r
    root.links().forEach((link) => {\r
      svg.append('path')\r
        .attr('d', \`M\${link.source.x + 30},\${link.source.y + 10}C\${link.source.x + 30},\${(link.source.y + link.target.y) / 2 + 10} \${link.target.x + 30},\${(link.source.y + link.target.y) / 2 + 10} \${link.target.x + 30},\${link.target.y + 10}\`)\r
        .attr('fill', 'none')\r
        .attr('stroke', 'var(--border)')\r
        .attr('stroke-width', 1.5)\r
    })\r
\r
    // Nodes\r
    root.descendants().forEach((d, i) => {\r
      const r = d.children ? 12 : 8\r
      const c = color[i % color.length]\r
      svg.append('circle')\r
        .attr('cx', d.x + 30).attr('cy', d.y + 10)\r
        .attr('r', r)\r
        .attr('fill', c).attr('stroke', 'var(--bg)').attr('stroke-width', 2)\r
\r
      svg.append('text')\r
        .attr('x', d.x + 30 + r + 6).attr('y', d.y + 14)\r
        .attr('fill', 'var(--text)').attr('font-size', '11px')\r
        .text(d.data.name)\r
    })\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};