var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH } from './utils'\r
// AntForaging: Pheromone trails nest→food.\r
let _seed = 12345\r
const rnd = () => { _seed = (_seed * 16807) % 2147483647; return _seed / 2147483647 }\r
export const meta = {\r
  id: 'ant-foraging',\r
  title: 'Ant Foraging',\r
  desc: 'Ant Foraging — a math & simulation chart visualization',\r
  category: 'Math & Simulation',\r
  component: 'AntForaging',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["math-&-simulation","ant-foraging"],\r
}\r
\r
export default function AntForaging({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    _seed = 12345\r
    void customData\r
    const g = svg.append('g')\r
const nest=[70,220],food=[330,70]\r
g.append('circle').attr('cx',nest[0]).attr('cy',nest[1]).attr('r',9).attr('fill','#78350f')\r
g.append('circle').attr('cx',food[0]).attr('cy',food[1]).attr('r',7).attr('fill','#10b981')\r
for(let a=0;a<8;a++){ let px2=nest[0],py2=nest[1]; let dd='M'+px2+' '+py2\r
 for(let s=0;s<24;s++){ px2+=(food[0]-px2)/24+(rnd()-0.5)*16; py2+=(food[1]-py2)/24+(rnd()-0.5)*16; dd+='L'+px2+' '+py2 }\r
 g.append('path').attr('d',dd).attr('fill','none').attr('stroke','#a16207').attr('stroke-width',1.1).attr('stroke-opacity',0.5) }\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};