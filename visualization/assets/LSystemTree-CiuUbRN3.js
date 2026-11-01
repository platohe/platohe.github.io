var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'lsystem-tree',\r
  title: 'L System Tree',\r
  desc: 'L System Tree — a math & simulation chart visualization',\r
  category: 'Math & Simulation',\r
  component: 'LSystemTree',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-hierarchy"],\r
  tags: ["math-&-simulation","l-system-tree"],\r
}\r
\r
export default function LSystemTree({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = {"seed":42,"iterations":2000}\r
    const data = { ...DEFAULT_DATA, ...(customData && typeof customData === 'object' && !Array.isArray(customData) ? customData : {}) }\r
    let sd = data.seed || 42\r
    const rnd = () => { sd = (sd * 1103515245 + 12345) & 0x7fffffff; return sd / 0x7fffffff }\r
    const g = svg.append('g')\r
\r
    let s='X'\r
    const depth = Math.min(6, Math.max(1, Math.round((data.iterations || 2000) / 500)))\r
    for(let k=0;k<depth;k++){ let o=''; for(const ch of s){ o += ch==='X'?'F+[[-X]-X]-F[-FX]+X' : ch==='F'?'FF' : ch } s=o }\r
    if(s.length>12000) s=s.slice(0,12000)\r
    let cx=W/2, cy=H-40, ang=-Math.PI/2\r
    const st=[]\r
    s.split('').forEach(ch=>{\r
      if(ch==='F'){ const nx=cx+Math.cos(ang)*5, ny=cy+Math.sin(ang)*5; g.append('line').attr('x1',cx).attr('y1',cy).attr('x2',nx).attr('y2',ny).attr('stroke','#65a30d').attr('stroke-width',1); cx=nx; cy=ny }\r
      else if(ch==='+') ang+=Math.PI/7\r
      else if(ch==='-') ang-=Math.PI/7\r
      else if(ch==='[') st.push([cx,cy,ang])\r
      else if(ch===']' && st.length){ const q=st.pop(); cx=q[0]; cy=q[1]; ang=q[2] }\r
    })\r
    g.append('text').attr('x', W/2).attr('y', H-6).attr('text-anchor','middle').attr('fill','var(--text-secondary)').attr('font-size','7px').text('LSystemTree')\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};