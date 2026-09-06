var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'ecdfwith-outliers',\r
  title: 'E C D F With Outliers',\r
  desc: 'E C D F With Outliers — a analysis chart visualization',\r
  category: 'Analysis',\r
  component: 'ECDFWithOutliers',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["analysis","e-c-d-f-with-outliers"],\r
}\r
\r
export default function ECDFWithOutliers({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const vals=Array.isArray(customData)&&customData.length&&typeof customData[0]==='number'?customData:Array.from({length:48},()=> Math.max(8,Math.min(92, d3.randomNormal(52,15)()))).sort(d3.ascending)\r
    const sorted=[...vals].sort(d3.ascending)\r
    const n=sorted.length\r
    const q1=d3.quantile(sorted,0.25)||0, q3=d3.quantile(sorted,0.75)||0, iqr=q3-q1, lo=q1-1.5*iqr, hi=q3+1.5*iqr\r
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
    pts.filter(p=>p.x<lo||p.x>hi).forEach(p=> g.append('circle').attr('cx',x(p.x)).attr('cy',y(p.y)).attr('r',3).attr('fill','#ef4444').attr('stroke','var(--bg)'))\r
    g.append('line').attr('x1',x(lo)).attr('x2',x(lo)).attr('y1',0).attr('y2',height).attr('stroke','#f59e0b').attr('stroke-dasharray','3,2').attr('opacity',0.52)\r
    g.append('line').attr('x1',x(hi)).attr('x2',x(hi)).attr('y1',0).attr('y2',height).attr('stroke','#f59e0b').attr('stroke-dasharray','3,2').attr('opacity',0.52)\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('ECDF with Outliers')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};