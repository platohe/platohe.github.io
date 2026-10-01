var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
// SpiralClock: Hours unwinding outward.\r
export const meta = {\r
  id: 'spiral-clock',\r
  title: 'Spiral Clock',\r
  desc: 'Spiral Clock — a math & simulation chart visualization',\r
  category: 'Math & Simulation',\r
  component: 'SpiralClock',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["math-&-simulation","spiral-clock"],\r
}\r
\r
export default function SpiralClock({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    void customData\r
    const g = svg.append('g')\r
    const cx = 200, cy = 150\r
let d=''; for(let t=0;t<2.6*Math.PI;t+=0.05){ const r=14+t*17; d+=(d?'L':'M')+(cx+Math.cos(t-Math.PI/2)*r)+' '+(cy+Math.sin(t-Math.PI/2)*r) }\r
    g.append('path').attr('d',d).attr('fill','none').attr('stroke','var(--border)')\r
    ;[['6am',0],['noon',0.9],['6pm',1.9],['now',2.45]].forEach(([lb,t])=>{ const r=14+t*17\r
     const x=cx+Math.cos(t-Math.PI/2)*r,y=cy+Math.sin(t-Math.PI/2)*r\r
     g.append('circle').attr('cx',x).attr('cy',y).attr('r',5).attr('fill','#6366f1')\r
     g.append('text').attr('x',x+9).attr('y',y+3).attr('font-size','7.5px').attr('fill','var(--text-secondary)').text(lb) })\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};