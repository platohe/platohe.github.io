var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
// ProportionalBubbles: ProportionalBubbles variant.\r
export const meta = {\r
  id: 'proportional-bubbles',\r
  title: 'Proportional Bubbles',\r
  desc: 'Proportional Bubbles — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'ProportionalBubbles',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","proportional-bubbles"],\r
}\r
\r
export default function ProportionalBubbles({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = [\r
      { name: 'Tokyo', x: 120, y: 120, r: 34, v: 80 }, { name: 'Delhi', x: 210, y: 90, r: 30, v: 70 },\r
      { name: 'Shanghai', x: 290, y: 140, r: 27, v: 62 }, { name: 'Paris', x: 100, y: 200, r: 22, v: 50 },\r
      { name: 'Cairo', x: 190, y: 215, r: 25, v: 56 }, { name: 'Lagos', x: 280, y: 225, r: 20, v: 44 },\r
      { name: 'NYC', x: 330, y: 70, r: 17, v: 36 }, { name: 'Sydney', x: 55, y: 55, r: 13, v: 26 }\r
    ]\r
    const data = (Array.isArray(customData) && customData.length && customData[0].r !== undefined) ? customData : DEFAULT_DATA\r
    const g = svg.append('g')\r
data.forEach((d,i)=>{ const col=i%4,row=Math.floor(i/4); const cx=70+col*88,cy=85+row*105\r
     g.append('circle').attr('cx', cx).attr('cy', cy).attr('r', d.r).attr('fill', colors[i % colors.length]).attr('fill-opacity', 0.8)\r
     g.append('text').attr('x',cx).attr('y',cy+d.r+11).attr('text-anchor','middle').attr('font-size','7px').attr('fill','var(--text-secondary)').text(d.name+' · '+d.v) })\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};