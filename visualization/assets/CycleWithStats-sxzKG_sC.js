var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
export const meta = {\r
  id: 'cycle-with-stats',\r
  title: 'Cycle With Stats',\r
  desc: 'Cycle With Stats — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'CycleWithStats',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","cycle-with-stats"],\r
}\r
\r
export default function CycleWithStats({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']\r
    const years=[2020,2021,2022,2023,2024]\r
    const gen = () => [{"month":"Jan","year":2020,"v":42.426},{"month":"Jan","year":2021,"v":38.759},{"month":"Jan","year":2022,"v":48.459},{"month":"Jan","year":2023,"v":44.074},{"month":"Jan","year":2024,"v":32.196},{"month":"Feb","year":2020,"v":40.638},{"month":"Feb","year":2021,"v":34.557},{"month":"Feb","year":2022,"v":42.994},{"month":"Feb","year":2023,"v":48.771},{"month":"Feb","year":2024,"v":39.336},{"month":"Mar","year":2020,"v":33.998},{"month":"Mar","year":2021,"v":49.169},{"month":"Mar","year":2022,"v":45.898},{"month":"Mar","year":2023,"v":35.368},{"month":"Mar","year":2024,"v":32.734},{"month":"Apr","year":2020,"v":40.018},{"month":"Apr","year":2021,"v":44.479},{"month":"Apr","year":2022,"v":42.655},{"month":"Apr","year":2023,"v":28.092},{"month":"Apr","year":2024,"v":39.299},{"month":"May","year":2020,"v":48.096},{"month":"May","year":2021,"v":29.229},{"month":"May","year":2022,"v":42.216},{"month":"May","year":2023,"v":28.757},{"month":"May","year":2024,"v":34.407},{"month":"Jun","year":2020,"v":43.483},{"month":"Jun","year":2021,"v":46.457},{"month":"Jun","year":2022,"v":60.805},{"month":"Jun","year":2023,"v":54.728},{"month":"Jun","year":2024,"v":42.651},{"month":"Jul","year":2020,"v":46.152},{"month":"Jul","year":2021,"v":62.225},{"month":"Jul","year":2022,"v":53.706},{"month":"Jul","year":2023,"v":61.417},{"month":"Jul","year":2024,"v":49.667},{"month":"Aug","year":2020,"v":52.797},{"month":"Aug","year":2021,"v":42.899},{"month":"Aug","year":2022,"v":43.233},{"month":"Aug","year":2023,"v":55.358},{"month":"Aug","year":2024,"v":56.322},{"month":"Sep","year":2020,"v":33.884},{"month":"Sep","year":2021,"v":43.497},{"month":"Sep","year":2022,"v":33.028},{"month":"Sep","year":2023,"v":35.287},{"month":"Sep","year":2024,"v":45.727},{"month":"Oct","year":2020,"v":48.609},{"month":"Oct","year":2021,"v":40.192},{"month":"Oct","year":2022,"v":32.901},{"month":"Oct","year":2023,"v":34.821},{"month":"Oct","year":2024,"v":35.032},{"month":"Nov","year":2020,"v":29.793},{"month":"Nov","year":2021,"v":43.837},{"month":"Nov","year":2022,"v":44.338},{"month":"Nov","year":2023,"v":44.634},{"month":"Nov","year":2024,"v":50.268},{"month":"Dec","year":2020,"v":30.111},{"month":"Dec","year":2021,"v":50.65},{"month":"Dec","year":2022,"v":38.347},{"month":"Dec","year":2023,"v":50.615},{"month":"Dec","year":2024,"v":31.295}]\r
    const data=Array.isArray(customData)&&customData.length&&customData[0].month?customData:gen()\r
    const margin={top:28,right:14,bottom:24,left:36}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const x=d3.scaleBand().domain(months).range([0,width]).padding(0.12)\r
    const y=d3.scaleLinear().domain([0,70]).range([height,0])\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    g.append('g').call(d3.axisLeft(y).ticks(5).tickSize(-width).tickPadding(6))\r
      .call(g2=>g2.select('.domain').remove()).call(g2=>g2.selectAll('.tick line').attr('stroke','var(--border)').attr('stroke-dasharray','2,3'))\r
      .call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    g.append('g').attr('transform',\`translate(0,\${height})\`).call(d3.axisBottom(x).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    months.forEach(m=>{\r
      const vals=data.filter(d=>d.month===m).map(d=>d.v)\r
      const mean=d3.mean(vals)||0, lo=d3.min(vals)||0, hi=d3.max(vals)||0\r
      const cx=(x(m)??0)+x.bandwidth()/2\r
      g.append('line').attr('x1',cx).attr('x2',cx).attr('y1',y(lo)).attr('y2',y(hi)).attr('stroke','#94a3b8').attr('stroke-width',1.2)\r
      g.append('rect').attr('x',cx-4).attr('y',y(hi)).attr('width',8).attr('height',y(lo)-y(hi)).attr('fill','#bfdbfe').attr('stroke','#3b82f6').attr('rx',2)\r
      g.append('circle').attr('cx',cx).attr('cy',y(mean)).attr('r',2.4).attr('fill','#1d4ed8').attr('stroke','var(--bg)')\r
    })\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Cycle with Stats')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};