var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'boids-flocking2',\r
  title: 'Boids Flocking2',\r
  desc: 'Boids Flocking2 — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'BoidsFlocking2',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","boids-flocking2"],\r
}\r
\r
export default function BoidsFlocking2({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = {"seed":42,"iterations":2000}\r
    const data = { ...DEFAULT_DATA, ...(customData && typeof customData === 'object' && !Array.isArray(customData) ? customData : {}) }\r
    let sd = data.seed || 42\r
    const rnd = () => { sd = (sd * 1103515245 + 12345) & 0x7fffffff; return sd / 0x7fffffff }\r
    const g = svg.append('g')\r
\r
    const N=30\r
    let bs=[]; for(let i=0;i<N;i++) bs.push({x:rnd()*W,y:rnd()*H,vx:(rnd()-0.5)*3,vy:(rnd()-0.5)*3})\r
    const simSteps = Math.min(40, Math.max(3, Math.round((data.iterations || 2000) / 150)))\r
    for(let t=0;t<simSteps;t++){\r
      bs.forEach(b=>{\r
        let cx=0,cy=0,vx=0,vy=0,sepX=0,sepY=0,n=0\r
        bs.forEach(o=>{ if(o===b)return; const ddx=o.x-b.x, ddy=o.y-b.y, dd=Math.hypot(ddx,ddy); if(dd<70){cx+=o.x;cy+=o.y;vx+=o.vx;vy+=o.vy;n++; if(dd<18){sepX-=ddx;sepY-=ddy}} })\r
        if(n){ b.vx+=(((cx/n)-b.x)*0.02+(vx/n-b.vx)*0.05+sepX*0.03); b.vy+=(((cy/n)-b.y)*0.02+(vy/n-b.vy)*0.05+sepY*0.03) }\r
      })\r
      bs.forEach(b=>{ b.x=(b.x+b.vx+W)%W; b.y=(b.y+b.vy+H)%H })\r
    }\r
    bs.forEach(b=>{\r
      g.append('line').attr('x1',b.x).attr('y1',b.y).attr('x2',b.x+b.vx*3).attr('y2',b.y+b.vy*3).attr('stroke',colors[0]).attr('stroke-width',1.6)\r
      g.append('circle').attr('cx',b.x).attr('cy',b.y).attr('r',2.2).attr('fill',colors[0])\r
    })\r
    g.append('text').attr('x', W/2).attr('y', H-6).attr('text-anchor','middle').attr('fill','var(--text-secondary)').attr('font-size','7px').text('BoidsFlocking2')\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};