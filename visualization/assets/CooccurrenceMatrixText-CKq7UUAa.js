var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, colors } from './utils'\r
export const meta = {\r
  id: 'cooccurrence-matrix-text',\r
  title: 'Cooccurrence Matrix Text',\r
  desc: 'Cooccurrence Matrix Text — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'CooccurrenceMatrixText',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","cooccurrence-matrix-text"],\r
}\r
\r
export default function CooccurrenceMatrixText({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = [{"text":"Data","size":48}]\r
    const data = (customData && customData[0]?.text) ? customData : DEFAULT_DATA\r
    const words = data.map(d=>d.text).concat(['Analysis','Insight']).slice(0,5)\r
    const matrix = words.map(()=> words.map(()=> Math.floor(Math.random()*10)))\r
    const cell = 44\r
    const g = svg.append('g').attr('transform','translate('+(M.left+30)+','+(M.top+20)+')')\r
    const c = d3.scaleSequential(d3.interpolateBlues).domain([0,10])\r
    matrix.forEach((row,i)=> row.forEach((v,j)=>{\r
      g.append('rect').attr('x',j*cell).attr('y',i*cell).attr('width',cell-2).attr('height',cell-2).attr('fill',c(v)).attr('rx',3)\r
      g.append('text').attr('x',j*cell+cell/2).attr('y',i*cell+cell/2+4).attr('text-anchor','middle').attr('fill',v>5?'#fff':'#111').attr('font-size','9px').text(v)\r
    }))\r
    words.forEach((w,i)=>{ g.append('text').attr('x',-6).attr('y',i*cell+cell/2+4).attr('text-anchor','end').attr('fill','var(--text-secondary)').attr('font-size','8px').text(w.slice(0,6)); g.append('text').attr('x',i*cell+cell/2).attr('y',-6).attr('text-anchor','middle').attr('fill','var(--text-secondary)').attr('font-size','8px').text(w.slice(0,4)) })\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};