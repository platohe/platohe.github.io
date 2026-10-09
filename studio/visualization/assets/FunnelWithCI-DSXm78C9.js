var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
export const meta = {\r
  id: 'funnel-with-ci',\r
  title: 'Funnel With C I',\r
  desc: 'Funnel With C I — a fun chart visualization',\r
  category: 'Fun',\r
  component: 'FunnelWithCI',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["fun","funnel-with-c-i"],\r
}\r
\r
export default function FunnelWithCI({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT=[{stage:'Visit',v:1000,lo:22,hi:22},{stage:'Signup',v:620,lo:18,hi:18},{stage:'Trial',v:380,lo:14,hi:14},{stage:'Purchase',v:210,lo:10,hi:10}]\r
    const data=Array.isArray(customData)&&customData.length&&customData[0].stage?customData:DEFAULT\r
    const margin={top:28,right:46,bottom:14,left:14}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const x=d3.scaleLinear().domain([0,d3.max(data,d=>d.v+d.hi)||1000]).range([0,width])\r
    const y=d3.scaleBand().domain(data.map(d=>d.stage)).range([0,height]).padding(0.22)\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    g.append('g').call(d3.axisLeft(y).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text)').attr('font-size','8px').attr('font-weight',600))\r
    data.forEach(d=>{\r
      const yy=(y(d.stage)??0)+y.bandwidth()/2\r
      g.append('rect').attr('x',0).attr('y',y(d.stage)??0).attr('width',x(d.v)).attr('height',y.bandwidth()).attr('fill',d3.interpolateBlues(0.32 + data.indexOf(d)*0.16)).attr('rx',3).attr('stroke','var(--bg)')\r
      // CI\r
      g.append('line').attr('x1',x(d.v-d.lo)).attr('x2',x(d.v+d.hi)).attr('y1',yy).attr('y2',yy).attr('stroke','var(--text)').attr('stroke-width',1.2)\r
      g.append('line').attr('x1',x(d.v-d.lo)).attr('x2',x(d.v-d.lo)).attr('y1',yy-4).attr('y2',yy+4).attr('stroke','var(--text)').attr('stroke-width',1)\r
      g.append('line').attr('x1',x(d.v+d.hi)).attr('x2',x(d.v+d.hi)).attr('y1',yy-4).attr('y2',yy+4).attr('stroke','var(--text)').attr('stroke-width',1)\r
      g.append('text').attr('x',x(d.v)+8).attr('y',yy+3).attr('fill','var(--text-secondary)').attr('font-size','7px').text(\`\${d.v}±\${d.lo}\`)\r
    })\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Funnel with CI')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};