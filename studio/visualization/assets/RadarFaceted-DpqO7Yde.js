var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'radar-faceted',\r
  title: 'Radar Faceted',\r
  desc: 'Radar Faceted — a fun chart visualization',\r
  category: 'Fun',\r
  component: 'RadarFaceted',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["fun","radar-faceted"],\r
}\r
\r
export default function RadarFaceted({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = {"labels":["A","B","C","D","E","F"],"series":[{"name":"S1","values":[80,70,85,60,75,90]},{"name":"S2","values":[60,85,70,80,65,75]},{"name":"S3","values":[70,75,80,65,85,70]}]}\r
    const data = (customData && customData.series) ? customData : DEFAULT_DATA\r
    const n=data.labels.length, angle=2*Math.PI/n\r
    data.series.forEach((ser, idx)=>{\r
      const cols=3, r=38, cx=70 + (idx%cols)*130, cy=90 + Math.floor(idx/cols)*130\r
      const scale=d3.scaleLinear().domain([0,100]).range([0,r]), g=svg.append('g')\r
      const pts=ser.values.map((v,i)=>[cx+scale(v)*Math.cos(i*angle-Math.PI/2), cy+scale(v)*Math.sin(i*angle-Math.PI/2)])\r
      g.append('path').attr('d',d3.line()(pts)+'Z').attr('fill',colors[idx]).attr('fill-opacity',0.18).attr('stroke',colors[idx])\r
      g.append('text').attr('x',cx).attr('y',cy+r+18).attr('text-anchor','middle').attr('fill','var(--text-secondary)').attr('font-size','9px').text(ser.name)\r
    })\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};