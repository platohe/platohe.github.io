var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'random-walk2d',\r
  title: 'Random Walk2 D',\r
  desc: 'Random Walk2 D — a math & simulation chart visualization',\r
  category: 'Math & Simulation',\r
  component: 'RandomWalk2D',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["math-&-simulation","random-walk2-d"],\r
}\r
\r
export default function RandomWalk2D({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = {"seed":42,"iterations":2000}\r
    const data = { ...DEFAULT_DATA, ...(customData && typeof customData === 'object' && !Array.isArray(customData) ? customData : {}) }\r
    let sd = data.seed || 42\r
    const rnd = () => { sd = (sd * 1103515245 + 12345) & 0x7fffffff; return sd / 0x7fffffff }\r
    const g = svg.append('g')\r
\r
    let wx=200, wy=150; const wp=[[wx,wy]]\r
    const steps = Math.min(1200, Math.max(100, data.iterations || 600))\r
    for(let k=0;k<steps;k++){ const d=Math.floor(rnd()*4); if(d===0)wx+=8; else if(d===1)wx-=8; else if(d===2)wy+=8; else wy-=8; wx=Math.max(10,Math.min(W-10,wx)); wy=Math.max(10,Math.min(H-20,wy)); wp.push([wx,wy]) }\r
    g.append('path').attr('d','M'+wp.map(q=>q.join(',')).join('L')).attr('fill','none').attr('stroke',colors[4]).attr('stroke-width',1.3)\r
    g.append('text').attr('x', W/2).attr('y', H-6).attr('text-anchor','middle').attr('fill','var(--text-secondary)').attr('font-size','7px').text('RandomWalk2D')\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};