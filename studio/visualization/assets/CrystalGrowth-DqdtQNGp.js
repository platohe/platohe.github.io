var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
// CrystalGrowth: Dendritic crystal aggregate.\r
let _seed = 12345\r
const rnd = () => { _seed = (_seed * 16807) % 2147483647; return _seed / 2147483647 }\r
export const meta = {\r
  id: 'crystal-growth',\r
  title: 'Crystal Growth',\r
  desc: 'Crystal Growth — a math & simulation chart visualization',\r
  category: 'Math & Simulation',\r
  component: 'CrystalGrowth',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["math-&-simulation","crystal-growth"],\r
}\r
\r
export default function CrystalGrowth({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    _seed = 12345\r
    void customData\r
    const g = svg.append('g')\r
const cxp=W/2,cyp=H/2\r
g.append('circle').attr('cx',cxp).attr('cy',cyp).attr('r',5).attr('fill','#6366f1')\r
for(let b=0;b<9;b++){ const base=b/9*2*Math.PI; let r=6\r
 for(let s=0;s<5;s++){ const th=base+(rnd()-0.5)*0.5; const len=14+rnd()*22\r
 g.append('line').attr('x1',cxp+Math.cos(th)*r).attr('y1',cyp+Math.sin(th)*r).attr('x2',cxp+Math.cos(th)*(r+len)).attr('y2',cyp+Math.sin(th)*(r+len)).attr('stroke',colors[b%colors.length]).attr('stroke-width',3-s*0.5)\r
 r+=len } }\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};