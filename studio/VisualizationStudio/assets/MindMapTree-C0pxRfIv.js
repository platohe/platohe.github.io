var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
// MindMapTree: Mind-map branches both sides.\r
export const meta = {\r
  id: 'mind-map-tree',\r
  title: 'Mind Map Tree',\r
  desc: 'Mind Map Tree — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'MindMapTree',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-hierarchy"],\r
  tags: ["bars","mind-map-tree"],\r
}\r
\r
export default function MindMapTree({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = {"name":"Launch","children":[{"name":"Marketing","children":[{"name":"Ads"},{"name":"PR"}]},{"name":"Product"},{"name":"Support"}]}\r
    const isValidHierarchy=o=>o&&typeof o==='object'&&!Array.isArray(o)&&typeof o.name==='string'\r
    const fallbackData=DEFAULT_DATA\r
    const rawData=isValidHierarchy(customData)?customData:fallbackData\r
    const g = svg.append('g')\r
    let root\r
    try{\r
      root = d3.hierarchy(rawData)\r
    }catch(e){ root=d3.hierarchy(fallbackData)}\r
    const layout = d3.tree().size([170, 110])\r
    try{ layout(root) }catch(e){}\r
    let sideIdx = 0\r
    const sideDir = new Map()\r
    root.each((d) => {\r
      if(d.depth===0){ sideDir.set(d, 1) }\r
      else if (d.depth === 1) { sideDir.set(d, sideIdx++ % 2 === 0 ? -1 : 1) } else if (d.depth > 1) { const pd=sideDir.get(d.parent); sideDir.set(d, Number.isFinite(pd)?pd:1) }\r
    })\r
    const px = (d) => {\r
      const dir=sideDir.get(d)\r
      const sd=Number.isFinite(dir)?dir:1\r
      const dy=Number.isFinite(d.y)?d.y:0\r
      const x=W/2 + sd*(26+dy)\r
      return Number.isFinite(x)?x:W/2\r
    }\r
    const py = (d) => {\r
      const dir=sideDir.get(d)\r
      const sd=Number.isFinite(dir)?dir:1\r
      const dx=Number.isFinite(d.x)?d.x:0\r
      const y=H/2 -10 + sd*dx*0.9*-1\r
      return Number.isFinite(y)?y:H/2\r
    }\r
    const links=root.links().filter(l=>l.source&&l.target&&Number.isFinite(px(l.source))&&Number.isFinite(py(l.source))&&Number.isFinite(px(l.target))&&Number.isFinite(py(l.target)))\r
    g.selectAll('path.link').data(links).join('path')\r
      .attr('fill', 'none')\r
      .attr('stroke', 'var(--border)')\r
      .attr('stroke-width', 1.4)\r
      .attr('stroke-opacity', 0.85)\r
      .attr('d', (d) => {\r
        const x1=px(d.source), y1=py(d.source), x2=px(d.target), y2=py(d.target)\r
        if(![x1,y1,x2,y2].every(Number.isFinite)) return null\r
        return 'M' + x1 + ' ' + y1 + ' C' + x1 + ' ' + y2 + ' ' + x2 + ' ' + y2 + ' ' + x2 + ' ' + y2\r
      })\r
    const nodesData=root.descendants().filter(d=>Number.isFinite(px(d))&&Number.isFinite(py(d)))\r
    const nodes = g.selectAll('g.node').data(nodesData).join('g')\r
      .attr('transform', (d) => {\r
        const x=px(d), y=py(d)\r
        return 'translate(' + (Number.isFinite(x)?x:W/2) + ',' + (Number.isFinite(y)?y:H/2) + ')'\r
      })\r
    nodes.append('circle').attr('r', (d) => d.children ? 4.5 : 3).attr('fill', (d) => d.children ? "#6366f1" : "#f59e0b").attr('stroke', 'var(--bg)')\r
    nodes.filter((d) => !d.children).append('text')\r
      .attr('x', (d) => sideDir.get(d) < 0 ? -8 : 8)\r
      .attr('y', 3)\r
      .attr('text-anchor', 'middle')\r
      .attr('font-size', '7.5px').attr('fill', 'var(--text-secondary)')\r
      .text((d) => d.data.name)\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};