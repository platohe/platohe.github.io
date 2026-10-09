var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'ridge-with-avg',\r
  title: 'Ridge With Avg',\r
  desc: 'Ridge With Avg — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'RidgeWithAvg',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","ridge-with-avg"],\r
}\r
\r
export default function RidgeWithAvg({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const groups=['2019','2020','2021','2022']\r
    const gen = () => [[32.438,39.27,23.584,30.591,36.706,54.286,39.315,23.982,35.34,9.209,47.653,52.034,57.043,45.839,53.1,52.303,46.343,27.635,66.307,33.113,31.781,36.154,46.913,45.304,37.767,29.778,38.93,45.294,38.91,44.242,62.866,27.808,50.002,37.707,41.352,45.566],[52.99,68.561,57.267,36.617,35.866,46.061,33.151,46.023,48.845,35.561,60.574,44.707,53.735,26.496,52.287,49.022,45.424,33.212,37.269,51.946,55.299,51.942,57.269,44.301,45.592,54.775,49.119,37.98,65.587,45.84,45.496,62.511,65.364,58.537,57.075,45.162],[41.505,48.844,47.013,51.808,44.907,44.691,46.244,47.332,55.63,47.614,64.765,68.688,56.753,45.191,61.03,48.004,67.027,60.099,49.508,39.61,55.689,40.832,52.234,57.041,61.266,65.219,48.814,61.384,49.682,57.596,47.997,63.163,48.881,51.475,62.352,41.086],[84.036,58.621,62.181,56.739,57.158,78.976,45.355,57.772,61.475,50.942,49.241,48.1,53.56,69.209,58.724,49.248,51.391,80.013,78.312,75.886,47.017,69.365,43.534,54.984,68.865,60.002,62.614,63.701,65.022,78.608,58.096,55.626,70.636,38,56.865,54.117]]\r
    const raw=Array.isArray(customData)&&customData.length&&Array.isArray(customData[0])?customData:gen()\r
    const margin={top:28,right:14,bottom:24,left:36}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const x=d3.scaleLinear().domain([0,100]).range([0,width])\r
    const y=d3.scalePoint().domain(groups).range([0,height]).padding(0.6)\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    g.append('g').attr('transform',\`translate(0,\${height})\`).call(d3.axisBottom(x).ticks(5).tickSize(-height).tickPadding(6))\r
      .call(g2=>g2.select('.domain').attr('stroke','var(--border)')).call(g2=>g2.selectAll('.tick line').attr('stroke','var(--border)').attr('stroke-dasharray','2,3'))\r
      .call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    groups.forEach((gr,i)=>{\r
      const vals=raw[i]\r
      const kde=d3.range(0,101,1).map(v=>{ let s=0; vals.forEach(a=>{const d=(v-a)/7; s+=Math.exp(-0.5*d*d)}); return {v, d:s}})\r
      const maxD=d3.max(kde,d=>d.d)||1\r
      const h=d3.scaleLinear().domain([0,maxD]).range([0, 28])\r
      const yy=y(gr)??0\r
      const area=d3.area().x(d=>x(d.v)).y0(yy).y1(d=>yy - h(d.d)).curve(d3.curveBasis)\r
      g.append('path').datum(kde).attr('d',area).attr('fill',colors[i]).attr('fill-opacity',0.14).attr('stroke',colors[i]).attr('stroke-width',1)\r
      const avg=d3.mean(vals)||50\r
      g.append('line').attr('x1',x(avg)).attr('x2',x(avg)).attr('y1',yy- h(kde.find(k=>Math.abs(k.v-avg)<1)?.d||0)).attr('y2',yy).attr('stroke','#0f172a').attr('stroke-width',1).attr('stroke-dasharray','2,2')\r
      g.append('circle').attr('cx',x(avg)).attr('cy',yy - h(kde.find(k=>Math.abs(k.v-avg)<1)?.d||0)/2).attr('r',2).attr('fill','#0f172a')\r
      g.append('text').attr('x',-6).attr('y',yy+3).attr('text-anchor','end').attr('fill','var(--text)').attr('font-size','7px').attr('font-weight',600).text(gr)\r
    })\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Ridge with Avg')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};