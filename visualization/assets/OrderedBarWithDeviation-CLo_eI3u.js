var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'ordered-bar-with-deviation',\r
  title: 'Ordered Bar With Deviation',\r
  desc: 'Ordered Bar With Deviation — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'OrderedBarWithDeviation',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["bars","ordered-bar-with-deviation"],\r
}\r
\r
export default function OrderedBarWithDeviation({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT=[{cat:'Alpha',v:42},{cat:'Beta',v:68},{cat:'Gamma',v:34},{cat:'Delta',v:55},{cat:'Epsilon',v:22}]\r
    const raw=Array.isArray(customData)&&customData.length&&customData[0].cat?customData:DEFAULT\r
    const avg=d3.mean(raw,d=>d.v)||50\r
    const data=[...raw].sort((a,b)=>d3.descending(a.v,b.v))\r
    const margin={top:28,right:14,bottom:24,left:36}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const x=d3.scaleBand().domain(data.map(d=>d.cat)).range([0,width]).padding(0.18)\r
    const y=d3.scaleLinear().domain([0,d3.max(data,d=>d.v)||70]).nice().range([height,0])\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    g.append('g').call(d3.axisLeft(y).ticks(4).tickSize(-width).tickPadding(6))\r
      .call(g2=>g2.select('.domain').remove()).call(g2=>g2.selectAll('.tick line').attr('stroke','var(--border)').attr('stroke-dasharray','2,3'))\r
      .call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    g.append('g').attr('transform',\`translate(0,\${height})\`).call(d3.axisBottom(x).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text)').attr('font-size','7px').attr('font-weight',600))\r
    data.forEach((d,i)=>{\r
      const dev=d.v-avg\r
      g.append('rect').attr('x',x(d.cat)??0).attr('y',y(d.v)).attr('width',x.bandwidth()).attr('height',height-y(d.v)).attr('fill',dev>=0?'#22c55e':'#ef4444').attr('fill-opacity',dev>=0?0.72:0.42).attr('rx',3)\r
      g.append('text').attr('x',(x(d.cat)??0)+x.bandwidth()/2).attr('y',y(d.v)-4).attr('text-anchor','middle').attr('fill','var(--text-secondary)').attr('font-size','6px').text(\`\${dev>=0?'+':''}\${dev.toFixed(0)}\`)\r
    })\r
    g.append('line').attr('x1',0).attr('x2',width).attr('y1',y(avg)).attr('y2',y(avg)).attr('stroke','#0f172a').attr('stroke-width',1.2).attr('stroke-dasharray','3,2')\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Ordered Bar with Deviation')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};