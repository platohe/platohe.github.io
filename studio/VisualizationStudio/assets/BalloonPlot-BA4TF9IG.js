var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
export const meta = {\r
  id: 'balloon-plot',\r
  title: 'Balloon Plot',\r
  desc: 'Balloon Plot — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'BalloonPlot',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","balloon-plot"],\r
}\r
\r
export default function BalloonPlot({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const rows=['R1','R2','R3','R4','R5'], cols=['C1','C2','C3','C4','C5']\r
    const DEFAULT=rows.flatMap(r=> cols.map(c=>({row:r,col:c, v: Math.floor(Math.random()*80)+5})))\r
    const data=Array.isArray(customData)&&customData.length&&customData[0].v!=null?customData:DEFAULT\r
    const margin={top:28,right:46,bottom:24,left:40}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const x=d3.scaleBand().domain(cols).range([0,width]).padding(0.12)\r
    const y=d3.scaleBand().domain(rows).range([0,height]).padding(0.12)\r
    const r=d3.scaleSqrt().domain([0,90]).range([0, Math.min(x.bandwidth(), y.bandwidth())/2 -1])\r
    const color=d3.scaleSequential(d3.interpolateYlOrRd).domain([0,90])\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    g.selectAll('rect.bg').data(rows.flatMap(r=> cols.map(c=>({row:r,col:c})))).join('rect')\r
      .attr('x',d=>x(d.col)??0).attr('y',d=>y(d.row)??0).attr('width',x.bandwidth()).attr('height',y.bandwidth()).attr('fill','var(--bg)').attr('stroke','var(--border)').attr('rx',4)\r
    data.forEach(d=>{\r
      g.append('circle').attr('cx',(x(d.col)??0)+x.bandwidth()/2).attr('cy',(y(d.row)??0)+y.bandwidth()/2).attr('r',r(d.v)).attr('fill',color(d.v)).attr('stroke','var(--bg)').attr('stroke-width',0.7)\r
    })\r
    g.append('g').attr('transform',\`translate(0,\${height})\`).call(d3.axisBottom(x).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    g.append('g').call(d3.axisLeft(y).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Balloon Plot')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};