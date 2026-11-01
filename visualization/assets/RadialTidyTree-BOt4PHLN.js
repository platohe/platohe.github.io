var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
// RadialTidyTree: Radial tidy tree.\r
export const meta = {\r
  id: 'radial-tidy-tree',\r
  title: 'Radial Tidy Tree',\r
  desc: 'Radial Tidy Tree — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'RadialTidyTree',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-hierarchy"],\r
  tags: ["bars","radial-tidy-tree"],\r
}\r
\r
export default function RadialTidyTree({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = {"name":"CEO","children":[{"name":"CTO","children":[{"name":"Frontend"},{"name":"Backend"},{"name":"QA"}]},{"name":"CPO","children":[{"name":"Design"},{"name":"Research"}]},{"name":"CFO","children":[{"name":"Accounting"}]}]}\r
    const data = (customData && customData.name) ? customData : DEFAULT_DATA\r
    const g = svg.append('g')\r
    const root = d3.hierarchy(data)\r
    const layout = d3.cluster().size([2 * Math.PI, 96])\r
    layout(root)\r
    const r0 = 26\r
    const px = (d) => W / 2 + Math.sin(d.x) * (r0 + d.y)\r
    const py = (d) => H / 2 - Math.cos(d.x) * (r0 + d.y)\r
    g.selectAll('path.link').data(root.links()).join('path')\r
      .attr('fill', 'none')\r
      .attr('stroke', 'var(--border)')\r
      .attr('stroke-width', 1.4)\r
      .attr('stroke-opacity', 0.85)\r
      .attr('d', (d) => { const mx = W / 2 + Math.sin((d.source.x + d.target.x) / 2) * (r0 + (d.source.y + d.target.y) / 2); const my = H / 2 - Math.cos((d.source.x + d.target.x) / 2) * (r0 + (d.source.y + d.target.y) / 2); return 'M' + px(d.source) + ' ' + py(d.source) + ' Q' + mx + ' ' + my + ' ' + px(d.target) + ' ' + py(d.target) })\r
    const nodes = g.selectAll('g.node').data(root.descendants()).join('g')\r
      .attr('transform', (d) => 'translate(' + px(d) + ',' + py(d) + ')')\r
    nodes.append('circle').attr('r', (d) => d.children ? 4.5 : 3).attr('fill', (d) => d.children ? "#6366f1" : "#f59e0b").attr('stroke', 'var(--bg)')\r
    nodes.filter((d) => !d.children).append('text')\r
      .attr('x', 0)\r
      .attr('y', 3)\r
      .attr('text-anchor', (d) => d.children ? 'end' : 'start')\r
      .attr('font-size', '7.5px').attr('fill', 'var(--text-secondary)')\r
      .text((d) => d.data.name)\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};