var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
// CircleBubbles: Circular bubble cluster.\r
export const meta = {\r
  id: 'circle-bubbles',\r
  title: 'Circle Bubbles',\r
  desc: 'Circle Bubbles — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'CircleBubbles',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","circle-bubbles"],\r
}\r
\r
export default function CircleBubbles({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    void customData // decorative composition — deterministic shapes\r
    const g = svg.append('g')\r
    const bs=[{x:150,y:130,r:34,v:80},{x:225,y:170,r:26,v:60},{x:270,y:110,r:19,v:42},{x:190,y:210,r:14,v:30},{x:120,y:195,r:10,v:18},{x:300,y:180,r:8,v:12}]\r
    bs.forEach((b,i)=>{ g.append('circle').attr('cx',b.x).attr('cy',b.y).attr('r',b.r).attr('fill',colors[i%colors.length]).attr('fill-opacity',0.8)\r
     g.append('text').attr('x',b.x).attr('y',b.y+3).attr('text-anchor','middle').attr('font-size','7px').attr('fill','#fff').text(b.v) })\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};