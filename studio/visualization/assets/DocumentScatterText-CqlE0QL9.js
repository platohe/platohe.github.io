var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, colors } from './utils'\r
export const meta = {\r
  id: 'document-scatter-text',\r
  title: 'Document Scatter Text',\r
  desc: 'Document Scatter Text — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'DocumentScatterText',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","document-scatter-text"],\r
}\r
\r
export default function DocumentScatterText({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = [{"text":"Data","size":48}]\r
    const data = (customData && customData[0]?.text) ? customData : DEFAULT_DATA\r
    const pts = d3.range(20).map(i=>({x:Math.random()*200+40,y:Math.random()*160+30,label: data[i%data.length].text.slice(0,4)}))\r
    const x = d3.scaleLinear().domain([0,240]).range([M.left,W-M.right])\r
    const y = d3.scaleLinear().domain([0,190]).range([H-M.bottom,M.top])\r
    const g = svg.append('g')\r
    g.selectAll('circle').data(pts).join('circle').attr('cx',d=>x(d.x)).attr('cy',d=>y(d.y)).attr('r',4).attr('fill',(d,i)=>colors[i%colors.length]).attr('opacity',0.7)\r
    g.selectAll('text').data(pts).join('text').attr('x',d=>x(d.x)+6).attr('y',d=>y(d.y)+3).attr('fill','var(--text-secondary)').attr('font-size','7px').text(d=>d.label)\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};