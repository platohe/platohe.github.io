var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'forest-fire-ca',\r
  title: 'Forest Fire C A',\r
  desc: 'Forest Fire C A — a math & simulation chart visualization',\r
  category: 'Math & Simulation',\r
  component: 'ForestFireCA',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["math-&-simulation","forest-fire-c-a"],\r
}\r
\r
export default function ForestFireCA({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = {"seed":42,"iterations":2000}\r
    const data = { ...DEFAULT_DATA, ...(customData && typeof customData === 'object' && !Array.isArray(customData) ? customData : {}) }\r
    let sd = data.seed || 42\r
    const rnd = () => { sd = (sd * 1103515245 + 12345) & 0x7fffffff; return sd / 0x7fffffff }\r
    const g = svg.append('g')\r
\r
    const cols=58, rows=42\r
    let grid=new Array(cols*rows).fill(0)\r
    grid.forEach((_,i)=>{ grid[i]=rnd()<0.55?1:0 })\r
    const generations = Math.min(30, Math.max(3, Math.round((data.iterations || 2000) / 200)))\r
    for(let it=0;it<generations;it++){\r
      const fires=[]; grid.forEach((v,i)=>{ if(v===2) fires.push(i) })\r
      fires.forEach(i=>grid[i]=0)\r
      fires.forEach(i=>{ const r=Math.floor(i/cols), c=i%cols; [[1,0],[-1,0],[0,1],[0,-1]].forEach(q=>{ const rr=r+q[0], cc=c+q[1]; if(rr>=0&&rr<rows&&cc>=0&&cc<cols&&grid[rr*cols+cc]===1) grid[rr*cols+cc]=2 }) })\r
      grid.forEach((v,i)=>{ if(v===0&&rnd()<0.02) grid[i]=1 })\r
      if(!fires.length && rnd()<0.3) grid[Math.floor(rnd()*grid.length)]=2\r
    }\r
    const cs=6\r
    grid.forEach((v,i)=>{ if(v) g.append('rect').attr('x',(i%cols)*cs+8).attr('y',Math.floor(i/cols)*cs+14).attr('width',cs-1).attr('height',cs-1).attr('fill', v===2?'#ef4444':'#22c55e') })\r
    g.append('text').attr('x', W/2).attr('y', H-6).attr('text-anchor','middle').attr('fill','var(--text-secondary)').attr('font-size','7px').text('ForestFireCA')\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};