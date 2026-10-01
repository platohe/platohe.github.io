var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'ranked-bar-with-target',\r
  title: 'Ranked Bar With Target',\r
  desc: 'Ranked Bar With Target — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'RankedBarWithTarget',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["bars","ranked-bar-with-target"],\r
}\r
\r
export default function RankedBarWithTarget({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT=[{cat:'Team A',v:68,target:72},{cat:'Team B',v:54,target:60},{cat:'Team C',v:42,target:45},{cat:'Team D',v:78,target:70},{cat:'Team E',v:36,target:40},{cat:'Team F',v:62,target:65}]\r
    const raw=Array.isArray(customData)&&customData.length&&customData[0].cat?customData:DEFAULT\r
    const data=[...raw].sort((a,b)=>d3.descending(a.v,b.v))\r
    const margin={top:28,right:14,bottom:24,left:66}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const x=d3.scaleLinear().domain([0,d3.max(data,d=>Math.max(d.v,d.target))||80]).nice().range([0,width])\r
    const y=d3.scaleBand().domain(data.map(d=>d.cat)).range([0,height]).padding(0.22)\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    g.append('g').call(d3.axisLeft(y).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text)').attr('font-size','7px').attr('font-weight',600))\r
    g.append('g').attr('transform',\`translate(0,\${height})\`).call(d3.axisBottom(x).ticks(4).tickSize(-height).tickPadding(6))\r
      .call(g2=>g2.select('.domain').remove()).call(g2=>g2.selectAll('.tick line').attr('stroke','var(--border)').attr('stroke-dasharray','2,3'))\r
      .call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    data.forEach((d,i)=>{\r
      g.append('rect').attr('x',0).attr('y',y(d.cat)??0).attr('width',x(d.v)).attr('height',y.bandwidth()).attr('fill',colors[i%colors.length]).attr('fill-opacity',0.82).attr('rx',3)\r
      g.append('line').attr('x1',x(d.target)).attr('x2',x(d.target)).attr('y1',y(d.cat)??0).attr('y2',(y(d.cat)??0)+y.bandwidth()).attr('stroke','#0f172a').attr('stroke-width',1.6).attr('stroke-dasharray','3,2')\r
      g.append('circle').attr('cx',x(d.target)).attr('cy',(y(d.cat)??0)+y.bandwidth()/2).attr('r',3).attr('fill','#0f172a').attr('stroke','var(--bg)')\r
      g.append('text').attr('x',x(d.v)+4).attr('y',(y(d.cat)??0)+y.bandwidth()/2+3).attr('fill','var(--text-secondary)').attr('font-size','6px').text(d.v)\r
    })\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Ranked Bar with Target')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};