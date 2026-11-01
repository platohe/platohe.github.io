var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
// CircleStack: Stacked disc tower by quarter.\r
export const meta = {\r
  id: 'circle-stack',\r
  title: 'Circle Stack',\r
  desc: 'Circle Stack — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'CircleStack',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","circle-stack"],\r
}\r
\r
export default function CircleStack({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    void customData // decorative composition — deterministic shapes\r
    const g = svg.append('g')\r
    const items=[{n:'Q4',v:52,c:'#6366f1'},{n:'Q3',v:44,c:'#f59e0b'},{n:'Q2',v:36,c:'#10b981'},{n:'Q1',v:28,c:'#ef4444'}]\r
    let cy=250\r
    items.forEach(it=>{ cy-=it.v\r
     g.append('rect').attr('x',119).attr('y',cy).attr('width',162).attr('height',it.v-6).attr('fill',it.c).attr('fill-opacity',0.85)\r
     g.append('ellipse').attr('cx',200).attr('cy',cy).attr('rx',81).attr('ry',Math.min(it.v*0.55,20)).attr('fill',it.c)\r
     g.append('text').attr('x',292).attr('y',cy+it.v/2).attr('font-size','8px').attr('fill','var(--text-secondary)').text(it.n) })\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};