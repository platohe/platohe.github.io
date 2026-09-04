var e=`import { useEffect, useRef, useMemo } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
import { makeBaseCurve } from './areaParams'\r
export const meta = {\r
  id: 'area-with-highlighted-extrema',\r
  title: 'Area With Highlighted Extrema',\r
  desc: 'Area With Highlighted Extrema — a areas chart visualization',\r
  category: 'Areas',\r
  component: 'AreaWithHighlightedExtrema',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["areas","area-with-highlighted-extrema"],\r
}\r
\r
export default function AreaWithHighlightedPeaks({ data: customData, onCurveData }) {\r
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
    // Find peaks and troughs\r
    const extrema=curveData.filter((d,i)=>i>0&&i<curveData.length-1&&\r
      (d.y>curveData[i-1].y&&d.y>curveData[i+1].y||d.y<curveData[i-1].y&&d.y<curveData[i+1].y))\r
    const area=d3.area().x(d=>x(d.x)).y0(y(0)).y1(d=>y(d.y)).curve(d3.curveBasis)\r
    g.append('path').datum(curveData).attr('d',area).attr('fill',colors[0]).attr('fill-opacity',0.18).attr('stroke',colors[0]).attr('stroke-width',1.6)\r
    // Highlight peaks (red) and troughs (blue)\r
    extrema.forEach(e=>{\r
      const isPeak=e.y>42\r
      g.append('circle').attr('cx',x(e.x)).attr('cy',y(e.y)).attr('r',4).attr('fill',isPeak?'#ef4444':'#3b82f6').attr('stroke','var(--bg)').attr('stroke-width',1)\r
      g.append('text').attr('x',x(e.x)).attr('y',y(e.y)-8).attr('text-anchor','middle').attr('fill',isPeak?'#ef4444':'#3b82f6').attr('font-size','6px').text(isPeak?'▲':'▼')\r
    })\r
    g.append('path').datum(curveData).attr('d',d3.line().x(d=>x(d.x)).y(d=>y(d.y)).curve(d3.curveBasis)).attr('fill','none').attr('stroke',colors[0]).attr('stroke-width',1.8)\r
    g.append('g').attr('transform',\`translate(0,\${height})\`).call(d3.axisBottom(x).ticks(5).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    g.append('g').call(d3.axisLeft(y).ticks(5).tickSize(-width).tickPadding(6)).call(g2=>g2.select('.domain').remove()).call(g2=>g2.selectAll('.tick line').attr('stroke','var(--border)').attr('stroke-dasharray','2,3')).call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Area with Highlighted Extrema')\r
  },[params, curveData, onCurveData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}`;export{e as default};