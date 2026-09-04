var e=`import { useEffect, useRef, useMemo } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
import { makeBaseCurve } from './areaParams'\r
export const meta = {\r
  id: 'area-with-epsilon-greedy-bandit',\r
  title: 'Area With Epsilon Greedy Bandit',\r
  desc: 'Area With Epsilon Greedy Bandit — a areas chart visualization',\r
  category: 'Areas',\r
  component: 'AreaWithEpsilonGreedyBandit',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["areas","area-with-epsilon-greedy-bandit"],\r
}\r
\r
export default function AreaWithEpsilonGreedyBandit({ data: customData, onCurveData }) {\r
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
    const epsilon=0.1\r
    const arms=3\r
    const counts=[0,0,0], values=[0,0,0]\r
    curveData.forEach((d,i)=>{\r
      const arm=Math.random()<0.1? Math.floor(Math.random()*3) : d3.scan([0,1,2], (a,b)=> values[b]/(counts[b]+1) - values[a]/(counts[a]+1))\r
      counts[arm]++\r
      values[arm]=((counts[arm]-1)*values[arm]+d.y)/counts[arm]\r
      g.append('rect').attr('x',x(d.x)).attr('y',y(d.y)).attr('width',width/3).attr('height',height-y(d.y))\r
        .attr('fill',colors[arm]).attr('fill-opacity',0.6).attr('stroke',colors[arm]).attr('rx',2)\r
    })\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Area with Epsilon-Greedy Bandit')\r
  },[params, curveData, onCurveData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}`;export{e as default};