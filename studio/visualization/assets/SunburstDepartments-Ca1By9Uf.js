var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
// SunburstDepartments: Company departments story.\r
export const meta = {\r
  id: 'sunburst-departments',\r
  title: 'Sunburst Departments',\r
  desc: 'Sunburst Departments — a hierarchies chart visualization',\r
  category: 'Hierarchies',\r
  component: 'SunburstDepartments',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["hierarchies","sunburst-departments"],\r
}\r
\r
export default function SunburstDepartments({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = { name: 'Company', children: [\r
      { name: 'Sales', children: [{ name: 'Direct', value: 30 }, { name: 'Partners', value: 18 }] },\r
      { name: 'Engineering', children: [{ name: 'Platform', value: 26 }, { name: 'Apps', value: 22 }] },\r
      { name: 'Support', children: [{ name: 'Tier1', value: 14 }, { name: 'Tier2', value: 9 }] }] }\r
    const data = (customData && customData.children) ? customData : DEFAULT_DATA\r
    const g = svg.append('g').attr('transform', 'translate(200,150)')\r
    const root = d3.hierarchy(data).sum((d) => d.value || 0)\r
    d3.partition()(root)\r
    const innerR = 40\r
    const outerR = 96\r
    const arcGen = d3.arc().startAngle((d) => d.x0).endAngle((d) => d.x1)\r
      .innerRadius((d) => innerR + d.depth * ((outerR - innerR) / root.height))\r
      .outerRadius((d) => innerR + (d.depth + 1) * ((outerR - innerR) / root.height) - 1.5)\r
    const colorFor = (d) => { let top = d; while (top.depth > 1 && root.children.indexOf(top) < 0) top = top.parent; const base = Math.max(root.children.indexOf(top), 0); return colors[base % colors.length] }\r
    g.selectAll('path').data(root.descendants()).join('path')\r
      .attr('d', arcGen).attr('fill', colorFor)\r
      .attr('fill-opacity', 0.88)\r
      .attr('stroke', 'var(--bg)').attr('stroke-width', 1.2)\r
    g.append('text').attr('text-anchor', 'middle').attr('font-size', '11px').attr('font-weight', 700).attr('fill', 'var(--text-secondary)').text('Co.')\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};