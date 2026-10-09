var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'sankey-force',\r
  title: 'Sankey Force',\r
  desc: 'Sankey Force — a networks chart visualization',\r
  category: 'Networks',\r
  component: 'SankeyForce',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-hierarchy","d3-shape"],\r
  tags: ["networks","sankey-force"],\r
}\r
\r
export default function SankeyForce({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = {"nodes":[{"name":"Source A"},{"name":"Source B"},{"name":"Process 1"},{"name":"Process 2"},{"name":"Target X"},{"name":"Target Y"}],"links":[{"source":0,"target":2,"value":40},{"source":1,"target":2,"value":30},{"source":0,"target":3,"value":20},{"source":2,"target":4,"value":50},{"source":3,"target":5,"value":25},{"source":2,"target":5,"value":20}]}\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const config = (customData && customData.nodes) ? customData : DEFAULT_DATA\r
    const { nodes, links } = config\r
    const n = nodes.length\r
    const colW = W / (n + 1)\r
\r
    // Compute node columns via longest-path layering (fixpoint, order-independent)\r
    const col = {}\r
    nodes.forEach((nd, i) => { col[i] = 0 })\r
    let changed = true\r
    while (changed) {\r
      changed = false\r
      links.forEach(l => {\r
        const nc = col[l.source] + 1\r
        if (nc > col[l.target]) { col[l.target] = nc; changed = true }\r
      })\r
    }\r
\r
    const nodeX = {}\r
    nodes.forEach((nd, i) => { nodeX[i] = colW * (col[i] + 0.5) })\r
\r
    // Compute node heights\r
    const nodeH = {}\r
    nodes.forEach((nd, i) => {\r
      const inVal = links.filter(l => l.target === i).reduce((s, l) => s + l.value, 0)\r
      const outVal = links.filter(l => l.source === i).reduce((s, l) => s + l.value, 0)\r
      nodeH[i] = Math.max(20, Math.min(80, Math.max(inVal, outVal) / d3.max(links.map(l => l.value)) * 80))\r
    })\r
\r
    // Position nodes vertically\r
    const cols = [...new Set(Object.values(col))]\r
    cols.forEach(c => {\r
      const nodesInCol = nodes.map((_, i) => ({ i, c: col[i] })).filter(n => n.c === c)\r
      const totalH = nodesInCol.reduce((s, n) => s + nodeH[n.i], 0)\r
      let y = (H - totalH) / 2\r
      nodesInCol.forEach(n => {\r
        y += nodeH[n.i] / 2\r
        nodes[n.i].y = y\r
        y += nodeH[n.i] / 2\r
      })\r
    })\r
\r
    const color = d3.scaleOrdinal(colors)\r
\r
    // Draw links — each ribbon draws itself in with a staggered sweep\r
    links.forEach((link, li) => {\r
      const src = nodes[link.source]\r
      const tgt = nodes[link.target]\r
      const sx = nodeX[link.source] + colW * 0.3\r
      const tx = nodeX[link.target] - colW * 0.3\r
      const sy = src.y, ty = tgt.y\r
\r
      const path = \`M \${sx},\${sy} C \${(sx + tx) / 2},\${sy} \${(sx + tx) / 2},\${ty} \${tx},\${ty}\`\r
      const el = svg.append('path').attr('d', path)\r
        .attr('fill', 'none').attr('stroke', color(links.indexOf(link) % colors.length))\r
        .attr('stroke-width', Math.max(2, link.value / 3)).attr('stroke-opacity', 0)\r
      if (el.node() && el.node().getTotalLength) {\r
        const len = el.node().getTotalLength()\r
        el.attr('stroke-dasharray', \`\${len} \${len}\`).attr('stroke-dashoffset', len)\r
          .transition().duration(800).delay(li * 90).ease(d3.easeCubicInOut)\r
          .attr('stroke-dashoffset', 0)\r
          .attr('stroke-opacity', 0.4)\r
      } else {\r
        el.attr('stroke-opacity', 0.4)\r
      }\r
    })\r
\r
    // Draw nodes — grow vertically from their centerline, then label\r
    nodes.forEach((nd, i) => {\r
      svg.append('rect')\r
        .attr('x', nodeX[i] - colW * 0.2).attr('y', nd.y)\r
        .attr('width', colW * 0.4).attr('height', 0)\r
        .attr('fill', colors[i % colors.length]).attr('opacity', 0.8).attr('rx', 3)\r
        .transition().duration(600).delay(i * 70).ease(d3.easeCubicOut)\r
        .attr('y', nd.y - nodeH[i] / 2).attr('height', nodeH[i])\r
\r
      svg.append('text')\r
        .attr('x', nodeX[i]).attr('y', nd.y + nodeH[i] / 2 + 14)\r
        .attr('text-anchor', 'middle').attr('fill', 'var(--text)').attr('font-size', '9px').attr('font-weight', 500)\r
        .attr('opacity', 0)\r
        .transition().duration(400).delay(400 + i * 70)\r
        .attr('opacity', 1)\r
        .text(nd.name)\r
    })\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};