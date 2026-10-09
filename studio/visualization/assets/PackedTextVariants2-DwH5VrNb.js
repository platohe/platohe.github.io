var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'packed-text-variants2',\r
  title: 'Packed Text Variants2',\r
  desc: 'Packed Text Variants2 — a hierarchies chart visualization',\r
  category: 'Hierarchies',\r
  component: 'PackedTextVariants2',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-hierarchy"],\r
  tags: ["hierarchies","packed-text-variants2"],\r
}\r
\r
export default function PackedTextVariants2({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = [{"text":"Data","size":48},{"text":"Viz","size":36},{"text":"Design","size":28},{"text":"Chart","size":22}]\r
    const data = (customData && customData[0]?.text) ? customData : DEFAULT_DATA\r
    const root = d3.hierarchy({children:data.map(d=>({name:d.text,value:d.size}))}).sum(d=>d.value)\r
    d3.pack().size([W-40,H-40]).padding(6)(root)\r
    const g = svg.append('g').attr('transform','translate(20,20)')\r
    g.selectAll('circle').data(root.leaves()).join('circle').attr('cx',d=>d.x).attr('cy',d=>d.y).attr('r',d=>d.r).attr('fill',(d,i)=>colors[i%colors.length]).attr('opacity',0.75)\r
    g.selectAll('text').data(root.leaves()).join('text').attr('x',d=>d.x).attr('y',d=>d.y+4).attr('text-anchor','middle').attr('fill','#fff').attr('font-size','8px').text(d=>d.data.name)\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};