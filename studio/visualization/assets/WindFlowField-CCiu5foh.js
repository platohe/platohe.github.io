var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH } from './utils'\r
// WindFlowField: Streamline ribbons over blob.\r
export const meta = {\r
  id: 'wind-flow-field',\r
  title: 'Wind Flow Field',\r
  desc: 'Wind Flow Field — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'WindFlowField',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","wind-flow-field"],\r
}\r
\r
export default function WindFlowField({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    \r
    void customData\r
    const g = svg.append('g')\r
for(let row2=0;row2<9;row2++){ let px2=M.left, py2=M.top+row2*(IH/8)+6; let dd='M'+px2+' '+py2\r
 while(px2<M.left+IW){ px2+=7; py2+=Math.sin(px2*0.03+row2)*3; dd+='L'+px2+' '+py2 }\r
 g.append('path').attr('d',dd).attr('fill','none').attr('stroke',row2%2?'#93c5fd':'#3b82f6').attr('stroke-opacity',0.7).attr('stroke-width',1.6) }\r
g.append('circle').attr('cx',M.left+IW*0.7).attr('cy',M.top+IH*0.35).attr('r',22).attr('fill','#dbeafe').attr('fill-opacity',0.8)\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};