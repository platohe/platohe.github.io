var e=`import { useEffect, useRef, useMemo } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
import { makeBaseCurve } from './areaParams'\r
export const meta = {\r
  id: 'area-with-qlearning',\r
  title: 'Area With Qlearning',\r
  desc: 'Area With Qlearning — a areas chart visualization',\r
  category: 'Areas',\r
  component: 'AreaWithQlearning',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["areas","area-with-qlearning"],\r
}\r
\r
export default function AreaWithQlearning({ data: customData, onCurveData }) {\r
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
    // Q-learning\r
    const _alpha=0.1, gamma=0.99\r
    const actions=[-1,0,1]\r
    const qTable={}\r
    const qTableData={}\r
    curveData.forEach((d,i)=>{\r
      const state=Math.round(curveData[i].y/80*10)\r
      const action=d3.scan(actions, (a,b)=> {\r
        const keyA=\`\${state},\${a}\`\r
        const keyB=\`\${state},\${b}\`\r
        return (qTable[keyB]||0) - (qTable[keyA]||0)\r
      })\r
      const chosenAction=actions[action]\r
      const reward=-(d.y-42)*(d.y-42)/100\r
      const nextState=Math.round((curveData[Math.min(i+1,curveData.length-1)].y)/80*10)\r
      const maxNextQ=Math.max(...actions.map(a=>qTable[\`\${nextState},\${a}\`]||0))\r
      const qValue=qTable[\`\${state},\${chosenAction}\`]||0\r
      qTable[\`\${state},\${chosenAction}\`]=qValue + 0.1*(reward + gamma*maxNextQ - qValue)\r
    })\r
    g.append('path').datum(curveData).attr('d',d3.area().x(d=>x(d.x)).y0(y(0)).y1(d=>y(d.y)).curve(d3.curveBasis))\r
      .attr('fill',colors[0]).attr('fill-opacity',0.18).attr('stroke',colors[0]).attr('stroke-width',1.6)\r
    g.append('path').datum(curveData).attr('d',d3.line().x(d=>x(d.x)).y(d=>y(d.y)).curve(d3.curveBasis))\r
      .attr('fill','none').attr('stroke',colors[0]).attr('stroke-width',1.8)\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Area with Q-Learning')\r
  },[params, curveData, onCurveData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}`;export{e as default};