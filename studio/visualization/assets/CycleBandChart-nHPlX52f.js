var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
export const meta = {\r
  id: 'cycle-band-chart',\r
  title: 'Cycle Band Chart',\r
  desc: 'Cycle Band Chart — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'CycleBandChart',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","cycle-band-chart"],\r
}\r
\r
export default function CycleBandChart({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']\r
    const years=[2020,2021,2022,2023,2024]\r
    const gen = () => [{"month":"Jan","year":2020,"low":20.415,"high":36.069},{"month":"Jan","year":2021,"low":23.935,"high":40.055},{"month":"Jan","year":2022,"low":14.447,"high":37.479},{"month":"Jan","year":2023,"low":15.825,"high":39.245},{"month":"Jan","year":2024,"low":24.117,"high":36.502},{"month":"Feb","year":2020,"low":15.499,"high":43.877},{"month":"Feb","year":2021,"low":22.44,"high":33.526},{"month":"Feb","year":2022,"low":14.762,"high":37.013},{"month":"Feb","year":2023,"low":21.613,"high":38.991},{"month":"Feb","year":2024,"low":12.054,"high":36.474},{"month":"Mar","year":2020,"low":23.723,"high":28.922},{"month":"Mar","year":2021,"low":20.293,"high":28.568},{"month":"Mar","year":2022,"low":15.737,"high":29.112},{"month":"Mar","year":2023,"low":14.6,"high":42.104},{"month":"Mar","year":2024,"low":19.425,"high":28.488},{"month":"Apr","year":2020,"low":14.422,"high":43.168},{"month":"Apr","year":2021,"low":18.828,"high":42.562},{"month":"Apr","year":2022,"low":16.472,"high":36.098},{"month":"Apr","year":2023,"low":12.524,"high":28.925},{"month":"Apr","year":2024,"low":19.792,"high":38.741},{"month":"May","year":2020,"low":15.432,"high":39.622},{"month":"May","year":2021,"low":14.933,"high":33.465},{"month":"May","year":2022,"low":22.341,"high":43.457},{"month":"May","year":2023,"low":19.112,"high":31.675},{"month":"May","year":2024,"low":15.979,"high":33.274},{"month":"Jun","year":2020,"low":13.046,"high":39.877},{"month":"Jun","year":2021,"low":21.531,"high":40.476},{"month":"Jun","year":2022,"low":24.99,"high":29.583},{"month":"Jun","year":2023,"low":25.212,"high":35.76},{"month":"Jun","year":2024,"low":25.192,"high":30.471},{"month":"Jul","year":2020,"low":13.553,"high":28.285},{"month":"Jul","year":2021,"low":17.046,"high":36.671},{"month":"Jul","year":2022,"low":20.567,"high":44.192},{"month":"Jul","year":2023,"low":13.086,"high":40.953},{"month":"Jul","year":2024,"low":25.088,"high":33.009},{"month":"Aug","year":2020,"low":21.892,"high":31.233},{"month":"Aug","year":2021,"low":19.284,"high":42.794},{"month":"Aug","year":2022,"low":13.688,"high":45.921},{"month":"Aug","year":2023,"low":19.879,"high":44.49},{"month":"Aug","year":2024,"low":18.076,"high":38.412},{"month":"Sep","year":2020,"low":16.717,"high":38.732},{"month":"Sep","year":2021,"low":16.521,"high":41.129},{"month":"Sep","year":2022,"low":16.133,"high":36.096},{"month":"Sep","year":2023,"low":23.804,"high":40.511},{"month":"Sep","year":2024,"low":25.916,"high":44.024},{"month":"Oct","year":2020,"low":18.046,"high":37.814},{"month":"Oct","year":2021,"low":16.143,"high":29.816},{"month":"Oct","year":2022,"low":21.754,"high":33.64},{"month":"Oct","year":2023,"low":23.003,"high":44.286},{"month":"Oct","year":2024,"low":13.311,"high":36.557},{"month":"Nov","year":2020,"low":23.507,"high":30.34},{"month":"Nov","year":2021,"low":25.618,"high":31.211},{"month":"Nov","year":2022,"low":21.932,"high":40.594},{"month":"Nov","year":2023,"low":15.125,"high":35.432},{"month":"Nov","year":2024,"low":14.288,"high":39.784},{"month":"Dec","year":2020,"low":16.703,"high":31.725},{"month":"Dec","year":2021,"low":20.805,"high":43.964},{"month":"Dec","year":2022,"low":16.569,"high":42.264},{"month":"Dec","year":2023,"low":17.501,"high":30.365},{"month":"Dec","year":2024,"low":24.092,"high":34.655}]\r
    const data=Array.isArray(customData)&&customData.length&&customData[0].low!=null?customData:gen()\r
    const margin={top:28,right:14,bottom:24,left:36}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const x=d3.scaleBand().domain(months).range([0,width]).padding(0.12)\r
    const y=d3.scaleLinear().domain([0,60]).range([height,0])\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    g.append('g').call(d3.axisLeft(y).ticks(5).tickSize(-width).tickPadding(6))\r
      .call(g2=>g2.select('.domain').remove()).call(g2=>g2.selectAll('.tick line').attr('stroke','var(--border)').attr('stroke-dasharray','2,3'))\r
      .call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    g.append('g').attr('transform',\`translate(0,\${height})\`).call(d3.axisBottom(x).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    months.forEach(m=>{\r
      const vals=data.filter(d=>d.month===m)\r
      const avgLow=d3.mean(vals,d=>d.low)||0, avgHigh=d3.mean(vals,d=>d.high)||0\r
      const cx=(x(m)??0)+x.bandwidth()/2\r
      // band\r
      g.append('rect').attr('x',x(m)??0).attr('y',y(avgHigh)).attr('width',x.bandwidth()).attr('height',y(avgLow)-y(avgHigh)).attr('fill','#bfdbfe').attr('stroke','#3b82f6').attr('rx',3)\r
      // yearly dots\r
      vals.forEach(v=>{\r
        g.append('circle').attr('cx',cx+(Math.random()-0.5)*x.bandwidth()*0.6).attr('cy',y((v.low+v.high)/2)).attr('r',1.8).attr('fill','#1e40af').attr('opacity',0.52)\r
      })\r
      // median line\r
      g.append('line').attr('x1',x(m)??0).attr('x2',(x(m)??0)+x.bandwidth()).attr('y1',y((avgLow+avgHigh)/2)).attr('y2',y((avgLow+avgHigh)/2)).attr('stroke','#1e40af').attr('stroke-width',1)\r
    })\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Cycle Band Chart')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};