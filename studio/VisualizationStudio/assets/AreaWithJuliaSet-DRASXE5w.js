var e=`import { useEffect, useRef, useMemo } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
import { makeBaseCurve } from './areaParams'\r
export const meta = {\r
  id: 'area-with-julia-set',\r
  title: 'Area With Julia Set',\r
  desc: 'Area With Julia Set — a areas chart visualization',\r
  category: 'Areas',\r
  component: 'AreaWithJuliaSet',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["areas","area-with-julia-set"],\r
}\r
\r
export default function AreaWithJuliaSetBoundary({ data: customData, onCurveData }) {\r
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
    // Julia set boundary\r
    const iterations=15\r
    const boundary=curveData.map((d,i)=>{\r
      let zr=(d.x/width)*3-1.5, zi=(d.y/height)*2-1\r
      const cr=-0.7, ci=0.27015\r
      let iter=0\r
      for(let n=0;n<15;n++){\r
        const zr2=zr*zr, zi2=zi*zi\r
        if(zr2+zi2>4) break\r
        const zrn=zr2-zi2+cr\r
        zi=2*zr*zi+ci\r
        zr=zrn\r
        iter++\r
      }\r
      return {x:d.x, y:d.y, iter}\r
    })\r
    g.append('path').datum(curveData).attr('d',d3.area().x(d=>x(d.x)).y0(y(0)).y1(d=>y(d.y)).curve(d3.curveBasis))\r
      .attr('fill',colors[0]).attr('fill-opacity',0.18).attr('stroke',colors[0]).attr('stroke-width',1.6)\r
    boundary.filter(b=>b.iter<15).forEach(b=>{\r
      g.append('line').attr('x1',x(b.x)).attr('x2',x(b.x)).attr('y1',y(0)).attr('y2',y(b.iter*5)).attr('stroke',colors[0]).attr('stroke-width',0.5).attr('opacity',0.3)\r
    })\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Area with Julia Set Boundary')\r
  },[params, curveData, onCurveData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}`;export{e as default};