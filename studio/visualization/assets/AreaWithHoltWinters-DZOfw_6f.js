var e=`import { useEffect, useRef, useMemo } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
import { makeBaseCurve } from './areaParams'\r
export const meta = {\r
  id: 'area-with-holt-winters',\r
  title: 'Area With Holt Winters',\r
  desc: 'Area With Holt Winters — a areas chart visualization',\r
  category: 'Areas',\r
  component: 'AreaWithHoltWinters',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["areas","area-with-holt-winters"],\r
}\r
\r
export default function AreaWithHoltWinters({ data: customData, onCurveData }) {\r
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
    // Holt-Winters (triple exponential smoothing)\r
    const alpha=0.3, beta=0.1, gamma=0.1\r
    const period=12\r
    let level=curveData[0].y, trend=0\r
    const seasonal=Array(12).fill(0)\r
    const smoothed=[]\r
    curveData.forEach((d,i)=>{\r
      const idx=i%12\r
      const prevLevel=smoothed[smoothed.length-1]?.level||curveData[0].y\r
      const prevTrend=smoothed[smoothed.length-1]?.trend||0\r
      const prevSeasonal=smoothed[smoothed.length-12]?.seasonal||0\r
      const newLevel=alpha*(d.y-prevSeasonal)+(1-alpha)*(prevLevel+prevTrend)\r
      const newTrend=beta*(newLevel-prevLevel)+(1-beta)*prevTrend\r
      const newSeasonal=gamma*(d.y-newLevel)+(1-gamma)*prevSeasonal\r
      smoothed.push({level:newLevel, trend:newTrend, seasonal:newSeasonal})\r
    })\r
    g.append('path').datum(curveData).attr('d',d3.area().x(d=>x(d.x)).y0(y(0)).y1(d=>y(d.y)).curve(d3.curveBasis))\r
      .attr('fill',colors[0]).attr('fill-opacity',0.18).attr('stroke',colors[0]).attr('stroke-width',1.6)\r
    g.append('path').datum(curveData).attr('d',d3.line().x(d=>x(d.x)).y(d=>y(d.y)).curve(d3.curveBasis))\r
      .attr('fill','none').attr('stroke',colors[0]).attr('stroke-width',1.8)\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Area with Holt-Winters')\r
  },[params, curveData, onCurveData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}`;export{e as default};