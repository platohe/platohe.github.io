var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
export const meta = {\r
  id: 'bullet-with-trend',\r
  title: 'Bullet With Trend',\r
  desc: 'Bullet With Trend — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'BulletWithTrend',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","bullet-with-trend"],\r
}\r
\r
export default function BulletWithTrend({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT=[{label:'Revenue', actual:72,target:80, ranges:[50,70,100], trend:[62,65,68,70,72]}, {label:'Profit', actual:58,target:65, ranges:[40,60,90], trend:[48,52,55,57,58]}, {label:'Growth', actual:84,target:75, ranges:[30,60,100], trend:[70,74,78,82,84]}]\r
    const data=Array.isArray(customData)&&customData.length&&customData[0].label?customData:DEFAULT\r
    const margin={top:28,right:42,bottom:14,left:72}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const x=d3.scaleLinear().domain([0,100]).range([0,width])\r
    const y=d3.scaleBand().domain(data.map(d=>d.label)).range([0,height]).padding(0.38)\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    data.forEach(d=>{\r
      const yy=(y(d.label)??0)+y.bandwidth()/2\r
      const col=['#e5e7eb','#d1d5db','#9ca3af']\r
      d.ranges.forEach((r,i)=> g.append('rect').attr('x',i?x(d.ranges[i-1]):0).attr('y',yy-8).attr('width', x(r)-(i?x(d.ranges[i-1]):0)).attr('height',16).attr('fill',col[i]).attr('rx',2))\r
      const trendX=d3.scaleLinear().domain([0,4]).range([0,width])\r
      const trendY=d3.scaleLinear().domain([0,100]).range([yy+8, yy-8])\r
      g.append('path').datum(d.trend).attr('d', d3.line().x((_,i)=>trendX(i)).y(v=>trendY(v)).curve(d3.curveMonotoneX)).attr('fill','none').attr('stroke','#6366f1').attr('stroke-width',1.2).attr('opacity',0.72)\r
      g.append('rect').attr('x',0).attr('y',yy-4).attr('width',x(d.actual)).attr('height',8).attr('fill','#0f172a').attr('rx',2)\r
      g.append('line').attr('x1',x(d.target)).attr('x2',x(d.target)).attr('y1',yy-10).attr('y2',yy+10).attr('stroke','#ef4444').attr('stroke-width',1.6)\r
    })\r
    g.append('g').call(d3.axisLeft(y).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text)').attr('font-size','7px').attr('font-weight',600))\r
    g.append('g').attr('transform',\`translate(0,\${height})\`).call(d3.axisBottom(x).ticks(5).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Bullet with Trend')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};