var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'dendrogram-cut',\r
  title: 'Dendrogram Cut',\r
  desc: 'Dendrogram Cut — a hierarchies chart visualization',\r
  category: 'Hierarchies',\r
  component: 'DendrogramCut',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["hierarchies","dendrogram-cut"],\r
}\r
\r
export default function DendrogramCut({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = {"labels":["A","B","C","D","E","F","G","H"],"merges":[{"left":0,"right":1,"height":0.2},{"left":2,"right":3,"height":0.3},{"left":4,"right":5,"height":0.4},{"left":6,"right":7,"height":0.35},{"left":"0-1","right":"2-3","height":0.6},{"left":"4-5","right":"6-7","height":0.7},{"left":"0-1-2-3","right":"4-5-6-7","height":1}]}\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const d = (customData && customData.labels) ? customData : DEFAULT_DATA\r
    const { labels, merges } = d\r
    const n = labels.length\r
    const leafY = IH * 0.85\r
    const leafXSpacing = IW / (n + 1)\r
    const y = d3.scaleLinear().domain([0, 1.2]).range([M.top, leafY])\r
\r
    // Leaf positions\r
    const leafPositions = labels.map((_, i) => ({\r
      label: labels[i],\r
      x: leafXSpacing * (i + 1),\r
      y: leafY,\r
    }))\r
\r
    // Merge tracking\r
    const nodes = leafPositions.map(p => ({ ...p, id: p.label, left: null, right: null, height: 0 }))\r
    const nodeMap = {}\r
    nodes.forEach(n => nodeMap[n.id] = n)\r
\r
    merges.forEach(m => {\r
      const leftNode = typeof m.left === 'string' && m.left.includes('-') ? null : nodeMap[m.left]\r
      const rightNode = typeof m.right === 'string' && m.right.includes('-') ? null : nodeMap[m.right]\r
\r
      const midX = (leftNode?.x || 0 + rightNode?.x || 0) / 2\r
      const midY = y(m.height)\r
\r
      // Horizontal bar\r
      if (leftNode && rightNode) {\r
        svg.append('line').attr('x1', leftNode.x).attr('x2', rightNode.x)\r
          .attr('y1', midY).attr('y2', midY)\r
          .attr('stroke', colors[0]).attr('stroke-width', 2)\r
      }\r
\r
      // Vertical lines to children\r
      if (leftNode) {\r
        svg.append('line').attr('x1', leftNode.x).attr('x2', leftNode.x)\r
          .attr('y1', leftNode.y).attr('y2', midY)\r
          .attr('stroke', colors[0]).attr('stroke-width', 2)\r
      }\r
      if (rightNode) {\r
        svg.append('line').attr('x1', rightNode.x).attr('x2', rightNode.x)\r
          .attr('y1', rightNode.y).attr('y2', midY)\r
          .attr('stroke', colors[0]).attr('stroke-width', 2)\r
      }\r
\r
      // Node dot\r
      svg.append('circle').attr('cx', midX).attr('cy', midY).attr('r', 4)\r
        .attr('fill', colors[0]).attr('stroke', '#fff').attr('stroke-width', 1)\r
    })\r
\r
    // Leaf labels\r
    leafPositions.forEach(p => {\r
      svg.append('circle').attr('cx', p.x).attr('cy', p.y).attr('r', 5)\r
        .attr('fill', colors[2]).attr('stroke', '#fff').attr('stroke-width', 1)\r
      svg.append('text').attr('x', p.x).attr('y', p.y + 18)\r
        .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)').attr('font-size', '11px').text(p.label)\r
    })\r
\r
    // Cut line\r
    const cutHeight = 0.5\r
    svg.append('line').attr('x1', M.left).attr('x2', IW).attr('y1', y(cutHeight)).attr('y2', y(cutHeight))\r
      .attr('stroke', colors[3]).attr('stroke-width', 2).attr('stroke-dasharray', '6,4')\r
    svg.append('text').attr('x', IW - 4).attr('y', y(cutHeight) - 6)\r
      .attr('text-anchor', 'end').attr('fill', colors[3]).attr('font-size', '10px').text('Cut at h=' + cutHeight)\r
\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top - 10})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)').attr('font-size', '14px').attr('font-weight', 'bold').text('Dendrogram with Cluster Cut')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};