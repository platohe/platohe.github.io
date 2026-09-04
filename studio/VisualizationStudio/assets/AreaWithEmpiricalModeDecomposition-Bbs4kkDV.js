var e=`import { useEffect, useRef, useMemo } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
import { makeBaseCurve } from './areaParams'\r
export const meta = {\r
  id: 'area-with-empirical-mode-decomposition',\r
  title: 'Area With Empirical Mode Decomposition',\r
  desc: 'Area With Empirical Mode Decomposition — a areas chart visualization',\r
  category: 'Areas',\r
  component: 'AreaWithEmpiricalModeDecomposition',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["areas","area-with-empirical-mode-decomposition"],\r
}\r
\r
export default function AreaWithEMD({ data: customData, onCurveData }) {\r
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
    // EMD (Empirical Mode Decomposition) - simplified IMF extraction\r
    const imfs=[]\r
    let residue=curveData.map(d=>d.y)\r
    for(let m=0;m<3;m++){\r
      const imf=curveData.map((d,i)=>({x:d.x, y:residue[i]*0.3}))\r
      imfs.push(imf)\r
      residue=residue.map((r,i)=>residue[i]-imfs[m][i].y)\r
    }\r
    // Plot IMFs\r
imfs.forEach((imf,m)=>{\r
g.append('path').datum(imf).attr('d',d3.area().x(d=>x(d.x)).y0(y(42)).y1(d=>y(42+d.y)).curve(d3.curveBasis))\r
        .attr('fill',colors[m%colors.length]).attr('fill-opacity',0.1).attr('stroke',colors[m%colors.length]).attr('stroke-width',0.8)\r
    })\r
    const area=d3.area().x(d=>x(d.x)).y0(y(0)).y1(d=>y(d.y)).curve(d3.curveBasis)\r
    g.append('path').datum(curveData).attr('d',d3.area().x(d=>x(d.x)).y0(y(0)).y1(d=>y(d.y)).curve(d3.curveBasis))\r
      .attr('fill',colors[0]).attr('fill-opacity',0.18).attr('stroke',colors[0]).attr('stroke-width',1.6)\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Area with Empirical Mode Decomposition')\r
  },[params, curveData, onCurveData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}`;export{e as default};