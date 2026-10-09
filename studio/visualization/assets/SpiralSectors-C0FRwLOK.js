var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
// SpiralSectors: Annular sectors along the spiral.\r
export const meta = {\r
  id: 'spiral-sectors',\r
  title: 'Spiral Sectors',\r
  desc: 'Spiral Sectors — a math & simulation chart visualization',\r
  category: 'Math & Simulation',\r
  component: 'SpiralSectors',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["math-&-simulation","spiral-sectors"],\r
}\r
\r
export default function SpiralSectors({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    void customData\r
    const g = svg.append('g')\r
    const cx = 200, cy = 150\r
const cats=[{n:'A',v:0.35},{n:'B',v:0.25},{n:'C',v:0.22},{n:'D',v:0.18}]\r
    let acc=-Math.PI/2\r
    cats.forEach((c,ci)=>{ const sweep=c.v*2*Math.PI*1.5\r
     const arc=d3.arc().innerRadius(30).outerRadius(118).startAngle(acc).endAngle(acc+sweep-0.03).cornerRadius(6)\r
     g.append('path').attr('d',arc({})).attr('transform','translate('+cx+','+cy+')').attr('fill',colors[ci%colors.length]).attr('fill-opacity',0.8)\r
     const m=acc+sweep/2; g.append('text').attr('x',cx+Math.cos(m)*76).attr('y',cy+Math.sin(m)*76).attr('text-anchor','middle').attr('font-size','8px').attr('font-weight',700).attr('fill','#fff').text(c.n)\r
     acc+=sweep })\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};