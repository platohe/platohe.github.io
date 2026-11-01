var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'rossler-attractor',\r
  title: 'Rossler Attractor',\r
  desc: 'Rossler Attractor — a math & simulation chart visualization',\r
  category: 'Math & Simulation',\r
  component: 'RosslerAttractor',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["math-&-simulation","rossler-attractor"],\r
}\r
\r
export default function RosslerAttractor({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = {"seed":42,"iterations":2000}\r
    const data = { ...DEFAULT_DATA, ...(customData && typeof customData === 'object' && !Array.isArray(customData) ? customData : {}) }\r
    let sd = data.seed || 42\r
    const rnd = () => { sd = (sd * 1103515245 + 12345) & 0x7fffffff; return sd / 0x7fffffff }\r
    const g = svg.append('g')\r
\r
    let x=1+rnd()*0.1, y=1+rnd()*0.1, z=1+rnd()*0.1; const pts=[]\r
    const steps = Math.min(5000, Math.max(500, data.iterations || 2600))\r
    for(let i=0;i<steps;i++){\r
      const dx=-y-z, dy=x+0.2*y, dz=0.2+z*(x-5.7)\r
      x+=dx*0.02; y+=dy*0.02; z+=dz*0.02\r
      if(i>150 && isFinite(x)&&isFinite(y)) pts.push([180+x*13+((i%2)*0), 140+y*13])\r
    }\r
    g.append('path').attr('d','M'+pts.map(q=>q.join(',')).join('L')).attr('fill','none').attr('stroke',colors[0]).attr('stroke-width',1.2)\r
    g.append('text').attr('x', W/2).attr('y', H-6).attr('text-anchor','middle').attr('fill','var(--text-secondary)').attr('font-size','7px').text('RosslerAttractor')\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};