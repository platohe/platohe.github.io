var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'flocking-voronoi',\r
  title: 'Flocking Voronoi',\r
  desc: 'Flocking Voronoi — a math & simulation chart visualization',\r
  category: 'Math & Simulation',\r
  component: 'FlockingVoronoi',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["math-&-simulation","flocking-voronoi"],\r
}\r
\r
export default function FlockingVoronoi({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = {"seed":42,"iterations":2000}\r
    const data = { ...DEFAULT_DATA, ...(customData && typeof customData === 'object' && !Array.isArray(customData) ? customData : {}) }\r
    let sd = data.seed || 42\r
    const rnd = () => { sd = (sd * 1103515245 + 12345) & 0x7fffffff; return sd / 0x7fffffff }\r
    const g = svg.append('g')\r
\r
    const N=24\r
    let bs=[]; for(let i=0;i<N;i++) bs.push({x:60+rnd()*(W-120), y:50+rnd()*(H-110)})\r
    const simSteps = Math.min(30, Math.max(2, Math.round((data.iterations || 2000) / 200)))\r
    for(let t=0;t<simSteps;t++) bs.forEach(b=>{ let vx=0,vy=0; bs.forEach(o=>{ if(o!==b){ vx+=(b.x-o.x)*0.002; vy+=(b.y-o.y)*0.002 } }); b.vx=vx+(rnd()-0.5); b.vy=vy+(rnd()-0.5); b.x=Math.max(40,Math.min(W-40,b.x+b.vx*4)); b.y=Math.max(30,Math.min(H-60,b.y+b.vy*4)) })\r
    const del=d3.Delaunay.from(bs.map(b=>[b.x,b.y]))\r
    const vor=del.voronoi([20,20,W-20,H-40])\r
    bs.forEach((b,i)=>{ const cell=vor.cellPolygon(i); if(cell) g.append('path').attr('d','M'+cell.join('L')+'Z').attr('fill',colors[i%colors.length]).attr('opacity',0.14).attr('stroke',colors[i%colors.length]) ; g.append('circle').attr('cx',b.x).attr('cy',b.y).attr('r',2.5).attr('fill',colors[i%colors.length]) })\r
    g.append('text').attr('x', W/2).attr('y', H-6).attr('text-anchor','middle').attr('fill','var(--text-secondary)').attr('font-size','7px').text('FlockingVoronoi')\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};