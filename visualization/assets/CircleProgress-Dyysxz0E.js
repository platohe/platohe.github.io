var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
// CircleProgress: Row of progress rings.\r
export const meta = {\r
  id: 'circle-progress',\r
  title: 'Circle Progress',\r
  desc: 'Circle Progress — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'CircleProgress',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","circle-progress"],\r
}\r
\r
export default function CircleProgress({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    void customData // decorative composition — deterministic shapes\r
    const g = svg.append('g')\r
    const goals=[{t:'Sales',p:78},{t:'Users',p:54},{t:'Uptime',p:92}]\r
    goals.forEach((gl,i)=>{ const cx=115+i*85; const arc=d3.arc().innerRadius(34).outerRadius(44).startAngle(-Math.PI/2)\r
     g.append('path').attr('d',arc.endAngle(Math.PI*1.5)({})) .attr('transform','translate('+cx+',140)').attr('fill','var(--border)').attr('fill-opacity',0.4)\r
     g.append('path').attr('d',arc.endAngle(-Math.PI/2+(gl.p/100)*2*Math.PI)({})).attr('transform','translate('+cx+',140)').attr('fill',colors[i%colors.length])\r
     g.append('text').attr('x',cx).attr('y',144).attr('text-anchor','middle').attr('font-size','10px').attr('font-weight',700).attr('fill','var(--text-secondary)').text(gl.p+'%')\r
     g.append('text').attr('x',cx).attr('y',205).attr('text-anchor','middle').attr('font-size','8.5px').attr('fill','var(--text-secondary)').text(gl.t) })\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};