var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'radar-with-confidence',\r
  title: 'Radar With Confidence',\r
  desc: 'Radar With Confidence — a fun chart visualization',\r
  category: 'Fun',\r
  component: 'RadarWithConfidence',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["fun","radar-with-confidence"],\r
}\r
\r
export default function RadarWithConfidence({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = {"labels":["Speed","Power","Agility","Endurance","Strength","Flexibility"],"values":[82,88,73,77,85,69],"lower":[75,82,65,70,78,60],"upper":[89,94,81,84,92,78]}\r
    const data = (customData && customData.labels && customData.values) ? customData : DEFAULT_DATA\r
    const n = data.labels.length; const angle = (2*Math.PI)/n; const r = Math.min(W,H)*0.32; const cx=W/2, cy=H/2\r
    const g = svg.append('g'); const scale = d3.scaleLinear().domain([0,100]).range([0,r])\r
    const lowerPts=data.lower.map((v,i)=>[cx+scale(v)*Math.cos(i*angle-Math.PI/2), cy+scale(v)*Math.sin(i*angle-Math.PI/2)])\r
    const upperPts=data.upper.map((v,i)=>[cx+scale(v)*Math.cos(i*angle-Math.PI/2), cy+scale(v)*Math.sin(i*angle-Math.PI/2)])\r
    g.append('path').attr('d', d3.line()(upperPts)+'Z').attr('fill',colors[0]).attr('opacity',0.12)\r
    g.append('path').attr('d', d3.line()(lowerPts)+'Z').attr('fill','#fff').attr('opacity',1)\r
    const pts=data.values.map((v,i)=>[cx+scale(v)*Math.cos(i*angle-Math.PI/2), cy+scale(v)*Math.sin(i*angle-Math.PI/2)])\r
    g.append('path').attr('d', d3.line()(pts)+'Z').attr('fill',colors[0]).attr('fill-opacity',0.25).attr('stroke',colors[0]).attr('stroke-width',2)\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};