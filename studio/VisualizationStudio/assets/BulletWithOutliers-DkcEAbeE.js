var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
export const meta = {\r
  id: 'bullet-with-outliers',\r
  title: 'Bullet With Outliers',\r
  desc: 'Bullet With Outliers — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'BulletWithOutliers',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","bullet-with-outliers"],\r
}\r
\r
export default function BulletWithOutliers({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT=[{label:'Sales', v:68},{label:'Profit',v:52},{label:'CSAT',v:82},{label:'Growth',v:38}]\r
    const vals=DEFAULT.map(d=>d.v)\r
    const q1=d3.quantile(vals,0.25)||0, q3=d3.quantile(vals,0.75)||0, iqr=q3-q1, lo=q1-1.5*iqr, hi=q3+1.5*iqr\r
    const data=Array.isArray(customData)&&customData.length&&customData[0].label?customData:DEFAULT\r
    const margin={top:28,right:14,bottom:14,left:66}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const x=d3.scaleLinear().domain([0,100]).range([0,width])\r
    const y=d3.scaleBand().domain(data.map(d=>d.label)).range([0,height]).padding(0.38)\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    data.forEach(d=>{\r
      const isOut=d.v<lo||d.v>hi\r
      const yy=(y(d.label)??0)+y.bandwidth()/2\r
      g.append('rect').attr('x',0).attr('y',yy-10).attr('width',x(100)).attr('height',20).attr('fill','#e5e7eb').attr('rx',2)\r
      g.append('rect').attr('x',0).attr('y',yy-4).attr('width',x(d.v)).attr('height',8).attr('fill',isOut?'#ef4444':'#0f172a').attr('fill-opacity',isOut?0.92:1).attr('rx',2)\r
      if(isOut) g.append('text').attr('x',x(d.v)+4).attr('y',yy+3).attr('fill','#ef4444').attr('font-size','7px').text('outlier')\r
    })\r
    g.append('g').call(d3.axisLeft(y).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text)').attr('font-size','7px').attr('font-weight',600))\r
    g.append('g').attr('transform',\`translate(0,\${height})\`).call(d3.axisBottom(x).ticks(4).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Bullet with Outliers')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};