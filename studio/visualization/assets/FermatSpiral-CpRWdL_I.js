var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
// FermatSpiral: Sunflower double-arm spiral.\r
export const meta = {\r
  id: 'fermat-spiral',\r
  title: 'Fermat Spiral',\r
  desc: 'Fermat Spiral — a math & simulation chart visualization',\r
  category: 'Math & Simulation',\r
  component: 'FermatSpiral',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["math-&-simulation","fermat-spiral"],\r
}\r
\r
export default function FermatSpiral({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    void customData\r
    const g = svg.append('g')\r
    const cx = 200, cy = 150\r
for(let arm=0;arm<2;arm++){ let d=''\r
     for(let t=0;t<11;t+=0.09){ const r=13*Math.sqrt(t); const th=t+arm*Math.PI\r
      d+=(d?'L':'M')+(cx+Math.cos(th)*r)+' '+(cy+Math.sin(th)*r) }\r
     g.append('path').attr('d',d).attr('fill','none').attr('stroke','#f59e0b').attr('stroke-width',2) }\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};