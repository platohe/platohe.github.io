var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
// DonutStack3d: DonutStack3d — isometric pseudo-3D.\r
export const meta = {\r
  id: 'donut-stack3d',\r
  title: 'Donut Stack3d',\r
  desc: 'Donut Stack3d — a radial chart visualization',\r
  category: 'Radial',\r
  component: 'DonutStack3d',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["radial","donut-stack3d"],\r
}\r
\r
export default function DonutStack3d({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    void customData\r
    const g = svg.append('g')\r
    const cx = W / 2, cy = H / 2 + 20\r
    const cos30 = Math.cos(Math.PI / 6), sin30 = Math.sin(Math.PI / 6)\r
    const proj = (x, y, z) => [cx + (x - y) * cos30 * 1.6, cy - z * 2.4 + (x + y) * sin30 * 0.9]\r
    void proj\r
const shade = (hex, f) => { const n = parseInt(hex.slice(1), 16); const r = Math.min(255, ((n >> 16) & 255) * f), gg = Math.min(255, ((n >> 8) & 255) * f), b2 = Math.min(255, (n & 255) * f); return '#' + [r, gg, b2].map(v => Math.round(v).toString(16).padStart(2, '0')).join('') }\r
    for(let tier=0;tier<4;tier++){ const ry=210-tier*34; const col=colors[tier%colors.length]\r
     g.append('ellipse').attr('cx',cx).attr('cy',ry).attr('rx',86-tier*6).attr('ry',(86-tier*6)*0.32).attr('fill','none').attr('stroke',col).attr('stroke-width',16).attr('stroke-opacity',0.8) }\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};