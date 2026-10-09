var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'ecdfwith-median',\r
  title: 'E C D F With Median',\r
  desc: 'E C D F With Median — a analysis chart visualization',\r
  category: 'Analysis',\r
  component: 'ECDFWithMedian',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["analysis","e-c-d-f-with-median"],\r
}\r
\r
export default function ECDFWithMedian({ data: customData }) {\r
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
    g.append('path').datum(pts).attr('d',d3.line().x(d=>x(d.x)).y(d=>y(d.y)).curve(d3.curveStepAfter)).attr('fill','none').attr('stroke',colors[0]).attr('stroke-width',1.8)\r
    const m=d3.median(sorted)||50\r
    g.append('line').attr('x1',x(m)).attr('x2',x(m)).attr('y1',0).attr('y2',height).attr('stroke','#0f172a').attr('stroke-width',1).attr('stroke-dasharray','3,2')\r
    const my=pts.find(p=>p.x>=m)?.y||0.5\r
    g.append('circle').attr('cx',x(m)).attr('cy',y(my)).attr('r',3).attr('fill','#0f172a').attr('stroke','var(--bg)')\r
    g.append('text').attr('x',x(m)+4).attr('y',y(my)-6).attr('fill','#0f172a').attr('font-size','7px').text(\`median \${m.toFixed(1)}\`)\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('ECDF with Median')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};