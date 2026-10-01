var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, colors } from './utils'\r
export const meta = {\r
  id: 'hashtag-timeline',\r
  title: 'Hashtag Timeline',\r
  desc: 'Hashtag Timeline — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'HashtagTimeline',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-axis"],\r
  tags: ["bars","hashtag-timeline"],\r
}\r
\r
export default function HashtagTimeline({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = [{"text":"Data","size":48}]\r
    const data = [{t:0,tag:'#data'},{t:2,tag:'#viz'},{t:4,tag:'#design'},{t:6,tag:'#insight'}]\r
    const x = d3.scaleLinear().domain([0,7]).range([M.left,W-M.right])\r
    const g = svg.append('g')\r
    g.append('line').attr('x1',x(0)).attr('x2',x(7)).attr('y1',H/2).attr('y2',H/2).attr('stroke','var(--border)').attr('stroke-width',2)\r
    data.forEach((d,i)=>{\r
      g.append('line').attr('x1',x(d.t)).attr('x2',x(d.t)).attr('y1',H/2).attr('y2',H/2-30).attr('stroke',colors[i%colors.length]).attr('stroke-width',2)\r
      g.append('circle').attr('cx',x(d.t)).attr('cy',H/2-32).attr('r',14).attr('fill',colors[i%colors.length])\r
      g.append('text').attr('x',x(d.t)).attr('y',H/2-28).attr('text-anchor','middle').attr('fill','#fff').attr('font-size','8px').text(d.tag)\r
    })\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};