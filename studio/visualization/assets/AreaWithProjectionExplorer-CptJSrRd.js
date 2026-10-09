var e=`import { useEffect, useRef, useMemo } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
import { makeBaseCurve } from './areaParams'\r
export const meta = {\r
  id: 'area-with-projection-explorer',\r
  title: 'Area With Projection Explorer',\r
  desc: 'Area With Projection Explorer — a areas chart visualization',\r
  category: 'Areas',\r
  component: 'AreaWithProjectionExplorer',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["areas","area-with-projection-explorer"],\r
}\r
\r
export default function AreaWithProjectionExplorer({ data: customData, onCurveData }) {\r
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
    // Projection transformation visualization\r
    const projections=['linear','log','sqrt','pow']\r
    projections.forEach((proj,i)=>{\r
      let scale\r
      switch(proj){\r
        case 'linear': scale=d3.scaleLinear().domain([0,80]).range([height,0]); break\r
        case 'log': scale=d3.scaleLog().domain([1,80]).range([height,0]); break\r
        case 'sqrt': scale=d3.scaleSqrt().domain([0,80]).range([height,0]); break\r
        case 'pow': scale=d3.scalePow().exponent(0.5).domain([0,80]).range([height,0]); break\r
      }\r
      const x=d3.scaleLinear().domain(d3.extent(curveData,d=>d.x)).range([0,width])\r
      const y0 = proj === 'log' ? scale(1) : scale(0);\r
      const area=d3.area().x(d=>x(d.x)).y0(y0).y1(d=>scale(d.y)).curve(d3.curveBasis)\r
      const gg=g.append('g').attr('transform',\`translate(0,\${i*height/4})\`)\r
      gg.append('path').datum(curveData).attr('d',area).attr('fill',colors[i%colors.length]).attr('fill-opacity',0.18).attr('stroke',colors[i%colors.length]).attr('stroke-width',1.2)\r
      gg.append('text').attr('x',10).attr('y',14).attr('fill',colors[i%colors.length]).attr('font-size','7px').attr('font-weight',600).text(proj)\r
    })\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Area with Projection Explorer')\r
  },[params, curveData, onCurveData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}`;export{e as default};