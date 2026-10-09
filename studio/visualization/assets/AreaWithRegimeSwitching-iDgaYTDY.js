var e=`import { useEffect, useRef, useMemo } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
import { makeBaseCurve } from './areaParams'\r
export const meta = {\r
  id: 'area-with-regime-switching',\r
  title: 'Area With Regime Switching',\r
  desc: 'Area With Regime Switching — a areas chart visualization',\r
  category: 'Areas',\r
  component: 'AreaWithRegimeSwitching',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["areas","area-with-regime-switching"],\r
}\r
\r
export default function AreaWithRegimeSwitching({ data: customData, onCurveData }) {\r
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
    // Regime detection\r
    const regimes=[]\r
    let currentRegime=0\r
    curveData.forEach((d,i)=>{\r
      if(i>0 && Math.abs(d.y-curveData[i-1].y)>10) regimes.push({x:d.x, from:curveData[i-1].y, to:d.y})\r
    })\r
    const area=d3.area().x(d=>x(d.x)).y0(y(0)).y1(d=>y(d.y)).curve(d3.curveBasis)\r
    g.append('path').datum(curveData).attr('d',area).attr('fill',colors[0]).attr('fill-opacity',0.18).attr('stroke',colors[0]).attr('stroke-width',1.6)\r
    // Regime boundaries\r
    curveData.filter((d,i)=>i>0 && Math.abs(d.y-curveData[i-1].y)>10).forEach(c=>{\r
      g.append('line').attr('x1',x(c.x)).attr('x2',x(c.x)).attr('y1',y(0)).attr('y2',y(80)).attr('stroke','#ef4444').attr('stroke-width',2).attr('stroke-dasharray','4,4')\r
      g.append('text').attr('x',x(c.x)).attr('y',10).attr('text-anchor','middle').attr('fill','#ef4444').attr('font-size','6px').attr('font-weight',600).text('Regime Change')\r
    })\r
    g.append('path').datum(curveData).attr('d',d3.area().x(d=>x(d.x)).y0(y(0)).y1(d=>y(d.y)).curve(d3.curveBasis)).attr('fill',colors[0]).attr('fill-opacity',0.18).attr('stroke',colors[0]).attr('stroke-width',1.6)\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Area with Regime Switching')\r
  },[params, curveData, onCurveData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}`;export{e as default};