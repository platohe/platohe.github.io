var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
export const meta = {\r
  id: 'diverging-bar-with-ci',\r
  title: 'Diverging Bar With C I',\r
  desc: 'Diverging Bar With C I — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'DivergingBarWithCI',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["bars","diverging-bar-with-c-i"],\r
}\r
\r
export default function DivergingBarWithCI({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT=[{cat:'A',v:-18,lo:3,hi:4},{cat:'B',v:22,lo:4,hi:5},{cat:'C',v:-9,lo:2,hi:3},{cat:'D',v:14,lo:3,hi:3},{cat:'E',v:-6,lo:2,hi:2}]\r
    const data=Array.isArray(customData)&&customData.length&&customData[0].cat?customData:DEFAULT\r
    const margin={top:28,right:46,bottom:24,left:36}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const x=d3.scaleLinear().domain([d3.min(data,d=>d.v-d.lo)*1.1, d3.max(data,d=>d.v+d.hi)*1.1]).nice().range([0,width])\r
    const y=d3.scaleBand().domain(data.map(d=>d.cat)).range([0,height]).padding(0.32)\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    const zero=x(0)\r
    g.append('line').attr('x1',zero).attr('x2',zero).attr('y1',0).attr('y2',height).attr('stroke','var(--border)').attr('stroke-width',1.2)\r
    g.append('g').call(d3.axisLeft(y).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text)').attr('font-size','7px').attr('font-weight',600))\r
    g.append('g').attr('transform',\`translate(0,\${height})\`).call(d3.axisBottom(x).ticks(5).tickSize(-height).tickPadding(6))\r
      .call(g2=>g2.select('.domain').remove()).call(g2=>g2.selectAll('.tick line').attr('stroke','var(--border)').attr('stroke-dasharray','2,3'))\r
      .call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    data.forEach(d=>{\r
      const col=d.v>=0?'#22c55e':'#ef4444'\r
      const x0=x(Math.min(0,d.v)), x1=x(Math.max(0,d.v))\r
      g.append('rect').attr('x',x0).attr('y',(y(d.cat)??0)+2).attr('width',Math.abs(x1-x0)).attr('height',y.bandwidth()-4).attr('fill',col).attr('rx',2).attr('stroke','var(--bg)')\r
      // CI\r
      const cxL=x(d.v-d.lo), cxR=x(d.v+d.hi), cy=(y(d.cat)??0)+y.bandwidth()/2\r
      g.append('line').attr('x1',cxL).attr('x2',cxR).attr('y1',cy).attr('y2',cy).attr('stroke','var(--text)').attr('stroke-width',1)\r
      g.append('line').attr('x1',cxL).attr('x2',cxL).attr('y1',cy-4).attr('y2',cy+4).attr('stroke','var(--text)').attr('stroke-width',1)\r
      g.append('line').attr('x1',cxR).attr('x2',cxR).attr('y1',cy-4).attr('y2',cy+4).attr('stroke','var(--text)').attr('stroke-width',1)\r
    })\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Diverging Bar with CI')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};