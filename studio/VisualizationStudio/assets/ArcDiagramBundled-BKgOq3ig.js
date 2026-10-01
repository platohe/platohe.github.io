var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
// ArcDiagramBundled: All routes bundle through a shared hub apex.\r
export const meta = {\r
  id: 'arc-diagram-bundled',\r
  title: 'Arc Diagram Bundled',\r
  desc: 'Arc Diagram Bundled — a networks chart visualization',\r
  category: 'Networks',\r
  component: 'ArcDiagramBundled',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-shape"],\r
  tags: ["networks","arc-diagram-bundled"],\r
}\r
\r
export default function ArcDiagramBundled({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = {"nodes":[{"id":"jfk","name":"JFK"},{"id":"lax","name":"LAX"},{"id":"ord","name":"ORD"},{"id":"atl","name":"ATL"},{"id":"sea","name":"SEA"},{"id":"den","name":"DEN"}],"links":[{"source":"jfk","target":"lax","value":3},{"source":"jfk","target":"ord","value":2},{"source":"atl","target":"lax","value":2},{"source":"atl","target":"sea","value":1},{"source":"den","target":"ord","value":2},{"source":"den","target":"sea","value":1}]}\r
    const data = (customData && customData.nodes && customData.links) ? customData : DEFAULT_DATA\r
    const g = svg.append('g')\r
    const pos = new Map(data.nodes.map((d,i)=>[d.id, 50 + i*(300/Math.max(data.nodes.length-1,1))]))\r
    const y0 = 240, hubY = 70, hubX = W/2\r
    g.append('circle').attr('cx',hubX).attr('cy',hubY).attr('r',3.5).attr('fill','var(--border)')\r
    g.append('text').attr('x',hubX).attr('y',hubY-10).attr('text-anchor','middle').attr('font-size','8px').attr('fill','var(--text-secondary)').text('HUB')\r
    data.links.forEach((lk,i)=>{\r
      const s = typeof lk.source==='object'?lk.source.id:lk.source\r
      const t = typeof lk.target==='object'?lk.target.id:lk.target\r
      const x1 = pos.get(s), x2 = pos.get(t)\r
      const c = colors[i % colors.length]\r
      g.append('path').attr('d','M'+x1+' '+y0+' Q'+x1+' '+((y0+hubY)/2)+' '+hubX+' '+hubY).attr('fill','none').attr('stroke',c).attr('stroke-width',1.6+lk.value*0.4).attr('stroke-opacity',0.65)\r
      g.append('path').attr('d','M'+hubX+' '+hubY+' Q'+x2+' '+((y0+hubY)/2)+' '+x2+' '+y0).attr('fill','none').attr('stroke',c).attr('stroke-width',1.6+lk.value*0.4).attr('stroke-opacity',0.65)\r
    })\r
    data.nodes.forEach((n)=>{\r
      const x = pos.get(n.id)\r
      g.append('circle').attr('cx',x).attr('cy',y0).attr('r',5).attr('fill','#6366f1').attr('stroke','var(--bg)')\r
      g.append('text').attr('x',x).attr('y',y0+18).attr('text-anchor','middle').attr('font-size','9px').attr('fill','var(--text-secondary)').text(n.name)\r
    })\r
    g.append('line').attr('x1',30).attr('x2',370).attr('y1',y0).attr('y2',y0).attr('stroke','var(--border)')\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};