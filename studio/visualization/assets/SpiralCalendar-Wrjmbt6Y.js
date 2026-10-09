var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
// SpiralCalendar: Twelve month-cells along one turn.\r
export const meta = {\r
  id: 'spiral-calendar',\r
  title: 'Spiral Calendar',\r
  desc: 'Spiral Calendar — a math & simulation chart visualization',\r
  category: 'Math & Simulation',\r
  component: 'SpiralCalendar',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["math-&-simulation","spiral-calendar"],\r
}\r
\r
export default function SpiralCalendar({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    void customData\r
    const g = svg.append('g')\r
    const cx = 200, cy = 150\r
const months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']\r
    let d=''; for(let t=0;t<2*Math.PI+0.02;t+=0.04){ const r=34+t*15.5\r
     d+=(d?'L':'M')+(cx+Math.cos(t-Math.PI/2)*r)+' '+(cy+Math.sin(t-Math.PI/2)*r) }\r
    g.append('path').attr('d',d).attr('fill','none').attr('stroke','var(--border)').attr('stroke-width',1.2)\r
    months.forEach((m,i)=>{ const t=i/12*2*Math.PI; const r=34+t*15.5+16\r
     const x=cx+Math.cos(t-Math.PI/2)*r,y=cy+Math.sin(t-Math.PI/2)*r\r
     g.append('circle').attr('cx',x).attr('cy',y).attr('r',[31,28,31,30,31,30,31,31,30,31,30,31][i]*0.16).attr('fill',colors[i%colors.length]).attr('fill-opacity',0.7)\r
     g.append('text').attr('x',x).attr('y',y+2.5).attr('text-anchor','middle').attr('font-size','6.5px').attr('font-weight',700).attr('fill','#fff').text(m) })\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};