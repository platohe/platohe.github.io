var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
// ArcDiagramBipartite: Students left, subjects right.\r
export const meta = {\r
  id: 'arc-diagram-bipartite',\r
  title: 'Arc Diagram Bipartite',\r
  desc: 'Arc Diagram Bipartite — a networks chart visualization',\r
  category: 'Networks',\r
  component: 'ArcDiagramBipartite',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-shape"],\r
  tags: ["networks","arc-diagram-bipartite"],\r
}\r
\r
export default function ArcDiagramBipartite({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = {"nodes":[{"id":"al","name":"Ana"},{"id":"bo","name":"Ben"},{"id":"cy","name":"Cara"},{"id":"cs","name":"CS"},{"id":"ma","name":"Math"},{"id":"ph","name":"Physics"},{"id":"hi","name":"History"}],"links":[{"source":"al","target":"cs","value":2},{"source":"al","target":"ma","value":1},{"source":"bo","target":"ph","value":2},{"source":"cy","target":"hi","value":1},{"source":"bo","target":"ma","value":1},{"source":"cy","target":"cs","value":2}]}\r
    const data = (customData && customData.nodes && customData.links) ? customData : DEFAULT_DATA\r
    const g = svg.append('g')\r
    const left = data.nodes.slice(0, 3), right = data.nodes.slice(3)\r
    const lp = new Map(left.map((d,i)=>[d.id, 60 + i*(180/Math.max(left.length-1,1))]))\r
    const rp = new Map(right.map((d,i)=>[d.id, 55 + i*(190/Math.max(right.length-1,1))]))\r
    const lx = 90, rx = 310\r
    data.links.forEach((lk,i)=>{\r
      const s = typeof lk.source==='object'?lk.source.id:lk.source\r
      const t = typeof lk.target==='object'?lk.target.id:lk.target\r
      const y1 = lp.get(s), y2 = rp.get(t)\r
      if (y1 == null || y2 == null) return\r
      const bend = (lx+rx)/2 + (i%2===0?26:-26)\r
      g.append('path').attr('d','M'+lx+' '+y1+' C'+bend+' '+y1+' '+bend+' '+y2+' '+rx+' '+y2)\r
        .attr('fill','none').attr('stroke',colors[i % colors.length]).attr('stroke-width', 1.4 + lk.value*0.8).attr('stroke-opacity',0.7)\r
    })\r
    left.forEach((n,i)=>{\r
      const y = lp.get(n.id)\r
      g.append('circle').attr('cx',lx).attr('cy',y).attr('r',5.5).attr('fill',colors[i % colors.length])\r
      g.append('text').attr('x',lx-12).attr('y',y+3).attr('text-anchor','end').attr('font-size','9px').attr('fill','var(--text-secondary)').text(n.name)\r
    })\r
    right.forEach((n,i)=>{\r
      const y = rp.get(n.id)\r
      g.append('rect').attr('x',rx-5).attr('y',y-5).attr('width',10).attr('height',10).attr('fill',colors[(i+3) % colors.length])\r
      g.append('text').attr('x',rx+12).attr('y',y+3).attr('font-size','9px').attr('fill','var(--text-secondary)').text(n.name)\r
    })\r
    g.append('text').attr('x',lx).attr('y',26).attr('text-anchor','middle').attr('font-size','9px').attr('fill','var(--text-secondary)').text('Students')\r
    g.append('text').attr('x',rx).attr('y',26).attr('text-anchor','middle').attr('font-size','9px').attr('fill','var(--text-secondary)').text('Subjects')\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};