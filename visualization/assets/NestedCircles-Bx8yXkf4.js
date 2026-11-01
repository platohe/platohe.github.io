var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
// NestedCircles: Nested containment bubbles.\r
export const meta = {\r
  id: 'nested-circles',\r
  title: 'Nested Circles',\r
  desc: 'Nested Circles — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'NestedCircles',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","nested-circles"],\r
}\r
\r
export default function NestedCircles({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    void customData // decorative composition — deterministic shapes\r
    const g = svg.append('g')\r
    g.append('circle').attr('cx',200).attr('cy',150).attr('r',105).attr('fill','#6366f1').attr('fill-opacity',0.85)\r
    g.append('circle').attr('cx',168).attr('cy',162).attr('r',62).attr('fill','#f59e0b').attr('fill-opacity',0.85)\r
    g.append('circle').attr('cx',262).attr('cy',132).attr('r',44).attr('fill','#10b981').attr('fill-opacity',0.85)\r
    g.append('circle').attr('cx',150).attr('cy',120).attr('r',26).attr('fill','#ef4444').attr('fill-opacity',0.9)\r
    ;[['All',0],['Web',1],['Ads',2]].forEach(([t,ix])=>{ const cxp=[200,262,150][ix], cyp=[150,132,120][ix]\r
      g.append('text').attr('x',cxp).attr('y',cyp).attr('text-anchor','middle').attr('dominant-baseline','middle').attr('font-size','9px').attr('font-weight',700).attr('fill','#fff').text(t) })\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};