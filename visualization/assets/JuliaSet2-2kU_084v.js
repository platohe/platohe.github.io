var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'julia-set2',\r
  title: 'Julia Set2',\r
  desc: 'Julia Set2 — a math & simulation chart visualization',\r
  category: 'Math & Simulation',\r
  component: 'JuliaSet2',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["math-&-simulation","julia-set2"],\r
}\r
\r
export default function JuliaSet2({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = {"seed":42,"iterations":2000}\r
    const data = { ...DEFAULT_DATA, ...(customData && typeof customData === 'object' && !Array.isArray(customData) ? customData : {}) }\r
    let sd = data.seed || 42\r
    const rnd = () => { sd = (sd * 1103515245 + 12345) & 0x7fffffff; return sd / 0x7fffffff }\r
    const g = svg.append('g')\r
\r
    const cell=5, cols=Math.ceil(W/cell), rows=Math.ceil(H/cell)\r
    for(let r=0;r<rows;r++)for(let c=0;c<cols;c++){\r
      let zx=(c/cols)*3-1.5, zy=(r/rows)*2.4-1.2, it=0\r
      const maxIt = Math.min(128, Math.max(8, data.iterations || 32))\r
      while(zx*zx+zy*zy<=4 && it<maxIt){ const t=zx*zx-zy*zy-0.7269; zy=2*zx*zy+0.1889; zx=t; it++ }\r
      g.append('rect').attr('x',c*cell).attr('y',r*cell).attr('width',cell-1).attr('height',cell-1).attr('fill', it===maxIt?'#0f172a':d3.interpolateViridis(it/maxIt))\r
    }\r
    g.append('text').attr('x', W/2).attr('y', H-6).attr('text-anchor','middle').attr('fill','var(--text-secondary)').attr('font-size','7px').text('JuliaSet2')\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};