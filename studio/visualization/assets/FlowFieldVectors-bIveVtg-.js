var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
// FlowFieldVectors: Arrow grid vector field.\r
let _seed = 12345\r
const rnd = () => { _seed = (_seed * 16807) % 2147483647; return _seed / 2147483647 }\r
export const meta = {\r
  id: 'flow-field-vectors',\r
  title: 'Flow Field Vectors',\r
  desc: 'Flow Field Vectors — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'FlowFieldVectors',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","flow-field-vectors"],\r
}\r
\r
export default function FlowFieldVectors({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    _seed = 12345\r
    void customData\r
    const g = svg.append('g')\r
for(let i=0;i<16;i++)for(let j=0;j<12;j++){ const px2=M.left+i*(IW/15)+6, py2=M.top+j*(IH/11)+6\r
 const ang=Math.sin(i*0.7)*Math.cos(j*0.7)*Math.PI\r
 g.append('line').attr('x1',px2).attr('y1',py2).attr('x2',px2+Math.cos(ang)*9).attr('y2',py2+Math.sin(ang)*9)\r
 .attr('stroke','#6366f1').attr('stroke-width',1.2).attr('marker-end','url(#vv)') }\r
g.append('defs').append('marker').attr('id','vv').attr('viewBox','0 0 6 6').attr('refX',5).attr('refY',3).attr('markerWidth',4).attr('markerHeight',4).attr('orient','auto').append('path').attr('d','M0 0L6 3L0 6z').attr('fill','#6366f1')\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};