var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'force-network',\r
  title: 'Force Network',\r
  desc: 'Force Network — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'ForceNetwork',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-hierarchy"],\r
  tags: ["bars","force-network"],\r
}\r
\r
export default function ForceNetwork({ data: customData }) {\r
  const ref = useRef(null)\r
  const DEFAULT_DATA = {"nodes":[{"id":0,"group":0},{"id":1,"group":1},{"id":2,"group":2},{"id":3,"group":0},{"id":4,"group":1},{"id":5,"group":2},{"id":6,"group":0},{"id":7,"group":1},{"id":8,"group":2},{"id":9,"group":0},{"id":10,"group":1},{"id":11,"group":2},{"id":12,"group":0},{"id":13,"group":1},{"id":14,"group":2}],"links":[{"source":9,"target":6},{"source":12,"target":10},{"source":2,"target":7},{"source":4,"target":9},{"source":12,"target":7},{"source":3,"target":13},{"source":11,"target":4},{"source":2,"target":7},{"source":10,"target":9},{"source":0,"target":7},{"source":12,"target":0},{"source":8,"target":0},{"source":4,"target":0},{"source":2,"target":11},{"source":7,"target":0},{"source":2,"target":12},{"source":7,"target":12},{"source":4,"target":6},{"source":0,"target":0},{"source":8,"target":8}]}\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const config = (customData && customData.nodes) ? customData : DEFAULT_DATA\r
    const nodes = config.nodes.map(n => ({ ...n }))\r
    const links = config.links.map(l => ({ ...l }))\r
    const simulation = d3.forceSimulation(nodes)\r
      .force('link', d3.forceLink(links).id(d => d.id).distance(45))\r
      .force('charge', d3.forceManyBody().strength(-120))\r
      .force('center', d3.forceCenter(W / 2, H / 2))\r
      .force('collide', d3.forceCollide().radius(15))\r
      .stop()\r
    for (let i = 0; i < 180; i++) simulation.tick()\r
    const g = svg.append('g')\r
    g.selectAll('.link').data(links).join('line').attr('x1', d => d.source.x).attr('y1', d => d.source.y).attr('x2', d => d.target.x).attr('y2', d => d.target.y).attr('stroke', 'var(--border)').attr('stroke-width', 1).attr('stroke-opacity', 0.5)\r
    g.selectAll('.node').data(nodes).join('circle').attr('cx', d => d.x).attr('cy', d => d.y).attr('r', 9).attr('fill', (d, i) => colors[d.group % colors.length]).attr('opacity', 0.85).attr('stroke', 'var(--bg)').attr('stroke-width', 1.5)\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};