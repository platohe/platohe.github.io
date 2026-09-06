var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
export const meta = {\r
  id: 'continuous-cartogram',\r
  title: 'Continuous Cartogram',\r
  desc: 'Continuous Cartogram — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'ContinuousCartogram',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","continuous-cartogram"],\r
}\r
\r
export default function ContinuousCartogram({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const regs=(customData&&customData.regions)||[\r
      {id:'CA', v:88, x:12,y:48,w:92,h:68},{id:'TX', v:62, x:108,y:62,w:74,h:84},{id:'FL', v:48, x:186,y:118,w:48,h:38},{id:'NY', v:42, x:256,y:38,w:64,h:42},{id:'IL', v:26, x:188,y:58,w:42,h:42},{id:'PA', v:28, x:236,y:62,w:38,h:28},\r
    ]\r
    // continuous cartogram: distort rect size by v (scale)\r
    const maxV=d3.max(regs,d=>d.v)||90\r
    const k=d=> 0.6 + 0.8 * (d.v/maxV)\r
    const color=d3.scaleSequential(d3.interpolateOrRd).domain([0,90])\r
    const g=svg.append('g').attr('transform','translate(12,28)')\r
    regs.forEach(r=>{\r
      const s=k(r)\r
      const cx=r.x+r.w/2, cy=r.y+r.h/2\r
      const w=r.w*s, h=r.h*s\r
      const x=cx-w/2, y=cy-h/2\r
      g.append('rect').attr('x',x).attr('y',y).attr('width',w).attr('height',h).attr('fill',color(r.v)).attr('stroke','var(--bg)').attr('stroke-width',1.1).attr('rx',4)\r
      g.append('text').attr('x',cx).attr('y',cy-2).attr('text-anchor','middle').attr('fill',r.v>40?'#fff':'var(--text)').attr('font-size','7px').attr('font-weight',700).text(r.id)\r
      g.append('text').attr('x',cx).attr('y',cy+8).attr('text-anchor','middle').attr('fill',r.v>40?'#fff':'var(--text-secondary)').attr('font-size','6px').text(r.v)\r
    })\r
    // original outline faint\r
    regs.forEach(r=> g.append('rect').attr('x',r.x).attr('y',r.y).attr('width',r.w).attr('height',r.h).attr('fill','none').attr('stroke','var(--border)').attr('stroke-dasharray','2,2').attr('opacity',0.32))\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Continuous Cartogram')\r
    svg.append('text').attr('x',200).attr('y',24).attr('text-anchor','middle').attr('fill','var(--text-secondary)').attr('font-size','7px').text('Dashed = true geography')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};