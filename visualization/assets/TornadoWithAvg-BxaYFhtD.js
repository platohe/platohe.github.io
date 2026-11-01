var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
export const meta = {\r
  id: 'tornado-with-avg',\r
  title: 'Tornado With Avg',\r
  desc: 'Tornado With Avg — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'TornadoWithAvg',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","tornado-with-avg"],\r
}\r
\r
export default function TornadoWithAvg({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT=[{cat:'Price',v:18},{cat:'Cost',v:-12},{cat:'Demand',v:9},{cat:'Rate',v:-6}]\r
    const data=Array.isArray(customData)&&customData.length&&customData[0].cat?customData:DEFAULT\r
    const sorted=[...data].sort((a,b)=> Math.abs(b.v)-Math.abs(a.v))\r
    const margin={top:28,right:46,bottom:14,left:46}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const y=d3.scaleBand().domain(sorted.map(d=>d.cat)).range([0,height]).padding(0.32)\r
    const x=d3.scaleLinear().domain([d3.min(sorted,d=>d.v)*1.1, d3.max(sorted,d=>d.v)*1.1]).nice().range([0,width])\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    const zero=x(0)\r
    g.append('line').attr('x1',zero).attr('x2',zero).attr('y1',0).attr('y2',height).attr('stroke','var(--border)').attr('stroke-width',1.2)\r
    g.append('g').call(d3.axisLeft(y).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text)').attr('font-size','7px').attr('font-weight',600))\r
    g.append('g').attr('transform',\`translate(0,\${height})\`).call(d3.axisBottom(x).ticks(4).tickSize(-height).tickPadding(6))\r
      .call(g2=>g2.select('.domain').remove()).call(g2=>g2.selectAll('.tick line').attr('stroke','var(--border)').attr('stroke-dasharray','2,3'))\r
      .call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    sorted.forEach(d=>{\r
      const col=d.v>=0?'#22c55e':'#ef4444'\r
      const x0=x(Math.min(0,d.v)), x1=x(Math.max(0,d.v))\r
      g.append('rect').attr('x',x0).attr('y',(y(d.cat)??0)+2).attr('width',Math.abs(x1-x0)).attr('height',y.bandwidth()-4).attr('fill',col).attr('rx',2)\r
    })\r
    const avg=d3.mean(sorted,d=>d.v)||0\r
    g.append('line').attr('x1',x(avg)).attr('x2',x(avg)).attr('y1',0).attr('y2',height).attr('stroke','#0f172a').attr('stroke-width',1.2).attr('stroke-dasharray','3,2')\r
    g.append('circle').attr('cx',x(avg)).attr('cy',8).attr('r',3).attr('fill','#0f172a')\r
    g.append('text').attr('x',x(avg)+4).attr('y',11).attr('fill','#0f172a').attr('font-size','7px').text(\`avg \${avg.toFixed(1)}\`)\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Tornado with Avg')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};