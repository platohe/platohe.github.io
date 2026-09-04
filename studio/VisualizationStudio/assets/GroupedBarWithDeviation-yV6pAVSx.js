var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'grouped-bar-with-deviation',\r
  title: 'Grouped Bar With Deviation',\r
  desc: 'Grouped Bar With Deviation — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'GroupedBarWithDeviation',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["bars","grouped-bar-with-deviation"],\r
}\r
\r
export default function GroupedBarWithDeviation({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const groups=['North','South'], cats=['2022','2023','2024']\r
    const gen = () => [{"group":"North","cat":"2022","v":27},{"group":"North","cat":"2023","v":23},{"group":"North","cat":"2024","v":32},{"group":"South","cat":"2022","v":28},{"group":"South","cat":"2023","v":17},{"group":"South","cat":"2024","v":25}]\r
    const data=Array.isArray(customData)&&customData.length&&customData[0].group?customData:gen()\r
    const avg=d3.mean(data,d=>d.v)||20\r
    const margin={top:28,right:14,bottom:24,left:36}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const x0=d3.scaleBand().domain(groups).range([0,width]).padding(0.22)\r
    const x1=d3.scaleBand().domain(cats).range([0,x0.bandwidth()]).padding(0.12)\r
    const y=d3.scaleLinear().domain([0,d3.max(data,d=>d.v)||40]).nice().range([height,0])\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    g.append('g').call(d3.axisLeft(y).ticks(4).tickSize(-width).tickPadding(6))\r
      .call(g2=>g2.select('.domain').remove()).call(g2=>g2.selectAll('.tick line').attr('stroke','var(--border)').attr('stroke-dasharray','2,3'))\r
      .call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    g.append('g').attr('transform',\`translate(0,\${height})\`).call(d3.axisBottom(x0).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text)').attr('font-size','8px').attr('font-weight',600))\r
    const col=d3.scaleOrdinal(colors).domain(cats)\r
    data.forEach(d=>{\r
      const x=(x0(d.group)??0)+(x1(d.cat)??0)\r
      const dev=d.v-avg\r
      g.append('rect').attr('x',x).attr('y',y(d.v)).attr('width',x1.bandwidth()).attr('height',height-y(d.v)).attr('fill',dev>=0?'#22c55e':'#ef4444').attr('fill-opacity',dev>=0?0.72:0.42).attr('rx',2).attr('stroke','var(--bg)')\r
    })\r
    g.append('line').attr('x1',0).attr('x2',width).attr('y1',y(avg)).attr('y2',y(avg)).attr('stroke','#0f172a').attr('stroke-width',1).attr('stroke-dasharray','3,2')\r
    g.append('text').attr('x',width-2).attr('y',y(avg)-4).attr('text-anchor','end').attr('fill','#0f172a').attr('font-size','7px').text(\`avg \${avg.toFixed(1)}\`)\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Grouped Bar with Deviation')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};