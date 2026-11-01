var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
// ScatterCloud3d: ScatterCloud3d — isometric pseudo-3D.\r
export const meta = {\r
  id: 'scatter-cloud3d',\r
  title: 'Scatter Cloud3d',\r
  desc: 'Scatter Cloud3d — a dots chart visualization',\r
  category: 'Dots',\r
  component: 'ScatterCloud3d',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["dots","scatter-cloud3d"],\r
}\r
\r
export default function ScatterCloud3d({ data: customData }) {\r
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
    let seedS=11; const rs=()=>{ seedS=(seedS*16807)%2147483647; return seedS/2147483647 }\r
    for(let i=0;i<120;i++){ const xx=(rs()-0.5)*150,yy=(rs()-0.5)*110,zz=rs()*60\r
     const p=proj(xx,yy,zz); const fl=proj(xx,yy,0)\r
     g.append('line').attr('x1',p[0]).attr('y1',p[1]).attr('x2',fl[0]).attr('y2',fl[1]).attr('stroke','var(--border)').attr('stroke-dasharray','1,2').attr('stroke-opacity',0.4)\r
     g.append('circle').attr('cx',p[0]).attr('cy',p[1]).attr('r',2.4).attr('fill',colors[Math.floor(zz/12)%10]).attr('fill-opacity',0.85) }\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};