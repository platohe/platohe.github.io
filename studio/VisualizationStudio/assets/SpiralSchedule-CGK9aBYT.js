var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
// SpiralSchedule: Weekday bands along turns.\r
export const meta = {\r
  id: 'spiral-schedule',\r
  title: 'Spiral Schedule',\r
  desc: 'Spiral Schedule — a math & simulation chart visualization',\r
  category: 'Math & Simulation',\r
  component: 'SpiralSchedule',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["math-&-simulation","spiral-schedule"],\r
}\r
\r
export default function SpiralSchedule({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    void customData\r
    const g = svg.append('g')\r
    const cx = 200, cy = 150\r
const days=['Mon','Tue','Wed','Thu','Fri']\r
    days.forEach((dy,di)=>{ const t0=di*0.95; let d=''\r
     for(let t=t0;t<t0+0.8;t+=0.04){ const r=30+t*21; d+=(d?'L':'M')+(cx+Math.cos(t-Math.PI/2)*r)+' '+(cy+Math.sin(t-Math.PI/2)*r) }\r
     g.append('path').attr('d',d).attr('fill','none').attr('stroke',colors[di%colors.length]).attr('stroke-width',14).attr('stroke-opacity',0.55).attr('stroke-linecap','round')\r
     const rm=30+(t0+0.4)*21; const xm=cx+Math.cos(t0+0.4-Math.PI/2)*rm, ym=cy+Math.sin(t0+0.4-Math.PI/2)*rm\r
     g.append('text').attr('x',xm).attr('y',ym+3).attr('text-anchor','middle').attr('font-size','7px').attr('font-weight',700).attr('fill','#fff').text(dy) })\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};