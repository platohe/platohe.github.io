var e=`import { useEffect, useRef, useMemo } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
import { makeBaseCurve } from './areaParams'\r
export const meta = {\r
  id: 'area-with-radial-axis',\r
  title: 'Area With Radial Axis',\r
  desc: 'Area With Radial Axis — a areas chart visualization',\r
  category: 'Areas',\r
  component: 'AreaWithRadialAxis',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["areas","area-with-radial-axis"],\r
}\r
\r
export default function AreaWithRadialAxis({ data: customData, onCurveData }) {\r
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
    // Radial axis\r
    const cx=width/2, cy=height/2, radius=Math.min(width,height)/2-30\r
    const g=svg.append('g').attr('transform',\`translate(\${cx},\${cy})\`)\r
    const radiusScale=d3.scaleLinear().domain([0,80]).range([0,radius])\r
    // Radial grid\r
    for(let i=10;i<=80;i+=10){\r
      g.append('circle').attr('r',radiusScale(i)).attr('fill','none').attr('stroke','var(--border)').attr('stroke-dasharray','2,3')\r
      g.append('text').attr('x',0).attr('y',-radiusScale(i)-4).attr('text-anchor','middle').attr('fill','var(--text-secondary)').attr('font-size','6px').text(i)\r
    }\r
    // Spokes\r
    for(let a=0;a<360;a+=30){\r
      g.append('line').attr('x1',0).attr('y1',0).attr('x2',radiusScale(80)*Math.cos(a*Math.PI/180)).attr('y2',radiusScale(80)*Math.sin(a*Math.PI/180)).attr('stroke','var(--border)').attr('stroke-dasharray','2,3')\r
    }\r
    // Data as radial area\r
    const area=d3.areaRadial().angle(d=>x(d.x)).innerRadius(0).outerRadius(d=>radiusScale(d.y)).curve(d3.curveBasisClosed)\r
    svg.append('g').attr('transform',\`translate(\${cx},\${cy})\`).append('path').datum(curveData).attr('d',area).attr('fill',colors[0]).attr('fill-opacity',0.2).attr('stroke',colors[0]).attr('stroke-width',1.6)\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Area with Radial Axis')\r
  },[params, curveData, onCurveData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}`;export{e as default};