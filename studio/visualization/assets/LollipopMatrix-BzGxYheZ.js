var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'lollipop-matrix',\r
  title: 'Lollipop Matrix',\r
  desc: 'Lollipop Matrix — a historical chart visualization',\r
  category: 'Historical',\r
  component: 'LollipopMatrix',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["historical","lollipop-matrix"],\r
}\r
\r
export default function LollipopMatrix({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const rows=['North','South','East'], cols=['2022','2023','2024']\r
    const gen = () => [{"row":"North","col":"2022","v":33},{"row":"North","col":"2023","v":28},{"row":"North","col":"2024","v":42},{"row":"South","col":"2022","v":36},{"row":"South","col":"2023","v":18},{"row":"South","col":"2024","v":30},{"row":"East","col":"2022","v":21},{"row":"East","col":"2023","v":34},{"row":"East","col":"2024","v":43}]\r
    const data=Array.isArray(customData)&&customData.length&&customData[0].row?customData:gen()\r
    const margin={top:28,right:14,bottom:24,left:46}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const x=d3.scaleBand().domain(cols).range([0,width]).padding(0.18)\r
    const y=d3.scaleBand().domain(rows).range([0,height]).padding(0.38)\r
    const vScale=d3.scaleLinear().domain([0,60]).range([0, x.bandwidth()*0.92])\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    g.append('g').attr('transform',\`translate(0,\${height})\`).call(d3.axisBottom(x).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    g.append('g').call(d3.axisLeft(y).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text)').attr('font-size','8px').attr('font-weight',600))\r
    const rowColor=d3.scaleOrdinal(colors).domain(rows)\r
    data.forEach(d=>{\r
      const cx=(x(d.col)??0)+2, cy=(y(d.row)??0)+y.bandwidth()/2\r
      g.append('line').attr('x1',cx).attr('x2',cx+vScale(d.v)).attr('y1',cy).attr('y2',cy).attr('stroke',rowColor(d.row)).attr('stroke-width',1.6).attr('opacity',0.72)\r
      g.append('circle').attr('cx',cx+vScale(d.v)).attr('cy',cy).attr('r',4).attr('fill',rowColor(d.row)).attr('stroke','var(--bg)')\r
      g.append('text').attr('x',cx+vScale(d.v)+4).attr('y',cy+3).attr('fill','var(--text-secondary)').attr('font-size','6px').text(d.v)\r
    })\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Lollipop Matrix')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};