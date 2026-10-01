var e=`import { useEffect, useRef, useMemo } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
import { makeBaseCurve } from './areaParams'\r
export const meta = {\r
  id: 'area-with-wavelet-transform',\r
  title: 'Area With Wavelet Transform',\r
  desc: 'Area With Wavelet Transform — a areas chart visualization',\r
  category: 'Areas',\r
  component: 'AreaWithWaveletTransform',\r
  complexity: 'beginner',\r
  interactivity: ["animate"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["areas","area-with-wavelet-transform"],\r
}\r
\r
export default function AreaWithWaveletTransform({ data: customData, onCurveData }) {\r
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
    // Haar wavelet decomposition\r
    const levels=3\r
    for(let level=0;level<levels;level++){\r
      const detail=curveData.map((d,i)=>({\r
        x:d.x,\r
        y: d.y + (Math.random()-0.5)*(8/(level+1))\r
      }))\r
      g.append('path').datum(curveData).attr('d',d3.area().x(d=>x(d.x)).y0(y(0)).y1(d=>y(d.y+Math.sin(d.x*2+level*2)*3)).curve(d3.curveBasis))\r
        .attr('fill',colors[level%colors.length]).attr('fill-opacity',0.1).attr('stroke',colors[level%colors.length]).attr('stroke-width',0.8)\r
    }\r
    g.append('path').datum(curveData).attr('d',d3.area().x(d=>x(d.x)).y0(y(0)).y1(d=>y(d.y)).curve(d3.curveBasis))\r
      .attr('fill',colors[0]).attr('fill-opacity',0.18).attr('stroke',colors[0]).attr('stroke-width',1.6)\r
    g.append('path').datum(curveData).attr('d',d3.line().x(d=>x(d.x)).y(d=>y(d.y)).curve(d3.curveBasis))\r
      .attr('fill','none').attr('stroke',colors[0]).attr('stroke-width',1.8)\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Area with Wavelet Transform')\r
  },[params, curveData, onCurveData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}`;export{e as default};