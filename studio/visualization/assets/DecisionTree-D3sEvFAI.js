var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'decision-tree',\r
  title: 'Decision Tree',\r
  desc: 'Decision Tree — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'DecisionTree',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-hierarchy"],\r
  tags: ["bars","decision-tree"],\r
}\r
\r
export default function DecisionTree({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = {"name":"Patient Risk Assessment","children":[{"name":"Age ≥ 50?","left":{"name":"Yes","leaf":true,"value":"High Risk","pct":0.72},"right":{"name":"No","leaf":false,"children":[{"name":"Smoking?","left":{"name":null,"leaf":null,"children":null},"right":{"name":null,"leaf":null,"value":null,"pct":null}}]}}]}\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const d = (customData && customData.name) ? customData : DEFAULT_DATA\r
\r
    const nodes = []\r
    const edges = []\r
    let nodeId = 0\r
\r
    function traverse(node, x, y, depth, totalWidth) {\r
      const n = { id: nodeId++, name: node.name, x, y, depth, isLeaf: node.leaf || false, value: node.value, pct: node.pct }\r
      nodes.push(n)\r
      const children = node.children || []\r
      children.forEach((child, i) => {\r
        const childX = x - totalWidth / 2 + (i + 0.5) * totalWidth\r
        const childY = y + 60\r
        edges.push({ source: n.id, target: childX, childY, label: child.name.split('?')[0].trim() })\r
        traverse(child, childX, childY, depth + 1, totalWidth / 2)\r
      })\r
    }\r
\r
    traverse(d, IW / 2, M.top + 20, 0, IW * 0.8)\r
\r
    const nodeW = 100, nodeH = 30\r
\r
    // Edges\r
    edges.forEach(e => {\r
      const src = nodes.find(n => n.id === e.source)\r
      if (src) {\r
        svg.append('line').attr('x1', src.x).attr('x2', e.target).attr('y1', src.y + nodeH / 2).attr('y2', e.childY - nodeH / 2)\r
          .attr('stroke', 'var(--text-secondary)').attr('stroke-width', 1).attr('opacity', 0.5)\r
      }\r
    })\r
\r
    // Nodes\r
    nodes.forEach(n => {\r
      if (n.isLeaf) {\r
        const color = n.value === 'High Risk' ? colors[3] : n.value === 'Moderate' ? colors[1] : colors[2]\r
        svg.append('rect').attr('x', n.x - nodeW / 2).attr('y', n.y - nodeH / 2)\r
          .attr('width', nodeW).attr('height', nodeH).attr('fill', color).attr('opacity', 0.7).attr('rx', 4)\r
        svg.append('text').attr('x', n.x).attr('y', n.y + 4)\r
          .attr('text-anchor', 'middle').attr('fill', '#fff').attr('font-size', '10px').attr('font-weight', 'bold').text(n.value)\r
        svg.append('text').attr('x', n.x).attr('y', n.y + nodeH / 2 + 14)\r
          .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '9px').text((n.pct * 100).toFixed(0) + '%')\r
      } else {\r
        svg.append('rect').attr('x', n.x - nodeW / 2).attr('y', n.y - nodeH / 2)\r
          .attr('width', nodeW).attr('height', nodeH).attr('fill', colors[0]).attr('opacity', 0.8).attr('rx', 4)\r
        const words = n.name.split(' ')\r
        words.forEach((w, i) => {\r
          svg.append('text').attr('x', n.x).attr('y', n.y - 4 + i * 12)\r
            .attr('text-anchor', 'middle').attr('fill', '#fff').attr('font-size', '9px').text(w)\r
        })\r
      }\r
    })\r
\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top - 10})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)').attr('font-size', '14px').attr('font-weight', 'bold').text('Decision Tree')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};