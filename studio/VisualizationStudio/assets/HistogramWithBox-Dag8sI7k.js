var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'histogram-with-box',\r
  title: 'Histogram With Box',\r
  desc: 'Histogram With Box — a analysis chart visualization',\r
  category: 'Analysis',\r
  component: 'HistogramWithBox',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["analysis","histogram-with-box"],\r
}\r
\r
export default function HistogramWithBox({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const vals=Array.isArray(customData)&&customData.length&&typeof customData[0]==='number'?customData:Array.from({length:64},()=> Math.max(6,Math.min(94, d3.randomNormal(52,16)())))\r
    const margin={top:28,right:14,bottom:34,left:36}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const x=d3.scaleLinear().domain([0,100]).range([0,width])\r
    const y=d3.scaleLinear().range([height-38,0])\r
    const bins=d3.bin().domain([0,100]).thresholds(18)(vals)\r
    y.domain([0,d3.max(bins,d=>d.length)||10])\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    g.selectAll('rect').data(bins).join('rect')\r
      .attr('x',d=>x(d.x0??0)).attr('y',d=>y(d.length)).attr('width',d=>Math.max(1, x(d.x1??0)-x(d.x0??0)-1)).attr('height',d=>height-38 - y(d.length))\r
      .attr('fill',colors[0]).attr('fill-opacity',0.68).attr('stroke',colors[0]).attr('rx',2)\r
    g.append('g').attr('transform',\`translate(0,\${height-38})\`).call(d3.axisBottom(x).ticks(6).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    g.append('g').call(d3.axisLeft(y).ticks(4).tickSize(-width).tickPadding(6))\r
      .call(g2=>g2.select('.domain').remove()).call(g2=>g2.selectAll('.tick line').attr('stroke','var(--border)').attr('stroke-dasharray','2,3'))\r
      .call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    // box on top\r
    const sorted=[...vals].sort(d3.ascending)\r
    const q1=d3.quantile(sorted,0.25)||0, m=d3.median(sorted)||0, q3=d3.quantile(sorted,0.75)||0, min=d3.min(sorted)||0, max=d3.max(sorted)||0\r
    const boxY=height-18\r
    g.append('line').attr('x1',x(min)).attr('x2',x(q1)).attr('y1',boxY).attr('y2',boxY).attr('stroke',colors[0]).attr('stroke-width',1.2)\r
    g.append('line').attr('x1',x(q3)).attr('x2',x(max)).attr('y1',boxY).attr('y2',boxY).attr('stroke',colors[0]).attr('stroke-width',1.2)\r
    g.append('rect').attr('x',x(q1)).attr('y',boxY-6).attr('width',x(q3)-x(q1)).attr('height',12).attr('fill',colors[0]).attr('fill-opacity',0.22).attr('stroke',colors[0])\r
    g.append('line').attr('x1',x(m)).attr('x2',x(m)).attr('y1',boxY-6).attr('y2',boxY+6).attr('stroke',colors[0]).attr('stroke-width',1.6)\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Histogram with Box')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};