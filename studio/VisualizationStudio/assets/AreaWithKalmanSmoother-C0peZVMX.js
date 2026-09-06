var e=`import { useEffect, useRef, useMemo } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
import { makeBaseCurve } from './areaParams'\r
export const meta = {\r
  id: 'area-with-kalman-smoother',\r
  title: 'Area With Kalman Smoother',\r
  desc: 'Area With Kalman Smoother — a areas chart visualization',\r
  category: 'Areas',\r
  component: 'AreaWithKalmanSmoother',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["areas","area-with-kalman-smoother"],\r
}\r
\r
export default function AreaWithKalmanSmoother({ data: customData, onCurveData }) {\r
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
    // Kalman smoother (Rauch-Tung-Striebel)\r
    let xEst=42, P=10, Q=0.1, R=5\r
    const filtered=[]\r
    curveData.forEach((d)=>{\r
      if(filtered.length===0){ filtered.push({x:d.x, y:d.y, P:10}); return }\r
      const x_pred=filtered[filtered.length-1].x\r
      const P_pred=filtered[filtered.length-1].P + Q\r
      const K=P_pred/(P_pred+R)\r
      const x_new=x_pred + K*(d.y-x_pred)\r
      const P_new=(1-K)*P_pred\r
      filtered.push({x:d.x, y:x_new, P:P_new})\r
    })\r
    const smoothed=[]\r
    let x_s=filtered[filtered.length-1].y, P_s=filtered[filtered.length-1].P\r
    for(let i=curveData.length-1;i>=0;i--){\r
      const C=filtered[i].P/(filtered[i].P+0.1)\r
      const x_s_new=filtered[i].y + C*(x_s-filtered[i].y)\r
      const P_s_new=filtered[i].P + C*C*(filtered[i].P-filtered[i].P)\r
      smoothed.unshift({x:curveData[i].x, y:x_s_new})\r
      x_s=x_s_new\r
    }\r
    g.append('path').datum(curveData).attr('d',d3.area().x(d=>x(d.x)).y0(y(0)).y1(d=>y(d.y)).curve(d3.curveBasis))\r
      .attr('fill',colors[0]).attr('fill-opacity',0.18).attr('stroke',colors[0]).attr('stroke-width',1.6)\r
    g.append('path').datum(curveData).attr('d',d3.line().x(d=>x(d.x)).y(d=>y(d.y)).curve(d3.curveBasis))\r
      .attr('fill','none').attr('stroke',colors[0]).attr('stroke-width',1.8)\r
    g.append('path').datum(smoothed).attr('d',d3.line().x(d=>x(d.x)).y(d=>y(d.y)).curve(d3.curveBasis))\r
      .attr('fill','none').attr('stroke','#22c55e').attr('stroke-width',1.4).attr('stroke-dasharray','3,2')\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Area with Kalman Smoother')\r
  },[params, curveData, onCurveData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}`;export{e as default};