var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'stacked-bar-normalized',\r
  title: 'Stacked Bar Normalized',\r
  desc: 'Stacked Bar Normalized — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'StackedBarNormalized',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["bars","stacked-bar-normalized"],\r
}\r
\r
export default function StackedBarNormalized({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const cats=['A','B','C','D','E'], segs=['X','Y','Z']\r
    const gen = () => [{"cat":"A","X":0.323,"Y":0.273,"Z":0.404},{"cat":"B","X":0.416,"Y":0.224,"Z":0.36},{"cat":"C","X":0.227,"Y":0.346,"Z":0.427},{"cat":"D","X":0.311,"Y":0.232,"Z":0.457},{"cat":"E","X":0.468,"Y":0.289,"Z":0.244}]\r
    const data=Array.isArray(customData)&&customData.length&&customData[0].cat?customData:gen()\r
    const margin={top:28,right:46,bottom:24,left:36}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const x=d3.scaleBand().domain(cats).range([0,width]).padding(0.18)\r
    const y=d3.scaleLinear().domain([0,1]).range([height,0])\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    g.append('g').call(d3.axisLeft(y).ticks(4).tickFormat(d3.format('.0%')).tickSize(-width).tickPadding(6))\r
      .call(g2=>g2.select('.domain').remove()).call(g2=>g2.selectAll('.tick line').attr('stroke','var(--border)').attr('stroke-dasharray','2,3'))\r
      .call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    g.append('g').attr('transform',\`translate(0,\${height})\`).call(d3.axisBottom(x).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text)').attr('font-size','8px').attr('font-weight',600))\r
    const col=d3.scaleOrdinal(colors).domain(segs)\r
    const stack=d3.stack().keys(segs)\r
    const series=stack(data)\r
    series.forEach(s=>{\r
      g.selectAll(\`rect.\${s.key}\`).data(s).join('rect')\r
        .attr('x',d=>x(d.data.cat)??0).attr('y',d=>y(d[1])).attr('width',x.bandwidth()).attr('height',d=>y(d[0])-y(d[1]))\r
        .attr('fill',col(s.key)).attr('stroke','var(--bg)').attr('rx',1)\r
    })\r
    segs.forEach((s,i)=>{ g.append('rect').attr('x',width+8).attr('y',10+i*12).attr('width',8).attr('height',8).attr('fill',col(s)).attr('rx',2); g.append('text').attr('x',width+18).attr('y',17+i*12).attr('fill','var(--text-secondary)').attr('font-size','7px').text(s) })\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Normalized Stacked Bar (100%)')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};