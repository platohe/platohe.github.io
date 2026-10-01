var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'cellular-automaton1d',\r
  title: 'Cellular Automaton1 D',\r
  desc: 'Cellular Automaton1 D — a math & simulation chart visualization',\r
  category: 'Math & Simulation',\r
  component: 'CellularAutomaton1D',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["math-&-simulation","cellular-automaton1-d"],\r
}\r
\r
export default function CellularAutomaton1D({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = {"seed":42,"iterations":2000}\r
    const data = { ...DEFAULT_DATA, ...(customData && typeof customData === 'object' && !Array.isArray(customData) ? customData : {}) }\r
    let sd = data.seed || 42\r
    const rnd = () => { sd = (sd * 1103515245 + 12345) & 0x7fffffff; return sd / 0x7fffffff }\r
    const g = svg.append('g')\r
\r
    const rule=Math.min(255,Math.max(0,Math.round(data.iterations / 8) || 30)), cw=4\r
    const cols=Math.floor(W/cw), gens=Math.floor((H-56)/cw)\r
    let row=new Array(cols).fill(0); row[Math.floor(cols/2)]=1\r
    for(let gy=0; gy<gens; gy++){\r
      row.forEach((v,cx)=>{ if(v) g.append('rect').attr('x',cx*cw).attr('y',20+gy*cw).attr('width',cw-0.5).attr('height',cw-0.5).attr('fill',colors[0]) })\r
      const nx=[]\r
      for(let c=0;c<cols;c++){\r
        const L=row[(c-1+cols)%cols], C=row[c], R=row[(c+1)%cols]\r
        nx.push((rule>>(L*4+C*2+R))&1)\r
      }\r
      row=nx\r
    }\r
    g.append('text').attr('x', W/2).attr('y', H-6).attr('text-anchor','middle').attr('fill','var(--text-secondary)').attr('font-size','7px').text('CellularAutomaton1D')\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};