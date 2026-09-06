var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'force-graph2',\r
  title: 'Force Graph2',\r
  desc: 'Force Graph2 — a networks chart visualization',\r
  category: 'Networks',\r
  component: 'ForceGraph2',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-hierarchy"],\r
  tags: ["networks","force-graph2"],\r
}\r
\r
export default function ForceGraph2({ data: customData }) {\r
  const ref = useRef(null)\r
  const DEFAULT_DATA = {"nodes":[{"id":0},{"id":1},{"id":2},{"id":3},{"id":4},{"id":5}],"links":[{"source":0,"target":1},{"source":0,"target":2},{"source":1,"target":3},{"source":2,"target":4},{"source":3,"target":4},{"source":3,"target":5}]}\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const config = (customData && customData.nodes) ? customData : DEFAULT_DATA\r
    const nodes = config.nodes.map(n => ({ ...n }))\r
    const links = config.links.map(l => ({ ...l }))\r
    const simulation = d3.forceSimulation(nodes)\r
      .force('link', d3.forceLink(links).id(d => d.id).distance(60))\r
      .force('charge', d3.forceManyBody().strength(-150))\r
      .force('center', d3.forceCenter(W / 2, H / 2))\r
      .force('collision', d3.forceCollide().radius(20))\r
      .stop()\r
    for (let i = 0; i < 150; i++) simulation.tick()\r
    const g = svg.append('g')\r
    g.selectAll('.link').data(links).join('line').attr('class', 'link')\r
      .attr('x1', d => d.source.x).attr('y1', d => d.source.y).attr('x2', d => d.target.x).attr('y2', d => d.target.y)\r
      .attr('stroke', 'var(--border)').attr('stroke-width', 1.5).attr('stroke-opacity', 0.6)\r
    g.selectAll('.node').data(nodes).join('circle').attr('class', 'node')\r
      .attr('cx', d => d.x).attr('cy', d => d.y).attr('r', 10)\r
      .attr('fill', (d, i) => colors[i % colors.length]).attr('stroke', 'var(--bg)').attr('stroke-width', 2)\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};