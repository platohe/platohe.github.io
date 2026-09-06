var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'stream-gradient',\r
  title: 'Stream Gradient',\r
  desc: 'Stream Gradient — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'StreamGradient',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","stream-gradient"],\r
}\r
\r
export default function StreamGradient({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const years=[2018,2019,2020,2021,2022,2023,2024]\r
    const cats=['Alpha','Beta','Gamma']\r
    const gen = () => [{"year":2018,"Alpha":21,"Beta":17,"Gamma":26},{"year":2019,"Alpha":22,"Beta":11,"Gamma":19},{"year":2020,"Alpha":14,"Beta":21,"Gamma":27},{"year":2021,"Alpha":18,"Beta":13,"Gamma":27},{"year":2022,"Alpha":24,"Beta":14,"Gamma":12},{"year":2023,"Alpha":19,"Beta":23,"Gamma":21},{"year":2024,"Alpha":8,"Beta":18,"Gamma":26}]\r
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
    const defs=svg.append('defs')\r
    cats.forEach((c,i)=>{\r
      const grad=defs.append('linearGradient').attr('id',\`streamGrad\${i}\`).attr('x1','0%').attr('y1','0%').attr('x2','100%').attr('y2','0%')\r
      grad.append('stop').attr('offset','0%').attr('stop-color',d3.color(colors[i]).brighter(0.6).toString())\r
      grad.append('stop').attr('offset','100%').attr('stop-color',colors[i])\r
      g.append('path').datum(series[i]).attr('d',area).attr('fill',\`url(#streamGrad\${i})\`).attr('stroke',colors[i]).attr('stroke-width',0.8).attr('opacity',0.82)\r
    })\r
    g.append('g').attr('transform',\`translate(0,\${height})\`).call(d3.axisBottom(x).ticks(7).tickFormat(d3.format('d')).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Stream Gradient')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};