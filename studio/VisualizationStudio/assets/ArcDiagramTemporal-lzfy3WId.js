var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
// ArcDiagramTemporal: Milestones along month axis, arcs span periods.\r
export const meta = {\r
  id: 'arc-diagram-temporal',\r
  title: 'Arc Diagram Temporal',\r
  desc: 'Arc Diagram Temporal — a networks chart visualization',\r
  category: 'Networks',\r
  component: 'ArcDiagramTemporal',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-shape"],\r
  tags: ["networks","arc-diagram-temporal"],\r
}\r
\r
export default function ArcDiagramTemporal({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = {"nodes":[{"id":"jan","name":"Jan"},{"id":"mar","name":"Mar"},{"id":"may","name":"May"},{"id":"jul","name":"Jul"},{"id":"sep","name":"Sep"},{"id":"nov","name":"Nov"}],"links":[{"source":"jan","target":"mar","value":2},{"source":"mar","target":"may","value":3},{"source":"may","target":"sep","value":1},{"source":"jul","target":"nov","value":2},{"source":"jan","target":"jul","value":1}]}\r
    const data = (customData && customData.nodes && customData.links) ? customData : DEFAULT_DATA\r
    const g = svg.append('g')\r
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']\r
    const mi = new Map(months.map((m,i)=>[m, i]))\r
    const pos = new Map(data.nodes.map(n=>[n.id, 36 + (mi.get(n.name) != null ? mi.get(n.name) : 0) * (328/11)]))\r
    const y0 = 170\r
    const axis = g.append('g'); axis.attr('transform','translate(0,'+y0+')')\r
    months.forEach((m,i)=>{\r
      const x = 36 + i*(328/11)\r
      axis.append('line').attr('x1',x).attr('x2',x).attr('y1',-3).attr('y2',3).attr('stroke','var(--border)')\r
      axis.append('text').attr('x',x).attr('y',16).attr('text-anchor','middle').attr('font-size','7px').attr('fill','var(--text-secondary)').text(m)\r
    })\r
    axis.append('line').attr('x1',30).attr('x2',370).attr('y1',0).attr('y2',0).attr('stroke','var(--border)')\r
    data.links.forEach((lk,i)=>{\r
      const s = typeof lk.source==='object'?lk.source.id:lk.source\r
      const t = typeof lk.target==='object'?lk.target.id:lk.target\r
      const x1 = pos.get(s), x2 = pos.get(t)\r
      if (x1 == null || x2 == null) return\r
      const lift = -(14 + Math.abs(x2-x1)*0.5)\r
      g.append('path').attr('d','M'+x1+' '+y0+' Q'+((x1+x2)/2)+' '+(y0+lift)+' '+x2+' '+y0)\r
        .attr('fill','none').attr('stroke',colors[i % colors.length]).attr('stroke-width',1.4+lk.value*0.7).attr('stroke-opacity',0.75)\r
      g.append('circle').attr('cx',x1).attr('cy',y0).attr('r',4).attr('fill',colors[i % colors.length]).attr('stroke','var(--bg)')\r
      g.append('circle').attr('cx',x2).attr('cy',y0).attr('r',4).attr('fill',colors[i % colors.length]).attr('stroke','var(--bg)')\r
    })\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};