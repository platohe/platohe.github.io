var e=`import { useEffect, useRef, useMemo } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
import { makeBaseCurve } from './areaParams'\r
export const meta = {\r
  id: 'area-with-statistical-annotations',\r
  title: 'Area With Statistical Annotations',\r
  desc: 'Area With Statistical Annotations — a areas chart visualization',\r
  category: 'Areas',\r
  component: 'AreaWithStatisticalAnnotations',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["areas","area-with-statistical-annotations"],\r
}\r
\r
export default function AreaWithStatisticalAnnotations({ data: customData, onCurveData }) {\r
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
    const vals=curveData.map(d=>d.y)\r
    const mean=d3.mean(vals)||0, median=d3.median(vals)||0\r
    const q1=d3.quantile(vals.sort(d3.ascending),0.25)||0, q3=d3.quantile(vals.sort(d3.ascending),0.75)||0\r
    const iqr=q3-q1, lo=q1-1.5*iqr, hi=q3+1.5*iqr\r
    g.append('path').datum(curveData).attr('d',area).attr('fill',colors[0]).attr('fill-opacity',0.18).attr('stroke',colors[0]).attr('stroke-width',1.6)\r
    // Mean line\r
    g.append('line').attr('x1',0).attr('x2',width).attr('y1',y(mean)).attr('y2',y(mean)).attr('stroke','#f59e0b').attr('stroke-width',1.4).attr('stroke-dasharray','3,2')\r
    g.append('text').attr('x',width-2).attr('y',y(mean)-6).attr('text-anchor','end').attr('fill','#f59e0b').attr('font-size','7px').text(\`μ \${mean.toFixed(1)}\`)\r
    // Median line\r
    g.append('line').attr('x1',0).attr('x2',width).attr('y1',y(median)).attr('y2',y(median)).attr('stroke','#22c55e').attr('stroke-width',1.4).attr('stroke-dasharray','4,3')\r
    g.append('text').attr('x',width-2).attr('y',y(median)-6).attr('text-anchor','end').attr('fill','#22c55e').attr('font-size','7px').text(\`M \${median.toFixed(1)}\`)\r
    // IQR band\r
    g.append('rect').attr('x',0).attr('y',y(q3)).attr('width',width).attr('height',y(q1)-y(q3)).attr('fill','#6366f1').attr('fill-opacity',0.12)\r
    // Whiskers\r
    g.append('line').attr('x1',0).attr('x2',width).attr('y1',y(lo)).attr('y2',y(lo)).attr('stroke','#94a3b8').attr('stroke-width',1).attr('stroke-dasharray','2,2')\r
    g.append('line').attr('x1',0).attr('x2',width).attr('y1',y(hi)).attr('y2',y(hi)).attr('stroke','#94a3b8').attr('stroke-width',1).attr('stroke-dasharray','2,2')\r
    // Outliers\r
    const outlierVals=curveData.map(d=>d.y)\r
    vals.filter(v=>v<lo||v>hi).forEach(d=> {\r
      const idx=vals.findIndex(v=>v===d)\r
      g.append('circle').attr('cx',x(idx)).attr('cy',y(d)).attr('r',2.4).attr('fill','#ef4444').attr('stroke','var(--bg)')\r
    })\r
    g.append('path').datum(curveData).attr('d',area).attr('fill',colors[0]).attr('fill-opacity',0.18).attr('stroke',colors[0]).attr('stroke-width',1.6)\r
    g.append('path').datum(curveData).attr('d',d3.line().x(d=>x(d.x)).y(d=>y(d.y)).curve(d3.curveBasis)).attr('fill','none').attr('stroke',colors[0]).attr('stroke-width',1.8)\r
    g.append('g').attr('transform',\`translate(0,\${height})\`).call(d3.axisBottom(x).ticks(5).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    g.append('g').call(d3.axisLeft(y).ticks(5).tickSize(-width).tickPadding(6)).call(g2=>g2.select('.domain').remove()).call(g2=>g2.selectAll('.tick line').attr('stroke','var(--border)').attr('stroke-dasharray','2,3')).call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Area with Statistical Annotations')\r
  },[params, curveData, onCurveData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}`;export{e as default};