var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
// SunburstSegments: Alternating segment tones.\r
export const meta = {\r
  id: 'sunburst-segments',\r
  title: 'Sunburst Segments',\r
  desc: 'Sunburst Segments — a hierarchies chart visualization',\r
  category: 'Hierarchies',\r
  component: 'SunburstSegments',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["hierarchies","sunburst-segments"],\r
}\r
\r
export default function SunburstSegments({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = {"name":"root","children":[{"name":"A","children":[{"name":"A1","value":18},{"name":"A2","value":12},{"name":"A3","value":8}]},{"name":"B","children":[{"name":"B1","value":22},{"name":"B2","value":14}]},{"name":"C","children":[{"name":"C1","value":16},{"name":"C2","value":10},{"name":"C3","value":6}]}]}\r
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
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};