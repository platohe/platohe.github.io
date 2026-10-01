var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'qqwith-median',\r
  title: 'Q Q With Median',\r
  desc: 'Q Q With Median — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'QQWithMedian',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","q-q-with-median"],\r
}\r
\r
export default function QQWithMedian({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const vals=Array.isArray(customData)&&customData.length&&typeof customData[0]==='number'?customData:Array.from({length:44},()=> Math.max(8,Math.min(92, d3.randomNormal(50,14)()))).sort(d3.ascending)\r
    const sorted=[...vals].sort(d3.ascending)\r
    const n=sorted.length\r
    const exp=d3.range(n).map(i=>{ const p=(i+0.5)/n; const a=Math.sqrt(-2*Math.log(Math.min(p,1-p))); const q= p<0.5? -(a - (0.010328*a*a+0.802853*a+2.515517)/(1+0.010328*a*a+1.432788*a+1.189269*a)) : (a - (0.010328*a*a+0.802853*a+2.515517)/(1+0.010328*a*a+1.432788*a+1.189269*a)); return 50+q*14 })\r
    const margin={top:28,right:14,bottom:24,left:36}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const x=d3.scaleLinear().domain(d3.extent(exp) ).nice().range([0,width])\r
    const y=d3.scaleLinear().domain(d3.extent(sorted) ).nice().range([height,0])\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    g.append('g').attr('transform',\`translate(0,\${height})\`).call(d3.axisBottom(x).ticks(5).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    g.append('g').call(d3.axisLeft(y).ticks(5).tickSize(-width).tickPadding(6))\r
      .call(g2=>g2.select('.domain').remove()).call(g2=>g2.selectAll('.tick line').attr('stroke','var(--border)').attr('stroke-dasharray','2,3'))\r
      .call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    const minV=Math.min(d3.min(exp)||0, d3.min(sorted)||0), maxV=Math.max(d3.max(exp)||100, d3.max(sorted)||100)\r
    g.append('line').attr('x1',x(minV)).attr('x2',x(maxV)).attr('y1',y(minV)).attr('y2',y(maxV)).attr('stroke','#94a3b8').attr('stroke-dasharray','3,3')\r
    sorted.forEach((v,i)=> g.append('circle').attr('cx',x(exp[i])).attr('cy',y(v)).attr('r',2).attr('fill',colors[0]).attr('opacity',0.82))\r
    const m=d3.median(sorted)||50, em=d3.median(exp)||50\r
    g.append('line').attr('x1',x(em)-8).attr('x2',x(em)+8).attr('y1',y(m)).attr('y2',y(m)).attr('stroke','#0f172a').attr('stroke-width',1.2)\r
    g.append('line').attr('x1',x(em)).attr('x2',x(em)).attr('y1',y(m)-8).attr('y2',y(m)+8).attr('stroke','#0f172a').attr('stroke-width',1.2)\r
    g.append('circle').attr('cx',x(em)).attr('cy',y(m)).attr('r',3).attr('fill','#0f172a')\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Q-Q with Median')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};