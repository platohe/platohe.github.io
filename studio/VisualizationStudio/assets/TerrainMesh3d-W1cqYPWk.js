var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
// TerrainMesh3d: TerrainMesh3d — isometric pseudo-3D.\r
export const meta = {\r
  id: 'terrain-mesh3d',\r
  title: 'Terrain Mesh3d',\r
  desc: 'Terrain Mesh3d — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'TerrainMesh3d',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","terrain-mesh3d"],\r
}\r
\r
export default function TerrainMesh3d({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    void customData\r
    const g = svg.append('g')\r
    const cx = W / 2, cy = H / 2 + 20\r
    const cos30 = Math.cos(Math.PI / 6), sin30 = Math.sin(Math.PI / 6)\r
    const proj = (x, y, z) => [cx + (x - y) * cos30 * 1.6, cy - z * 2.4 + (x + y) * sin30 * 0.9]\r
    void proj\r
let seedT=5; const rt=()=>{ seedT=(seedT*16807)%2147483647; return seedT/2147483647 }\r
    for(let i=0;i<14;i++)for(let j=0;j<10;j++){ const xx=i*12-78,yy=j*12-54\r
     const z=(rt()*14+18*Math.exp(-((i-7)**2+(j-5)**2)/18))\r
     const p1=proj(xx,yy,z),p2=proj(xx+12,yy,z),p3=proj(xx+12,yy+12,z),p4=proj(xx,yy+12,z)\r
     g.append('path').attr('d','M'+p1[0]+' '+p1[1]+'L'+p2[0]+' '+p2[1]+'L'+p3[0]+' '+p3[1]+'L'+p4[0]+' '+p4[1]+'Z')\r
     .attr('fill',z>22?'#84cc16':z>14?'#facc15':z>8?'#f97316':'#dc2626').attr('fill-opacity',0.85).attr('stroke','var(--bg)').attr('stroke-width',0.4) }\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};