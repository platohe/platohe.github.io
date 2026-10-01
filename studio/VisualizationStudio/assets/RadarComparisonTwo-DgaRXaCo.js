var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'radar-comparison-two',\r
  title: 'Radar Comparison Two',\r
  desc: 'Radar Comparison Two — a fun chart visualization',\r
  category: 'Fun',\r
  component: 'RadarComparisonTwo',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-shape"],\r
  tags: ["fun","radar-comparison-two"],\r
}\r
\r
export default function RadarComparisonTwo({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = {"labels":["Speed","Power","Agility","Endurance","Strength","Flexibility"],"series":[{"name":"A","values":[85,88,73,77,85,69]},{"name":"B","values":[72,75,80,68,78,80]}]}\r
    const data = (customData && customData.labels && customData.series) ? customData : DEFAULT_DATA\r
    const n=data.labels.length, angle=2*Math.PI/n, r=Math.min(W,H)*0.32, cx=W/2, cy=H/2\r
    const scale=d3.scaleLinear().domain([0,100]).range([0,r])\r
    const g=svg.append('g')\r
    for(let l=1;l<=4;l++){const rr=r/4*l; const pts=data.labels.map((_,i)=>[cx+rr*Math.cos(i*angle-Math.PI/2), cy+rr*Math.sin(i*angle-Math.PI/2)]); g.append('path').attr('d',d3.line()(pts)+'Z').attr('fill','none').attr('stroke','var(--border)').attr('opacity',0.3)}\r
    data.series.forEach((s,i)=>{\r
      const pts=s.values.map((v,j)=>[cx+scale(v)*Math.cos(j*angle-Math.PI/2), cy+scale(v)*Math.sin(j*angle-Math.PI/2)])\r
      g.append('path').attr('d',d3.line()(pts)+'Z').attr('fill',colors[i]).attr('fill-opacity',0.18).attr('stroke',colors[i]).attr('stroke-width',2)\r
    })\r
    const legend=g.append('g').attr('transform','translate('+(W-90)+','+20+')')\r
    data.series.forEach((s,i)=>{ legend.append('rect').attr('x',0).attr('y',i*16).attr('width',10).attr('height',10).attr('fill',colors[i]); legend.append('text').attr('x',14).attr('y',i*16+9).attr('fill','var(--text-secondary)').attr('font-size','9px').text(s.name)})\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};