var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
export const meta = {\r
  id: 'funnel-with-avg',\r
  title: 'Funnel With Avg',\r
  desc: 'Funnel With Avg — a fun chart visualization',\r
  category: 'Fun',\r
  component: 'FunnelWithAvg',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["fun","funnel-with-avg"],\r
}\r
\r
export default function FunnelWithAvg({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT=[{stage:'Visit',v:1000},{stage:'Signup',v:620},{stage:'Trial',v:380},{stage:'Purchase',v:210}]\r
    const data=Array.isArray(customData)&&customData.length&&customData[0].stage?customData:DEFAULT\r
    const margin={top:28,right:14,bottom:14,left:14}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const x=d3.scaleLinear().domain([0,d3.max(data,d=>d.v)||1000]).range([0,width])\r
    const y=d3.scaleBand().domain(data.map(d=>d.stage)).range([0,height]).padding(0.22)\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    g.append('g').call(d3.axisLeft(y).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text)').attr('font-size','8px').attr('font-weight',600))\r
    data.forEach((d,i)=>{\r
      const col=d3.interpolateBlues(0.32+i*0.18)\r
      g.append('rect').attr('x',0).attr('y',y(d.stage)??0).attr('width',x(d.v)).attr('height',y.bandwidth()).attr('fill',col).attr('stroke','var(--bg)').attr('rx',3)\r
      g.append('text').attr('x',x(d.v)+4).attr('y',(y(d.stage)??0)+y.bandwidth()/2+3).attr('fill','var(--text-secondary)').attr('font-size','7px').text(d.v)\r
    })\r
    const avg=d3.mean(data,d=>d.v)||0\r
    g.append('line').attr('x1',x(avg)).attr('x2',x(avg)).attr('y1',0).attr('y2',height).attr('stroke','#f59e0b').attr('stroke-width',1.2).attr('stroke-dasharray','3,2')\r
    g.append('text').attr('x',x(avg)+4).attr('y',10).attr('fill','#f59e0b').attr('font-size','7px').text(\`avg \${Math.round(avg)}\`)\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Funnel with Avg')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};