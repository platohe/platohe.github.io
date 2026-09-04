var e=`import { useEffect, useRef, useMemo } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
import { makeBaseCurve } from './areaParams'\r
export const meta = {\r
  id: 'area-with-cepstrum',\r
  title: 'Area With Cepstrum',\r
  desc: 'Area With Cepstrum — a areas chart visualization',\r
  category: 'Areas',\r
  component: 'AreaWithCepstrum',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["areas","area-with-cepstrum"],\r
}\r
\r
export default function AreaWithCepstrum({ data: customData, onCurveData }) {\r
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
    // Cepstrum (inverse FFT of log spectrum)\r
    const N=curveData.length\r
    const real=curveData.map(d=>d.y)\r
    const imag=Array(N).fill(0)\r
    // Local DFT-based cepstrum\r
    const dftMag=(re)=>{\r
      const out=[]\r
      for(let k=0;k<N;k++){ let sr=0, si=0\r
        for(let t=0;t<N;t++){ const ang=-2*Math.PI*k*t/N; sr+=re[t]*Math.cos(ang); si+=re[t]*Math.sin(ang) }\r
        out.push([sr,si])\r
      }\r
      return out\r
    }\r
    const logSpectrum=dftMag(real).map(c=>Math.log(Math.hypot(c[0],c[1])+1))\r
    const cepstrum=(()=>{\r
      const inv=[]\r
      for(let k=0;k<N;k++){ let sr=0; for(let t=0;t<N;t++) sr+=logSpectrum[t]*Math.cos(2*Math.PI*k*t/N); inv.push(sr/N) }\r
      return inv\r
    })()\r
    const cepData=cepstrum.map((v,i)=>({x:i, y:42+v*10}))\r
    g.append('path').datum(curveData).attr('d',d3.area().x(d=>x(d.x)).y0(y(0)).y1(d=>y(d.y)).curve(d3.curveBasis))\r
      .attr('fill',colors[0]).attr('fill-opacity',0.18).attr('stroke',colors[0]).attr('stroke-width',1.6)\r
    g.append('path').datum(cepData).attr('d',d3.line().x(d=>x(d.x)).y(d=>y(d.y)).curve(d3.curveBasis))\r
      .attr('fill','none').attr('stroke','#f59e0b').attr('stroke-width',1.8).attr('stroke-dasharray','3,2')\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Area with Cepstrum')\r
  },[params, curveData, onCurveData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}`;export{e as default};