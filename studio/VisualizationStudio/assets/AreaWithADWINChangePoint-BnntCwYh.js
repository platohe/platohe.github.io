var e=`import { useEffect, useRef, useMemo } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
import { makeBaseCurve } from './areaParams'\r
export const meta = {\r
  id: 'area-with-adwinchange-point',\r
  title: 'Area With A D W I N Change Point',\r
  desc: 'Area With A D W I N Change Point — a areas chart visualization',\r
  category: 'Areas',\r
  component: 'AreaWithADWINChangePoint',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["areas","area-with-a-d-w-i-n-change-point"],\r
}\r
\r
export default function AreaWithADWINChangePoint({ data: customData, onCurveData }) {\r
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
    // ADWIN algorithm\r
    const delta=0.002, window=[]\r
    const detections=[]\r
    curveData.forEach((d,i)=>{\r
      window.push(d.y)\r
      if(window.length>100) window.shift()\r
      if(window.length>30){\r
        const mean=d3.mean(window)||42\r
        const variance=d3.variance(window)||1\r
        const epsilon=Math.sqrt(Math.log(2/0.05)/(2*window.length))*Math.sqrt(variance)\r
        if(Math.abs(d.y-mean)>epsilon*2) detections.push({x:curveData[i].x, y:d.y})\r
      }\r
    })\r
    const area=d3.area().x(d=>x(d.x)).y0(y(0)).y1(d=>y(d.y)).curve(d3.curveBasis)\r
    g.append('path').datum(curveData).attr('d',area).attr('fill',colors[0]).attr('fill-opacity',0.18).attr('stroke',colors[0]).attr('stroke-width',1.6)\r
    // ADWIN detections\r
    detections.forEach(d=>{\r
      g.append('line').attr('x1',x(d.x)).attr('x2',x(d.x)).attr('y1',y(0)).attr('y2',y(80)).attr('stroke','#ef4444').attr('stroke-width',1.5).attr('stroke-dasharray','2,2')\r
      g.append('text').attr('x',x(d.x)).attr('y',10).attr('text-anchor','middle').attr('fill','#ef4444').attr('font-size','6px').attr('font-weight',600).text('ADWIN')\r
    })\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Area with ADWIN Change Point')\r
  },[params, curveData, onCurveData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}`;export{e as default};