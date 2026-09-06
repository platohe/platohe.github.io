var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'radial-tree',\r
  title: 'Radial Tree',\r
  desc: 'Radial Tree — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'RadialTree',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-hierarchy"],\r
  tags: ["bars","radial-tree"],\r
}\r
\r
export default function RadialTree({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const DEFAULT_DATA = {"name":"root","children":[{"name":"A","children":[{"name":"A1","children":[{"name":null},{"name":null}]},{"name":"A2"}]},{"name":"B","children":[{"name":"B1"},{"name":"B2","children":[{"name":null}]}]},{"name":"C","children":[{"name":"C1"},{"name":"C2"}]}]}\r
    const data = (customData && ((Array.isArray(customData) && customData.length > 0) || (!Array.isArray(customData) && typeof customData === 'object' && Object.keys(customData).length > 0))) ? customData : DEFAULT_DATA\r
\r
    const width = 380, height = 265\r
    const color = ['#6366f1', '#f59e0b', '#10b981', '#ef4444', '#8b5cf6']\r
\r
    const root = d3.hierarchy(data)\r
    const tree = d3.tree().size([2 * Math.PI, 100])\r
    tree(root)\r
\r
    const sin = (a) => Math.sin(a - Math.PI / 2)\r
    const cos = (a) => Math.cos(a - Math.PI / 2)\r
\r
    const r = 15\r
    const arc = d3.arc()\r
      .startAngle((d) => d.x0 - 0.01)\r
      .endAngle((d) => d.x1 + 0.01)\r
      .innerRadius(r)\r
      .outerRadius(r + 5)\r
\r
    // Links\r
    root.links().forEach((link) => {\r
      const x1 = 200 + sin(link.source.x) * 90\r
      const y1 = 150 + cos(link.source.x) * 90\r
      const x2 = 200 + sin(link.target.x) * 90\r
      const y2 = 150 + cos(link.target.x) * 90\r
      svg.append('path')\r
        .attr('d', \`M\${x1},\${y1}A90,90 0 0,\${link.target.x > link.source.x ? 1 : 0} \${x2},\${y2}\`)\r
        .attr('fill', 'none')\r
        .attr('stroke', 'var(--border)')\r
        .attr('stroke-width', 1.5)\r
    })\r
\r
    // Nodes\r
    root.descendants().forEach((d, i) => {\r
      const x = 200 + sin(d.x) * (d.depth * 30 + 20)\r
      const y = 150 + cos(d.x) * (d.depth * 30 + 20)\r
      const c = color[i % color.length]\r
\r
      svg.append('circle')\r
        .attr('cx', x).attr('cy', y)\r
        .attr('r', d.children ? 8 : 5)\r
        .attr('fill', c).attr('stroke', 'var(--bg)').attr('stroke-width', 1.5)\r
\r
      if (d.data.name !== 'root') {\r
        const labelR = d.depth * 30 + 32\r
        const lx = 200 + sin(d.x) * labelR\r
        const ly = 150 + cos(d.x) * labelR\r
        svg.append('text')\r
          .attr('x', lx).attr('y', ly)\r
          .attr('text-anchor', d.x > Math.PI ? 'end' : 'start')\r
          .attr('dominant-baseline', 'middle')\r
          .attr('fill', 'var(--text-secondary)').attr('font-size', '10px')\r
          .text(d.data.name)\r
      }\r
    })\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};