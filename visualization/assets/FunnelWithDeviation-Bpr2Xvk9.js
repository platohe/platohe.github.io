var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
export const meta = {\r
  id: 'funnel-with-deviation',\r
  title: 'Funnel With Deviation',\r
  desc: 'Funnel With Deviation — a fun chart visualization',\r
  category: 'Fun',\r
  component: 'FunnelWithDeviation',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["fun","funnel-with-deviation"],\r
}\r
\r
export default function FunnelWithDeviation({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT=[{stage:'Visit',v:1000,dev:0},{stage:'Signup',v:620,dev:4},{stage:'Trial',v:380,dev:-2},{stage:'Purchase',v:210,dev:3}]\r
    const data=Array.isArray(customData)&&customData.length&&customData[0].stage?customData:DEFAULT\r
    const margin={top:28,right:14,bottom:14,left:14}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const x=d3.scaleLinear().domain([0,d3.max(data,d=>d.v)||1000]).range([0,width])\r
    const y=d3.scaleBand().domain(data.map(d=>d.stage)).range([0,height]).padding(0.22)\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    g.append('g').call(d3.axisLeft(y).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text)').attr('font-size','8px').attr('font-weight',600))\r
    data.forEach((d,i)=>{\r
      const col=d.dev>=0?'#22c55e':'#ef4444'\r
      const devW=Math.abs(d.dev)*6\r
      g.append('rect').attr('x',0).attr('y',y(d.stage)??0).attr('width',x(d.v)).attr('height',y.bandwidth()).attr('fill',d3.interpolateBlues(0.32+i*0.18)).attr('stroke','var(--bg)').attr('rx',3)\r
      g.append('rect').attr('x',x(d.v)).attr('y',(y(d.stage)??0)+y.bandwidth()/2-6).attr('width',devW).attr('height',12).attr('fill',col).attr('fill-opacity',0.42).attr('stroke',col).attr('rx',2)\r
      g.append('text').attr('x',x(d.v)+devW+4).attr('y',(y(d.stage)??0)+y.bandwidth()/2+3).attr('fill',col).attr('font-size','6px').text(\`\${d.dev>=0?'+':''}\${d.dev}\`)\r
    })\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Funnel with Deviation')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};