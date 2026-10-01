var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
// BubbleSwarm: BubbleSwarm variant.\r
export const meta = {\r
  id: 'bubble-swarm',\r
  title: 'Bubble Swarm',\r
  desc: 'Bubble Swarm — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'BubbleSwarm',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","bubble-swarm"],\r
}\r
\r
export default function BubbleSwarm({ data: customData }) {\r
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
// simple collision packing into rows\r
    const sorted = [...data].sort((a,b)=>b.r-a.r); const placed=[]\r
    sorted.forEach(b=>{ let y=40; while(placed.some(p=>Math.hypot(p.x-b.x,p.y-y)<p.r+b.r+2)&&y<260) y+=6; b.y2=y; placed.push({...b,y}) })\r
    placed.forEach((b,i)=>{ g.append('circle').attr('cx',b.x).attr('cy',b.y2).attr('r',b.r).attr('fill',colors[i%colors.length]).attr('fill-opacity',0.85)\r
     if(b.r>13) g.append('text').attr('x',b.x).attr('y',b.y2+3).attr('text-anchor','middle').attr('font-size','7px').attr('fill','#fff').text(b.name) })\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};