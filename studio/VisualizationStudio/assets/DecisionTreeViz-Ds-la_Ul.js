var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'decision-tree-viz',\r
  title: 'Decision Tree Viz',\r
  desc: 'Decision Tree Viz — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'DecisionTreeViz',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-hierarchy"],\r
  tags: ["bars","decision-tree-viz"],\r
}\r
\r
export default function DecisionTreeViz({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = {"name":"Root","value":1000,"samples":1000,"feature":"Feature_1 ≤ 0.5","impurity":0.48,"children":[{"name":"Left","value":400,"samples":600,"feature":"Feature_2 ≤ 0.3","impurity":0.32,"children":[{"name":"Leaf","value":100,"samples":400,"class":"A","impurity":0.1},{"name":"Leaf","value":300,"samples":200,"class":"B","impurity":0.25}]},{"name":"Right","value":600,"samples":400,"feature":"Feature_3 ≤ 0.7","impurity":0.28,"children":[{"name":"Leaf","value":200,"samples":150,"class":"A","impurity":0.15},{"name":"Leaf","value":400,"samples":250,"class":"B","impurity":0.2}]}]}\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = customData || DEFAULT_DATA\r
\r
    const tree = d3.tree().size([IW, IH - 80])\r
    const root = d3.hierarchy(data).sum(d => d.samples || 1)\r
    tree(root)\r
\r
    const g = svg.append('g').attr('transform', \`translate(\${M.left + 40},\${M.top + 40})\`)\r
\r
    // Links\r
    const link = g.selectAll('.link')\r
      .data(root.links())\r
      .enter()\r
      .append('path')\r
      .attr('class', 'link')\r
      .attr('d', d3.linkHorizontal()\r
        .x(d => d.y)\r
        .y(d => d.x)\r
      )\r
      .attr('fill', 'none')\r
      .attr('stroke', 'var(--border)')\r
      .attr('stroke-width', 2)\r
\r
    // Nodes\r
    const node = g.selectAll('.node')\r
      .data(root.descendants())\r
      .enter()\r
      .append('g')\r
      .attr('class', 'node')\r
      .attr('transform', d => \`translate(\${d.y},\${d.x})\`)\r
\r
    // Node rectangles\r
    node.append('rect')\r
      .attr('width', 180)\r
      .attr('height', 60)\r
      .attr('x', -90)\r
      .attr('y', -30)\r
      .attr('rx', 6)\r
      .attr('fill', d => d.children ? '#e0f2fe' : '#fef3c7')\r
      .attr('stroke', d => d.children ? '#0284c7' : '#f59e0b')\r
      .attr('stroke-width', 2)\r
\r
    // Node text - feature/split\r
    node.append('text')\r
      .attr('y', -10)\r
      .attr('text-anchor', 'middle')\r
      .attr('font-size', '11px')\r
      .attr('font-weight', 600)\r
      .attr('fill', 'var(--text)')\r
      .text(d => d.data.feature || (d.data.class ? \`Class: \${d.data.class}\` : 'Root'))\r
\r
    // Node text - samples\r
    node.append('text')\r
      .attr('y', 8)\r
      .attr('text-anchor', 'middle')\r
      .attr('font-size', '10px')\r
      .attr('fill', 'var(--text-secondary)')\r
      .text(d => \`Samples: \${d.data.samples || d.data.value}\`)\r
\r
    // Node text - impurity/value\r
    node.append('text')\r
      .attr('y', 24)\r
      .attr('text-anchor', 'middle')\r
      .attr('font-size', '10px')\r
      .attr('fill', 'var(--text-secondary)')\r
      .text(d => d.data.impurity !== undefined ? \`Gini: \${d.data.impurity.toFixed(2)}\` : \`Value: \${d.data.value}\`)\r
\r
    // Title\r
    g.append('text')\r
      .attr('x', IW / 2 - 40)\r
      .attr('y', -20)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text)')\r
      .attr('font-size', '14px')\r
      .attr('font-weight', 600)\r
      .text('Decision Tree Visualization')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}`;export{e as default};