var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, colors } from './utils'\r
export const meta = {\r
  id: 'epidemic-sirsimulation',\r
  title: 'Epidemic S I R Simulation',\r
  desc: 'Epidemic S I R Simulation — a math & simulation chart visualization',\r
  category: 'Math & Simulation',\r
  component: 'EpidemicSIRSimulation',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["math-&-simulation","epidemic-s-i-r-simulation"],\r
}\r
\r
export default function EpidemicSIRSimulation({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = {"seed":42,"iterations":300}\r
    const data = { ...DEFAULT_DATA, ...(customData && typeof customData === 'object' && !Array.isArray(customData) ? customData : {}) }\r
    let sd = data.seed || 42\r
    const rnd = () => { sd = (sd * 1103515245 + 12345) & 0x7fffffff; return sd / 0x7fffffff }\r
    const g = svg.append('g')\r
\r
    let S=0.99, I=0.01, Rr=0; const beta=0.35, gam=0.08, series=[[],[],[]]\r
    const timeSteps = Math.min(2000, Math.max(50, Math.round(data.iterations || 300)))\r
    for(let t=0;t<timeSteps;t++){ series[0].push(S); series[1].push(I); series[2].push(Rr); const ni=beta*S*I; S-=ni; I+=ni-gam*I; Rr+=gam*I }\r
    const y=d3.scaleLinear().domain([0,1]).range([H-30,M.top])\r
    ;[['S',series[0],colors[2]],['I',series[1],colors[3]],['R',series[2],colors[0]]].forEach(L=>{\r
      g.append('path').datum(L[1]).attr('d', d3.line().x((d,i)=>M.left+i*(W-M.left-M.right)/Math.max(1,timeSteps-1)).y(d=>y(d))).attr('fill','none').attr('stroke',L[2]).attr('stroke-width',2.2)\r
      g.append('text').attr('x',M.left+6).attr('y',M.top+14+(L[0]==='S'?0:L[0]==='I'?14:28)).attr('fill',L[2]).attr('font-size','9px').text(L[0])\r
    })\r
    g.append('text').attr('x', W/2).attr('y', H-6).attr('text-anchor','middle').attr('fill','var(--text-secondary)').attr('font-size','7px').text('EpidemicSIRSimulation')\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};