var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
// LogarithmicSpiral: Exponential growth curve.\r
export const meta = {\r
  id: 'logarithmic-spiral',\r
  title: 'Logarithmic Spiral',\r
  desc: 'Logarithmic Spiral — a math & simulation chart visualization',\r
  category: 'Math & Simulation',\r
  component: 'LogarithmicSpiral',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["math-&-simulation","logarithmic-spiral"],\r
}\r
\r
export default function LogarithmicSpiral({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    void customData\r
    const g = svg.append('g')\r
    const cx = 200, cy = 150\r
let d=''\r
    for(let t=0;t<5*Math.PI;t+=0.08){ const r=4*Math.exp(0.18*t); if(r>130)break\r
     const x=cx+Math.cos(t)*r,y=cy+Math.sin(t)*r; d+=(d?'L':'M')+x+' '+y }\r
    g.append('path').attr('d',d).attr('fill','none').attr('stroke','#10b981').attr('stroke-width',2.2)\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};