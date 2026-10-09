var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'box-with-avg',\r
  title: 'Box With Avg',\r
  desc: 'Box With Avg — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'BoxWithAvg',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","box-with-avg"],\r
}\r
\r
export default function BoxWithAvg({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const groups=['P','Q','R']\r
    const gen = () => [[30.526,38.724,19.9,28.309,35.647,56.743,38.778,20.378,34.008,8,48.783,54.041,60.052,46.607,55.319,54.363,47.211,24.762,71.169,31.336,29.737,34.985,47.896,45.965,36.921,27.333,38.317,45.953,38.292,44.691,67.04,24.97,51.602,36.848,41.222,46.28,47.988,66.673,53.121,28.341,27.439,39.673],[40.181,55.628,59.014,43.073,73.089,54.048,64.882,32.195,63.145,59.227,54.909,40.255,45.122,62.736,66.759,62.731,69.123,53.562,55.11,66.13,59.342,45.976,79.104,55.408,54.996,75.413,78.837,70.644,68.89,54.595,43.006,51.812,49.616,55.369,47.089,46.829,48.692,49.998,59.956,50.337,70.918,75.625],[69.304,55.429,74.437,58.804,81.632,73.319,60.61,48.731,68.027,50.198,63.881,69.65,74.719,79.462,59.776,74.86,60.818,70.315,58.797,76.996,59.857,62.97,76.022,50.503,92,64.345,68.618,62.086,62.59,88.772,48.426,63.326,67.77,55.13,53.089,51.72,58.272,77.05,64.469,53.098,55.67,90.016]]\r
    const raw=Array.isArray(customData)&&customData.length&&Array.isArray(customData[0])?customData:gen()\r
    const margin={top:28,right:14,bottom:24,left:36}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const y=d3.scaleLinear().domain([0,100]).range([height,0])\r
    const x=d3.scaleBand().domain(groups).range([0,width]).padding(0.42)\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    g.append('g').call(d3.axisLeft(y).ticks(5).tickSize(-width).tickPadding(6))\r
      .call(g2=>g2.select('.domain').remove()).call(g2=>g2.selectAll('.tick line').attr('stroke','var(--border)').attr('stroke-dasharray','2,3'))\r
      .call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    g.append('g').attr('transform',\`translate(0,\${height})\`).call(d3.axisBottom(x).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text)').attr('font-size','8px').attr('font-weight',600))\r
    raw.forEach((vals,i)=>{\r
      const sorted=[...vals].sort(d3.ascending)\r
      const q1=d3.quantile(sorted,0.25)||0, m=d3.median(sorted)||0, q3=d3.quantile(sorted,0.75)||0, min=d3.min(sorted)||0, max=d3.max(sorted)||0, mean=d3.mean(vals)||0\r
      const cx=(x(groups[i])??0)+x.bandwidth()/2, bw=x.bandwidth()*0.48\r
      g.append('line').attr('x1',cx).attr('x2',cx).attr('y1',y(min)).attr('y2',y(q1)).attr('stroke',colors[i]).attr('stroke-width',1)\r
      g.append('line').attr('x1',cx).attr('x2',cx).attr('y1',y(q3)).attr('y2',y(max)).attr('stroke',colors[i]).attr('stroke-width',1)\r
      g.append('rect').attr('x',cx-bw/2).attr('y',y(q3)).attr('width',bw).attr('height',Math.max(2, y(q1)-y(q3))).attr('fill',colors[i]).attr('fill-opacity',0.22).attr('stroke',colors[i]).attr('stroke-width',1)\r
      g.append('line').attr('x1',cx-bw/2).attr('x2',cx+bw/2).attr('y1',y(m)).attr('y2',y(m)).attr('stroke',colors[i]).attr('stroke-width',1.6)\r
      g.append('circle').attr('cx',cx).attr('cy',y(mean)).attr('r',2.2).attr('fill','#0f172a').attr('stroke','var(--bg)').attr('stroke-width',0.6)\r
      g.append('text').attr('x',cx).attr('y',y(mean)-6).attr('text-anchor','middle').attr('fill','#0f172a').attr('font-size','6px').text(mean.toFixed(0))\r
    })\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Box with Avg')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};