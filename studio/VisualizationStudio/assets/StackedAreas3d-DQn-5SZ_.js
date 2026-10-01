var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
// StackedAreas3d: StackedAreas3d — isometric pseudo-3D.\r
export const meta = {\r
  id: 'stacked-areas3d',\r
  title: 'Stacked Areas3d',\r
  desc: 'Stacked Areas3d — a areas chart visualization',\r
  category: 'Areas',\r
  component: 'StackedAreas3d',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["areas","stacked-areas3d"],\r
}\r
\r
export default function StackedAreas3d({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    void customData\r
    const g = svg.append('g')\r
    const cx = W / 2, cy = H / 2 + 20\r
    const cos30 = Math.cos(Math.PI / 6), sin30 = Math.sin(Math.PI / 6)\r
    const proj = (x, y, z) => [cx + (x - y) * cos30 * 1.6, cy - z * 2.4 + (x + y) * sin30 * 0.9]\r
    void proj\r
const layers=[['#6366f1',30],['#f59e0b',24],['#10b981',18]]\r
    layers.forEach(([col,amp],li)=>{ let top=''\r
     for(let t=0;t<=20;t++){ const xx=t*8-80; const zz=amp*Math.sin(t*0.5+li)+li*16\r
     const pp=proj(xx,-40,zz); top+=(top?'L':'M')+pp[0].toFixed(1)+' '+pp[1].toFixed(1) }\r
     g.append('path').attr('d',top+'Z').attr('fill',col).attr('fill-opacity',0.75) })\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};