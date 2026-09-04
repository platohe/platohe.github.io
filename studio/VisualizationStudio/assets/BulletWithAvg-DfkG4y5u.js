var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
export const meta = {\r
  id: 'bullet-with-avg',\r
  title: 'Bullet With Avg',\r
  desc: 'Bullet With Avg — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'BulletWithAvg',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","bullet-with-avg"],\r
}\r
\r
export default function BulletWithAvg({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT=[{label:'Sales', v:68, avg:62, ranges:[40,65,90]}, {label:'Profit',v:52, avg:58, ranges:[30,55,85]}, {label:'CSAT',v:82, avg:76, ranges:[50,75,100]}]\r
    const data=Array.isArray(customData)&&customData.length&&customData[0].label?customData:DEFAULT\r
    const margin={top:28,right:14,bottom:14,left:66}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const x=d3.scaleLinear().domain([0,100]).range([0,width])\r
    const y=d3.scaleBand().domain(data.map(d=>d.label)).range([0,height]).padding(0.38)\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    data.forEach(d=>{\r
      const yy=(y(d.label)??0)+y.bandwidth()/2\r
      const cols=['#e5e7eb','#cbd5e1','#94a3b8']\r
      d.ranges.forEach((r,i)=> g.append('rect').attr('x',i?x(d.ranges[i-1]):0).attr('y',yy-10).attr('width',x(r)-(i?x(d.ranges[i-1]):0)).attr('height',20).attr('fill',cols[i]).attr('rx',2))\r
      g.append('rect').attr('x',0).attr('y',yy-4).attr('width',x(d.v)).attr('height',8).attr('fill','#0f172a').attr('rx',2)\r
      g.append('line').attr('x1',x(d.avg)).attr('x2',x(d.avg)).attr('y1',yy-10).attr('y2',yy+10).attr('stroke','#f59e0b').attr('stroke-width',1.4).attr('stroke-dasharray','2,2')\r
      g.append('circle').attr('cx',x(d.avg)).attr('cy',yy).attr('r',3).attr('fill','#f59e0b').attr('stroke','var(--bg)')\r
    })\r
    g.append('g').call(d3.axisLeft(y).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text)').attr('font-size','7px').attr('font-weight',600))\r
    g.append('g').attr('transform',\`translate(0,\${height})\`).call(d3.axisBottom(x).ticks(4).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Bullet with Avg')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};