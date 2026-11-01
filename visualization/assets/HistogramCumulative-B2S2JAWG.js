var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'histogram-cumulative',\r
  title: 'Histogram Cumulative',\r
  desc: 'Histogram Cumulative — a analysis chart visualization',\r
  category: 'Analysis',\r
  component: 'HistogramCumulative',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["analysis","histogram-cumulative"],\r
}\r
\r
export default function HistogramCumulative({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const vals=Array.isArray(customData)&&customData.length&&typeof customData[0]==='number'?customData:Array.from({length:72},()=> Math.max(6,Math.min(94, d3.randomNormal(52,16)())))\r
    const margin={top:28,right:46,bottom:24,left:36}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const x=d3.scaleLinear().domain([0,100]).range([0,width])\r
    const bins=d3.bin().domain([0,100]).thresholds(16)(vals)\r
    const y=d3.scaleLinear().domain([0,d3.max(bins,d=>d.length)||12]).range([height-38,0])\r
    const y2=d3.scaleLinear().domain([0,1]).range([height-38,0])\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    g.selectAll('rect').data(bins).join('rect')\r
      .attr('x',d=>x(d.x0??0)).attr('y',d=>y(d.length)).attr('width',d=>Math.max(1, x(d.x1??0)-x(d.x0??0)-1)).attr('height',d=>height-38 - y(d.length))\r
      .attr('fill',colors[0]).attr('fill-opacity',0.62).attr('stroke',colors[0]).attr('rx',2)\r
    g.append('g').call(d3.axisLeft(y).ticks(4).tickSize(-width).tickPadding(6))\r
      .call(g2=>g2.select('.domain').remove()).call(g2=>g2.selectAll('.tick line').attr('stroke','var(--border)').attr('stroke-dasharray','2,3'))\r
      .call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    g.append('g').attr('transform',\`translate(0,\${height-38})\`).call(d3.axisBottom(x).ticks(6).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    // cumulative line on secondary axis\r
    const sorted=[...vals].sort(d3.ascending)\r
    const cum=sorted.map((v,i)=>({x:v, y:(i+1)/sorted.length}))\r
    const line=d3.line().x(d=>x(d.x)).y(d=>y2(d.y)*0.72).curve(d3.curveStepAfter)\r
    // actually overlay cumulative on same y but scaled\r
    const yC=d3.scaleLinear().domain([0,1]).range([height-38,0])\r
    g.append('path').datum(cum).attr('d',d3.line().x(d=>x(d.x)).y(d=>yC(d.y)).curve(d3.curveStepAfter)).attr('fill','none').attr('stroke','#ef4444').attr('stroke-width',1.6)\r
    g.append('g').attr('transform',\`translate(\${width},0)\`).call(d3.axisRight(yC).ticks(4).tickFormat(d3.format('.0%')).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','#ef4444').attr('font-size','7px'))\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Histogram Cumulative')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};