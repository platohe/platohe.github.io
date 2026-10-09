var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'theme-river-chart',\r
  title: 'Theme River Chart',\r
  desc: 'Theme River Chart — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'ThemeRiverChart',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","theme-river-chart"],\r
}\r
\r
export default function ThemeRiverChart({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const gen = () => [{"year":2018,"Tech":24.011,"Sports":18.586,"Politics":27.672,"Arts":20.697},{"year":2019,"Tech":19.748,"Sports":19.213,"Politics":22.459,"Arts":20.247},{"year":2020,"Tech":56.655,"Sports":18.779,"Politics":44.249,"Arts":22.821},{"year":2021,"Tech":55.457,"Sports":17.456,"Politics":21.775,"Arts":19.007},{"year":2022,"Tech":24.866,"Sports":47.885,"Politics":20.035,"Arts":18.708},{"year":2023,"Tech":26.373,"Sports":15.41,"Politics":25.331,"Arts":14.315},{"year":2024,"Tech":20.67,"Sports":15.494,"Politics":21.671,"Arts":21.835}]\r
    // Derive keys from data shape: numeric properties except the time key\r
    const raw=Array.isArray(customData)&&customData.length&&customData[0].year?customData:gen()\r
    const years=customData&&customData[0]&&customData[0].year!==undefined\r
      ? [...new Set(customData.map(d=>d.year))].sort((a,b)=>a-b)\r
      : [2018,2019,2020,2021,2022,2023,2024]\r
    const keys=customData&&customData[0]\r
      ? Object.keys(customData[0]).filter(k=>k!=='year'&&typeof customData[0][k]==='number')\r
      : ['Tech','Sports','Politics','Arts']\r
    const data=raw\r
    const margin={top:28,right:12,bottom:24,left:36}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const x=d3.scaleLinear().domain(d3.extent(years)).range([0,width])\r
    const y=d3.scaleLinear().range([height,0])\r
    const stack=d3.stack().keys(keys).offset(d3.stackOffsetWiggle)\r
    const series=stack(data)\r
    y.domain([d3.min(series, s=>d3.min(s,d=>d[0])), d3.max(series,s=>d3.max(s,d=>d[1]))])\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    const area=d3.area()\r
      .x(d=>x(d.data.year))\r
      .y0(d=>y(d[0]))\r
      .y1(d=>y(d[1]))\r
      .curve(d3.curveBasis)\r
    const col=d3.scaleOrdinal(colors).domain(keys)\r
    series.forEach(s=>{\r
      g.append('path').datum(s).attr('d',area).attr('fill',col(s.key)).attr('fill-opacity',0.82).attr('stroke','var(--bg)').attr('stroke-width',0.8)\r
    })\r
    // event labels — only show if data contains them, otherwise skip\r
    const events=customData&&customData[0]&&customData[0].events\r
      ? customData[0].events\r
      : {}\r
    keys.forEach(k=>{\r
      const ev=events[k]; if(!ev) return\r
      const s=series.find(z=>z.key===k); if(!s) return\r
      const pt=s.find(d=>d.data.year===ev.year); if(!pt) return\r
      const my=(pt[0]+pt[1])/2\r
      g.append('text').attr('x',x(ev.year)).attr('y',y(my)).attr('text-anchor','middle').attr('fill','#fff').attr('font-size','7px').attr('font-weight',700).text(ev.label)\r
    })\r
    g.append('g').attr('transform',\`translate(0,\${height})\`).call(d3.axisBottom(x).ticks(Math.min(years.length,14)).tickFormat(d3.format('d')).tickSize(0).tickPadding(4))\r
      .call(g2=>g2.select('.domain').attr('stroke','var(--border)')).call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','8px'))\r
    // legend\r
    keys.forEach((k,i)=>{\r
      g.append('rect').attr('x', 4+i*62).attr('y',-18).attr('width',8).attr('height',8).attr('fill',col(k)).attr('rx',2)\r
      g.append('text').attr('x',14+i*62).attr('y',-12).attr('fill','var(--text-secondary)').attr('font-size','7px').text(k)\r
    })\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('ThemeRiver — Topical Stream')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};