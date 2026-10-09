var e=`import { useEffect, useRef, useMemo } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
import { makeBaseCurve } from './areaParams'\r
export const meta = {\r
  id: 'area-with-percentile-bands',\r
  title: 'Area With Percentile Bands',\r
  desc: 'Area With Percentile Bands — a areas chart visualization',\r
  category: 'Areas',\r
  component: 'AreaWithPercentileBands',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["areas","area-with-percentile-bands"],\r
}\r
\r
export default function AreaWithPercentileBands({ data: customData, onCurveData }) {\r
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
    const area=d3.area().x(d=>x(d.x)).y0(y(0)).y1(d=>y(d.y)).curve(d3.curveBasis)\r
    const vals=curveData.map(d=>d.y).sort(d3.ascending)\r
    const p10=d3.quantile(vals,0.10)||0, p25=d3.quantile(vals,0.25)||0, p50=d3.quantile(vals,0.50)||0, p75=d3.quantile(vals,0.75)||0, p90=d3.quantile(vals,0.90)||0\r
    // Percentile bands\r
    const bands=[[p10,p90,'#dbeafe'],[p25,p75,'#bfdbfe'],[p50,p50,'#3b82f6']]\r
    bands.forEach(([lo,hi,col])=>{\r
      g.append('rect').attr('x',0).attr('y',y(hi)).attr('width',width).attr('height',y(lo)-y(hi)).attr('fill',col).attr('fill-opacity',0.2)\r
    })\r
    g.append('path').datum(curveData).attr('d',area).attr('fill',colors[0]).attr('fill-opacity',0.18).attr('stroke',colors[0]).attr('stroke-width',1.6)\r
    g.append('path').datum(curveData).attr('d',d3.line().x(d=>x(d.x)).y(d=>y(d.y)).curve(d3.curveBasis)).attr('fill','none').attr('stroke',colors[0]).attr('stroke-width',1.8)\r
    g.append('g').attr('transform',\`translate(0,\${height})\`).call(d3.axisBottom(x).ticks(5).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    g.append('g').call(d3.axisLeft(y).ticks(5).tickSize(-width).tickPadding(6)).call(g2=>g2.select('.domain').remove()).call(g2=>g2.selectAll('.tick line').attr('stroke','var(--border)').attr('stroke-dasharray','2,3')).call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    // Labels\r
    const percentiles=[{p:p10,l:'P10'},{p:p25,l:'P25'},{p:p50,l:'P50'},{p:p75,l:'P75'},{p:p90,l:'P90'}]\r
    percentiles.forEach(p=>{ g.append('line').attr('x1',width-50).attr('x2',width-30).attr('y1',y(p.p)).attr('y2',y(p.p)).attr('stroke','#94a3b8').attr('stroke-width',1).attr('stroke-dasharray','2,2'); g.append('text').attr('x',width-52).attr('y',y(p.p)+3).attr('text-anchor','end').attr('fill','var(--text-secondary)').attr('font-size','6px').text(\`\${p.l} \${p.p.toFixed(1)}\`) })\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Area with Percentile Bands')\r
  },[params, curveData, onCurveData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}`;export{e as default};