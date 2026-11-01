var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'radial-line-chart',\r
  title: 'Radial Line Chart',\r
  desc: 'Radial Line Chart — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'RadialLineChart',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["bars","radial-line-chart"],\r
}\r
\r
export default function RadialLineChart({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']\r
    const gen = () => [{"month":"Jan","v":34.011},{"month":"Feb","v":45.016},{"month":"Mar","v":52.106},{"month":"Apr","v":41.535},{"month":"May","v":22.668},{"month":"Jun","v":17.625},{"month":"Jul","v":18.368},{"month":"Aug","v":34.516},{"month":"Sep","v":49.353},{"month":"Oct","v":48.241},{"month":"Nov","v":37.093},{"month":"Dec","v":29.5}]\r
    const data=Array.isArray(customData)&&customData.length&&customData[0].month?customData:gen()\r
    const cx=200, cy=152, r0=22, r1=88\r
    const angle=d3.scalePoint().domain(months).range([0, Math.PI*2])\r
    const rad=d3.scaleLinear().domain([0,60]).range([r0,r1])\r
    const line=d3.lineRadial().angle(d=>angle(d.month)??0).radius(d=>rad(d.v)).curve(d3.curveCardinalClosed)\r
    const g=svg.append('g')\r
    // grid circles\r
    ;[15,30,45,60].forEach(v=> g.append('circle').attr('cx',cx).attr('cy',cy).attr('r',rad(v)).attr('fill','none').attr('stroke','var(--border)').attr('stroke-dasharray','2,3'))\r
    // spokes\r
    months.forEach(m=>{ const a=angle(m)??0; g.append('line').attr('x1',cx).attr('y1',cy).attr('x2',cx+Math.sin(a)*r1).attr('y2',cy-Math.cos(a)*r1).attr('stroke','var(--border)').attr('opacity',0.28)\r
      g.append('text').attr('x',cx+Math.sin(a)*(r1+10)).attr('y',cy-Math.cos(a)*(r1+10)+3).attr('text-anchor','middle').attr('fill','var(--text-secondary)').attr('font-size','6px').text(m) })\r
    g.append('path').datum(data).attr('d',line).attr('fill',colors[0]).attr('fill-opacity',0.18).attr('stroke',colors[0]).attr('stroke-width',2)\r
    data.forEach(d=>{ const a=angle(d.month)??0, r=rad(d.v); g.append('circle').attr('cx',cx+Math.sin(a)*r).attr('cy',cy-Math.cos(a)*r).attr('r',2.6).attr('fill',colors[0]).attr('stroke','var(--bg)') })\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Radial Line Chart')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};