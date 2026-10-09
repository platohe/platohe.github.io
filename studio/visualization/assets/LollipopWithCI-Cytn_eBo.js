var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'lollipop-with-ci',\r
  title: 'Lollipop With C I',\r
  desc: 'Lollipop With C I — a historical chart visualization',\r
  category: 'Historical',\r
  component: 'LollipopWithCI',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["historical","lollipop-with-c-i"],\r
}\r
\r
export default function LollipopWithCI({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT=[{cat:'North',v:42,lo:4,hi:6},{cat:'South',v:58,lo:5,hi:5},{cat:'East',v:36,lo:3,hi:4},{cat:'West',v:64,lo:6,hi:7},{cat:'Central',v:48,lo:4,hi:5}]\r
    const data=Array.isArray(customData)&&customData.length&&customData[0].cat?customData:DEFAULT\r
    const margin={top:28,right:14,bottom:24,left:36}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const x=d3.scaleLinear().domain([0,d3.max(data,d=>d.v+d.hi)||70]).nice().range([0,width])\r
    const y=d3.scaleBand().domain(data.map(d=>d.cat)).range([0,height]).padding(0.32)\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    g.append('g').call(d3.axisLeft(y).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text)').attr('font-size','8px').attr('font-weight',600))\r
    g.append('g').attr('transform',\`translate(0,\${height})\`).call(d3.axisBottom(x).ticks(4).tickSize(-height).tickPadding(6))\r
      .call(g2=>g2.select('.domain').remove()).call(g2=>g2.selectAll('.tick line').attr('stroke','var(--border)').attr('stroke-dasharray','2,3'))\r
      .call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    data.forEach((d,i)=>{\r
      const yy=(y(d.cat)??0)+y.bandwidth()/2\r
      g.append('line').attr('x1',0).attr('x2',x(d.v)).attr('y1',yy).attr('y2',yy).attr('stroke',colors[i%colors.length]).attr('stroke-width',1.6).attr('opacity',0.62)\r
      g.append('circle').attr('cx',x(d.v)).attr('cy',yy).attr('r',5).attr('fill',colors[i%colors.length]).attr('stroke','var(--bg)').attr('stroke-width',1)\r
      g.append('line').attr('x1',x(d.v-d.lo)).attr('x2',x(d.v+d.hi)).attr('y1',yy).attr('y2',yy).attr('stroke','var(--text)').attr('stroke-width',1)\r
      g.append('line').attr('x1',x(d.v-d.lo)).attr('x2',x(d.v-d.lo)).attr('y1',yy-4).attr('y2',yy+4).attr('stroke','var(--text)').attr('stroke-width',1)\r
      g.append('line').attr('x1',x(d.v+d.hi)).attr('x2',x(d.v+d.hi)).attr('y1',yy-4).attr('y2',yy+4).attr('stroke','var(--text)').attr('stroke-width',1)\r
    })\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Lollipop with CI')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};