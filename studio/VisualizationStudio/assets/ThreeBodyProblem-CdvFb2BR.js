var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'three-body-problem',\r
  title: 'Three Body Problem',\r
  desc: 'Three Body Problem — a math & simulation chart visualization',\r
  category: 'Math & Simulation',\r
  component: 'ThreeBodyProblem',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["math-&-simulation","three-body-problem"],\r
}\r
\r
export default function ThreeBodyProblem({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = {"seed":42,"iterations":2000}\r
    const data = { ...DEFAULT_DATA, ...(customData && typeof customData === 'object' && !Array.isArray(customData) ? customData : {}) }\r
    let sd = data.seed || 42\r
    const rnd = () => { sd = (sd * 1103515245 + 12345) & 0x7fffffff; return sd / 0x7fffffff }\r
    const g = svg.append('g')\r
\r
    const bodies=[{x:-60,y:0,vx:0,vy:0.55},{x:60,y:0,vx:0,vy:-0.55},{x:0,y:-95,vx:0.42,vy:0}]\r
    const trails=[[],[],[]]\r
    const steps = Math.min(3000, Math.max(200, data.iterations || 900))\r
    for(let t=0;t<steps;t++){\r
      bodies.forEach((b,i)=>{\r
        let ax=0, ay=0\r
        bodies.forEach((o,j)=>{ if(i===j)return; const dx=o.x-b.x, dy=o.y-b.y, rr=Math.max(6,Math.hypot(dx,dy)); ax+=dx/Math.pow(rr,3)*900; ay+=dy/Math.pow(rr,3)*900 })\r
        b.vx+=ax*0.004; b.vy+=ay*0.004\r
      })\r
      bodies.forEach((b,i)=>{ b.x+=b.vx*0.5; b.y+=b.vy*0.5; if(isFinite(b.x)&&isFinite(b.y)) trails[i].push([200+b.x*1.1,150+b.y*1.1]) })\r
    }\r
    trails.forEach((T,i)=>{ if(T.length>2) g.append('path').attr('d','M'+T.map(function(q){return q.join(',')}).join('L')).attr('fill','none').attr('stroke',colors[i]).attr('stroke-width',1) })\r
    bodies.forEach((b,i)=>{ if(isFinite(b.x)) g.append('circle').attr('cx',200+b.x*1.1).attr('cy',150+b.y*1.1).attr('r',4).attr('fill',colors[i]) })\r
    g.append('text').attr('x', W/2).attr('y', H-6).attr('text-anchor','middle').attr('fill','var(--text-secondary)').attr('font-size','7px').text('ThreeBodyProblem')\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};