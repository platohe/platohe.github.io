var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
// OrbitCircles: Orbiting satellites around core.\r
export const meta = {\r
  id: 'orbit-circles',\r
  title: 'Orbit Circles',\r
  desc: 'Orbit Circles — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'OrbitCircles',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","orbit-circles"],\r
}\r
\r
export default function OrbitCircles({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    void customData // decorative composition — deterministic shapes\r
    const g = svg.append('g')\r
    g.append('circle').attr('cx',200).attr('cy',150).attr('r',16).attr('fill','#f59e0b')\r
    ;[50,82,114].forEach((r,i)=>{ g.append('circle').attr('cx',200).attr('cy',150).attr('r',r).attr('fill','none').attr('stroke','var(--border)').attr('stroke-dasharray','2,3')\r
     const a=i*2.1; g.append('circle').attr('cx',200+Math.cos(a)*r).attr('cy',150+Math.sin(a)*r).attr('r',7-i).attr('fill',colors[i%colors.length]) })\r
    g.append('text').attr('x',200).attr('y',154).attr('text-anchor','middle').attr('font-size','7px').attr('fill','#fff').attr('font-weight',700).text('SUN')\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};