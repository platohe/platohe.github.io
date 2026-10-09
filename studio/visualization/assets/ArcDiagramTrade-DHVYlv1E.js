var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
// ArcDiagramTrade: Bilateral export values ($B) on major arcs.\r
export const meta = {\r
  id: 'arc-diagram-trade',\r
  title: 'Arc Diagram Trade',\r
  desc: 'Arc Diagram Trade — a networks chart visualization',\r
  category: 'Networks',\r
  component: 'ArcDiagramTrade',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-shape"],\r
  tags: ["networks","arc-diagram-trade"],\r
}\r
\r
export default function ArcDiagramTrade({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = {"nodes":[{"id":"cn2","name":"China"},{"id":"us2","name":"USA"},{"id":"de2","name":"Germany"},{"id":"jp2","name":"Japan"},{"id":"kr","name":"Korea"}],"links":[{"source":"cn2","target":"us2","value":560},{"source":"cn2","target":"de2","value":210},{"source":"de2","target":"us2","value":130},{"source":"jp2","target":"us2","value":140},{"source":"kr","target":"cn2","value":160},{"source":"jp2","target":"kr","value":90}]}\r
    const data = (customData && customData.nodes && customData.links) ? customData : DEFAULT_DATA\r
    const g = svg.append('g')\r
\r
    const comm = new Map([])\r
    const toneOf = (i) => colors[((i % colors.length) + colors.length) % colors.length]\r
    const nodeColor = (i) => { const c = comm.get(i); return c != null ? colors[c] : toneOf(i) }\r
    \r
    const idxOf = new Map(data.nodes.map((d,i)=>[d,i]))\r
    const linkColor = (sId) => { const i = idxOf.get(sId); const c = comm.get(i); return c != null ? colors[c] : toneOf(i) }\r
    const degree = {}; data.links.forEach(lk => { degree[lk.source] = (degree[lk.source]||0)+1; degree[lk.target] = (degree[lk.target]||0)+1 })\r
    const order = [...data.nodes].sort((a,b)=>(degree[b.id]||0)-(degree[a.id]||0)).map(d=>d.id)\r
    const pos = new Map(order.map((id,i)=>[id, 40 + i*(320/Math.max(order.length-1,1))]))\r
    const y0 = 235\r
    data.links.forEach(lk => {\r
      const s = typeof lk.source === 'object' ? lk.source.id : lk.source\r
      const t = typeof lk.target === 'object' ? lk.target.id : lk.target\r
      const x1 = pos.get(s), x2 = pos.get(t)\r
      if (x1 == null || x2 == null || x1 === x2) return\r
      const maxV = Math.max(...data.links.map(lk=>lk.value)); const w = 1.2 + 4.5*(lk.value/maxV)\r
      const lift = -(20 + Math.abs(x2-x1)*0.45)\r
      const cxm = (x1+x2)/2\r
      g.append('path')\r
        .attr('d', 'M'+x1+' '+y0+' Q'+cxm+' '+(y0+lift)+' '+x2+' '+y0)\r
        .attr('fill','none').attr('stroke', linkColor(s)).attr('stroke-width', w).attr('stroke-opacity', 0.75)\r
        .attr('stroke-linecap','round')\r
      g.append('text').attr('x',cxm).attr('y',y0+lift*0.62).attr('text-anchor','middle').attr('font-size','9px').attr('fill','var(--text-secondary)').text('$'+lk.value+'B')\r
    })\r
    \r
    data.nodes.forEach((n,i)=>{\r
      const x = pos.get(n.id)\r
      g.append('circle').attr('cx',x).attr('cy',y0).attr('r',4.5).attr('fill',nodeColor(i)).attr('stroke','var(--bg)')\r
      const flip = x > W/2\r
      g.append('text').attr('x', x).attr('y', y0+18).attr('text-anchor', flip?'end':'start').attr('dx', flip?-8:8)\r
        .attr('font-size','9px').attr('fill','var(--text-secondary)').text(n.name)\r
    })\r
    g.append('line').attr('x1',24).attr('x2',376).attr('y1',y0).attr('y2',y0).attr('stroke','var(--border)').attr('stroke-opacity',0.6)\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};