var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
// GridMesh3d: GridMesh3d — isometric pseudo-3D.\r
export const meta = {\r
  id: 'grid-mesh3d',\r
  title: 'Grid Mesh3d',\r
  desc: 'Grid Mesh3d — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'GridMesh3d',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","grid-mesh3d"],\r
}\r
\r
export default function GridMesh3d({ data: customData }) {\r
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
    for(let i=0;i<=14;i++){ let d='',d2=''\r
     for(let j=0;j<=11;j++){ const xx=i*12-84,yy=j*12-66; const bump=30*Math.exp(-(((i-7)**2+(j-5)**2))/16)\r
     const p=proj(xx,yy,bump); d+=(d?'L':'M')+p[0].toFixed(1)+' '+p[1].toFixed(1)\r
     const xx2=j*12-84,yy2=i*12-66; const bump2=30*Math.exp(-(((j-7)**2+(i-5)**2))/16)\r
     const p2=proj(xx2,yy2,bump2); d2+=(d2?'L':'M')+p2[0].toFixed(1)+' '+p2[1].toFixed(1) }\r
     g.append('path').attr('d',d).attr('fill','none').attr('stroke','#6366f1').attr('stroke-opacity',0.5).attr('stroke-width',0.9)\r
     g.append('path').attr('d',d2).attr('fill','none').attr('stroke','#818cf8').attr('stroke-opacity',0.5).attr('stroke-width',0.9) }\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};