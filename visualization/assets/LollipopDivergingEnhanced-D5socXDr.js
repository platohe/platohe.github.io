var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
export const meta = {\r
  id: 'lollipop-diverging-enhanced',\r
  title: 'Lollipop Diverging Enhanced',\r
  desc: 'Lollipop Diverging Enhanced — a historical chart visualization',\r
  category: 'Historical',\r
  component: 'LollipopDivergingEnhanced',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["historical","lollipop-diverging-enhanced"],\r
}\r
\r
export default function LollipopDivergingEnhanced({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT=[{cat:'A',v:-28},{cat:'B',v:22},{cat:'C',v:-14},{cat:'D',v:36},{cat:'E',v:-8},{cat:'F',v:18}]\r
    const data=Array.isArray(customData)&&customData.length&&customData[0].cat?customData:DEFAULT\r
    const margin={top:28,right:46,bottom:24,left:36}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const x=d3.scaleLinear().domain(d3.extent(data,d=>d.v)).nice().range([0,width])\r
    const y=d3.scaleBand().domain(data.map(d=>d.cat)).range([0,height]).padding(0.36)\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    const zero=x(0)\r
    g.append('line').attr('x1',zero).attr('x2',zero).attr('y1',0).attr('y2',height).attr('stroke','var(--border)').attr('stroke-width',1.2)\r
    g.append('g').call(d3.axisLeft(y).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text)').attr('font-size','7px').attr('font-weight',600))\r
    g.append('g').attr('transform',\`translate(0,\${height})\`).call(d3.axisBottom(x).ticks(5).tickSize(-height).tickPadding(6))\r
      .call(g2=>g2.select('.domain').remove()).call(g2=>g2.selectAll('.tick line').attr('stroke','var(--border)').attr('stroke-dasharray','2,3'))\r
      .call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    data.forEach(d=>{\r
      const col=d.v>=0?'#22c55e':'#ef4444'\r
      const isPos=d.v>=0\r
      g.append('line').attr('x1',zero).attr('x2',x(d.v)).attr('y1',(y(d.cat)??0)+y.bandwidth()/2).attr('y2',(y(d.cat)??0)+y.bandwidth()/2).attr('stroke',col).attr('stroke-width',2)\r
      g.append('circle').attr('cx',x(d.v)).attr('cy',(y(d.cat)??0)+y.bandwidth()/2).attr('r',5).attr('fill',col).attr('stroke','var(--bg)')\r
      g.append('text').attr('x',x(d.v)+(isPos?6:-6)).attr('y',(y(d.cat)??0)+y.bandwidth()/2+3).attr('text-anchor',isPos?'start':'end').attr('fill','var(--text-secondary)').attr('font-size','7px').text(d.v)\r
    })\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Lollipop Diverging Enhanced')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};