var e=`import { useEffect, useRef, useMemo } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
import { makeBaseCurve } from './areaParams'\r
export const meta = {\r
  id: 'area-with-rolling-correlation',\r
  title: 'Area With Rolling Correlation',\r
  desc: 'Area With Rolling Correlation — a areas chart visualization',\r
  category: 'Areas',\r
  component: 'AreaWithRollingCorrelation',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["areas","area-with-rolling-correlation"],\r
}\r
\r
export default function AreaWithRollingCorrelation({ data: customData, onCurveData }) {\r
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
    // Rolling correlation\r
    const window=10\r
    const corr=curveData.map((_,i)=>{\r
      if(i<10) return {x:curveData[i].x, r:0}\r
      const slice1=curveData.slice(i-10,i).map(d=>d.y1??d.y)\r
      const slice2=curveData.slice(i-10,i).map(d=>d.y2??d.y)\r
      const mean1=d3.mean(slice1)||0, mean2=d3.mean(slice2)||0\r
      const cov=d3.mean(slice1.map((v,i)=>v*slice2[i]))||0\r
      const std1=d3.deviation(slice1)||1, std2=d3.deviation(slice2)||1\r
      return {x:curveData[i].x, r:std1*std2>0?(cov-mean1*mean2)/(std1*std2):0}\r
    })\r
    const area=d3.area().x(d=>x(d.x)).y0(y(0)).y1(d=>y(d.y1??d.y)).curve(d3.curveBasis)\r
    g.append('path').datum(curveData).attr('d',d3.area().x(d=>x(d.x)).y0(y(0)).y1(d=>y(d.y1??d.y)).curve(d3.curveBasis))\r
      .attr('fill',colors[0]).attr('fill-opacity',0.18).attr('stroke',colors[0]).attr('stroke-width',1.6)\r
    // Correlation line\r
    const rScale=d3.scaleLinear().domain([-1,1]).range([height,0])\r
    g.append('path').datum(curveData).attr('d',d3.line().x(d=>x(d.x)).y(d=>rScale(d.correlation||0)).curve(d3.curveBasis))\r
      .attr('fill','none').attr('stroke','#f59e0b').attr('stroke-width',1.4).attr('stroke-dasharray','3,2')\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Area with Rolling Correlation')\r
  },[params, curveData, onCurveData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}`;export{e as default};