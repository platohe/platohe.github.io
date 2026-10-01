var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
// WireframeSphere3d: WireframeSphere3d — isometric pseudo-3D.\r
export const meta = {\r
  id: 'wireframe-sphere3d',\r
  title: 'Wireframe Sphere3d',\r
  desc: 'Wireframe Sphere3d — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'WireframeSphere3d',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","wireframe-sphere3d"],\r
}\r
\r
export default function WireframeSphere3d({ data: customData }) {\r
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
    for(let la=0;la<7;la++){ const phi=(la/6-0.5)*Math.PI; let d=''\r
     for(let t=0;t<=40;t++){ const th=t/40*2*Math.PI; const rr=88*Math.cos(phi)\r
     const x2=cx+Math.cos(th)*rr, y2=cy+Math.sin(th)*rr*0.5-Math.sin(phi)*70\r
     d+=(d?'L':'M')+x2.toFixed(1)+' '+y2.toFixed(1) }\r
     g.append('path').attr('d',d).attr('fill','none').attr('stroke','#6366f1').attr('stroke-opacity',0.55).attr('stroke-width',1.1) }\r
    for(let lo=0;lo<12;lo++){ const th=lo/12*2*Math.PI; let d=''\r
     for(let t=0;t<=30;t++){ const phi=(t/30-0.5)*Math.PI; const rr=88*Math.cos(phi)\r
     const x2=cx+Math.cos(th)*rr, y2=cy+Math.sin(th)*rr*0.5-Math.sin(phi)*70\r
     d+=(d?'L':'M')+x2.toFixed(1)+' '+y2.toFixed(1) }\r
     g.append('path').attr('d',d).attr('fill','none').attr('stroke','#94a3b8').attr('stroke-opacity',0.5).attr('stroke-width',1) }\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};