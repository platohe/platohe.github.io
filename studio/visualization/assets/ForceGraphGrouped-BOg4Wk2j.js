var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
// ForceGraphGrouped: Color-grouped communities.\r
export const meta = {\r
  id: 'force-graph-grouped',\r
  title: 'Force Graph Grouped',\r
  desc: 'Force Graph Grouped — a networks chart visualization',\r
  category: 'Networks',\r
  component: 'ForceGraphGrouped',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-hierarchy"],\r
  tags: ["networks","force-graph-grouped"],\r
}\r
\r
export default function ForceGraphGrouped({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = { nodes: [\r
      { id: 'n0', group: 0 }, { id: 'n1', group: 0 }, { id: 'n2', group: 0 },\r
      { id: 'n3', group: 1 }, { id: 'n4', group: 1 }, { id: 'n5', group: 1 },\r
      { id: 'n6', group: 2 }, { id: 'n7', group: 2 }, { id: 'n8', group: 2 }],\r
      links: [{"source":0,"target":1,"value":1},{"source":0,"target":2,"value":1},{"source":3,"target":4,"value":1},{"source":3,"target":5,"value":1},{"source":6,"target":7,"value":1},{"source":6,"target":8,"value":1},{"source":2,"target":5,"value":1}] }\r
    const data = (customData && customData.nodes && customData.links) ? customData : DEFAULT_DATA\r
    const g = svg.append('g')\r
    // deterministic pseudo-layout (settled force result approximation)\r
    let seed = 119\r
    const rnd = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647 }\r
    const centers = [[120, 105], [275, 100], [200, 220]]\r
    const pos = data.nodes.map((nd, i) => {\r
      const c = centers[nd.group % centers.length]\r
      const ang = rnd() * Math.PI * 2\r
      return { nd, x: c[0] + Math.cos(ang) * (16 + rnd() * 30), y: c[1] + Math.sin(ang) * (14 + rnd() * 26) }\r
    })\r
    const maxV = Math.max(...data.links.map(lk => lk.value || 1))\r
    data.links.forEach(lk => {\r
      const s = pos[lk.source], t = pos[lk.target]\r
      g.append('line').attr('x1', s.x).attr('y1', s.y).attr('x2', t.x).attr('y2', t.y)\r
        .attr('stroke', 'var(--border)')\r
        .attr('stroke-width', 1.4)\r
        .attr('stroke-opacity', 0.7)\r
        \r
    })\r
    \r
    pos.forEach(({ nd, x, y }) => {\r
      g.append('circle').attr('cx', x).attr('cy', y).attr('r', 9)\r
        .attr('fill', colors[nd.group % colors.length]).attr('stroke', 'var(--bg)').attr('stroke-width', 1.5)\r
      g.append('text').attr('x', x).attr('y', y - 13).attr('text-anchor', 'middle')\r
        .attr('font-size', '7.5px').attr('fill', 'var(--text-secondary)').text(nd.id)\r
    })\r
    void data.links\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};