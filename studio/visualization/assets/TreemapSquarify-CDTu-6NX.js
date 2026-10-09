var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'treemap-squarify',\r
  title: 'Treemap Squarify',\r
  desc: 'Treemap Squarify — a hierarchies chart visualization',\r
  category: 'Hierarchies',\r
  component: 'TreemapSquarify',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-hierarchy"],\r
  tags: ["hierarchies","treemap-squarify"],\r
}\r
\r
export default function TreemapSquarify({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
    const sqRows = Array.isArray(customData) && customData.length > 0 && Number.isFinite(Number(customData[0]?.value)) ? customData : null\r
    const data = sqRows\r
      ? sqRows.map((r, i) => ({ label: String(r.label ?? String.fromCharCode(65 + i)), value: Number(r.value), color: colors[i % colors.length] }))\r
      : [\r
      { label: 'A', value: 35, color: colors[0] },\r
      { label: 'B', value: 25, color: colors[1] },\r
      { label: 'C', value: 20, color: colors[2] },\r
      { label: 'D', value: 15, color: colors[3] },\r
      { label: 'E', value: 5, color: colors[4] },\r
    ]\r
    const total = data.reduce((s, d) => s + d.value, 0)\r
    const cols = 3, rows = 2, bw = (W - 30) / cols, bh = (H - 50) / rows\r
    const rects = data.map((d, i) => ({ ...d, x: (i % cols) * bw + 10, y: Math.floor(i / cols) * bh + 25 }))\r
    const g = svg.append('g')\r
    const rEls = rects.map(r =>\r
      g.append('rect').attr('x', r.x).attr('y', r.y).attr('width', bw - 4).attr('height', bh - 4)\r
        .attr('fill', r.color).attr('opacity', 0.8).attr('rx', 3)\r
    )\r
    const timer = d3.timer(elapsed => {\r
      rects.forEach((r, i) => {\r
        const w = (bw - 4) * (0.7 + Math.sin(elapsed * 0.002 + i * 0.7) * 0.3)\r
        const h = (bh - 4) * (0.7 + Math.cos(elapsed * 0.002 + i * 0.5) * 0.3)\r
        rEls[i].attr('width', w).attr('height', h).attr('x', r.x + (bw - 4 - w) / 2).attr('y', r.y + (bh - 4 - h) / 2)\r
      })\r
    })\r
    return () => timer.stop()\r
  }, [])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};