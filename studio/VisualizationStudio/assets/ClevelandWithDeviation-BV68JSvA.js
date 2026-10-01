var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'cleveland-with-deviation',\r
  title: 'Cleveland With Deviation',\r
  desc: 'Cleveland With Deviation — a dots chart visualization',\r
  category: 'Dots',\r
  component: 'ClevelandWithDeviation',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["dots","cleveland-with-deviation"],\r
}\r
\r
export default function ClevelandWithDeviation({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const cats=['Q1','Q2','Q3','Q4','Q5']\r
    const gen = () => [{"cat":"Q1","v":34},{"cat":"Q2","v":29},{"cat":"Q3","v":42},{"cat":"Q4","v":36},{"cat":"Q5","v":19}]\r
    const data=Array.isArray(customData)&&customData.length&&customData[0].cat?customData:gen()\r
    const avg=d3.mean(data,d=>d.v)||20\r
    const margin={top:28,right:14,bottom:24,left:46}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const x=d3.scaleLinear().domain([0,d3.max(data,d=>d.v)||40]).nice().range([0,width])\r
    const y=d3.scaleBand().domain(cats).range([0,height]).padding(0.32)\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    g.append('g').call(d3.axisLeft(y).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text)').attr('font-size','8px').attr('font-weight',600))\r
    g.append('g').attr('transform',\`translate(0,\${height})\`).call(d3.axisBottom(x).ticks(4).tickSize(-height).tickPadding(6))\r
      .call(g2=>g2.select('.domain').remove()).call(g2=>g2.selectAll('.tick line').attr('stroke','var(--border)').attr('stroke-dasharray','2,3'))\r
      .call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    data.forEach(d=>{\r
      const dev=d.v-avg\r
      g.append('circle').attr('cx',x(d.v)).attr('cy',(y(d.cat)??0)+y.bandwidth()/2).attr('r',4).attr('fill',dev>=0?'#22c55e':'#ef4444').attr('fill-opacity',dev>=0?0.82:0.52).attr('stroke','var(--bg)')\r
      g.append('text').attr('x',x(d.v)+(dev>=0?6:-6)).attr('y',(y(d.cat)??0)+y.bandwidth()/2+3).attr('text-anchor',dev>=0?'start':'end').attr('fill',dev>=0?'#22c55e':'#ef4444').attr('font-size','6px').text(\`\${dev>=0?'+':''}\${dev.toFixed(1)}\`)\r
    })\r
    g.append('line').attr('x1',x(avg)).attr('x2',x(avg)).attr('y1',0).attr('y2',height).attr('stroke','#0f172a').attr('stroke-width',1.2).attr('stroke-dasharray','3,2')\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Cleveland with Deviation')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};