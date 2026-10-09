var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'histogram-with-outliers',\r
  title: 'Histogram With Outliers',\r
  desc: 'Histogram With Outliers — a analysis chart visualization',\r
  category: 'Analysis',\r
  component: 'HistogramWithOutliers',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["analysis","histogram-with-outliers"],\r
}\r
\r
export default function HistogramWithOutliers({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const vals=Array.isArray(customData)&&customData.length&&typeof customData[0]==='number'?customData:Array.from({length:72},()=> Math.max(6,Math.min(94, d3.randomNormal(52,16)())))\r
    const q1=d3.quantile(vals,0.25)||0, q3=d3.quantile(vals,0.75)||0, iqr=q3-q1, lo=q1-1.5*iqr, hi=q3+1.5*iqr\r
    const margin={top:28,right:14,bottom:24,left:36}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const x=d3.scaleLinear().domain([0,100]).range([0,width])\r
    const bins=d3.bin().domain([0,100]).thresholds(16)(vals)\r
    const y=d3.scaleLinear().domain([0,d3.max(bins,d=>d.length)||12]).range([height,0])\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    g.selectAll('rect').data(bins).join('rect')\r
      .attr('x',d=>x(d.x0??0)).attr('y',d=>y(d.length)).attr('width',d=>Math.max(1, x(d.x1??0)-x(d.x0??0)-1)).attr('height',d=>height - y(d.length))\r
      .attr('fill',d=> d.x0<lo||d.x1>hi ? '#ef4444' : colors[0]).attr('fill-opacity',d=> d.x0<lo||d.x1>hi ?0.82:0.62).attr('stroke',d=> d.x0<lo||d.x1>hi ?'#ef4444':colors[0]).attr('rx',2)\r
    g.append('g').call(d3.axisLeft(y).ticks(4).tickSize(-width).tickPadding(6))\r
      .call(g2=>g2.select('.domain').remove()).call(g2=>g2.selectAll('.tick line').attr('stroke','var(--border)').attr('stroke-dasharray','2,3'))\r
      .call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    g.append('g').attr('transform',\`translate(0,\${height})\`).call(d3.axisBottom(x).ticks(6).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    vals.filter(v=>v<lo||v>hi).forEach(v=> g.append('circle').attr('cx',x(v)).attr('cy',y(1)-4).attr('r',2).attr('fill','#ef4444').attr('stroke','var(--bg)'))\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Histogram with Outliers')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};