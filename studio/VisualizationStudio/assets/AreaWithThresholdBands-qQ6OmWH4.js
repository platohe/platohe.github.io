var e=`import { useEffect, useRef, useMemo } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
import { makeBaseCurve } from './areaParams'\r
export const meta = {\r
  id: 'area-with-threshold-bands',\r
  title: 'Area With Threshold Bands',\r
  desc: 'Area With Threshold Bands — a areas chart visualization',\r
  category: 'Areas',\r
  component: 'AreaWithThresholdBands',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["areas","area-with-threshold-bands"],\r
}\r
\r
export default function AreaWithThresholdBands({ data: customData, onCurveData }) {\r
  const ref=useRef(null)\r
  const isCurveData = Array.isArray(customData) && customData.length > 0 && customData[0].x != null\r
  const params = useMemo(() => ({\r
    formula: 'sinusoidal',\r
    amp: customData?.amp ?? 15,\r
    offset: customData?.offset ?? 40,\r
    freq: customData?.freq ?? 2,\r
    points: customData?.points ?? 60,\r
  }), [customData])\r
\r
  const curveData = useMemo(() => isCurveData ? customData : makeBaseCurve(params), [isCurveData, params, customData])\r
  useEffect(()=>{\r
    if (onCurveData) onCurveData(curveData)\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const margin={top:28,right:14,bottom:24,left:36}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const x=d3.scaleLinear().domain(d3.extent(curveData,d=>d.x)).range([0,width])\r
    const y=d3.scaleLinear().domain([0,80]).range([height,0])\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    // threshold bands\r
    const bands=[{y0:0,y1:25,col:'#fee2e2'},{y0:25,y1:50,col:'#fef3c7'},{y0:50,y1:80,col:'#dcfce7'}]\r
    bands.forEach(b=> g.append('rect').attr('x',0).attr('y',y(b.y1)).attr('width',width).attr('height',y(b.y0)-y(b.y1)).attr('fill',b.col).attr('opacity',0.48))\r
    g.append('g').call(d3.axisLeft(y).ticks(5).tickSize(-width).tickPadding(6))\r
      .call(g2=>g2.select('.domain').remove()).call(g2=>g2.selectAll('.tick line').attr('stroke','var(--border)').attr('stroke-dasharray','2,3'))\r
      .call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    g.append('g').attr('transform',\`translate(0,\${height})\`).call(d3.axisBottom(x).ticks(6).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    const area=d3.area().x(d=>x(d.x)).y0(y(0)).y1(d=>y(d.y)).curve(d3.curveBasis)\r
    const line=d3.line().x(d=>x(d.x)).y(d=>y(d.y)).curve(d3.curveBasis)\r
    g.append('path').datum(curveData).attr('d',area).attr('fill',colors[0]).attr('fill-opacity',0.22).attr('stroke','none')\r
    g.append('path').datum(curveData).attr('d',line).attr('fill','none').attr('stroke',colors[0]).attr('stroke-width',1.8)\r
    curveData.forEach(d=> g.append('circle').attr('cx',x(d.x)).attr('cy',y(d.y)).attr('r',1.6).attr('fill',colors[0]).attr('opacity',0.62))\r
    // thresholds\r
    ;[25,50].forEach(t=> g.append('line').attr('x1',0).attr('x2',width).attr('y1',y(t)).attr('y2',y(t)).attr('stroke','#64748b').attr('stroke-dasharray','4,3').attr('opacity',0.72))\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Area with Threshold Bands')\r
  },[params, curveData, onCurveData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};