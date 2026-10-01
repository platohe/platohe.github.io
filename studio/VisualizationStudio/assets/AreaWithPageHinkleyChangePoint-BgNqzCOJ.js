var e=`import { useEffect, useRef, useMemo } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
import { makeBaseCurve } from './areaParams'\r
export const meta = {\r
  id: 'area-with-page-hinkley-change-point',\r
  title: 'Area With Page Hinkley Change Point',\r
  desc: 'Area With Page Hinkley Change Point — a areas chart visualization',\r
  category: 'Areas',\r
  component: 'AreaWithPageHinkleyChangePoint',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["areas","area-with-page-hinkley-change-point"],\r
}\r
\r
export default function AreaWithPageHinkleyChangePoint({ data: customData, onCurveData }) {\r
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
    // Page-Hinkley test\r
    let mean=42, m2=0, sum=0, count=0\r
    const phData=curveData.map((d,i)=>{\r
      count++\r
      const diff=d.y-mean\r
      mean+=diff/count\r
      m2+=diff*(d.y-mean)\r
      const variance=m2/count\r
      const threshold=3*Math.sqrt(variance/count)\r
      const ph=Math.abs(d.y-mean)>threshold ? 1 : 0\r
      return {x:curveData[i].x, ph}\r
    })\r
    g.append('path').datum(curveData).attr('d',d3.area().x(d=>x(d.x)).y0(y(0)).y1(d=>y(d.y)).curve(d3.curveBasis))\r
      .attr('fill',colors[0]).attr('fill-opacity',0.18).attr('stroke',colors[0]).attr('stroke-width',1.6)\r
    g.append('path').datum(curveData).attr('d',d3.line().x(d=>x(d.x)).y(d=>y(d.y)).curve(d3.curveBasis))\r
      .attr('fill','none').attr('stroke',colors[0]).attr('stroke-width',1.8)\r
    curveData.forEach((d,i)=>{\r
      if(phData[i].ph===1){\r
        g.append('line').attr('x1',x(d.x)).attr('x2',x(d.x)).attr('y1',y(0)).attr('y2',y(80)).attr('stroke','#ef4444').attr('stroke-width',1.5).attr('stroke-dasharray','2,2')\r
      }\r
    })\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Area with Page-Hinkley')\r
  },[params, curveData, onCurveData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}`;export{e as default};