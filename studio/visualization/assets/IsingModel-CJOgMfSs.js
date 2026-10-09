var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'ising-model',\r
  title: 'Ising Model',\r
  desc: 'Ising Model — a math & simulation chart visualization',\r
  category: 'Math & Simulation',\r
  component: 'IsingModel',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["math-&-simulation","ising-model"],\r
}\r
\r
export default function IsingModel({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = {"seed":42,"iterations":15000}\r
    const data = { ...DEFAULT_DATA, ...(customData && typeof customData === 'object' && !Array.isArray(customData) ? customData : {}) }\r
    let sd = data.seed || 42\r
    const rnd = () => { sd = (sd * 1103515245 + 12345) & 0x7fffffff; return sd / 0x7fffffff }\r
    const g = svg.append('g')\r
\r
    const cols=62, rows=44\r
    let spins=new Array(cols*rows); for(let i=0;i<spins.length;i++) spins[i]=rnd()<0.5?1:-1\r
    const mcSteps = Math.min(80000, Math.max(2000, Math.round(data.iterations || 15000)))\r
    for(let att=0; att<mcSteps; att++){\r
      const i=Math.floor(rnd()*spins.length)\r
      const r=Math.floor(i/cols), c=i%cols\r
      let nb=spins[((r+1)%rows)*cols+c]+spins[((r-1+rows)%rows)*cols+c]+spins[r*cols+(c+1)%cols]+spins[r*cols+(c-1+cols)%cols]\r
      const dE=2*spins[i]*nb\r
      if(dE<=0 || rnd()<Math.exp(-dE/2.2)) spins[i]*=-1\r
    }\r
    const cs=5.6\r
    spins.forEach((s,i)=>{ g.append('rect').attr('x',(i%cols)*cs+6).attr('y',Math.floor(i/cols)*cs+14).attr('width',cs-0.5).attr('height',cs-0.5).attr('fill', s>0?colors[0]:colors[3]) })\r
    g.append('text').attr('x', W/2).attr('y', H-6).attr('text-anchor','middle').attr('fill','var(--text-secondary)').attr('font-size','7px').text('IsingModel')\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};