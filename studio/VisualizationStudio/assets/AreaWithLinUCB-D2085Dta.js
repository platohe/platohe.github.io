var e=`import { useEffect, useRef, useMemo } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
import { makeBaseCurve } from './areaParams'\r
export const meta = {\r
  id: 'area-with-lin-ucb',\r
  title: 'Area With Lin U C B',\r
  desc: 'Area With Lin U C B — a areas chart visualization',\r
  category: 'Areas',\r
  component: 'AreaWithLinUCB',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["areas","area-with-lin-u-c-b"],\r
}\r
\r
export default function AreaWithLinUCB({ data: customData, onCurveData }) {\r
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
    // LinUCB contextual bandit\r
    const d=2\r
    const dot=(a,b)=>a.reduce((s,v,i)=>s+v*b[i],0)\r
    const matVec=(M,v)=>M.map(row=>dot(row,v))\r
    const inv2=(Mt)=>{ const [[a,b2],[c,d2]]=Mt; const det=(a*d2-b2*c)||1e-9; return [[d2/det,-b2/det],[-c/det,a/det]] }\r
    const A=[], b=[]\r
    for(let i=0;i<3;i++){ A.push(d3.range(2).map(()=>d3.range(2).map(()=>1))); b.push([0,0]) }\r
    const ucbData=curveData.map((row,i)=>{\r
      const x_vec=[1, row.y/80]\r
      const ucbs=[0,1,2].map(a=>{\r
        const A_inv=inv2(A[a])\r
        const theta=matVec(A_inv, b[a])\r
        return dot(x_vec, theta) + Math.sqrt(2*Math.log(i+1))*Math.sqrt(dot(x_vec, matVec(inv2(A[a]), x_vec)))\r
      })\r
      return {x:row.x, ucb: Math.max(...ucbs)}\r
    })\r
    g.append('path').datum(curveData).attr('d',d3.area().x(d=>x(d.x)).y0(y(0)).y1(d=>y(d.y)).curve(d3.curveBasis))\r
      .attr('fill',colors[0]).attr('fill-opacity',0.18).attr('stroke',colors[0]).attr('stroke-width',1.6)\r
    g.append('path').datum(ucbData).attr('d',d3.line().x(d=>x(d.x)).y(d=>y(d.ucb*10)).curve(d3.curveBasis))\r
      .attr('fill','none').attr('stroke','#f59e0b').attr('stroke-width',1.4).attr('stroke-dasharray','3,2')\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Area with LinUCB')\r
  },[params, curveData, onCurveData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}`;export{e as default};