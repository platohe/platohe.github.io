var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'radar-annotated',\r
  title: 'Radar Annotated',\r
  desc: 'Radar Annotated — a fun chart visualization',\r
  category: 'Fun',\r
  component: 'RadarAnnotated',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["fun","radar-annotated"],\r
}\r
\r
export default function RadarAnnotated({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = {"labels":["Speed","Power","Agility","Endurance","Strength","Flexibility"],"values":[85,88,73,77,85,69]}\r
    const data = (customData && customData.labels) ? customData : DEFAULT_DATA\r
    const n=data.labels.length, angle=2*Math.PI/n, r=Math.min(W,H)*0.32, cx=W/2, cy=H/2, scale=d3.scaleLinear().domain([0,100]).range([0,r]), g=svg.append('g')\r
    const pts=data.values.map((v,i)=>[cx+scale(v)*Math.cos(i*angle-Math.PI/2), cy+scale(v)*Math.sin(i*angle-Math.PI/2)])\r
    g.append('path').attr('d',d3.line()(pts)+'Z').attr('fill',colors[0]).attr('fill-opacity',0.2).attr('stroke',colors[0])\r
    const topIdx=data.values.indexOf(d3.max(data.values))\r
    const tp=pts[topIdx]\r
    g.append('line').attr('x1',tp[0]).attr('y1',tp[1]).attr('x2',tp[0]+30).attr('y2',tp[1]-20).attr('stroke',colors[1])\r
    g.append('rect').attr('x',tp[0]+30).attr('y',tp[1]-32).attr('width',48).attr('height',16).attr('fill',colors[1]).attr('rx',3)\r
    g.append('text').attr('x',tp[0]+54).attr('y',tp[1]-21).attr('text-anchor','middle').attr('fill','#fff').attr('font-size','8px').text('Peak')\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};