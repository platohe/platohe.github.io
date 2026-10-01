var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
// PyramidStack3d: PyramidStack3d — isometric pseudo-3D.\r
export const meta = {\r
  id: 'pyramid-stack3d',\r
  title: 'Pyramid Stack3d',\r
  desc: 'Pyramid Stack3d — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'PyramidStack3d',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","pyramid-stack3d"],\r
}\r
\r
export default function PyramidStack3d({ data: customData }) {\r
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
    const tiers=[[70,'#6366f1'],[54,'#f59e0b'],[38,'#10b981'],[24,'#ef4444']]\r
    tiers.forEach(([s,col],ti)=>{ const zBase=ti*20; const half=s/2\r
     const apex=proj(0,0,zBase+20); const c1=proj(-half,-half,zBase),c2=proj(half,-half,zBase),c3=proj(half,half,zBase),c4=proj(-half,half,zBase)\r
     ;[[c1,c2],[c2,c3],[c3,c4],[c4,c1]].forEach(([a,b])=>g.append('path').attr('d','M'+a[0]+' '+a[1]+'L'+apex[0]+' '+apex[1]+'L'+b[0]+' '+b[1]+'Z').attr('fill',col).attr('fill-opacity',0.8).attr('stroke','var(--bg)')) })\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};