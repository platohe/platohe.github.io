var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
// DoubleSpiral: Mirrored interleaved pair.\r
export const meta = {\r
  id: 'double-spiral',\r
  title: 'Double Spiral',\r
  desc: 'Double Spiral — a math & simulation chart visualization',\r
  category: 'Math & Simulation',\r
  component: 'DoubleSpiral',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["math-&-simulation","double-spiral"],\r
}\r
\r
export default function DoubleSpiral({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    void customData\r
    const g = svg.append('g')\r
    const cx = 200, cy = 150\r
for(let arm=0;arm<2;arm++){ let d=''\r
     for(let t=0;t<5.5*Math.PI;t+=0.07){ const r=5+t*3; const th=t+arm*Math.PI\r
      d+=(d?'L':'M')+(cx+Math.cos(th)*r)+' '+(cy+Math.sin(th)*r) }\r
     g.append('path').attr('d',d).attr('fill','none').attr('stroke',colors[arm%colors.length]).attr('stroke-width',2.2).attr('stroke-opacity',0.85) }\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};