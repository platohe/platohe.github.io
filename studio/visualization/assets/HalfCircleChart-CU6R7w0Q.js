var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
// HalfCircleChart: Half-circle gauge row.\r
export const meta = {\r
  id: 'half-circle-chart',\r
  title: 'Half Circle Chart',\r
  desc: 'Half Circle Chart — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'HalfCircleChart',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","half-circle-chart"],\r
}\r
\r
export default function HalfCircleChart({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    void customData // decorative composition — deterministic shapes\r
    const g = svg.append('g')\r
    const rows=[{t:'Mon',v:0.8},{t:'Tue',v:0.45},{t:'Wed',v:0.65}]\r
    rows.forEach((r,i)=>{ const cx=110+i*90; const arc=d3.arc().innerRadius(30).outerRadius(42).startAngle(Math.PI)\r
     g.append('path').attr('d',arc.endAngle(Math.PI*2)({})).attr('transform','translate('+cx+',150)').attr('fill','var(--border)').attr('fill-opacity',0.35)\r
     g.append('path').attr('d',arc.endAngle(Math.PI+r.v*Math.PI)({})).attr('transform','translate('+cx+',150)').attr('fill',colors[i%colors.length])\r
     g.append('text').attr('x',cx).attr('y',142).attr('text-anchor','middle').attr('font-size','9px').attr('font-weight',700).attr('fill','var(--text-secondary)').text(Math.round(r.v*100)+'%')\r
     g.append('text').attr('x',cx).attr('y',172).attr('text-anchor','middle').attr('font-size','8px').attr('fill','var(--text-secondary)').text(r.t) })\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};