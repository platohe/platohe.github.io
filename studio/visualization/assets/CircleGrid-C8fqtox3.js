var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
// CircleGrid: Bubble grid sized and colored.\r
export const meta = {\r
  id: 'circle-grid',\r
  title: 'Circle Grid',\r
  desc: 'Circle Grid — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'CircleGrid',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","circle-grid"],\r
}\r
\r
export default function CircleGrid({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    void customData // decorative composition — deterministic shapes\r
    const g = svg.append('g')\r
    const vals=[[64,42],[81,30],[45,58],[72,66],[38,24],[90,48]]\r
    const sc=d3.scaleSqrt().domain([0,100]).range([4,22])\r
    vals.forEach((v,i)=>{ const x=90+(i%3)*110, y=95+Math.floor(i/3)*95\r
     g.append('circle').attr('cx',x).attr('cy',y).attr('r',sc(v[0])).attr('fill',d3.interpolateRgbBasis(colors)(v[1]/100))\r
     g.append('text').attr('x',x).attr('y',y+sc(v[0])+12).attr('text-anchor','middle').attr('font-size','7.5px').attr('fill','var(--text-secondary)').text('v='+v[0]) })\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};