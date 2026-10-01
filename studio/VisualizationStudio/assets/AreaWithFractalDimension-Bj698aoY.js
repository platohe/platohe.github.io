var e=`import { useEffect, useRef, useMemo } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
import { makeBaseCurve } from './areaParams'\r
export const meta = {\r
  id: 'area-with-fractal-dimension',\r
  title: 'Area With Fractal Dimension',\r
  desc: 'Area With Fractal Dimension — a areas chart visualization',\r
  category: 'Areas',\r
  component: 'AreaWithFractalDimension',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["areas","area-with-fractal-dimension"],\r
}\r
\r
export default function AreaWithFractalDimension({ data: customData, onCurveData }) {\r
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
    // Box-counting fractal dimension\r
    const window=10\r
    const fd=curveData.map((_,i)=>{\r
      if(i<5||i>=curveData.length-5) return {x:curveData[i].x, fd:1.5}\r
      const slice=curveData.slice(i-5,i+5)\r
      const vals=slice.map(d=>d.y)\r
      // Box-counting approximation\r
      const boxes=10\r
      let count=0\r
      const minVal=d3.min(vals)||0, maxVal=d3.max(vals)||1\r
      const boxSize=(maxVal-minVal)/boxes\r
      for(let b=0;b<boxes;b++){\r
        const boxMin=minVal+b*boxSize, boxMax=minVal+(b+1)*boxSize\r
        if(vals.some(v=>v>=boxMin && v<boxMax)) count++\r
      }\r
      return {x:curveData[i].x, fd:1+Math.log(count)/Math.log(2)}\r
    })\r
    g.append('path').datum(curveData).attr('d',d3.area().x(d=>x(d.x)).y0(y(0)).y1(d=>y(d.y)).curve(d3.curveBasis))\r
      .attr('fill',colors[0]).attr('fill-opacity',0.18).attr('stroke',colors[0]).attr('stroke-width',1.6)\r
    g.append('path').datum(curveData).attr('d',d3.line().x(d=>x(d.x)).y(d=>y(d.y)).curve(d3.curveBasis))\r
      .attr('fill','none').attr('stroke',colors[0]).attr('stroke-width',1.8)\r
    // Fractal dimension overlay\r
    const fdScale=d3.scaleLinear().domain([1,2]).range([height,0])\r
    g.append('path').datum(curveData).attr('d',d3.line().x(d=>x(d.x)).y(d=>y(d.fractalDim||1.5)).curve(d3.curveBasis))\r
      .attr('fill','none').attr('stroke','#f59e0b').attr('stroke-width',1.2).attr('stroke-dasharray','3,2')\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Area with Fractal Dimension')\r
  },[params, curveData, onCurveData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}`;export{e as default};