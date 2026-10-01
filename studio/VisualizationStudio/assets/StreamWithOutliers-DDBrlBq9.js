var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'stream-with-outliers',\r
  title: 'Stream With Outliers',\r
  desc: 'Stream With Outliers — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'StreamWithOutliers',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","stream-with-outliers"],\r
}\r
\r
export default function StreamWithOutliers({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const years=[2018,2019,2020,2021,2022,2023,2024]\r
    const cats=['Alpha','Beta','Gamma']\r
    const gen = () => [{"year":2018,"Alpha":16,"Beta":21,"Gamma":9},{"year":2019,"Alpha":10,"Beta":21,"Gamma":10},{"year":2020,"Alpha":19,"Beta":9,"Gamma":18},{"year":2021,"Alpha":6,"Beta":39,"Gamma":34},{"year":2022,"Alpha":28,"Beta":9,"Gamma":33},{"year":2023,"Alpha":9,"Beta":14,"Gamma":11},{"year":2024,"Alpha":24,"Beta":16,"Gamma":10}]\r
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
    series.forEach(s=> g.append('path').datum(s).attr('d',area).attr('fill',col(s.key)).attr('fill-opacity',0.48).attr('stroke',col(s.key)).attr('stroke-width',0.8))\r
    // outliers as dots above stream\r
    data.forEach(d=>{\r
      cats.forEach(c=>{\r
        if(d[c]>32){\r
          const s=series.find(x=>x.key===c)\r
          const pt=s.find(p=>p.data.year===d.year)\r
          const yy= pt? y(pt[1]): y(0)\r
          g.append('circle').attr('cx',x(d.year)).attr('cy',yy-6).attr('r',2.6).attr('fill','#ef4444').attr('stroke','var(--bg)').attr('stroke-width',0.6)\r
        }\r
      })\r
    })\r
    g.append('g').attr('transform',\`translate(0,\${height})\`).call(d3.axisBottom(x).ticks(7).tickFormat(d3.format('d')).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Stream with Outliers')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};