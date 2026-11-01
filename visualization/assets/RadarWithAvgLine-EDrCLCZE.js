var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'radar-with-avg-line',\r
  title: 'Radar With Avg Line',\r
  desc: 'Radar With Avg Line — a fun chart visualization',\r
  category: 'Fun',\r
  component: 'RadarWithAvgLine',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["fun","radar-with-avg-line"],\r
}\r
\r
export default function RadarWithAvgLine({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = {"labels":["Speed","Power","Agility","Endurance","Strength","Flexibility"],"values":[85,88,73,77,85,69]}\r
    const data = (customData && customData.labels) ? customData : DEFAULT_DATA\r
    const n=data.labels.length, angle=2*Math.PI/n, r=Math.min(W,H)*0.32, cx=W/2, cy=H/2, scale=d3.scaleLinear().domain([0,100]).range([0,r]), g=svg.append('g')\r
    const avg=70; const avgPts=data.labels.map((_,i)=>[cx+scale(avg)*Math.cos(i*angle-Math.PI/2), cy+scale(avg)*Math.sin(i*angle-Math.PI/2)])\r
    g.append('path').attr('d',d3.line()(avgPts)+'Z').attr('fill','none').attr('stroke','var(--border)').attr('stroke-dasharray','5,5').attr('stroke-width',1.2)\r
    const pts=data.values.map((v,i)=>[cx+scale(v)*Math.cos(i*angle-Math.PI/2), cy+scale(v)*Math.sin(i*angle-Math.PI/2)])\r
    g.append('path').attr('d',d3.line()(pts)+'Z').attr('fill',colors[0]).attr('fill-opacity',0.22).attr('stroke',colors[0]).attr('stroke-width',2)\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};