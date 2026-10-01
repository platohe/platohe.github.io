var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'koch-snowflake',\r
  title: 'Koch Snowflake',\r
  desc: 'Koch Snowflake — a math & simulation chart visualization',\r
  category: 'Math & Simulation',\r
  component: 'KochSnowflake',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["math-&-simulation","koch-snowflake"],\r
}\r
\r
export default function KochSnowflake({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = {"seed":42,"iterations":2000}\r
    const data = { ...DEFAULT_DATA, ...(customData && typeof customData === 'object' && !Array.isArray(customData) ? customData : {}) }\r
    let sd = data.seed || 42\r
    const rnd = () => { sd = (sd * 1103515245 + 12345) & 0x7fffffff; return sd / 0x7fffffff }\r
    const g = svg.append('g')\r
\r
    let poly=[[200,64],[116,208],[284,208],[200,64]]\r
    const it=(Pp)=>{ const O=[]; for(let i=0;i<Pp.length-1;i++){ const ax=Pp[i][0], ay=Pp[i][1], bx=Pp[i+1][0], by=Pp[i+1][1]; const dx=(bx-ax)/3, dy=(by-ay)/3; const x1=ax+dx,y1=ay+dy,x2=ax+2*dx,y2=ay+2*dy; const angs=Math.atan2(y2-y1,x2-x1)-Math.PI/3, L=Math.hypot(dx,dy); O.push([ax,ay],[x1,y1],[x1+L*Math.cos(angs),y1+L*Math.sin(angs)],[x2,y2]) } O.push(Pp[Pp.length-1]); return O }\r
    const depth = Math.min(6, Math.max(1, Math.round((data.iterations || 2000) / 500)))\r
    for(let k=0;k<depth;k++) poly=it(poly)\r
    g.append('path').attr('d','M'+poly.map(q=>q.join(',')).join('L')).attr('fill',colors[2]).attr('fill-opacity',0.08).attr('stroke',colors[2]).attr('stroke-width',1.1)\r
    g.append('text').attr('x', W/2).attr('y', H-6).attr('text-anchor','middle').attr('fill','var(--text-secondary)').attr('font-size','7px').text('KochSnowflake')\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};