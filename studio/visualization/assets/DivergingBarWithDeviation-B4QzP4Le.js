var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
export const meta = {\r
  id: 'diverging-bar-with-deviation',\r
  title: 'Diverging Bar With Deviation',\r
  desc: 'Diverging Bar With Deviation — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'DivergingBarWithDeviation',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["bars","diverging-bar-with-deviation"],\r
}\r
\r
export default function DivergingBarWithDeviation({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT=[{cat:'A',v:-18},{cat:'B',v:22},{cat:'C',v:-9},{cat:'D',v:14},{cat:'E',v:-6}]\r
    const data=Array.isArray(customData)&&customData.length&&customData[0].cat?customData:DEFAULT\r
    const avg=d3.mean(data,d=>d.v)||0\r
    const margin={top:28,right:46,bottom:24,left:36}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const x=d3.scaleLinear().domain([d3.min(data,d=>d.v)*1.2, d3.max(data,d=>d.v)*1.2]).nice().range([0,width])\r
    const y=d3.scaleBand().domain(data.map(d=>d.cat)).range([0,height]).padding(0.32)\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    const zero=x(0)\r
    g.append('line').attr('x1',zero).attr('x2',zero).attr('y1',0).attr('y2',height).attr('stroke','var(--border)').attr('stroke-width',1.2)\r
    g.append('g').call(d3.axisLeft(y).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text)').attr('font-size','7px').attr('font-weight',600))\r
    data.forEach(d=>{\r
      const dev=d.v-avg\r
      const col=dev>=0?'#22c55e':'#ef4444'\r
      const x0=x(Math.min(0,d.v)), x1=x(Math.max(0,d.v))\r
      g.append('rect').attr('x',x0).attr('y',(y(d.cat)??0)+2).attr('width',Math.abs(x1-x0)).attr('height',y.bandwidth()-4).attr('fill',col).attr('fill-opacity',Math.abs(dev)>6?0.82:0.42).attr('rx',2)\r
      g.append('text').attr('x',d.v>=0? x1+4 : x0-4).attr('y',(y(d.cat)??0)+y.bandwidth()/2+3).attr('text-anchor',d.v>=0?'start':'end').attr('fill',col).attr('font-size','6px').text(\`\${dev>=0?'+':''}\${dev.toFixed(1)}\`)\r
    })\r
    g.append('line').attr('x1',x(avg)).attr('x2',x(avg)).attr('y1',0).attr('y2',height).attr('stroke','#0f172a').attr('stroke-width',1).attr('stroke-dasharray','3,2')\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Diverging Bar with Deviation')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};