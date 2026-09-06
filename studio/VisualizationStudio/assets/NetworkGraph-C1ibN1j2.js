var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'network-graph',\r
  title: 'Network Graph',\r
  desc: 'Network Graph — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'NetworkGraph',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","network-graph"],\r
}\r
\r
export default function NetworkGraph({ data: customData }) {\r
  const ref = useRef(null)\r
  const DEFAULT_DATA = {"nodes":[{"id":0,"group":0},{"id":1,"group":1},{"id":2,"group":2},{"id":3,"group":3},{"id":4,"group":0},{"id":5,"group":1},{"id":6,"group":2},{"id":7,"group":3},{"id":8,"group":0},{"id":9,"group":1},{"id":10,"group":2},{"id":11,"group":3},{"id":12,"group":0},{"id":13,"group":1},{"id":14,"group":2},{"id":15,"group":3},{"id":16,"group":0},{"id":17,"group":1},{"id":18,"group":2},{"id":19,"group":3}],"links":[{"source":12,"target":8},{"source":17,"target":13},{"source":3,"target":10},{"source":5,"target":12},{"source":17,"target":9},{"source":4,"target":17},{"source":14,"target":6},{"source":3,"target":10},{"source":13,"target":12},{"source":0,"target":9},{"source":16,"target":1},{"source":11,"target":0},{"source":5,"target":1},{"source":3,"target":15},{"source":10,"target":0},{"source":3,"target":16},{"source":9,"target":16},{"source":6,"target":8},{"source":0,"target":1},{"source":11,"target":11},{"source":4,"target":12},{"source":4,"target":6},{"source":14,"target":17},{"source":10,"target":4},{"source":5,"target":5},{"source":1,"target":13},{"source":13,"target":13},{"source":18,"target":1},{"source":18,"target":8},{"source":18,"target":2}]}\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const config = (customData && customData.nodes) ? customData : DEFAULT_DATA\r
    const nodes = config.nodes.map(n => ({ ...n }))\r
    const links = config.links.map(l => ({ ...l }))\r
    const simulation = d3.forceSimulation(nodes)\r
      .force('link', d3.forceLink(links).id(d => d.id).distance(40))\r
      .force('charge', d3.forceManyBody().strength(-100))\r
      .force('center', d3.forceCenter(W / 2, H / 2))\r
      .force('collide', d3.forceCollide().radius(12))\r
      .stop()\r
    for (let i = 0; i < 200; i++) simulation.tick()\r
    const g = svg.append('g')\r
    g.selectAll('.lnk').data(links).join('line').attr('x1', d => d.source.x).attr('y1', d => d.source.y).attr('x2', d => d.target.x).attr('y2', d => d.target.y)\r
      .attr('stroke', 'var(--border)').attr('stroke-width', 1).attr('stroke-opacity', 0.5)\r
    g.selectAll('.nd').data(nodes).join('circle').attr('cx', d => d.x).attr('cy', d => d.y).attr('r', 8)\r
      .attr('fill', (d, i) => colors[d.group % colors.length]).attr('opacity', 0.8).attr('stroke', 'var(--bg)').attr('stroke-width', 1.5)\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};