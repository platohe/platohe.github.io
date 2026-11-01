var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
// SurfacePlot3d: SurfacePlot3d — isometric pseudo-3D.\r
export const meta = {\r
  id: 'surface-plot3d',\r
  title: 'Surface Plot3d',\r
  desc: 'Surface Plot3d — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'SurfacePlot3d',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","surface-plot3d"],\r
}\r
\r
export default function SurfacePlot3d({ data: customData }) {\r
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
    for(let i=0;i<12;i++)for(let j=0;j<9;j++){ const xx=i*14-77,yy=j*14-56\r
     const z=26*Math.exp(-((xx*xx+yy*yy))/2600)\r
     const p1=proj(xx,yy,z),p2=proj(xx+14,yy,z),p3=proj(xx+14,yy+14,z),p4=proj(xx,yy+14,z)\r
     g.append('path').attr('d','M'+p1[0]+' '+p1[1]+'L'+p2[0]+' '+p2[1]+'L'+p3[0]+' '+p3[1]+'L'+p4[0]+' '+p4[1]+'Z')\r
     .attr('fill',d3.interpolateRgbBasis(['#1e3a8a','#93c5fd'])(z/26)).attr('stroke','var(--bg)').attr('stroke-width',0.5) }\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};