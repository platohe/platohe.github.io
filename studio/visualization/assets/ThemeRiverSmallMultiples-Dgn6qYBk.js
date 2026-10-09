var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'theme-river-small-multiples',\r
  title: 'Theme River Small Multiples',\r
  desc: 'Theme River Small Multiples — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'ThemeRiverSmallMultiples',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","theme-river-small-multiples"],\r
}\r
\r
export default function ThemeRiverSmallMultiples({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const Years=[2018,2019,2020,2021,2022,2023,2024]\r
    const Cats=[['Tech','Health'],['Finance','Energy'],['Retail','Media']]\r
    const gen = () => [{"year":2018,"Tech":14,"Health":12,"Finance":17,"Energy":15,"Retail":8,"Media":13},{"year":2019,"Tech":9,"Health":14,"Finance":18,"Energy":12,"Retail":9,"Media":18},{"year":2020,"Tech":16,"Health":10,"Finance":8,"Energy":13,"Retail":15,"Media":14},{"year":2021,"Tech":6,"Health":12,"Finance":17,"Energy":6,"Retail":14,"Media":6},{"year":2022,"Tech":9,"Health":6,"Finance":8,"Energy":16,"Retail":13,"Media":6},{"year":2023,"Tech":8,"Health":17,"Finance":12,"Energy":17,"Retail":10,"Media":12},{"year":2024,"Tech":6,"Health":6,"Finance":13,"Energy":14,"Retail":9,"Media":15}]\r
    const data=Array.isArray(customData)&&customData.length&&customData[0].year?customData:gen()\r
    const g=svg.append('g')\r
    Cats.forEach((pair, pi)=>{\r
      const x=d3.scaleLinear().domain([2018,2024]).range([0,108])\r
      const stack=d3.stack().keys(pair).offset(d3.stackOffsetSilhouette)\r
      const series=stack(data)\r
      const y=d3.scaleLinear().domain([d3.min(series,s=>d3.min(s,d=>d[0]))||-10, d3.max(series,s=>d3.max(s,d=>d[1]))||20]).range([58,0])\r
      const pg=g.append('g').attr('transform',\`translate(\${14+pi*124},34)\`)\r
      const area=d3.area().x(d=>x(d.data.year)).y0(d=>y(d[0])).y1(d=>y(d[1])).curve(d3.curveBasis)\r
      series.forEach(s=> pg.append('path').datum(s).attr('d',area).attr('fill',colors[pair.indexOf(s.key)%colors.length]).attr('fill-opacity',0.72).attr('stroke',colors[pair.indexOf(s.key)%colors.length]).attr('stroke-width',0.6))\r
      pg.append('rect').attr('width',108).attr('height',58).attr('fill','none').attr('stroke','var(--border)').attr('rx',4)\r
      pg.append('text').attr('x',54).attr('y',-4).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','7px').attr('font-weight',700).text(pair.join(' + '))\r
    })\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('ThemeRiver Small Multiples')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};