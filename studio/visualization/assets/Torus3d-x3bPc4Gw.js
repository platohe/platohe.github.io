var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
// Torus3d: Torus3d — isometric pseudo-3D.\r
export const meta = {\r
  id: 'torus3d',\r
  title: 'Torus3d',\r
  desc: 'Torus3d — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'Torus3d',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","torus3d"],\r
}\r
\r
export default function Torus3d({ data: customData }) {\r
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
    for(let i=0;i<16;i++){ const u=i/16*2*Math.PI; let d=''\r
     for(let t=0;t<=36;t++){ const v=t/36*2*Math.PI; const R2=62,r2=24\r
     const x2=R2+Math.cos(v)*r2; const zz=Math.sin(v)*r2\r
     const sx2=cx+Math.cos(u)*x2, sy2=cy+Math.sin(u)*x2*0.55-zz\r
     d+=(d?'L':'M')+sx2.toFixed(1)+' '+sy2.toFixed(1) }\r
     g.append('path').attr('d',d).attr('fill','none').attr('stroke',['#6366f1','#f59e0b'][i%2]).attr('stroke-width',3.4).attr('stroke-opacity',0.75) }\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};