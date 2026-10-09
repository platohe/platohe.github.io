var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'quote-treemap',\r
  title: 'Quote Treemap',\r
  desc: 'Quote Treemap — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'QuoteTreemap',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-hierarchy"],\r
  tags: ["bars","quote-treemap"],\r
}\r
\r
export default function QuoteTreemap({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = [{"text":"Data","size":48}]\r
    const root = d3.hierarchy({children:[{name:'A',value:40,quote:'Data is beautiful'},{name:'B',value:30,quote:'Viz tells story'},{name:'C',value:20,quote:'Design matters'}]}).sum(d=>d.value)\r
    d3.treemap().size([W-40,H-40]).padding(3)(root)\r
    const g = svg.append('g').attr('transform','translate(20,20)')\r
    g.selectAll('rect').data(root.leaves()).join('rect').attr('x',d=>d.x0).attr('y',d=>d.y0).attr('width',d=>d.x1-d.x0).attr('height',d=>d.y1-d.y0).attr('fill',(d,i)=>colors[i%colors.length]).attr('rx',4)\r
    g.selectAll('text').data(root.leaves()).join('text').attr('x',d=>d.x0+6).attr('y',d=>d.y0+16).attr('fill','#fff').attr('font-size','9px').text(d=>d.data.quote.slice(0,14))\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};