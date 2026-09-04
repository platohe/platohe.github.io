var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
// BacterialGrowth: Colony rings with specks.\r
let _seed = 12345\r
const rnd = () => { _seed = (_seed * 16807) % 2147483647; return _seed / 2147483647 }\r
export const meta = {\r
  id: 'bacterial-growth',\r
  title: 'Bacterial Growth',\r
  desc: 'Bacterial Growth — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'BacterialGrowth',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","bacterial-growth"],\r
}\r
\r
export default function BacterialGrowth({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    _seed = 12345\r
    void customData\r
    const g = svg.append('g')\r
const rings=[[86,'rgba(16,185,129,.15)',0],[64,'rgba(16,185,129,.3)',1],[44,'rgba(16,185,129,.45)',2],[26,'rgba(16,185,129,.6)',3]]\r
rings.forEach(([r,c,i2])=>{ g.append('circle').attr('cx',W/2).attr('cy',H/2).attr('r',r).attr('fill',c)\r
 for(let k=0;k<14+i2*8;k++){ const a=rnd()*2*Math.PI; g.append('circle').attr('cx',W/2+Math.cos(a)*(rnd()*r)).attr('cy',H/2+Math.sin(a)*(rnd()*r)).attr('r',1.4).attr('fill','#065f46') } })\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};