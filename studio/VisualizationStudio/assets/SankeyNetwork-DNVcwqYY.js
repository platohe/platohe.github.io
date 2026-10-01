var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'sankey-network',\r
  title: 'Sankey Network',\r
  desc: 'Sankey Network — a networks chart visualization',\r
  category: 'Networks',\r
  component: 'SankeyNetwork',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-shape"],\r
  tags: ["networks","sankey-network"],\r
}\r
\r
export default function SankeyNetwork({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = {"nodes":[{"name":"Source A"},{"name":"Source B"},{"name":"Process 1"},{"name":"Process 2"},{"name":"Target X"},{"name":"Target Y"}],"links":[{"source":0,"target":2,"value":40},{"source":1,"target":2,"value":30},{"source":0,"target":3,"value":20},{"source":1,"target":3,"value":10},{"source":2,"target":4,"value":50},{"source":2,"target":5,"value":20},{"source":3,"target":4,"value":15},{"source":3,"target":5,"value":25}]}\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (customData && customData.nodes && customData.links) ? customData : DEFAULT_DATA\r
\r
    const width = W - 40\r
    const height = H - 40\r
    const nodeWidth = 12\r
    const nodePadding = 15\r
    const numColumns = 3\r
\r
    const columns = []\r
    const colWidth = width / (numColumns - 1)\r
\r
    data.nodes.forEach((n, i) => {\r
      let col = Math.floor(i / (Math.ceil(data.nodes.length / numColumns)))\r
      col = Math.min(col, numColumns - 1)\r
      if (!columns[col]) columns[col] = []\r
      columns[col].push(n)\r
    })\r
\r
    const x = (col) => col * colWidth + 30\r
    const totalNodes = data.nodes.length\r
    const nodeHeight = (height - nodePadding * (numColumns - 1)) / Math.max(numColumns, 1)\r
\r
    // Simple vertical layout per column\r
    const nodePositions = {}\r
    columns.forEach((colNodes, colIdx) => {\r
      const totalValue = colNodes.reduce((s, n) => s + (n.value || 20), 0) || 1\r
      let yOff = (height - totalValue) / 2\r
      colNodes.forEach((n, ni) => {\r
        const idx = columns.flat().indexOf(n)\r
        const h = (n.value || 20) / totalValue * height * 0.6\r
        nodePositions[idx] = { x: x(colIdx), y: yOff, w: nodeWidth, h: Math.max(h, 10) }\r
        yOff += h + nodePadding\r
      })\r
    })\r
\r
    const g = svg.append('g')\r
    const color = d3.scaleOrdinal(d3.schemeTableau10)\r
\r
    // Draw nodes\r
    data.nodes.forEach((n, i) => {\r
      const pos = nodePositions[i]\r
      if (!pos) return\r
      g.append('rect')\r
        .attr('x', pos.x).attr('y', pos.y).attr('width', pos.w).attr('height', pos.h)\r
        .attr('fill', color(i % color.length)).attr('rx', 2)\r
      g.append('text')\r
        .attr('x', pos.x + pos.w + 4).attr('y', pos.y + pos.h / 2)\r
        .attr('dominant-baseline', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '7px')\r
        .text(n.name)\r
    })\r
\r
    // Draw links\r
    data.links.forEach(link => {\r
      const src = nodePositions[link.source]\r
      const tgt = nodePositions[link.target]\r
      if (!src || !tgt) return\r
\r
      const sy = src.y + src.h / 2\r
      const ty = tgt.y + tgt.h / 2\r
      const midX = (src.x + src.w + tgt.x) / 2\r
\r
      g.append('path')\r
        .attr('d', \`M\${src.x + src.w},\${sy} C\${midX},\${sy} \${midX},\${ty} \${tgt.x},\${ty}\`)\r
        .attr('fill', 'none').attr('stroke', color(link.source % color.length))\r
        .attr('stroke-width', Math.max(link.value * 0.5, 1)).attr('stroke-opacity', 0.4)\r
    })\r
  }, [customData])\r
\r
  return (\r
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\r
      <svg ref={ref} viewBox={\`0 0 \${W} \${H}\`} style={{ width: '100%', height: '100%', maxWidth: '500px' }} />\r
    </div>\r
  )\r
}\r
`;export{e as default};