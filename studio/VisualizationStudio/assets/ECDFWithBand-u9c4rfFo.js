var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'ecdfwith-band',\r
  title: 'E C D F With Band',\r
  desc: 'E C D F With Band — a analysis chart visualization',\r
  category: 'Analysis',\r
  component: 'ECDFWithBand',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["analysis","e-c-d-f-with-band"],\r
}\r
\r
export default function ECDFWithBand({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const vals=Array.isArray(customData)&&customData.length&&typeof customData[0]==='number'?customData:Array.from({length:48},()=> Math.max(8,Math.min(92, d3.randomNormal(52,15)()))).sort(d3.ascending)\r
    const sorted=[...vals].sort(d3.ascending)\r
    const n=sorted.length\r
    const margin={top:28,right:14,bottom:24,left:36}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const x=d3.scaleLinear().domain([0,100]).range([0,width])\r
    const y=d3.scaleLinear().domain([0,1]).range([height,0])\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    g.append('g').attr('transform',\`translate(0,\${height})\`).call(d3.axisBottom(x).ticks(5).tickSize(-height).tickPadding(6))\r
      .call(g2=>g2.select('.domain').attr('stroke','var(--border)')).call(g2=>g2.selectAll('.tick line').attr('stroke','var(--border)').attr('stroke-dasharray','2,3'))\r
      .call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    g.append('g').call(d3.axisLeft(y).ticks(4).tickFormat(d3.format('.0%')).tickSize(-width).tickPadding(6))\r
      .call(g2=>g2.select('.domain').remove()).call(g2=>g2.selectAll('.tick line').attr('stroke','var(--border)').attr('stroke-dasharray','2,3'))\r
      .call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    const pts=sorted.map((v,i)=>({x:v, y:(i+1)/n}))\r
    const band=0.07\r
    const area=d3.area().x(d=>x(d.x)).y0(d=>y(Math.max(0,d.y-band))).y1(d=>y(Math.min(1,d.y+band))).curve(d3.curveStepAfter)\r
    g.append('path').datum(pts).attr('d',area).attr('fill',colors[0]).attr('fill-opacity',0.12)\r
    g.append('path').datum(pts).attr('d',d3.line().x(d=>x(d.x)).y(d=>y(d.y)).curve(d3.curveStepAfter)).attr('fill','none').attr('stroke',colors[0]).attr('stroke-width',1.8)\r
    pts.forEach(p=> g.append('circle').attr('cx',x(p.x)).attr('cy',y(p.y)).attr('r',1.4).attr('fill',colors[0]).attr('opacity',0.72))\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('ECDF with Band')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};