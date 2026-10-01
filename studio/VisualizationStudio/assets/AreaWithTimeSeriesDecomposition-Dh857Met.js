var e=`import { useEffect, useRef, useMemo } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
import { makeBaseCurve } from './areaParams'\r
export const meta = {\r
  id: 'area-with-time-series-decomposition',\r
  title: 'Area With Time Series Decomposition',\r
  desc: 'Area With Time Series Decomposition — a areas chart visualization',\r
  category: 'Areas',\r
  component: 'AreaWithTimeSeriesDecomposition',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["areas","area-with-time-series-decomposition"],\r
}\r
\r
export default function AreaWithTimeSeriesDecomposition({ data: customData, onCurveData }) {\r
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
    // STL decomposition\r
    const period=12\r
    const trend=curveData.map((_,i)=>{\r
      const slice=curveData.slice(Math.max(0,i-5),i+6)\r
      return {x:curveData[i].x, y:d3.mean(slice.map(d=>d.y))||0}\r
    })\r
    const detrended=curveData.map((d,i)=>({x:d.x, y:d.y - (trend[i]?.y||d.y)}))\r
    // Original\r
    g.append('path').datum(curveData).attr('d',d3.area().x(d=>x(d.x)).y0(y(0)).y1(d=>y(d.y)).curve(d3.curveBasis))\r
      .attr('fill',colors[0]).attr('fill-opacity',0.18).attr('stroke',colors[0]).attr('stroke-width',1.6)\r
    // Trend\r
    g.append('path').datum(curveData.map((d,i)=>({x:curveData[i].x, y:trend[i]?.y||d.y}))).attr('d',d3.line().x(d=>x(d.x)).y(d=>y(d.y)).curve(d3.curveBasis))\r
      .attr('fill','none').attr('stroke','#f59e0b').attr('stroke-width',2).attr('stroke-dasharray','3,2')\r
    // Seasonal\r
    const seasonalVals=d3.range(12).map(k=>{\r
      const vals=curveData.map((d,i)=>({ v:d.y-(trend[i]?.y||0), i }))\r
      return d3.mean(vals.filter(o=>o.i%12===k).map(o=>o.v))||0\r
    })\r
    const seasonalData=curveData.map((d,i)=>({x:d.x, y:42+seasonalVals[i%12]}))\r
    g.append('path').datum(seasonalData).attr('d',d3.area().x(d=>x(d.x)).y0(y(42)).y1(d=>y(d.y)).curve(d3.curveBasis))\r
      .attr('fill','#3b82f6').attr('fill-opacity',0.1).attr('stroke','#3b82f6').attr('stroke-width',0.8)\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Area with Time Series Decomposition')\r
  },[params, curveData, onCurveData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}`;export{e as default};