var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
export const meta = {\r
  id: 'tornado-with-deviation',\r
  title: 'Tornado With Deviation',\r
  desc: 'Tornado With Deviation — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'TornadoWithDeviation',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","tornado-with-deviation"],\r
}\r
\r
export default function TornadoWithDeviation({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT=[{cat:'Price',v:18,dev:4},{cat:'Cost',v:-12,dev:-3},{cat:'Demand',v:9,dev:2},{cat:'Rate',v:-6,dev:-1}]\r
    const data=Array.isArray(customData)&&customData.length&&customData[0].cat?customData:DEFAULT\r
    const sorted=[...data].sort((a,b)=> Math.abs(b.v)-Math.abs(a.v))\r
    const margin={top:28,right:46,bottom:14,left:46}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const y=d3.scaleBand().domain(sorted.map(d=>d.cat)).range([0,height]).padding(0.32)\r
    const x=d3.scaleLinear().domain([d3.min(sorted,d=>d.v)-4, d3.max(sorted,d=>d.v)+4]).nice().range([0,width])\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    const zero=x(0)\r
    g.append('line').attr('x1',zero).attr('x2',zero).attr('y1',0).attr('y2',height).attr('stroke','var(--border)').attr('stroke-width',1.2)\r
    g.append('g').call(d3.axisLeft(y).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text)').attr('font-size','7px').attr('font-weight',600))\r
    sorted.forEach(d=>{\r
      const col=d.dev>=0?'#22c55e':'#ef4444'\r
      const x0=x(Math.min(0,d.v)), x1=x(Math.max(0,d.v))\r
      g.append('rect').attr('x',x0).attr('y',(y(d.cat)??0)+2).attr('width',Math.abs(x1-x0)).attr('height',y.bandwidth()-4).attr('fill',col).attr('fill-opacity',Math.abs(d.dev)>2?0.82:0.42).attr('rx',2)\r
      g.append('text').attr('x',d.v>=0? x1+4 : x0-4).attr('y',(y(d.cat)??0)+y.bandwidth()/2+3).attr('text-anchor',d.v>=0?'start':'end').attr('fill',col).attr('font-size','6px').text(\`\${d.dev>=0?'+':''}\${d.dev}\`)\r
    })\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Tornado with Deviation')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};