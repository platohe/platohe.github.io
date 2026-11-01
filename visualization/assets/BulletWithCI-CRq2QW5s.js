var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
export const meta = {\r
  id: 'bullet-with-ci',\r
  title: 'Bullet With C I',\r
  desc: 'Bullet With C I — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'BulletWithCI',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","bullet-with-c-i"],\r
}\r
\r
export default function BulletWithCI({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT=[{label:'Q1', v:62, lo:4, hi:6, target:68}, {label:'Q2', v:54, lo:5, hi:5, target:60}, {label:'Q3', v:48, lo:3, hi:7, target:52}]\r
    const data=Array.isArray(customData)&&customData.length&&customData[0].label?customData:DEFAULT\r
    const margin={top:28,right:14,bottom:14,left:66}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const x=d3.scaleLinear().domain([0,100]).range([0,width])\r
    const y=d3.scaleBand().domain(data.map(d=>d.label)).range([0,height]).padding(0.38)\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    data.forEach(d=>{\r
      const yy=(y(d.label)??0)+y.bandwidth()/2\r
      g.append('rect').attr('x',0).attr('y',yy-10).attr('width',x(100)).attr('height',20).attr('fill','#e5e7eb').attr('rx',2)\r
      g.append('rect').attr('x',0).attr('y',yy-4).attr('width',x(d.v)).attr('height',8).attr('fill','#0f172a').attr('rx',2)\r
      g.append('line').attr('x1',x(d.target)).attr('x2',x(d.target)).attr('y1',yy-10).attr('y2',yy+10).attr('stroke','#ef4444').attr('stroke-width',1.6)\r
      // CI\r
      g.append('line').attr('x1',x(d.v-d.lo)).attr('x2',x(d.v+d.hi)).attr('y1',yy).attr('y2',yy).attr('stroke','#0f172a').attr('stroke-width',1)\r
      g.append('circle').attr('cx',x(d.v)).attr('cy',yy).attr('r',3).attr('fill','#0f172a').attr('stroke','var(--bg)')\r
    })\r
    g.append('g').call(d3.axisLeft(y).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text)').attr('font-size','7px').attr('font-weight',600))\r
    g.append('g').attr('transform',\`translate(0,\${height})\`).call(d3.axisBottom(x).ticks(4).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Bullet with CI')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};