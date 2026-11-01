var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
// RibbonPlot3d: RibbonPlot3d — isometric pseudo-3D.\r
export const meta = {\r
  id: 'ribbon-plot3d',\r
  title: 'Ribbon Plot3d',\r
  desc: 'Ribbon Plot3d — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'RibbonPlot3d',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","ribbon-plot3d"],\r
}\r
\r
export default function RibbonPlot3d({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    void customData\r
    const g = svg.append('g')\r
    const cx = W / 2, cy = H / 2 + 20\r
    const cos30 = Math.cos(Math.PI / 6), sin30 = Math.sin(Math.PI / 6)\r
    const proj = (x, y, z) => [cx + (x - y) * cos30 * 1.6, cy - z * 2.4 + (x + y) * sin30 * 0.9]\r
    void proj\r
for(let k=0;k<6;k++){ let d=''\r
     for(let t=0;t<=16;t++){ const p=proj(t*10-80,k*12-30,26*Math.sin(t*0.4+k*0.7)+k*6)\r
      d+=(d?'L':'M')+p[0].toFixed(1)+' '+p[1].toFixed(1) }\r
     g.append('path').attr('d',d).attr('fill','none').attr('stroke',['#6366f1','#f59e0b','#10b981'][k%3]).attr('stroke-width',10-k).attr('stroke-opacity',0.7) }\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};