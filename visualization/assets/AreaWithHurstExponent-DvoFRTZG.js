var e=`import { useEffect, useRef, useMemo } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
import { makeBaseCurve } from './areaParams'\r
export const meta = {\r
  id: 'area-with-hurst-exponent',\r
  title: 'Area With Hurst Exponent',\r
  desc: 'Area With Hurst Exponent — a areas chart visualization',\r
  category: 'Areas',\r
  component: 'AreaWithHurstExponent',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["areas","area-with-hurst-exponent"],\r
}\r
\r
export default function AreaWithHurstExponent({ data: customData, onCurveData }) {\r
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
    // Hurst exponent (R/S analysis)\r
    const window=10\r
    const hurst=curveData.map((_,i)=>{\r
      if(i<5||i>=curveData.length-5) return {x:curveData[i].x, h:0.5}\r
      const slice=curveData.slice(i-5,i+5)\r
      const vals=slice.map(d=>d.y)\r
      // R/S analysis\r
      const mean=d3.mean(vals)||0\r
      const deviations=vals.map(v=>v-d3.mean(vals)||0)\r
      const cumDev=d3.cumsum(deviations)\r
      const R=d3.max(cumDev)-d3.min(cumDev)\r
      const S=d3.deviation(vals)||1\r
      return {x:curveData[i].x, h:S>0?Math.log(R/S)/Math.log(10):0.5}\r
    })\r
    g.append('path').datum(curveData).attr('d',d3.area().x(d=>x(d.x)).y0(y(0)).y1(d=>y(d.y)).curve(d3.curveBasis))\r
      .attr('fill',colors[0]).attr('fill-opacity',0.18).attr('stroke',colors[0]).attr('stroke-width',1.6)\r
    g.append('path').datum(curveData).attr('d',d3.line().x(d=>x(d.x)).y(d=>y(d.y)).curve(d3.curveBasis))\r
      .attr('fill','none').attr('stroke',colors[0]).attr('stroke-width',1.8)\r
    // Hurst overlay\r
    const hScale=d3.scaleLinear().domain([0,1]).range([height,0])\r
    g.append('path').datum(curveData).attr('d',d3.line().x(d=>x(d.x)).y(d=>hScale(d.hurst||0.5)).curve(d3.curveBasis))\r
      .attr('fill','none').attr('stroke','#f59e0b').attr('stroke-width',1.2).attr('stroke-dasharray','3,2')\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Area with Hurst Exponent')\r
  },[params, curveData, onCurveData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}`;export{e as default};