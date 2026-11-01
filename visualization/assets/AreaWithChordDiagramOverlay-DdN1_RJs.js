var e=`import { useEffect, useRef, useMemo } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
import { makeBaseCurve } from './areaParams'\r
export const meta = {\r
  id: 'area-with-chord-diagram-overlay',\r
  title: 'Area With Chord Diagram Overlay',\r
  desc: 'Area With Chord Diagram Overlay — a areas chart visualization',\r
  category: 'Areas',\r
  component: 'AreaWithChordDiagramOverlay',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis","d3-shape"],\r
  tags: ["areas","area-with-chord-diagram-overlay"],\r
}\r
\r
export default function AreaWithChordOverlay({ data: customData, onCurveData }) {\r
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
    // Chord diagram overlay in corner\r
    const chordData=[\r
      {source:0,target:1,value:10},{source:1,target:2,value:8},\r
      {source:2,target:3,value:12},{source:3,target:0,value:6}\r
    ]\r
    const chord=d3.chord().padAngle(0.05).sortSubgroups(d3.descending)\r
    const chords=chord(chordData)\r
    const chordG=g.append('g').attr('transform',\`translate(\${width-80},40)\`)\r
    const ribbon=d3.ribbon().radius(30)\r
    chordG.selectAll('path').data(chords).enter().append('path')\r
      .attr('d',ribbon).attr('fill',(d,i)=>colors[i%colors.length]).attr('fill-opacity',0.6).attr('stroke','var(--bg)').attr('stroke-width',1)\r
    const area=d3.area().x(d=>x(d.x)).y0(y(0)).y1(d=>y(d.y)).curve(d3.curveBasis)\r
    g.append('path').datum(curveData).attr('d',area).attr('fill',colors[0]).attr('fill-opacity',0.18).attr('stroke',colors[0]).attr('stroke-width',1.6)\r
    g.append('path').datum(curveData).attr('d',d3.line().x(d=>x(d.x)).y(d=>y(d.y)).curve(d3.curveBasis)).attr('fill','none').attr('stroke',colors[0]).attr('stroke-width',1.8)\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Area with Chord Overlay')\r
  },[params, curveData, onCurveData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}`;export{e as default};