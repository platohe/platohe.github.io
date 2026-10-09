var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'pie-sunburst',\r
  title: 'Pie Sunburst',\r
  desc: 'Pie Sunburst — a radial chart visualization',\r
  category: 'Radial',\r
  component: 'PieSunburst',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["radial","pie-sunburst"],\r
}\r
\r
export default function PieSunburst({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
    const cx = W / 2, cy = H / 2\r
    const ringRows = Array.isArray(customData) && customData.length > 0 && customData.every(r => r && typeof r === 'object' && Number.isFinite(Number(r.outer))) ? customData : null\r
    const rings = ringRows\r
      ? ringRows.map((r, i) => ({ inner: Number(r.inner ?? 10), outer: Math.min(150, Number(r.outer)), color: colors[i % colors.length], label: String(r.label ?? String.fromCharCode(65 + i)) }))\r
      : [\r
      { inner: 10, outer: 40, color: colors[0], label: 'A' },\r
      { inner: 10, outer: 40, color: colors[1], label: 'B' },\r
      { inner: 45, outer: 80, color: colors[2], label: 'C' },\r
      { inner: 45, outer: 80, color: colors[3], label: 'D' },\r
      { inner: 85, outer: 130, color: colors[4], label: 'E' },\r
      { inner: 85, outer: 130, color: colors[5], label: 'F' },\r
    ]\r
    const arcs = rings.map(r =>\r
      svg.append('circle').attr('fill', r.color).attr('opacity', 0.6).attr('r', r.outer)\r
    )\r
    const timer = d3.timer(elapsed => {\r
      arcs.forEach((a, i) => {\r
        const s = 1 + Math.sin(elapsed * 0.002 + i * 0.5) * 0.08\r
        const r = parseFloat(a.attr('r'))\r
        a.attr('r', r * s).attr('opacity', 0.4 + Math.sin(elapsed * 0.003 + i) * 0.2)\r
      })\r
    })\r
    return () => timer.stop()\r
  }, [])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};