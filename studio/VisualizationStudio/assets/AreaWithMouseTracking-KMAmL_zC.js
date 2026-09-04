var e=`import { useEffect, useRef, useState, useMemo } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
import { makeBaseCurve } from './areaParams'\r
export const meta = {\r
  id: 'area-with-mouse-tracking',\r
  title: 'Area With Mouse Tracking',\r
  desc: 'Area With Mouse Tracking — a areas chart visualization',\r
  category: 'Areas',\r
  component: 'AreaWithMouseTracking',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["areas","area-with-mouse-tracking"],\r
}\r
\r
export default function AreaWithMouseTracking({ data: customData, onCurveData }) {\r
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
  const [mousePos, setMousePos] = useState(null)\r
  useEffect(()=>{\r
    if (onCurveData) onCurveData(curveData)\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const margin={top:28,right:14,bottom:24,left:36}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const x=d3.scaleLinear().domain(d3.extent(curveData,d=>d.x)).range([0,width])\r
    const y=d3.scaleLinear().domain([0,80]).range([height,0])\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    const area=d3.area().x(d=>x(d.x)).y0(y(0)).y1(d=>y(d.y)).curve(d3.curveBasis)\r
    g.append('path').datum(curveData).attr('d',d3.area().x(d=>x(d.x)).y0(y(0)).y1(d=>y(d.y)).curve(d3.curveBasis))\r
      .attr('fill',colors[0]).attr('fill-opacity',0.18).attr('stroke',colors[0]).attr('stroke-width',1.6)\r
    g.append('path').datum(curveData).attr('d',d3.line().x(d=>x(d.x)).y(d=>y(d.y)).curve(d3.curveBasis)).attr('fill','none').attr('stroke',colors[0]).attr('stroke-width',1.8)\r
    // Tooltip line\r
    const tooltipLine=g.append('g').attr('display','none')\r
    tooltipLine.append('line').attr('x1',0).attr('x2',0).attr('y1',0).attr('y2',height).attr('stroke','#6366f1').attr('stroke-width',1).attr('stroke-dasharray','3,2')\r
    tooltipLine.append('circle').attr('r',4).attr('fill','#6366f1').attr('stroke','var(--bg)').attr('stroke-width',2)\r
    tooltipLine.append('text').attr('x',8).attr('y',-8).attr('fill','#6366f1').attr('font-size','8px').attr('font-weight',600).text('x: 0, y: 0')\r
    // Mouse tracking\r
    const rect=g.append('rect').attr('width',width).attr('height',height).attr('fill','transparent')\r
    rect.on('mousemove',function(event){\r
      const mx=event.offsetX\r
      const my=event.offsetY\r
      const dataX=x.invert(mx)\r
      const nearest=curveData.reduce((a,b)=>Math.abs(b.x-dataX)<Math.abs(a.x-dataX)?b:a)\r
      setCrosshair({x:mx, y:y(nearest.y), dataX:nearest.x, dataY:nearest.y})\r
    })\r
    rect.on('mouseleave',()=>setCrosshair(null))\r
    function setCrosshair(pos){\r
      if(pos){\r
        setMousePos(pos)\r
      }else{\r
        setMousePos(null)\r
      }\r
    }\r
    g.append('path').datum(curveData).attr('d',d3.area().x(d=>x(d.x)).y0(y(0)).y1(d=>y(d.y)).curve(d3.curveBasis)).attr('fill',colors[0]).attr('fill-opacity',0.18).attr('stroke',colors[0]).attr('stroke-width',1.6)\r
    g.append('path').datum(curveData).attr('d',d3.line().x(d=>x(d.x)).y(d=>y(d.y)).curve(d3.curveBasis)).attr('fill','none').attr('stroke',colors[0]).attr('stroke-width',1.8)\r
    g.append('g').attr('transform',\`translate(0,\${height})\`).call(d3.axisBottom(x).ticks(5).tickSize(0)).call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    g.append('g').call(d3.axisLeft(y).ticks(5).tickSize(-width).tickPadding(6)).call(g2=>g2.select('.domain').remove()).call(g2=>g2.selectAll('.tick line').attr('stroke','var(--border)').attr('stroke-dasharray','2,3')).call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Area with Mouse Tracking')\r
  },[params, curveData, onCurveData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}`;export{e as default};