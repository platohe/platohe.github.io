var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'bump-area-chart',\r
  title: 'Bump Area Chart',\r
  desc: 'Bump Area Chart — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'BumpAreaChart',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["bars","bump-area-chart"],\r
}\r
\r
export default function BumpAreaChart({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const teams=['Alpha','Beta','Gamma','Delta']\r
    const years=[2018,2019,2020,2021,2022,2023,2024]\r
    const gen = () => [{"team":"Alpha","values":[{"year":2018,"rank":2},{"year":2019,"rank":3},{"year":2020,"rank":1},{"year":2021,"rank":1},{"year":2022,"rank":1},{"year":2023,"rank":1},{"year":2024,"rank":2}]},{"team":"Beta","values":[{"year":2018,"rank":4},{"year":2019,"rank":2},{"year":2020,"rank":3},{"year":2021,"rank":3},{"year":2022,"rank":2},{"year":2023,"rank":3},{"year":2024,"rank":4}]},{"team":"Gamma","values":[{"year":2018,"rank":1},{"year":2019,"rank":4},{"year":2020,"rank":4},{"year":2021,"rank":4},{"year":2022,"rank":4},{"year":2023,"rank":2},{"year":2024,"rank":3}]},{"team":"Delta","values":[{"year":2018,"rank":3},{"year":2019,"rank":1},{"year":2020,"rank":2},{"year":2021,"rank":2},{"year":2022,"rank":3},{"year":2023,"rank":4},{"year":2024,"rank":1}]}]\r
    const series=Array.isArray(customData)&&customData.length&&customData[0].team?customData:gen()\r
    const margin={top:28,right:46,bottom:24,left:46}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    // Derive x domain from data\r
    const allYears=series.flatMap(s=>s.values.map(v=>v.year))\r
    const x=d3.scaleLinear().domain(d3.extent(allYears)).range([0,width])\r
    // Derive y domain from data\r
    const allRanks=series.flatMap(s=>s.values.map(v=>v.rank))\r
    const y=d3.scaleLinear().domain(d3.extent(allRanks)).range([0,height])\r
    const color=d3.scaleOrdinal(colors).domain(d3.sort([...new Set(series.map(s=>s.team))]))\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    g.append('g').call(d3.axisLeft(y).ticks(y.domain()[1]-y.domain()[0]+1).tickSize(-width).tickPadding(8))\r
      .call(g2=>g2.select('.domain').remove()).call(g2=>g2.selectAll('.tick line').attr('stroke','var(--border)').attr('stroke-dasharray','2,3'))\r
      .call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','8px'))\r
    g.append('g').attr('transform',\`translate(0,\${height})\`).call(d3.axisBottom(x).ticks(Math.min(allYears.length,14)).tickFormat(d3.format('d')).tickSize(0))\r
      .call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    // areas between ranks\r
    const area=d3.area().x(d=>x(d.year)).y0(d=>y(d.rank)-6).y1(d=>y(d.rank)+6).curve(d3.curveMonotoneX)\r
    series.forEach(s=>{\r
      g.append('path').datum(s.values).attr('d',area).attr('fill',color(s.team)).attr('fill-opacity',0.22).attr('stroke',color(s.team)).attr('stroke-width',2.2)\r
      s.values.forEach(v=> g.append('circle').attr('cx',x(v.year)).attr('cy',y(v.rank)).attr('r',3.2).attr('fill',color(s.team)).attr('stroke','var(--bg)'))\r
      const last=s.values[s.values.length-1]; g.append('text').attr('x',x(last.year)+6).attr('y',y(last.rank)+3).attr('fill',color(s.team)).attr('font-size','7px').attr('font-weight',700).text(s.team)\r
    })\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Bump Area Chart')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};