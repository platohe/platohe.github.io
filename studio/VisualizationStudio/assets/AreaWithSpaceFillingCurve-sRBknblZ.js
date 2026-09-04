var e=`import { useEffect, useRef, useMemo } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
import { makeBaseCurve } from './areaParams'\r
export const meta = {\r
  id: 'area-with-space-filling-curve',\r
  title: 'Area With Space Filling Curve',\r
  desc: 'Area With Space Filling Curve — a areas chart visualization',\r
  category: 'Areas',\r
  component: 'AreaWithSpaceFillingCurve',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["areas","area-with-space-filling-curve"],\r
}\r
\r
export default function AreaWithSpaceFillingCurve({ data: customData, onCurveData }) {\r
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
    // Local Gosper curve via L-system\r
    let seq='A'\r
    for(let k=0;k<3;k++) seq=seq.replace(/[AB]/g, c => c==='A' ? 'A-B--A+B-AA-A-A+B+A' : '+A-BB-B--A-B+A+AA-B-')\r
    const angleDeg=60\r
    let cx=0, cy=0, heading=0\r
    const pts=[[0,0]]\r
    for(const ch of seq){\r
      if(ch==='A'||ch==='B'){ const rad=heading*Math.PI/180; cx+=Math.cos(rad); cy+=Math.sin(rad); pts.push([cx,cy]) }\r
      else if(ch==='+') heading+=angleDeg\r
      else if(ch==='-') heading-=angleDeg\r
    }\r
    const stepScale=width/Math.max(1,Math.sqrt(pts.length)*2)\r
    const scaled=pts.map(p=>[p[0]*stepScale,p[1]*stepScale])\r
    g.append('path').datum(scaled).attr('d',d3.line().x(d=>d[0]).y(d=>d[1]).curve(d3.curveBasis))\r
      .attr('fill','none').attr('stroke',colors[0]).attr('stroke-width',1).attr('opacity',0.4)\r
    const area=d3.area().x(d=>x(d.x)).y0(y(0)).y1(d=>y(d.y)).curve(d3.curveBasis)\r
    g.append('path').datum(curveData).attr('d',d3.area().x(d=>x(d.x)).y0(y(0)).y1(d=>y(d.y)).curve(d3.curveBasis))\r
      .attr('fill',colors[0]).attr('fill-opacity',0.18).attr('stroke',colors[0]).attr('stroke-width',1.6)\r
    g.append('path').datum(curveData).attr('d',d3.line().x(d=>x(d.x)).y(d=>y(d.y)).curve(d3.curveBasis))\r
      .attr('fill','none').attr('stroke',colors[0]).attr('stroke-width',1.8)\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Area with Space-Filling Curve')\r
  },[params, curveData, onCurveData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}`;export{e as default};