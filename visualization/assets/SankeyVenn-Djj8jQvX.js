var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'sankey-venn',\r
  title: 'Sankey Venn',\r
  desc: 'Sankey Venn — a networks chart visualization',\r
  category: 'Networks',\r
  component: 'SankeyVenn',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-shape"],\r
  tags: ["networks","sankey-venn"],\r
}\r
\r
export default function SankeyVenn({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = {"sets":["A","B","C"],"intersections":[{"set":"A","value":40},{"set":"B","value":35},{"set":"C","value":30},{"set":"A∩B","value":15},{"set":"A∩C","value":10},{"set":"B∩C","value":12},{"set":"A∩B∩C","value":5}]}\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = customData || DEFAULT_DATA\r
\r
    const centerX = IW / 2\r
    const centerY = IH / 2\r
    const radius = Math.min(IW, IH) / 2 - 40\r
\r
    // Draw three overlapping circles\r
    const angleOffset = Math.PI / 6\r
    const positions = [\r
      { x: centerX - radius * 0.4, y: centerY - radius * 0.3 },\r
      { x: centerX + radius * 0.4, y: centerY - radius * 0.3 },\r
      { x: centerX, y: centerY + radius * 0.4 },\r
    ]\r
\r
    // Draw circles with transparency\r
    positions.forEach((pos, i) => {\r
      svg.append('circle')\r
        .attr('cx', pos.x + M.left)\r
        .attr('cy', pos.y + M.top)\r
        .attr('r', radius * 0.65)\r
        .attr('fill', colors[i % colors.length])\r
        .attr('fill-opacity', 0.2)\r
        .attr('stroke', colors[i % colors.length])\r
        .attr('stroke-width', 2)\r
        .attr('stroke-opacity', 0.8)\r
    })\r
\r
    // Draw labels\r
    positions.forEach((pos, i) => {\r
      svg.append('text')\r
        .attr('transform', \`translate(\${M.left + pos.x},\${M.top + pos.y})\`)\r
        .attr('text-anchor', 'middle')\r
        .attr('dominant-baseline', 'middle')\r
        .attr('fill', colors[i % colors.length])\r
        .attr('font-size', '16px')\r
        .attr('font-weight', 'bold')\r
        .text(data.sets[i])\r
    })\r
\r
    // Draw intersection values\r
    const intersectionPositions = [\r
      { x: centerX - radius * 0.15, y: centerY - radius * 0.15, label: 'A∩B' },\r
      { x: centerX + radius * 0.15, y: centerY - radius * 0.15, label: 'A∩C' },\r
      { x: centerX, y: centerY + radius * 0.1, label: 'B∩C' },\r
      { x: centerX, y: centerY, label: 'A∩B∩C' },\r
    ]\r
\r
    data.intersections.forEach(inter => {\r
      const match = intersectionPositions.find(p => p.label === inter.set)\r
      if (match) {\r
        svg.append('text')\r
          .attr('transform', \`translate(\${M.left + match.x},\${M.top + match.y})\`)\r
          .attr('text-anchor', 'middle')\r
          .attr('dominant-baseline', 'middle')\r
          .attr('fill', 'var(--text-primary)')\r
          .attr('font-size', '12px')\r
          .attr('font-weight', 'bold')\r
          .text(inter.value)\r
      }\r
    })\r
\r
    // Title\r
    svg.append('text')\r
      .attr('transform', \`translate(\${M.left + IW / 2},\${M.top - 10})\`)\r
      .text('Sankey-Venn - Set Relationships')\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text-primary)')\r
      .attr('font-size', '14px')\r
      .attr('font-weight', 'bold')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};