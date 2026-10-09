var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'diffusion-limited-aggregation',\r
  title: 'Diffusion Limited Aggregation',\r
  desc: 'Diffusion Limited Aggregation — a math & simulation chart visualization',\r
  category: 'Math & Simulation',\r
  component: 'DiffusionLimitedAggregation',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["math-&-simulation","diffusion-limited-aggregation"],\r
}\r
\r
export default function DiffusionLimitedAggregation({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = {"seed":42,"iterations":2000}\r
    const data = { ...DEFAULT_DATA, ...(customData && typeof customData === 'object' && !Array.isArray(customData) ? customData : {}) }\r
    let sd = data.seed || 42\r
    const rnd = () => { sd = (sd * 1103515245 + 12345) & 0x7fffffff; return sd / 0x7fffffff }\r
    const g = svg.append('g')\r
\r
    const stick=new Set(['0,0'])\r
    const particles = Math.min(800, Math.max(50, data.iterations || 420))\r
    for(let p=0;p<particles;p++){\r
      let px=Math.round((rnd()-0.5)*60), py=Math.round((rnd()-0.5)*60)\r
      for(let s=0;s<260;s++){\r
        const near=[[1,0],[-1,0],[0,1],[0,-1]].some(q=>stick.has((px+q[0])+','+(py+q[1])))\r
        if(near){ stick.add(px+','+py); break }\r
        const d=Math.floor(rnd()*4); if(d===0)px++; else if(d===1)px--; else if(d===2)py++; else py--\r
        if(Math.abs(px)>46||Math.abs(py)>34) break\r
      }\r
    }\r
    stick.forEach(k=>{ const [sx,sy]=k.split(',').map(Number); g.append('circle').attr('cx',sx*4.2+200).attr('cy',sy*4.2+140).attr('r',1.8).attr('fill',colors[2]) })\r
    g.append('text').attr('x', W/2).attr('y', H-6).attr('text-anchor','middle').attr('fill','var(--text-secondary)').attr('font-size','7px').text('DiffusionLimitedAggregation')\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};