var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'joyplot-with-stats',\r
  title: 'Joyplot With Stats',\r
  desc: 'Joyplot With Stats — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'JoyplotWithStats',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","joyplot-with-stats"],\r
}\r
\r
export default function JoyplotWithStats({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const groups=['2019','2020','2021','2022']\r
    const gen = () => [[32.438,39.27,23.584,30.591,36.706,54.286,39.315,23.982,35.34,9.209,47.653,52.034,57.043,45.839,53.1,52.303,46.343,27.635,66.307,33.113,31.781,36.154,46.913,45.304,37.767,29.778,38.93,45.294,38.91,44.242,62.866,27.808],[57.002,44.707,48.352,52.566,53.99,69.561,58.267,37.617,36.866,47.061,34.151,47.023,49.845,36.561,61.574,45.707,54.735,27.496,53.287,50.022,46.424,34.212,38.269,52.946,56.299,52.942,58.269,45.301,46.592,55.775,50.119,38.98],[73.587,53.84,53.496,70.511,73.364,66.537,65.075,53.162,43.505,50.844,49.013,53.808,46.907,46.691,48.244,49.332,57.63,49.614,66.765,70.688,58.753,47.191,63.03,50.004,69.027,62.099,51.508,41.61,57.689,42.832,54.234,59.041],[70.266,74.219,57.814,70.384,58.682,66.596,56.997,72.163,57.881,60.475,71.352,50.086,87.036,61.621,65.181,59.739,60.158,81.976,48.355,60.772,64.475,53.942,52.241,51.1,56.56,72.209,61.724,52.248,54.391,83.013,81.312,78.886]]\r
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
      const h=d3.scaleLinear().domain([0,maxD]).range([0, 26])\r
      const yy=y(gr)??0\r
      const area=d3.area().x(d=>x(d.v)).y0(yy).y1(d=>yy - h(d.d)).curve(d3.curveBasis)\r
      g.append('path').datum(kde).attr('d',area).attr('fill',colors[i]).attr('fill-opacity',0.14).attr('stroke',colors[i]).attr('stroke-width',1)\r
      const m=d3.median(vals)||50, mean=d3.mean(vals)||50\r
      g.append('line').attr('x1',x(m)).attr('x2',x(m)).attr('y1',yy- h(kde.find(k=>Math.abs(k.v-m)<1)?.d||0)).attr('y2',yy).attr('stroke',colors[i]).attr('stroke-width',1.2)\r
      g.append('circle').attr('cx',x(mean)).attr('cy',yy-2).attr('r',2).attr('fill','#0f172a').attr('stroke','var(--bg)')\r
      g.append('text').attr('x',-6).attr('y',yy+3).attr('text-anchor','end').attr('fill','var(--text)').attr('font-size','7px').attr('font-weight',600).text(gr)\r
    })\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Joyplot with Stats')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};