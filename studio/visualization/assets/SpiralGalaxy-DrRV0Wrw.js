var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
// SpiralGalaxy: Two-arm star field.\r
export const meta = {\r
  id: 'spiral-galaxy',\r
  title: 'Spiral Galaxy',\r
  desc: 'Spiral Galaxy — a math & simulation chart visualization',\r
  category: 'Math & Simulation',\r
  component: 'SpiralGalaxy',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["math-&-simulation","spiral-galaxy"],\r
}\r
\r
export default function SpiralGalaxy({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    void customData\r
    const g = svg.append('g')\r
    const cx = 200, cy = 150\r
let seed=7; const rnd=()=>{ seed=(seed*16807)%2147483647; return seed/2147483647 }\r
    for(let i=0;i<420;i++){ const arm=i%2, t=rnd()*5.2*Math.PI*0.62, r=4+t*4.6\r
     const th=t+arm*Math.PI+(rnd()-0.5)*0.55\r
     g.append('circle').attr('cx',cx+Math.cos(th)*r).attr('cy',cy+Math.sin(th)*r*0.72).attr('r',rnd()*1.6+0.4)\r
      .attr('fill',rnd()>0.85?'#f59e0b':'#94a3b8').attr('fill-opacity',0.25+rnd()*0.65) }\r
    g.append('circle').attr('cx',cx).attr('cy',cy).attr('r',9).attr('fill','#fef3c7')\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};