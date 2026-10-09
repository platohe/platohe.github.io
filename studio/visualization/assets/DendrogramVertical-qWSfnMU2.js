var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
// DendrogramVertical: Top-down orientation.\r
export const meta = {\r
  id: 'dendrogram-vertical',\r
  title: 'Dendrogram Vertical',\r
  desc: 'Dendrogram Vertical — a hierarchies chart visualization',\r
  category: 'Hierarchies',\r
  component: 'DendrogramVertical',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["hierarchies","dendrogram-vertical"],\r
}\r
\r
export default function DendrogramVertical({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = {"name":"Root","children":[{"name":"A","children":[{"name":"A1"},{"name":"A2","children":[{"name":"A2a"},{"name":"A2b"}]}]},{"name":"B","children":[{"name":"B1"},{"name":"B2"},{"name":"B3"}]},{"name":"C","children":[{"name":"C1"}]}]}\r
    const data = (customData && customData.name) ? customData : DEFAULT_DATA\r
    const g = svg.append('g')\r
    const root = d3.hierarchy(data)\r
    const layout = d3.cluster().size([310, 190])\r
    layout(root)\r
    const px = (d) => 40 + d.x\r
    const py = (d) => 42 + d.y\r
    g.selectAll('path.link').data(root.links()).join('path')\r
      .attr('fill', 'none')\r
      .attr('stroke', 'var(--border)')\r
      .attr('stroke-width', 1.4)\r
      .attr('stroke-opacity', 0.85)\r
      .attr('d', (d) => 'M' + px(d.source) + ' ' + py(d.source) + ' C' + px(d.source) + ' ' + (py(d.source) + py(d.target)) / 2 + ' ' + px(d.target) + ' ' + (py(d.source) + py(d.target)) / 2 + ' ' + px(d.target) + ' ' + py(d.target))\r
    const nodes = g.selectAll('g.node').data(root.descendants()).join('g')\r
      .attr('transform', (d) => 'translate(' + px(d) + ',' + py(d) + ')')\r
    nodes.append('circle').attr('r', (d) => d.children ? 4 : 3).attr('fill', (d) => d.children ? "#6366f1" : "#f59e0b").attr('stroke', 'var(--bg)')\r
    nodes.filter((d) => !d.children).append('text')\r
      .attr('x', 0)\r
      .attr('y', 3)\r
      .attr('text-anchor', 'middle')\r
      .attr('font-size', '7.5px').attr('fill', 'var(--text-secondary)')\r
      .text((d) => d.data.name)\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};