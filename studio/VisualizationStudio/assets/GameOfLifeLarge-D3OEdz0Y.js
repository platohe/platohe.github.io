var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'game-of-life-large',\r
  title: 'Game Of Life Large',\r
  desc: 'Game Of Life Large — a math & simulation chart visualization',\r
  category: 'Math & Simulation',\r
  component: 'GameOfLifeLarge',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["math-&-simulation","game-of-life-large"],\r
}\r
\r
export default function GameOfLifeLarge({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = {"seed":42,"iterations":2000}\r
    const data = { ...DEFAULT_DATA, ...(customData && typeof customData === 'object' && !Array.isArray(customData) ? customData : {}) }\r
    let sd = data.seed || 42\r
    const rnd = () => { sd = (sd * 1103515245 + 12345) & 0x7fffffff; return sd / 0x7fffffff }\r
    const g = svg.append('g')\r
\r
    const cs=9, cols=42, rows=28\r
    let grid=new Array(rows*cols).fill(0)\r
    grid.forEach((_,i)=>{ grid[i]=rnd()<0.3?1:0 })\r
    const step=()=>{ const nx=new Array(rows*cols)\r
      for(let r=0;r<rows;r++)for(let c=0;c<cols;c++){\r
        let n=0\r
        for(let dr=-1;dr<=1;dr++)for(let dc=-1;dc<=1;dc++){ if(!dr&&!dc)continue; const rr=r+dr, cc=c+dc; if(rr>=0&&rr<rows&&cc>=0&&cc<cols)n+=grid[rr*cols+cc] }\r
        nx[r*cols+c]= grid[r*cols+c] ? (n===2||n===3?1:0) : (n===3?1:0)\r
      } return nx }\r
    const gens = Math.min(50, Math.max(5, Math.round((data.iterations || 2000) / 200)))\r
    for(let gen=0;gen<gens;gen++) grid=step()\r
    grid.forEach((v,i)=>{ if(v) g.append('rect').attr('x',(i%cols)*cs+8).attr('y',Math.floor(i/cols)*cs+16).attr('width',cs-1).attr('height',cs-1).attr('fill',colors[0]) })\r
    g.append('text').attr('x', W/2).attr('y', H-6).attr('text-anchor','middle').attr('fill','var(--text-secondary)').attr('font-size','7px').text('GameOfLifeLarge')\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};