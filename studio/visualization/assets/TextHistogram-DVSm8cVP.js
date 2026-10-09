var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, colors } from './utils'\r
export const meta = {\r
  id: 'text-histogram',\r
  title: 'Text Histogram',\r
  desc: 'Text Histogram — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'TextHistogram',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","text-histogram"],\r
}\r
\r
export default function TextHistogram({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = [{"text":"Data","size":48}]\r
    const g = svg.append('g')\r
    const bins = [3,5,9,12,7,4]\r
    const x = d3.scaleBand().domain(bins.map((_,i)=>i)).range([M.left,W-M.right]).padding(0.1)\r
    const y = d3.scaleLinear().domain([0,12]).range([H-M.bottom,M.top])\r
    g.append('g').attr('transform','translate(0,'+(H-M.bottom)+')').call(d3.axisBottom(x).tickFormat(i=>i+' chars'))\r
    g.append('g').attr('transform','translate('+M.left+',0)').call(d3.axisLeft(y).ticks(4))\r
    g.selectAll('rect').data(bins).join('rect').attr('x',(_,i)=>x(i)).attr('y',d=>y(d)).attr('width',x.bandwidth()).attr('height',d=>y(0)-y(d)).attr('fill',colors[0])\r
    g.append('text').attr('x',W/2).attr('y',M.top+14).attr('text-anchor','middle').attr('fill','var(--text-secondary)').attr('font-size','10px').text('Word length distribution')\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};