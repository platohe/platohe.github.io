var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'radar-small-multiples',\r
  title: 'Radar Small Multiples',\r
  desc: 'Radar Small Multiples — a fun chart visualization',\r
  category: 'Fun',\r
  component: 'RadarSmallMultiples',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["fun","radar-small-multiples"],\r
}\r
\r
export default function RadarSmallMultiples({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = {"labels":["A","B","C","D","E","F"],"series":[{"name":"S1","values":[80,70,85,60,75,90]},{"name":"S2","values":[60,85,70,80,65,75]}]}\r
    const data = (customData && customData.labels && customData.series) ? customData : DEFAULT_DATA\r
    const n=data.labels.length, angle=2*Math.PI/n, r=55\r
    data.series.forEach((ser, idx)=>{\r
      const cx = idx===0?110:290, cy=150\r
      const scale=d3.scaleLinear().domain([0,100]).range([0,r]); const g=svg.append('g')\r
      for(let l=1;l<=3;l++){const rr=r/3*l; const pts=data.labels.map((_,i)=>[cx+rr*Math.cos(i*angle-Math.PI/2), cy+rr*Math.sin(i*angle-Math.PI/2)]); g.append('path').attr('d',d3.line()(pts)+'Z').attr('fill','none').attr('stroke','var(--border)').attr('opacity',0.4)}\r
      const pts=ser.values.map((v,i)=>[cx+scale(v)*Math.cos(i*angle-Math.PI/2), cy+scale(v)*Math.sin(i*angle-Math.PI/2)])\r
      g.append('path').attr('d',d3.line()(pts)+'Z').attr('fill',colors[idx]).attr('fill-opacity',0.2).attr('stroke',colors[idx]).attr('stroke-width',1.8)\r
      g.append('text').attr('x',cx).attr('y',cy+r+18).attr('text-anchor','middle').attr('fill',colors[idx]).attr('font-weight',600).attr('font-size','10px').text(ser.name)\r
    })\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};