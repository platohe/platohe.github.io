var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'venn-diagram',\r
  title: 'Venn Diagram',\r
  desc: 'Venn Diagram — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'VennDiagram',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","venn-diagram"],\r
}\r
\r
export default function VennDiagram({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"id":"A","label":"D3.js","value":45,"color":"#6366f1"},{"id":"B","label":"React","value":38,"color":"#06b6d4"},{"id":"C","label":"Data","value":30,"color":"#10b981"},{"id":"AB","value":20,"parent":["A","B"]},{"id":"BC","value":15,"parent":["B","C"]},{"id":"AC","value":12,"parent":["A","C"]},{"id":"ABC","value":8,"parent":["A","B","C"]}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (customData && Array.isArray(customData)) ? customData : DEFAULT_DATA\r
\r
    const width = W, height = H\r
    const cx = width / 2, cy = height / 2 + 5\r
    const r = 105\r
\r
    const circleData = data.filter(d => d.id === 'A' || d.id === 'B' || d.id === 'C')\r
    const offset = r * 0.52\r
\r
    const positions = [\r
      { x: cx - offset * 0.6, y: cy - offset * 0.4 },\r
      { x: cx + offset * 0.6, y: cy - offset * 0.4 },\r
      { x: cx, y: cy + offset * 0.55 },\r
    ]\r
\r
    circleData.forEach((d, i) => {\r
      svg.append('circle')\r
        .attr('cx', positions[i].x).attr('cy', positions[i].y).attr('r', r)\r
        .attr('fill', d.color).attr('fill-opacity', 0.18)\r
        .attr('stroke', d.color).attr('stroke-width', 2).attr('stroke-opacity', 0.6)\r
\r
      const labelOffset = 1.3\r
      const dx = (positions[i].x - cx) / (r * labelOffset)\r
      const dy = (positions[i].y - cy) / (r * labelOffset)\r
      svg.append('text')\r
        .attr('x', positions[i].x + dx * r).attr('y', positions[i].y + dy * r - 6)\r
        .attr('text-anchor', 'middle').attr('fill', d.color)\r
        .attr('font-size', '13px').attr('font-weight', 700).text(d.label)\r
      svg.append('text')\r
        .attr('x', positions[i].x + dx * r).attr('y', positions[i].y + dy * r + 10)\r
        .attr('text-anchor', 'middle').attr('fill', 'var(--text)')\r
        .attr('font-size', '16px').attr('font-weight', 700).text(d.value)\r
    })\r
\r
    // Intersection labels\r
    const intersections = data.filter(d => d.parent && d.parent.length >= 2)\r
    const interPositions = [\r
      { x: cx, y: cy - offset * 0.85 },\r
      { x: cx + offset * 0.45, y: cy + offset * 0.2 },\r
      { x: cx - offset * 0.45, y: cy + offset * 0.2 },\r
      { x: cx, y: cy + offset * 0.05 },\r
    ]\r
    intersections.forEach((d, i) => {\r
      const pos = interPositions[i]\r
      svg.append('text')\r
        .attr('x', pos.x).attr('y', pos.y + 4)\r
        .attr('text-anchor', 'middle').attr('fill', 'var(--text)')\r
        .attr('font-size', '11px').attr('font-weight', 600).text(d.value)\r
    })\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};