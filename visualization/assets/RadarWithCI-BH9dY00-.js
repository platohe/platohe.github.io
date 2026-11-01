var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'radar-with-ci',\r
  title: 'Radar With C I',\r
  desc: 'Radar With C I — a fun chart visualization',\r
  category: 'Fun',\r
  component: 'RadarWithCI',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["fun","radar-with-c-i"],\r
}\r
\r
export default function RadarWithCI({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = {"labels":["Speed","Power","Agility","Endurance","Strength","Flexibility"],"values":[85,88,73,77,85,69],"ci":[[78,92],[82,94],[68,78],[72,82],[80,90],[64,74]]}\r
    const data = (customData && customData.ci) ? customData : DEFAULT_DATA\r
    const n=data.labels.length, angle=2*Math.PI/n, r=Math.min(W,H)*0.32, cx=W/2, cy=H/2, scale=d3.scaleLinear().domain([0,100]).range([0,r]), g=svg.append('g')\r
    data.ci.forEach((c,i)=>{ const a=i*angle-Math.PI/2; const x1=cx+scale(c[0])*Math.cos(a), y1=cy+scale(c[0])*Math.sin(a), x2=cx+scale(c[1])*Math.cos(a), y2=cy+scale(c[1])*Math.sin(a); g.append('line').attr('x1',x1).attr('y1',y1).attr('x2',x2).attr('y2',y2).attr('stroke',colors[0]).attr('stroke-width',4).attr('opacity',0.35).attr('stroke-linecap','round') })\r
    const pts=data.values.map((v,i)=>[cx+scale(v)*Math.cos(i*angle-Math.PI/2), cy+scale(v)*Math.sin(i*angle-Math.PI/2)])\r
    g.append('path').attr('d',d3.line()(pts)+'Z').attr('fill','none').attr('stroke',colors[0]).attr('stroke-width',2)\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};