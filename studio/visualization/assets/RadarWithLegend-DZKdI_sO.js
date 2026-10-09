var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'radar-with-legend',\r
  title: 'Radar With Legend',\r
  desc: 'Radar With Legend — a fun chart visualization',\r
  category: 'Fun',\r
  component: 'RadarWithLegend',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["fun","radar-with-legend"],\r
}\r
\r
export default function RadarWithLegend({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = {"labels":["Speed","Power","Agility","Endurance","Strength","Flexibility"],"values":[85,88,73,77,85,69]}\r
    const data = (customData && customData.labels) ? customData : DEFAULT_DATA\r
    const n=data.labels.length, angle=2*Math.PI/n, r=90, cx=140, cy=H/2, scale=d3.scaleLinear().domain([0,100]).range([0,r]), g=svg.append('g')\r
    const pts=data.values.map((v,i)=>[cx+scale(v)*Math.cos(i*angle-Math.PI/2), cy+scale(v)*Math.sin(i*angle-Math.PI/2)])\r
    g.append('path').attr('d',d3.line()(pts)+'Z').attr('fill',colors[0]).attr('fill-opacity',0.22).attr('stroke',colors[0]).attr('stroke-width',2)\r
    const legend=g.append('g').attr('transform','translate('+(W-110)+','+40+')')\r
    data.labels.forEach((lab,i)=>{ const y= i*18; legend.append('rect').attr('x',0).attr('y',y).attr('width',10).attr('height',10).attr('fill',colors[i%colors.length]); legend.append('text').attr('x',14).attr('y',y+9).attr('fill','var(--text-secondary)').attr('font-size','9px').text(lab+': '+data.values[i]) })\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};