var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
// PolarCircles: Polar dot multiples.\r
export const meta = {\r
  id: 'polar-circles',\r
  title: 'Polar Circles',\r
  desc: 'Polar Circles — a math & simulation chart visualization',\r
  category: 'Math & Simulation',\r
  component: 'PolarCircles',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-shape"],\r
  tags: ["math-&-simulation","polar-circles"],\r
}\r
\r
export default function PolarCircles({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    void customData // decorative composition — deterministic shapes\r
    const g = svg.append('g')\r
    const sets=[{name:'A',spiral:false,n:8},{name:'B',n:12},{name:'C',n:5},{name:'D',n:16}]\r
    sets.forEach((st,i)=>{ const cx=105+(i%2)*190, cy=95+Math.floor(i/2)*120\r
     for(let k=0;k<st.n;k++){ const a=(k/st.n)*2*Math.PI; g.append('circle').attr('cx',cx+Math.cos(a)*26).attr('cy',cy+Math.sin(a)*26).attr('r',5).attr('fill',colors[i%colors.length]).attr('fill-opacity',0.8) }\r
     g.append('circle').attr('cx',cx).attr('cy',cy).attr('r',26).attr('fill','none').attr('stroke','var(--border)')\r
     g.append('text').attr('x',cx).attr('y',cy+3).attr('text-anchor','middle').attr('font-size','8px').attr('fill','var(--text-secondary)').text(st.name) })\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};