var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
export const meta = {\r
  id: 'cycle-with-avg',\r
  title: 'Cycle With Avg',\r
  desc: 'Cycle With Avg — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'CycleWithAvg',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","cycle-with-avg"],\r
}\r
\r
export default function CycleWithAvg({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']\r
    const gen = () => [{"month":"Jan","v":44.022},{"month":"Feb","v":40.966},{"month":"Mar","v":49.049},{"month":"Apr","v":45.395},{"month":"May","v":35.496},{"month":"Jun","v":42.532},{"month":"Jul","v":37.465},{"month":"Aug","v":44.495},{"month":"Sep","v":49.309},{"month":"Oct","v":41.446},{"month":"Nov","v":36.998},{"month":"Dec","v":49.641}]\r
    const data=Array.isArray(customData)&&customData.length&&customData[0].month?customData:gen()\r
    const margin={top:28,right:14,bottom:24,left:36}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const x=d3.scaleBand().domain(months).range([0,width]).padding(0.12)\r
    const y=d3.scaleLinear().domain([0,70]).range([height,0])\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    g.append('g').call(d3.axisLeft(y).ticks(5).tickSize(-width).tickPadding(6))\r
      .call(g2=>g2.select('.domain').remove()).call(g2=>g2.selectAll('.tick line').attr('stroke','var(--border)').attr('stroke-dasharray','2,3'))\r
      .call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    g.append('g').attr('transform',\`translate(0,\${height})\`).call(d3.axisBottom(x).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    const avg=d3.mean(data,d=>d.v)||0\r
    data.forEach(d=>{\r
      g.append('rect').attr('x',x(d.month)??0).attr('y',y(d.v)).attr('width',x.bandwidth()).attr('height',height-y(d.v)).attr('fill','#60a5fa').attr('fill-opacity',0.48).attr('stroke','#3b82f6').attr('rx',2)\r
    })\r
    g.append('line').attr('x1',0).attr('x2',width).attr('y1',y(avg)).attr('y2',y(avg)).attr('stroke','#0f172a').attr('stroke-width',1.4).attr('stroke-dasharray','3,2')\r
    g.append('circle').attr('cx',width-8).attr('cy',y(avg)).attr('r',3).attr('fill','#0f172a')\r
    g.append('text').attr('x',width-14).attr('y',y(avg)-6).attr('text-anchor','end').attr('fill','#0f172a').attr('font-size','7px').text(\`avg \${avg.toFixed(1)}\`)\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Cycle with Avg')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};