var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
// SpiralTimeline: Company milestones by date.\r
export const meta = {\r
  id: 'spiral-timeline',\r
  title: 'Spiral Timeline',\r
  desc: 'Spiral Timeline — a math & simulation chart visualization',\r
  category: 'Math & Simulation',\r
  component: 'SpiralTimeline',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["math-&-simulation","spiral-timeline"],\r
}\r
\r
export default function SpiralTimeline({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    void customData\r
    const g = svg.append('g')\r
    const cx = 200, cy = 150\r
const evts=[{t:0.2,l:'Founded',v:3},{t:0.9,l:'Seed',v:5},{t:1.6,l:'Series A',v:7},{t:2.4,l:'100k users',v:9},{t:3.3,l:'Profitable',v:6},{t:4.2,l:'IPO',v:11}]\r
    let d=''; for(let t=0;t<4.8*Math.PI;t+=0.06){ const r=8+t*4.6; if(r>126)break\r
     d+=(d?'L':'M')+(cx+Math.cos(t)*r)+' '+(cy+Math.sin(t)*r) }\r
    g.append('path').attr('d',d).attr('fill','none').attr('stroke','var(--border)').attr('stroke-width',1.3)\r
    evts.forEach((e,i)=>{ const r=8+e.t*4.6*2.4; const x=cx+Math.cos(e.t)*r,y=cy+Math.sin(e.t)*r\r
     g.append('circle').attr('cx',x).attr('cy',y).attr('r',e.v).attr('fill',colors[i%colors.length]).attr('fill-opacity',0.85)\r
     g.append('text').attr('x',x).attr('y',y-e.v-4).attr('text-anchor','middle').attr('font-size','7px').attr('fill','var(--text-secondary)').text(e.l) })\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};