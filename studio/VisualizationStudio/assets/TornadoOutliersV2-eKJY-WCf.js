var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
export const meta = {\r
  id: 'tornado-outliers-v2',\r
  title: 'Tornado Outliers V2',\r
  desc: 'Tornado Outliers V2 — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'TornadoOutliersV2',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","tornado-outliers-v2"],\r
}\r
\r
export default function TornadoOutliersV2({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT=[{cat:'Price',v:18},{cat:'Cost',v:-12},{cat:'Demand',v:9},{cat:'Rate',v:-6},{cat:'Shock',v:38}]\r
    const data=Array.isArray(customData)&&customData.length&&customData[0].cat?customData:DEFAULT\r
    const vals=data.map(d=>d.v)\r
    const q1=d3.quantile(vals,0.25)||0, q3=d3.quantile(vals,0.75)||0, iqr=q3-q1, lo=q1-1.5*iqr, hi=q3+1.5*iqr\r
    const sorted=[...data].sort((a,b)=> Math.abs(b.v)-Math.abs(a.v))\r
    const margin={top:28,right:46,bottom:14,left:46}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const y=d3.scaleBand().domain(sorted.map(d=>d.cat)).range([0,height]).padding(0.32)\r
    const x=d3.scaleLinear().domain([d3.min(sorted,d=>d.v)*1.1, d3.max(sorted,d=>d.v)*1.1]).nice().range([0,width])\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    const zero=x(0)\r
    g.append('line').attr('x1',zero).attr('x2',zero).attr('y1',0).attr('y2',height).attr('stroke','var(--border)').attr('stroke-width',1.2)\r
    g.append('g').call(d3.axisLeft(y).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text)').attr('font-size','7px').attr('font-weight',600))\r
    sorted.forEach(d=>{\r
      const isOut=d.v<lo||d.v>hi\r
      const x0=x(Math.min(0,d.v)), x1=x(Math.max(0,d.v))\r
      g.append('rect').attr('x',x0).attr('y',(y(d.cat)??0)+2).attr('width',Math.abs(x1-x0)).attr('height',y.bandwidth()-4).attr('fill',isOut?'#ef4444':(d.v>=0?'#22c55e':'#ef4444')).attr('fill-opacity',isOut?0.92:0.62).attr('rx',2)\r
      if(isOut) g.append('text').attr('x',d.v>=0? x1+4 : x0-4).attr('y',(y(d.cat)??0)+y.bandwidth()/2+3).attr('text-anchor',d.v>=0?'start':'end').attr('fill','#ef4444').attr('font-size','6px').text('outlier')\r
    })\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Tornado Outliers V2')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};