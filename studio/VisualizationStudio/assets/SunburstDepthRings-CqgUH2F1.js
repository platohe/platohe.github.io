var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'sunburst-depth-rings',\r
  title: 'Sunburst Depth Rings',\r
  desc: 'Sunburst Depth Rings — a hierarchies chart visualization',\r
  category: 'Hierarchies',\r
  component: 'SunburstDepthRings',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["hierarchies","sunburst-depth-rings"],\r
}\r
\r
export default function SunburstDepthRings({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = { name: 'root', children: [\r
      { name: 'Core', children: [{ name: 'A1', value: 14 }, { name: 'A2', value: 10 }] },\r
      { name: 'Mid', children: [{ name: 'B1', value: 18 }, { name: 'B2', value: 9 }, { name: 'B3', value: 7 }] },\r
      { name: 'Edge', children: [{ name: 'C1', value: 12 }, { name: 'C2', value: 15 }] }] }\r
    const data = (customData && customData.children) ? customData : DEFAULT_DATA\r
    const g = svg.append('g').attr('transform', 'translate(200,150)')\r
    const root = d3.hierarchy(data).sum((d) => d.value || 0)\r
    d3.partition()(root)\r
    const innerR = 34, outerR = 108\r
    const arcGen = d3.arc()\r
      .startAngle((d) => d.x0).endAngle((d) => d.x1)\r
      .innerRadius((d) => innerR + d.depth * ((outerR - innerR) / root.height))\r
      .outerRadius((d) => innerR + (d.depth + 1) * ((outerR - innerR) / root.height) - 2)\r
    g.selectAll('path').data(root.descendants()).join('path')\r
      .attr('d', arcGen)\r
      .attr('fill', (d) => {\r
        let top = d\r
        while (top.depth > 1 && root.children.indexOf(top) < 0) top = top.parent\r
        return colors[Math.max(root.children.indexOf(top), 0) % colors.length]\r
      })\r
      .attr('fill-opacity', (d) => 0.92 - d.depth * 0.16)\r
      .attr('stroke', 'var(--bg)').attr('stroke-width', 1.4)\r
    // depth ring guides\r
    ;[1, 2].forEach((depth) => {\r
      const r = innerR + depth * ((outerR - innerR) / root.height)\r
      g.append('circle').attr('r', r).attr('fill', 'none')\r
        .attr('stroke', 'var(--border)').attr('stroke-dasharray', '2,4').attr('stroke-opacity', 0.7)\r
    })\r
    g.append('text').attr('text-anchor', 'middle').attr('font-size', '9px').attr('font-weight', 700)\r
      .attr('fill', 'var(--text-secondary)').text('depth →')\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};