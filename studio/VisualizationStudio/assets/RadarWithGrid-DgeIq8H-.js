var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'radar-with-grid',\r
  title: 'Radar With Grid',\r
  desc: 'Radar With Grid — a fun chart visualization',\r
  category: 'Fun',\r
  component: 'RadarWithGrid',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["fun","radar-with-grid"],\r
}\r
\r
export default function RadarWithGrid({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = {"labels":["Speed","Power","Agility","Endurance","Strength","Flexibility"],"values":[80,85,75,70,82,68]}\r
    const data = (customData && customData.labels && customData.values) ? customData : DEFAULT_DATA\r
    const n = data.labels.length; const angle = (2*Math.PI)/n; const r = Math.min(W,H)*0.32; const cx=W/2, cy=H/2\r
    const g = svg.append('g'); const scale = d3.scaleLinear().domain([0,100]).range([0,r])\r
    for(let l=1;l<=5;l++){ const rr=r/5*l; const pts=data.labels.map((_,i)=>[cx+rr*Math.cos(i*angle-Math.PI/2), cy+rr*Math.sin(i*angle-Math.PI/2)]); g.append('path').attr('d', d3.line()(pts)+'Z').attr('fill', l%2? 'var(--bg-secondary)':'none').attr('stroke','var(--border)')}\r
    data.labels.forEach((lab,i)=>{ const x2=cx+r*Math.cos(i*angle-Math.PI/2), y2=cy+r*Math.sin(i*angle-Math.PI/2); g.append('text').attr('x',x2).attr('y',y2).attr('text-anchor','middle').attr('fill','var(--text-secondary)').attr('font-size','9px').text(lab)})\r
    const pts=data.values.map((v,i)=>[cx+scale(v)*Math.cos(i*angle-Math.PI/2), cy+scale(v)*Math.sin(i*angle-Math.PI/2)])\r
    g.append('path').attr('d', d3.line()(pts)+'Z').attr('fill','none').attr('stroke',colors[1]).attr('stroke-width',2.5).attr('stroke-dasharray','6,4')\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};