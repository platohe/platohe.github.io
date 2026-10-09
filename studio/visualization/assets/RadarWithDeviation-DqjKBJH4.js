var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'radar-with-deviation',\r
  title: 'Radar With Deviation',\r
  desc: 'Radar With Deviation — a fun chart visualization',\r
  category: 'Fun',\r
  component: 'RadarWithDeviation',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["fun","radar-with-deviation"],\r
}\r
\r
export default function RadarWithDeviation({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = {"labels":["Speed","Power","Agility","Endurance","Strength","Flexibility"],"values":[85,88,73,77,85,69],"dev":[5,6,4,5,7,5]}\r
    const data = (customData && customData.dev) ? customData : DEFAULT_DATA\r
    const n=data.labels.length, angle=2*Math.PI/n, r=Math.min(W,H)*0.32, cx=W/2, cy=H/2, scale=d3.scaleLinear().domain([0,100]).range([0,r]), g=svg.append('g')\r
    const low=data.values.map((v,i)=>[cx+scale(Math.max(0,v-data.dev[i]))*Math.cos(i*angle-Math.PI/2), cy+scale(Math.max(0,v-data.dev[i]))*Math.sin(i*angle-Math.PI/2)])\r
    const high=data.values.map((v,i)=>[cx+scale(Math.min(100,v+data.dev[i]))*Math.cos(i*angle-Math.PI/2), cy+scale(Math.min(100,v+data.dev[i]))*Math.sin(i*angle-Math.PI/2)])\r
    g.append('path').attr('d',d3.line()(high)+'Z').attr('fill',colors[0]).attr('opacity',0.12)\r
    g.append('path').attr('d',d3.line()(low)+'Z').attr('fill','#fff').attr('opacity',1)\r
    const pts=data.values.map((v,i)=>[cx+scale(v)*Math.cos(i*angle-Math.PI/2), cy+scale(v)*Math.sin(i*angle-Math.PI/2)])\r
    g.append('path').attr('d',d3.line()(pts)+'Z').attr('fill','none').attr('stroke',colors[0]).attr('stroke-width',2)\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};