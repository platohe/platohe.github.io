var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'dot-strip-multi',\r
  title: 'Dot Strip Multi',\r
  desc: 'Dot Strip Multi — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'DotStripMulti',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","dot-strip-multi"],\r
}\r
\r
export default function DotStripMulti({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const groups=['North','South','East'], cats=['A','B','C']\r
    const gen = () => [{"group":"North","cat":"A","v":32},{"group":"North","cat":"B","v":27},{"group":"North","cat":"C","v":42},{"group":"South","cat":"A","v":35},{"group":"South","cat":"B","v":16},{"group":"South","cat":"C","v":30},{"group":"East","cat":"A","v":20},{"group":"East","cat":"B","v":33},{"group":"East","cat":"C","v":42}]\r
    const data=Array.isArray(customData)&&customData.length&&customData[0].group?customData:gen()\r
    const margin={top:28,right:14,bottom:24,left:46}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const x=d3.scaleLinear().domain([0,60]).range([0,width])\r
    const y0=d3.scaleBand().domain(groups).range([0,height]).padding(0.28)\r
    const y1=d3.scaleBand().domain(cats).range([0,y0.bandwidth()]).padding(0.22)\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    g.append('g').call(d3.axisLeft(y0).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text)').attr('font-size','8px').attr('font-weight',600))\r
    g.append('g').attr('transform',\`translate(0,\${height})\`).call(d3.axisBottom(x).ticks(4).tickSize(-height).tickPadding(6))\r
      .call(g2=>g2.select('.domain').remove()).call(g2=>g2.selectAll('.tick line').attr('stroke','var(--border)').attr('stroke-dasharray','2,3'))\r
      .call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    const col=d3.scaleOrdinal(colors).domain(cats)\r
    data.forEach(d=>{\r
      const cy=(y0(d.group)??0)+(y1(d.cat)??0)+y1.bandwidth()/2\r
      g.append('circle').attr('cx',x(d.v)).attr('cy',cy).attr('r',3.4).attr('fill',col(d.cat)).attr('stroke','var(--bg)').attr('stroke-width',0.6)\r
    })\r
    cats.forEach((c,i)=>{ g.append('rect').attr('x',width-42).attr('y',6+i*12).attr('width',8).attr('height',8).attr('fill',col(c)).attr('rx',2); g.append('text').attr('x',width-32).attr('y',13+i*12).attr('fill','var(--text-secondary)').attr('font-size','7px').text(c) })\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Dot Strip Multi')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};