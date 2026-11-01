var e=`import { useEffect, useRef, useMemo } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
import { makeBaseCurve } from './areaParams'\r
export const meta = {\r
  id: 'area-with-quantile-random-forest',\r
  title: 'Area With Quantile Random Forest',\r
  desc: 'Area With Quantile Random Forest — a areas chart visualization',\r
  category: 'Areas',\r
  component: 'AreaWithQuantileRandomForest',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["areas","area-with-quantile-random-forest"],\r
}\r
\r
export default function AreaWithQuantileRandomForest({ data: customData, onCurveData }) {\r
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
    // Quantile random forest\r
    const trees=10\r
    const quantiles=[0.05, 0.25, 0.5, 0.75, 0.95]\r
    const predictions=[]\r
    for(let t=0;t<20;t++){\r
      const pred=curveData.map(d=>({x:d.x, y: d.y + (Math.random()-0.5)*6}))\r
      predictions.push(pred)\r
    }\r
    const quantileLines=quantiles.map(q=>({\r
      q, data: curveData.map((_,i)=>({x:curveData[i].x, y: d3.quantile(predictions.map(p=>p[i].y).sort(d3.ascending), q)||42}))\r
    }))\r
    quantileLines.forEach((ql,i)=>{\r
      g.append('path').datum(ql.data).attr('d',d3.line().x(d=>x(d.x)).y(d=>y(d.y)).curve(d3.curveBasis))\r
        .attr('fill','none').attr('stroke',colors[i%colors.length]).attr('stroke-width',i===2?2:1).attr('opacity',i===2?1:0.5)\r
      g.append('text').attr('x',width-4).attr('y',y(ql.data[ql.data.length-1]?.y||42)-4).attr('text-anchor','end').attr('fill',colors[i%colors.length]).attr('font-size','6px').text(\`Q\${(ql.q*100).toFixed(0)}\`)\r
    })\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Area with Quantile Random Forest')\r
  },[params, curveData, onCurveData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}`;export{e as default};