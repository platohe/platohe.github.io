var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
export const meta = {\r
  id: 'fourfold-plot',\r
  title: 'Fourfold Plot',\r
  desc: 'Fourfold Plot — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'FourfoldPlot',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","fourfold-plot"],\r
}\r
\r
export default function FourfoldPlot({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    // 2x2 contingency: [[a,b],[c,d]]\r
    const tbl=(customData&&customData.table)||[[34,12],[18,26]]\r
    const a=tbl[0][0], b=tbl[0][1], c=tbl[1][0], d=tbl[1][1]\r
    const total=a+b+c+d\r
    const cx=200, cy=152, size=118\r
    const g=svg.append('g')\r
    // four quadrants as quarter-circles scaled by count\r
    const vals=[a,b,c,d]\r
    const maxV=Math.max(...vals)\r
    const rScale=v=> 18 + (v/maxV)*42\r
    const quads=[\r
      {x:cx, y:cy, v:a, col:'#22c55e', angle:[-Math.PI, -Math.PI/2]}, // top-left\r
      {x:cx, y:cy, v:b, col:'#ef4444', angle:[-Math.PI/2, 0]}, // top-right\r
      {x:cx, y:cy, v:c, col:'#f59e0b', angle:[Math.PI/2, Math.PI]}, // bottom-left mirrored? simpler use quadrants\r
      {x:cx, y:cy, v:d, col:'#3b82f6', angle:[0, Math.PI/2]},\r
    ]\r
    // use sectors: startAngle/endAngle per quadrant\r
    const sectors=[\r
      {v:a, s:-Math.PI, e:-Math.PI/2, col:'#22c55e'},\r
      {v:b, s:-Math.PI/2, e:0, col:'#3b82f6'},\r
      {v:d, s:0, e:Math.PI/2, col:'#a78bfa'},\r
      {v:c, s:Math.PI/2, e:Math.PI, col:'#f59e0b'},\r
    ]\r
    sectors.forEach(s=>{\r
      const r=rScale(s.v)\r
      const arc=d3.arc().innerRadius(0).outerRadius(r).startAngle(s.s).endAngle(s.e)\r
      g.append('path').attr('d',arc).attr('transform',\`translate(\${cx},\${cy})\`).attr('fill',s.col).attr('fill-opacity',0.78).attr('stroke','var(--bg)').attr('stroke-width',1.2)\r
      const mid=(s.s+s.e)/2\r
      const lx=cx+Math.sin(mid)*(r*0.62), ly=cy-Math.cos(mid)*(r*0.62)\r
      g.append('text').attr('x',lx).attr('y',ly+3).attr('text-anchor','middle').attr('fill','#fff').attr('font-size','9px').attr('font-weight',700).text(s.v)\r
    })\r
    g.append('circle').attr('cx',cx).attr('cy',cy).attr('r',size).attr('fill','none').attr('stroke','var(--border)').attr('stroke-dasharray','2,3')\r
    g.append('line').attr('x1',cx-size).attr('x2',cx+size).attr('y1',cy).attr('y2',cy).attr('stroke','var(--border)')\r
    g.append('line').attr('x1',cx).attr('x2',cx).attr('y1',cy-size).attr('y2',cy+size).attr('stroke','var(--border)')\r
    g.append('text').attr('x',cx-58).attr('y',cy-64).attr('fill','var(--text-secondary)').attr('font-size','7px').text(\`OR \${(a*d/(b*c)).toFixed(2)}\`)\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Fourfold Plot (2×2)')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};