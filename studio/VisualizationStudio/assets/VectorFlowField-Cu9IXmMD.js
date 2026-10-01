var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH } from './utils'\r
// VectorFlowField: Source-sink radial vectors.\r
export const meta = {\r
  id: 'vector-flow-field',\r
  title: 'Vector Flow Field',\r
  desc: 'Vector Flow Field — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'VectorFlowField',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","vector-flow-field"],\r
}\r
\r
export default function VectorFlowField({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    \r
    void customData\r
    const g = svg.append('g')\r
for(let i=0;i<14;i++)for(let j=0;j<10;j++){ const px2=M.left+i*(IW/13)+8, py2=M.top+j*(IH/9)+8\r
 const dx=px2-M.left-IW/2, dy=py2-M.top-IH/2, dl=Math.hypot(dx,dy)||1\r
 g.append('line').attr('x1',px2).attr('y1',py2).attr('x2',px2+dx/dl*10).attr('y2',py2+dy/dl*10).attr('stroke','#f59e0b').attr('stroke-width',1.3).attr('marker-end','url(#vf)') }\r
g.append('defs').append('marker').attr('id','vf').attr('viewBox','0 0 6 6').attr('refX',5).attr('refY',3).attr('markerWidth',4).attr('markerHeight',4).attr('orient','auto').append('path').attr('d','M0 0L6 3L0 6z').attr('fill','#f59e0b')\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};