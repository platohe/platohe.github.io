var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
// OrbitalPaths: Nested orbital mechanics.\r
export const meta = {\r
  id: 'orbital-paths',\r
  title: 'Orbital Paths',\r
  desc: 'Orbital Paths — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'OrbitalPaths',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","orbital-paths"],\r
}\r
\r
export default function OrbitalPaths({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    \r
    void customData\r
    const g = svg.append('g')\r
;[[70,'#f59e0b'],[105,'#10b981'],[140,'#6366f1']].forEach(([rr,c],i)=>{\r
 const ell=d3.path(); ell.arc(W/2,H/2,rr,0,2*Math.PI)\r
 g.append('ellipse').attr('cx',W/2).attr('cy',H/2).attr('rx',rr).attr('ry',rr*0.62).attr('fill','none').attr('stroke',c).attr('stroke-opacity',0.6)\r
 const a=i*2.2; g.append('circle').attr('cx',W/2+Math.cos(a)*rr).attr('cy',H/2+Math.sin(a)*rr*0.62).attr('r',5-i).attr('fill',c) })\r
g.append('circle').attr('cx',W/2).attr('cy',H/2).attr('r',12).attr('fill','#fbbf24')\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};