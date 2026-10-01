var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
export const meta = {\r
  id: 'variable-width-histogram',\r
  title: 'Variable Width Histogram',\r
  desc: 'Variable Width Histogram — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'VariableWidthHistogram',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","variable-width-histogram"],\r
}\r
\r
export default function VariableWidthHistogram({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const bins=(customData&&customData.bins)||[\r
      {x0:0,x1:18,n:8},{x0:18,x1:26,n:22},{x0:26,x1:32,n:38},{x0:32,x1:44,n:26},{x0:44,x1:60,n:14},{x0:60,x1:80,n:6},{x0:80,x1:100,n:3},\r
    ]\r
    const margin={top:28,right:14,bottom:24,left:36}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const x=d3.scaleLinear().domain([0,100]).range([0,width])\r
    const y=d3.scaleLinear().domain([0,45]).range([height,0])\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    g.append('g').call(d3.axisLeft(y).ticks(5).tickSize(-width).tickPadding(6))\r
      .call(g2=>g2.select('.domain').remove()).call(g2=>g2.selectAll('.tick line').attr('stroke','var(--border)').attr('stroke-dasharray','2,3'))\r
      .call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    g.append('g').attr('transform',\`translate(0,\${height})\`).call(d3.axisBottom(x).ticks(6).tickSize(0))\r
      .call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    const color=d3.scaleSequential(d3.interpolateBlues).domain([0,42])\r
    bins.forEach(b=>{\r
      g.append('rect').attr('x',x(b.x0)).attr('y',y(b.n)).attr('width',x(b.x1)-x(b.x0)-1).attr('height',height - y(b.n)).attr('fill',color(b.n)).attr('stroke','var(--bg)').attr('rx',2)\r
      g.append('text').attr('x',(x(b.x0)+x(b.x1))/2).attr('y',y(b.n)-4).attr('text-anchor','middle').attr('fill','var(--text-secondary)').attr('font-size','6px').text(b.n)\r
    })\r
    // area = count annotation\r
    g.append('text').attr('x',width/2).attr('y',-8).attr('text-anchor','middle').attr('fill','var(--text-secondary)').attr('font-size','7px').text('Width = bin width, Area ≈ count')\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Variable-Width Histogram')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};