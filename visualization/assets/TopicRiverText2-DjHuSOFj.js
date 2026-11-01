var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, colors } from './utils'\r
export const meta = {\r
  id: 'topic-river-text2',\r
  title: 'Topic River Text2',\r
  desc: 'Topic River Text2 — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'TopicRiverText2',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","topic-river-text2"],\r
}\r
\r
export default function TopicRiverText2({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = [{"text":"Data","size":48}]\r
    const data = (customData && customData[0]?.text) ? customData : DEFAULT_DATA\r
    const layers = [[5,10,8,12],[7,8,14,10],[4,6,9,7]]\r
    const x = d3.scaleLinear().domain([0,3]).range([M.left,W-M.right])\r
    const y = d3.scaleLinear().domain([0,35]).range([H-M.bottom,M.top])\r
    const area = d3.area().x((d,i)=>x(i)).y0((d)=>y(0)).y1((d)=>y(d)).curve(d3.curveBasis)\r
    const g = svg.append('g')\r
    layers.forEach((l,i)=> g.append('path').datum(l).attr('d',area).attr('fill',colors[i%colors.length]).attr('opacity',0.5).attr('stroke',colors[i%colors.length]))\r
    g.append('text').attr('x',W/2).attr('y',M.top+12).attr('text-anchor','middle').attr('fill','var(--text-secondary)').attr('font-size','10px').text(data[0].text+' Topics')\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};