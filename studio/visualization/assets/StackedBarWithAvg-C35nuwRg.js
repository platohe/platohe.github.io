var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'stacked-bar-with-avg',\r
  title: 'Stacked Bar With Avg',\r
  desc: 'Stacked Bar With Avg — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'StackedBarWithAvg',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["bars","stacked-bar-with-avg"],\r
}\r
\r
export default function StackedBarWithAvg({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const cats=['Mon','Tue','Wed','Thu','Fri'], segs=['Prod','Test','Deploy']\r
    const gen = () => [{"cat":"Mon","Prod":18,"Test":13,"Deploy":15,"total":46},{"cat":"Tue","Prod":20,"Test":8,"Deploy":11,"total":39},{"cat":"Wed","Prod":12,"Test":15,"Deploy":16,"total":43},{"cat":"Thu","Prod":16,"Test":9,"Deploy":16,"total":41},{"cat":"Fri","Prod":21,"Test":10,"Deploy":6,"total":37}]\r
    const data=Array.isArray(customData)&&customData.length&&customData[0].cat?customData:gen()\r
    const margin={top:28,right:14,bottom:24,left:36}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const x=d3.scaleBand().domain(cats).range([0,width]).padding(0.18)\r
    const y=d3.scaleLinear().domain([0,d3.max(data,d=>d.total)||50]).nice().range([height,0])\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    g.append('g').call(d3.axisLeft(y).ticks(4).tickSize(-width).tickPadding(6))\r
      .call(g2=>g2.select('.domain').remove()).call(g2=>g2.selectAll('.tick line').attr('stroke','var(--border)').attr('stroke-dasharray','2,3'))\r
      .call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    g.append('g').attr('transform',\`translate(0,\${height})\`).call(d3.axisBottom(x).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text)').attr('font-size','8px').attr('font-weight',600))\r
    const stack=d3.stack().keys(segs)\r
    const series=stack(data)\r
    const col=d3.scaleOrdinal(colors).domain(segs)\r
    series.forEach(s=> g.selectAll(\`rect.\${s.key}\`).data(s).join('rect')\r
      .attr('x',d=>x(d.data.cat)??0).attr('y',d=>y(d[1])).attr('width',x.bandwidth()).attr('height',d=>y(d[0])-y(d[1]))\r
      .attr('fill',col(s.key)).attr('stroke','var(--bg)').attr('rx',2))\r
    const avg=d3.mean(data,d=>d.total)||0\r
    g.append('line').attr('x1',0).attr('x2',width).attr('y1',y(avg)).attr('y2',y(avg)).attr('stroke','#0f172a').attr('stroke-width',1.4).attr('stroke-dasharray','4,3')\r
    g.append('text').attr('x',width-2).attr('y',y(avg)-4).attr('text-anchor','end').attr('fill','#0f172a').attr('font-size','7px').attr('font-weight',700).text(\`Avg \${avg.toFixed(1)}\`)\r
    segs.forEach((s,i)=>{ g.append('rect').attr('x',width-46).attr('y',6+i*12).attr('width',8).attr('height',8).attr('fill',col(s)).attr('rx',2); g.append('text').attr('x',width-36).attr('y',13+i*12).attr('fill','var(--text-secondary)').attr('font-size','7px').text(s) })\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Stacked Bar with Average')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};