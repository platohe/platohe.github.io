var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
export const meta = {\r
  id: 'cycle-with-outliers',\r
  title: 'Cycle With Outliers',\r
  desc: 'Cycle With Outliers — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'CycleWithOutliers',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","cycle-with-outliers"],\r
}\r
\r
export default function CycleWithOutliers({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']\r
    const gen = () => [{"month":"Jan","v":42.82},{"month":"Feb","v":47.344},{"month":"Mar","v":35.147},{"month":"Apr","v":36.918},{"month":"May","v":47.579},{"month":"Jun","v":36.499},{"month":"Jul","v":45.423},{"month":"Aug","v":35.551},{"month":"Sep","v":44.359},{"month":"Oct","v":32.069},{"month":"Nov","v":69.072},{"month":"Dec","v":64.662}]\r
    const data=Array.isArray(customData)&&customData.length&&customData[0].month?customData:gen()\r
    const margin={top:28,right:14,bottom:24,left:36}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const x=d3.scaleBand().domain(months).range([0,width]).padding(0.12)\r
    const y=d3.scaleLinear().domain([0,80]).range([height,0])\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    g.append('g').call(d3.axisLeft(y).ticks(5).tickSize(-width).tickPadding(6))\r
      .call(g2=>g2.select('.domain').remove()).call(g2=>g2.selectAll('.tick line').attr('stroke','var(--border)').attr('stroke-dasharray','2,3'))\r
      .call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    g.append('g').attr('transform',\`translate(0,\${height})\`).call(d3.axisBottom(x).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    const vals=data.map(d=>d.v)\r
    const q1=d3.quantile(vals,0.25)||0, q3=d3.quantile(vals,0.75)||0, iqr=q3-q1, lo=q1-1.5*iqr, hi=q3+1.5*iqr\r
    data.forEach(d=>{\r
      const isOut=d.v<lo||d.v>hi\r
      g.append('rect').attr('x',x(d.month)??0).attr('y',y(d.v)).attr('width',x.bandwidth()).attr('height',height-y(d.v)).attr('fill',isOut?'#ef4444':'#60a5fa').attr('fill-opacity',isOut?0.92:0.42).attr('stroke',isOut?'#ef4444':'#3b82f6').attr('rx',2)\r
      if(isOut) g.append('text').attr('x',(x(d.month)??0)+x.bandwidth()/2).attr('y',y(d.v)-4).attr('text-anchor','middle').attr('fill','#ef4444').attr('font-size','6px').text('outlier')\r
    })\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Cycle with Outliers')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};