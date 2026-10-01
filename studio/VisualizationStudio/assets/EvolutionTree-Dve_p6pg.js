var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
// EvolutionTree: Evolution over eras.\r
export const meta = {\r
  id: 'evolution-tree',\r
  title: 'Evolution Tree',\r
  desc: 'Evolution Tree — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'EvolutionTree',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-hierarchy"],\r
  tags: ["bars","evolution-tree"],\r
}\r
\r
export default function EvolutionTree({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = {"name":"Common ancestor","children":[{"name":"Fish","children":[{"name":"Amphibians","children":[{"name":"Reptiles","children":[{"name":"Birds"},{"name":"Mammals"}]}]}]},{"name":"Sharks"}]}\r
    const data = (customData && customData.name) ? customData : DEFAULT_DATA\r
    const g = svg.append('g')\r
    const root = d3.hierarchy(data)\r
    const layout = d3.cluster().size([200, 310])\r
    layout(root)\r
    const px = (d) => 40 + d.y\r
    const py = (d) => 70 + d.x\r
    g.selectAll('path.link').data(root.links()).join('path')\r
      .attr('fill', 'none')\r
      .attr('stroke', 'var(--border)')\r
      .attr('stroke-width', 1.4)\r
      .attr('stroke-opacity', 0.85)\r
      .attr('d', (d) => 'M' + px(d.source) + ' ' + py(d.source) + ' C' + (px(d.source) + px(d.target)) / 2 + ' ' + py(d.source) + ' ' + (px(d.source) + px(d.target)) / 2 + ' ' + py(d.target) + ' ' + px(d.target) + ' ' + py(d.target))\r
    const nodes = g.selectAll('g.node').data(root.descendants()).join('g')\r
      .attr('transform', (d) => 'translate(' + px(d) + ',' + py(d) + ')')\r
    nodes.append('circle').attr('r', (d) => d.children ? 4.5 : 3).attr('fill', (d) => d.children ? "#6366f1" : "#f59e0b").attr('stroke', 'var(--bg)')\r
    nodes.filter((d) => !d.children).append('text')\r
      .attr('x', 0)\r
      .attr('y', 3)\r
      .attr('text-anchor', (d) => d.children ? 'end' : 'start')\r
      .attr('font-size', '7.5px').attr('fill', 'var(--text-secondary)')\r
      .text((d) => d.data.name)\r
    g.append('line').attr('x1', 40).attr('x2', 360).attr('y1', 262).attr('y2', 262).attr('stroke', 'var(--border)')\r
    ;['500 Mya', '400', '300', '200', '100', 'now'].forEach((t, i) => {\r
      g.append('text').attr('x', 44 + i * 63).attr('y', 276).attr('font-size', '7px').attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').text(t)\r
    })\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};