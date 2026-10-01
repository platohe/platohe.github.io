var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'henon-attractor-variant',\r
  title: 'Henon Attractor Variant',\r
  desc: 'Henon Attractor Variant — a math & simulation chart visualization',\r
  category: 'Math & Simulation',\r
  component: 'HenonAttractorVariant',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["math-&-simulation","henon-attractor-variant"],\r
}\r
\r
export default function HenonAttractorVariant({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = {"seed":42,"iterations":2000}\r
    const data = { ...DEFAULT_DATA, ...(customData && typeof customData === 'object' && !Array.isArray(customData) ? customData : {}) }\r
    let sd = data.seed || 42\r
    const rnd = () => { sd = (sd * 1103515245 + 12345) & 0x7fffffff; return sd / 0x7fffffff }\r
    const g = svg.append('g')\r
\r
    let hx=0.1, hy=0; const hp=[]\r
    const aa=1.2, bb=0.3\r
    const points = Math.min(8000, Math.max(500, data.iterations || 3200))\r
    for(let i=0;i<points;i++){ const nx=1-aa*hx*hx+hy; hy=bb*hx; hx=nx; if(i>60&&isFinite(hx)&&Math.abs(hx)<3) hp.push([hx*105+200, hy*105+150]) }\r
    g.selectAll('circle.hv').data(hp.filter((_,i)=>i%3===0)).join('circle').attr('cx',d=>d[0]).attr('cy',d=>d[1]).attr('r',0.9).attr('fill',colors[6]).attr('opacity',0.8)\r
    g.append('text').attr('x', W/2).attr('y', H-6).attr('text-anchor','middle').attr('fill','var(--text-secondary)').attr('font-size','7px').text('HenonAttractorVariant')\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};