var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, colors } from './utils'\r
export const meta = {\r
  id: 'ngram-heatmap',\r
  title: 'Ngram Heatmap',\r
  desc: 'Ngram Heatmap — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'NgramHeatmap',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-color"],\r
  tags: ["bars","ngram-heatmap"],\r
}\r
\r
export default function NgramHeatmap({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = [{"text":"Data","size":48}]\r
    const g = svg.append('g').attr('transform','translate('+(M.left)+','+M.top+')')\r
    const cols=7, rows=4, cw=(W-M.left-M.right)/cols, rh=(H-M.top-M.bottom)/rows\r
    const vals = d3.range(rows*cols).map(()=> Math.floor(Math.random()*40))\r
    const c = d3.scaleSequential(d3.interpolateOranges).domain([0,40])\r
    vals.forEach((v,i)=>{\r
      const col=i%cols, row=Math.floor(i/cols)\r
      g.append('rect').attr('x',col*cw).attr('y',row*rh).attr('width',cw-2).attr('height',rh-2).attr('fill',c(v)).attr('rx',3)\r
      g.append('text').attr('x',col*cw+cw/2).attr('y',row*rh+rh/2+3).attr('text-anchor','middle').attr('fill',v>20?'#fff':'#111').attr('font-size','8px').text('w'+(i+1))\r
    })\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};