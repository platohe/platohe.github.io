var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'radar-dashed-grid',\r
  title: 'Radar Dashed Grid',\r
  desc: 'Radar Dashed Grid — a fun chart visualization',\r
  category: 'Fun',\r
  component: 'RadarDashedGrid',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["fun","radar-dashed-grid"],\r
}\r
\r
export default function RadarDashedGrid({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = {"labels":["Speed","Power","Agility","Endurance","Strength","Flexibility"],"values":[80,82,78,85,75,80]}\r
    const data = (customData && customData.labels) ? customData : DEFAULT_DATA\r
    const n=data.labels.length, angle=2*Math.PI/n, r=Math.min(W,H)*0.32, cx=W/2, cy=H/2, scale=d3.scaleLinear().domain([0,100]).range([0,r]), g=svg.append('g')\r
    for(let l=1;l<=5;l++){ const rr=r/5*l; const pts=data.labels.map((_,i)=>[cx+rr*Math.cos(i*angle-Math.PI/2), cy+rr*Math.sin(i*angle-Math.PI/2)]); g.append('path').attr('d',d3.line()(pts)+'Z').attr('fill','none').attr('stroke','var(--border)').attr('stroke-dasharray', l%2?'6,6':'2,4') }\r
    const pts=data.values.map((v,i)=>[cx+scale(v)*Math.cos(i*angle-Math.PI/2), cy+scale(v)*Math.sin(i*angle-Math.PI/2)])\r
    g.append('path').attr('d',d3.line()(pts)+'Z').attr('fill','none').attr('stroke',colors[2]).attr('stroke-width',2)\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};