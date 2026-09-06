var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'causal-diagram',\r
  title: 'Causal Diagram',\r
  desc: 'Causal Diagram — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'CausalDiagram',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","causal-diagram"],\r
}\r
\r
export default function CausalDiagram({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = {"nodes":[{"id":"A","label":"Marketing Spend","x":50,"y":50},{"id":"B","label":"Website Traffic","x":150,"y":30},{"id":"C","label":"Brand Awareness","x":150,"y":70},{"id":"D","label":"Sign-ups","x":250,"y":40},{"id":"E","label":" conversions","x":250,"y":60},{"id":"F","label":"Revenue","x":330,"y":50}],"edges":[{"from":"A","to":"B","weight":0.8},{"from":"A","to":"C","weight":0.6},{"from":"B","to":"D","weight":0.7},{"from":"B","to":"E","weight":0.5},{"from":"C","to":"D","weight":0.4},{"from":"C","to":"E","weight":0.6},{"from":"D","to":"F","weight":0.9},{"from":"E","to":"F","weight":0.8}]}\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = customData || DEFAULT_DATA\r
\r
    const nodeMap = {}\r
    data.nodes.forEach(n => {\r
      nodeMap[n.id] = {\r
        x: M.left + (n.x / 400) * IW,\r
        y: M.top + (n.y / 100) * IH\r
      }\r
    })\r
\r
    // Draw edges\r
    data.edges.forEach(edge => {\r
      const from = nodeMap[edge.from]\r
      const to = nodeMap[edge.to]\r
      if (!from || !to) return\r
\r
      const thickness = 1 + edge.weight * 3\r
\r
      svg.append('path')\r
        .attr('d', \`M \${from.x},\${from.y} Q \${(from.x + to.x) / 2},\${(from.y + to.y) / 2 - 20} \${to.x},\${to.y}\`)\r
        .attr('fill', 'none')\r
        .attr('stroke', colors[0])\r
        .attr('stroke-width', thickness)\r
        .attr('stroke-opacity', 0.5 + edge.weight * 0.3)\r
\r
      // Arrow\r
      const midX = (from.x + to.x) / 2\r
      const midY = (from.y + to.y) / 2 - 10\r
      const angle = Math.atan2(to.y - midY, to.x - midX)\r
      const arrowSize = 5 + edge.weight * 2\r
\r
      svg.append('polygon')\r
        .attr('points',\r
          \`\${to.x - arrowSize * Math.cos(angle - 0.3)},\${to.y - arrowSize * Math.sin(angle - 0.3)} \` +\r
          \`\${to.x - arrowSize * Math.cos(angle + 0.3)},\${to.y - arrowSize * Math.sin(angle + 0.3)} \` +\r
          \`\${to.x},\${to.y}\`\r
        )\r
        .attr('fill', colors[0])\r
        .attr('opacity', 0.7)\r
    })\r
\r
    // Draw nodes\r
    data.nodes.forEach(node => {\r
      const pos = nodeMap[node.id]\r
      if (!pos) return\r
\r
      svg.append('circle')\r
        .attr('cx', pos.x).attr('cy', pos.y)\r
        .attr('r', 15)\r
        .attr('fill', colors[0]).attr('opacity', 0.2)\r
        .attr('stroke', colors[0]).attr('stroke-width', 2)\r
\r
      svg.append('text')\r
        .attr('x', pos.x).attr('y', pos.y + 4)\r
        .attr('text-anchor', 'middle')\r
        .attr('fill', 'var(--text-primary)')\r
        .attr('font-size', '8px')\r
        .text(node.id)\r
    })\r
\r
    // Draw labels below nodes\r
    data.nodes.forEach(node => {\r
      const pos = nodeMap[node.id]\r
      if (!pos) return\r
\r
      const words = node.label.split(' ')\r
      words.forEach((word, i) => {\r
        svg.append('text')\r
          .attr('x', pos.x)\r
          .attr('y', pos.y + 25 + i * 12)\r
          .attr('text-anchor', 'middle')\r
          .attr('fill', 'var(--text-secondary)')\r
          .attr('font-size', '9px')\r
          .text(word)\r
      })\r
    })\r
\r
    // Title\r
    svg.append('text')\r
      .attr('transform', \`translate(\${M.left + IW / 2},\${M.top - 10})\`)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text-primary)')\r
      .attr('font-size', '14px')\r
      .attr('font-weight', 'bold')\r
      .text('Causal Diagram - Factor Relationships')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};