var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'bean-with-ci',\r
  title: 'Bean With C I',\r
  desc: 'Bean With C I — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'BeanWithCI',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","bean-with-c-i"],\r
}\r
\r
export default function BeanWithCI({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const groups=['A','B','C']\r
    const gen = () => [[30.526,38.724,19.9,28.309,35.647,56.743,38.778,20.378,34.008,8,48.783,54.041,60.052,46.607,55.319,54.363,47.211,24.762,71.169,31.336,29.737,34.985,47.896,45.965,36.921,27.333,38.317,45.953,38.292,44.691,67.04,24.97,51.602,36.848,41.222,46.28,47.988,66.673,53.121,28.341,27.439,39.673],[40.181,55.628,59.014,43.073,73.089,54.048,64.882,32.195,63.145,59.227,54.909,40.255,45.122,62.736,66.759,62.731,69.123,53.562,55.11,66.13,59.342,45.976,79.104,55.408,54.996,75.413,78.837,70.644,68.89,54.595,43.006,51.812,49.616,55.369,47.089,46.829,48.692,49.998,59.956,50.337,70.918,75.625],[55.304,41.429,60.437,44.804,67.632,59.319,46.61,34.731,54.027,36.198,49.881,55.65,60.719,65.462,45.776,60.86,46.818,56.315,44.797,62.996,45.857,48.97,62.022,36.503,80.843,50.345,54.618,48.086,48.59,74.772,34.426,49.326,53.77,41.13,39.089,37.72,44.272,63.05,50.469,39.098,41.67,76.016]]\r
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
      const kde=d3.range(0,101,1).map(v=>{ let s=0; vals.forEach(a=>{const d=(v-a)/7; s+=Math.exp(-0.5*d*d)}); return {v, d:s}})\r
      const maxD=d3.max(kde,d=>d.d)||1\r
      const w=d3.scaleLinear().domain([0,maxD]).range([0, x.bandwidth()/2 -2])\r
      const cx=(x(groups[i])??0)+x.bandwidth()/2\r
      const area=d3.area().x0(d=>cx - w(d.d)).x1(d=>cx + w(d.d)).y(d=>y(d.v)).curve(d3.curveBasis)\r
      g.append('path').datum(kde).attr('d',area).attr('fill',colors[i]).attr('fill-opacity',0.14).attr('stroke',colors[i]).attr('stroke-width',1)\r
      const m=d3.median(sorted)||50\r
      const ci= 1.58*(d3.quantile(sorted,0.75)-d3.quantile(sorted,0.25))/Math.sqrt(vals.length) || 4\r
      g.append('line').attr('x1',cx-10).attr('x2',cx+10).attr('y1',y(m)).attr('y2',y(m)).attr('stroke',colors[i]).attr('stroke-width',1.8)\r
      g.append('rect').attr('x',cx-2).attr('y',y(m+ci)).attr('width',4).attr('height',y(m-ci)-y(m+ci)).attr('fill','#0f172a').attr('opacity',0.14)\r
      g.append('circle').attr('cx',cx).attr('cy',y(m)).attr('r',2.4).attr('fill',colors[i]).attr('stroke','#fff')\r
    })\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Bean with CI')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};