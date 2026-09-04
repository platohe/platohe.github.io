var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
// TunnelRings3d: TunnelRings3d — isometric pseudo-3D.\r
export const meta = {\r
  id: 'tunnel-rings3d',\r
  title: 'Tunnel Rings3d',\r
  desc: 'Tunnel Rings3d — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'TunnelRings3d',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","tunnel-rings3d"],\r
}\r
\r
export default function TunnelRings3d({ data: customData }) {\r
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
    for(let k=0;k<10;k++){ const depth=k; const rr=95-depth*8; const ox=cx+depth*7, oy=cy-6-depth*3\r
     g.append('ellipse').attr('cx',ox).attr('cy',oy).attr('rx',rr).attr('ry',rr*0.62)\r
     .attr('fill','none').attr('stroke',['#6366f1','#8b5cf6','#ec4899'][k%3]).attr('stroke-width',3-depth*0.2).attr('stroke-opacity',0.85-depth*0.06) }\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};