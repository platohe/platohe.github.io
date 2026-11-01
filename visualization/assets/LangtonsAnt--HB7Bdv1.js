var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'langtons-ant',\r
  title: 'Langtons Ant',\r
  desc: 'Langtons Ant — a math & simulation chart visualization',\r
  category: 'Math & Simulation',\r
  component: 'LangtonsAnt',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["math-&-simulation","langtons-ant"],\r
}\r
\r
export default function LangtonsAnt({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = {"seed":42,"iterations":2000}\r
    const data = { ...DEFAULT_DATA, ...(customData && typeof customData === 'object' && !Array.isArray(customData) ? customData : {}) }\r
    let sd = data.seed || 42\r
    const rnd = () => { sd = (sd * 1103515245 + 12345) & 0x7fffffff; return sd / 0x7fffffff }\r
    const g = svg.append('g')\r
\r
    const cs=5, black=new Set()\r
    let ax=Math.floor(W/(2*cs)), ay=Math.floor(H/(2*cs)), dir=0\r
    const maxSteps = Math.min(8000, Math.max(200, data.iterations || 2200))\r
    for(let step=0; step<maxSteps; step++){\r
      const key=ax+','+ay\r
      const isBlack=black.has(key)\r
      dir=(dir+(isBlack?-1:1)+4)%4\r
      if(isBlack) black.delete(key); else black.add(key)\r
      if(dir===0)ax++; else if(dir===1)ay++; else if(dir===2)ax--; else ay--\r
      if(ax<2||ax>W/cs-2||ay<2||ay>H/cs-4) break\r
    }\r
    black.forEach(k=>{ const [bx,by]=k.split(',').map(Number); g.append('rect').attr('x',bx*cs).attr('y',by*cs).attr('width',cs-1).attr('height',cs-1).attr('fill',colors[0]) })\r
    g.append('circle').attr('cx',ax*cs+2).attr('cy',ay*cs+2).attr('r',3).attr('fill','#ef4444')\r
    g.append('text').attr('x', W/2).attr('y', H-6).attr('text-anchor','middle').attr('fill','var(--text-secondary)').attr('font-size','7px').text('LangtonsAnt')\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};