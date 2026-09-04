var e=`import { useEffect, useRef, useMemo } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
import { makeBaseCurve } from './areaParams'\r
export const meta = {\r
  id: 'area-with-ichimoku-cloud',\r
  title: 'Area With Ichimoku Cloud',\r
  desc: 'Area With Ichimoku Cloud — a areas chart visualization',\r
  category: 'Areas',\r
  component: 'AreaWithIchimokuCloud',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["areas","area-with-ichimoku-cloud"],\r
}\r
\r
export default function AreaWithIchimokuCloud({ data: customData, onCurveData }) {\r
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
    // Ichimoku components\r
    const tenkan=curveData.map((_,i)=>i<8?null:(d3.max(curveData.slice(i-8,i+1),d=>d.y)+d3.min(curveData.slice(i-8,i+1),d=>d.y))/2)\r
    const kijun=curveData.map((_,i)=>i<25?null:(d3.max(curveData.slice(i-25,i+1),d=>d.y)+d3.min(curveData.slice(i-25,i+1),d=>d.y))/2)\r
    const senkouA=curveData.map((_,i)=>tenkan[i]!=null&&kijun[i]!=null?(tenkan[i]+kijun[i])/2:null)\r
    const senkouB=curveData.map((_,i)=>i<51?null:(d3.max(curveData.slice(i-51,i+1),d=>d.y)+d3.min(curveData.slice(i-51,i+1),d=>d.y))/2)\r
    // Cloud (Senkou Span A/B)\r
    const cloudArea=d3.area().x((d,i)=>x(senkouA[i]!==null?i:null)).y0(d=>y(senkouA[d.x]||0)).y1(d=>y(senkouB[d.x]||0)).curve(d3.curveBasis)\r
    const cloudData=senkouA.map((v,i)=>({x:i, a:v, b:senkouB[i]})).filter(d=>d.a!==null&&d.b!==null)\r
    g.append('path').datum(cloudData).attr('d',d3.area().x(d=>x(d.x)).y0(d=>y(d.a)).y1(d=>y(d.b)).curve(d3.curveBasis)).attr('fill',colors[0]).attr('fill-opacity',0.15)\r
    // Tenkan and Kijun (filter out nulls)\r
    const tenkanData=tenkan.map((v,i)=>({x:i,y:v})).filter(d=>d.y!==null)\r
    const kijunData=kijun.map((v,i)=>({x:i,y:v})).filter(d=>d.y!==null)\r
    g.append('path').datum(curveData).attr('d',d3.line().x(d=>x(d.x)).y(d=>y(d.y)).curve(d3.curveBasis)).attr('fill','none').attr('stroke',colors[0]).attr('stroke-width',1.8)\r
    g.append('path').datum(tenkanData).attr('d',d3.line().x(d=>x(d.x)).y(d=>y(d.y)).curve(d3.curveBasis)).attr('fill','none').attr('stroke','#ef4444').attr('stroke-width',1.2).attr('stroke-dasharray','3,2')\r
    g.append('path').datum(kijunData).attr('d',d3.line().x(d=>x(d.x)).y(d=>y(d.y)).curve(d3.curveBasis)).attr('fill','none').attr('stroke','#3b82f6').attr('stroke-width',1.2).attr('stroke-dasharray','3,2')\r
    g.append('g').attr('transform',\`translate(0,\${height})\`).call(d3.axisBottom(x).ticks(5).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    g.append('g').call(d3.axisLeft(y).ticks(5).tickSize(-width).tickPadding(6)).call(g2=>g2.select('.domain').remove()).call(g2=>g2.selectAll('.tick line').attr('stroke','var(--border)').attr('stroke-dasharray','2,3')).call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Area with Ichimoku Cloud')\r
  },[params, curveData, onCurveData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}`;export{e as default};