var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
// OverlappingBubbles: OverlappingBubbles variant.\r
export const meta = {\r
  id: 'overlapping-bubbles',\r
  title: 'Overlapping Bubbles',\r
  desc: 'Overlapping Bubbles — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'OverlappingBubbles',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","overlapping-bubbles"],\r
}\r
\r
export default function OverlappingBubbles({ data: customData }) {\r
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
const sets=[[160,140,58,'#6366f1'],[235,165,52,'#f59e0b'],[195,95,40,'#10b981']]\r
    sets.forEach(s=>g.append('circle').attr('cx',s[0]).attr('cy',s[1]).attr('r',s[2]).attr('fill',s[3]).attr('fill-opacity',0.42))\r
    data.slice(0,5).forEach((d,i)=>g.append('circle').attr('cx',[195,150,240,175,220][i]).attr('cy',[118,180,140,205,90][i]).attr('r',6).attr('fill','#0f172a'))\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};