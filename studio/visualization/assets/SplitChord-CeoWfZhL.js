var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'split-chord',\r
  title: 'Split Chord',\r
  desc: 'Split Chord — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'SplitChord',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-shape"],\r
  tags: ["bars","split-chord"],\r
}\r
\r
export default function SplitChord({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = {"nodes":[{"id":"A1","group":"left"},{"id":"A2","group":"left"},{"id":"A3","group":"left"},{"id":"B1","group":"right"},{"id":"B2","group":"right"},{"id":"B3","group":"right"}],"links":[{"source":"A1","target":"B1","value":10},{"source":"A1","target":"B2","value":5},{"source":"A2","target":"B1","value":8},{"source":"A2","target":"B3","value":12},{"source":"A3","target":"B2","value":15},{"source":"A3","target":"B3","value":7}]}\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = customData || DEFAULT_DATA\r
\r
    const leftNodes = data.nodes.filter(n => n.group === 'left')\r
    const rightNodes = data.nodes.filter(n => n.group === 'right')\r
\r
    const centerX = IW / 2\r
    const centerY = IH / 2\r
    const radius = Math.min(IW, IH) / 2 - 20\r
\r
    // Calculate node positions (bipartite layout on circle)\r
    const totalNodes = data.nodes.length\r
    const leftArc = d3.arc()\r
      .innerRadius(radius - 15)\r
      .outerRadius(radius)\r
      .startAngle((d, i) => (i / leftNodes.length) * Math.PI - Math.PI / 2)\r
      .endAngle((d, i) => ((i + 1) / leftNodes.length) * Math.PI - Math.PI / 2)\r
\r
    const rightArc = d3.arc()\r
      .innerRadius(radius - 15)\r
      .outerRadius(radius)\r
      .startAngle((d, i) => (i / rightNodes.length) * Math.PI + Math.PI / 2)\r
      .endAngle((d, i) => ((i + 1) / rightNodes.length) * Math.PI + Math.PI / 2)\r
\r
    // Draw left nodes\r
    svg.append('g')\r
      .attr('transform', \`translate(\${M.left + centerX},\${M.top + centerY})\`)\r
      .selectAll('path')\r
      .data(leftNodes)\r
      .join('path')\r
      .attr('d', leftArc)\r
      .attr('fill', (d, i) => colors[i % colors.length])\r
      .attr('fill-opacity', 0.8)\r
      .attr('stroke', 'white')\r
      .attr('stroke-width', 1)\r
\r
    // Draw right nodes\r
    svg.append('g')\r
      .attr('transform', \`translate(\${M.left + centerX},\${M.top + centerY})\`)\r
      .selectAll('path')\r
      .data(rightNodes)\r
      .join('path')\r
      .attr('d', rightArc)\r
      .attr('fill', (d, i) => colors[(i + leftNodes.length) % colors.length])\r
      .attr('fill-opacity', 0.8)\r
      .attr('stroke', 'white')\r
      .attr('stroke-width', 1)\r
\r
    // Calculate chord paths\r
    const chordPath = (source, target, value) => {\r
      const sourceIndex = data.nodes.findIndex(n => n.id === source)\r
      const targetIndex = data.nodes.findIndex(n => n.id === target)\r
      \r
      const isSourceLeft = data.nodes[sourceIndex].group === 'left'\r
      const isTargetLeft = data.nodes[targetIndex].group === 'left'\r
\r
      const sourceCount = isSourceLeft ? leftNodes.length : rightNodes.length\r
      const targetCount = isTargetLeft ? leftNodes.length : rightNodes.length\r
\r
      const sourceAngle = isSourceLeft \r
        ? (sourceIndex / sourceCount) * Math.PI - Math.PI / 2 + Math.PI / (2 * sourceCount)\r
        : ((sourceIndex - leftNodes.length) / rightNodes.length) * Math.PI + Math.PI / 2 + Math.PI / (2 * rightNodes.length)\r
      \r
      const targetAngle = isTargetLeft\r
        ? (targetIndex / targetCount) * Math.PI - Math.PI / 2 + Math.PI / (2 * targetCount)\r
        : ((targetIndex - leftNodes.length) / rightNodes.length) * Math.PI + Math.PI / 2 + Math.PI / (2 * rightNodes.length)\r
\r
      const r = radius - 7.5\r
      const x1 = centerX + r * Math.cos(sourceAngle)\r
      const y1 = centerY + r * Math.sin(sourceAngle)\r
      const x2 = centerX + r * Math.cos(targetAngle)\r
      const y2 = centerY + r * Math.sin(targetAngle)\r
\r
      // Control points for bezier curve\r
      const controlX = centerX\r
      const controlY = centerY\r
\r
      return \`M \${x1} \${y1} Q \${controlX} \${controlY} \${x2} \${y2}\`\r
    }\r
\r
    // Draw chords\r
    const maxValue = d3.max(data.links, d => d.value) || 1\r
    svg.append('g')\r
      .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .selectAll('path')\r
      .data(data.links)\r
      .join('path')\r
      .attr('d', d => chordPath(d.source, d.target, d.value))\r
      .attr('fill', 'none')\r
      .attr('stroke', (d, i) => colors[i % colors.length])\r
      .attr('stroke-width', d => (d.value / maxValue) * 5 + 1)\r
      .attr('stroke-opacity', 0.6)\r
\r
    // Add node labels\r
    svg.append('g')\r
      .attr('transform', \`translate(\${M.left + centerX},\${M.top + centerY})\`)\r
      .selectAll('text')\r
      .data(data.nodes)\r
      .join('text')\r
      .attr('x', (d, i) => {\r
        const isLeft = d.group === 'left'\r
        const count = isLeft ? leftNodes.length : rightNodes.length\r
        const angle = isLeft \r
          ? (i / count) * Math.PI - Math.PI / 2 + Math.PI / (2 * count)\r
          : ((i - leftNodes.length) / rightNodes.length) * Math.PI + Math.PI / 2 + Math.PI / (2 * rightNodes.length)\r
        return (radius + 20) * Math.cos(angle)\r
      })\r
      .attr('y', (d, i) => {\r
        const isLeft = d.group === 'left'\r
        const count = isLeft ? leftNodes.length : rightNodes.length\r
        const angle = isLeft \r
          ? (i / count) * Math.PI - Math.PI / 2 + Math.PI / (2 * count)\r
          : ((i - leftNodes.length) / rightNodes.length) * Math.PI + Math.PI / 2 + Math.PI / (2 * rightNodes.length)\r
        return (radius + 20) * Math.sin(angle) + 4\r
      })\r
      .text(d => d.id)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text-secondary)')\r
      .attr('font-size', '11px')\r
      .attr('font-weight', 'bold')\r
\r
    // Add group labels\r
    svg.append('text')\r
      .attr('transform', \`translate(\${M.left + centerX - radius - 30},\${M.top + centerY})\`)\r
      .text('Group A')\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text-primary)')\r
      .attr('font-size', '12px')\r
      .attr('font-weight', 'bold')\r
\r
    svg.append('text')\r
      .attr('transform', \`translate(\${M.left + centerX + radius + 30},\${M.top + centerY})\`)\r
      .text('Group B')\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text-primary)')\r
      .attr('font-size', '12px')\r
      .attr('font-weight', 'bold')\r
\r
    // Add title\r
    svg.append('text')\r
      .attr('transform', \`translate(\${M.left + centerX},\${M.top - 10})\`)\r
      .text('Split Chord Diagram - Bipartite Network')\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text-primary)')\r
      .attr('font-size', '14px')\r
      .attr('font-weight', 'bold')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}`;export{e as default};