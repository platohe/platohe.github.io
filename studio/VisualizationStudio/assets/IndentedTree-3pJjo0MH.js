var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'indented-tree',\r
  title: 'Indented Tree',\r
  desc: 'Indented Tree — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'IndentedTree',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-hierarchy"],\r
  tags: ["bars","indented-tree"],\r
}\r
\r
export default function IndentedTree({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const DEFAULT_DATA = {"name":"project","children":[{"name":"src","children":[{"name":"components","children":[{"name":null},{"name":null}]},{"name":"pages","children":[{"name":null},{"name":null}]},{"name":"utils.js"}]},{"name":"package.json"},{"name":"README.md"}]}\r
    const data = (customData && ((Array.isArray(customData) && customData.length > 0) || (!Array.isArray(customData) && typeof customData === 'object' && Object.keys(customData).length > 0))) ? customData : DEFAULT_DATA\r
\r
    const width = 380, height = 265\r
    const color = ['#6366f1', '#f59e0b', '#10b981', '#ef4444', '#8b5cf6', '#06b6d4']\r
\r
    const root = d3.hierarchy(data)\r
    root.sum(() => 1)\r
    d3.tree().size([height - 20, width - 80])(root)\r
\r
    root.each((d) => {\r
      const x = d.x + 30\r
      const y = d.y + 10\r
      const indent = d.depth * 24\r
\r
      // Connector line\r
      if (d.depth > 0) {\r
        const parentX = d.parent.x + 30\r
        const parentY = d.parent.y + 10\r
        svg.append('path')\r
          .attr('d', \`M\${parentX},\${parentY + 8}H\${parentX + 8}V\${y + 4}H\${x}\`)\r
          .attr('fill', 'none')\r
          .attr('stroke', 'var(--border)')\r
          .attr('stroke-width', 1.5)\r
      }\r
\r
      // Node dot\r
      svg.append('circle')\r
        .attr('cx', x).attr('cy', y + 4)\r
        .attr('r', d.children ? 4 : 3)\r
        .attr('fill', color[d.depth % color.length])\r
\r
      // Label\r
      svg.append('text')\r
        .attr('x', x + 10).attr('y', y + 8)\r
        .attr('fill', 'var(--text)').attr('font-size', '12px')\r
        .text(d.data.name)\r
    })\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};