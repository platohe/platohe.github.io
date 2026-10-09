var e=`import { useEffect, useRef, useMemo } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
import { makeBaseCurve } from './areaParams'\r
export const meta = {\r
  id: 'area-with-trendline-ribbon',\r
  title: 'Area With Trendline Ribbon',\r
  desc: 'Area With Trendline Ribbon — a areas chart visualization',\r
  category: 'Areas',\r
  component: 'AreaWithTrendlineRibbon',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["areas","area-with-trendline-ribbon"],\r
}\r
\r
export default function AreaWithTrendlineRibbon({ data: customData, onCurveData }) {\r
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
    // Linear regression trendline\r
    const n=curveData.length\r
    const sumX=d3.sum(curveData,d=>d.x), sumY=d3.sum(curveData,d=>d.y), sumXY=d3.sum(curveData,d=>d.x*d.y), sumXX=d3.sum(curveData,d=>d.x*d.x)\r
    const slope=(n*d3.sum(curveData,d=>d.x*d.y)-d3.sum(curveData,d=>d.x)*d3.sum(curveData,d=>d.y))/(n*d3.sum(curveData,d=>d.x*d.x)-d3.sum(curveData,d=>d.x)*d3.sum(curveData,d=>d.x))||0\r
    const intercept=(d3.sum(curveData,d=>d.y)-slope*d3.sum(curveData,d=>d.x))/n||0\r
    // Data area with ribbon\r
    g.append('path').datum(curveData).attr('d',d3.area().x(d=>x(d.x)).y0(d=>y(d.y+3)).y1(d=>y(d.y-3)).curve(d3.curveBasis)).attr('fill',colors[0]).attr('fill-opacity',0.12)\r
    // Data line\r
    g.append('path').datum(curveData).attr('d',d3.line().x(d=>x(d.x)).y(d=>y(d.y)).curve(d3.curveBasis)).attr('fill','none').attr('stroke',colors[0]).attr('stroke-width',1.8)\r
    // Trendline\r
    g.append('path').datum(curveData).attr('d',d3.line().x(d=>x(d.x)).y(d=>y(slope*d.x+intercept)).curve(d3.curveBasis)).attr('fill','none').attr('stroke','#f59e0b').attr('stroke-width',1.4).attr('stroke-dasharray','3,2')\r
    g.append('g').attr('transform',\`translate(0,\${height})\`).call(d3.axisBottom(x).ticks(5).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    g.append('g').call(d3.axisLeft(y).ticks(5).tickSize(-width).tickPadding(6)).call(g2=>g2.select('.domain').remove()).call(g2=>g2.selectAll('.tick line').attr('stroke','var(--border)').attr('stroke-dasharray','2,3')).call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Area with Trendline Ribbon')\r
  },[params, curveData, onCurveData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}`;export{e as default};