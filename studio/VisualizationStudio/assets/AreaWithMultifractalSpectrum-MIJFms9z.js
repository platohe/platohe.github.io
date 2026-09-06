var e=`import { useEffect, useRef, useMemo } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
import { makeBaseCurve } from './areaParams'\r
export const meta = {\r
  id: 'area-with-multifractal-spectrum',\r
  title: 'Area With Multifractal Spectrum',\r
  desc: 'Area With Multifractal Spectrum — a areas chart visualization',\r
  category: 'Areas',\r
  component: 'AreaWithMultifractalSpectrum',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["areas","area-with-multifractal-spectrum"],\r
}\r
\r
export default function AreaWithMultifractalSpectrum({ data: customData, onCurveData }) {\r
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
    // Multifractal spectrum (Legendre transform)\r
    const qValues=d3.range(-3,3.5,0.5)\r
    const spectrum=qValues.map(q=>{\r
      if(q===0) return {q, alpha:0, f:1}\r
      const sum=d3.sum(curveData,d=>Math.pow(d.y/80,q))\r
      const tau=sum>0?Math.log(sum)/Math.log(2):0\r
      const alpha=tau/q\r
      return {q, alpha, f:1-Math.abs(q)/3}\r
    })\r
    const area=d3.area().x(d=>x(d.x)).y0(y(0)).y1(d=>y(d.y)).curve(d3.curveBasis)\r
    g.append('path').datum(curveData).attr('d',area).attr('fill',colors[0]).attr('fill-opacity',0.18).attr('stroke',colors[0]).attr('stroke-width',1.6)\r
    g.append('path').datum(curveData).attr('d',d3.line().x(d=>x(d.x)).y(d=>y(d.y)).curve(d3.curveBasis)).attr('fill','none').attr('stroke',colors[0]).attr('stroke-width',1.8)\r
    // Multifractal spectrum overlay\r
    const alphaScale=d3.scaleLinear().domain([0,1]).range([width,0])\r
    const fScale=d3.scaleLinear().domain([0,1]).range([height,0])\r
    g.append('path').datum(spectrum).attr('d',d3.line().x(d=>alphaScale(d.alpha)).y(d=>height-fScale(d.f)).curve(d3.curveBasis))\r
      .attr('fill','none').attr('stroke','#f59e0b').attr('stroke-width',2).attr('stroke-dasharray','3,2')\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Area with Multifractal Spectrum')\r
  },[params, curveData, onCurveData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}`;export{e as default};