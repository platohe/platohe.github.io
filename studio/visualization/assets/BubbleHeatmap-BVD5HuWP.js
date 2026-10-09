var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
// BubbleHeatmap: BubbleHeatmap variant.\r
export const meta = {\r
  id: 'bubble-heatmap',\r
  title: 'Bubble Heatmap',\r
  desc: 'Bubble Heatmap — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'BubbleHeatmap',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-color"],\r
  tags: ["bars","bubble-heatmap"],\r
}\r
\r
export default function BubbleHeatmap({ data: customData }) {\r
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
data.forEach((d,i)=>{ const gx=70+(i%4)*86, gy=80+Math.floor(i/4)*92\r
     g.append('rect').attr('x',gx-32).attr('y',gy-32).attr('width',64).attr('height',64).attr('rx',8).attr('fill','var(--border)').attr('fill-opacity',0.15)\r
     g.append('circle').attr('cx',gx).attr('cy',gy).attr('r',d.r).attr('fill',d3.interpolateRgbBasis(['#e0e7ff','#3730a3'])(d.v/100))\r
     g.append('text').attr('x',gx).attr('y',gy+3).attr('text-anchor','middle').attr('font-size','7px').attr('font-weight',700).attr('fill',d.v>50?'#fff':'var(--text-secondary)').text(d.v) })\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};