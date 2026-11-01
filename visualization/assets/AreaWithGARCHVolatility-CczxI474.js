var e=`import { useEffect, useRef, useMemo } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
import { makeBaseCurve } from './areaParams'\r
export const meta = {\r
  id: 'area-with-garchvolatility',\r
  title: 'Area With G A R C H Volatility',\r
  desc: 'Area With G A R C H Volatility — a areas chart visualization',\r
  category: 'Areas',\r
  component: 'AreaWithGARCHVolatility',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis","d3-shape"],\r
  tags: ["areas","area-with-g-a-r-c-h-volatility"],\r
}\r
\r
export default function AreaWithGARCHVolatility({ data: customData, onCurveData }) {\r
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
    // GARCH(1,1) conditional variance\r
    const omega=0.1, alpha=0.1, beta=0.85\r
    let sigma2=1\r
    const vol=curveData.map(d=>{\r
      const ret=(d.y-42)/42\r
      sigma2=0.1+0.1*ret*ret+0.85*sigma2\r
      return {x:d.x, vol:Math.sqrt(sigma2)*10}\r
    })\r
    g.append('path').datum(curveData).attr('d',d3.area().x(d=>x(d.x)).y0(y(0)).y1(d=>y(d.y)).curve(d3.curveBasis))\r
      .attr('fill',colors[0]).attr('fill-opacity',0.18).attr('stroke',colors[0]).attr('stroke-width',1.6)\r
    // Volatility ribbon\r
    const volScale=d3.scaleLinear().domain([0,5]).range([height,0])\r
    g.append('path').datum(curveData.map((d,i)=>({x:d.x, y:vol[i]?.vol||1}))).attr('d',d3.area().x(d=>x(d.x)).y0(height).y1(d=>volScale(d.y)).curve(d3.curveBasis))\r
      .attr('fill','#ef4444').attr('fill-opacity',0.1).attr('stroke','#ef4444').attr('stroke-width',0.8)\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Area with GARCH Volatility')\r
  },[params, curveData, onCurveData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}`;export{e as default};