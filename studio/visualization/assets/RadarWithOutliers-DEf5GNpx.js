var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'radar-with-outliers',\r
  title: 'Radar With Outliers',\r
  desc: 'Radar With Outliers — a fun chart visualization',\r
  category: 'Fun',\r
  component: 'RadarWithOutliers',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["fun","radar-with-outliers"],\r
}\r
\r
export default function RadarWithOutliers({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = {"labels":["Speed","Power","Agility","Endurance","Strength","Flexibility"],"values":[85,92,70,45,88,65],"outliers":[1,3]}\r
    const data = (customData && customData.labels) ? customData : DEFAULT_DATA\r
    const n=data.labels.length, angle=2*Math.PI/n, r=Math.min(W,H)*0.32, cx=W/2, cy=H/2, scale=d3.scaleLinear().domain([0,100]).range([0,r]), g=svg.append('g')\r
    const pts=data.values.map((v,i)=>[cx+scale(v)*Math.cos(i*angle-Math.PI/2), cy+scale(v)*Math.sin(i*angle-Math.PI/2)])\r
    g.append('path').attr('d',d3.line()(pts)+'Z').attr('fill',colors[0]).attr('fill-opacity',0.18).attr('stroke',colors[0])\r
    pts.forEach((p,i)=>{ const isOut=data.outliers.includes(i); g.append('circle').attr('cx',p[0]).attr('cy',p[1]).attr('r', isOut?6:3).attr('fill', isOut?'#ef4444':colors[0]).attr('stroke','#fff') })\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};