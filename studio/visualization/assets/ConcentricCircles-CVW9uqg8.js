var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
// ConcentricCircles: Concentric value rings.\r
export const meta = {\r
  id: 'concentric-circles',\r
  title: 'Concentric Circles',\r
  desc: 'Concentric Circles — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'ConcentricCircles',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","concentric-circles"],\r
}\r
\r
export default function ConcentricCircles({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    void customData // decorative composition — deterministic shapes\r
    const g = svg.append('g')\r
    const vals=[38,30,23,17,11,6]\r
    vals.forEach((r,i)=>{ g.append('circle').attr('cx',200).attr('cy',150).attr('r',r+18).attr('fill','none')\r
      .attr('stroke',colors[i%colors.length]).attr('stroke-width',5).attr('stroke-opacity',0.75) })\r
    vals.forEach((r)=>{ g.append('text').attr('x',200).attr('y',150-r-14).attr('text-anchor','middle').attr('font-size','8px').attr('fill','var(--text-secondary)').text(r*3+'k') })\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};