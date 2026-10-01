var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'org-chart',\r
  title: 'Org Chart',\r
  desc: 'Org Chart — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'OrgChart',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","org-chart"],\r
}\r
\r
export default function OrgChart({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const DEFAULT_DATA = {"name":"Alex Morgan","role":"CEO","children":[{"name":"Sam Rivera","role":"CTO","children":[{"name":"Jamie Lee","role":"Eng Lead"},{"name":"Chris Park","role":"Platform Lead"}]},{"name":"Taylor Kim","role":"CPO","children":[{"name":"Riley Chen","role":"Product Lead"},{"name":"Jordan Fox","role":"Design Lead"}]},{"name":"Casey Wong","role":"CFO","children":[{"name":"Morgan Hill","role":"Finance"}]}]}\r
    const root = (customData && typeof customData === 'object' && !Array.isArray(customData) && customData.name) ? customData : DEFAULT_DATA\r
\r
    const rootNode = d3.hierarchy(root)\r
    const tree = d3.tree().nodeSize([52, 150])(rootNode)\r
    const x = d3.scaleLinear().domain(d3.extent(rootNode.descendants(), (d) => d.y)).range([M.left + 40, W - M.right - 40])\r
    const y = d3.scaleLinear().domain(d3.extent(rootNode.descendants(), (d) => d.x)).range([M.top, H - M.bottom])\r
\r
    svg.append('g')\r
      .selectAll('path')\r
      .data(rootNode.links())\r
      .join('path')\r
      .attr('d', (d) => \`M\${x(d.source.y)},\${y(d.source.x)}C\${x((d.source.y + d.target.y) / 2)},\${y(d.source.x)} \${x((d.source.y + d.target.y) / 2)},\${y(d.target.x)} \${x(d.target.y)},\${y(d.target.x)}\`)\r
      .attr('fill', 'none')\r
      .attr('stroke', 'var(--border)')\r
      .attr('stroke-width', 1.2)\r
\r
    const node = svg.append('g')\r
      .selectAll('g')\r
      .data(rootNode.descendants())\r
      .join('g')\r
      .attr('transform', (d) => \`translate(\${x(d.y)},\${y(d.x)})\`)\r
\r
    node.append('rect')\r
      .attr('x', -45).attr('y', -16)\r
      .attr('width', 90).attr('height', 32).attr('rx', 6)\r
      .attr('fill', colors[0]).attr('fill-opacity', 0.12)\r
      .attr('stroke', colors[0]).attr('stroke-width', 1.2)\r
    node.append('text')\r
      .attr('x', 0).attr('y', -3).attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text-primary)').attr('font-size', '9.5px').attr('font-weight', 600)\r
      .text((d) => d.data.name)\r
    node.append('text')\r
      .attr('x', 0).attr('y', 9).attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text-secondary)').attr('font-size', '8.5px')\r
      .text((d) => d.data.role || '')\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}`;export{e as default};