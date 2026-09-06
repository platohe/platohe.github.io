var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'stream-with-markers',\r
  title: 'Stream With Markers',\r
  desc: 'Stream With Markers — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'StreamWithMarkers',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","stream-with-markers"],\r
}\r
\r
export default function StreamWithMarkers({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const years=[2018,2019,2020,2021,2022,2023,2024]\r
    const cats=['Tech','Health','Finance']\r
    const gen = () => [{"year":2018,"Tech":27,"Health":23,"Finance":34},{"year":2019,"Tech":29,"Health":16,"Finance":25},{"year":2020,"Tech":19,"Health":28,"Finance":34},{"year":2021,"Tech":24,"Health":18,"Finance":34},{"year":2022,"Tech":31,"Health":19,"Finance":17},{"year":2023,"Tech":25,"Health":29,"Finance":27},{"year":2024,"Tech":12,"Health":24,"Finance":33}]\r
    const data=Array.isArray(customData)&&customData.length&&customData[0].year?customData:gen()\r
    const margin={top:28,right:14,bottom:24,left:36}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const x=d3.scaleLinear().domain([2018,2024]).range([0,width])\r
    const y=d3.scaleLinear().range([height,0])\r
    const stack=d3.stack().keys(cats).offset(d3.stackOffsetWiggle)\r
    const series=stack(data)\r
    y.domain([d3.min(series,s=>d3.min(s,d=>d[0]))||-20, d3.max(series,s=>d3.max(s,d=>d[1]))||60])\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    const area=d3.area().x(d=>x(d.data.year)).y0(d=>y(d[0])).y1(d=>y(d[1])).curve(d3.curveBasis)\r
    const col=d3.scaleOrdinal(colors).domain(cats)\r
    series.forEach(s=> g.append('path').datum(s).attr('d',area).attr('fill',col(s.key)).attr('fill-opacity',0.72).attr('stroke',col(s.key)).attr('stroke-width',0.8))\r
    // markers at peaks\r
    series.forEach(s=>{\r
      const peak=s.reduce((a,b)=> b[1]>a[1]?b:a, s[0])\r
      g.append('circle').attr('cx',x(peak.data.year)).attr('cy',y(peak[1])).attr('r',3).attr('fill',col(s.key)).attr('stroke','var(--bg)').attr('stroke-width',1)\r
      g.append('text').attr('x',x(peak.data.year)+6).attr('y',y(peak[1])+3).attr('fill',col(s.key)).attr('font-size','6px').attr('font-weight',700).text(s.key)\r
    })\r
    g.append('g').attr('transform',\`translate(0,\${height})\`).call(d3.axisBottom(x).ticks(7).tickFormat(d3.format('d')).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Stream with Markers')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};