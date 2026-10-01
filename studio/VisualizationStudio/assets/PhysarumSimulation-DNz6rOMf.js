var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'physarum-simulation',\r
  title: 'Physarum Simulation',\r
  desc: 'Physarum Simulation — a math & simulation chart visualization',\r
  category: 'Math & Simulation',\r
  component: 'PhysarumSimulation',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["math-&-simulation","physarum-simulation"],\r
}\r
\r
export default function PhysarumSimulation({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = {"seed":42,"iterations":2000}\r
    const data = { ...DEFAULT_DATA, ...(customData && typeof customData === 'object' && !Array.isArray(customData) ? customData : {}) }\r
    let sd = data.seed || 42\r
    const rnd = () => { sd = (sd * 1103515245 + 12345) & 0x7fffffff; return sd / 0x7fffffff }\r
    const g = svg.append('g')\r
\r
    const gw=66, gh=48, trail=new Float32Array(gw*gh)\r
    let agents=[]; for(let i=0;i<220;i++) agents.push({x:gw/2,y:gh/2,a:rnd()*Math.PI*2})\r
    const simSteps = Math.min(20, Math.max(2, Math.round((data.iterations || 2000) / 300)))\r
    for(let it=0;it<simSteps;it++){\r
      agents.forEach(a=>{\r
        a.a+=(rnd()-0.5)*0.9; a.x=(a.x+Math.cos(a.a)+gw)%gw; a.y=(a.y+Math.sin(a.a)+gh)%gh\r
        trail[Math.floor(a.y)*gw+Math.floor(a.x)]+=0.6\r
      })\r
      for(let i=0;i<trail.length;i++) trail[i]*=0.94\r
    }\r
    const cs=5.4\r
    for(let yy=0;yy<gh;yy++)for(let xx=0;xx<gw;xx++){ const v=trail[yy*gw+xx]; if(v>0.25) g.append('rect').attr('x',xx*cs).attr('y',yy*cs).attr('width',cs-0.5).attr('height',cs-0.5).attr('fill',d3.interpolateYlOrBr(Math.min(1,v))) }\r
    g.append('text').attr('x', W/2).attr('y', H-6).attr('text-anchor','middle').attr('fill','var(--text-secondary)').attr('font-size','7px').text('PhysarumSimulation')\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};