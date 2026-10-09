var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'lollipop-with-avg',\r
  title: 'Lollipop With Avg',\r
  desc: 'Lollipop With Avg — a historical chart visualization',\r
  category: 'Historical',\r
  component: 'LollipopWithAvg',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["historical","lollipop-with-avg"],\r
}\r
\r
export default function LollipopWithAvg({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT=[{cat:'North',v:42},{cat:'South',v:58},{cat:'East',v:36},{cat:'West',v:64},{cat:'Central',v:48}]\r
    const data=Array.isArray(customData)&&customData.length&&customData[0].cat?customData:DEFAULT\r
    const margin={top:28,right:14,bottom:24,left:36}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const x=d3.scaleLinear().domain([0,d3.max(data,d=>d.v)||70]).nice().range([0,width])\r
    const y=d3.scaleBand().domain(data.map(d=>d.cat)).range([0,height]).padding(0.32)\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    g.append('g').call(d3.axisLeft(y).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text)').attr('font-size','8px').attr('font-weight',600))\r
    g.append('g').attr('transform',\`translate(0,\${height})\`).call(d3.axisBottom(x).ticks(4).tickSize(-height).tickPadding(6))\r
      .call(g2=>g2.select('.domain').remove()).call(g2=>g2.selectAll('.tick line').attr('stroke','var(--border)').attr('stroke-dasharray','2,3'))\r
      .call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    const avg=d3.mean(data,d=>d.v)||0\r
    data.forEach((d,i)=>{\r
      g.append('line').attr('x1',0).attr('x2',x(d.v)).attr('y1',(y(d.cat)??0)+y.bandwidth()/2).attr('y2',(y(d.cat)??0)+y.bandwidth()/2).attr('stroke',colors[i%colors.length]).attr('stroke-width',1.6).attr('opacity',0.62)\r
      g.append('circle').attr('cx',x(d.v)).attr('cy',(y(d.cat)??0)+y.bandwidth()/2).attr('r',5).attr('fill',colors[i%colors.length]).attr('stroke','var(--bg)')\r
    })\r
    g.append('line').attr('x1',x(avg)).attr('x2',x(avg)).attr('y1',0).attr('y2',height).attr('stroke','#0f172a').attr('stroke-width',1.2).attr('stroke-dasharray','3,2')\r
    g.append('circle').attr('cx',x(avg)).attr('cy',8).attr('r',3).attr('fill','#0f172a')\r
    g.append('text').attr('x',x(avg)+4).attr('y',11).attr('fill','#0f172a').attr('font-size','7px').text(\`avg \${avg.toFixed(1)}\`)\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Lollipop with Avg')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};