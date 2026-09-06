var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
// GoldenSpiral: Golden rectangles overlay.\r
export const meta = {\r
  id: 'golden-spiral',\r
  title: 'Golden Spiral',\r
  desc: 'Golden Spiral — a math & simulation chart visualization',\r
  category: 'Math & Simulation',\r
  component: 'GoldenSpiral',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["math-&-simulation","golden-spiral"],\r
}\r
\r
export default function GoldenSpiral({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    void customData\r
    const g = svg.append('g')\r
    const cx = 200, cy = 150\r
;[[cx-52,cy-40,104,'rgba(99,102,241,.12)'],[cx-52,cy+64,64,'rgba(245,158,11,.12)'],[cx+12,cy+12,52,'rgba(16,185,129,.12)'],[cx+38,cy-40,26,'rgba(239,68,68,.12)']].forEach(([rx,ry,s,c])=>{\r
     g.append('rect').attr('x',rx).attr('y',ry).attr('width',s).attr('height',s).attr('fill',c).attr('stroke','var(--border)').attr('stroke-opacity',0.4) })\r
    let d=''; for(let t=0;t<4.6*Math.PI;t+=0.06){ const r=3.2*Math.exp(0.187*t); if(r>118)break\r
     d+=(d?'L':'M')+(cx+Math.cos(t)*r)+' '+(cy+Math.sin(t)*r) }\r
    g.append('path').attr('d',d).attr('fill','none').attr('stroke','#6366f1').attr('stroke-width',2.4)\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};