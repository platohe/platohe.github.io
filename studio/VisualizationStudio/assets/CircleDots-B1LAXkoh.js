var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
// CircleDots: Dot rings with values.\r
export const meta = {\r
  id: 'circle-dots',\r
  title: 'Circle Dots',\r
  desc: 'Circle Dots — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'CircleDots',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","circle-dots"],\r
}\r
\r
export default function CircleDots({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    void customData // decorative composition — deterministic shapes\r
    const g = svg.append('g')\r
    const groups=['Alpha','Beta','Gamma']\r
    groups.forEach((gn,gi)=>{ const cx=115+gi*85\r
     for(let k=0;k<10;k++){ const a=(k/10)*2*Math.PI; const rr=18+((k*7+gi*3)%22)\r
     g.append('circle').attr('cx',cx+Math.cos(a)*rr).attr('cy',145+Math.sin(a)*rr).attr('r',2.8).attr('fill',colors[gi%colors.length]).attr('fill-opacity',0.85) }\r
     g.append('circle').attr('cx',cx).attr('cy',145).attr('r',10).attr('fill','none').attr('stroke','var(--border)')\r
     g.append('text').attr('x',cx).attr('y',215).attr('text-anchor','middle').attr('font-size','8.5px').attr('fill','var(--text-secondary)').text(gn) })\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};