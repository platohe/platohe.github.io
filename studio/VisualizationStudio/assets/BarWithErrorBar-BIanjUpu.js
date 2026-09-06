var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'bar-with-error-bar',\r
  title: 'Bar With Error Bar',\r
  desc: 'Bar With Error Bar — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'BarWithErrorBar',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["bars","bar-with-error-bar"],\r
}\r
\r
export default function BarWithErrorBar({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT=[{cat:'A',v:42,lo:6,hi:8},{cat:'B',v:58,lo:9,hi:7},{cat:'C',v:36,lo:5,hi:6},{cat:'D',v:48,lo:7,hi:9},{cat:'E',v:62,lo:8,hi:10}]\r
    const data=Array.isArray(customData)&&customData.length&&customData[0].cat?customData:DEFAULT\r
    const margin={top:28,right:14,bottom:24,left:36}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const x=d3.scaleBand().domain(data.map(d=>d.cat)).range([0,width]).padding(0.22)\r
    const y=d3.scaleLinear().domain([0,d3.max(data,d=>d.v+d.hi)||70]).nice().range([height,0])\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    g.append('g').call(d3.axisLeft(y).ticks(4).tickSize(-width).tickPadding(6))\r
      .call(g2=>g2.select('.domain').remove()).call(g2=>g2.selectAll('.tick line').attr('stroke','var(--border)').attr('stroke-dasharray','2,3'))\r
      .call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    g.append('g').attr('transform',\`translate(0,\${height})\`).call(d3.axisBottom(x).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    data.forEach((d,i)=>{\r
      g.append('rect').attr('x',x(d.cat)??0).attr('y',y(d.v)).attr('width',x.bandwidth()).attr('height',height-y(d.v)).attr('fill',colors[i%colors.length]).attr('fill-opacity',0.82).attr('rx',3).attr('stroke','var(--bg)')\r
      const cx=(x(d.cat)??0)+x.bandwidth()/2\r
      g.append('line').attr('x1',cx).attr('x2',cx).attr('y1',y(d.v-d.lo)).attr('y2',y(d.v+d.hi)).attr('stroke','var(--text)').attr('stroke-width',1.2)\r
      g.append('line').attr('x1',cx-6).attr('x2',cx+6).attr('y1',y(d.v-d.lo)).attr('y2',y(d.v-d.lo)).attr('stroke','var(--text)').attr('stroke-width',1.2)\r
      g.append('line').attr('x1',cx-6).attr('x2',cx+6).attr('y1',y(d.v+d.hi)).attr('y2',y(d.v+d.hi)).attr('stroke','var(--text)').attr('stroke-width',1.2)\r
      g.append('text').attr('x',cx).attr('y',y(d.v)-8).attr('text-anchor','middle').attr('fill','var(--text-secondary)').attr('font-size','6px').text(d.v)\r
    })\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Bar with Error Bars')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};