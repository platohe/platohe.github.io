var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'radar-stacked',\r
  title: 'Radar Stacked',\r
  desc: 'Radar Stacked — a fun chart visualization',\r
  category: 'Fun',\r
  component: 'RadarStacked',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["fun","radar-stacked"],\r
}\r
\r
export default function RadarStacked({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = {"labels":["Speed","Power","Agility","Endurance","Strength","Flexibility"],"series":[{"name":"A","values":[40,35,30,25,30,20]},{"name":"B","values":[20,25,30,35,25,30]}]}\r
    const data = (customData && customData.series) ? customData : DEFAULT_DATA\r
    const n=data.labels.length, angle=2*Math.PI/n, r=Math.min(W,H)*0.32, cx=W/2, cy=H/2, scale=d3.scaleLinear().domain([0,60]).range([0,r]), g=svg.append('g')\r
    const stacked=data.series[0].values.map((_,j)=> data.series.reduce((s,ser)=>s+ser.values[j],0))\r
    const pts=stacked.map((v,i)=>[cx+scale(v)*Math.cos(i*angle-Math.PI/2), cy+scale(v)*Math.sin(i*angle-Math.PI/2)])\r
    g.append('path').attr('d',d3.line()(pts)+'Z').attr('fill',colors[1]).attr('opacity',0.3).attr('stroke',colors[1])\r
    const pts2=data.series[0].values.map((v,i)=>[cx+scale(v)*Math.cos(i*angle-Math.PI/2), cy+scale(v)*Math.sin(i*angle-Math.PI/2)])\r
    g.append('path').attr('d',d3.line()(pts2)+'Z').attr('fill',colors[0]).attr('opacity',0.5).attr('stroke',colors[0])\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};