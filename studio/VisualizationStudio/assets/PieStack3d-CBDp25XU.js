var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
// PieStack3d: PieStack3d — isometric pseudo-3D.\r
export const meta = {\r
  id: 'pie-stack3d',\r
  title: 'Pie Stack3d',\r
  desc: 'Pie Stack3d — a radial chart visualization',\r
  category: 'Radial',\r
  component: 'PieStack3d',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["radial","pie-stack3d"],\r
}\r
\r
export default function PieStack3d({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    void customData\r
    const g = svg.append('g')\r
    const cx = W / 2, cy = H / 2 + 20\r
    const cos30 = Math.cos(Math.PI / 6), sin30 = Math.sin(Math.PI / 6)\r
    const proj = (x, y, z) => [cx + (x - y) * cos30 * 1.6, cy - z * 2.4 + (x + y) * sin30 * 0.9]\r
    void proj\r
for(let tier=0;tier<3;tier++){ const zz=190-tier*26; const segs=[[0,2.1],[2.1,3.7],[3.7,6.28]]\r
     segs.forEach(([a0,a1],si)=>{ const arc=d3.arc().innerRadius(0).outerRadius(64-tier*8).startAngle(a0).endAngle(a1)\r
     g.append('path').attr('d',arc({})).attr('transform','translate('+cx+','+zz+')').attr('fill',colors[si%colors.length]).attr('fill-opacity',0.85).attr('stroke','var(--bg)').attr('stroke-width',1.4) }) }\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};