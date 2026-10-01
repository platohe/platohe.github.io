var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'ppwith-band',\r
  title: 'P P With Band',\r
  desc: 'P P With Band — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'PPWithBand',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","p-p-with-band"],\r
}\r
\r
export default function PPWithBand({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const gen = () => [6,24.376,24.973,29.726,30.453,30.713,33.342,33.666,33.798,34.887,34.926,36.671,37.658,38.67,42.01,43.232,44.058,45.56,45.651,47.06,47.366,47.396,47.905,47.972,49.035,49.091,51.028,53.268,55.364,56.941,56.956,57.35,57.759,58.514,59.37,59.484,60.479,64.003,65.901,67.051,67.454,68.649,70.429,70.861,74.565,82.841,83.3,88.461]\r
    const vals=Array.isArray(customData)&&customData.length&&typeof customData[0]==='number'?customData:gen()\r
    const n=vals.length\r
    const margin={top:28,right:14,bottom:24,left:36}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const x=d3.scaleLinear().domain([0,1]).range([0,width])\r
    const y=d3.scaleLinear().domain([0,1]).range([height,0])\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    g.append('g').attr('transform',\`translate(0,\${height})\`).call(d3.axisBottom(x).ticks(5).tickSize(-height).tickPadding(6))\r
      .call(g2=>g2.select('.domain').attr('stroke','var(--border)')).call(g2=>g2.selectAll('.tick line').attr('stroke','var(--border)').attr('stroke-dasharray','2,3'))\r
      .call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    g.append('g').call(d3.axisLeft(y).ticks(5).tickSize(-width).tickPadding(6))\r
      .call(g2=>g2.select('.domain').remove()).call(g2=>g2.selectAll('.tick line').attr('stroke','var(--border)').attr('stroke-dasharray','2,3'))\r
      .call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    const pts=vals.map((v,i)=>{\r
      const emp=(i+1)/n\r
      const theor= 0.5*(1+ (v-52)/15) // approx normal CDF linear\r
      const th=Math.max(0,Math.min(1, 0.5+ (v-50)/40))\r
      return {emp, th}\r
    })\r
    // confidence band ±0.06\r
    const band=d3.area().x(d=>x(d.th)).y0(d=>y(Math.max(0,d.emp-0.06))).y1(d=>y(Math.min(1,d.emp+0.06))).curve(d3.curveBasis)\r
    g.append('path').datum(pts).attr('d',band).attr('fill',colors[0]).attr('fill-opacity',0.08)\r
    g.append('line').attr('x1',x(0)).attr('x2',x(1)).attr('y1',y(0)).attr('y2',y(1)).attr('stroke','#94a3b8').attr('stroke-dasharray','3,3')\r
    g.append('path').datum(pts).attr('d',d3.line().x(d=>x(d.th)).y(d=>y(d.emp)).curve(d3.curveBasis)).attr('fill','none').attr('stroke',colors[0]).attr('stroke-width',1.8)\r
    pts.forEach(p=> g.append('circle').attr('cx',x(p.th)).attr('cy',y(p.emp)).attr('r',1.6).attr('fill',colors[0]).attr('opacity',0.72))\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('P-P with Confidence Band')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};