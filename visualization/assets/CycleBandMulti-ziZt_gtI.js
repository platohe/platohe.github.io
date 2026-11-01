var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
export const meta = {\r
  id: 'cycle-band-multi',\r
  title: 'Cycle Band Multi',\r
  desc: 'Cycle Band Multi — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'CycleBandMulti',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","cycle-band-multi"],\r
}\r
\r
export default function CycleBandMulti({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']\r
    const gen = () => [{"month":"Jan","low":18.809,"high":37.379},{"month":"Feb","low":20.82,"high":40.037},{"month":"Mar","low":15.399,"high":38.319},{"month":"Apr","low":16.186,"high":39.497},{"month":"May","low":20.924,"high":37.668},{"month":"Jun","low":15.999,"high":42.585},{"month":"Jul","low":19.966,"high":35.684},{"month":"Aug","low":15.578,"high":38.009},{"month":"Sep","low":19.493,"high":39.327},{"month":"Oct","low":14.031,"high":37.649},{"month":"Nov","low":20.699,"high":32.615},{"month":"Dec","low":18.739,"high":32.378}]\r
    const data=Array.isArray(customData)&&customData.length&&customData[0].month?customData:gen()\r
    const margin={top:28,right:14,bottom:24,left:36}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const x=d3.scaleBand().domain(months).range([0,width]).padding(0.14)\r
    const y=d3.scaleLinear().domain([0,60]).range([height,0])\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    g.append('g').call(d3.axisLeft(y).ticks(5).tickSize(-width).tickPadding(6))\r
      .call(g2=>g2.select('.domain').remove()).call(g2=>g2.selectAll('.tick line').attr('stroke','var(--border)').attr('stroke-dasharray','2,3'))\r
      .call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    g.append('g').attr('transform',\`translate(0,\${height})\`).call(d3.axisBottom(x).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    data.forEach(d=>{\r
      g.append('rect').attr('x',x(d.month)??0).attr('y',y(d.high)).attr('width',x.bandwidth()).attr('height',y(d.low)-y(d.high)).attr('fill','#93c5fd').attr('stroke','#3b82f6').attr('rx',2)\r
      g.append('line').attr('x1',(x(d.month)??0)+x.bandwidth()/2).attr('x2',(x(d.month)??0)+x.bandwidth()/2).attr('y1',y(d.low)-4).attr('y2',y(d.high)+4).attr('stroke','#1e40af').attr('stroke-width',0.8)\r
    })\r
    g.append('line').attr('x1',0).attr('x2',width).attr('y1',y(22)).attr('y2',y(22)).attr('stroke','#ef4444').attr('stroke-dasharray','3,2').attr('opacity',0.72)\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Cycle Band Multi')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};