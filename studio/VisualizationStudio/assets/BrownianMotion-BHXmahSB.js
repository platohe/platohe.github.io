var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'brownian-motion',\r
  title: 'Brownian Motion',\r
  desc: 'Brownian Motion — a math & simulation chart visualization',\r
  category: 'Math & Simulation',\r
  component: 'BrownianMotion',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["math-&-simulation","brownian-motion"],\r
}\r
\r
export default function BrownianMotion({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = {"seed":42,"iterations":2000}\r
    const data = { ...DEFAULT_DATA, ...(customData && typeof customData === 'object' && !Array.isArray(customData) ? customData : {}) }\r
    let sd = data.seed || 42\r
    const rnd = () => { sd = (sd * 1103515245 + 12345) & 0x7fffffff; return sd / 0x7fffffff }\r
    const g = svg.append('g')\r
\r
    const steps = Math.min(400, Math.max(20, data.iterations || 160))\r
    for(let path=0; path<8; path++){\r
      let bx=30, by=H/2; const walk=[[bx,by]]\r
      for(let k=0;k<steps;k++){ bx+=3; by+=(rnd()-0.5)*14; walk.push([bx,by]) }\r
      g.append('path').attr('d','M'+walk.map(q=>q.join(',')).join('L')).attr('fill','none').attr('stroke','var(--border)').attr('stroke-width',1)\r
    }\r
    let mx=30,my=H/2; const mean=[[mx,my]]\r
    for(let k=0;k<steps;k++){ mx+=3; my+=(rnd()-0.5)*14/Math.sqrt(8); mean.push([mx,my]) }\r
    g.append('path').attr('d','M'+mean.map(q=>q.join(',')).join('L')).attr('fill','none').attr('stroke',colors[0]).attr('stroke-width',2.4)\r
    g.append('text').attr('x', W/2).attr('y', H-6).attr('text-anchor','middle').attr('fill','var(--text-secondary)').attr('font-size','7px').text('BrownianMotion')\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};