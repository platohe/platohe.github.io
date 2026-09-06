var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'radar-with-dots',\r
  title: 'Radar With Dots',\r
  desc: 'Radar With Dots — a fun chart visualization',\r
  category: 'Fun',\r
  component: 'RadarWithDots',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["fun","radar-with-dots"],\r
}\r
\r
export default function RadarWithDots({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = {"labels":["Speed","Power","Agility","Endurance","Strength","Flexibility"],"values":[85,90,70,75,88,65]}\r
    const data = (customData && customData.labels && customData.values) ? customData : DEFAULT_DATA\r
    const n = data.labels.length; const angle = (2*Math.PI)/n; const r = Math.min(W,H)*0.32; const cx=W/2, cy=H/2\r
    const g = svg.append('g'); const scale = d3.scaleLinear().domain([0,100]).range([0,r])\r
    for(let l=1;l<=4;l++){ const rr=r/4*l; const pts=data.labels.map((_,i)=>[cx+rr*Math.cos(i*angle-Math.PI/2), cy+rr*Math.sin(i*angle-Math.PI/2)]); g.append('path').attr('d', d3.line()(pts)+'Z').attr('fill','none').attr('stroke','var(--border)').attr('stroke-dasharray','2,3')}\r
    data.labels.forEach((lab,i)=>{ const x2=cx+r*Math.cos(i*angle-Math.PI/2), y2=cy+r*Math.sin(i*angle-Math.PI/2); g.append('line').attr('x1',cx).attr('y1',cy).attr('x2',x2).attr('y2',y2).attr('stroke','var(--border)'); g.append('text').attr('x',x2).attr('y',y2).attr('text-anchor',x2>cx?'start':x2<cx?'end':'middle').attr('fill','var(--text-secondary)').attr('font-size','10px').text(lab)})\r
    const pts=data.values.map((v,i)=>[cx+scale(v)*Math.cos(i*angle-Math.PI/2), cy+scale(v)*Math.sin(i*angle-Math.PI/2)])\r
    g.append('path').attr('d', d3.line()(pts)+'Z').attr('fill',colors[0]).attr('fill-opacity',0.25).attr('stroke',colors[0]).attr('stroke-width',2)\r
    g.selectAll('circle').data(pts).join('circle').attr('cx',d=>d[0]).attr('cy',d=>d[1]).attr('r',5).attr('fill',colors[0]).attr('stroke','#fff').attr('stroke-width',2)\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};