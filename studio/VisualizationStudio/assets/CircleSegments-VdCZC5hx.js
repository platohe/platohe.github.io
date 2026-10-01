var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
// CircleSegments: Segmented wheel of shares.\r
export const meta = {\r
  id: 'circle-segments',\r
  title: 'Circle Segments',\r
  desc: 'Circle Segments — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'CircleSegments',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","circle-segments"],\r
}\r
\r
export default function CircleSegments({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    void customData // decorative composition — deterministic shapes\r
    const g = svg.append('g')\r
    const parts=[{l:'N',v:30},{l:'E',v:22},{l:'S',v:27},{l:'W',v:21}]\r
    const total=100; let a0=-Math.PI/2\r
    parts.forEach(p=>{ const a1=a0+(p.v/total)*2*Math.PI-0.02\r
     g.append('path').attr('d',d3.arc()({startAngle:a0,endAngle:a1,innerRadius:44,outerRadius:96}))\r
      .attr('transform','translate(200,150)').attr('fill',colors[parts.indexOf(p)%colors.length])\r
     const m=(a0+a1)/2; g.append('text').attr('x',200+Math.cos(m)*70).attr('y',150+Math.sin(m)*70).attr('text-anchor','middle').attr('font-size','8px').attr('font-weight',700).attr('fill','#fff').text(p.l+' '+p.v)\r
     a0=a1+0.02 })\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};