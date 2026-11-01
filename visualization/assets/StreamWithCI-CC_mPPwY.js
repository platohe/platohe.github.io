var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'stream-with-ci',\r
  title: 'Stream With C I',\r
  desc: 'Stream With C I — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'StreamWithCI',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","stream-with-c-i"],\r
}\r
\r
export default function StreamWithCI({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const years=[2018,2019,2020,2021,2022,2023,2024]\r
    const cats=['Alpha','Beta','Gamma']\r
    const gen = () => [{"year":2018,"Alpha":16,"Beta":14,"Gamma":21},{"year":2019,"Alpha":18,"Beta":9,"Gamma":15},{"year":2020,"Alpha":10,"Beta":17,"Gamma":21},{"year":2021,"Alpha":14,"Beta":10,"Gamma":21},{"year":2022,"Alpha":19,"Beta":11,"Gamma":9},{"year":2023,"Alpha":15,"Beta":18,"Gamma":16},{"year":2024,"Alpha":6,"Beta":14,"Gamma":21}]\r
    const data=Array.isArray(customData)&&customData.length&&customData[0].year?customData:gen()\r
    const margin={top:28,right:14,bottom:24,left:36}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const x=d3.scaleLinear().domain([2018,2024]).range([0,width])\r
    const stack=d3.stack().keys(cats).offset(d3.stackOffsetWiggle)\r
    const series=stack(data)\r
    const y=d3.scaleLinear().domain([d3.min(series,s=>d3.min(s,d=>d[0]))||-10, d3.max(series,s=>d3.max(s,d=>d[1]))||40]).range([height,0])\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    const area=d3.area().x(d=>x(d.data.year)).y0(d=>y(d[0])).y1(d=>y(d[1])).curve(d3.curveBasis)\r
    const col=d3.scaleOrdinal(colors).domain(cats)\r
    series.forEach(s=>{\r
      g.append('path').datum(s).attr('d',area).attr('fill',col(s.key)).attr('fill-opacity',0.48).attr('stroke',col(s.key)).attr('stroke-width',0.8)\r
      // CI band per category as faint overlay\r
      const ciArea=d3.area().x(d=>x(d.data.year)).y0(d=>y(d[0]-2)).y1(d=>y(d[1]+2)).curve(d3.curveBasis)\r
      g.append('path').datum(s).attr('d',ciArea).attr('fill',col(s.key)).attr('fill-opacity',0.08)\r
    })\r
    g.append('g').attr('transform',\`translate(0,\${height})\`).call(d3.axisBottom(x).ticks(7).tickFormat(d3.format('d')).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Stream with CI')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};