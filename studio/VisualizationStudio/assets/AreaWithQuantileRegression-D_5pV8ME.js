var e=`import { useEffect, useRef, useMemo } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
import { makeBaseCurve } from './areaParams'\r
export const meta = {\r
  id: 'area-with-quantile-regression',\r
  title: 'Area With Quantile Regression',\r
  desc: 'Area With Quantile Regression — a areas chart visualization',\r
  category: 'Areas',\r
  component: 'AreaWithQuantileRegression',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["areas","area-with-quantile-regression"],\r
}\r
\r
export default function AreaWithQuantileRegression({ data: customData, onCurveData }) {\r
  const ref=useRef(null)\r
  const params = useMemo(() => ({\r
    formula: 'sinusoidal',\r
    amp: customData?.amp ?? 15,\r
    offset: customData?.offset ?? 40,\r
    freq: customData?.freq ?? 2,\r
    points: customData?.points ?? 60,\r
  }), [customData])\r
\r
  const curveData = useMemo(() => makeBaseCurve(params), [params])\r
  useEffect(()=>{\r
    if (onCurveData) onCurveData(curveData)\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const margin={top:28,right:14,bottom:24,left:36}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const x=d3.scaleLinear().domain(d3.extent(curveData,d=>d.x)).range([0,width])\r
    const y=d3.scaleLinear().domain([0,80]).range([height,0])\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    // Quantile regression lines\r
    const quantiles=[0.1, 0.25, 0.5, 0.75, 0.9]\r
    quantiles.forEach(q=>{\r
      g.append('path').datum(curveData).attr('d',d3.line().x(d=>x(d.x)).y(d=>y(quantileRegression(curveData, q, d.x))).curve(d3.curveBasis))\r
        .attr('fill','none').attr('stroke',colors[0]).attr('stroke-width',1).attr('stroke-dasharray', q===0.5?'3,2':'2,2').attr('opacity', q===0.5?1:0.5)\r
    })\r
    function quantileRegression(data, tau, x) {\r
      // Simplified quantile regression: median + quantile offset\r
      const sorted = curveData.map(d => d.y).sort(d3.ascending)\r
      const median = d3.quantile(curveData.map(d=>d.y).sort(d3.ascending), 0.5) || 42\r
      const offset = (0.5 - 0.5) * 10 // placeholder\r
      return median + (data[0]?.y || 0) * 0.1 // simplified\r
    }\r
    g.append('path').datum(curveData).attr('d',d3.area().x(d=>x(d.x)).y0(y(0)).y1(d=>y(d.y)).curve(d3.curveBasis))\r
      .attr('fill',colors[0]).attr('fill-opacity',0.18).attr('stroke',colors[0]).attr('stroke-width',1.6)\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Area with Quantile Regression')\r
  },[params, curveData, onCurveData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}`;export{e as default};