var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
export const meta = {\r
  id: 'radar-gradient-fill',\r
  title: 'Radar Gradient Fill',\r
  desc: 'Radar Gradient Fill — a fun chart visualization',\r
  category: 'Fun',\r
  component: 'RadarGradientFill',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["fun","radar-gradient-fill"],\r
}\r
\r
export default function RadarGradientFill({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = {"labels":["Speed","Power","Agility","Endurance","Strength","Flexibility"],"values":[85,88,73,77,85,69]}\r
    const data = (customData && customData.labels) ? customData : DEFAULT_DATA\r
    const n=data.labels.length, angle=2*Math.PI/n, r=Math.min(W,H)*0.32, cx=W/2, cy=H/2, scale=d3.scaleLinear().domain([0,100]).range([0,r]), g=svg.append('g')\r
    const grad=g.append('defs').append('radialGradient').attr('id','radarGrad').attr('cx','50%').attr('cy','50%')\r
    grad.append('stop').attr('offset','0%').attr('stop-color','#6366f1').attr('stop-opacity',0.6)\r
    grad.append('stop').attr('offset','100%').attr('stop-color','#6366f1').attr('stop-opacity',0.05)\r
    const pts=data.values.map((v,i)=>[cx+scale(v)*Math.cos(i*angle-Math.PI/2), cy+scale(v)*Math.sin(i*angle-Math.PI/2)])\r
    g.append('path').attr('d',d3.line()(pts)+'Z').attr('fill','url(#radarGrad)').attr('stroke','#6366f1').attr('stroke-width',2)\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};