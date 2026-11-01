var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
// ParticleFlowFields: Curl-noise particle traces.\r
let _seed = 12345\r
const rnd = () => { _seed = (_seed * 16807) % 2147483647; return _seed / 2147483647 }\r
export const meta = {\r
  id: 'particle-flow-fields',\r
  title: 'Particle Flow Fields',\r
  desc: 'Particle Flow Fields — a animation chart visualization',\r
  category: 'Animation',\r
  component: 'ParticleFlowFields',\r
  complexity: 'beginner',\r
  interactivity: ["animate"],\r
  d3Api: ["d3-scale"],\r
  tags: ["animation","particle-flow-fields"],\r
}\r
\r
export default function ParticleFlowFields({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    _seed = 12345\r
    void customData\r
    const g = svg.append('g')\r
for(let p=0;p<60;p++){ let px2=rnd()*IW, py2=rnd()*IH; let dd='M'+(M.left+px2)+' '+(M.top+py2)\r
 for(let s=0;s<30;s++){ const ang=Math.sin(px2*0.04)*Math.cos(py2*0.04)*Math.PI; px2+=Math.cos(ang)*4; py2+=Math.sin(ang)*4; dd+='L'+(M.left+px2)+' '+(M.top+py2) }\r
 g.append('path').attr('d',dd).attr('fill','none').attr('stroke',colors[p%colors.length]).attr('stroke-opacity',0.5).attr('stroke-width',1) }\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};