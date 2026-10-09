var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'radar-with-stats',\r
  title: 'Radar With Stats',\r
  desc: 'Radar With Stats — a fun chart visualization',\r
  category: 'Fun',\r
  component: 'RadarWithStats',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["fun","radar-with-stats"],\r
}\r
\r
export default function RadarWithStats({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = {"labels":["Speed","Power","Agility","Endurance","Strength","Flexibility"],"values":[85,88,73,77,85,69]}\r
    const data = (customData && customData.labels) ? customData : DEFAULT_DATA\r
    const n=data.labels.length, angle=2*Math.PI/n, r=Math.min(W,H)*0.28, cx=W/2, cy=H/2+10, scale=d3.scaleLinear().domain([0,100]).range([0,r]), g=svg.append('g')\r
    const pts=data.values.map((v,i)=>[cx+scale(v)*Math.cos(i*angle-Math.PI/2), cy+scale(v)*Math.sin(i*angle-Math.PI/2)])\r
    g.append('path').attr('d',d3.line()(pts)+'Z').attr('fill',colors[0]).attr('fill-opacity',0.18).attr('stroke',colors[0])\r
    const avg=d3.mean(data.values).toFixed(1), mx=d3.max(data.values), mn=d3.min(data.values)\r
    g.append('rect').attr('x',W/2-40).attr('y',8).attr('width',80).attr('height',28).attr('fill','var(--bg-secondary)').attr('stroke','var(--border)').attr('rx',6)\r
    g.append('text').attr('x',W/2).attr('y',20).attr('text-anchor','middle').attr('fill','var(--text-secondary)').attr('font-size','8px').text('Avg '+avg+'  Max '+mx+'  Min '+mn)\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};