var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
// CircleTimeline: Events around a circular year.\r
export const meta = {\r
  id: 'circle-timeline',\r
  title: 'Circle Timeline',\r
  desc: 'Circle Timeline — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'CircleTimeline',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["bars","circle-timeline"],\r
}\r
\r
export default function CircleTimeline({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    void customData // decorative composition — deterministic shapes\r
    const g = svg.append('g')\r
    const months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']\r
    const evts={Jan:['Kickoff'],Mar:['Beta'],May:['Launch'],Aug:['v2'],Oct:['Conf'],Dec:['Party']}\r
    months.forEach((m,i)=>{ const a=(i/12)*2*Math.PI-Math.PI/2; const x=200+Math.cos(a)*108,y=150+Math.sin(a)*108\r
     g.append('line').attr('x1',200+Math.cos(a)*98).attr('y1',150+Math.sin(a)*98).attr('x2',x).attr('y2',y).attr('stroke','var(--border)')\r
     g.append('circle').attr('cx',x).attr('cy',y).attr('r',evts[m]?6:3).attr('fill',evts[m]?'#10b981':'#94a3b8')\r
     g.append('text').attr('x',200+Math.cos(a)*126).attr('y',150+Math.sin(a)*126+3).attr('text-anchor','middle').attr('font-size','7.5px').attr('fill','var(--text-secondary)').text(m) })\r
    Object.entries(evts).forEach(([m,e])=>{ const i=months.indexOf(m); const a=(i/12)*2*Math.PI-Math.PI/2\r
     g.append('text').attr('x',200+Math.cos(a)*86).attr('y',150+Math.sin(a)*86).attr('text-anchor','middle').attr('font-size','6px').attr('fill','#10b981').text(e[0].slice(0,5)) })\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};