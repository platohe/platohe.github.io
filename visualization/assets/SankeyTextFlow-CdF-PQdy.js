var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'sankey-text-flow',\r
  title: 'Sankey Text Flow',\r
  desc: 'Sankey Text Flow — a networks chart visualization',\r
  category: 'Networks',\r
  component: 'SankeyTextFlow',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-shape"],\r
  tags: ["networks","sankey-text-flow"],\r
}\r
\r
export default function SankeyTextFlow({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = [{"text":"Data","size":48}]\r
    const g = svg.append('g')\r
    const nodes = [{x:60,y:80,w:'Data'},{x:60,y:160,w:'Viz'},{x:200,y:100,w:'Analysis'},{x:340,y:120,w:'Insight'}]\r
    const links = [{s:0,t:2,v:12},{s:1,t:2,v:8},{s:2,t:3,v:15}]\r
    links.forEach(l=>{\r
      const s=nodes[l.s], t=nodes[l.t]\r
      g.append('path').attr('d','M'+s.x+','+s.y+' C'+(s.x+60)+','+s.y+' '+(t.x-60)+','+t.y+' '+t.x+','+t.y).attr('fill','none').attr('stroke',colors[l.s%colors.length]).attr('stroke-width',l.v).attr('opacity',0.5)\r
    })\r
    nodes.forEach((n,i)=>{ g.append('rect').attr('x',n.x-24).attr('y',n.y-12).attr('width',48).attr('height',20).attr('fill',colors[i%colors.length]).attr('rx',4); g.append('text').attr('x',n.x).attr('y',n.y+4).attr('text-anchor','middle').attr('fill','#fff').attr('font-size','8px').text(n.w)})\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};