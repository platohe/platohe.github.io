var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'dot-plot-multi',\r
  title: 'Dot Plot Multi',\r
  desc: 'Dot Plot Multi — a dots chart visualization',\r
  category: 'Dots',\r
  component: 'DotPlotMulti',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["dots","dot-plot-multi"],\r
}\r
\r
export default function DotPlotMulti({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const groups=['Alpha','Beta','Gamma'], cats=['X','Y','Z','W']\r
    const gen = () => [{"group":"Alpha","cat":"X","v":34},{"group":"Alpha","cat":"Y","v":27},{"group":"Alpha","cat":"Z","v":44},{"group":"Alpha","cat":"W","v":36},{"group":"Beta","cat":"X","v":16},{"group":"Beta","cat":"Y","v":31},{"group":"Beta","cat":"Z","v":20},{"group":"Beta","cat":"W","v":34},{"group":"Gamma","cat":"X","v":44},{"group":"Gamma","cat":"Y","v":28},{"group":"Gamma","cat":"Z","v":19},{"group":"Gamma","cat":"W","v":45}]\r
    const data=Array.isArray(customData)&&customData.length&&customData[0].group?customData:gen()\r
    const margin={top:28,right:14,bottom:24,left:46}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const x=d3.scaleLinear().domain([0,60]).range([0,width])\r
    const y0=d3.scaleBand().domain(groups).range([0,height]).padding(0.28)\r
    const y1=d3.scaleBand().domain(cats).range([0,y0.bandwidth()]).padding(0.18)\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    g.append('g').call(d3.axisLeft(y0).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text)').attr('font-size','8px').attr('font-weight',600))\r
    g.append('g').attr('transform',\`translate(0,\${height})\`).call(d3.axisBottom(x).ticks(4).tickSize(-height).tickPadding(6))\r
      .call(g2=>g2.select('.domain').remove()).call(g2=>g2.selectAll('.tick line').attr('stroke','var(--border)').attr('stroke-dasharray','2,3'))\r
      .call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    const col=d3.scaleOrdinal(colors).domain(cats)\r
    data.forEach(d=>{\r
      const cy=(y0(d.group)??0)+(y1(d.cat)??0)+y1.bandwidth()/2\r
      g.append('line').attr('x1',0).attr('x2',x(d.v)).attr('y1',cy).attr('y2',cy).attr('stroke',col(d.cat)).attr('stroke-width',1).attr('opacity',0.42)\r
      g.append('circle').attr('cx',x(d.v)).attr('cy',cy).attr('r',4).attr('fill',col(d.cat)).attr('stroke','var(--bg)')\r
    })\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Dot Plot Multi-Group')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};