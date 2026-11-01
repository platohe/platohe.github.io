var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'radar-comparison-three',\r
  title: 'Radar Comparison Three',\r
  desc: 'Radar Comparison Three — a fun chart visualization',\r
  category: 'Fun',\r
  component: 'RadarComparisonThree',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-shape"],\r
  tags: ["fun","radar-comparison-three"],\r
}\r
\r
export default function RadarComparisonThree({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = {"labels":["Speed","Power","Agility","Endurance","Strength","Flexibility"],"series":[{"name":"A","values":[85,88,73,77,85,69]},{"name":"B","values":[72,75,80,68,78,80]},{"name":"C","values":[68,82,75,85,70,72]}]}\r
    const data = (customData && customData.series) ? customData : DEFAULT_DATA\r
    const n=data.labels.length, angle=2*Math.PI/n, r= Math.min(W,H)*0.30, cx=W/2, cy=H/2, scale=d3.scaleLinear().domain([0,100]).range([0,r]), g=svg.append('g')\r
    data.series.forEach((s,i)=>{ const pts=s.values.map((v,j)=>[cx+scale(v)*Math.cos(j*angle-Math.PI/2), cy+scale(v)*Math.sin(j*angle-Math.PI/2)]); g.append('path').attr('d',d3.line()(pts)+'Z').attr('fill',colors[i]).attr('fill-opacity',0.14).attr('stroke',colors[i]).attr('stroke-width',1.6).attr('stroke-dasharray', i===1?'4,3':null) })\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};