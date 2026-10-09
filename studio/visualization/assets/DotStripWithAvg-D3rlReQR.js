var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'dot-strip-with-avg',\r
  title: 'Dot Strip With Avg',\r
  desc: 'Dot Strip With Avg — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'DotStripWithAvg',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","dot-strip-with-avg"],\r
}\r
\r
export default function DotStripWithAvg({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const groups=['North','South','East'], cats=['A','B']\r
    const gen = () => [{"group":"North","cat":"A","v":31},{"group":"North","cat":"B","v":26},{"group":"South","cat":"A","v":39},{"group":"South","cat":"B","v":33},{"group":"East","cat":"A","v":17},{"group":"East","cat":"B","v":28}]\r
    const data=Array.isArray(customData)&&customData.length&&customData[0].group?customData:gen()\r
    const margin={top:28,right:14,bottom:24,left:46}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const x=d3.scaleLinear().domain([0,60]).range([0,width])\r
    const y0=d3.scaleBand().domain(groups).range([0,height]).padding(0.32)\r
    const y1=d3.scaleBand().domain(cats).range([0,y0.bandwidth()]).padding(0.18)\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    g.append('g').call(d3.axisLeft(y0).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text)').attr('font-size','8px').attr('font-weight',600))\r
    g.append('g').attr('transform',\`translate(0,\${height})\`).call(d3.axisBottom(x).ticks(4).tickSize(-height).tickPadding(6))\r
      .call(g2=>g2.select('.domain').remove()).call(g2=>g2.selectAll('.tick line').attr('stroke','var(--border)').attr('stroke-dasharray','2,3'))\r
      .call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    const col=d3.scaleOrdinal(colors).domain(cats)\r
    // avg per group\r
    groups.forEach(gp=>{\r
      const vals=data.filter(d=>d.group===gp).map(d=>d.v)\r
      const avg=d3.mean(vals)||0\r
      g.append('line').attr('x1',x(avg)).attr('x2',x(avg)).attr('y1',y0(gp)??0).attr('y2',(y0(gp)??0)+y0.bandwidth()).attr('stroke','#0f172a').attr('stroke-width',1).attr('stroke-dasharray','2,2').attr('opacity',0.42)\r
    })\r
    data.forEach(d=>{\r
      const cy=(y0(d.group)??0)+(y1(d.cat)??0)+y1.bandwidth()/2\r
      g.append('circle').attr('cx',x(d.v)).attr('cy',cy).attr('r',3.4).attr('fill',col(d.cat)).attr('stroke','var(--bg)').attr('stroke-width',0.6)\r
    })\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Dot Strip with Avg')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};