var e=`import { useEffect, useRef, useMemo } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
import { makeBaseCurve } from './areaParams'\r
export const meta = {\r
  id: 'area-with-lyapunov-exponent',\r
  title: 'Area With Lyapunov Exponent',\r
  desc: 'Area With Lyapunov Exponent — a areas chart visualization',\r
  category: 'Areas',\r
  component: 'AreaWithLyapunovExponent',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["areas","area-with-lyapunov-exponent"],\r
}\r
\r
export default function AreaWithLyapunovExponent({ data: customData, onCurveData }) {\r
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
    // Lyapunov exponent visualization\r
    const window=10\r
    const lyapunov=curveData.map((_,i)=>{\r
      const slice=curveData.slice(Math.max(0,i-5),i+5)\r
      const vals=slice.map(d=>d.y)\r
      let sum=0, count=0\r
      for(let j=1;j<vals.length;j++){\r
        const ratio=Math.abs(vals[j]/vals[j-1])\r
        if(ratio>0) sum+=Math.log(ratio)\r
        count++\r
      }\r
      return {x:curveData[i].x, le:count>0?sum/count:0}\r
    })\r
    g.append('path').datum(curveData).attr('d',d3.area().x(d=>x(d.x)).y0(y(0)).y1(d=>y(d.y)).curve(d3.curveBasis))\r
      .attr('fill',colors[0]).attr('fill-opacity',0.18).attr('stroke',colors[0]).attr('stroke-width',1.6)\r
    g.append('path').datum(curveData).attr('d',d3.line().x(d=>x(d.x)).y(d=>y(d.y)).curve(d3.curveBasis)).attr('fill','none').attr('stroke',colors[0]).attr('stroke-width',1.8)\r
    // Lyapunov overlay\r
    const lyapScale=d3.scaleLinear().domain([-1,1]).range([0,height])\r
    g.append('path').datum(lyapunov).attr('d',d3.line().x(d=>x(d.x)).y(d=>lyapScale(d.le)).curve(d3.curveBasis))\r
      .attr('fill','none').attr('stroke','#ef4444').attr('stroke-width',1.2).attr('stroke-dasharray','3,2')\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Area with Lyapunov Exponent')\r
  },[params, curveData, onCurveData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}`;export{e as default};