var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
// ForceGraphBubbleClusters: Cluster-grouped bubbles.\r
export const meta = {\r
  id: 'force-graph-bubble-clusters',\r
  title: 'Force Graph Bubble Clusters',\r
  desc: 'Force Graph Bubble Clusters — a networks chart visualization',\r
  category: 'Networks',\r
  component: 'ForceGraphBubbleClusters',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-hierarchy"],\r
  tags: ["networks","force-graph-bubble-clusters"],\r
}\r
\r
export default function ForceGraphBubbleClusters({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = { nodes: [\r
      { name: 'n1', group: 0, r: 16 }, { name: 'n2', group: 0, r: 12 }, { name: 'n3', group: 0, r: 9 },\r
      { name: 'n4', group: 1, r: 14 }, { name: 'n5', group: 1, r: 10 }, { name: 'n6', group: 1, r: 8 },\r
      { name: 'n7', group: 2, r: 12 }, { name: 'n8', group: 2, r: 9 }, { name: 'n9', group: 2, r: 7 }] }\r
    const data = (customData && customData.nodes) ? customData : DEFAULT_DATA\r
    // deterministic pre-simulation (seeded jitter instead of live forces)\r
    let seed = 91\r
    const rnd = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647 }\r
    const centers = [[130, 120], [270, 110], [205, 215]]\r
    const pos = data.nodes.map((nd) => {\r
      const c = centers[nd.group % centers.length]\r
      const ang = rnd() * Math.PI * 2\r
      const rad = 18 + rnd() * 34\r
      return { nd, x: c[0] + Math.cos(ang) * rad, y: c[1] + Math.sin(ang) * rad }\r
    })\r
    const g = svg.append('g')\r
    pos.forEach(({ nd, x, y }) => {\r
      g.append('circle').attr('cx', x).attr('cy', y).attr('r', nd.r)\r
        .attr('fill', colors[nd.group % colors.length]).attr('fill-opacity', 0.82)\r
      g.append('text').attr('x', x).attr('y', y + 3).attr('text-anchor', 'middle')\r
        .attr('font-size', '7px').attr('fill', '#fff').text(nd.name)\r
    })\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};