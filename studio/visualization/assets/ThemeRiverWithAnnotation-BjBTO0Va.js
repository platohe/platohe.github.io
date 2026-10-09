var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'theme-river-with-annotation',\r
  title: 'Theme River With Annotation',\r
  desc: 'Theme River With Annotation — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'ThemeRiverWithAnnotation',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","theme-river-with-annotation"],\r
}\r
\r
export default function ThemeRiverWithAnnotation({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const years=[2018,2019,2020,2021,2022,2023,2024]\r
    const cats=['Tech','Health','Finance']\r
    const gen = () => [{"year":2018,"Tech":16,"Health":14,"Finance":21},{"year":2019,"Tech":18,"Health":9,"Finance":15},{"year":2020,"Tech":10,"Health":17,"Finance":21},{"year":2021,"Tech":14,"Health":10,"Finance":21},{"year":2022,"Tech":19,"Health":11,"Finance":9},{"year":2023,"Tech":15,"Health":18,"Finance":16},{"year":2024,"Tech":6,"Health":14,"Finance":21}]\r
    const data=Array.isArray(customData)&&customData.length&&customData[0].year?customData:gen()\r
    const margin={top:28,right:14,bottom:24,left:36}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const x=d3.scaleLinear().domain([2018,2024]).range([0,width])\r
    const stack=d3.stack().keys(cats).offset(d3.stackOffsetSilhouette)\r
    const series=stack(data)\r
    const y=d3.scaleLinear().domain([d3.min(series,s=>d3.min(s,d=>d[0]))||-10, d3.max(series,s=>d3.max(s,d=>d[1]))||40]).range([height,0])\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    const area=d3.area().x(d=>x(d.data.year)).y0(d=>y(d[0])).y1(d=>y(d[1])).curve(d3.curveBasis)\r
    const col=d3.scaleOrdinal(colors).domain(cats)\r
    series.forEach(s=> g.append('path').datum(s).attr('d',area).attr('fill',col(s.key)).attr('fill-opacity',0.72).attr('stroke',col(s.key)).attr('stroke-width',0.6))\r
    // annotations at 2020 and 2022 peaks\r
    ;[2020,2022].forEach(yr=>{\r
      const idx=years.indexOf(yr)\r
      const tot=d3.sum(cats, c=> data[idx][c])\r
      g.append('line').attr('x1',x(yr)).attr('x2',x(yr)).attr('y1',0).attr('y2',height).attr('stroke','#0f172a').attr('stroke-dasharray','2,2').attr('opacity',0.22)\r
      g.append('text').attr('x',x(yr)).attr('y',-6).attr('text-anchor','middle').attr('fill','#0f172a').attr('font-size','7px').attr('font-weight',700).text(yr===2020?'Launch':'Peak')\r
    })\r
    g.append('g').attr('transform',\`translate(0,\${height})\`).call(d3.axisBottom(x).ticks(7).tickFormat(d3.format('d')).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('ThemeRiver with Annotation')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};