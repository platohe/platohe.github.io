var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
// CircleRipples: Ripple pulse rings.\r
export const meta = {\r
  id: 'circle-ripples',\r
  title: 'Circle Ripples',\r
  desc: 'Circle Ripples — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'CircleRipples',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","circle-ripples"],\r
}\r
\r
export default function CircleRipples({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    void customData // decorative composition — deterministic shapes\r
    const g = svg.append('g')\r
    ;[104,84,64,44,24].forEach((r,i)=>{ g.append('circle').attr('cx',200).attr('cy',150).attr('r',r)\r
     .attr('fill','none').attr('stroke',colors[i%colors.length]).attr('stroke-width',(5-i)*0.9).attr('stroke-opacity',0.25+i*0.15) })\r
    g.append('circle').attr('cx',200).attr('cy',150).attr('r',6).attr('fill','#6366f1')\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};