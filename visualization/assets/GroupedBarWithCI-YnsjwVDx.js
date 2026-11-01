var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'grouped-bar-with-ci',\r
  title: 'Grouped Bar With C I',\r
  desc: 'Grouped Bar With C I — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'GroupedBarWithCI',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["bars","grouped-bar-with-c-i"],\r
}\r
\r
export default function GroupedBarWithCI({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const groups=['North','South'], cats=['2022','2023','2024']\r
    const gen = () => [{"group":"North","cat":"2022","v":27,"lo":2.897,"hi":3.705},{"group":"North","cat":"2023","v":28,"lo":2.35,"hi":3.053},{"group":"North","cat":"2024","v":20,"lo":3.249,"hi":3.731},{"group":"South","cat":"2022","v":24,"lo":2.5,"hi":3.764},{"group":"South","cat":"2023","v":30,"lo":2.614,"hi":2.395},{"group":"South","cat":"2024","v":25,"lo":3.373,"hi":3.221}]\r
    const data=Array.isArray(customData)&&customData.length&&customData[0].group?customData:gen()\r
    const margin={top:28,right:14,bottom:24,left:36}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const x0=d3.scaleBand().domain(groups).range([0,width]).padding(0.22)\r
    const x1=d3.scaleBand().domain(cats).range([0,x0.bandwidth()]).padding(0.12)\r
    const y=d3.scaleLinear().domain([0,d3.max(data,d=>d.v+d.hi)||40]).nice().range([height,0])\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    g.append('g').call(d3.axisLeft(y).ticks(4).tickSize(-width).tickPadding(6))\r
      .call(g2=>g2.select('.domain').remove()).call(g2=>g2.selectAll('.tick line').attr('stroke','var(--border)').attr('stroke-dasharray','2,3'))\r
      .call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    g.append('g').attr('transform',\`translate(0,\${height})\`).call(d3.axisBottom(x0).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text)').attr('font-size','8px').attr('font-weight',600))\r
    const col=d3.scaleOrdinal(colors).domain(cats)\r
    data.forEach(d=>{\r
      const x=(x0(d.group)??0)+(x1(d.cat)??0)\r
      g.append('rect').attr('x',x).attr('y',y(d.v)).attr('width',x1.bandwidth()).attr('height',height-y(d.v)).attr('fill',col(d.cat)).attr('rx',2).attr('stroke','var(--bg)')\r
      const cx=x+x1.bandwidth()/2\r
      g.append('line').attr('x1',cx).attr('x2',cx).attr('y1',y(d.v-d.lo)).attr('y2',y(d.v+d.hi)).attr('stroke','var(--text)').attr('stroke-width',1)\r
      g.append('line').attr('x1',cx-3).attr('x2',cx+3).attr('y1',y(d.v-d.lo)).attr('y2',y(d.v-d.lo)).attr('stroke','var(--text)').attr('stroke-width',1)\r
      g.append('line').attr('x1',cx-3).attr('x2',cx+3).attr('y1',y(d.v+d.hi)).attr('y2',y(d.v+d.hi)).attr('stroke','var(--text)').attr('stroke-width',1)\r
    })\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Grouped Bar with CI')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};