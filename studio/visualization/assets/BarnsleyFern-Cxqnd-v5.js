var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'barnsley-fern',\r
  title: 'Barnsley Fern',\r
  desc: 'Barnsley Fern — a math & simulation chart visualization',\r
  category: 'Math & Simulation',\r
  component: 'BarnsleyFern',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["math-&-simulation","barnsley-fern"],\r
}\r
\r
export default function BarnsleyFern({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = {"seed":42,"iterations":2000}\r
    const data = { ...DEFAULT_DATA, ...(customData && typeof customData === 'object' && !Array.isArray(customData) ? customData : {}) }\r
    let sd = data.seed || 42\r
    const rnd = () => { sd = (sd * 1103515245 + 12345) & 0x7fffffff; return sd / 0x7fffffff }\r
    const g = svg.append('g')\r
\r
    let fx=0, fy=0\r
    const points = Math.min(8000, Math.max(500, data.iterations || 4000))\r
    for(let i=0;i<points;i++){\r
      const r=rnd()\r
      if(r<0.01){ fx=0; fy=0.16*fy }\r
      else if(r<0.86){ const nx=0.85*fx+0.04*fy; fy=-0.04*fx+0.85*fy+1.6; fx=nx }\r
      else if(r<0.93){ const nx=0.2*fx-0.26*fy; fy=0.23*fx+0.22*fy+1.6; fx=nx }\r
      else { const nx=-0.15*fx+0.28*fy; fy=0.26*fx+0.24*fy+0.44; fx=nx }\r
      if(i%2===0) g.append('circle').attr('cx',fx*34+200).attr('cy',290-fy*30).attr('r',0.8).attr('fill','#16a34a')\r
    }\r
    g.append('text').attr('x', W/2).attr('y', H-6).attr('text-anchor','middle').attr('fill','var(--text-secondary)').attr('font-size','7px').text('BarnsleyFern')\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};