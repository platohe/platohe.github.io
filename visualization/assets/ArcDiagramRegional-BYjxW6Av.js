var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
// ArcDiagramRegional: Cities grouped by continent.\r
const GROUPS = [["ny","tor","mex"],["lon","par","ber"],["tok","syd"]]\r
export const meta = {\r
  id: 'arc-diagram-regional',\r
  title: 'Arc Diagram Regional',\r
  desc: 'Arc Diagram Regional — a networks chart visualization',\r
  category: 'Networks',\r
  component: 'ArcDiagramRegional',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-shape"],\r
  tags: ["networks","arc-diagram-regional"],\r
}\r
\r
export default function ArcDiagramRegional({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = {"nodes":[{"id":"ny","name":"NYC"},{"id":"tor","name":"Toronto"},{"id":"mex","name":"Mexico City"},{"id":"lon","name":"London"},{"id":"par","name":"Paris"},{"id":"ber","name":"Berlin"},{"id":"tok","name":"Tokyo"},{"id":"syd","name":"Sydney"}],"links":[{"source":"ny","target":"tor","value":3},{"source":"ny","target":"mex","value":2},{"source":"lon","target":"par","value":4},{"source":"lon","target":"ber","value":2},{"source":"par","target":"ber","value":2},{"source":"tok","target":"syd","value":1},{"source":"lon","target":"tok","value":1},{"source":"ny","target":"lon","value":2}]}\r
    const data = (customData && customData.nodes && customData.links) ? customData : DEFAULT_DATA\r
    const g = svg.append('g')\r
    const groupOf = new Map(); GROUPS.forEach((ids,gi)=>ids.forEach(id=>groupOf.set(id,gi)))\r
    const order = [...GROUPS[0], ...GROUPS[1], ...(GROUPS[2]||[])]\r
    const slots = []\r
    let cursor = 40\r
    GROUPS.forEach((ids) => {\r
      ids.forEach((_, k) => { slots.push(cursor + k * ((280 / Math.max(order.length - 1, 1)))) })\r
      cursor += 280 / Math.max(order.length - 1, 1) + 22\r
    })\r
    const pos = new Map(order.map((id,i)=>[id, slots[i]]))\r
    const y0 = 225\r
    data.links.forEach(lk => {\r
      const s = typeof lk.source==='object'?lk.source.id:lk.source\r
      const t = typeof lk.target==='object'?lk.target.id:lk.target\r
      const x1 = pos.get(s), x2 = pos.get(t)\r
      if (x1 == null || x2 == null || x1 === x2) return\r
      const sameGroup = groupOf.get(s) === groupOf.get(t)\r
      const lift = -(16 + Math.abs(x2-x1)*(sameGroup?0.35:0.55))\r
      g.append('path').attr('d','M'+x1+' '+y0+' Q'+((x1+x2)/2)+' '+(y0+lift)+' '+x2+' '+y0)\r
        .attr('fill','none').attr('stroke', colors[groupOf.get(s) % colors.length]).attr('stroke-width', 2).attr('stroke-opacity', 0.7)\r
    })\r
    GROUPS.forEach((ids, gi) => {\r
      const xs = ids.map(id=>pos.get(id))\r
      g.append('rect').attr('x', Math.min(...xs)-14).attr('y', y0-52).attr('width', Math.max(...xs)-Math.min(...xs)+28).attr('height', 84).attr('rx', 10)\r
        .attr('fill', colors[gi % colors.length]).attr('fill-opacity', 0.05).attr('stroke', colors[gi % colors.length]).attr('stroke-opacity', 0.35).attr('stroke-dasharray','3,3')\r
    })\r
    data.nodes.forEach((n)=>{\r
      const x = pos.get(n.id); const gi = groupOf.get(n.id) || 0\r
      g.append('circle').attr('cx',x).attr('cy',y0).attr('r',4.5).attr('fill',colors[gi % colors.length]).attr('stroke','var(--bg)')\r
      g.append('text').attr('x',x).attr('y',y0+16).attr('text-anchor','middle').attr('font-size','8px').attr('fill','var(--text-secondary)').text(n.name)\r
    })\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};